/*
 * function:1>加载地图;初始化地图图层;地图搜索功能;2>初始化新闻;3>初始化水位站div;4>初始化航标idv; 5>获取系统时间;
 * 
 * creatime:2016/3/24
 * 
 */

(function(global) {
	var Me = this, disabled = false, showIdentify = false, isEditFeature = false, plottingType = null, plottingGraphics = null;
	
	function clearSearch() {
		if(showIdentify) {
			global.wmstmap.IdentifyTaskTool.Dispose();
			showIdentify = false;
		}
	}
	
	function closeEditFeature() {
		if(isEditFeature) {
			isEditFeature = false;
			global.wmstmap.FeatureServeice.Dispose();
		}
	}
	
	function clearMeasure() {
		global.wmstmap.HJMeasure.measutreClear();
	}
	
	function clearPlotting() {
		global.wmstmap.HJDrawTool.clear();
	}
	
	function closePlottingModal() {
		$("#addPlottingModal").hide();
		plottingType = null;
		plottingGraphics = null;
		$("#addPlottingModal .modal-title").text("标绘");
		$("#addPlottingModal input[type=text]").val("");
		$("#addPlottingModal textarea").val("");
	}
	
	$(document).ready(function(){
	});
	
	global.TopMenu = {
		init: function() {
			global.wmstmap.HJDrawTool.onAdd = {
				"fn": function(type, geometry) {
					plottingType = type;
					plottingGraphics = geometry;
					delete plottingGraphics.attributes;
					$("#addPlottingModal .modal-title").text("新建标绘");
					$("#addPlottingModal").show();
				},
				"scope": Me
			};
			
			global.wmstmap.HJDrawTool.onPublish = {
				"fn": function(id) {
					$.post(contextPath + "/common/submitPlotting.do", {
						"id": id
					}, function(json){
						if(json && json.status) {
							wmstmap.HJDrawTool.refreshGraphic(json.data.id, {
								"id": json.data.id,
								"title": json.data.title,
								"content": json.data.content,
								"published": json.data.published,
								"audited": json.data.audited,
								"editable": true
							});
						} else {
							alert("标绘发布申请提交失败！");
						}
					});
				},
				"scope": global
			};
			
			global.wmstmap.HJDrawTool.onDelete = {
				"fn": function(id) {
					$.post(contextPath + "/common/removePlotting.do", {
						"id": id
					}, function(json){
						if(json && json.status) {
							wmstmap.HJDrawTool.removehGraphic(id);
						} else {
							alert("标绘删除失败！");
						}
					});
				},
				"scope": global
			};
			
			$("#jq_topmenu li").hover(function(){
				if(!disabled) {
					$(this).addClass("hover").find("div.jq_hidebox").show();
				}
			}, function(){
				$(this).removeClass("hover").find("div.jq_hidebox").hide();
			});
		},
		setDisable: function(value) {
			if(value) {
				if(!disabled) {
					clearSearch();
					closeEditFeature();
					clearMeasure();
					clearPlotting();
				}
				disabled = true;
			} else {
				if(disabled) {
				}
				disabled = false;
			}
			
		},
		editFeature: function() {
			if(!disabled) {
				if(isEditFeature) {
					closeEditFeature();
				} else {
//					FeatureTool.show();
					clearMeasure();
					clearPlotting();
					global.wmstmap.FeatureServeice.Init(global.wmstmap.HJMapTools.map, global.wmstmap.HJConfig.FeatureServeiceConfig.url);
					isEditFeature = true;
				}
			}
		},
		search: function() {
			if(!disabled) {
				if(showIdentify) {
					global.wmstmap.IdentifyTaskTool.Dispose();
					showIdentify = false;
				} else {
					clearMeasure();
					clearPlotting();
					global.wmstmap.IdentifyTaskTool.Init(global.wmstmap.HJMapTools.map, global.wmstmap.HJConfig.IdentifyConfig.url);
					showIdentify = true;
				}
			}
		},
		zoomFull: function() {
			global.wmstmap.HJNavigation.zoomToFullExtent();
		},
		zoomNext: function() {
			global.wmstmap.HJNavigation.zoomToNextExtent();
		},
		zoomPrev: function() {
			global.wmstmap.HJNavigation.zoomToPrevExtent();
		},
		zoomIn: function() {
			global.wmstmap.HJNavigation.ZoomIn();
		},
		zoomOut: function() {
			global.wmstmap.HJNavigation.ZoomOut();
		},
		roam: function() {
			global.wmstmap.HJNavigation.Pan();
		},
		mileage: function() {
			if(!disabled) {
				clearSearch();
				closeEditFeature();
				clearMeasure();
				clearPlotting();
				global.MileageTool.show();
			}
		},
		bookMark: function() {
			if(!disabled) {
				clearSearch();
				closeEditFeature();
				clearMeasure();
				clearPlotting();
				global.BookMarkTool.show();
			}
		},
		export: function() {
			global.wmstmap.HJPrinter.exportImg()
		},
		print: function() {
			global.wmstmap.HJPrinter.printPdf()
		},
		Measure: {
			length: function() {
				if(!disabled) {
					clearSearch();
					closeEditFeature();
					clearPlotting();
					global.wmstmap.HJMeasure.measutreLength();
				}
			},
			area: function() {
				if(!disabled) {
					clearSearch();
					closeEditFeature();
					clearPlotting();
					global.wmstmap.HJMeasure.measutreArea();
				}
			},
			clear: function() {
				if(!disabled) {
					clearSearch();
					closeEditFeature();
					clearMeasure();
				}
			}
		},
		Plotting: {
			showAll: function() {
				if(!disabled) {
					clearSearch();
					closeEditFeature();
					clearPlotting();
					$.post(contextPath + "/common/findPlotting.do", {
					}, function(json){
						$(json).each(function(index, ele){
							try {
								var type = ele.type;
								var geometry = JSON.parse(ele.graphics);
								var attributes = {
									"id": ele.id,
									"title": ele.title,
									"content": ele.content,
									"editable": false
								};
								global.wmstmap.HJDrawTool.drawGraphic(attributes, type, geometry);
							} catch(ex) {
								console.error(ex);
							}
						});
					});
				}
			},
			showSelf: function() {
				if(!disabled) {
					clearSearch();
					closeEditFeature();
					clearPlotting();
					$.post(contextPath + "/common/findSelfPlotting.do", {
					}, function(json){
						$(json).each(function(index, ele){
							try {
								var type = ele.type;
								var geometry = JSON.parse(ele.graphics);
								var attributes = {
									"id": ele.id,
									"title": ele.title,
									"content": ele.content,
									"published": ele.published,
									"audited": ele.audited,
									"editable": true
								};
								global.wmstmap.HJDrawTool.drawGraphic(attributes, type, geometry);
							} catch(ex) {
								console.error(ex);
							}
						});
					});
				}
			},
			addCancel: function() {
				global.wmstmap.HJDrawTool.removehGraphic("new");
		 		closePlottingModal();
			},
			addSave: function() {
				$("#addPlottingModal input").prop("disabled", true);
				$("#addPlottingModal textarea").prop("disabled", true);
				$.post(contextPath + "/common/addPlotting.do", {
					"type": plottingType,
					"graphics": JSON.stringify(plottingGraphics),
					"title": $("#graphic_title").val(),
					"content": $("#graphic_content").val()
				}, function(json){
					if(json && json.status) {
						closePlottingModal();
						wmstmap.HJDrawTool.refreshGraphic("new", {
							"id": json.data.id,
							"title": json.data.title,
							"content": json.data.content,
							"published": json.data.published,
							"audited": json.data.audited,
							"editable": true
						});
					} else {
						alert("标绘保存失败！");
					}
				}).always(function() {
					$("#addPlottingModal input").removeProp("disabled");
					$("#addPlottingModal textarea").removeProp("disabled");
				});
			},
			addPoint: function() {
				if(!disabled) {
					clearSearch();
					closeEditFeature();
					clearMeasure();
					global.wmstmap.HJDrawTool.setTool("point");
				}
			},
			addLine: function() {
				if(!disabled) {
					clearSearch();
					closeEditFeature();
					clearMeasure();
					global.wmstmap.HJDrawTool.setTool("polyline");
				}
			},
			addArea: function() {
				if(!disabled) {
					clearSearch();
					closeEditFeature();
					clearMeasure();
					global.wmstmap.HJDrawTool.setTool("polygon");
				}
			},
			addCircle: function() {
				if(!disabled) {
					clearSearch();
					closeEditFeature();
					clearMeasure();
					global.wmstmap.HJDrawTool.setTool("circle");
				}
			},
			addSquare: function() {
				if(!disabled) {
					clearSearch();
					closeEditFeature();
					clearMeasure();
					global.wmstmap.HJDrawTool.setTool("extent");
				}
			},
			clear: function() {
				if(!disabled) {
					clearSearch();
					closeEditFeature();
					clearPlotting();
				}
			}
		}
	};
	
}) (this);

