/*
*绘制工具
*/
var HJDrawTool = {
    //地图
    map: null,
    //绘制工具
    drawTool: null,
    //事件句柄
    drawHandler: null,
    //绘制图层
    drawLayer: null,
    //符号
	type: null,
    symbol:null,
    //
	graphics: {},
	//
	onAdd: {
		fn: null,
		scope: null
	},
	onSave: {
		fn: null,
		scope: null
	},
	onPublish: {
		fn: null,
		scope: null
	},
	onDelete: {
		fn: null,
		scope: null
	},
    /*
    *初始化
    */
    Init: function (map) {
        HJDrawTool.map = map;
		 require([//添加引用
            "dojo/parser",
            "esri/config",
            "esri/toolbars/draw",           
            "dojo/domReady!"
        ], function (parser, esriConfig, Draw) {
       
        //添加绘制图层
        HJDrawTool.drawLayer = new esri.layers.GraphicsLayer();
        HJDrawTool.drawLayer.id = "绘图图层";
        HJDrawTool.map.addLayer(HJDrawTool.drawLayer);
		//创建工具
        HJDrawTool.drawTool = new Draw(HJDrawTool.map);
        HJDrawTool.drawTool.on("draw-end", HJDrawTool.onDrawEnd);  

        //信息面板
        HJDrawTool.drawLayer.infoTemplate = esri.InfoTemplate("信息", HJDrawTool.getInfoContent);
		});
    },
	getInfoContent: function(graphic) {
		var attrs = graphic.attributes;
		var result = '<table cellspacing="2" cellpadding="0" width="100%">' 
				+ '<col alert="right" width="60px" />' 
				+ '<col />' 
				+ '<tr>' 
					+ '<th>标绘名称:</th>' 
					+ '<td>' + attrs.title + '</td>' 
				+ '</tr>' 
				+ '<tr>' 
					+ '<th>标绘内容:</th>' 
					+ '<td style="word-break: break-all;">' + attrs.content + '</td>' 
				+ '</tr>';
		if(attrs.editable) {
			result += '<tr>' 
					+ '<th>标绘状态:</th>' 
					+ '<td>' + (attrs.published ? (attrs.audited ? "已公开" : "待审核") : "未公开") + '</td>' 
				+ '</tr>';
			result += '<tr>' 
					+ '<td colspan="2"><table cellspacing="5" cellpadding="0" width="100%"><tr align="center">';
			if(attrs.published) {
			} else {
				result += '<td><input type="button" value="发 布" onclick="HJDrawTool.doPublish(\'' + attrs.id + '\')" /></td>'; 
			}
			result += '<td><input type="button" value="删 除" onclick="HJDrawTool.doDelete(\'' + attrs.id + '\')" /></td>';
			result += '</tr></table></td>' 
					+ '</tr>' 
		}
		result += '</table>' 
		return result;
	},
    /*
    *设置工具  type:[POINT,POLYLINE,POLYGON,CIRCLE,EXTENT]
    */
    setTool: function (type) {   
        //设置当前工具
        HJMapTools.SetCurTool(this);

        //设置鼠标样式
        HJDrawTool.map.setMapCursor("crosshair");

        //设置绘制类型
        if (type == "polygon") {
            HJDrawTool.drawTool.activate(esri.toolbars.Draw.POLYGON);
            HJDrawTool.symbol = HJSymbol.DefaultFillSymbol;
			HJDrawTool.type = "polygon";
        } else if (type == "polyline") {
            HJDrawTool.drawTool.activate(esri.toolbars.Draw.POLYLINE);
            HJDrawTool.symbol = HJSymbol.DefaultLineSymbol;
			HJDrawTool.type = "polyline";
        } else if (type == "point") {
            HJDrawTool.drawTool.activate(esri.toolbars.Draw.POINT);
            HJDrawTool.symbol = HJSymbol.DefaultPointSymbol;
			HJDrawTool.type = "point";
        } else if (type == "circle") {
            HJDrawTool.drawTool.activate(esri.toolbars.Draw.CIRCLE);
            HJDrawTool.symbol = HJSymbol.DefaultFillSymbol;
			HJDrawTool.type = "circle";
        } else if (type == "extent") {
            HJDrawTool.drawTool.activate(esri.toolbars.Draw.EXTENT);
            HJDrawTool.symbol = HJSymbol.DefaultFillSymbol;
			HJDrawTool.type = "extent";
        } else {
			HJDrawTool.type = null;
		}
    },
    /*
    *绘制完成添加到地图
    */
	onDrawEnd: function(evt) {
		//构建元素对象
		var graphic = new esri.Graphic(evt.geometry, HJDrawTool.symbol);
        graphic.setAttributes({
			"id": "new", 
			"title": "", 
			"content": "" 
		});
        graphic = HJDrawTool.drawLayer.add(graphic);
        //显示弹出框
        var geometry = graphic.geometry;    
        if (graphic.geometry.type == "extent")
        {
            var x=(geometry.xmax+geometry.xmin)/2;
            var y=(geometry.ymax+geometry.ymin)/2;
            geometry = new esri.geometry.Point(x,y);
        } else if (graphic.geometry.type == "point")
        { } else {
            geometry = geometry.getPoint(0, 0);
        }
        //设置当前图层元素对象
        //HJDrawTool.drawLayer._downGr = graphic;
		HJDrawTool.graphics["new"] = graphic;
        HJMapTools.SetCurTool(null);
		
		var fn;
		var scope;
		if(HJDrawTool.onAdd) {
			if(HJMap.Util.isFunction(HJDrawTool.onAdd)) {
				fn = HJDrawTool.onAdd;
				scope = this;
			} else if(HJMap.Util.isFunction(HJDrawTool.onAdd.fn)) {
				fn = HJDrawTool.onAdd.fn;
				scope = HJMap.Util.isVoid(HJDrawTool.onAdd.scope) ? this : HJDrawTool.onAdd.scope;
			}
		}
		if(HJMap.Util.isFunction(fn)) {
			try {
				fn.call(
					scope,
					HJDrawTool.type, 
					graphic.toJson()
				);
			} catch(ex) {
				console.error(ex);
			}
		}
//        HJDrawTool.map.infoWindow.setTitle("信息");
//        HJDrawTool.map.infoWindow.setContent("标 题:<input id='graphic_title' type='text' style='width:200px' value=''/>" +
//                            "<br/>" +
//                            "内 容:<textarea  id='graphic_content' style='width:200px;height:100px;'></textarea>" +
//                            "<br/><br/>" +
//                            " <input type='button' value='取 消' onclick='HJDrawTool.removehGraphic()' />" +
//                            " <input type='button' value='保 存' onclick='HJDrawTool.doAdd()' />");//("content");
//        HJDrawTool.map.infoWindow.show(geometry);
        //为了消除提示标签遮挡窗口问题
		//HJDrawTool.setTool(HJDrawTool.type);
        //HJDrawTool.drawTool.showTooltips = true;
        //graphic._graphicsLayer.infoTemplate.show(geometry);
	},
    /*
    *取消
    */
	doCancel: function() {
        //隐藏弹出框
        HJDrawTool.map.infoWindow.hide();
	},
    /*
    *新建
    */
//    doAdd: function () {
//	},
    /*
    *保存
    */
//	doSave: function() {
//		var fn;
//		var scope;
//		if(HJDrawTool.onSave) {
//			if(HJMap.Util.isFunction(HJDrawTool.onSave)) {
//				fn = HJDrawTool.onSave;
//				scope = this;
//			} else if(HJMap.Util.isFunction(HJDrawTool.onSave.fn)) {
//				fn = HJDrawTool.onSave.fn;
//				scope = HJMap.Util.isVoid(HJDrawTool.onSave.scope) ? this : HJDrawTool.onSave.scope;
//			}
//		}
//		var id = HJDrawTool.drawLayer._downGr.attributes.id;
//		var title = dojo.byId("graphic_title").value;
//		var content = dojo.byId("graphic_content").value;
//		if(HJMap.Util.isFunction(fn)) {
//			try {
//				fn.call(scope, id, title, content);
//			} catch(ex) {
//				console.error(ex);
//			}
//		} else {
//			HJDrawTool.refreshGraphic({
//				"id": id, 
//				"title": title, 
//				"content": content
//			});
//		}
//	},
    /*
    *发布
    */
    doPublish: function (id) {
		var fn;
		var scope;
		if(HJDrawTool.onPublish) {
			if(HJMap.Util.isFunction(HJDrawTool.onPublish)) {
				fn = HJDrawTool.onPublish;
				scope = this;
			} else if(HJMap.Util.isFunction(HJDrawTool.onPublish.fn)) {
				fn = HJDrawTool.onPublish.fn;
				scope = HJMap.Util.isVoid(HJDrawTool.onPublish.scope) ? this : HJDrawTool.onPublish.scope;
			}
		}
		if(HJMap.Util.isFunction(fn)) {
			try {
				fn.call(scope, id);
			} catch(ex) {
				console.error(ex);
			}
		}
	},
    /*
    *删除
    */
    doDelete: function (id) {
		var fn;
		var scope;
		if(HJDrawTool.onDelete) {
			if(HJMap.Util.isFunction(HJDrawTool.onDelete)) {
				fn = HJDrawTool.onDelete;
				scope = this;
			} else if(HJMap.Util.isFunction(HJDrawTool.onDelete.fn)) {
				fn = HJDrawTool.onDelete.fn;
				scope = HJMap.Util.isVoid(HJDrawTool.onDelete.scope) ? this : HJDrawTool.onDelete.scope;
			}
		}
		if(HJMap.Util.isFunction(fn)) {
			try {
				fn.call(scope, id);
			} catch(ex) {
				console.error(ex);
			}
		} else {
			HJDrawTool.removehGraphic();
		}
    },
    /*
    *更新属性
    */
	refreshGraphic: function (id, attributes) {
		var graphic = HJDrawTool.graphics[id];
		if(!HJMap.Util.isVoid(graphic) && !HJMap.Util.isVoid(attributes)) {
			//隐藏弹出框
			HJDrawTool.map.infoWindow.hide();
			//更新元素
			graphic.setAttributes(attributes);
			if(id == attributes.id) {
				HJDrawTool.graphics[id] = graphic;
			} else {
				delete HJDrawTool.graphics[id];
				HJDrawTool.graphics[attributes.id] = graphic;
			}
		}
	},
    /*
    *删除元素
    */
	removehGraphic: function (id) {
		var graphic = HJDrawTool.graphics[id];
		if(!HJMap.Util.isVoid(graphic)) {
			//隐藏弹出框
			HJDrawTool.map.infoWindow.hide();
			//删除元素
			HJDrawTool.drawLayer.remove(graphic);
			delete HJDrawTool.graphics[id];
		}
	},
	/*
	*绘制元素到地图上
	*/
	drawGraphic:function(attributes, type, geometry){
		//使用json创建元素对象
		var symbol;
        if (type == "polygon") {
            symbol = HJSymbol.DefaultFillSymbol;
			geometry.type = "polygon";
        } else if (type == "polyline") {
            symbol = HJSymbol.DefaultLineSymbol;
			geometry.type = "polyline";
        } else if (type == "point") {
            symbol = HJSymbol.DefaultPointSymbol;
			geometry.type = "point";
        } else if (type == "circle") {
            symbol = HJSymbol.DefaultFillSymbol;
			geometry.type = "circle";
        } else if (type == "extent") {
            symbol = HJSymbol.DefaultFillSymbol;
			geometry.type = "extent";
        }
		var graphic=new  esri.Graphic(geometry);
		if(!HJMap.Util.isVoid(symbol)) {
			graphic.symbol=symbol;
		}
		graphic.setAttributes(attributes);
		//添加到地图标绘图层
		graphic = HJDrawTool.drawLayer.add(graphic);
		HJDrawTool.graphics[attributes.id] = graphic;
		
	},
    /*
    *清除
    */
    clear: function () {
		if(HJDrawTool.map){
    		HJDrawTool.map.infoWindow.hide();
    	}
    	if(HJDrawTool.drawLayer){
    		HJDrawTool.drawLayer.clear();
    	}
    	if(HJDrawTool.graphics){
    		HJDrawTool.graphics = {};
    	}
    },
    /*
    *释放工具
    */
    Dispose: function () {
        if (HJDrawTool.drawHandler) {
            dojo.disconnect(HJDrawTool.drawHandler);
        }

        HJDrawTool.drawTool.deactivate();

        //设置鼠标样式
        HJDrawTool.map.setMapCursor("default");
    }  
};