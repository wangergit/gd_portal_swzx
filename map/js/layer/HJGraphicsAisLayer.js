//base64加密 解密
function Base64() {
 
    // private property
    _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
 
    // public method for encoding
    this.encode = function (input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
        input = _utf8_encode(input);
        while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }
            output = output +
            _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
            _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
        }
        return output;
    }
 
    // public method for decoding
    this.decode = function (input) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (i < input.length) {
            enc1 = _keyStr.indexOf(input.charAt(i++));
            enc2 = _keyStr.indexOf(input.charAt(i++));
            enc3 = _keyStr.indexOf(input.charAt(i++));
            enc4 = _keyStr.indexOf(input.charAt(i++));
            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
            output = output + String.fromCharCode(chr1);
            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }
        }
        output = _utf8_decode(output);
        return output;
    }
 
    // private method for UTF-8 encoding
    _utf8_encode = function (string) {
        string = string.replace(/\r\n/g,"\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            } else if((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            } else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
 
        }
        return utftext;
    }
 
    // private method for UTF-8 decoding
    _utf8_decode = function (utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;
        while ( i < utftext.length ) {
            c = utftext.charCodeAt(i);
            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            } else if((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i+1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            } else {
                c2 = utftext.charCodeAt(i+1);
                c3 = utftext.charCodeAt(i+2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
        }
        return string;
    }
}

/*
*【ais图层】
*数据格式：
*JSON:
*  {
*    "geometry":{"x":104.414,"y":69.257},
*    "attributes":{"字段名":"字段值",
*                  "字段名":"字段值",
*                  ...},
*     "image":"航标图片地址",
*     "title":"航标标题"
*   }
*/
var HJGraphicsAisLayer =function(){    
    //地图
    this.map= null;
    //地址
    this.url= null;
    //图层名
    this.layername= null;
    //元素图层
    this.graphicsLayer = null;
    //聚合图层
    this.clusterLayer = null;
    //信息模版
    this.infoTemplate = null;
    //显示航标最大比例尺
    this.maxscale=200000;
    //是否已有数据
    this.hasdata=false;
	this.hasExtentChange=false;
    /*
    *初始化[地图，服务地址,图层名,属性显示配置]
    */
    this.Init= function (map, url,layername,attconfig,visible) {
        this.map = map;
        this.url = url;
        this.layername = layername;
       
        //添加图层
        if (this.graphicsLayer == null) {
            //元素图层
            this.graphicsLayer = new esri.layers.GraphicsLayer();
            this.graphicsLayer.id = layername;
            if (attconfig != undefined) {
                this.infoTemplate = esri.InfoTemplate("信息:",attconfig);
            }else{
				this.infoTemplate = esri.InfoTemplate("信   息:","船 名: ${name}<br/>船舶MMSI:${mmsi}<br/>船舶IMO:${imo}<br/>呼号:${callsign}<br/>最后时间:${time}");
			}
            this.map.addLayer(this.graphicsLayer);

           
        } else {
            this.graphicsLayer.clear();
            if (this.clusterLayer != null) {
                this.clusterLayer.clear();
            }
        }

       
        //当前对象
        var obj = this;
      
        //图层点击事件
        this.graphicsLayer.on("click", function (e) {
            if (e.graphic != undefined && e.graphic != null) {
                if (HJMap.MapTool&&HJMap.MapTool.identifyTask != undefined) {
                    IdentifyTaskTool.Stop();
                    //         
                }
				//HJMap.map.infoWindow.show(e.graphic.geometry);     
            }
        });

        
        
        //显隐控制        
        obj.graphicsLayer.on("visibility-change", function () {
        	
        		var cuslayer=HJMap.map.getLayer("clusters");
        
	            if (obj.graphicsLayer.visible) {
	            	obj.RequestData(obj,obj.url);
	            	if(cuslayer)
	            		cuslayer.setScaleRange(10000000, obj.maxscale);              
	            } else {
	            	if(cuslayer)
	            		cuslayer.setScaleRange(1, 1);
	            }
        	
        });     
        
        //图层显示控制
        this.graphicsLayer.visible = visible;
        this.RequestData(obj, this.url);
		HJMap.map.on('extent-change', function (evt) {
		  obj.hasExtentChange=true;
		  obj.RequestData(obj,obj.url);
		  obj.hasExtentChange=false;
		});
		
		 setInterval(function(){
			 if(obj.hasExtentChange)return;
			 obj.RequestData(obj,obj.url);
		 },10000);//1000为1秒钟
    };
    /*
     * 请求数据
     * */
    this.RequestData=function(obj,url){
    	if(obj.hasdata){
    		return;
    	}
		var extent=this.map.extent;
		if(extent==undefined){
			return;
		}
		if(HJMap.map.getScale()>this.maxscale||!obj.graphicsLayer.visible){
			return;
		}
		var param='{seq:0,lb:"'+extent.xmin+','+extent.ymin+'",rt:"'+extent.xmax+','+extent.ymax+'",circle:""}';
		var b = new Base64();  
        param = b.encode(param);  
		var ssurl="http://www.ais.msa.gov.cn/msaapi?cmd=0x5113&param="+param;
		var surl="http://10.0.109.54/xxy/SAis/AisAgent.ashx?url="+encodeURIComponent(ssurl);
		if(window.location.hostname!="10.0.183.81"){
			surl="http://180.76.157.180/service/SAis/AisAgent.ashx?url="+encodeURIComponent(ssurl);
		}
		
    	//当前对象
        //var obj = this;
        jQuery.get(surl,function (data) {        	
			var jdata=eval('('+data+')');
			obj.Add2Map(jdata.ship);
			
			obj.graphicsLayer.setScaleRange(obj.maxscale, 0);
			 //if(obj.map.extent){
			//	 obj.BuilderClusterLayer(obj,jdata.ship);
			 //}else{
			//	 obj.map.on("load",function(){
			//		 obj.BuilderClusterLayer(obj,jdata.ship);
			//	 });            		 
			 //}
        }); 
    };
    /*
    *添加到地图
    */
    this.Add2Map= function (aisdata) {
        var graphic, graphictitle, json;	
		this.graphicsLayer.clear();		
        for (var i = 0; i < aisdata.length; i++) {
            json = aisdata[i];
            //json.geometry.spatialReference = { "wkid": 4326 };

            //添加航标到地图
			var pt=new esri.geometry.Point();
			pt.x=parseFloat(json.longitude);
			pt.y=parseFloat(json.latitude);
            graphic = new esri.Graphic(pt);
            if(json.image == undefined||json.image == ''){
            	json.image = "/images/ais.png";
            }
			
		    var time =parseInt(json.time);
			var date=new Date(time)
            json.time=date.toLocaleString();
			
            //baseHbIcoUrl+json.image 图片路径控制，相对路径转绝对路径
            var imagePath = json.image;
            if(json.image.indexOf("http") == -1){
            	imagePath = baseHbIcoUrl+imagePath;
            }
			var rotate=parseFloat(json.truehead);
			var speed=parseFloat(json.speed);
			if(speed>20){
				speed=speed/10;
			}
			if(HJMap.map.getScale()<=20000){	
				var datenow=new Date();			
				if(date.getUTCMinutes()+30<datenow.getUTCMinutes()){
					graphic.symbol = HJSymbol.BuildAisSymbol(rotate,10,25,speed,0,200,0);
				}else{
					graphic.symbol = HJSymbol.BuildAisSymbol(rotate,10,25,speed,255,255,102);
				}
		
				//graphic.symbol = HJSymbol.BuildPictureSymbol(imagePath,rotate,0,0,14,22);
			}else{				
				graphic.symbol = HJSymbol.BuildAisSymbol(rotate,10,15,0,255,255,102);
			}
			graphic.attributes=json;
            graphic.infoTemplate=this.infoTemplate;
            this.graphicsLayer.add(graphic);
        }
    };
    /*
    *缩放到图层
    */
    this.ZoomToLayer= function () {
        //得到范围
        if (this.graphicsLayer == null) return;
        var graphicExtent = esri.graphicsUtils.graphicsExtent(this.graphicsLayer.graphics);
        if (graphicExtent.contains(HJConfig.ExtentConfig())) {
            graphicExtent = HJConfig.ExtentConfig();
        }
        //缩放到范围
        this.map.setExtent(graphicExtent);
    };  
    /*
    *释放资源
    */
    this.Dispose = function () {
        if (this.graphicsLayer) {
            this.map.removeLayer(this.graphicsLayer);
            this.graphicsLayer = null;

            this.map.removeLayer(this.clusterLayer);
            this.clusterLayer = null;
        }
    };
    //添加聚合图层
    this.BuilderClusterLayer = function (obj,data) {
        //聚合数据
        var sdata = dojo._base.array.map(data, function (p) {
            var latlng = new esri.geometry.Point(parseFloat(p.x), parseFloat(p.y), HJMap.map.spatialReference);
            //var webMercator = webMercatorUtils.geographicToWebMercator(latlng);
            
            var attributes = {
                //"Caption": p.caption,
                "Name": p.name,
                "mmsi": 'http://'+baseDataUrl+p.image
                // "Link": p.link
            };

            return {
                "x": latlng.x,
                "y": latlng.y,
                "attributes": attributes
            };
        });

        //显示字段
        var popupTemplate = new esri.dijit.PopupTemplate({
            "title": "",
            "fieldInfos": [{
                "fieldName": "Name",
                "label": "名 称:",
                visible: true
            }],
            "mediaInfos": [{
                "title": "",
                "caption": "",
                "type": "image",
                "value": {
                    "sourceURL": "{Image}"
                }
            }]
        });

        if (obj.clusterLayer == null) {
        	 var clusterResolution=1;        	
            //聚合图层 分辨率
            var latlng1 = new esri.geometry.Point(obj.map.extent.xmax, obj.map.extent.ymax, obj.map.spatialReference); //右上角  
            var latlng2 = new esri.geometry.Point(obj.map.extent.xmin, obj.map.extent.ymin, obj.map.spatialReference); //左下角  
            var webMercator1 = esri.geometry.webMercatorUtils.geographicToWebMercator(latlng1);
            var webMercator2 = esri.geometry.webMercatorUtils.geographicToWebMercator(latlng2);
            clusterResolution = (webMercator1.x - webMercator2.x) / this.map.width;
    	
            //聚合图层
            this.clusterLayer = new extras.ClusterLayer({
                "data": sdata,
                "distance": 50,
                "id": "clusters",
                "labelColor": "#fff",
                "labelOffset": 10,              
                "singleColor": "#888",
                "singleTemplate": popupTemplate,
                "resolution": clusterResolution,
                "spatialReference": obj.map.spatialReference,
                "clusterCountField": "clusterCount1"
            });

            //聚合渲染
            var renderer = new esri.renderers.ClassBreaksRenderer(HJSymbol.DefaultPointSymbol, "clusterCount1");

            var blue = HJSymbol.BuildPictureSymbol(baseHbIcoUrl+"/images/BluePin1LargeB.png", 0, 0, 15, 36, 36);
            var green = HJSymbol.BuildPictureSymbol(baseHbIcoUrl+"/images/GreenPin1LargeB.png", 0, 0, 15, 48, 48);
            var red = HJSymbol.BuildPictureSymbol(baseHbIcoUrl+"/images/RedPin1LargeB.png", 0, 0, 15, 64, 64);
            renderer.addBreak(0, 100, blue);
            renderer.addBreak(100, 200, green);
            renderer.addBreak(200, 1000000, red);

            obj.clusterLayer.setRenderer(renderer);
			obj.clusterLayer.name="聚合渲染";
            obj.map.addLayer(obj.clusterLayer);
        }

        if (obj.graphicsLayer.visible) {        	
        		obj.clusterLayer.setScaleRange(10000000, obj.maxscale);              
        } else {        	
        		obj.clusterLayer.setScaleRange(1, 1);
        }  
    };
    this.setScaleRange=function(minscale,maxscale){
		
	};
};