var FeatureTool = {
		
		updateFeaturesUrl: "http://192.168.10.208:6080/arcgis/rest/services/%E5%B9%BF%E4%B8%9C/%E7%94%B5%E5%AD%90%E8%88%AA%E9%81%93%E5%9B%BE/FeatureServer",
			
		hdyhgl:"http://183.234.61.248:6699",
		
		FeatureList:null,
		
		FeatureListIndex:0,
		
		hide:function() {
			$('#editFeatureModal').hide();	
		},
		
		showWait:function(){
			$('#editFeatureModal .modal-container').loadopacity();
			$('#editFeatureModal div.modal-body table').html("<tr><td>正在查询地图要素</td></tr>");
			$('#editFeatureModal').show();
			$("#searchin").hide();
		},
		
		show: function(list) {
			$("#searchin").show();
			$('#editFeatureModal .modal-container').unloadopacity();
			$("#featuers").hide();
			if(list.length > 1){
				FeatureTool.FeatureList = list;
				$("#featuers").show();
			}else if(list.length == 0){
				FeatureTool.hide();
			}
			if(list[0]){
				FeatureTool.fillFeatureAttr(list[0])
				$('#editFeatureModal').show();
			}	
		},
		
		fillPrevFeature: function(){
			if(FeatureTool.FeatureListIndex == 0){
				FeatureTool.FeatureListIndex = FeatureTool.FeatureList.length - 1;
			}else{
				FeatureTool.FeatureListIndex = FeatureTool.FeatureListIndex - 1;
			}
			FeatureTool.fillFeatureAttr(FeatureTool.FeatureList[FeatureTool.FeatureListIndex])
		},
		
		fillNextFeature: function(){
			if(FeatureTool.FeatureListIndex == (FeatureTool.FeatureList.length - 1)){
				FeatureTool.FeatureListIndex = 0;
			}else{
				FeatureTool.FeatureListIndex = FeatureTool.FeatureListIndex + 1;
			}
			FeatureTool.fillFeatureAttr(FeatureTool.FeatureList[FeatureTool.FeatureListIndex])
		},
		
		showSearch: function(){
			
			$("#searchResult").empty();
			$('#searchFeatureModal').show();
		},
		
		hideSearch: function(){
			$('#searchFeatureModal').hide();	
		},
		
		fillFeatureAttr: function(obj){
			$('#editFeatureModal div.modal-body form table').empty();
			console.log(obj);
			if(obj.feature.attributes){
				$('#editFeatureModal').attr("layerId",obj.layerId);
				for(var item in obj.feature.attributes){  
					if(item == 'OBJECTID'){
						 $('#editFeatureModal div.modal-body table').append("<input  name='"+item+"' type='hidden' value='"+obj.feature.attributes[item]+"' />");
					} else if(!/^[a-zA-Z]/.test(item)){  //item 表示Json串中的属性，如'name'  
			            var jValue=obj.feature.attributes[item];//key所对应的value  
			            var str = "<tr><th>"+item+":</th><td>"+
			            "<input class='form-control' id='graphic_title' name='"+item+"' type='text' value='"+(jValue && jValue!="Null"?jValue:"")+"' maxlength='20' /></td></tr>";
			            $('#editFeatureModal div.modal-body table').append(str);
			        }  
			    } 
			}
		},
		
		updateFeatures: function(){
			var layerId = $('#editFeatureModal').attr("layerId");
			FeatureTool.FeatureList = null;
			$(FeatureUtil.FeatureLists).each(function(){
				if(this.layerId == layerId){
					FeatureTool.FeatureList = this.FeatuerAttrs;
					return false;
				}
			});
			if(!FeatureTool.FeatureList) alert("此要素未配置");
			var features = new Array();
			for(var i=0;i<FeatureTool.FeatureList.length;i++){
				var feature = {};
				feature.name = FeatureTool.FeatureList[i].name;
				feature.alias = FeatureTool.FeatureList[i].alias;
				features.push(feature);
			}
			var data = $("#featureForm").serializeArray();
			var str = "[{\"attributes\":{",objAttr=null;
			$(data).each(function(){
				if(this.value){
					objAttr = FeatureTool.getFeatureAttrObj(FeatureTool.FeatureList,this.name);
					if(objAttr != null){
						if(objAttr.type == "esriFieldTypeString"){
							str += "\""+objAttr.name+"\":\""+this.value+"\","
						}else if(objAttr.type == "esriFieldTypeDate"){
							str += "\""+objAttr.name+"\":"+(new Date(this.value).getTime()+8*3600*1000)+","
						}else{
							str += "\""+objAttr.name+"\":"+this.value+","
						}
					}else{
						str += "\""+this.name+"\":\""+this.value+"\","
					}
				}
			});
			if(str.length > 2){
				str = str.substring(0,str.length-1);
			}
			str += "}}]";
			var params = {features:str,rollbackOnFailure:true,gdbVersion:"",f:"json"};
//			console.log(JSON.stringify(params));
			$('#editFeatureModal .modal-container').loadopacity();
			$.post(FeatureTool.updateFeaturesUrl+"/"+layerId+"/updateFeatures",
					params,function(json){
				$('#editFeatureModal .modal-container').unloadopacity();
				FeatureTool.hide();
			})
		},
		
		search:function(){
			var searchName = $("#searchName").val(),professionalType = $("#searchType").val();
			$("#searchResult").html("加载中...");
			$.post(FeatureTool.hdyhgl + "/sys/maintain/professionalDrawAction!professionalDrawData.do",
					{professionalType:professionalType,searchName:searchName,page:1},function(json){
						$("#searchResult").empty();
				var data = JSON.parse(json); 
				if(data.success && data.obj.allNum > 0){
					FeatureTool.buildResult(data.obj.list,professionalType);
				}else{
					if(data.msg)
						$("#searchResult").append("<p>"+data.msg+"</p>");
					else
						$("#searchResult").append("<p>查询结果为空</p>");
				}
			})
		},
		
		buildResult:function(list,type){
			var FeatuerAttrs = null;
			$(FeatureUtil.SearchLists).each(function(){
				if(this.professionalType == type){
					FeatuerAttrs = this.FeatuerAttrs;
					return false;
				}
			});
			var rsTable = $("<table class='filetable'>");
			var rshead = "<thead><tr>";
			$(FeatuerAttrs).each(function(){
				if(this.visiable){
					rshead += "<th>"+this.description+"</th>"
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
					for(var k in featureAttr){
						$(FeatuerAttrs).each(function(){
							if(this.name == k){
								$('#editFeatureModal div.modal-body table input[name="'+this.description+'"]').val(featureAttr[k]);
//								attr[this.description] = featureAttr[k];
								return false;
							}
						});
					}
					FeatureTool.hideSearch();
				});
			})
			$(rsTable).append(rsTbody);
			$("#searchResult").append(rsTable);
			$(rsTable)
		},
		
		getFeatureAttrObj:function(FeatureAttrs,key){
			var featureAttr = null
			$(FeatureAttrs).each(function(){
				if(this.alias == key){
					featureAttr = this;
					return false;
				}
			});
			return featureAttr;
		},
		
		FeatureList: null
		
}

