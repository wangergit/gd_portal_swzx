/*
*地图输出
*/
var HJPrinter = {
    //地图对象
    map: null,
    //输出对象
    printer: null,
    //打印pdf参数
    templatePdf: null,
    //输出图片参数
    templateImg: null,
    /*
    *初始化地图输出
    */
    Init: function (map) {
        this.map = map;       
   
        require([
          "esri/dijit/Print",
          "esri/tasks/PrintTemplate",
          "dojo/dom",
          "dojo/domReady!"
        ], function (
          Print,
          PrintTemplate,
          dom
        ) {
            //输出pdf参数
            HJPrinter.templatePdf = new PrintTemplate();
            HJPrinter.templatePdf.layout = "";
            HJPrinter.templatePdf.label = "pdf";
            HJPrinter.templatePdf.format = "pdf";
            //HJPrinter.templatePdf.layoutOptions = {
            //    legendLayers: [],
            //    scalebarUnit: "Miles",
            //    titleText: "jpg",// dom.byId('print_title').value,
            //    authorText: "22",// dom.byId('print_author').value,
            //    copyrightText: "33" //dom.byId('print_copyright').value
            //};
            HJPrinter.templatePdf.exportOptions = {
                width: HJPrinter.map.width,
                height: HJPrinter.map.height,
                dpi: 96
            };

            //输出图片参数
            HJPrinter.templateImg = new PrintTemplate();
            HJPrinter.templateImg.layout = "";
            HJPrinter.templateImg.label = "jpg";
            HJPrinter.templateImg.format = "jpg";
            //HJPrinter.templateImg.layoutOptions = {
            //    legendLayers: [],
            //    scalebarUnit: "Miles",
            //    titleText: "jpg",// dom.byId('print_title').value,
            //    authorText: "22",// dom.byId('print_author').value,
            //    copyrightText: "33" //dom.byId('print_copyright').value
            //};
            HJPrinter.templateImg.exportOptions = {
                width: HJPrinter.map.width,
                height: HJPrinter.map.height,
                dpi: 96
            };
            

            //打印输出功能
            HJPrinter.printer = new Print({
                map: HJPrinter.map,
               //emplates: templates,
                url: HJConfig.PrinterConfig
            }, dom.byId("printButton"));
            HJPrinter.printer.startup();
            HJPrinter.printer.hide();

            //打印结束
            HJPrinter.printer.on('print-complete', function (evt) {           
                window.open(evt.result.url, "newwindow");
                HJPrinter.map.setMapCursor("default");
            });
            //打印出错
            HJPrinter.printer.on('error', function (evt) {
                HJPrinter.map.setMapCursor("default");
                alert("打印出错,请重试。");
            });            
        });
    },
    /*
    *输出图片
    */
    exportImg: function () {
        this.map.setMapCursor("wait");
        HJPrinter.printer.printMap(HJPrinter.templateImg);       
    },
    /*
    *输出pdf
    */
    printPdf: function () {

        this.map.setMapCursor("wait");
        HJPrinter.printer.printMap(HJPrinter.templatePdf);       
    }
};