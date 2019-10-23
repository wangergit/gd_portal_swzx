/*
*构建工具菜单
*/
var HJMenuBuilder = {
    /*
    *初始化工具菜单
    */
    Init: function () {
      
        //添加工具窗体
        dojo.query("#" + HJMap.mapdiv).addContent('<div id="toolbarDiv" ></div>');

        dojo.query("#toolbarDiv").addContent('<nav>	<ul class="clear" id="toolmenu"></ul></nav>');

        //信息工具
      /*  dojo.query("#toolmenu").addContent('<li class="first"><a href="#" onclick=" IdentifyTaskTool.Init(HJMapTools.map, HJConfig.IdentifyConfig.url)"><img src="images/identify.png" /></a></li>');

        //放大缩小
        dojo.query("#toolmenu").addContent('<li class="first"><a href="#" onclick="HJNavigation.ZoomIn()" ><img src="images/zoomIn.png" /></a></li>');
        dojo.query("#toolmenu").addContent('<li class="first"><a href="#" onclick="HJNavigation.ZoomOut()" ><img src="images/zoomOut.png" /></a></li>');
        dojo.query("#toolmenu").addContent('<li class="first"><a href="#" onclick="HJNavigation.Pan()" ><img src="images/pan.png" /></a></li>');


        //打印输出     
        dojo.query("#toolmenu").addContent('<li class="first"><a href="#" onclick="HJPrinter.exportImg()"><img src="images/export.png" /></a></li>');
        dojo.query("#toolmenu").addContent('<li class="first"><a href="#" onclick="HJPrinter.printPdf()"><img src="images/print.png" /></a></li>');       
        dojo.query("#toolmenu").addContent('<span id="printButton" ></span>');
        

        //测量工具
        dojo.query("#toolmenu").addContent('<li ><span class="Darrow"></span><a href="#" ><img src="images/measure.png" /></a><dl id="measuremenu"><dt><span class="arrow"></span></dt></dl></li>');
        dojo.query("#measuremenu").addContent('<dd><a href="#" onclick="HJMeasure.measutreLength()">测距</a></dd>');
        dojo.query("#measuremenu").addContent('<dd><a href="#" onclick="HJMeasure.measutreArea()">测面</a></dd>');
        dojo.query("#measuremenu").addContent('<dd><a href="#" onclick="HJMeasure.measutreClear()">清除</a></dd>');

        //绘制工具
        dojo.query("#toolmenu").addContent('<li ><span class="Darrow"></span><a href="#" ><img src="images/draw.png" /></a><dl id="drawmenu"><dt><span class="arrow"></span></dt></dl></li>');
        dojo.query("#drawmenu").addContent('<dd><a href="#" onclick="HJDrawTool.SetTool(\'POINT\')">标绘点</a></dd>');
        dojo.query("#drawmenu").addContent('<dd><a href="#" onclick="HJDrawTool.SetTool(\'POLYLINE\')">标绘线</a></dd>');
        dojo.query("#drawmenu").addContent('<dd><a href="#" onclick="HJDrawTool.SetTool(\'POLYGON\')">标绘面</a></dd>');
        dojo.query("#drawmenu").addContent('<dd><a href="#" onclick="HJDrawTool.SetTool(\'CIRCLE\')">标绘圆</a></dd>');
        dojo.query("#drawmenu").addContent('<dd><a href="#" onclick="HJDrawTool.SetTool(\'EXTENT\')">标绘矩形</a></dd>');
        dojo.query("#drawmenu").addContent('<dd><a href="#" onclick="HJDrawTool.Clear()">清除标绘</a></dd>');
                      
        //图层
        dojo.query("#toolmenu").addContent('<li><span class="Darrow"></span><a href="#" ><img src="images/layers.png" /></a><dl id="layersmenu"><dt><span class="arrow"></span></dt></dl></li>');
        var checked = "checked";
        var layers=HJConfig.Layers();
        for (var i = 0; i < layers.length; i++) {
            if (layers[i].name == "") continue;
            checked = layers[i].visible == true ? 'checked' : 'unchecked';
            dojo.query("#layersmenu").addContent('<dd><a href="#" ><input onclick="HJMenuBuilder.LayerVisible(this)" type="checkbox" checked=' + checked + ' value=' + layers[i].name + ' />' + layers[i].name + '</a></dd>');
        }*/

        //dojo.query("#toolmenu").addContent('<li class="first"><a href="#" onclick="HJLegend.Init(HJMapTools.map, \'legendDiv\')"><img src="images/identify.png" /></a></li>');
              
        
        //添加查找窗体
        dojo.query("#" + HJMap.mapdiv).addContent('<div id="findtaskdiv"></div>');
        //图例面板
        //dojo.query("#" + HJMap.mapdiv).addContent('<div id="legendDiv"></div>');

        //dojo.query("#" + HJMap.mapdiv).addContent('<div id="measurementDiv"></div>');
    },
    /*
    *图层显示控制
    */
    LayerVisible: function (layerid,visible) {
        //获取图层id
        //var layerid = dojo.query(value)[0].value;
        //是否可见
        //var visible = dojo.query(value)[0].checked;
        HJMap.setLayerVisible(layerid,visible);
    }
};