var BookMarkTool = {
	init :function(){
		$("#bookmarks").html("");
		BookMarkTool.showListPannel();
		$.ajax({
			url: contextPath + "/common/getMapTag.do",
			type: "POST",
			data: {},
			dataType: "json"
		}).done(function(result) {
			if(result){
				for(var i in result) {
					var ele = result[i];
					var li = $("<li data-x='"+ele.x+"' data-y='"+ele.y+"' data-level='"+ele.level+"'>");
					li.append("<img style=\"cursor:pointer\" src=\""+resPath+"/images/sign_delete.png\" onclick=\"BookMarkTool.remove('"+ele.id+"');\" />" 
					+ "<a href=\"javascript:void(0);\">"+ele.title+"</a>");
					$(li).on("click",function(){
						BookMarkTool.position(parseFloat($(this).attr("data-x")),parseFloat($(this).attr("data-y")),parseFloat($(this).attr("data-level")));
					})
				 	$("#bookmarks").append(li);
				}
			 }
		}).fail(function() {
			alert("请求失败!");
		});
	},
	position:function(x,y,level){
		wmstmap.HJMap.centerAndZoom(x,y,level);
	},
	showAddPannel:function(){
		$("#txt_title").val("");
		$("#div_bookmarklist").hide();
		$("#div_bookmarktitle").show();
		$("#img_bookmarkadd").hide();
		$("#img_bookmarklist").show();
	},
	showListPannel:function(){
		$("#div_bookmarklist").show();
		$("#div_bookmarktitle").hide();
		$("#img_bookmarkadd").show();
		$("#img_bookmarklist").hide();
	},
	add:function(){
		var title=$("#txt_title").val().Trim();
		if(title=="") {
			alert("请输入标题!");
			return;
		}
		var point = wmstmap.HJMap.map.extent.getCenter();
		$.ajax({
			url: contextPath + "/common/addMapTag.do",
			type: "POST",
			data: {
				title: title,
				level: wmstmap.HJMap.map.getLevel(),
				x: point.x,
				y: point.y
			},
			dataType: "json"
		}).done(function(result) {
			if(result.status) {
				BookMarkTool.init();
				alert("保存成功!");
			} else {
				if(result.error) {
					alert(result.error);
				} else {
					alert("保存失败!");
				}
			}
		}).fail(function() {
			alert("请求失败!");
		});
	},
	remove:function(id){
		$.ajax({
			url: contextPath + "/common/remoeveMapTag.do",
			type: "POST",
			data: {
				id: id
			},
			dataType: "json"
		}).done(function(result) {
			if(result.status) {
				BookMarkTool.init();
				alert("删除成功!");
			} else {
				if(result.error) {
					alert(result.error);
				} else {
					alert("删除失败!");
				}
			}
		}).fail(function() {
			alert("请求失败!");
		});
	},
	hide:function(){
		$("#myBookMarkModal").hide();
	},
	show:function(){
		$("#txt_title").val("");
		$("#myBookMarkModal").show();
	}
};

