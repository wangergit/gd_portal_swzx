(function(Global, Map) {
	var Me = this, Doms = {}, Vars = {
		"shown": false,
		"tab": 1
	};
	
	function doShow() {
		if (!Map.plotting.clear()) {
			return ;
		}
		Map.element.exit();
		Map.zoom.exit();
		Map.measure.exit();
		Map.search.close();
		Map.views.close();
		
		Doms["dialog"].show();
		Doms["dialog"].find(".panel-body").height(Doms["dialog"].innerHeight() - Doms["dialog"].find(".panel-heading").outerHeight() - Doms["dialog"].find(".panel-footer").outerHeight());
		Doms["dialog"].css("left", Math.round(($(window).width() - Doms["dialog"].width()) / 2) + "px");
		Doms["dialog"].css("top", Math.round(($(window).height() - Doms["dialog"].height()) / 2) + "px");
		Vars.shown = true;
	}
	
	function doClose() {
		Doms["dialog"].hide();
		Vars.shown = false;
		Doms["waterway"].setValue();
		Doms["channel"].setValue();
		Doms["mileage"].val("");
		Doms["x"].val("");
		Doms["y"].val("");
	}
	
	Map["location"] = {
		"locate": function () {
			Doms["mask"].loadopacity("处理中...");
			if (Vars.tab == 1) {
				var sid = Doms["channel"].getValue();
				var mileage =  Doms["mileage"].val();
				if(!sid || mileage < 0) {
					Global["message"]({
						"style": "warning",
						"text": "请输入里程信息!"
					});
					Doms["mask"].unloadopacity();
				} else {
					$.ajax({
						"url": CONTEXT + "/common/getMileage.do",
						"type": "POST",
						"data": {
							"nsid": sid,
							"mileage": mileage
						},
						"dataType": "json"
					}).done(function(result) {
						if(result) {
							Map.frame.HJMap.centerAtGraphic(result.x, result.y, RESOURCE + "/images/location.png");
						} else {
							Global["message"]({
								"style": "warning",
								"text": "未找到里程信息!"
							});
						}
					}).always(function () {
						Doms["mask"].unloadopacity();
					});
				}
			} else if (Vars.tab == 2) {
				var x = Doms["x"].val();
				var y = Doms["y"].val();
				if(x > 106 && x < 119 && y > 20 && y < 25) {
					Map.frame.HJMap.centerAtGraphic(x, y, RESOURCE + "/images/location.png");
				} else {
					Global["message"]({
						"style": "warning",
						"text": "请输入有效坐标信息!"
					});
				}
				Doms["mask"].unloadopacity();
			} else {
				Doms["mask"].unloadopacity();
			}
		},
		"close": function () {
			if (Vars.shown) {
				doClose();
			}
		}
	};
	
	$(function() {
		Doms["dialog"] = $("#dialog_location");
		Doms["mask"] = $("#dialog_location .panel");
		
		Doms["tab_mlg"] = $("#loc_tab_mileage");
		Doms["tab_pos"] = $("#loc_tab_position");
		Doms["panel_mlg"] = $("#loc_panel_mileage");
		Doms["panel_pos"] = $("#loc_panel_position");
		
		Doms["tab_mlg"].addClass("active");
		Doms["panel_mlg"].show();
		Doms["panel_pos"].hide();
		
		Doms["tab_mlg"].click((function(Doms, Vars) {
			return function () {
				if (Vars.tab == 2) {
					Doms["panel_pos"].hide();
					Doms["tab_pos"].removeClass("active");
				}
				if (Vars.tab != 1) {
					Doms["tab_mlg"].addClass("active");
					Doms["panel_mlg"].show();
					Vars.tab = 1;
				}
			};
		})(Doms, Vars));
		
		Doms["tab_pos"].click((function(Doms, Vars) {
			return function () {
				if (Vars.tab == 1) {
					Doms["panel_mlg"].hide();
					Doms["tab_mlg"].removeClass("active");
				}
				if (Vars.tab != 2) {
					Doms["tab_pos"].addClass("active");
					Doms["panel_pos"].show();
					Vars.tab = 2;
				}
			};
		})(Doms, Vars));
		
		Doms["waterway"] = new Global.ComboBox("#loc_cmb_waterway", {
			"valueField": "id",
			"labelField": "name",
			"onShow": {
				"fn": function() {
					Doms["channel"].hideMenu();
				},
				"scope": Me
			},
			"onSelect": {
				"fn": function(){
					var ns = Doms["waterway"].getData()[Doms["waterway"].getSelected()];
					if(ns){
						Doms["channel"].loadData(ns.segments);
						if (ns.segments.length > 0) {
							Doms["channel"].select(0);
						}
					} else {
						Global.message({
							"style": "warning",
							"text": "该航道的航段信息不完善!"
						});
						Doms["channel"].loadData();
					}
				},
				"scope": Me
			}
		});
		Doms["channel"] = new Global.ComboBox("#loc_cmb_channel", {
			"valueField": "id",
			"labelField": "name",
			"onShow": {
				"fn": function() {
					Doms["waterway"].hideMenu();
				},
				"scope": Me
			}
		});
		Doms["mileage"] = $("#loc_txt_mileage input");
		Doms["x"] = $("#loc_txt_x input");
		Doms["y"] = $("#loc_txt_y input");
		
		$.post(CONTEXT + "/common/getNCList.do", {}, (function(Doms) {
			return function(result) {
				Doms["waterway"].loadData(result);
				if (result.length > 0) {
					Doms["waterway"].select(0);
				}
			};
		})(Doms));
		
		$("#tools_locate").click(function () {
			if (Vars.shown) {
				doClose();
			} else {
				doShow();
			}
		});
	});
	
}) (this, map);