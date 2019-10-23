/*
*地图工具
*/
var HJMapTools = {
    map:null,
    /*
    *当前工具句柄
    */
    CurToolHandler:null,
    /*
    *初化地图工具
    */
    InitToolBar: function (map) {
        this.map = map;

        require([//添加引用
           "esri/dijit/Scalebar",
           "esri/dijit/OverviewMap",
           "esri/arcgis/utils",
           "esri/dijit/LayerList",
           "esri/dijit/Measurement",
           "dojo/dom",
           "dojo/parser",
           "esri/toolbars/navigation",
           "dijit/layout/BorderContainer",
           "dijit/layout/ContentPane",
           "dijit/TitlePane",
           "dijit/form/CheckBox",
           "dojo/domReady!"
        ], function (Scalebar, OverviewMap, arcgisUtils, LayerList, Measurement, dom, parser, Navigation) {
           // parser.parse();

            //创建工具菜单       
            HJMenuBuilder.Init();
         
            ///********************************
            //* 创建绘制工具.
            //*********************************/
            HJDrawTool.Init(HJMapTools.map);

            ///********************************
            //* 创建搜索对象.
            //*********************************/
            //HJSearch.Init(HJMapTools.map, "searchDiv");      

            /********************************
             * 创建查找对象.
             *********************************/
            FindTaskTool.Init(HJMapTools.map,"findtaskdiv");

            /********************************
            * 创建比例尺对象.
            *********************************/
            var scalebar = new Scalebar({
                map: HJMapTools.map,
                // "dual" displays both miles and kilmometers
                // "english" is the default, which displays miles
                // use "metric" for kilometers
                scalebarUnit: "dual"
            });
            /********************************
            * 创建鹰眼对象.
            *********************************/
            var overviewMapDijit = new OverviewMap({
                map: HJMapTools.map,
                visible: false,
                attachTo: "bottom-right",
                //height: 260,
                //width: 260,
                opacity: .40
            });
            overviewMapDijit.startup();

            /********************************
            * 加载测量工具.
            *********************************/
            HJMeasure.Init(HJMapTools.map);

            /********************************
            * 加载信息工具.
            *********************************/
            //IdentifyTaskTool.Init(HJMapTools.map, HJConfig.IdentifyConfig.url);

            /********************************
            * 加载导航工具.
            *********************************/
            HJNavigation.Init(HJMapTools.map);

            //打印输出
            HJPrinter.Init(HJMapTools.map);

            //图例
            //HJLegend.Init(HJMapTools.map, "legendDiv2");
        });
       
    },
    /*
    *设置地图当前工具
    */
    SetCurTool: function (value) {
        //释放工具
        if (HJMap.MapTool != null) {
            HJMap.MapTool.Dispose();
        }
        //设置当前工具
        HJMap.MapTool = value;
    }
};