var PositionTool={
	init:function(){
		
	},
	position:function( ){
		var x = $('#txt_position_x').val();
		var y = $('#txt_position_y').val();
		if(x>106 && x<119 && y>20 && y<25)
			wmstmap.HJMap.centerAtGraphic(x,y,resPath+"/images/hs/icons_02.png");
		else
			alert("请输入有效坐标信息!");
	},
	toggle:function(){
		$('#positionModal').toggle();
	},
	show:function(){
		
	},
	hide:function(){
		
	}
};

var MileageTool ={
	 init:function(){
		 
		 
		 $('.title_modal').click(function(){
			 var _this = this;
			 	$($('.title_modal')).each(function(){
			 		var _div = $(this).attr("toggle");
			 		$(_div).hide();
			 		if(_this==this){
			 			$(this).addClass("title_modal_bottom");
				 		$(_div).show();
			 		}else{
			 			$(this).removeClass("title_modal_bottom");
			 		}
			 			 
			 	});
		 });
		  $.post(contextPath+'/common/getNCList.do',{},function(json){
			 
			$(json).each(function(index,ele){
				$("#select_nc").append("<option value='"+index+"'>"+ele.name+"</option>");
			 });
		    $('#select_nc').change(function(){
				$("#select_ns").empty();
				var ns = json[this.value];
				if(!ns ){
					$("#select_ns").append("<option value='-1'>请选择航段</option>");
					return;
				}
				if(ns.segments==""){
					$("#select_ns").append("<option value='-1'>该航道的航段信息不完善!</option>");
					return;
				};
			   $(ns.segments).each(function(index,ele){
				    $("#select_ns").append("<option value='"+ele.id+"'>"+ele.name+"</option>");
			   });
			});
			 
		});
		$(".input_number").keyup(function () {
			  if(!$.isNumeric(this.value))
				  this.value= this.value.substring(0,this.value.length-1);
		})
		$(".input_number").blur(function () {
			var _lastValue= this.value.substring(this.value.length-1,this.value.length);
			if("."==_lastValue)
				 this.value= this.value.substring(0,this.value.length-1);
		})
	 },
	 position:function(){
		var sid = $("#select_ns").val();
		var mileage =  $("#txt_mileage").val();
		if(sid<0 || mileage<0)return ;
		$.post(contextPath+'/common/getMileage.do',{nsid:sid,mileage:mileage},function(json){
		if(json){
			wmstmap.HJMap.centerAtGraphic(json.x,json.y,resPath+"/images/location.png");
		 }else{
			 alert("未找到里程信息!");
		 }
		});
	 },
	 hide:function(){
		 $('#myModal').hide();
		 wmstmap.HJMap.resultlayer.clear();
	 },
	 show:function(){
		 $('#myModal').show();
	 }
	
};

