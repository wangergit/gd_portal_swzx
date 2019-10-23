/*
*轨迹点显示
*/
var PathViewTool = {
    map: null,
    PathLayer: null,
    /*
    *基础点符号
    */
    PointSymbol:null,
    /*
    *线符号
    */
    LineSymbol: null,
    /*
    *箭头符号
    */
    ArrowSymbol: null,
    /*
    *显示信息模板
    */
    infoTemplate:null,
    /*
    *json格式数据
    * '[{title: "????1",attributes: {fzwaterlevel: 10,fname: "????1"},geometry: {y: 28.18642,x: 115.18642}}, 
    *  {title: "???",attributes: { fname: "???" },geometry: { y: 32.00431,x: 117.18724}}, 
    *  {title: "123",attributes: {fname: "123"},geometry: {y: 31,x: 118.51478}}]'
    */
    ViewPath: function (jsondata,layername) {
        PathViewTool.map = HJMap.map;
        //初始化符号
        PathViewTool.InitSysmbol();
            
        //新建轨迹图层      
        //PathViewTool.PathLayer = HJMap.map.getLayer(layerid);
        if (PathViewTool.PathLayer == undefined || PathViewTool.PathLayer == null) {
            PathViewTool.PathLayer = new esri.layers.GraphicsLayer();
            PathViewTool.PathLayer.id = layername;
            PathViewTool.map.addLayer(PathViewTool.PathLayer);
        }      
                      
        var graphic, json, polyline, tempgraphic;       
        var pts = new Array();        

        //添加轨迹点到图层
        for (var i = 0; i < jsondata.length; i++) {
            json = jsondata[i];
         
            //添加箭头轨迹点到地图
            graphic = new esri.Graphic(json);
            if (i >0) {
                tempgraphic = new esri.Graphic(jsondata[i - 1]);
                PathViewTool.ArrowSymbol.angle = PathViewTool.angle(tempgraphic.geometry, graphic.geometry);
                graphic.symbol = esri.symbol.fromJson(PathViewTool.ArrowSymbol.toJson());
                var dangle = graphic.symbol.angle * Math.PI / 180;
                graphic.symbol.yoffset = -10 * Math.cos(dangle);
                graphic.symbol.xoffset = -10 * Math.sin(dangle);
            } else {               
                PathViewTool.ArrowSymbol.angle = 0;
            }
           
            PathViewTool.InitInfoTemplate(graphic);
            //graphic.infoTemplate = esri.InfoTemplate("信息:", PathViewTool.infoTemplate);
           
            //原始点
            PathViewTool.PathLayer.add(new esri.Graphic(graphic.toJson()).setSymbol(PathViewTool.PointSymbol).setInfoTemplate(
                                                                        new esri.InfoTemplate("信息:", PathViewTool.infoTemplate)));
            if (i > 0) {
                PathViewTool.PathLayer.add(graphic);
            }

            pts.push(graphic.geometry);
        }

        //添加轨迹线到图层
        polyline = new esri.geometry.Polyline();
        polyline.addPath(pts);      

        graphic = new esri.Graphic();
        graphic.geometry = polyline;
        graphic.symbol = PathViewTool.LineSymbol;

        PathViewTool.PathLayer.add(graphic);
    },
    /*
    *初始化符号
    */
    InitSysmbol: function () {
        if (PathViewTool.PointSymbol == null) {
            PathViewTool.PointSymbol = HJSymbol.DefaultPointSymbol;
        }
        if (PathViewTool.LineSymbol == null) {
            PathViewTool.LineSymbol = HJSymbol.BuildLineSymbol(2, 250, 0, 0);
        }
        if (PathViewTool.ArrowSymbol == null) {
            PathViewTool.ArrowSymbol = HJSymbol.BuildArrowsMarkerSymbol(0, 2, 20, 250, 0, 0);
        }
    },
    InitInfoTemplate: function (graphic) {
        if (PathViewTool.infoTemplate == null) {
            PathViewTool.infoTemplate = '';
            for (var o in graphic.attributes) {
                PathViewTool.infoTemplate += o + ':${'+o+'}<br/>';
            }
           // '水位:${fzwaterlevel}<br/>流域:${fregion}<br/>名称:${fname}'
        }
    },
    /*
    *根据点返回角度
    */
    angle:function(start,end){
        var diff_x = end.x - start.x,
            diff_y = end.y - start.y;

        if (diff_x == 0)
        {
            if (diff_y > 0) {
                return 0;
            } else {
                return 180;
            }
        }

        //返回角度,不是弧度
        var angle = 360 * Math.atan(diff_y / diff_x) / (2 * Math.PI);
        if (diff_x > 0)
        {
            angle = 90 - angle;
           
        } else if (diff_x < 0)
        {
            angle = 270 - angle;
        }
        return angle;
    },
    /*
    *清空图层
    */
    Clear: function () {
        if (PathViewTool.PathLayer != null && path.PathLayer != undefined) {
            PathViewTool.PathLayer.Clear();
        }
    }
};