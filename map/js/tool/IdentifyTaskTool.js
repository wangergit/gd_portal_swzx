/*
*IdentifyTaskTool,点击查询
*/
var IdentifyTaskTool = {
    map: null,
    //查询服务地址
    identifyUrl: null,
    //查询图层id
    layerIds: HJConfig.IdentifyConfig.layerids,
    //查询工具
    identifyTask: null,
    //查询参数
    identifyParams: null,
    //事件句柄
    clickHandler:null,
    //是否停用点击查询
    isStop:false,
    /*
    *初始化查询工具
    */
    Init: function (map,url) {
        this.map = map;
        this.identifyUrl = url;

        //设置当前工具
        HJMapTools.SetCurTool(this);

        //设置鼠标样式
        this.map.setMapCursor("help");

        require([  
         "esri/tasks/IdentifyTask",
         "esri/tasks/IdentifyParameters",         
         "dojo/dom-construct",
         "dojo/domReady!"
        ], function (       
         IdentifyTask, 
         IdentifyParameters,      
         domConstruct
       ) {
            /*
            *创建identify查询工具
            */
            IdentifyTaskTool.clickHandler = IdentifyTaskTool.map.on("click", IdentifyTaskTool.executeIdentifyTask);
            //create identify tasks and setup parameters
            IdentifyTaskTool.identifyTask = new IdentifyTask(IdentifyTaskTool.identifyUrl);

            //查询参数设置
            IdentifyTaskTool.identifyParams = new IdentifyParameters();
            IdentifyTaskTool.identifyParams.tolerance = 3;
            IdentifyTaskTool.identifyParams.returnGeometry = true;
            IdentifyTaskTool.identifyParams.layerIds = IdentifyTaskTool.layerIds;
            IdentifyTaskTool.identifyParams.layerOption = IdentifyParameters.LAYER_OPTION_ALL;
            IdentifyTaskTool.identifyParams.width = IdentifyTaskTool.map.width;
            IdentifyTaskTool.identifyParams.height = IdentifyTaskTool.map.height;
        });
    },
    /*
    *查询
    */
    executeIdentifyTask: function (event) {
    	if(IdentifyTaskTool.isStop){
    		IdentifyTaskTool.isStop=false;
    		return;
    	}
        IdentifyTaskTool.identifyParams.geometry = event.mapPoint;
        IdentifyTaskTool.identifyParams.mapExtent = IdentifyTaskTool.map.extent;

        var deferred = IdentifyTaskTool.identifyTask
            .execute(IdentifyTaskTool.identifyParams)
            .addCallback(function (response) {
                // response is an array of identify result objects
                // Let's return an array of features.
                return dojo._base.array.map(response, IdentifyTaskTool.IdentifyInfo);
            });

        IdentifyTaskTool.map.infoWindow.setFeatures([deferred]);
        IdentifyTaskTool.map.infoWindow.show(event.mapPoint);
    },
    /*
    *显示结果
    */
    IdentifyInfo: function (result) {
        var feature = result.feature;
        var layerName = result.layerName;

        feature.attributes.layerName = layerName;

        //根配置显示对应的图层字段
        var buildingFootprintTemplate = new esri.InfoTemplate("信息",HJConfig.IdentifyConfig.result[result.layerId]);
        feature.setInfoTemplate(buildingFootprintTemplate);

        var tmp_feature = feature;
        for(var key in feature.attributes){
        	if(feature.attributes[key]=="Null")
        		tmp_feature.attributes[key] = "";
        }
        
        return tmp_feature;
    },
    /*
    *释放工具
    */
    Dispose: function () {
        if (IdentifyTaskTool.clickHandler) {
            dojo.disconnect(IdentifyTaskTool.clickHandler);
        }
        //设置鼠标样式
        this.map.setMapCursor("default");
    },
    /*
     * 暂停 点击查询事件
     * */
    Stop:function(){
    	IdentifyTaskTool.isStop=true;
    }
};