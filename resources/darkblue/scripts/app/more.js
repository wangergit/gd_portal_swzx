(function(Global, Map) {
	var Me = this;
	
	Me.shown = false;
	
	$(function() {
		
		$("#tools_export").click((function(Map) {
			return function() {
				Map.frame.HJPrinter.exportImg();
			};
		})(Map));
		
		$("#tools_print").click((function(Map) {
			return function() {
				Map.frame.HJPrinter.printPdf();
			};
		})(Map));
		
		Me.btnMore = $("#tools_more");
		Me.palMore = $("#toolbar_more");
		
		Me.btnMore.click((function(Me) {
			return function() {
				if (Me.shown) {
					Me.btnMore.removeClass("active");
					Me.palMore.hide();
					Me.shown = false;
				} else {
					Me.btnMore.addClass("active");
					Me.palMore.show();
					Me.shown = true;
				}
			};
		})(Me));
	});
	
})(this, map);

// 视图按钮功能
(function(Global, Map) {
	var Me = this, Doms = {}, Vars = {
		"inZoomIn": false,
		"inZoomOut": false
	};
	
	function exitOther() {
		if (!Map.plotting.clear()) {
			return ;
		}
		Map.element.exit();
		Map.measure.exit();
		Map.search.close();
		Map.location.close();
		Map.views.close();
	}
	
	Me.startIn = function() {
		if (!Vars.inZoomIn) {
			exitOther();
			Me.exitOut();
			
			Map.frame.HJNavigation.ZoomIn();
			Doms["in"].addClass("active");
			Vars.inZoomIn = true;
		}
	};
	
	Me.exitIn = function() {
		if (Vars.inZoomIn) {
			Map.frame.HJNavigation.Dispose();
			Doms["in"].removeClass("active");
			Vars.inZoomIn = false;
		}
	};
	
	Me.startOut = function() {
		if (!Vars.inZoomOut) {
			exitOther();
			Me.exitIn();
			
			Map.frame.HJNavigation.ZoomOut();
			Doms["out"].addClass("active");
			Vars.inZoomOut = true;
		}
	};
	
	Me.exitOut = function() {
		if (Vars.inZoomOut) {
			Map.frame.HJNavigation.Dispose();
			Doms["out"].removeClass("active");
			Vars.inZoomOut = false;
		}
	};
	
	Map["zoom"] = {
		"exit": function () {
			Me.exitOut();
			Me.exitIn();
		}
	};
	
	$(function() {
		Doms["in"] = $("#tools_zoomin");
		Doms["out"] = $("#tools_zoomout");
		
		$("#tools_zoomin").click((function(Me, Vars) {
			return function () {
				if (Vars.inZoomIn) {
					Me.exitIn.call(Me);
				} else {
					Me.startIn.call(Me);
				}
			};
		})(Me, Vars));
		
		$("#tools_zoomout").click((function(Me, Vars) {
			return function () {
				if (Vars.inZoomOut) {
					Me.exitOut.call(Me);
				} else {
					Me.startOut.call(Me);
				}
			};
		})(Me, Vars));
		
		$("#tools_full").click((function(Map) {
			return function () {
				Map.frame.HJNavigation.zoomToFullExtent();
			};
		})(Map));
		
		$("#tools_prev").click((function(Map) {
			return function () {
				Map.frame.HJNavigation.zoomToPrevExtent();
			};
		})(Map));
		
		$("#tools_next").click((function(Map) {
			return function () {
				Map.frame.HJNavigation.zoomToNextExtent();
			};
		})(Map));
		
		$("#tools_roam").click((function(Map) {
			return function() {
				Map.frame.HJNavigation.Pan();
			};
		})(Map));
	});
	
}) (this, map);

// 图层功能
(function(Global, Map) {
	var Me = this, Doms = {};
	
	Map["layer"] = {
		"init": function() {
			var layers = Map.frame.HJConfig.Layers();
			var list = Doms.layer.getMenu();
			for (var i = 0; i < layers.length; i++) {
				var name = layers[i].name;
				if (!name) {
					continue;
				}
				var html;
				if (layers[i].visible == true) {
					html = '<li class="active">';
				} else {
					html = '<li>';
				}
				list.append(html + '<a href="javasript:;" onClick="map.layer.toggle(' + i + ')">' + name + '</a></li>');
			}
		},
		"toggle": function(i) {
			var obj = $(Doms.layer.getMenu().children()[i]);
			if (obj) {
				var text = $(obj.children()[0]).html();
				if(obj.hasClass("active")) {
					Map.frame.HJMenuBuilder.LayerVisible(text, false);
					obj.removeClass("active");
				} else {
					Map.frame.HJMenuBuilder.LayerVisible(text, true);
					obj.addClass("active");
				}
			}
		}
	};
	
	function onResize() {
		var target = Doms.layer.getTarget(),
			menu = Doms.layer.getMenu(),
			offset = target.offset();
		menu.css("top", (offset.top + target.outerHeight()) + "px").css("left", (offset.left + target.outerWidth() - menu.outerWidth()) + "px");
	};
	
	$(function() {
		Doms.layer = new Global.HoverDropMenu("#tools_layer", "#dropdown_layer");
		
		onResize();
		$(window).on("resize", onResize);
	});
	
}) (this, map);

// 测量功能
(function(Global, Map) {
	var Me = this, Doms = {}, Vars = {
		"shown": false,
		"drawing": false
	}, TaskId = null;
	
	function exitOther() {
		if (!Map.plotting.clear()) {
			return ;
		}
		Map.element.exit();
		Map.zoom.exit();
		Map.measure.exit();
		Map.location.close();
		Map.views.close();
		clearMeasure();
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
	
	function clearMeasure() {
		if (Vars.drawing) {
			Map.frame.HJMeasure.measutreClear();
			Vars.drawing = false;
			Doms["button"].removeClass("active");
		}
	}
	
	Map["measure"] = {
		"length": function () {
			exitOther();
			if (!Vars.drawing) {
				Vars.drawing = true;
				Map.frame.HJMeasure.measutreLength();
				Doms["button"].addClass("active");
			}
		},
		"area": function () {
			exitOther();
			if (!Vars.drawing) {
				Vars.drawing = true;
				Map.frame.HJMeasure.measutreArea();
				Doms["button"].addClass("active");
			}
		},
		"clear": clearMeasure,
		"exit": function () {
			clearMeasure();
			doHide();
		}
	};
	
	function onResize() {
		var offset = Doms["button"].offset();
		Doms["menu"].css("top", (offset.top + Doms["button"].outerHeight()) + "px").css("left", (offset.left + Doms["button"].outerWidth() - Doms["menu"].outerWidth()) + "px");
	};
	
	$(function() {
		Doms["button"] = $("#tools_measure");
		Doms["button"].on("mouseover", show);
		Doms["button"].on("mouseout", hide);
		
		Doms["menu"] = $("#dropdown_measure");
		Doms["menu"].on("mouseover", show);
		Doms["menu"].on("mouseout", hide);
		
		onResize();
		$(window).on("resize", onResize);
	});
	
}) (this, map);
