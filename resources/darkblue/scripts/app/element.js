(function(Global, Map) {
	var Me = this, Doms = {}, Vars = {
		"inEdit": false,
		"inSearch": false,
		"current": null,
		"layer": null
	}, Data = {
		"result": []
	}, AttrKeyTester = new RegExp(/^[a-zA-Z]/);
	
	function exitOther() {
		if (!Map.plotting.clear()) {
			return ;
		}
		Map.zoom.exit();
		Map.measure.exit();
		Map.search.close();
		Map.location.close();
		Map.views.close();
	}
	
	Me.startEditor = function() {
		if (!Vars.inEdit) {
			exitOther();
			Me.exitSearch();
			
			Map.frame.FeatureServeice.Init(Map.frame.HJMapTools.map, Map.frame.HJConfig.FeatureServeiceConfig.url);
			Doms["edit"].addClass("active");
			Vars.inEdit = true;
		}
	};
	
	Me.display = function() {
		Doms.detial.empty();
		if (Vars.current <= 0) {
			Doms.prev.addClass("disabled");
		} else {
			Doms.prev.removeClass("disabled");
		}
		if (Vars.current >= Data.result.length - 1) {
			Doms.next.addClass("disabled");
		} else {
			Doms.next.removeClass("disabled");
		}
		var obj = (Vars.current < 0) ? null : Data.result[Vars.current];
		var FeatuerAttrs = null;
		if(obj && obj.feature && obj.feature.attributes){
			Vars.layer = obj.layerId;
			$(FeatureUtil.FeatureLists).each(function(){
				if(this.layerId == parseInt(Vars.layer)){
					FeatuerAttrs = this.FeatuerAttrs;
					return false;
				}
			});
			for(var key in obj.feature.attributes) {
				var value = obj.feature.attributes[key];
				if(key == "OBJECTID") {
					Doms.detial.append('<input type="hidden" name="OBJECTID" value="' + value + '" />');
				} else if(!AttrKeyTester.test(key)) {
					var selectable = false;
					var options = null;
					if(FeatuerAttrs && FeatuerAttrs.length > 0){
						$(FeatuerAttrs).each(function(){
							var labelName = this.halias?this.halias:this.alias;
							if(labelName == key){
								if(this.values.indexOf(";")>0){
									options = this.values.split(";");
									selectable = true;
								}
							}
						})
					}
					if(selectable){
						var select_element = '<div class="form-group"><label class="col-sm-4 control-label">' + key + '</label><div class="col-sm-8">';
						select_element += '<select name="' + key + '" class="form-control">';
						$(options).each(function(){
							var e_options = this.split(".");
							if(e_options[1] == value)
								select_element += '<option selected="selected" value ="'+e_options[0]+'">'+e_options[1]+'</option>';
							else
								select_element += '<option value ="'+e_options[0]+'">'+e_options[1]+'</option>';
						});
						select_element += '</select></div></div>';
						Doms.detial.append(select_element);
					}else{
						Doms.detial.append('<div class="form-group"><label class="col-sm-4 control-label">' + key + '</label><div class="col-sm-8"><input type="text" name="' + key + '" class="form-control" value="' + (value && value != "Null" ? value : "") + '" maxlength="20" /></div></div>');
					}
				}  
			}
		} else {
			Vars.layer = null;
		}
	};
	
	Me.doEditorPrev = function() {
		if (Vars.inEdit) {
			Vars.current -= 1;
			Me.display();
		}
	};
	
	Me.doEditorNext = function() {
		if (Vars.inEdit) {
			Vars.current += 1;
			Me.display();
		}
	};
	
	Me.closeEditor = function() {
		Doms.dialog.hide();
	};
	
	Me.exitEditor = function() {
		if (Vars.inEdit) {
			Map.frame.FeatureServeice.Dispose();
			Doms["edit"].removeClass("active");
			Vars.inEdit = false;
		}
		Me.closeEditor();
	};
	
	Me.startSearch = function() {
		if (!Vars.inSearch) {
			exitOther();
			Me.exitEditor();
			
			Map.frame.IdentifyTaskTool.Init(Map.frame.HJMapTools.map, Map.frame.HJConfig.IdentifyConfig.url);
			Doms["search"].addClass("active");
			Vars.inSearch = true;
		}
	};
	
	Me.exitSearch = function() {
		if (Vars.inSearch) {
			Map.frame.IdentifyTaskTool.Dispose();
			Doms["search"].removeClass("active");
			Vars.inSearch = false;
		}
	};
	
	Me.getFeatureAttrObj = function(FeatureAttrs,key) {
		var featureAttr = null
		$(FeatureAttrs).each(function(){
			if(this.alias == key){
				featureAttr = this;
				return false;
			}
		});
		return featureAttr;
	};
	
	Me.buildResult = function(list,type){
		Doms.searchResult.empty();
		var FeatuerAttrs = null;
		$(FeatureUtil.FeatureLists).each(function(){
			if(this.professionalType == parseInt(type)){
				FeatuerAttrs = this.FeatuerAttrs;
				return false;
			}
		});
		var rsTable = $("<table class='table table-striped table-hover table-bordered' >");
		var rshead = "<thead><tr>";
		$(FeatuerAttrs).each(function(){
			if(this.visiable){
				rshead += "<th>"+(this.halias?this.halias:this.alias)+"</th>"
			}
		});
		rshead += "</tr></thead>";
		$(rsTable).append(rshead);
		var rsTbody = $("<tbody>");
		var flag = false;
		$(list).each(function(){
			var feature = this;
			tr = $("<tr>");
			$(tr).data("data",feature);
			$(FeatuerAttrs).each(function(){
				if(this.visiable){
					flag = false;
					for(var k in feature){
						if(this.name == k){
							$(tr).append("<td>"+feature[k]+"</td>")
							flag = true;
							break;
						}
					}
					if(!flag){
						$(tr).append("<td>");
					}
				}
			});
			$(rsTbody).append(tr);
			$(tr).click(function(){
				var attr = {};
				var featureAttr = $(this).data("data");
				if(featureAttr && FeatuerAttrs){
					//Doms.detial.find('input[name="'+this.description+'"]').val("");
					for(var k in featureAttr){
						$(FeatuerAttrs).each(function(){
							if(this.name == k){
								var el = Doms.detial.find('input[name="'+this.alias+'"]')
								if(el.length > 0){
									$(el[0]).val(featureAttr[k])
								}else{
									var el = Doms.detial.find('select[name="'+this.alias+'"]')
									var options = $(el).find('option');
									$(options).each(function(){
										if($(this).text() == featureAttr[k]){
											$(this).attr("selected", "selected");
										}
									})
									
								}
								//$('#editFeatureModal div.modal-body table input[name="'+this.description+'"]').val(featureAttr[k]);
//								attr[this.description] = featureAttr[k];
								return false;
							}
						});
					}
				}
				
				/*
				console.log("查询接口要素");
				console.log(featureAttr);
				Data.result = [];
				Data.result.push(featureAttr);
				Vars.current = 0;
				Me.display();
				*/
			});
		})
		$(rsTable).append(rsTbody);
		Doms.searchResult.append(rsTable);
	};
	
	Map["element"] = {
		"closeEditor": Me.closeEditor,
		"searchFeature": function() {
			var param = {
				searchName: Doms.searchName.val(),
				type: Doms.searchType.val(),
				page: "1",
				nums: "10"
			};
			$.getJSON("http://14.23.108.204:6699/sys/maintain/DataMapping!queryDataByType.do", param, function(data) {
				Doms.searchResult.empty();
				Doms.searchList.show();
				Doms.searchPagination.hide();
				if(data.success && data.obj.allNum > 0){
					Me.buildResult(data.obj.list,param.type);
					if(data.obj.allNum > parseInt(param.nums)){
						Doms.searchPagination.bootstrapPaginator({
							 currentPage: parseInt(param.page),//当前的请求页面。
							 totalPages: parseInt(param.nums),//一共多少页。
							 bootstrapMajorVersion: 3,//bootstrap的版本要求。
							 totalPages: Math.ceil(data.obj.allNum/parseInt(param.nums)),
							 onPageClicked: function (event, originalEvent, type, page){//换页
								 $.getJSON("http://14.23.108.204:6699/sys/maintain/DataMapping!queryDataByType.do", {
									searchName: Doms.searchName.val(),
									type: Doms.searchType.val(),
									page: page.toString(),
									nums: param.nums
								 }, function(json) {
									Me.buildResult(json.obj.list,param.type);
								 });
							 }
						})
						Doms.searchPagination.show();
					}
					Doms.searchList.show();
				}else{
					if(data.msg)
						Doms.searchResult.append("<p>"+data.msg+"</p>");
					else
						Doms.searchResult.append("<p>查询结果为空</p>");
				}
			});
			
		},
		"saveEditor": function() {
			var obj = Data.result[Vars.current];
			if(!obj) {
				Global["message"]({
					"style": "warning",
					"title": "错误",
					"text": "此要素未配置!"
				});
				return;
			}
			var attrs;
			$(FeatureUtil.FeatureLists).each(function(){
				if(this.layerId == Vars.layer){
					attrs = this.FeatuerAttrs;
					return false;
				}
			});
			var features = new Array();
			for(var i = 0; i < obj.length; i++){
				var attr = obj[i];
				features.push({
					"name": attr.name,
					"alias": attr.alias
				});
			}
			var str = "",objAttr=null;
			$(Doms.detial.serializeArray()).each(function(){
				if(this.value){
					if(str.length > 0){
						str += ",";
					}
					objAttr = Me.getFeatureAttrObj(attrs,this.name);
					if(objAttr == null){
						if(this.name=="OBJECTID"){
							str += "\""+this.name+"\":"+this.value;
						}else{
							str += "\""+this.name+"\":\""+this.value+"\"";
						}
					}else{
						if(objAttr.type == "esriFieldTypeString"){
							str += "\""+objAttr.name+"\":\""+this.value+"\""
						}else if(objAttr.type == "esriFieldTypeDate"){
							str += "\""+objAttr.name+"\":"+(new Date(this.value).getTime()+8*3600*1000)
						}else{
							str += "\""+objAttr.name+"\":"+this.value
						}
					}
				}
			});
//			console.log(JSON.stringify(params));
			Doms.mask.loadopacity("操作处理中...");
			$.ajax({
				"url": "https://10.0.183.6:6443/arcgis/rest/services/电子航道图/FeatureServer/" + Vars.layer + "/updateFeatures",
				"type": "POST",
				"data": {
					"features": "[{\"attributes\":{" + str + "}}]",
					"rollbackOnFailure": true,
					"gdbVersion": "",
					"f":"json"
				},
				"dataType": "json"
			}).done(function(json) {
				Doms.mask.unloadopacity();
				if (json.updateResults && json.updateResults[0] && json.updateResults[0].success) {
					Me.closeEditor();
				} else {
					Global["message"]({
						"style": "error",
						"title": "错误",
						"text": "操作失败!"
					});
				}
			}).fail(function() {
				Doms.mask.unloadopacity();
				Global["message"]({
					"style": "error",
					"title": "错误",
					"text": "操作失败!"
				});
			});
		},
		"exit": function () {
			Me.exitEditor();
			Me.exitSearch();
		}
	};
	
	Global["FeatureTool"] = {
		"show": function(list) {
			Data.result = list || [];
			if (Data.result.length > 0) {
				Doms.pagination.show();
				Vars.current = 0;
			} else {
				Doms.pagination.hide();
				Vars.current = null;
			}
			Me.display();
			Doms.dialog.show();
			Doms.dialog.find(".panel-body").height(Doms.dialog.innerHeight() - Doms.dialog.find(".panel-heading").outerHeight() - Doms.dialog.find(".panel-footer").outerHeight());
			Doms.dialog.css("left", Math.round(($(window).width() - Doms.dialog.width()) / 2) + "px");
			Doms.dialog.css("top", Math.round(($(window).height() - Doms.dialog.height()) / 2) + "px");
			Doms.mask.unloadopacity();
		},
		"showWait": function() {
			Doms.mask.loadopacity("操作处理中...");
		}
	};
	
	$(function() {
		Doms["edit"] = $("#tools_editor");
		Doms["search"] = $("#tools_info");
		
		Doms["edit"].click((function(Me, Vars) {
			return function () {
				if (Vars.inEdit) {
					Me.exitEditor.call(Me);
				} else {
					Me.startEditor.call(Me);
				}
			};
		})(Me, Vars));
		
		Doms["search"].click((function(Me, Vars) {
			return function () {
				if (Vars.inSearch) {
					Me.exitSearch.call(Me);
				} else {
					Me.startSearch.call(Me);
				}
			};
		})(Me, Vars));
		
		Doms.dialog = $("#dialog_feature");
		Doms.mask = $("#dialog_feature .panel");
		Doms.pagination = $("#feature_pagination");
		Doms.prev = $("#feature_btn_prev");
		Doms.next = $("#feature_btn_next");
		Doms.detial = $("#feature_detial");
		Doms.searchName = $("#searchName");
		Doms.searchType = $("#searchType");
		Doms.searchList = $("#searchList");
		Doms.searchResult = $("#searchResult");
		Doms.searchPagination = $("#searchPagination");
		
		Doms.prev.click(Me.doEditorPrev);
		Doms.next.click(Me.doEditorNext);
	});
	
}) (this, map);