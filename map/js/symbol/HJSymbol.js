var HJSymbol = {
    /*
    *默认点符号
    */
    DefaultPointSymbol: null,
    /*
    *默认线符号
    */
    DefaultLineSymbol: null,
    /*
    *默认面符号
    */
    DefaultFillSymbol: null,
    /*
    *初初化符号
    */
    Init: function () {
		 require([//添加引用
            "dojo/parser",
            "esri/config",
            "esri/symbols/jsonUtils",           
            "dojo/domReady!"
        ], function (parser, esriConfig, jsonUtils) {
       
        //默认点符号
        HJSymbol.DefaultPointSymbol = jsonUtils.fromJson({
            "color": [0, 0, 255, 100],
            "size": 8,
            "angle": 0,
            "xoffset": 0,
            "yoffset": 0,
            "type": "esriSMS",
            "style": "esriSMSCircle",
            "outline": {
                "color": [0, 0, 255, 255],
                "width": 1,
                "type": "esriSLS",
                "style": "esriSLSSolid"
            }
        });
        //默认线符号
        HJSymbol.DefaultLineSymbol = jsonUtils.fromJson({
            "color": [0, 0, 255, 255],
            "style":"STYLE_SOLID",	
            "type":	"esriSLS",
            "width":2
        });
        //默认面符号
        HJSymbol.DefaultFillSymbol = HJSymbol.BuildSimpleFillSymbol(0, 0, 255);
		});
    },
    /*
    *构建图片符号
    */
    BuildPictureSymbol: function (url, angle, xoffset, yoffset, width, height) {
        try {
            if (angle == undefined) angle = 0;
            if (xoffset == undefined) xoffset = 0;
            if (yoffset == undefined) yoffset = 0;
            if (width == undefined) width = 24;
            if (height == undefined) height = 24;

            var picsymbol = esri.symbols.jsonUtils.fromJson({
                "angle": angle,
                "xoffset": xoffset,
                "yoffset": yoffset,
                "type": "esriPMS",
                "url": url,
                "width": width,
                "height": height
            });
            picsymbol.angle = angle;
            picsymbol.xoffset = xoffset;
            picsymbol.yoffset = yoffset;
            picsymbol.width = width;
            picsymbol.height = height;

            return picsymbol;
        } catch (ex) {
            return this.DefaultPointSymbol;
        }
    },
    /*
    *构建文本符号 [文本值；大小；x偏移；y偏移；颜色[r,g,b]]
    */
    BuildTextSymbol: function (stext, size, xoffset, yoffset,color) {
        if (size == undefined) size = 12;
        if (xoffset == undefined) xoffset = 0;
        if (yoffset == undefined) yoffset = 0;
        if (color == undefined) color = [0,0,255];

        var font = new esri.symbol.Font(size + "px", esri.symbol.Font.ALIGN_START, esri.symbol.Font.VARIANT_NORMAL, esri.symbol.Font.WEIGHT_BOLDER);
        var txtsymbol = new esri.symbol.TextSymbol(stext, font, new dojo.Color(color));
        txtsymbol.setAlign(esri.symbol.TextSymbol.ALIGN_START);
        txtsymbol.xoffset = xoffset;
        txtsymbol.yoffset = yoffset;
        //txtsymbol.setAlign(esri.symbols.TextSymbol.ALIGN_START)
        return txtsymbol;
    },
    /*
   *构建箭头符号
   */
    BuildArrowsMarkerSymbol: function (angle, linewidth,size,colorR,colorG,colorB) {        
        if (angle == undefined) angle = 0;
        if (linewidth == undefined) linewidth = 1;
        if (size == undefined) size = 20;
        if (colorR == undefined) colorR = 0;
        if (colorG == undefined) colorG = 0;
        if (colorB == undefined) colorB = 0;
        var color =new dojo.Color([colorR, colorG, colorB]);        
        
        var marker = new esri.symbol.SimpleMarkerSymbol().setPath("M-14.5,-29 -23.5,0 -14.5,-9 -5.5,0z")
                        .setOutline(new esri.symbol.SimpleLineSymbol().setWidth(linewidth).setColor(color));
        marker.angle = angle;
        marker.size = size;
        marker.color = color;
        return marker;
    },
    /*
    *构建线符号
    */
    BuildLineSymbol: function (linewidth, colorR, colorG, colorB) {
        if (linewidth == undefined) linewidth = 1;
        if (colorR == undefined) colorR = 0;
        if (colorG == undefined) colorG = 0;
        if (colorB == undefined) colorB = 0;
        var color =new dojo.Color([colorR, colorG, colorB]);

        var linesymbol = new esri.symbol.CartographicLineSymbol(esri.symbol.CartographicLineSymbol.STYLE_SOLID,
                          color, linewidth, esri.symbol.CartographicLineSymbol.CAP_ROUND,
                          esri.symbol.CartographicLineSymbol.JOIN_BEVEL, 5);
        //linesymbol.join = "JOIN_BEVEL";
        //linesymbol.width = 10;
        return linesymbol;
    },
    /*
    *构建面符号
    */
    BuildSimpleFillSymbol: function (colorR, colorG, colorB) {
        var color = new dojo.Color([colorR, colorG, colorB,0.3]);
        var fillsymbol = new esri.symbol.SimpleFillSymbol(esri.symbol.SimpleFillSymbol.STYLE_SOLID,
            HJSymbol.BuildLineSymbol(2, colorR, colorG, colorB), color
          );

        return fillsymbol;
    }
};