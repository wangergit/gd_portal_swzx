/*
*通用graphicslayer图层【航标、水位】
*数据格式：
*JSON:
*  {
*    "geometry":{"x":104.414,"y":69.257},
*    "attributes":{"字段名":"字段值",
*                  "字段名":"字段值",
*                  ...},
*     "image":"航标图片地址",
*     "title":"航标标题"
*   }
*/
var HJGraphicsLayer =function(){    
    //地图
    this.map= null;
    //地址
    this.url= null;
    //图层名
    this.layername= null;
    //元素图层
    this.graphicsLayer = null;
    //聚合图层
    this.clusterLayer = null;
    //信息模版
    this.infoTemplate = null;
    //显示航标最大比例尺
    this.maxscale=40000;
    //是否已有数据
    this.hasdata=false;
    /*
    *初始化[地图，服务地址,图层名,属性显示配置]
    */
    this.Init= function (map, url,layername,attconfig,visible) {
        this.map = map;
        this.url = url;
        this.layername = layername;
       
        //添加图层
        if (this.graphicsLayer == null) {
            //元素图层
            this.graphicsLayer = new esri.layers.GraphicsLayer();
            this.graphicsLayer.id = layername;
            if (attconfig != undefined) {
               // this.infoTemplate = esri.InfoTemplate("信息:",attconfig);
            }
            this.map.addLayer(this.graphicsLayer);

           
        } else {
            this.graphicsLayer.clear();
            if (this.clusterLayer != null) {
                this.clusterLayer.clear();
            }
        }

       
        //当前对象
        var obj = this;
      
        //图层点击事件
        this.graphicsLayer.on("click", function (e) {
            if (e.graphic != undefined && e.graphic != null) {
                if (HJMap.MapTool.identifyTask != undefined) {
                    IdentifyTaskTool.Stop();
                    //HJMap.map.infoWindow.show(e.graphic.geometry);              
                }
            }
        });

        
        
        //显隐控制        
        obj.graphicsLayer.on("visibility-change", function () {
        	if (obj.graphicsLayer.id.indexOf("航标")>=0) {
        		var cuslayer=HJMap.map.getLayer("clusters");
        
	            if (obj.graphicsLayer.visible) {
	            	obj.RequestData(obj,obj.url);
	            	if(cuslayer)
	            		cuslayer.setScaleRange(10000000, obj.maxscale);              
	            } else {
	            	if(cuslayer)
	            		cuslayer.setScaleRange(1, 1);
	            }
        	}else   if (obj.graphicsLayer.visible) {
            	obj.RequestData(obj,obj.url);
        	}
        });     
        
        //图层显示控制
        this.graphicsLayer.visible = visible;
        this.RequestData(obj, this.url);
    };
    /*
     * 请求数据
     * */
    this.RequestData=function(obj,url){
    	if(obj.hasdata){
    		return;
    	}

    
    	//当前对象
        //var obj = this;
        jQuery.getJSON(url, function (data) {        	
            obj.Add2Map(data);
            obj.hasdata=true;
            if (obj.graphicsLayer.id.indexOf("航标")>=0) {
            	obj.graphicsLayer.setScaleRange(obj.maxscale, 0);
            	 if(obj.map.extent){
            		 obj.BuilderClusterLayer(obj,data);
            	 }else{
            		 obj.map.on("load",function(){
            			 obj.BuilderClusterLayer(obj,data);
            		 }
            		 );            		 
            	 }
            }
        });   
    };
    /*
    *添加到地图
    */
    this.Add2Map= function (jsondata) {
        var graphic, graphictitle, json;
        for (var i = 0; i < jsondata.length; i++) {
            json = jsondata[i];
            //json.geometry.spatialReference = { "wkid": 4326 };

            //添加航标到地图
            graphic = new esri.Graphic(json);
            if(json.image == ''){
            	json.image = "/assets/images/unknown-icon.png";
            }
            
            //baseHbIcoUrl+json.image 图片路径控制，相对路径转绝对路径
            var imagePath = json.image;
            if(json.image.indexOf("http") == -1){
            	imagePath = baseHbIcoUrl+imagePath;
            }
            graphic.symbol = HJSymbol.BuildPictureSymbol(imagePath,0,0,0,48,48);
            //graphic.infoTemplate=this.infoTemplate;
            this.graphicsLayer.add(graphic);

            //添加航标名称
            graphictitle = new esri.Graphic(json);
            graphictitle.symbol = HJSymbol.BuildTextSymbol(json.title, 15,10,0);
            this.graphicsLayer.add(graphictitle);
        }
    };
    /*
    *缩放到图层
    */
    this.ZoomToLayer= function () {
        //得到范围
        if (this.graphicsLayer == null) return;
        var graphicExtent = esri.graphicsUtils.graphicsExtent(this.graphicsLayer.graphics);
        if (graphicExtent.contains(HJConfig.ExtentConfig())) {
            graphicExtent = HJConfig.ExtentConfig();
        }
        //缩放到范围
        this.map.setExtent(graphicExtent);
    };  
    /*
    *释放资源
    */
    this.Dispose = function () {
        if (this.graphicsLayer) {
            this.map.removeLayer(this.graphicsLayer);
            this.graphicsLayer = null;

            this.map.removeLayer(this.clusterLayer);
            this.clusterLayer = null;
        }
    };
    //添加聚合图层
    this.BuilderClusterLayer = function (obj,data) {
        //聚合数据
        var sdata = dojo._base.array.map(data, function (p) {
            var latlng = new esri.geometry.Point(parseFloat(p.geometry.x), parseFloat(p.geometry.y), HJMap.map.spatialReference);
            //var webMercator = webMercatorUtils.geographicToWebMercator(latlng);
            
            var attributes = {
                //"Caption": p.caption,
                "Name": p.title,
                "Image": 'http://'+baseDataUrl+p.image
                // "Link": p.link
            };

            return {
                "x": latlng.x,
                "y": latlng.y,
                "attributes": attributes
            };
        });

        //显示字段
        var popupTemplate = new esri.dijit.PopupTemplate({
            "title": "",
            "fieldInfos": [{
                "fieldName": "Name",
                "label": "名 称:",
                visible: true
            }],
            "mediaInfos": [{
                "title": "",
                "caption": "",
                "type": "image",
                "value": {
                    "sourceURL": "{Image}"
                }
            }]
        });

        if (obj.clusterLayer == null) {
        	 var clusterResolution=1;        	
            //聚合图层 分辨率
            var latlng1 = new esri.geometry.Point(obj.map.extent.xmax, obj.map.extent.ymax, obj.map.spatialReference); //右上角  
            var latlng2 = new esri.geometry.Point(obj.map.extent.xmin, obj.map.extent.ymin, obj.map.spatialReference); //左下角  
            var webMercator1 = esri.geometry.webMercatorUtils.geographicToWebMercator(latlng1);
            var webMercator2 = esri.geometry.webMercatorUtils.geographicToWebMercator(latlng2);
            clusterResolution = (webMercator1.x - webMercator2.x) / this.map.width;
    	
            //聚合图层
            this.clusterLayer = new extras.ClusterLayer({
                "data": sdata,
                "distance": 50,
                "id": "clusters",
                "labelColor": "#fff",
                "labelOffset": 10,              
                "singleColor": "#888",
                "singleTemplate": popupTemplate,
                "resolution": clusterResolution,
                "spatialReference": obj.map.spatialReference,
                "clusterCountField": "clusterCount1"
            });

            //聚合渲染
            var renderer = new esri.renderers.ClassBreaksRenderer(HJSymbol.DefaultPointSymbol, "clusterCount1");

            var blue = HJSymbol.BuildPictureSymbol("images/BluePin1LargeB.png", 0, 0, 15, 36, 36);
            var green = HJSymbol.BuildPictureSymbol("images/GreenPin1LargeB.png", 0, 0, 15, 48, 48);
            var red = HJSymbol.BuildPictureSymbol("images/RedPin1LargeB.png", 0, 0, 15, 64, 64);
            renderer.addBreak(0, 100, blue);
            renderer.addBreak(100, 200, green);
            renderer.addBreak(200, 1000000, red);

            obj.clusterLayer.setRenderer(renderer);

            obj.map.addLayer(obj.clusterLayer);
        }

        if (obj.graphicsLayer.visible) {        	
        		obj.clusterLayer.setScaleRange(10000000, obj.maxscale);              
        } else {        	
        		obj.clusterLayer.setScaleRange(1, 1);
        }  
    };
   
};