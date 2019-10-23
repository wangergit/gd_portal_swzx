/*
*服务搜索工具
*/
var FindTaskTool = {
    map:null,
    findTask: null,
    findParams: null,
    //查询结果图层
    resultlayer:null,
	callBackFunc:null,
	graphicClick:null,
    /*
    *初化工具
    */
    Init: function (map, finddiv) {
        this.map = map;
		
        //创建查找
        findTask = new esri.tasks.FindTask(HJConfig.FindTaskConfig.url);
        //查找参数
        FindTaskTool.findParams = new esri.tasks.FindParameters();
        FindTaskTool.findParams.layerIds = HJConfig.FindTaskConfig.layerids;
        FindTaskTool.findParams.searchFields = HJConfig.FindTaskConfig.searchFields;   
        FindTaskTool.findParams.returnGeometry = true;

        //查找面板
/*        dojo.byId(finddiv).innerHTML = '<input type="text"  style="height:22px;" id="findtaskvalue" />' +
            '<input type="button" style="height:24px;width:24px;background-image:url(images/Search.png);"  value=" "  onclick="FindTaskTool.doFind()" />' +
            '<input type="button" style="height:24px;width:24px;background-image:url(images/Clear.png);" value=" "  onclick="FindTaskTool.Clear()" />';*/

        //查询结果图层
        FindTaskTool.resultlayer = new esri.layers.GraphicsLayer();
        FindTaskTool.resultlayer.id = "查找结果图层";
        map.addLayer(FindTaskTool.resultlayer);
		 
		         //图层点击事件
        FindTaskTool.resultlayer.on("click", function (e) {
            if (e.graphic != undefined && e.graphic != null && (HJMap.MapTool==null||HJMap.MapTool.navigation._navType== "pan")) {
				if(FindTaskTool.graphicClick)
					FindTaskTool.graphicClick(e.graphic);
            }
        });
    },
    /*
    *执行查找
    */
    doFind: function () {
        var value = dojo.byId("findtaskvalue").value;
        if (value == undefined || value == "") {
            alert("请输入查找内容。");
            return;
        }
        FindTaskTool.FindByValue(value);

    },
    /*
    *根据内容查找
    */
    FindByValue: function (value) {
        if (value == undefined || value == "") {
            return;
        }
        FindTaskTool.findParams.searchText = value;// ;      
        findTask.execute(FindTaskTool.findParams, FindTaskTool.showResults,FindTaskTool.warning);
        
        
        FindTaskTool.map.setMapCursor("wait");
    },
    /*
    *显示结果
    */
    showResults: function (results) {
        FindTaskTool.Clear();
        if (results.length < 1) {
            alert("没有查询到相关数据。");
            return;
        }
        var result, attribs, graphic;
        dojo.forEach(results, function (result) {
            attribs = result.feature.attributes;

            //设置符号，构建地图元素
            if (result.feature.geometry.type == "polygon") {
                graphic = new esri.Graphic(result.feature.geometry, HJSymbol.DefaultFillSymbol);
            } else if (result.feature.geometry.type == "polyline") {
                graphic = new esri.Graphic(result.feature.geometry, HJSymbol.DefaultLineSymbol);
            } else if (result.feature.geometry.type == "point") {
                graphic = new esri.Graphic(result.feature.geometry, HJSymbol.DefaultPointSymbol);
            }

            graphic.attributes = attribs;
			graphic.attributes["layerId"] = result.layerId;
			graphic.attributes["layerName"] =  result.layerName;
            //显示字段         
            //var buildingFootprintTemplate = esri.InfoTemplate("信息", HJConfig.FindTaskConfig.result[result.layerId]);
            //graphic.setInfoTemplate(buildingFootprintTemplate);
           
            FindTaskTool.resultlayer.add(graphic);
        });

        //得到范围
        var graphicExtent =esri.graphicsUtils.graphicsExtent(FindTaskTool.resultlayer.graphics);
        if (graphicExtent.contains(HJConfig.ExtentConfig())) {
            graphicExtent = HJConfig.ExtentConfig();
        } 
        //缩放到范围
        FindTaskTool.map.setExtent(graphicExtent);         
		if(FindTaskTool.callBackFunc)
			FindTaskTool.callBackFunc(results);
    },
    warning:function(error){
    	FindTaskTool.Clear();
    	alert("查询超时！");
    },
    /*
    *清除结果
    */
    Clear: function () {
        if (FindTaskTool.resultlayer!=null) {
            FindTaskTool.resultlayer.clear();
        }

        //释放工具
        HJMapTools.SetCurTool(null);        
        FindTaskTool.map.setMapCursor("default");
    },
	queryLayer:function(layerid){
		
	  var citiesLayerUrl =HJConfig.FindTaskConfig.url + "/"+layerid; // Represents the REST endpoint for a layer of cities.
	  var query = new esri.tasks.query();
	  var queryTask = new esri.tasks.QueryTask( citiesLayerUrl );
	  query.where = " 1=1 ";
	 // query.outSpatialReference = {wkid:102100}; 
	  query.returnGeometry = true;
	  query.outFields = ["*"];
	  queryTask.execute(query, function(results){
		  FindTaskTool.showQueryResults(results.features);
		  
	  });
		
	},
	 showQueryResults: function (results) {
        FindTaskTool.Clear();
        if (results.length < 1) {
            alert("没有查询到相关数据。");
            return;
        }
        var result, attribs, graphic;
        dojo.forEach(results, function (result) {
            attribs = result.attributes;

            //设置符号，构建地图元素
            if (result.geometry.type == "polygon") {
                graphic = new esri.Graphic(result.geometry, HJSymbol.DefaultFillSymbol);
            } else if (result.geometry.type == "polyline") {
                graphic = new esri.Graphic(result.geometry, HJSymbol.DefaultLineSymbol);
            } else if (result.geometry.type == "point") {
                graphic = new esri.Graphic(result.geometry, HJSymbol.DefaultPointSymbol);
            }

            graphic.attributes = attribs;
			graphic.attributes["layerId"] = result.layerId;
			graphic.attributes["layerName"] =  result.layerName;
            //显示字段         
            //var buildingFootprintTemplate = esri.InfoTemplate("信息", HJConfig.FindTaskConfig.result[result.layerId]);
            //graphic.setInfoTemplate(buildingFootprintTemplate);
           
            FindTaskTool.resultlayer.add(graphic);
        });

        //得到范围
		try{
			var graphicExtent =esri.graphicsUtils.graphicsExtent(FindTaskTool.resultlayer.graphics);
			if (graphicExtent.contains(HJConfig.ExtentConfig())) {
				graphicExtent = HJConfig.ExtentConfig();
			} 
			//缩放到范围
			FindTaskTool.map.setExtent(graphicExtent);     
		}catch(e){
			
		}		
		if(FindTaskTool.callBackFunc)
			FindTaskTool.callBackFunc(results);
    }
};