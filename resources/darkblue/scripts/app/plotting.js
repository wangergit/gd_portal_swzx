(function(Global, Map) {
	var Me = this, Doms = {}, Vars = {
		"shown": false,
		"editing": false
	}, TaskId = null;
	
	function exitOther() {
		Map.element.exit();
		Map.zoom.exit();
		Map.measure.exit();
		Map.search.close();
		Map.location.close();
		Map.views.close();
	}
	
	function show() {
		if (TaskId) {
			clearTimeout(TaskId);
			TaskId = null;
		}
		if (!Vars.shown) {
			Doms["menu"].show();
			Vars.shown = true;
		}
	}
	
	function hide() {
		if (!TaskId) {
			TaskId = setTimeout(doHide, 200);
		}
	}
	
	function doHide() {
		if (Vars.shown) {
			Doms["menu"].hide();
			Vars.shown = false;
		}
		TaskId = null;
	}
	
	function doStartDrawing(type) {
		if (Vars.editing) {
			Global.message({
				"style": "warning",
				"title": "错误",
				"text": "当前仍在编辑状态，无法执行该操作！"
			});
		} else {
			exitOther();
			Map.frame.HJDrawTool.setTool(type);
			Doms["button"].addClass("active");
			Vars.editing = true;
		}
	}
	
	function doCancelAdd() {
		if (Vars.editing) {
			Doms["dialog"].hide();
			Map.frame.HJDrawTool.removehGraphic("new");
			Doms["button"].removeClass("active");
			Vars.type = null;
			Vars.geometry = null;
			Vars.editing = false;
		}
	}
	
	Map["plotting"] = {
		"init": function () {
			Map.frame.HJDrawTool.onAdd = {
				"fn": function(type, geometry) {
					if (Vars.editing) {
						Vars.type = type;
						Vars.geometry = geometry;
						delete Vars.geometry.attributes;
						Doms["title"].text("新建标绘");
						Doms["dialog"].show();
					}
				},
				"scope": Me
			};
			
			Map.frame.HJDrawTool.onPublish = {
				"fn": function(id) {
					$.post(CONTEXT + "/common/submitPlotting.do", {
						"id": id
					}, function(json){
						if(json && json.status) {
							map.frame.HJDrawTool.refreshGraphic(json.data.id, {
								"id": json.data.id,
								"title": json.data.title,
								"content": json.data.content,
								"published": json.data.published,
								"audited": json.data.audited,
								"editable": true
							});
						} else {
							Global.message({
								"style": "error",
								"title": "错误",
								"text": "标绘发布申请提交失败！"
							});
						}
					});
				},
				"scope": Global
			};
			
			Map.frame.HJDrawTool.onDelete = {
				"fn": function(id) {
					$.post(CONTEXT + "/common/removePlotting.do", {
						"id": id
					}, function(json){
						if(json && json.status) {
							map.frame.HJDrawTool.removehGraphic(id);
						} else {
							Global.message({
								"style": "error",
								"title": "错误",
								"text": "标绘删除失败！"
							});
						}
					});
				},
				"scope": Global
			};
		},
		"show": {
			"all": function () {
				exitOther();
				$.post(CONTEXT + "/common/findPlotting.do", {
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
							Map.frame.HJDrawTool.drawGraphic(attributes, type, geometry);
						} catch(ex) {
							console.error(ex);
						}
					});
				});
			},
			"self": function () {
				exitOther();
				$.post(CONTEXT + "/common/findSelfPlotting.do", {
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
							Map.frame.HJDrawTool.drawGraphic(attributes, type, geometry);
						} catch(ex) {
							console.error(ex);
						}
					});
				});
			}
		},
		"new": {
			"point": function () {
				doStartDrawing("point");
			},
			"line": function () {
				doStartDrawing("polyline");
			},
			"area": function () {
				doStartDrawing("polygon");
			},
			"circle": function () {
				doStartDrawing("circle");
			},
			"square": function () {
				doStartDrawing("extent");
			},
			"cancel": doCancelAdd,
			"save": function () {
				Doms["mask"].loadopacity("操作处理中...");
				$.post(CONTEXT + "/common/addPlotting.do", {
					"type": Vars.type,
					"graphics": JSON.stringify(Vars.geometry),
					"title": Doms["name"].val(),
					"content": Doms["content"].val()
				}, function(json){
					if(json && json.status) {
						doCancelAdd();
						Map.frame.HJDrawTool.refreshGraphic("new", {
							"id": json.data.id,
							"title": json.data.title,
							"content": json.data.content,
							"published": json.data.published,
							"audited": json.data.audited,
							"editable": true
						});
					} else {
						Global.message({
							"style": "error",
							"title": "错误",
							"text": "标绘保存失败！"
						});
					}
				}).always(function() {
					Doms["mask"].unloadopacity();
				});
			}
		},
		"clear": function () {
			if (Vars.editing) {
				Global.message({
					"style": "warning",
					"title": "错误",
					"text": "当前仍在编辑状态，无法执行该操作！"
				});
				return false;
			} else {
				Map.frame.HJDrawTool.clear();
				return true;
			}
		}
	};
	
	function onResize() {
		var offset = Doms["button"].offset();
		Doms["menu"].css("top", (offset.top + Doms["button"].outerHeight()) + "px").css("left", (offset.left + Doms["button"].outerWidth() - Doms["menu"].outerWidth()) + "px");
	};
	
	$(function() {
		Doms["button"] = $("#tools_plotting");
		Doms["button"].on("mouseover", show);
		Doms["button"].on("mouseout", hide);
		
		Doms["menu"] = $("#dropdown_plotting");
		Doms["menu"].on("mouseover", show);
		Doms["menu"].on("mouseout", hide);
		
		onResize();
		$(window).on("resize", onResize);
		
		Doms["dialog"] = $("#dialog_plotting");
		Doms["mask"] = $("#dialog_plotting .panel");
		Doms["title"] = $("#dialog_plotting .panel-title");
		
		Doms["name"] = $("#plo_txt_name input");
		Doms["content"] = $("#plo_txt_content textarea");
	});
	
}) (this, map);