(function(global, $) {
	var resPath, searchTypeObject, searchParams = {
				"全部":{name:"全部",
					layerids:[18,34,43,51,50,64,58,59,67,60,57,73,74,72],
					searchFields:["侧面标名称","航段名称","航道管理机构名称","船闸名称","升船机名称","桥梁名称","架空线缆名称","架空管道名称","索道名称","过河管道名称","过河线缆名称","浮码头名称","固定码头名称","简易固定码头名称"]},
				"航标":{name:"航标",form:"#form_beacon",infowindows:"#infoModal-table",layerids:[18],searchFields:["侧面标名称"],fkey:"LATNAM",showAttr:{
					
					"LATNAM":"侧面标名称","LOCTON":"设置位置","LATBNK":"岸别","LATSHP":"形状","LATCOL":"颜色",
					"INFORM":"备注信息"				
				}},
				"公共航道":{name:"公共航道",form:"#form_beacon",infowindows:"#infoModal-table",layerids:[34],searchFields:["航段名称"],fkey:"PWWNAM",showAttr:{
					
					"PWWNAM":"航段名称","STRPNT":"航段起点","ENDPNT":"航段终点","PWWLEN":"航段里程","SQTECG":"现状技术等级",
					"DPTECG":"发展规划技术等级","MANDEP":"航段管理部门","MNTDEP":"维护单位","INFORM":"备注信息" 
				}},
				"航道部门":{name:"航道部门",form:"#form_beacon",infowindows:"#infoModal-table",layerids:[43],searchFields:["航道管理机构名称"],fkey:"WADNAM",showAttr:{
					
					"WADNAM":"航道管理机构名称","CATWAD":"航道管理机构类型", "INFORM":"备注信息" 
				}},
				"船闸":{name:"船闸",form:"#form_shiplock",infowindows:"#infoModal-table",layerids:[51],searchFields:["船闸名称"],fkey:"LOKNAM",showAttr:{
					
					"LOKNAM":"船闸名称","LOKLVL":"船闸级别","HORLEN":"有效长度","HORWID":"有效宽度","LTMDEP":"船闸门槛最小水深",
					"MANDEP":"管理部门","INFORM":"备注信息" 				
				}},
				"升船机":{name:"升船机",form:"#form_shiplock",infowindows:"#infoModal-table",layerids:[50],searchFields:["升船机名称"],fkey:"WSLNAM",showAttr:{
					
					"WSLNAM":"升船机名称","CATWSL":"升船机类型","MANDEP":"管理部门","INFORM":"备注信息" 				
				}},
				"桥梁":{name:"桥梁",form:"#form_bridge",infowindows:"#infoModal-table",layerids:[64],searchFields:["桥梁名称"],fkey:"BRGNAM",showAttr:{
					
					"BRGNAM":"桥梁名称","CATBRG":"桥梁类别","NAVWID":"通航净宽","NAVHGT":"通航净高","MANDEP":"管理单位","BRGCOD":"桥梁编号",
					"INFORM":"备注信息" 				
				}},
				"架空线缆":{name:"架空线缆",form:"#form_bridge",infowindows:"#infoModal-table",layerids:[58],searchFields:["架空线缆名称"],fkey:"COVNAM",showAttr:{
					
					"COVNAM":"架空线缆名称","CATCBL":"线缆类别","MINHSG":"最低弧垂高度","MANDEP":"管理单位","INFORM":"备注信息" 				
				}},
				"架空管道":{name:"架空管道",form:"#form_bridge",infowindows:"#infoModal-table",layerids:[59],searchFields:["架空管道名称"],fkey:"COVNAM",showAttr:{
					"PODNAM":"架空管道名称","CATPIP":"管道类别","TSTDEP":"最低弧垂高度","MANDEP":"管理单位","INFORM":"备注信息" 				
				}},
				"索道":{name:"索道 ",form:"#form_bridge",infowindows:"#infoModal-table",layerids:[67],searchFields:["索道名称"],fkey:"CAWNAM",showAttr:{
					"CAWNAM":"索道名称", "MANDEP":"管理单位","INFORM":"备注信息" 				
				}},
				"过河管道":{name:"过河管道",form:"#form_bridge",infowindows:"#infoModal-table",layerids:[60],searchFields:["过河管道名称"],fkey:"PSBNAM",showAttr:{
					
					"CATPIP":"架空线缆名称","CATCBL":"管道类别","MANDEP":"管理单位","INFORM":"备注信息" 				
				}},
				"过河线缆":{name:"过河线缆",form:"#form_bridge",infowindows:"#infoModal-table",layerids:[57],searchFields:["过河线缆名称"],fkey:"CSBNAM",showAttr:{
					
					"CSBNAM":"过河线缆名称","CATCAB":"线缆类别","TSTDEP":"最低弧垂高度","MANDEP":"管理单位","INFORM":"备注信息" 				
				}},
				"浮码头":{name:"浮码头",form:"#form_bridge",infowindows:"#infoModal-table",layerids:[73],searchFields:["浮码头名称"],fkey:"PTNNAM",showAttr:{
					
					"PTNNAM":"浮码头名称","BNKWTW":"岸别 ","MANDEP":"管理单位","INFORM":"备注信息" 				
				}},
				"固定码头":{name:"固定码头",form:"#form_bridge",infowindows:"#infoModal-table",layerids:[74],searchFields:["固定码头名称"],fkey:"TRMNAM",showAttr:{
					
					"TRMNAM":"固定码头名称","CATTRM":"固定码头类型 ","BNKWTW":"岸别","USETRM":"固定码头用途","MANDEP":"管理单位","INFORM":"备注信息" 				
				}},
				"简易固定码头":{name:"简易固定码头",form:"#form_bridge",infowindows:"#infoModal-table",layerids:[72],searchFields:["简易固定码头名称"],fkey:"STMNAM",showAttr:{
					
					"STMNAM":"简易固定码头名称","BNKWTW":"岸别 ","MANDEP":"管理单位","INFORM":"备注信息" 				
				}},
				
				
		}, visable = false;
	
	function init() {
		var searchTypeHtml = "";
		searchTypeHtml += '<div class="leftModular"><ul class="clearfix">';
		$(searchTypeObject).each(function(index,element){
			var func = element.func;
			var name = element.name;
			var ico  = element.ico;
			searchTypeHtml+='<li><a href="javascript:'+func+';"><img  src="'+ico+'"><div style="text-decoration: none;" class="text" hidefocus="true" >'+name+'</div></a></li>';
		})
		searchTypeHtml+='</ul></div>';
		$('#leftCon').html(searchTypeHtml);
	}
	function clear() {
		init();
		global.wmstmap.FindTaskTool.Clear();
	}
	function show() {
		if(!visable) {
			$('#mian_leftNav').show(1000);
			global.TopMenu.setDisable(true);
			visable = true;
		}
	}
	function hide() {
		if(visable) {
			global.TopMenu.setDisable(false);
			$('#mian_leftNav').hide(1000);
			visable = false;
			clear();
		}
	}
	
	global.SearchTool = {
		setResPath: function(value) {
			resPath = value;
			searchTypeObject = [
					{name:"航标",func:"SearchTool.searchByMap(null,'航标')",ico:resPath+"/images/search/hxbz.png"},
					{name:"桥梁",func:"SearchTool.searchByMap(null,'桥梁')",ico:resPath+"/images/search/ql.png"},
					{name:"公共航道",func:"SearchTool.searchByMap(null,'公共航道')",ico:resPath+"/images/search/sd.png"},
					{name:"航道部门",func:"SearchTool.searchByMap(null,'航道部门')",ico:resPath+"/images/search/hdbm.png"},
					{name:"过河线缆",func:"SearchTool.searchByMap(null,'过河线缆')",ico:resPath+"/images/search/ghxl.png"},
					{name:"架空线缆",func:"SearchTool.searchByMap(null,'架空线缆')",ico:resPath+"/images/search/jkxl.png"},
					{name:"架空管道",func:"SearchTool.searchByMap(null,'架空管道')",ico:resPath+"/images/search/jkgd.png"},
					{name:"过河管道",func:"SearchTool.searchByMap(null,'过河管道')",ico:resPath+"/images/search/ghgd.png"},
					{name:"索道",func:"SearchTool.searchByMap(null,'索道')",ico:resPath+"/images/search/sd.png"},
					{name:"浮码头",func:"SearchTool.searchByMap(null,'浮码头')",ico:resPath+"/images/search/fmt.png"},
					{name:"固定码头",func:"SearchTool.searchByMap(null,'固定码头')",ico:resPath+"/images/search/gdmt.png"},
					{name:"简易固定码头",func:"SearchTool.searchByMap(null,'简易固定码头')",ico:resPath+"/images/search/jymt.png"},
					{name:"船闸",func:"SearchTool.searchByMap(null,'船闸')",ico:resPath+"/images/search/cz.png"},
					{name:"升船机",func:"SearchTool.searchByMap(null,'升船机')",ico:resPath+"/images/search/sjj.png"}
			];
		},
		init: init,
		clear: clear,
		graphicClick:function(grapic){
			var attr = grapic.attributes;
			var param = global.SearchTool.getSearchParams()[attr.layerName] ;
			param = (param)?param:global.SearchTool.getSearchParams()[global.SearchTool.searchType];
			if(!param || !param.showAttr){
				var param = new Object();
				for(var key in searchParams){
					var layerSett = searchParams[key];
					if(layerSett.name=="全部")continue;
					$(layerSett.layerids).each(function(i,v){
						 if(this==attr.layerId){
							 param.infowindows=layerSett.infowindows;
							 param.form = layerSett.form;
							 param.showAttr = layerSett.showAttr;
							 param.layerId = attr.layerId;
							 return false
						 }
					})
				}
				if(!param.infowindows)return;
			}else{
				 param.layerId = param.layerids[0];
			}
			$('#table-info tr').remove();
			for(var key in param.showAttr){
				 var ckey = param.showAttr[key];
				 var value = (attr[key])?attr[key]:attr[ckey];
				 if(!value || value=="Null")
					 value = "&nbsp;";
				 var newRow = "<tr><td class=\"leftTit\">"+ckey+"：</td><td>"+value+"</td></tr>";
				 $("#table-info").append(newRow);	 
			}
			if(param.name == "桥梁"){
				 var nkey = param.showAttr["BRGNAM"];
				 var nvalue = (attr["BRGNAM"])?attr["BRGNAM"]:attr[nkey];
				 var ckey = param.showAttr["BRGCOD"];
				 var cvalue = (attr["BRGCOD"])?attr["BRGCOD"]:attr[ckey];
				$.post(contextPath+"/manage/bridge/getBridgePic.do",{bridgename:nvalue,bridgecode:cvalue},function(json){
					var picRow = "";
					if(json.state){
						picRow = "<tr><td class=\"leftTit\">桥梁图片：</td><td><img style='height: 150px'  src='"+json.picpath+"' /></td></tr>";
					}else{
						picRow = "<tr><td class=\"leftTit\">桥梁图片：</td><td>暂无图片</td></tr>";
					}
					$("#table-info").append(picRow);
				})
			}
			global.SearchTool.grapicShow(param.infowindows);
		},
		grapicShow:function(id){
			$(id).show(500);
		},
		grapicHide:function(id){
			$(id).hide(500);
		},
		getSearchParams:function(){
			return searchParams;
		},
		searchByMap:function(key,type,callBack){
			//key = (!key || key=="")?"*":key;
			var param = searchParams[type];
			if(!key){
				global.wmstmap.FindTaskTool.queryLayer(param.layerids[0]);
			}else{
			
				global.wmstmap.FindTaskTool.findParams.layerIds = param.layerids;
				global.wmstmap.FindTaskTool.findParams.searchFields = param.searchFields;
				global.wmstmap.FindTaskTool.FindByValue(key);
			}
			if(!callBack)
				global.wmstmap.FindTaskTool.callBackFunc = global.SearchTool.drawSearchResultHtml;
			else
				global.wmstmap.FindTaskTool.callBackFunc = callBack;
			
			global.SearchTool.searchType = type;
			global.SearchTool.searchFKey = param.fkey;
			global.wmstmap.FindTaskTool.graphicClick = SearchTool.graphicClick;
		},
		drawSearchResultHtml:function(data,currentPageNum){
			 
			if(data)
			   global.SearchTool.result = data;
			var pageSize = 5 ;
			var all = global.SearchTool.result.length;
			var pageNum = 1 ;
			if( all< pageSize){
				pageNum =  1;
			}
			if( all% pageSize === 0){
				pageNum =  parseInt( all/pageSize);
			}
			if( all% pageSize>0){
				pageNum =  parseInt(all/pageSize)+1;
			}
			currentPageNum = (currentPageNum)?currentPageNum:1;
			var searchResultHtml = "";
			searchResultHtml+="<div>";
			searchResultHtml+="<div class=\'lefttop\'><span class=\'home\'></span><a href=\'javascript:SearchTool.init();\'>分类</a><span class=\'next\'>></span>"+SearchTool.searchType+"</div>";
			searchResultHtml+="<div class=\'leftcon\' id=\'mian_leftNav\'>                        ";
			searchResultHtml+="<div id=\'PoiResultDiv\' class=\'PoiResultDiv\'>";
			searchResultHtml+="<div id=\'PoiItemsDiv\' class=\'PoiItemsDiv\'>";
			for(var z = (currentPageNum-1)*pageSize;z<=(currentPageNum * pageSize)-1;z++ ){
				var obj =  SearchTool.result[z];
				console.log(obj);
				if(!obj)continue;
				var title = (obj.value)?obj.value:obj.attributes[SearchTool.searchFKey];
			 
				title = (title==null || title.Trim() =="")?"暂无名称":title.Trim();
				searchResultHtml+="<div class=\'PoiItem\'>";
				searchResultHtml+="<div class=\'Index\'>"+(z+1)+"</div>";
				searchResultHtml+="<div class=\'ItemText\'>";
				searchResultHtml+="<div class=\'Name\'>";
				searchResultHtml+="<div class=\'operate\'><a class=\'tipIcon locate\' id=\'locate_"+z+"\' title=\'定位\' href=\'javascript:SearchTool.position("+z+",\"locate_"+z+"\");\'>定位</a></div>";
				searchResultHtml+="<div class=\'PoiNameInfo\'><span class=\'PoiName\'>"+title+"</span></div>";
				searchResultHtml+="</div>";
				//searchResultHtml+="<div class=\'Detail\'>";
				//searchResultHtml+="<div poiindex=\'4\' class=\'poiRichInfo\'>这里显示内容内容内容内容内容内容内容内容内容内容内容内容</div>";
				//searchResultHtml+="</div>";
				searchResultHtml+="</div>";
				searchResultHtml+="</div>";
			};	
				
			searchResultHtml+="<div class=\'PoiPageDiv\'>";
			searchResultHtml+="<div class=\'PageDiv\'>";
			searchResultHtml+="<table cellspacing=\'0\' cellpadding=\'0\' border=\'0\' style=\'width:auto;\'>";
			searchResultHtml+="<tbody>";
			searchResultHtml+="<tr>";
			
			if(currentPageNum==1){
				searchResultHtml+="    <td class=\'PrePage\'><a href=\'javascript:void(0);\'>上一页</a></td>";
			}else {
				searchResultHtml+="    <td class=\'PrePage\'><a href=\'javascript:SearchTool.drawSearchResultHtml(null,"+(currentPageNum-1)+");\'>上一页</a></td>";
			};
			searchResultHtml+="<td class=\'Page\'>";
	
			var pageEndHtml = "";
			if(currentPageNum>pageNum)
				currentPageNum = pageNum;
			var pageStart = (currentPageNum-3)>0?currentPageNum-3:1 ;
			var pageEnd = (currentPageNum + 3)<pageNum?(currentPageNum + 3):pageNum;
			if(pageEnd<7 && pageNum>7 )
				pageEnd = 7 ;
			if(pageNum>7 && (pageEnd==pageNum || pageNum<(pageEnd-7))){
				pageStart = pageEnd-6;
			};
			for(var k =pageStart ; k <= pageEnd ; k++){
				 console.log(k+":"+pageNum);
				 if(k==currentPageNum){
					 searchResultHtml+="<span>"+k+"</span>";
				 }else{
					  searchResultHtml+="<a href=\'javascript:SearchTool.drawSearchResultHtml(null,"+k+");\'>"+k+"</a>";
				 }
			}
			searchResultHtml+=pageEndHtml;
			searchResultHtml+="</td>";
			if(currentPageNum==pageNum){
				searchResultHtml+=" <td class=\'NextPage\'><a href=\'javascript:void(0);\'>下一页</a></td>";
			}else {
				searchResultHtml+=" <td class=\'NextPage\'><a href=\'javascript:SearchTool.drawSearchResultHtml(null,"+(currentPageNum+1)+");\'>下一页</a></td>";
			};
			
			searchResultHtml+="</tr>";
			
			searchResultHtml+="</tbody>";
			searchResultHtml+="</table>";
			searchResultHtml+="</div>";
			searchResultHtml+=" 共" + all + "条数据 ";
			searchResultHtml+=" <a href=\'javascript:SearchTool.clear();\'>清除查询结果</a>";
			searchResultHtml+="</div>";
			searchResultHtml+="</div>                    ";
			searchResultHtml+="</div>";
			searchResultHtml+="</div>";
			$('#leftCon').html(searchResultHtml);
		},
		position:function(index,that){
			$(".PoiItem").removeClass("active");
			$("#"+that).closest(".PoiItem").addClass("active");
			var obj =  SearchTool.result[index];
			var gem ;
			if(obj.feature){
				gem = obj.feature.geometry;
			}else{
				gem = obj.geometry;
			}
			global.wmstmap.HJMap.zoom2Geometry(gem);
		},
		toggle:function(){
			if(visable) {
				hide();
			} else {
				show();
			}
		},
		show: show,
		hide: hide
	};
	
}) (this, $);
 
 String.prototype.Trim = function()
 { 
       return this.replace(/(^\s*)|(\s*$)/g, ""); 
 }
 function initPoiResultDiv(){
	// 美化浏览器的滚动条
	if(!niceScroll){
		niceScroll = $("#mian_leftNav").niceScroll({
			touchbehavior : false,
			cursorcolor : "#dfebf0 ",
			cursoropacitymax : 1,
			cursorwidth : 4,
			horizrailenabled : true,
			cursorborderradius : 5,
			autohidemode : true,
			background : 'none',
			cursorborder : 'solid 1px #d7e4ea ',
			after : function(){
				$("#mian_leftNav").find(".PoiResultDiv").each(function() {
					$(this).css("margin-top", $(this).prev().height() + 6 + "px");
					$(this).css("color","red");
				});
			}
		});
	}else{
		niceScroll.after();
	}
}
// 实时获取系统时间
function getSystime() {
	var now = new Date();
	var hour = now.getHours();
	var minutes = now.getMinutes();
	var seconds = now.getSeconds();
	if (hour < 10)
		hour = '0' + hour;
	if (minutes < 10)
		minutes = '0' + minutes;
	if (seconds < 10)
		seconds = '0' + seconds;
	$('#systime').html(
			now.getYear() + 1900 + "年" + (now.getMonth() + 1) + "月"
					+ now.getDate() + "日  " + hour + ":" + minutes + ":"
					+ seconds + " 星期" + '日一二三四五六'.charAt(new Date().getDay()));
}

