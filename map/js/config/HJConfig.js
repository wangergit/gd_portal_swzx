﻿/// <reference path="Dialog/zDialog.js" />
/*
*地图配置文件
*/
//var baseDataUrl = GetIP()+":8080/gd_portal/map";
var baseDataUrl = GetIP()+":"+location.port+"/gd_portal/map";

//var baseMapUrl = GetMapIP()+":6080";
var baseMapUrl = GetMapIP()+":"+GetMapPORT();
/*
 * 航标等图片路径（相对、绝对路径问题）
 * */
var baseHbIcoUrl = GetMapProtocol()+"//"+GetIP()+":"+location.port+"/gd_portal/map";

var dojoConfig = {
	    paths: {
	        extras: location.pathname.replace(/\/[^/]+$/, "") + "/js/arcgisapi/3.15/extras"
	    }
};

function GetIP(){
	var href=window.location.host;
	var nindex=href.indexOf(":");
	var newip=href.substr(0,nindex);
	return newip;
}
function GetMapIP(){
	var ip=GetIP();
	if(ip=="10.0.183.81"){
		return "10.0.183.6";
	}else{
		return "14.23.108.204";		
	}	
}

function GetMapPORT(){
	var zPort=location.port;
	if(zPort=="3300"){
		return "3300";
	}else{
		return "6080";		
	}	
}

function GetMapProtocol(){
	return location.protocol;
}

