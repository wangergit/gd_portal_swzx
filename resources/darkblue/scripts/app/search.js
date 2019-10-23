(function(Global, Map) {
	var Me = this, Doms = {}, Vals = {
		"params": {},
		"types": [
			{ "name": "航标", "key": "hb" },
			{ "name": "桥梁", "key": "ql" },
			{ "name": "公共航道", "key": "gghd" },
			{ "name": "航道部门", "key": "hdbm" },
			{ "name": "过河线缆", "key": "ghxl" },
			{ "name": "架空线缆", "key": "jkxl" },
			{ "name": "架空管道", "key": "jkgd" },
			{ "name": "过河管道", "key": "ghgd" },
			{ "name": "索道", "key": "sd" },
			{ "name": "浮码头", "key": "fmt" },
			{ "name": "固定码头", "key": "gdmt" },
			{ "name": "简易固定码头", "key": "jymt" },
			{ "name": "船闸", "key": "cz" },
			{ "name": "升船机", "key": "sjj" }
		],
		"result": [],
		"pageCount": 0,
		"pageSize": 5,
		"currentPage": 1,
		"key": null,
		"shown": false,
		"type": -1
	}, searchCallBack = (function(Me, Doms, Vals) {
		return function(data) {
			Vals.result = data || [];
			var total = Vals.result.length;
			if ( total < Vals.pageSize) {
				Vals.pageCount =  1;
			} else {
				Vals.pageCount =  parseInt( total / Vals.pageSize);
				if ( total % Vals.pageSize > 0) {
					Vals.pageCount += 1;
				}
			}
			if (total > 0) {
				Doms.lalTotal.text("共" + total + "条记录");
				Doms.pagResult.empty();
				Doms.pagResult.append('<li><a href="javasript:;" onClick="map.search.prev()">&lt;</a></li>');
				for(var i = 1; i <= Vals.pageCount; i++) {
					Doms.pagResult.append('<li><a href="javasript:;" onClick="map.search.showPage(' + i + ')">' + i + '</a></li>');
				}
				Doms.pagResult.append('<li><a href="javasript:;" onClick="map.search.next()">&gt;</a></li>');
				Doms.pagResult.show();
			} else {
				Doms.lalTotal.text("暂无记录");
				Doms.pagResult.hide();
			}
			Doms.palResult.unloadopacity();
			Me.refreshSearchResult(1);
		};
	})(Me, Doms, Vals), onGraphicClick = (function(Me, Doms, Vals) {
		return function(grapic) {
			var attr = grapic.attributes;
			var param = Vals.params[attr.layerName] ;
			param = param ? param : (Vals.type < 0 ? null : Vals.params[Vals.types[Vals.type].key]);
			if (param && param.showAttr) {
				 param.layerId = param.layerids[0];
			} else {
				var param = {};
				for(var key in Vals.params){
					var layerSett = Vals.params[key];
					if (layerSett.name == "全部") {
						continue;
					}
					$(layerSett.layerids).each(function(i,v){
						 if(this==attr.layerId){
							 param.infowindows = layerSett.infowindows;
							 param.form = layerSett.form;
							 param.showAttr = layerSett.showAttr;
							 param.layerId = attr.layerId;
							 return false
						 }
					})
				}
				if(!param.infowindows) {
					return;
				}
			}
			Doms.lstInfo.empty();
			if(param.name == "桥梁"){
				var titleColor = "#0000ffc4"
				var keyStyle = "background:#dddddd35;width:24%;text-align:right;"
				var html = '<table style="width:100%;height:auto;border:none;">';
				html += '<tr><td colspan="4" style="text-align:center;color:' + titleColor + '">' + attr["NOBJNM"] + '</td></tr>';

				var forIndex = 0;
				for(var key in param.showAttr){
					forIndex ++;

					var ckey = param.showAttr[key];
					var value = (key && attr[key]) ? attr[key] : attr[ckey];
					if(!value || (value.toLowerCase && value.toLowerCase() == "null")) {
						 value = "&nbsp;";
					}

					if(forIndex % 2 == 1){
						html += "<tr>"
					}
					html += '<td style=' + keyStyle + '>' + ckey + '：</td>'
					if(typeof(value) == "number"){
						value = ckey.indexOf("宽") > -1 || ckey.indexOf("长") > -1 || ckey.indexOf("高") > -1 || ckey.indexOf("径") > -1 ? value + "米" : value + "个";
					}
					html += '<td style="width:26%;text-align:left;">' + value + '</td>'
					if(forIndex % 2 == 0){
						forIndex = 0;
						html += "</tr>"
					}	 
			   }
			   if(forIndex % 2 == 1){
					html += "<td style=" + keyStyle + "></td><td></td><tr>"
				}


				var fieldsParam = {
					"NAVRES" : "通航规则",
					"NAVDIN" : "航行方向",
					"ACMNCH" : "实测通航净高",
					"ACMNCW" : "实测通航净宽",
					"UBWTNO" : "通航孔上底宽",
					"SHGBNO" : "通航孔侧高",
					"NAHSPN" : "通航孔跨径",
					"WSNHDF" : "是否设置净高显示标志",
					"RETNCH" : "实时通航净高"
				}
				var fid = attr["FID_BAC"]
				//var fid = 94
				$.get("https://14.23.108.204:3300/arcgis/rest/services/ZB5/%E7%94%B5%E5%AD%90%E8%88%AA%E9%81%93%E5%9B%BEALL/MapServer/41/query?where=BRIDGEID=" + fid + "&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&resultOffset=&resultRecordCount=&queryByDistance=&returnExtentsOnly=false&datumTransformation=&parameterValues=&rangeValues=&f=json", {
					
				},function(data){
					data = JSON.parse(data)
					if(data && data.features && data.features.length > 0){
						var i ;
						for(i = 0 ; i < data.features.length ; i ++){
							if(i % 2 == 0){
								html += '<tr>'
							}
							var attributes = data.features[i].attributes;
							var table = '<table style="width:100%;"><tr><td colspan="2" style="text-align:center;color:' + titleColor + '">通航孔名称：' + attributes['NAMNAH'] + '</td></tr>'

							for(var Jkey in fieldsParam){
								table += '<tr><td style="background:#dddddd4f;width:48%;text-align:right;">' + fieldsParam[Jkey] + '：</td>'
								var v = typeof(attributes[Jkey]) == "number" ? Math.round(attributes[Jkey] * 10) / 10 : attributes[Jkey]
								if(typeof(v) == "number"){
									v = fieldsParam[Jkey].indexOf("宽") > -1 || fieldsParam[Jkey].indexOf("长") > -1 || fieldsParam[Jkey].indexOf("高") > -1 || fieldsParam[Jkey].indexOf("径") > -1 ? v + "米" : v + "个";
								}
								table += '<td style="width:52%;text-align:left;">' + v + '</td></tr>'
							}
							table += '</table>'
							html += '<td style="border:none;" colspan="2">' + table + '</td>'
							if(i % 2 == 1){
								html += '</tr>'
							}
						}
						if(i % 2 == 1){
							html += '<td style="border:none;" colspan="2"></td></tr>'
						}
						html += '</table>'
						Doms.lstInfo.append('<dd style="width:100%;height:100%;margin-left:0px;">' + html + '</dd>');	
						
					}else{
						html += '</table>'
						Doms.lstInfo.append('<dd style="width:100%;height:100%;margin-left:0px;">' + html + '</dd>');	
					}
				})
				/*var nkey = param.showAttr["BRGNAM"];
				 var nvalue = (attr["BRGNAM"])?attr["BRGNAM"]:attr[nkey];
				 var ckey = param.showAttr["BRGCOD"];
				 var cvalue = (attr["BRGCOD"])?attr["BRGCOD"]:attr[ckey];
				$.post(CONTEXT + "/manage/bridge/getBridgePic.do", {
					bridgename:nvalue,
					bridgecode:cvalue
				},function(json){
					 Doms.lstInfo.append('<dt>桥梁图片</dt>');
					if(json.state){
					 	Doms.lstInfo.append('<dd><img style="height: 150px"  src="' + json.picpath + '" /></dd>');	 
					}else{
					 	Doms.lstInfo.append('<dd>暂无图片</dd>');	 
					}
				})*/
			}else{
				for(var key in param.showAttr){
					var ckey = param.showAttr[key];
					var value = (key && attr[key]) ? attr[key] : attr[ckey];
					if(!value || (value.toLowerCase && value.toLowerCase() == "null")) {
						 value = "&nbsp;";
					}
					Doms.lstInfo.append('<dt>' + ckey + '</dt>');
					Doms.lstInfo.append('<dd>' + value + '</dd>');	 
			   }
			}
			Doms.palInfo.show();
		};
	})(Me, Doms, Vals);
	
	Me.clear = function() {
		Map.frame.FindTaskTool.Clear();
		Doms.palInfo.hide();
	};
	
	Me.refreshResult = function() {
		if (Vals.type >= 0) {
			Doms.palType.hide();
			Doms.palList.show();
		} else {
			Doms.palType.show();
			Doms.palList.hide();
		}
	};
	
	Me.showResult = function() {
		if (!Map.plotting.clear()) {
			return ;
		}
		Map.element.exit();
		Map.zoom.exit();
		Map.measure.exit();
		Map.views.close();
		Map.location.close();
		
		Me.refreshResult();
		if (!Vals.shown) {
			Doms.btnMore.addClass("active");
			Doms.palResult.show();
			Vals.shown = true;
		}
	};
	
	Me.hideResult = function() {
		if (Vals.shown) {
			Doms.btnMore.removeClass("active");
			Doms.palResult.hide();
			Vals.shown = false;
		}
		Map.search.select(-1);
	};
	
	Me.doSearch = function(value, callback) {
		var type = (Vals.type >= 0 && Vals.type < Vals.types.length) ? Vals.types[Vals.type].key : "qb", 
			param = Vals.params[type];
		if($.isFunction(callback)) {
			Map.frame.FindTaskTool.callBackFunc = callback;
		} else {
			Doms.palResult.loadopacity("数据加载中...");
			Map.frame.FindTaskTool.callBackFunc = searchCallBack;
		}
		Map.frame.FindTaskTool.graphicClick = onGraphicClick;
		if (value) {
			Map.frame.FindTaskTool.findParams.layerIds = param.layerids;
			Map.frame.FindTaskTool.findParams.searchFields = param.searchFields;
			Map.frame.FindTaskTool.FindByValue(value);
		} else {
			Map.frame.FindTaskTool.queryLayer(param.layerids[0]);
		}
		Vals.key = param.fkey;
	};
	
	Me.refreshSearchResult = function(page) {
		if (Vals.currentPage) {
			$(Doms.pagResult.children()[Vals.currentPage]).removeClass("active");
		}
		Vals.currentPage = (page > 0) ? (page > Vals.pageCount ? Vals.pageCount : page) : 1;
		$(Doms.pagResult.children()[Vals.currentPage]).addClass("active");
		if (Vals.currentPage == 1) {
			$(Doms.pagResult.children()[0]).addClass("disabled");
		} else {
			$(Doms.pagResult.children()[0]).removeClass("disabled");
		}
		if (Vals.currentPage == Vals.pageCount) {
			$(Doms.pagResult.children()[Vals.pageCount + 1]).addClass("disabled");
		} else {
			$(Doms.pagResult.children()[Vals.pageCount + 1]).removeClass("disabled");
		}
		
		Doms.lstResult.empty();
		for (var i = 0; i < Vals.pageSize; i++) {
			var index = (Vals.currentPage - 1) * Vals.pageSize + i;
			if (index > Vals.result.length) {
				break;
			}
			var obj = (index >= 0 && index < Vals.result.length) ? Vals.result[index] : {}, title = obj.value ? obj.value : ((Vals.key && obj.attributes) ? obj.attributes[Vals.key] : null);
			Doms.lstResult.append('<a href="javasript:;" class="list-group-item" onClick="map.search.position(' + i + ', ' + index + ')"><span class="badge list-group-item-info pull-left">' + (index + 1) + '</span><span class="list-group-item-heading">' + (title ? title : "暂无名称") + '</span></a>');
		}
	};
	
	Map["search"] = {
		"select": function(i) {
			if (Vals.type != i) {
				Me.clear();
				if (i >= 0 && i < Vals.types.length) {
					Vals.type = i;
					if (i > 0) {
						Doms.lalType.show();
						Doms.lalType.text(Vals.types[i].name);
					} else {
						Doms.lalType.hide();
					}
					Me.doSearch(null);
					
				} else {
					Vals.type = -1;
					Doms.lalType.hide();
					searchCallBack();
				}
				Me.refreshResult();
			}
		},
		"showPage": function(p) {
			if(p > 0 && Vals.currentPage != p) {
				Me.refreshSearchResult(p);
			}
		},
		"prev": function(p) {
			if(Vals.currentPage > 1) {
				Me.refreshSearchResult(Vals.currentPage - 1);
			}
		},
		"next": function(p) {
			if(Vals.currentPage < Vals.pageCount) {
				Me.refreshSearchResult(Vals.currentPage + 1);
			}
		},
		"position": function(s, i) {
			Doms.lstResult.children().removeClass("active");
			$(Doms.lstResult.children()[s]).addClass("active");
			var obj =  Vals.result[i];
			var gem ;
			if(obj.feature){
				gem = obj.feature.geometry;
			}else{
				gem = obj.geometry;
			}
			Map.frame.HJMap.zoom2Geometry(gem);
		},
		"close": Me.hideResult
	};
	
	$(function() {
		$.ajax({
			url: RESOURCE + "/data/searchParams.json",
			type: "GET",
			data: {},
			dataType: "json"
		}).done((function (Me) {
			return function (data) {
				Vals.params = data || {};
			};
		})(Me));
		
		Doms.btnMore = $("#sb_btn_more");
		Doms.lalType = $("#sb_lal_cate");
		Doms.txtSearch = $("#sb_txt_search");
		Doms.btnSearch = $("#sb_btn_search");
		Doms.lstResult = $("#sb_lst_result");
		Doms.lalTotal = $("#sb_lab_total");
		Doms.pagResult = $("#sb_pag_result");
		
		Doms.palResult = $("#searchbar_result");
		Doms.palType = $("#sb_result_cate");
		Doms.palList = $("#sb_result_result");
		
		Doms.palInfo = $("#dialog_info");
		Doms.lstInfo = $("#dialog_info .panel-body dl");
		
		$("#dialog_info button").click((function(Doms) {
			return function() {
				Doms.palInfo.hide();
			};
		})(Doms));
		
		
		var typeIconList = $("#sb_result_cate ul");
		for(var i = 0; i < Vals.types.length; i++) {
			var type = Vals.types[i];
			typeIconList.append('<li class="text-center"><button class="btn btn-link" type="button" onClick="map.search.select(' + i + ')"><span class="imgicon imgicon-' + type.key + '"></span><br />' + type.name + '</button></li>');
		}
		
		Doms.btnMore.click((function(Me) {
			return function() {
				if (Vals.shown) {
					Me.hideResult();
				} else {
					Me.showResult();
				}
			};
		})(Me));
		Doms.btnSearch.click((function(Global, Me, Doms, Vals) {
			return function() {
				var value = $.trim(Doms.txtSearch.val());
				if (value) {
					if (Vals.type < 0) {
						Vals.type = 0;
						Doms.lalType.hide();
					}
					Me.doSearch(value);
					Me.showResult();
				} else {
					Global.message({
						"style": "warning",
						"title": "错误",
						"text": "请输入搜索内容！"
					});
				}
			};
		})(Global, Me, Doms, Vals));
	});
	
})(this, map);