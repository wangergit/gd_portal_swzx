(function(Global, Map) {
	var Me = this, Doms = {
		"viewer": {},
		"editor": {}
	}, Vars = {
		"shown": false,
		"editable": false
	}, onViewerAjaxFail = (function(Global, Doms) {
		return function() {
			Doms.viewer.mask.unloadopacity();
			Global["message"]({
				"style": "error",
				"title": "错误",
				"text": "请求失败!"
			});
		};
	})(Global, Doms);
	
	function doShowViewer() {
		if (!Map.plotting.clear()) {
			return ;
		}
		Map.element.exit();
		Map.zoom.exit();
		Map.measure.exit();
		Map.search.close();
		Map.location.close();
		
		Doms.viewer.dialog.show();
		Doms.viewer.dialog.find(".panel-body").height(Doms.viewer.dialog.innerHeight() - Doms.viewer.dialog.find(".panel-heading").outerHeight() - Doms.viewer.dialog.find(".panel-footer").outerHeight());
		Doms.viewer.dialog.css("left", Math.round(($(window).width() - Doms.viewer.dialog.width()) / 2) + "px");
		Doms.viewer.dialog.css("top", Math.round(($(window).height() - Doms.viewer.dialog.height()) / 2) + "px");
		Vars.shown = true;
		doReload();
	}
	
	function doHideViewer() {
		Doms.viewer.dialog.hide();
		Vars.shown = false;
	}
	
	function doShowEditor() {
		Doms.editor.dialog.show();
		Doms.editor.dialog.css("left", Math.round(($(window).width() - Doms.editor.dialog.width()) / 2) + "px");
		Doms.editor.dialog.css("top", Math.round(($(window).height() - Doms.editor.dialog.height()) / 2) + "px");
		Vars.editable = true;
	}
	
	function doHideEditor() {
		Doms.editor.dialog.hide();
		Vars.editable = false;
	}
	
	function doReload() {
		Doms.viewer.mask.loadopacity("数据加载中...");
		Doms.viewer.list.empty();
		$.ajax({
			url: CONTEXT + "/common/getMapTag.do",
			type: "POST",
			data: {},
			dataType: "json"
		}).done((function(Doms) {
			return function(result) {
				if(result) {
					for(var i = 0; i < result.length; i++) {
						var view = result[i];						
						Doms.viewer.list.append('<li class="list-group-item">' + 
							'<a href="javasript:;" class="list-group-item-heading" onClick="map.views.locate(\'' + view.x + '\', \'' + view.y + '\', \'' + view.level + '\')">' + view.title +'</a>' + 
							'<a href="javasript:;" class="btn btn-danger btn-xs pull-right" onClick="map.views.delete(\'' + view.id + '\')">&mdash;</a>' + 
							'</li>');
					}
				}
				Doms.viewer.mask.unloadopacity();
			};
		})(Doms)).fail(onViewerAjaxFail);
	}
	
	Map.views = {
		"locate": function (x, y, lv) {
			Map.frame.HJMap.centerAndZoom(parseFloat(x), parseFloat(y), parseFloat(lv));
		},
		"delete": function (id) {
			Doms.viewer.mask.loadopacity("操作处理中...");
			$.ajax({
				"url": CONTEXT + "/common/remoeveMapTag.do",
				"type": "POST",
				"data": {
					"id": id
				},
				"dataType": "json"
			}).done((function(Global, Me, Doms) {
				return function(result) {
					Doms.viewer.mask.unloadopacity();
					if(result.status) {
						Global["message"]({
							"style": "success",
							"title": "成功",
							"text": "删除成功!"
						});
						doReload();
					} else {
						Global["message"]({
							"style": "error",
							"title": "失败",
							"text": result.error ? result.error : "删除失败!"
						});
					}
				};
			})(Global, Me, Doms)).fail(onViewerAjaxFail);
		},
		"add": function () {
			if (Vars.shown) {
				doHideViewer();
			}
			Doms.editor.name.val("");
			if (!Vars.editable) {
				doShowEditor();
			}
		},
		"save": function() {
			Doms.editor.mask.loadopacity("操作处理中...");
			var name = $.trim(Doms.editor.name.val());
			if(name) {
				var point = Map.frame.HJMap.map.extent.getCenter();
				$.ajax({
					"url": CONTEXT + "/common/addMapTag.do",
					"type": "POST",
					"data": {
						"title": name,
						"level": Map.frame.HJMap.map.getLevel(),
						"x": point.x,
						"y": point.y
					},
					"dataType": "json"
				}).done((function(Global, Me, Doms) {
					return function(result) {
						Doms.editor.mask.unloadopacity();
						if(result.status) {
							Global["message"]({
								"style": "success",
								"title": "成功",
								"text": "保存成功!"
							});
							Map.views.cancel();
						} else {
							Global["message"]({
								"style": "error",
								"title": "失败",
								"text": result.error ? result.error : "保存失败!"
							});
						}
					};
				})(Global, Me, Doms)).fail((function(Global, Doms) {
					return function() {
						Doms.editor.mask.unloadopacity();
						Global["message"]({
							"style": "error",
							"title": "错误",
							"text": "请求失败!"
						});
					};
				})(Global, Doms));
			} else {
				Doms.editor.mask.unloadopacity();
				Global["message"]({
					"style": "warning",
					"title": "错误",
					"text": "请输入名称!"
				});
			}
		},
		"cancel": function() {
			if (Vars.editable) {
				doHideEditor();
			}
			if (!Vars.shown) {
				doShowViewer();
			}
		},
		"close": function () {
			if (Vars.shown) {
				doHideViewer();
			}
			if (Vars.editable) {
				doHideEditor();
			}
		}
	};
	
	$(function() {
		Doms.viewer.dialog = $("#dialog_viewmarks");
		Doms.viewer.mask = $("#dialog_viewmarks .panel");
		Doms.viewer.list = $("#dialog_viewmarks .panel .panel-body .list-group");
		
		Doms.editor.dialog = $("#dialog_vm_new");
		Doms.editor.mask = $("#dialog_vm_new .panel");
		Doms.editor.name = $("#vm_txt_name input");
		
		$("#tools_view").click(function() {
			if (!Vars.shown && !Vars.editable) {
				doShowViewer();
			} else if (Vars.shown) {
				doHideViewer();
			} else if (Vars.editable) {
				doHideEditor();
			}
		});
	});
	
}) (this, map);
