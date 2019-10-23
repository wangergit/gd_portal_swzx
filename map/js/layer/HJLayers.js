/*
*图层管理
*/
var HJLayers = {
    map: null,
    /*
    *初始化加载地图
    */
    Init: function (map) {
        this.map = map;
                    
        var clayers = HJConfig.Layers();
        var clayer, layer;
        for (var i = 0; i < clayers.length; i++) {
            clayer = clayers[i];
            if (clayer.type == HJLayerType.ArcGISTile) {//arcgis 地图切片服务
                layer = new esri.layers.ArcGISTiledMapServiceLayer(clayer.url);
                
            } else if (clayer.type == HJLayerType.ArcGISDynamic) {//arcgis 动态地图服务
                layer = new esri.layers.ArcGISDynamicMapServiceLayer(clayer.url);
                
            } else if (clayer.type == HJLayerType.ArcGISFeature) {//arcgis 地图矢量要素服务
                layer = new esri.layers.FeatureLayer(clayer.url, {
                    mode: esri.layers.FeatureLayer.MODE_ONDEMAND,
                    outFields: ["*"]
                });
                
                layer.infoTemplate = new esri.InfoTemplate(clayer.name + "信息", clayer.attributes);                
            } else if (clayer.type == HJLayerType.WebTiledLayer) {
                layer = new esri.layers.WebTiledLayer(clayer.url);
                
            } else if (clayer.type == HJLayerType.WFSLayer) {//wfs 地图矢量要素服务
                layer = new esri.layers.WFSLayer(clayer.url);
            } else if (clayer.type == HJLayerType.WMSLayer) {//wms 地图切片服务
                layer = new esri.layers.WMSLayer(clayer.url);                
            } else if (clayer.type == HJLayerType.WMTSLayer) {//wmts 地图服务

            } else if (clayer.type == HJLayerType.HJGraphicsLayer) {//自定义图层
                layer = new HJGraphicsLayer();
                layer.Init(HJLayers.map, clayer.url, clayer.name, clayer.attributes,clayer.visible);
            }else if(clayer.type==HJLayerType.AISLayer){//ais图层
				layer = new HJGraphicsAisLayer();
                layer.Init(HJLayers.map, clayer.url, clayer.name, clayer.attributes,clayer.visible);
			}
			if(clayer==undefined){
				return;
			}
			
			if(clayer.maxScale!=undefined){
				layer.maxScale=clayer.maxScale;
				layer.visibleAtMapScale=false;
			}
			if(clayer.minScale!=undefined){
				layer.minScale=clayer.minScale;
				layer.visibleAtMapScale=false;
				layer.setScaleRange(layer.minScale,layer.maxScale);
			}
			if (clayer!=undefined&&clayer!=null&&clayer.type != HJLayerType.HJGraphicsLayer&&clayer.type != HJLayerType.AISLayer){
				layer.id = clayer.name;
                layer.visible = clayer.visible;
                HJLayers.map.addLayer(layer);
			}
        }
    },
    /*
    *根据名称获取图层
    */
    GetLayer: function (layerid) {
        return HJLayers.map.getLayer(layerid);
    }
};