/*
*图例
*/
var HJLegend = {
    map:null,
    Init: function (map, legendDiv) {
        this.map = map;
        require([//添加引用       
             "dojo/domReady!"
        ], function () {
            var layerInfo = [];
            var clayers = HJConfig.Layers();
            var clayer, layer;
            for (var i = 0; i < clayers.length; i++) {
                clayer = clayers[i];
                if (clayer.type == HJLayerType.ArcGISFeature) {
                    layer = map.getLayer(clayer.name);
                    layerInfo.push({ layer: layer, title: layer.id });
                }
            }

            if (layerInfo.length > 0) {
                var legendDijit = new esri.dijit.Legend({
                    map: HJLegend.map,
                    layerInfos: layerInfo
                }, legendDiv);
                legendDijit.startup();
            }
        });
    }
};