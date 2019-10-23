/*
*航标图层
*/

var HJBeaconLayer = {
    base:null,
    map:null,
    url: null,
    beaconLayer: null,
    /*
    *初始化[地图，航标地址]
    */
    Init: function (map, url) {
        this.map = map;
        this.url = baseDataUrl+"/service/water/getWaterList.do?callback=?";
        this.base = new HJGraphicsLayer();
        this.base.Init(map, url, "航标图层");
    },
    /*
    *添加到地图
    */
    Add2Map: function (jsondata) {
        this.base.Add2Map(jsondata);
    },
    /*
    *释放资源
    */
    Dispose: function () {
        this.base.Dispose();
    }
};