// 初始化图层信息
function initlayers() {
	var checked = "checked";
	var layersHtml = "";
	var layers = wmstmap.HJConfig.Layers();
	for (var i = 0; i < layers.length; i++) {
		if (layers[i].name == "")
			continue;
		checked = layers[i].visible == true ? "checked='checked'" : '';
		layersHtml += '<span><a href="#" ><input onclick="wmstmap.HJMenuBuilder.LayerVisible(this)" type="checkbox" '
				+ checked
				+ ' value='
				+ layers[i].name
				+ ' id="'+ layers[i].name 
				+ '"/>'
				+ "<label for='" + layers[i].name
				+ "'>" + layers[i].name
				+ '</label></a></span>';
	}
	$('#layers').html(layersHtml);
}
//收缩左下导航div
function setting(){
	if($('#FullScreen').hasClass('InlineBlock')){
		$('#mian_leftNav').hide();
		$('#FullScreen').removeClass('InlineBlock');
		$('#FullScreen').addClass('InlineNone');
		$('#FullScreen').attr('title','展开左栏');
	}else{
		$('#mian_leftNav').show();
		$('#FullScreen').removeClass('InlineNone');
		$('#FullScreen').addClass('InlineBlock');
		$('#FullScreen').attr('title','收起左栏');
	}
	setContainerSize();
}

