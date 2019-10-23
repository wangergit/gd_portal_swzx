/*
*地图操作类
*/
var HJMap = {
    /*
    *地图控件
    */
    mapdiv: null,
    /*
    *地图
    */
    map: null,
    geometryService: null,
    /*
    *地图当前工具
    */
    MapTool:null,
	OnLoad:null,
    /*
    *初始化地图
    */
    Init: function (mapdivid) {
        HJMap.mapdiv = mapdivid;

       
        //加载arcgis 地图api
        HJConfig.LoadEsriAPI();
        //HJMenuBuilder.Init();
        require([//添加引用
            "dojo/parser",
            "esri/config",
            "esri/map",           
            "dojo/domReady!"
        ], function (parser, esriConfig, Map) {
            parser.parse();
            //This sample may require a proxy page to handle communications with the ArcGIS Server services. You will need to  
            //replace the url below with the location of a proxy on your machine. See the 'Using the proxy page' help topic 
            //for details on setting up a proxy page.
            esriConfig.defaults.io.proxyUrl = "/proxy/";
            //esriConfig.defaults.io.alwaysUseProxy = false;

            //This service is for development and testing purposes only. We recommend that you create your own geometry service for use within your applications
            esriConfig.defaults.geometryService = new esri.tasks.GeometryService(HJConfig.GeometryService);
            HJMap.geometryService = esriConfig.defaults.geometryService;

            var mapOptions = {
                    logo: false,
                    nav: false,
                    showAttribution: true,
                    force3DTransforms: true,
                    optimizePanAnimation: true,
                    slider: false,
                    sliderPosition: 'top-left',
                    sliderStyle: 'large',
                    //sliderLabels: ["", "<div class='map_ruleLabel'>省</div>", "", "<div class='map_ruleLabel'>市</div>", "", "", "<div class='map_ruleLabel'>街</div>", "", "", "", "", ""],
                    center:HJConfig.CENTER, // longitude, latitude
                    zoom: HJConfig.ZOOM,
                    autoResize: true,
    				navigationMode: 'css-transforms'
                };
    			
            //地图对象
            HJMap.map = new Map(HJMap.mapdiv, mapOptions);

            //加载符号
            HJSymbol.Init();

            //加载图层        
            HJLayers.Init(HJMap.map);
            //加载工具
            HJMapTools.InitToolBar(HJMap.map);

            //鼠标位置
            HJMap.map.on('mouse-move', function (evt) {
                if (evt.mapPoint.x == undefined) return;
                jQuery("#mousepostion").text(evt.mapPoint.x.toFixed(6) + "," + evt.mapPoint.y.toFixed(6));
            });

			//定位图层加载
			HJMap.resultlayer = new esri.layers.GraphicsLayer();
            HJMap.resultlayer.id = "mileageLayer";
            HJMap.map.addLayer(HJMap.resultlayer);
						
			//天气图层加载				
			HJMap.AddWeatherData();	
			
			
			if(HJMap.OnLoad!=null){
				HJMap.OnLoad();
			}
        });
    },
/*
    *初始化地图
    */
    InitBase: function (mapdivid) {
        HJMap.mapdiv = mapdivid;

       
        //加载arcgis 地图api
        HJConfig.LoadEsriAPI();
        //HJMenuBuilder.Init();
        require([//添加引用
            "dojo/parser",
            "esri/config",
            "esri/map",           
            "dojo/domReady!"
        ], function (parser, esriConfig, Map) {
            parser.parse();
            //This sample may require a proxy page to handle communications with the ArcGIS Server services. You will need to  
            //replace the url below with the location of a proxy on your machine. See the 'Using the proxy page' help topic 
            //for details on setting up a proxy page.
            esriConfig.defaults.io.proxyUrl = "/proxy/";
            //esriConfig.defaults.io.alwaysUseProxy = false;

            //This service is for development and testing purposes only. We recommend that you create your own geometry service for use within your applications
            esriConfig.defaults.geometryService = new esri.tasks.GeometryService(HJConfig.GeometryService);
            HJMap.geometryService = esriConfig.defaults.geometryService;

            var mapOptions = {
                    logo: false,
                    nav: false,
                    showAttribution: true,
                    force3DTransforms: true,
                    optimizePanAnimation: true,
                    slider: false,
                    sliderPosition: 'top-left',
                    sliderStyle: 'large',
                    //sliderLabels: ["", "<div class='map_ruleLabel'>省</div>", "", "<div class='map_ruleLabel'>市</div>", "", "", "<div class='map_ruleLabel'>街</div>", "", "", "", "", ""],
                    center:HJConfig.CENTER, // longitude, latitude
                    zoom: HJConfig.ZOOM,
                    autoResize: true,
    				navigationMode: 'css-transforms'
                };
    			
            //地图对象
            HJMap.map = new Map(HJMap.mapdiv, mapOptions);

            //加载符号
            HJSymbol.Init();

            //加载图层        
            HJLayers.Init(HJMap.map);
			//
			HJDrawTool.Init(HJMap.map);
						
			if(HJMap.OnLoad!=null){
				HJMap.OnLoad();
			}
        });
    },	
	AddWeatherData:function()
        {
				//天气图层加载
			HJMap.weatherlayer = new esri.layers.GraphicsLayer();
            HJMap.weatherlayer.id = "weatherlayer";
            HJMap.map.addLayer(HJMap.weatherlayer);			
			
			 HJMap.weatherlayer.on("mouse-move", function (e) {
                var g = e.graphic;
                HJMap.map.infoWindow.setContent(g.getContent());
                HJMap.map.infoWindow.setTitle(g.getTitle());
                HJMap.map.infoWindow.show(e.screenPoint, HJMap.map.getInfoWindowAnchor(e.screenPoint));
            });
             HJMap.weatherlayer.on("mouse-out", function (e) {
                HJMap.map.infoWindow.hide();
            });
			
            //在信息窗口创建infoTemplate
            //${属性名}将取代目前的功能和属性值.
            //var infoTemplate = new esri.InfoTemplate("${cityname}", "地名:${cityname}<br>天气: ${stateDetailed}<br/>温度:${temNow}<br/>风力:${windPower}<br/>风向:${windDir}");

            //$.get("http://180.76.157.180/Weather/weather.ashx?city=guangdong", function (data) {
            //    HJMap.weatherlayer.clear();      
			//	var json = eval("(" + data + ")");				
            //    $.each(json.data, function (i, item) {
            //        var graphic = new esri.Graphic(item);
            //        graphic.setInfoTemplate(infoTemplate);
            //        HJMap.weatherlayer.add(graphic);
            //    });              
            //});
        },

    /*
    *定位
    */
    centerAt: function (x,y) {
        HJMap.map.centerAt(new esri.geometry.Point(x,y));
    },
    /*
   *定位并设置缩放级别
   */
    centerAndZoom: function (x, y, level) {
		if(level)
			HJMap.map.centerAndZoom(new esri.geometry.Point(x, y, HJMap.map.spatialReference),level);
		else
			HJMap.map.centerAndZoom(new esri.geometry.Point(x, y, HJMap.map.spatialReference));
    },
    /*
    *定位指定范围[xmax, xmin, ymax, ymin]
    */
    setExtent: function (xmax, xmin, ymax, ymin) {
        var extent = new Extent(xmin, ymin, xmax, ymax,HJMap.map.spatialReference);
        HJMap.map.setExtent(extent);
    },
	/*
	*缩放到图形要素
	*/
	zoom2Geometry:function(geometry){		
		if(geometry instanceof esri.geometry.Point){
			var pt=geometry;
			HJMap.centerAndZoom(pt.x,pt.y,10);
		}else if(geometry instanceof esri.geometry.Polyline){
			var polyline=geometry;
			HJMap.map.setExtent(polyline.getExtent(),true);
		}else if(geometry instanceof esri.geometry.Polygon){
			var polygon=geometry;
			HJMap.map.setExtent(polygon.getExtent(),true);
		}else if(geometry instanceof esri.geometry.Extent){
			HJMap.map.setExtent(geometry,true);			
		}
			
	},
    /*
    *设置图层是否可见 [图层id(配置中的图层名称),是否可见（true,false）]
    */
    setLayerVisible: function (layerid,visible) {
        var layer = HJMap.map.getLayer(layerid);
        if (layer != null && layer != undefined) {
            layer.setVisibility(visible);
        }
    },
	centerAtGraphic:function(x,y,images,level){
		 HJMap.resultlayer.clear();
		 var graphic = new esri.Graphic(new esri.geometry.Point(x, y, HJMap.map.spatialReference), HJSymbol.BuildPictureSymbol(images,0,0));
		 HJMap.resultlayer.add(graphic);
		 HJMap.centerAndZoom(x,y,level);
			
	},
	Util: {
		isDefined: function(value) {
			return typeof value !== "undefined";
		},
		isNull: function(value) {
			return value === null;
		},
		isVoid: function(value) {
			return !HJMap.Util.isDefined(value) || HJMap.Util.isNull(value);
		},
		isObject: function(value) {
			return !!value && Object.prototype.toString.call(value) === '[object Object]';
		}
	}
};
HJMap.Util.isFunction = (HJMap.Util.isDefined(document) && typeof document.getElementsByTagName("body") === "function") ? 
	function(value) {
		return Object.prototype.toString.call(value) === "[object Function]";
	} : function(value) {
		return typeof value === "function";
	};