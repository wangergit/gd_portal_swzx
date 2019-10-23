/// <reference path="Dialog/zDialog.js" />
/*
*地图配置文件
*/
var baseDataUrl = GetIP()+":8080/gd_portal/map";
var baseMapUrl = "10.0.183.6:6443";
/*
 * 航标等图片路径（相对、绝对路径问题）
 * */
var baseHbIcoUrl = "http://0.0.183.6:6443/gd_portal/map";

var dojoConfig = {
	    paths: {
	        extras: location.pathname.replace(/\/[^/]+$/, "") + "/js/arcgisapi/3.15/extras"
	    }
};
function GetIP(){
	var href=window.location.href;
	var nindex=href.lastIndexOf(":");
	return href.substr(7,nindex-7);
}
var HJConfig = {
    ///API地址
    SERVERIP: baseDataUrl+ '/js/arcgisapi/3.15',
    GeometryService: 'http://'+baseMapUrl+'/arcgis/rest/services/Utilities/Geometry/GeometryServer',
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
            "spatialReference": { "wkid": 4326 }
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
		var url=GetIP();
        var layers= [
            { 'name': '基础底图', 'url': 'https://10.0.183.6:6443/arcgis/rest/services/%E5%9F%BA%E7%A1%80%E5%BA%95%E5%9B%BE/MapServer', 'type': HJLayerType.ArcGISTile, 'visible': true },
			{ 'name': '影像底图', 'url': 'https://10.0.183.6:6443/arcgis/rest/services/%E5%B9%BF%E4%B8%9C%E5%BD%B1%E5%83%8F/MapServer', 'type': HJLayerType.ArcGISTile, 'visible': false },
            { 'name': '电子航道图', 'url': 'https://10.0.183.6:6443/arcgis/rest/services/电子航道图/MapServer', 'type': HJLayerType.ArcGISTile, 'visible': false },
			{ 'name': '西北江数据服务', 'url': 'https://10.0.183.6:6443/arcgis/rest/services/西北江航道/MapServer', 'type': HJLayerType.ArcGISTile, 'visible': true},
			//{ 'name': '航道航段', 'url': 'https://10.0.183.6:6443/arcgis/rest/services/ZB5/航道航段/MapServer', 'type': HJLayerType.ArcGISDynamic, 'visible': false },
			{ 'name': '航道航段信息', 'url': 'https://10.0.183.6:6443/arcgis/rest/services/ZB5/航道航段信息/MapServer', 'type': HJLayerType.ArcGISDynamic, 'visible': true,'maxScale':30000,'minScale':10000000},
			
			{ 'name': '临河建筑物', 'url': 'https://10.0.183.6:6443/arcgis/rest/services/ZB5/%E4%B8%B4%E6%B2%B3%E5%BB%BA%E7%AD%91%E7%89%A9/MapServer', 'type': HJLayerType.ArcGISDynamic, 'visible': false },
			{ 'name': '拦河建筑物', 'url': 'https://10.0.183.6:6443/arcgis/rest/services/ZB5/拦河建筑物/MapServer', 'type': HJLayerType.ArcGISDynamic, 'visible': false ,'minScale':100000},
			{ 'name': '整治建筑物', 'url': 'https://10.0.183.6:6443/arcgis/rest/services/ZB5/整治建筑物/MapServer', 'type': HJLayerType.ArcGISDynamic, 'visible': false ,'minScale':100000},
			{ 'name': '过河建筑物', 'url': 'https://10.0.183.6:6443/arcgis/rest/services/ZB5/过河建筑物9/MapServer', 'type': HJLayerType.ArcGISDynamic, 'visible': false ,'minScale':100000},
			{ 'name': '通航建筑物 ', 'url': 'https://10.0.183.6:6443/arcgis/rest/services/ZB5/通航建筑物 /MapServer', 'type': HJLayerType.ArcGISDynamic, 'visible': false ,'minScale':100000} 			 
        ];

        return layers;
    },
    /*
    *identify查询配置 
    *注：注意字段大小写
    */
    IdentifyConfig: {
        //服务地址
        url: "https://10.0.183.6:6443/arcgis/rest/services/西北江航道/MapServer",
        //图层序号
        layerids: [2,0,5,6,7,11,9,10,4,3,1,8,43,48,33,30,28,46,21,29,50,52,26,27],
        //展示结果配置 注：注意字段大小写
        result: {
			//航标配置	
			2:"系统标识符: ${系统标识符}<br/>航标编号:${航标编号}<br/>航标名称:${航标名称}<br/>管理类别:${管理类别}<br/>工作状态:${工作状态}<br/>管理单位:${管理单位}<br/>维护单位:${维护单位}<br/>设置位置:${设置位置}<br/>航标岸别:${岸别}<br/>遥测遥控:${航标遥测遥控系统标识符}<br/>",   //水深信号标 		 
			0:"系统标识符: ${系统标识符}<br/>航标编号:${航标编号}<br/>航标名称:${航标名称}<br/>管理类别:${管理类别}<br/>工作状态:${工作状态}<br/>管理单位:${管理单位}<br/>维护单位:${维护单位}<br/>设置位置:${设置位置}<br/>航标岸别:${岸别}<br/>遥测遥控:${航标遥测遥控系统标识符}<br/>",   //沿岸标  
			5:"系统标识符: ${系统标识符}<br/>航标编号:${航标编号}<br/>航标名称:${航标名称}<br/>管理类别:${管理类别}<br/>工作状态:${工作状态}<br/>管理单位:${管理单位}<br/>维护单位:${维护单位}<br/>设置位置:${设置位置}<br/>航标岸别:${岸别}<br/>遥测遥控:${航标遥测遥控系统标识符}<br/>",   //侧面标  
			6:"系统标识符: ${系统标识符}<br/>航标编号:${航标编号}<br/>航标名称:${航标名称}<br/>管理类别:${管理类别}<br/>工作状态:${工作状态}<br/>管理单位:${管理单位}<br/>维护单位:${维护单位}<br/>设置位置:${设置位置}<br/>航标岸别:${岸别}<br/>遥测遥控:${航标遥测遥控系统标识符}<br/>",   //通行信号标 		
			7:"系统标识符: ${系统标识符}<br/>航标编号:${航标编号}<br/>航标名称:${航标名称}<br/>管理类别:${管理类别}<br/>工作状态:${工作状态}<br/>管理单位:${管理单位}<br/>维护单位:${维护单位}<br/>设置位置:${设置位置}<br/>航标岸别:${岸别}<br/>遥测遥控:${航标遥测遥控系统标识符}<br/>",  //专用标  
			11:"系统标识符: ${系统标识符}<br/>航标编号:${航标编号}<br/>航标名称:${航标名称}<br/>管理类别:${管理类别}<br/>工作状态:${工作状态}<br/>管理单位:${管理单位}<br/>维护单位:${维护单位}<br/>设置位置:${设置位置}<br/>航标岸别:${岸别}<br/>遥测遥控:${航标遥测遥控系统标识符}<br/>",   //管线标  		
			9:"系统标识符: ${系统标识符}<br/>航标编号:${航标编号}<br/>航标名称:${航标名称}<br/>管理类别:${管理类别}<br/>工作状态:${工作状态}<br/>管理单位:${管理单位}<br/>维护单位:${维护单位}<br/>设置位置:${设置位置}<br/>航标岸别:${岸别}<br/>遥测遥控:${航标遥测遥控系统标识符}<br/>",   //示位标  		
			10:"系统标识符: ${系统标识符}<br/>航标编号:${航标编号}<br/>航标名称:${航标名称}<br/>管理类别:${管理类别}<br/>工作状态:${工作状态}<br/>管理单位:${管理单位}<br/>维护单位:${维护单位}<br/>设置位置:${设置位置}<br/>航标岸别:${岸别}<br/>遥测遥控:${航标遥测遥控系统标识符}<br/>",   //过河标   
			4:"系统标识符: ${系统标识符}<br/>航标编号:${航标编号}<br/>航标名称:${航标名称}<br/>管理类别:${管理类别}<br/>工作状态:${工作状态}<br/>管理单位:${管理单位}<br/>维护单位:${维护单位}<br/>设置位置:${设置位置}<br/>航标岸别:${岸别}<br/>遥测遥控:${航标遥测遥控系统标识符}<br/>",   //桥涵标   
			3:"系统标识符: ${系统标识符}<br/>航标编号:${航标编号}<br/>航标名称:${航标名称}<br/>管理类别:${管理类别}<br/>工作状态:${工作状态}<br/>管理单位:${管理单位}<br/>维护单位:${维护单位}<br/>设置位置:${设置位置}<br/>航标岸别:${岸别}<br/>遥测遥控:${航标遥测遥控系统标识符}<br/>",   //横流标   
	
			1:"系统标识符: ${系统标识符}<br/>航标编号:${航标编号}<br/>航标名称:${航标名称}<br/>管理类别:${管理类别}<br/>工作状态:${工作状态}<br/>管理单位:${管理单位}<br/>维护单位:${维护单位}<br/>设置位置:${设置位置}<br/>航标岸别:${岸别}<br/>遥测遥控:${航标遥测遥控系统标识符}<br/>",   //左右通航标   
			8:"系统标识符: ${系统标识符}<br/>航标编号:${航标编号}<br/>航标名称:${航标名称}<br/>管理类别:${管理类别}<br/>工作状态:${工作状态}<br/>管理单位:${管理单位}<br/>维护单位:${维护单位}<br/>设置位置:${设置位置}<br/>航标岸别:${岸别}<br/>遥测遥控:${航标遥测遥控系统标识符}<br/>",   //航道提示标牌   
		  
			//通航建筑物 		 
			43:"系统标识符: ${系统标识符}<br/>船闸名称:${船闸名称}<br/>船闸级别:${船闸级别}<br/>通航能力:${通航能力}<br/>最小水深:${船闸门槛最小水深}<br/>测绘日期:${测绘日期}<br/>",   //船闸    
			//整治建筑物 
			48:"系统标识符: ${系统标识符}<br/>整治坝名称:${整治坝名称}<br/>整治坝类型:${整治坝类型}<br/>状态:${状态}<br/>管理部门:${管理部门}<br/>维护部门:${维护部门}<br/>测绘日期:${测绘日期}<br/>",   //整治坝     
			33:"系统标识符: ${系统标识符}<br/>护岸名称:${护岸名称}<br/>状态:${状态}<br/>管理部门:${管理部门}<br/>维护部门:${维护部门}<br/>测绘日期:${测绘日期}<br/>",   //护岸     
			//过河建筑物  
		   
			30:"系统标识符: ${系统标识符}<br/>过河线缆编号:${过河线缆编号}<br/>过河线缆名称:${过河线缆名称}<br/>线缆类别:${线缆类别}<br/>最低弧垂高度:${最低弧垂高度}<br/>测绘日期:${测绘日期}<br/>",   //过河线缆      
			28:"系统标识符: ${系统标识符}<br/>架空线缆编号:${架空线缆编号}<br/>架空线缆名称:${架空线缆名称}<br/>线缆类别:${线缆类别}<br/>最低弧垂高度:${最低弧垂高度}<br/>建设状态:${建设状态}<br/>测绘日期:${测绘日期}<br/>",   //架空线缆     
			  
			46:"系统标识符: ${系统标识符}<br/>桥梁名称:${桥梁名称}<br/>桥梁类别:${桥梁类别}<br/>桥梁用途:${桥梁用途}<br/>通航净高:${通航净高}<br/>通航净宽:${通航净宽}<br/>测绘日期:${测绘日期}<br/>",   //桥梁      
		    //临河建筑物  
			21:"系统标识符: ${系统标识符}<br/>码头名称:${简易固定码头名称}<br/>岸别:${岸别}<br/>审批文号:${审批文号}<br/>建设状态:${建设状态}<br/>管理单位:${管理单位}<br/>测绘日期:${测绘日期}<br/>",   //简易固定码头      
			29:"系统标识符: ${系统标识符}<br/>栈桥名称:${栈桥名称}<br/>岸别:${岸别 }<br/>审批文号:${审批文号}<br/>建设状态:${建设状态}<br/>测绘日期:${测绘日期}<br/>",   //栈桥      
			50:"系统标识符: ${系统标识符}<br/>浮码头名称:${浮码头名称}<br/>岸别:${岸别}<br/>审批文号:${审批文号}<br/>建设状态:${建设状态}<br/>管理单位:${管理单位}<br/>测绘日期:${测绘日期}<br/>",   //浮码头      
			52:"系统标识符: ${系统标识符}<br/>码头名称:${固定码头名称}<br/>码头类型:${固定码头类型}<br/>码头用途:${固定码头用途}<br/>审批文号:${审批文号}<br/>建设状态:${建设状态}<br/>管理单位:${管理单位}<br/>测绘日期:${测绘日期}<br/>",   //固定码头面      
			
			//拦河建筑物   
			26:"系统标识符: ${系统标识符}<br/>拦河坝名称:${拦河坝名称}<br/>状态:${状态}<br/>备注信息:${备注信息}<br/>测绘日期:${测绘日期}<br/>",//拦河坝       
			27:"系统标识符: ${系统标识符}<br/>水闸名称:${水闸名称}<br/>水闸类别:${水闸类别}<br/>状态:${状态}<br/>备注信息:${备注信息}<br/>测绘日期:${测绘日期}<br/>"   //水闸面
        }
    },
	/*
     * 
     */
    FeatureServeiceConfig: {
        //服务地址
        url: "http://10.0.183.6:6080/arcgis/rest/services/电子航道图/MapServer",
        //图层序号
        layerids: [4,63,9,10,11]
    },
    /*
    *查找配置
    *注：注意字段大小写
    */
    FindTaskConfig: {
        //服务地址
        url: "http://10.0.183.6:6080/arcgis/rest/services/电子航道图/MapServer",
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
    PrinterConfig: "http://10.0.183.6:6080/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task"
    //"http://’+GetIP()+‘:6080/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task"
        
};
//加载
HJConfig.Init();