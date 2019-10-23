var HJLayerlist = {
    map:null,
    listdiv:null,
    Init: function (map, layerlistdiv) {
        this.map = map;
        this.listdiv = layerlistdiv;

        require([
            "esri/arcgis/utils",
            "esri/dijit/LayerList",
            "dijit/layout/BorderContainer",
            "dijit/layout/ContentPane",
            "dojo/domReady!"
        ], function (
            arcgisUtils,
            LayerList
        ) {
            //Create a map based on an ArcGIS Online web map id 
            arcgisUtils.createMap("df8bcc10430f48878b01c96e907a1fc3", "map").then(function (response) {
                var myWidget = new LayerList({
                    map: response.map,
                    layers: arcgisUtils.getLayerList(response)
                }, HJLayerlist.listdiv);
                myWidget.startup();
            });
        });
    }
};