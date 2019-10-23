/*
*测量工具 
*xxy 
*/
var HJMeasure = {
    /*
    *地图
    */
    map: null,
    /*
    *测量工具
    */
    measurement: null,
    /*
    *测量图层
    */
    measurelayer:null,
    /*
    *初始化测量工具
    */
    Init: function (map) {       
        this.map = map;
             
        require([
            "esri/dijit/Measurement",
            "esri/units",
            "esri/layers/GraphicsLayer"
        ], function (Measurement, Units,GraphicsLayer) {
            //实例化测量工具
            HJMeasure.measurement = new Measurement({
                map: HJMeasure.map,
                defaultAreaUnit: Units.SQUARE_METERS,
                defaultLengthUnit: Units.METERS               
            }, null);
            HJMeasure.measurement.startup();

            //绑定测量中事件
            HJMeasure.measurement.on("measure-start", HJMeasure.measure_start);
            HJMeasure.measurement.on("measure-end", HJMeasure.measure_end);
            HJMeasure.measurement.on("measure", HJMeasure.measure_in);

            //添加测量图层
            HJMeasure.measurelayer = new GraphicsLayer();
            HJMeasure.measurelayer.id = "测量图层";
            HJMeasure.map.addLayer(HJMeasure.measurelayer);
        });
    },   
    /*
    *显示测量窗体（预留）
    */
    Show: function () {       
        //HJMeasure.map.infoWindow.setTitle("测量工具");
        //HJMeasure.map.infoWindow.setContent('<input type="button" value="测距" onclick="HJMeasure.measutreLength()"/>' +
        //                                    '<input type="button" value="测面" onclick="HJMeasure.measutreArea()"/>' +
        //                                    '<input type="button" value="清除" onclick="HJMeasure.measutreClear()"/>');

        //var point = new esri.geometry.Point(screen.availWidth - 100, 100);
        //HJMeasure.map.infoWindow.show();
    },
    /*
    *开启测距工具
    */
    measutreLength: function () {
        //设置当前工具
        HJMapTools.SetCurTool(this);
        //设置鼠标样式
        this.map.setMapCursor("crosshair");

        HJMeasure.measurement.setTool("distance", true);
        HJMeasure.measurement._pointSymbol = this.builderTextSymbol(1);
    },
    /*
    *开启测面工具
    */
    measutreArea: function () {
        //设置当前工具
        HJMapTools.SetCurTool(this);

        //设置鼠标样式
        this.map.setMapCursor("crosshair");

        HJMeasure.measurement.setTool("area", true);
    },
    /*
    *清除测量要素
    */
    measutreClear: function () {
    	HJMapTools.SetCurTool(this);
        HJMeasure.measurement.setTool("area", false);
        HJMeasure.measurement.clearResult();
        HJMeasure.measurelayer.clear();
    },
    /*
    *测量开始
    */
    measure_start: function (evt) {
        if (evt.toolName == "distance") {
            HJMeasure.measurement._pointSymbol = HJMeasure.builderTextSymbol("起点");
            //添加节点
            var point = HJMeasure.measurement._inputPoints[0];
            HJMeasure.measurelayer.add(new esri.Graphic(point, HJSymbol.DefaultPointSymbol));
        } else if (evt.toolName == "area") {

        }
    },
    /*
    *测量中
    */
    measure_in: function (evt) {
        if (evt.toolName == "distance") {
            //测距中添加测量点距离
            var length;
            if (evt.values > 1000) {
                length = (evt.values / 1000).toFixed(2) + "km";
            } else {
                length = (evt.values).toFixed(2) + "m";
            }
            var totalSymbol = HJMeasure.builderTextSymbol(length);
            //更新符号
            HJMeasure.measurement._measureGraphics[HJMeasure.measurement._measureGraphics.length - 2].setSymbol(totalSymbol);

            //添加节点
            var point = HJMeasure.measurement._inputPoints[HJMeasure.measurement._inputPoints.length-1];
            HJMeasure.measurelayer.add(new esri.Graphic(point, HJSymbol.DefaultPointSymbol));
        }
    },
    /*
    *测量结束
    */
    measure_end: function (evt) {
        try{
            if (evt.toolName == "distance") {
                //测距结束添加到地图
                var graphic;
                for (var i = 0; i < HJMeasure.measurement._measureGraphics.length; i++) {
                    graphic = HJMeasure.measurement._measureGraphics[i];
                    HJMeasure.measurelayer.add(new esri.Graphic(graphic.geometry, graphic.symbol));
                }
                //清除临时要素
                HJMeasure.measurement.clearResult();
            } else if (evt.toolName == "area") {
            	 if (evt.geometry.type == "polyline")
                 {
                     alert("面积测量最小需要三个点，请重新绘制。");
                     HJMeasure.measurement.clearResult();
                     HJMeasure.measutreArea();
                     return;
                 }

                //测面结束添加面到地图
                var symbol = new esri.symbol.SimpleFillSymbol(esri.symbol.SimpleFillSymbol.STYLE_NONE,
                                 HJMeasure.measurement._lineSymbol,HJMeasure.measurement._measureGraphic.symbol.Color);
                HJMeasure.measurelayer.add(new esri.Graphic(HJMeasure.measurement._measureGraphic.geometry, HJMeasure.measurement._defaultFillSymbol));
                //计算标记面位置
                var extent = HJMeasure.measurement._measureGraphic.geometry.getExtent();
                var CurX = (extent.xmax + extent.xmin) / 2;
                var CurY = (extent.ymax + extent.ymin) / 2
                var CurPos = new esri.geometry.Point(CurX, CurY, HJMeasure.map.spatialReference);

                var area;
                if (evt.values > 1000000) {
                    area = (evt.values / 1000000).toFixed(2) + "平方公里";
                } else {
                    area = (evt.values).toFixed(2) + "平方米";
                }
                //添加测面结果到地图
                var totalSymbol = HJMeasure.builderTextSymbol(area);
                HJMeasure.measurelayer.add(new esri.Graphic(CurPos, totalSymbol));

                //清除临时要素
                HJMeasure.measurement.clearResult();
                HJMeasure.measutreArea();
            }
        }catch(ex){
            alert(ex);
        }
    },
    /*
    *构建文件本符号
    */
    builderTextSymbol: function (value) {
        var font = new esri.symbol.Font("14px", esri.symbol.Font.STYLE_NORMAL, esri.symbol.Font.VARIANT_NORMAL, esri.symbol.Font.WEIGHT_BOLDER);
        var txtsymbol = new esri.symbol.TextSymbol(value, font, new dojo.Color([255, 0, 0]));
        txtsymbol.setAlign(esri.symbol.TextSymbol.DECORATION_OVERLINE);
        txtsymbol.xoffset = 5;
        txtsymbol.yoffset = 5;
        return txtsymbol;
    },
    /*
    *释放工具
    */
    Dispose: function () {
        HJMeasure.measurement.setTool("area", false);
        //设置鼠标样式
        this.map.setMapCursor("default");
    }
};