var niceScroll;
$(function($) {
 
 
	// 扩展动画
	$.extend($.easing, {
		easeOutExpo : function(e, f, a, h, g) {
			return (f == g) ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a
		},
		easeOutBounce : function(x, t, b, c, d) {
			if ((t /= d) < (1 / 2.75)) {
				return c * (7.5625 * t * t) + b;
			} else if (t < (2 / 2.75)) {
				return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
			} else if (t < (2.5 / 2.75)) {
				return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
			} else {
				return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
			}
		}
	});
	setInterval('getSystime()', 1000);
	$("#wmstmap").load(function() {
 		initlayers();
		TopMenu.init();
	})
	/*
	 * $('div').find('.leftNav').each(function(){
	 * if($(this).attr('id')=='mian_leftNav') $(this).show(); else
	 * $(this).hide(); });
	 */
	
	$('#btn_search').click(function(){
			var qK = $("#q").val().trim();
			var type = $(".s").html();
			if(qK!="请输入搜索的内容" && qK != ""){
				SearchTool.searchByMap(qK,type);
			}
	});
 
	 $("body #Select").each(function(i){ 
		i= i+1
		this.id = "Select" + i; 
		var SumimasenSelect = $("#Select"+i)
		$(SumimasenSelect).find("ul li:first").hover(function(){
			$(".s").css("background","url(images/68_60.PNG) 0px 0px no-repeat");
			$(this).parent("ul").css("height",500)
			$(this).siblings("ul li:not(.s)").mouseenter(function(){
				$(".s").css("background","url(images/68_60.PNG) 0px 0px no-repeat");
				$(this).css("background","#4f89cb").css("color","#FFFFFF")
			});
			$(this).siblings("ul li:not(.s)").mouseleave(function(){
				$(this).css("background","#fafafa").css("color","#333")
				$(".s").css("background","url(images/68_60.PNG) 0px -30px no-repeat");
			});
			$(this).siblings("ul li:not(.s)").click(function(){
				$(this).parent("ul").css("height",500)
				var cdContent = $(this).text()
				$(SumimasenSelect).find("ul li:first").text(cdContent)
			});
			$(this).parent(SumimasenSelect).mouseleave(function(){
				$(this).css("height",30)
			});
		});
		
		},function(){
		$(".s").css("background","url(images/68_60.PNG) 0px -30px no-repeat");
		
	});
 
	
	
	$(window).resize(function(){
		setContainerSize() 
		if(niceScroll){
			niceScroll.after();
		}
	})
	SearchTool.setResPath(resPath);
	SearchTool.init();
	MileageTool.init();
	BookMarkTool.init();
	$('#img_toolbox').click(function(){
		SearchTool.toggle();		 
	});
});