/*
*搜索
*/
var HJSearch = {
    Init: function (map, searchDiv) {
        //********************************
        //* 创建搜索对象.
        //*********************************/
        var searchWidget = new esri.dijit.Search({
            view: map,
            sources: [{
                featureLayer: new esri.layers.FeatureLayer("http://services.arcgis.com/b6gLrKHqgkQb393u/arcgis/rest/services/TaxParcelQuery/FeatureServer/0", {
                    outFields: ["*"],
                    infoTemplate: new esri.InfoTemplate("Parcels", "Owner name: ${OWNERNME1}</br>Parcel ID: ${PARCELID}</br>Site address: ${SITEADDRESS}")
                }),
                outFields: ["OWNERNME1", "PARCELID", "SITEADDRESS"],
                displayField: "OWNERNME1",
                suggestionTemplate: "${PARCELID}: ${SITEADDRESS}",
                name: "Parcels",
                placeholder: "搜索内容",
                enableSuggestions: true
            }],
        }, searchDiv);
        searchWidget.startup();
    }
};