var HJConfig = {
    ///API地址
    SERVERIP: baseDataUrl+ '/js/arcgisapi/3.15',
    GeometryService: GetMapProtocol()+'//'+baseMapUrl+'/arcgis/rest/services/Utilities/Geometry/GeometryServer',
    ///基础底图
    //BASEMAP: null,//'streets',// 'streets',//'http://'+baseMapUrl+'/arcgis/rest/services/cjinobeacon2/MapServer/WMTS',//'',
    //初始化地图级别
    ZOOM: 3,
    //初始化地图中心
    CENTER: [113, 22.8],
    //地图范围
    ExtentConfig:function(){ 
        return new esri.geometry.Extent({
            "xmin": 112.8745, "ymin": 22.63596, "xmax": 113.42471, "ymax": 22.8510,
            "spatialReference": { "wkid": 4490 }
        });
    },
    
    /*
     *初始化，加载js,css
     */
     Init: function () {
         //加载引用config
         document.write('<script type="text/javascript" src="../map/js/config/HJReferenceConfig.js"></script>');
     },
     /*
     *加载api
     */
     LoadEsriAPI: function () {
         HJReferenceConfig.LoadEsriAPI();        
     },
    /*
    *图层配置
    *图层名称【name】,
    *图层地址【url】,
    *图层类型【type】[HJLayerType],
    *是否显示【visible】[true,false],
    *显示属性【attributes】[ArcGISFeature,HJGraphicsLayer类型图层可用]],
    */
    Layers: function () {
        var layers= [
            { 'name': '基础底图', 'url': GetMapProtocol()+'//'+baseMapUrl+'/arcgis/rest/services/%E5%9F%BA%E7%A1%80%E5%BA%95%E5%9B%BE/MapServer', 'type': HJLayerType.ArcGISTile, 'visible': true },
			{ 'name': '影像底图', 'url': GetMapProtocol()+'//'+baseMapUrl+'/arcgis/rest/services/%E5%B9%BF%E4%B8%9C%E5%BD%B1%E5%83%8F/MapServer', 'type': HJLayerType.ArcGISTile, 'visible': false },
            //{ 'name': '电子航道图', 'url': GetMapProtocol()+'//'+baseMapUrl+'/arcgis/rest/services/电子航道图/MapServer', 'type': HJLayerType.ArcGISTile, 'visible': true },
            //{ 'name': '电子航道图', 'url': GetMapProtocol()+'//'+baseMapUrl+'/arcgis/rest/services/nhhdt_tm/MapServer', 'type': HJLayerType.ArcGISTile, 'visible': true },
            { 'name': '电子航道图', 'url': GetMapProtocol()+'//'+baseMapUrl+'/arcgis/rest/services/gdhdt/MapServer', 'type': HJLayerType.ArcGISTile, 'visible': true },
            { 'name': '西北江航道', 'url': GetMapProtocol()+'//'+baseMapUrl+'/arcgis/rest/services/西北江航道/MapServer', 'type': HJLayerType.ArcGISTile, 'visible': false },
			{ 'name': '航道航段', 'url': GetMapProtocol()+'//'+baseMapUrl+'/arcgis/rest/services/ZB5/航道航段/MapServer', 'type': HJLayerType.ArcGISDynamic, 'visible': false },
			{ 'name': '航道航段信息', 'url': GetMapProtocol()+'//'+baseMapUrl+'/arcgis/rest/services/ZB5/航道航段信息/MapServer', 'type': HJLayerType.ArcGISDynamic, 'visible': true,'maxScale':30000,'minScale':10000000},
			{ 'name': '临河建筑物', 'url': GetMapProtocol()+'//'+baseMapUrl+'/arcgis/rest/services/ZB5/%E4%B8%B4%E6%B2%B3%E5%BB%BA%E7%AD%91%E7%89%A9/MapServer', 'type': HJLayerType.ArcGISDynamic, 'visible': false },
			{ 'name': '拦河建筑物', 'url': GetMapProtocol()+'//'+baseMapUrl+'/arcgis/rest/services/ZB5/拦河建筑物/MapServer', 'type': HJLayerType.ArcGISDynamic, 'visible': false ,'minScale':100000},
			{ 'name': '整治建筑物', 'url': GetMapProtocol()+'//'+baseMapUrl+'/arcgis/rest/services/ZB5/整治建筑物/MapServer', 'type': HJLayerType.ArcGISDynamic, 'visible': false ,'minScale':100000},
			{ 'name': '过河建筑物', 'url': GetMapProtocol()+'//'+baseMapUrl+'/arcgis/rest/services/ZB5/过河建筑物9/MapServer', 'type': HJLayerType.ArcGISDynamic, 'visible': false ,'minScale':100000},
			{ 'name': '通航建筑物 ', 'url': GetMapProtocol()+'//'+baseMapUrl+'/arcgis/rest/services/ZB5/通航建筑物/MapServer', 'type': HJLayerType.ArcGISDynamic, 'visible': false ,'minScale':100000},
		    { 'name': 'AIS船舶', 'url': GetMapProtocol()+'//www.ais.msa.gov.cn/msaapi', 'type': HJLayerType.AISLayer, 'visible': false,'minScale':1000000 }	,
			{ 'name': '航标', 'url': GetMapProtocol()+'//'+baseMapUrl+'/arcgis/rest/services/NAV/MapServer', 'type': HJLayerType.ArcGISDynamic, 'visible': true },
        ];

        return layers;
    },
    /*
    *identify查询配置 
    *注：注意字段大小写
    */
    IdentifyConfig: {
        //服务地址
        url: GetMapProtocol()+"//"+baseMapUrl+"/arcgis/rest/services/%E7%94%B5%E5%AD%90%E8%88%AA%E9%81%93%E5%9B%BE/MapServer",
        //图层序号
        layerids:[6,7,8,9,10,11,12,19,20,22,23,25,26,27,28,30,31,32,33,34,35,36,37,38,39,40,41,42,44,45,46,47,49,50,51,52,53,54,55,56,57,59,60,61,62,63,64,65,66,67,68],
        //展示结果配置 注：注意字段大小写
        result: {
			//航标配置
			//水位观测站
		6:"ID:${OBJECTID}<br/>测绘日期:${测绘日期}<br/>水位观读方式:${水位观读方式}<br/>水位遥测遥报系统标识符:${水位遥测遥报系统标识符}<br/>水文观测站管理部门:${水文观测站管理部门}<br/>水文观测站类型:${水文观测站类型}<br/>图示显示:${图示显示}<br/>中文名称:${中文名称}<br/>中文信息:${中文信息}<br/>状态:${状态}",
		//视频监控站
		7:"ID:${OBJECTID}<br/>测绘日期:${测绘日期}<br/>监控站管理部门:${监控站管理部门}<br/>图示显示:${图示显示}<br/>中文名称:${中文名称}<br/>中文信息:${中文信息}",
		//环保监测站
		8:"ID:${OBJECTID}<br/>测绘日期:${测绘日期}<br/>监测站管理部门:${监测站管理部门}<br/>图示显示:${图示显示}<br/>中文名称:${中文名称}<br/>中文信息:${中文信息}",
		//救助点
		9:"ID:${OBJECTID}<br/>测绘日期:${测绘日期}<br/>图示显示:${图示显示}<br/>中文名称:${中文名称}<br/>中文信息:${中文信息}",
		//服务点
		10:"ID:${OBJECTID}<br/>测绘日期:${测绘日期}<br/>图示显示:${图示显示}<br/>中文名称:${中文名称}<br/>中文信息:${中文信息}",
		//航道部门
		11:"ID:${OBJECTID}<br/>测绘日期:${测绘日期}<br/>航道管理机构类型:${航道管理机构类型}<br/>航道管理机构联系电话:${航道管理机构联系电话}<br/>航道管理机构联系人:${航道管理机构联系人}<br/>航道管理机构所辖航道范围:${航道管理机构所辖航道范围}<br/>航道管理机构通信地址:${航道管理机构通信地址}<br/>航道管理机构邮编:${航道管理机构邮编}<br/>图示显示:${图示显示}<br/>中文名称:${中文名称}<br/>中文信息:${中文信息}",
		//海事部门
		12:"ID:${OBJECTID}<br/>测绘日期:${测绘日期}<br/>海事管理机构类型:${海事管理机构类型}<br/>海事管理机构联系电话:${海事管理机构联系电话}<br/>海事管理机构联系人:${海事管理机构联系人}<br/>海事管理机构所辖航道范围:${海事管理机构所辖航道范围}<br/>海事管理机构通信地址:${海事管理机构通信地址}<br/>海事管理机构邮编:${海事管理机构邮编}<br/>图示显示:${图示显示}<br/>中文名称:${中文名称}<br/>中文信息:${中文信息}",
		//专用航道
		19:"ID:${OBJECTID}<br/>测绘日期:${测绘日期}<br/>发展规划技术等级:${发展规划技术等级}<br/>航道管理部门:${航道管理部门}<br/>航道里程:${航道里程}<br/>航道内交通流:${航道内交通流}<br/>航道配布类别:${航道配布类别}<br/>航道起点名称:${航道起点名称}<br/>航道属性:${航道属性}<br/>航道维护部门:${航道维护部门}<br/>航道维护类别:${航道维护类别}<br/>航道终点名称:${航道终点名称}<br/>航道最低通航水位保证率:${航道最低通航水位保证率}<br/>航道最小宽度:${航道最小宽度}<br/>航道最小弯曲半径:${航道最小弯曲半径}<br/>通航船舶吨级:${通航船舶吨级}<br/>图示显示:${图示显示}<br/>现状技术等级:${现状技术等级}<br/>中文名称:${中文名称}<br/>中文信息:${中文信息}<br/>最小深度值:${最小深度值}",
		//公共航道
		20:"ID:${OBJECTID}<br/>测绘日期:${测绘日期}<br/>发展规划技术等级:${发展规划技术等级}<br/>航道管理部门:${航道管理部门}<br/>航道里程:${航道里程}<br/>航道内交通流:${航道内交通流}<br/>航道配布类别:${航道配布类别}<br/>航道起点名称:${航道起点名称}<br/>航道属性:${航道属性}<br/>航道维护部门:${航道维护部门}<br/>航道维护类别:${航道维护类别}<br/>航道终点名称:${航道终点名称}<br/>航道最低通航水位保证率:${航道最低通航水位保证率}<br/>航道最小宽度:${航道最小宽度}<br/>航道最小弯曲半径:${航道最小弯曲半径}<br/>通航船舶吨级:${通航船舶吨级}<br/>图示显示:${图示显示}<br/>现状技术等级:${现状技术等级}<br/>中文名称:${中文名称}<br/>中文信息:${中文信息}<br/>最小深度值:${最小深度值}",
		//升船机
		22:"ID:${OBJECTID}<br/>测绘日期:${测绘日期}<br/>升船机水深:${升船机水深}<br/>升船机厢宽:${升船机厢宽}<br/>升船机厢长:${升船机厢长}<br/>升船机形式:${升船机形式}<br/>图示显示:${图示显示}<br/>中文名称:${中文名称}<br/>中文信息:${中文信息}<br/>状态:${状态}",
		//船闸
		23:"ID:${OBJECTID}<br/>测绘日期:${测绘日期}<br/>船闸级别:${船闸级别}<br/>船闸门槛最小水深:${船闸门槛最小水深}<br/>船闸通航规则:${船闸通航规则}<br/>船闸有效宽度:${船闸有效宽度}<br/>船闸有效长度:${船闸有效长度}<br/>管道设标情况:${管道设标情况}<br/>图示显示:${图示显示}<br/>线数:${线数}<br/>中文名称:${中文名称}<br/>中文信息:${中文信息}<br/>状况:${状况}",
		//整治建筑物
		//整治坝点
		25:"ID:${OBJECTID}<br/>测绘日期:${测绘日期}<br/>管理部门:${管理部门}<br/>技术状况分类:${技术状况分类}<br/>水平宽度:${水平宽度}<br/>水平长度:${水平长度}<br/>图示显示:${图示显示}<br/>维护部门:${维护部门}<br/>整治建筑物形式:${整治建筑物形式}<br/>中文名称:${中文名称}<br/>中文信息:${中文信息}<br/>状况:${状况}<br/>状态:${状态}",
		//整治坝线
		26:"ID:${OBJECTID}<br/>测绘日期:${测绘日期}<br/>管理部门:${管理部门}<br/>技术状况分类:${技术状况分类}<br/>水平宽度:${水平宽度}<br/>水平长度:${水平长度}<br/>图示显示:${图示显示}<br/>维护部门:${维护部门}<br/>整治建筑物形式:${整治建筑物形式}<br/>中文名称:${中文名称}<br/>中文信息:${中文信息}<br/>状况:${状况}<br/>状态:${状态}",
		//整治坝
		27:"ID:${OBJECTID}<br/>测绘日期:${测绘日期}<br/>管理部门:${管理部门}<br/>技术状况分类:${技术状况分类}<br/>水平宽度:${水平宽度}<br/>水平长度:${水平长度}<br/>图示显示:${图示显示}<br/>维护部门:${维护部门}<br/>整治建筑物形式:${整治建筑物形式}<br/>中文名称:${中文名称}<br/>中文信息:${中文信息}<br/>状况:${状况}<br/>状态:${状态}",
		//护岸
		28:"ID:${OBJECTID}<br/>测绘日期:${测绘日期}<br/>管理部门:${管理部门}<br/>技术状况分类:${技术状况分类}<br/>建筑结构性质:${建筑结构性质}<br/>水平宽度:${水平宽度}<br/>水平长度:${水平长度}<br/>图示显示:${图示显示}<br/>维护部门:${维护部门}<br/>中文名称:${中文名称}<br/>中文信息:${中文信息}<br/>状态:${状态}",
		//过河建筑物
		//通航孔线
		30:"ID:${OBJECTID}<br/>测绘日期:${测绘日期}<br/>设计最低通航水位:${设计最低通航水位}<br/>设计最高通航水位:${设计最高通航水位}<br/>通航净高:${通航净高}<br/>通航净宽:${通航净宽}<br/>通航孔编号:${通航孔编号}<br/>通航孔侧高:${通航孔侧高}<br/>通航孔上底宽:${通航孔上底宽}<br/>图示显示:${图示显示}<br/>中文名称:${中文名称}<br/>中文信息:${中文信息}<br/>状态:${状态}",
		//隧道
		31:"ID:${OBJECTID}<br/>测绘日期:${测绘日期}<br/>隧道类型:${隧道类型}<br/>隧道通航规则:${隧道通航规则}<br/>隧道用途:${隧道用途}<br/>隧道长度:${隧道长度}<br/>图示显示:${图示显示}<br/>中文名称:${中文名称}<br/>中文信息:${中文信息}<br/>状况:${状况}<br/>状态:${状态}",
		//过河线缆
		32:"ID:${OBJECTID}<br/>测绘日期:${测绘日期}<br/>管道设标情况:${管道设标情况}<br/>过河线缆安全间距:${过河线缆安全间距}<br/>过河线缆长度:${过河线缆长度}<br/>图示显示:${图示显示}<br/>线缆的埋设深度:${线缆的埋设深度}<br/>线缆类型:${线缆类型}<br/>中文名称:${中文名称}<br/>中文信息:${中文信息}<br/>状况:${状况}<br/>状态:${状态}",
		//架空线缆
		33:"ID:${OBJECTID}<br/>测绘日期:${测绘日期}<br/>建设状态:${建设状态}<br/>视觉可见:${视觉可见}<br/>图示显示:${图示显示}<br/>线缆安全间距:${线缆安全间距}<br/>线缆类型:${线缆类型}<br/>线缆设标情况:${线缆设标情况}<br/>线缆实测弧垂高度:${线缆实测弧垂高度}<br/>线缆通航净高:${线缆通航净高}<br/>线缆通航净宽:${线缆通航净宽}<br/>线缆长度:${线缆长度}<br/>线缆最高通航水位:${线缆最高通航水位}<br/>中文名称:${中文名称}<br/>中文信息:${中文信息}",
		//架空管道
		34:"ID:${OBJECTID}<br/>测绘日期:${测绘日期}<br/>管道安全间距:${管道安全间距}<br/>管道类型:${管道类型}<br/>管道设标情况:${管道设标情况}<br/>管道通航净高:${管道通航净高}<br/>管道通航净宽:${管道通航净宽}<br/>管道最高通航水位:${管道最高通航水位}<br/>架空管道长度:${架空管道长度}<br/>视觉可见:${视觉可见}<br/>图示显示:${图示显示}<br/>中文名称:${中文名称}<br/>中文信息:${中文信息}<br/>状态:${状态}",
		//过河管道
		35:"ID:${OBJECTID}<br/>测绘日期:${测绘日期}<br/>管道安全间距:${管道安全间距}<br/>管道的埋设深度:${管道的埋设深度}<br/>管道类型:${管道类型}<br/>管道设标情况:${管道设标情况}<br/>管道长度:${管道长度}<br/>建设状态:${建设状态}<br/>图示显示:${图示显示}<br/>中文名称:${中文名称}<br/>中文信息:${中文信息}<br/>状况:${状况}<br/>最大水深:${最大水深}<br/>最小深度值:${最小深度值}",
		//管道区
		36:"ID:${OBJECTID}<br/>测绘日期:${测绘日期}<br/>管道类型:${管道类型}<br/>图示显示:${图示显示}<br/>限制情况:${限制情况}<br/>中文名称:${中文名称}<br/>中文信息:${中文信息}<br/>状况:${状况}<br/>状态:${状态}",
		//线缆区
		37:"ID:${OBJECTID}<br/>测绘日期:${测绘日期}<br/>图示显示:${图示显示}<br/>限制情况:${限制情况}<br/>线缆类型:${线缆类型}<br/>中文名称:${中文名称}<br/>中文信息:${中文信息}<br/>状况:${状况}<br/>状态:${状态}",
		//桥墩
		38:"ID:${OBJECTID}<br/>测绘日期:${测绘日期}<br/>建筑结构性质:${建筑结构性质}<br/>桥塔类型:${桥塔类型}<br/>视觉可见:${视觉可见}<br/>水位效应:${水位效应}<br/>图示显示:${图示显示}<br/>中文名称:${中文名称}<br/>中文信息:${中文信息}<br/>状态:${状态}",
		//桥梁
		39:"ID:${OBJECTID}<br/>测绘日期:${测绘日期}<br/>桥墩个数:${桥墩个数}<br/>桥梁防撞能力:${桥梁防撞能力}<br/>桥梁结构形式:${桥梁结构形式}<br/>桥梁类型:${桥梁类型}<br/>桥梁设计通航保证率:${桥梁设计通航保证率}<br/>桥梁通航安全距离:${桥梁通航安全距离}<br/>桥梁长度:${桥梁长度}<br/>桥面宽度:${桥面宽度}<br/>通航孔个数:${通航孔个数}<br/>图示显示:${图示显示}<br/>中文名称:${中文名称}<br/>中文信息:${中文信息}<br/>状态:${状态}",
		//通航孔
		40:"ID:${OBJECTID}<br/>测绘日期:${测绘日期}<br/>设计最低通航水位:${设计最低通航水位}<br/>设计最高通航水位:${设计最高通航水位}<br/>通航净高:${通航净高}<br/>通航净宽:${通航净宽}<br/>通航孔编号:${通航孔编号}<br/>通航孔侧高:${通航孔侧高}<br/>通航孔上底宽:${通航孔上底宽}<br/>图示显示:${图示显示}<br/>中文名称:${中文名称}<br/>中文信息:${中文信息}<br/>状态:${状态}",
		//渡槽
		41:"ID:${OBJECTID}<br/>槽面宽度:${槽面宽度}<br/>测绘日期:${测绘日期}<br/>渡槽长度:${渡槽长度}<br/>通航孔个数:${通航孔个数}<br/>图示显示:${图示显示}<br/>中文名称:${中文名称}<br/>中文信息:${中文信息}<br/>状态:${状态}",
		//索道
		42:"ID:${OBJECTID}<br/>测绘日期:${测绘日期}<br/>索道实测弧垂高度:${索道实测弧垂高度}<br/>索道长度:${索道长度}<br/>索道最高通航水位:${索道最高通航水位}<br/>通航净高:${通航净高}<br/>图示显示:${图示显示}<br/>中文名称:${中文名称}<br/>中文信息:${中文信息}<br/>状态:${状态}",
		//拦河建筑物
		//拦河坝点
		44:"ID:${OBJECTID}<br/>测绘日期:${测绘日期}<br/>垂直高度:${垂直高度}<br/>高度:${高度}<br/>建筑结构性质:${建筑结构性质}<br/>水坝类型:${水坝类型}<br/>水深说明:${水深说明}<br/>水深质量:${水深质量}<br/>图示显示:${图示显示}<br/>中文名称:${中文名称}<br/>中文信息:${中文信息}<br/>状况:${状况}<br/>状态:${状态}",
		//水闸点
		45:"ID:${OBJECTID}<br/>测绘日期:${测绘日期}<br/>建筑结构性质:${建筑结构性质}<br/>门类型:${门类型}<br/>水深说明:${水深说明}<br/>水深质量:${水深质量}<br/>图示显示:${图示显示}<br/>中文名称:${中文名称}<br/>中文信息:${中文信息}<br/>状况:${状况}<br/>状态:${状态}<br/>最小深度值:${最小深度值}",
		//拦河坝
		46:"ID:${OBJECTID}<br/>测绘日期:${测绘日期}<br/>垂直高度:${垂直高度}<br/>高度:${高度}<br/>建筑结构性质:${建筑结构性质}<br/>水坝类型:${水坝类型}<br/>水深说明:${水深说明}<br/>水深质量:${水深质量}<br/>图示显示:${图示显示}<br/>中文名称:${中文名称}<br/>中文信息:${中文信息}<br/>状况:${状况}<br/>状态:${状态}",
		//水闸面
		47:"ID:${OBJECTID}<br/>测绘日期:${测绘日期}<br/>建筑结构性质:${建筑结构性质}<br/>门类型:${门类型}<br/>水深说明:${水深说明}<br/>水深质量:${水深质量}<br/>图示显示:${图示显示}<br/>中文名称:${中文名称}<br/>中文信息:${中文信息}<br/>状况:${状况}<br/>状态:${状态}<br/>最小深度值:${最小深度值}",
		//临河建筑物
		//泊位
		49:"ID:${OBJECTID}<br/>泊位宽度:${泊位宽度}<br/>泊位类型:${泊位类型}<br/>泊位用途:${泊位用途}<br/>泊位长度:${泊位长度}<br/>测绘日期:${测绘日期}<br/>水深质量:${水深质量}<br/>图示显示:${图示显示}<br/>危险货物类型:${危险货物类型}<br/>中文名称:${中文名称}<br/>中文信息:${中文信息}<br/>状况:${状况}<br/>最小深度值:${最小深度值}",
		//取排水口
		50:"ID:${OBJECTID}<br/>测绘日期:${测绘日期}<br/>取（排）水口编号:${取（排）水口编号}<br/>取（排）水口可航水深:${取（排）水口可航水深}<br/>取（排）水口设标情况:${取（排）水口设标情况}<br/>取（排）水口设通航规则:${取（排）水口设通航规则}<br/>取（排）水口使用时限代码:${取（排）水口使用时限代码}<br/>取（排）水口用途:${取（排）水口用途}<br/>图示显示:${图示显示}<br/>中文名称:${中文名称}<br/>中文信息:${中文信息}<br/>状况:${状况}<br/>状态:${状态}",
		//取排水站
		51:"ID:${OBJECTID}<br/>测绘日期:${测绘日期}<br/>图示显示:${图示显示}<br/>中文名称:${中文名称}<br/>中文信息:${中文信息}<br/>状况:${状况}<br/>状态:${状态}",
		//栈桥
		52:"ID:${OBJECTID}<br/>测绘日期:${测绘日期}<br/>图示显示:${图示显示}<br/>栈桥材料:${栈桥材料}<br/>栈桥宽度:${栈桥宽度}<br/>栈桥长度:${栈桥长度}<br/>中文名称:${中文名称}<br/>中文信息:${中文信息}<br/>状态:${状态}",
		//浮码头
		53:"ID:${OBJECTID}<br/>测绘日期:${测绘日期}<br/>垂直高度:${垂直高度}<br/>建筑结构性质:${建筑结构性质}<br/>码头用途:${码头用途}<br/>视觉可见:${视觉可见}<br/>图示显示:${图示显示}<br/>中文名称:${中文名称}<br/>中文信息:${中文信息}<br/>状况:${状况}<br/>状态:${状态}",
		//固定码头面
		54:"ID:${OBJECTID}<br/>测绘日期:${测绘日期}<br/>管理单位:${管理单位}<br/>码头泊位个数:${码头泊位个数}<br/>码头靠泊能力:${码头靠泊能力}<br/>码头设计吞吐量:${码头设计吞吐量}<br/>码头形式:${码头形式}<br/>码头用途:${码头用途}<br/>图示显示:${图示显示}<br/>中文名称:${中文名称}<br/>中文信息:${中文信息}<br/>状态:${状态}",
		//浮船坞
		55:"ID:${OBJECTID}<br/>测绘日期:${测绘日期}<br/>超重能力:${超重能力}<br/>船坞碍航情况:${船坞碍航情况}<br/>船坞管理单位联系方式:${船坞管理单位联系方式}<br/>船坞类型:${船坞类型}<br/>船坞设标情况:${船坞设标情况}<br/>船坞有效长度:${船坞有效长度}<br/>水深质量:${水深质量}<br/>图示显示:${图示显示}<br/>坞室宽度:${坞室宽度}<br/>中文名称:${中文名称}<br/>中文信息:${中文信息}<br/>状况:${状况}<br/>状态:${状态}<br/>最小深度值:${最小深度值}",
		//临河船厂
		56:"ID:${OBJECTID}<br/>测绘日期:${测绘日期}<br/>临河船厂编号:${临河船厂编号}<br/>临河船厂法定代表人:${临河船厂法定代表人}<br/>临河船厂类型:${临河船厂类型}<br/>图示显示:${图示显示}<br/>中文名称:${中文名称}<br/>中文信息:${中文信息}<br/>状况:${状况}<br/>状态:${状态}",
		//干船坞
		57:"ID:${OBJECTID}<br/>测绘日期:${测绘日期}<br/>船坞碍航情况:${船坞碍航情况}<br/>船坞管理单位联系方式:${船坞管理单位联系方式}<br/>船坞类型:${船坞类型}<br/>船坞设标情况:${船坞设标情况}<br/>船坞有效长度:${船坞有效长度}<br/>水深质量:${水深质量}<br/>图示显示:${图示显示}<br/>坞室宽度:${坞室宽度}<br/>中文名称:${中文名称}<br/>中文信息:${中文信息}<br/>状况:${状况}<br/>状态:${状态}<br/>最小深度值:${最小深度值}",
		//碍航物
		//礁石点
		59:"ID:${OBJECTID}<br/>碍航物设标情况:${碍航物设标情况}<br/>表面性质:${表面性质}<br/>测绘日期:${测绘日期}<br/>水深说明:${水深说明}<br/>水深质量:${水深质量}<br/>水位效应:${水位效应}<br/>图示显示:${图示显示}<br/>障碍物类型:${障碍物类型}<br/>中文名称:${中文名称}<br/>中文信息:${中文信息}",
		//险恶地段点
		60:"ID:${OBJECTID}<br/>碍航物设标情况:${碍航物设标情况}<br/>表面性质:${表面性质}<br/>测绘日期:${测绘日期}<br/>水深说明:${水深说明}<br/>水深质量:${水深质量}<br/>水位效应:${水位效应}<br/>图示显示:${图示显示}<br/>障碍物类型:${障碍物类型}<br/>中文名称:${中文名称}<br/>中文信息:${中文信息}",
		//沉树
		61:"ID:${OBJECTID}<br/>碍航物设标情况:${碍航物设标情况}<br/>测绘日期:${测绘日期}<br/>水深说明:${水深说明}<br/>水深质量:${水深质量}<br/>水位效应:${水位效应}<br/>图示显示:${图示显示}<br/>障碍物类型:${障碍物类型}<br/>中文名称:${中文名称}<br/>中文信息:${中文信息}",
		//沉船
		62:"ID:${OBJECTID}<br/>碍航物设标情况:${碍航物设标情况}<br/>测绘日期:${测绘日期}<br/>沉船类型:${沉船类型}<br/>视觉可见:${视觉可见}<br/>水深说明:${水深说明}<br/>水深质量:${水深质量}<br/>水位效应:${水位效应}<br/>图示显示:${图示显示}<br/>障碍物类型:${障碍物类型}<br/>中文名称:${中文名称}<br/>中文信息:${中文信息}<br/>状况:${状况}",
		//沉树面
		63:"ID:${OBJECTID}<br/>碍航物设标情况:${碍航物设标情况}<br/>测绘日期:${测绘日期}<br/>水深说明:${水深说明}<br/>水深质量:${水深质量}<br/>水位效应:${水位效应}<br/>图示显示:${图示显示}<br/>障碍物类型:${障碍物类型}<br/>中文名称:${中文名称}<br/>中文信息:${中文信息}",
		//沉船面
		64:"ID:${OBJECTID}<br/>碍航物设标情况:${碍航物设标情况}<br/>测绘日期:${测绘日期}<br/>沉船类型:${沉船类型}<br/>视觉可见:${视觉可见}<br/>水深说明:${水深说明}<br/>水深质量:${水深质量}<br/>水位效应:${水位效应}<br/>图示显示:${图示显示}<br/>障碍物类型:${障碍物类型}<br/>中文名称:${中文名称}<br/>中文信息:${中文信息}<br/>状况:${状况}",
		//礁石
		65:"ID:${OBJECTID}<br/>碍航物设标情况:${碍航物设标情况}<br/>表面性质:${表面性质}<br/>测绘日期:${测绘日期}<br/>水深说明:${水深说明}<br/>水深质量:${水深质量}<br/>水位效应:${水位效应}<br/>图示显示:${图示显示}<br/>障碍物类型:${障碍物类型}<br/>中文名称:${中文名称}<br/>中文信息:${中文信息}",
		//渔业区
		66:"ID:${OBJECTID}<br/>测绘日期:${测绘日期}<br/>图示显示:${图示显示}<br/>中文名称:${中文名称}<br/>中文信息:${中文信息}<br/>状况:${状况}",
		//险恶地段
		67:"ID:${OBJECTID}<br/>碍航物设标情况:${碍航物设标情况}<br/>表面性质:${表面性质}<br/>测绘日期:${测绘日期}<br/>水深说明:${水深说明}<br/>水深质量:${水深质量}<br/>水位效应:${水位效应}<br/>图示显示:${图示显示}<br/>障碍物类型:${障碍物类型}<br/>中文名称:${中文名称}<br/>中文信息:${中文信息}",
		//碍锚地
		68:"ID:${OBJECTID}<br/>碍航物设标情况:${碍航物设标情况}<br/>表面性质:${表面性质}<br/>测绘日期:${测绘日期}<br/>水深说明:${水深说明}<br/>水深质量:${水深质量}<br/>水位效应:${水位效应}<br/>图示显示:${图示显示}<br/>中文名称:${中文名称}<br/>中文信息:${中文信息}"						
		}
    },
	/*
     * 
     */
    FeatureServeiceConfig: {
        //服务地址
        url: GetMapProtocol()+"//"+baseMapUrl+"/arcgis/rest/services/电子航道图/MapServer",
        //图层序号
        layerids: [4,63,9,10,11]
    },
    /*
    *查找配置
    *注：注意字段大小写`
    */
    FindTaskConfig: {
        //服务地址
        url: GetMapProtocol()+"//"+baseMapUrl+"/arcgis/rest/services/ZB5/电子航道图ALL/MapServer",//"http://"+baseMapUrl+"/arcgis/rest/services/西北江航道/MapServer",
        //图层序号
        layerids: [7],
        //查找字段
        searchFields: ["桥梁名称"],
        //展示结果配置 注：注意字段大小写
        result: {
            7: "桥梁名称:${桥梁名称}<br/>桥梁类别:${桥梁类别}"
        }
    },
    //打印配置
    PrinterConfig: GetMapProtocol()+"//"+baseMapUrl+"/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task"
    //"http://’+GetIP()+‘:6080/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task"
        
};
//加载
HJConfig.Init();