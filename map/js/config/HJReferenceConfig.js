/*
*加载引用样式和脚本配置 
*/
var HJReferenceConfig = {
    //SERVERIP: window.location.host + location.pathname.replace(/\/[^/]+$/, "") + '/js/arcgisapi/3.15',
    /*
    *初始化，加载js,css
    */
    Init: function () {
        //加载样式
        var css = this.css();
        for (var i = 0; i < css.length; i++) {
            document.write('<link rel=stylesheet href="' + css[i] + '" />');
        }
        //加引用脚本
        var jscripts = this.javascripts();
        for (var i = 0; i < jscripts.length; i++) {
            document.write('<script type="text/javascript" src="' + jscripts[i] + '"></script>');
        }
    },
    /*
    * css样式
    */
    css: function () {
        var css = [
                //this.SERVERIP + '/dijit/themes/claro/claro.css',
               // this.SERVERIP + '/esri/css/esri.css',
               //'../map/css/menu.css',
               '../map/css/map.css'
        ];
        return css;
    },
    /*
    * 脚本
    */
    javascripts: function () {
        var jscripts = [
             //this.SERVERIP + '/init.js',

             '../map/js/layer/HJLayerType.js',
             '../map/js/symbol/HJSymbol.js',
             //工具
             '../map/js/tool/HJMeasure.js',
             '../map/js/tool/HJDrawTool.js',         
             '../map/js/tool/IdentifyTaskTool.js',
             '../map/js/tool/FeatureServeice.js',
             '../map/js/tool/FindTaskTool.js',
             '../map/js/tool/HJSearch.js',
             '../map/js/tool/HJNavigation.js',
             '../map/js/tool/HJMenuBuilder.js',
             '../map/js/tool/HJPrinter.js',
			 '../map/js/tool/HJMapTools.js',
             '../map/js/tool/HJLegend.js',
             '../map/js/tool/PathViewTool.js',
             //图层
             '../map/js/layer/HJLayers.js',
             '../map/js/layer/HJGraphicsLayer.js',
             '../map/js/layer/HJGraphicsAisLayer.js', 

             //弹出窗口
             //'../map/js/Dialog/zDialog.js',
             //'../map/js/Dialog/zDrag.js',
             '../map/js/HJMap.js'
        ];

        return jscripts;
    },
    /*
    *加载api
    */
    LoadEsriAPI: function () {
        dojo.require("dijit.Tooltip");

        dojo.require("dojo.request");
        dojo.require("dojo._base.array");

        dojo.require("esri.tasks.geometry");
        dojo.require("esri.geometry.webMercatorUtils");
        dojo.require("esri.graphic");
        dojo.require("esri.graphicsUtils");
        //图例api
        dojo.require("esri.dijit.Legend");

        //引用绘制api
        dojo.require("esri.toolbars.draw");
        //引用放大缩小api
        dojo.require("esri.toolbars.navigation");

        //引用符号api
        dojo.require("esri.symbols.jsonUtils");

        dojo.require("esri.InfoTemplate");

        //引用 FindTask 查找api
        dojo.require("esri.tasks.FindTask");
        dojo.require("esri.tasks.FindParameters");
		dojo.require("esri.tasks.query");
		dojo.require("esri.tasks.QueryTask");

     
		
        //引用搜索api
        dojo.require("esri.dijit.Search");

        //引用图层api
        dojo.require("esri.layers.ArcGISTiledMapServiceLayer");
        dojo.require("esri.layers.ArcGISDynamicMapServiceLayer");
        dojo.require("esri.layers.FeatureLayer");
        dojo.require("esri.layers.WebTiledLayer");
        dojo.require("esri.layers.WFSLayer");
        dojo.require("esri.layers.WMSLayer");
        dojo.require("esri.layers.WMTSLayerInfo");
        dojo.require("esri.layers.WMTSLayer");
        dojo.require("esri.layers.GraphicsLayer");
        //自定义图层【聚合】
        //dojo.require("extras.ClusterLayer");
        //dojo.require("esri.renderers.ClassBreaksRenderer");
    }
};

HJReferenceConfig.Init();