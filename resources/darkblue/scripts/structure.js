(function(Global) {
	var Header, Container, Footer, Profile;
	
	function onResize() {
		Container.width($(window).width());
		Container.height(Footer.offset().top - Header.outerHeight());
		
		var target = Profile.getTarget();
		if (target[0]) {
			var menu = Profile.getMenu(), 
				tos = target.offset(), 
				hos = Header.offset(), 
				left = tos.left + target.outerWidth() - menu.outerWidth(), 
				top = hos.top + Header.height() - (menu.outerHeight(true) - menu.innerHeight()) / 2;
			menu.css("top", top + "px").css("left", left + "px");
		}
	}
	
	Global.profile = {
		"collapse": function() {
			Profile.hideMenu();
		}
	};
	
	$(function() {
		Header = $("#header");
		Container = $("#container");
		Footer = $("#footer");
		
		Profile = new Global.HoverDropMenu("#profile_btn", "#profile_dropdown");
		
		onResize();
		
		$(window).on("resize", onResize);
		
		$(".dialog").draggabilly({
			"handle": ".panel-heading"
		});
	});
	
})(this);

function HoverDropMenu(target, menu) {
	var Target = $(target), Menu = $(menu), Shown = false, TaskId = null, 
		cleanTask = function() {
			if (TaskId) {
				try {
					clearTimeout(TaskId);
				} catch(ex) {}
				TaskId = null;
			}
		}, doHideMenu = function() {
			if (Shown) {
				Target.removeClass("active");
				Menu.hide();
				Shown = false;
			}
			cleanTask();
		}, hideMenu = function () {
			cleanTask();
			TaskId = setTimeout(doHideMenu, 200);
		}, showMenu = function () {
			cleanTask();
			if (!Shown) {
				Target.addClass("active");
				Menu.show();
				Shown = true;
			}
		};
	
	Target.on("mouseover", showMenu);
	Target.on("mouseout", hideMenu);
	Menu.on("mouseover", showMenu);
	Menu.on("mouseout", hideMenu);
	
	this.getTarget = function() {
		return Target;
	};
	this.getMenu = function() {
		return Menu;
	};
	this.showMenu = showMenu;
	this.hideMenu = hideMenu;
}

(function(Global) {
	
	Global.ComboBox = function(target, config) {
		if (!config) {
			config = {};
		}
		var Me = this, 
			Private = {
				input: $(target + " input"), 
				toggle: $(target + " button"), 
				menu: $(target + " .dropdown-menu"), 
				silence: false,
				shown: false, 
				labelField: config.labelField || "label", 
				valueField: config.valueField || "value", 
				rawData: config.data || [], 
				selected: -1, 
				doShow: function(silence) {
					if (!silence) {
						Private.input.focus();
					}
					Private.toggle.addClass("active");
					Private.menu.show();
					Private.shown = true;
					var fn = Private.onShow ? (Private.onShow.fn ? Private.onShow.fn : Private.onShow) : null, 
						scope = (Private.onShow && Private.onShow.scope) ? Private.onShow.scope : Global;
					if($.isFunction(fn)) {
						fn.call(scope);
					}
				}, doHide: function(silence) {
					if (!silence) {
						Private.input.blur();
					}
					Private.toggle.removeClass("active");
					Private.menu.hide();
					Private.shown = false;
					var fn = Private.onHide ? (Private.onHide.fn ? Private.onHide.fn : Private.onHide) : null, 
						scope = (Private.onHide && Private.onHide.scope) ? Private.onHide.scope : Global;
					if($.isFunction(fn)) {
						fn.call(scope);
					}
				}, doSelect: function(i) {
					Private.menu.children().removeClass("active");
					if (i >= 0 && i < Private.rawData.length) {
						Private.selected = i;
					} else {
						Private.selected = -1;
					}
					if (Private.selected < 0) {
						Private.input.val("");
					} else {
						$(Private.menu.children()[Private.selected]).addClass("active");
						Private.input.val(Private.rawData[Private.selected][Private.labelField]);
					}
				}, doSetValue: function(v) {
					for (var i = 0; i < Private.rawData.length; i++) {
						if (Private.rawData[i][Private.valueField] == v) {
							Private.doSelect(i);
							return true;
						}
					}
					Private.doSelect(-1);
					return false;
				}, doRefreshMenu: function() {
					var index = 0, children = Private.menu.children();
					for (var i = 0; i < children.length; i++) {
						var child = $(children[i]);
						if(index < Private.rawData.length) {
							child.children().text(Private.rawData[index][Private.labelField]);
						} else {
							child.remove();
						}
						index++;
					}
					while(index < Private.rawData.length) {
						var a = document.createElement("a");
						a.setAttribute("href", "javasript:;");
						a.appendChild(document.createTextNode(Private.rawData[index][Private.labelField]));
						var li = document.createElement("li");
						li.appendChild(a);
						Private.menu.append(li);
						$(a).click((function(Me, index, fn, scope) {
							return function() {
								if (Me.select.call(Me, index)) {
									if($.isFunction(fn)) {
										fn.call(scope, index);
									}
									Me.hideMenu.call(Me);
								}
							};
						})(Me, index, 
							$.isFunction(Private.onSelect) ? Private.onSelect : (Private.onSelect && Private.onSelect.fn ? Private.onSelect.fn : null), 
							Private.onSelect && Private.onSelect.scope ?  Private.onSelect.scope : Global));
						index++;
					}
				},
				onShow: config.onShow || null,
				onHide: config.onHide || null,
				onSelect: config.onSelect || null
			};
		
		this.loadData = function(data) {
			var current = this.getValue();
			Private.rawData = data || [];
			Private.doRefreshMenu();
			if (null == current) {
				Private.doSelect(-1);
			} else {
				Private.doSetValue(current);
			}
		};
		this.getData = function() {
			return Private.rawData;
		};
		this.select = function(i) {
			if (Private.selected != i) {
				Private.doSelect(i);
				return true;
			}
			return false;
		};
		this.getSelected = function() {
			if (Private.selected < 0) {
				return null;
			} else {
				return Private.selected;
			}
		};
		this.setValue = function(v) {
			var current = this.getValue();
			if ((!current && !v) || (current && v && current == v)) {
				return true;
			} else {
				return Private.doSetValue(v);
			}
		};
		this.getValue = function() {
			if (Private.selected < 0) {
				return null;
			} else {
				return Private.rawData[Private.selected][Private.valueField];
			}
		};
		this.showMenu = function() {
			if (!Private.shown) {
				Private.doShow();
			}
		};
		this.hideMenu = function() {
			if (Private.shown) {
				Private.doHide();
			}
		};
		
		Private.menu.empty();
		Private.doRefreshMenu();
		
		var toggle = (function(Me, Private) {
			return function() {
				if (Private.shown) {
					Private.doHide.call(Me);
				} else {
					Private.doShow.call(Me);
				}
			};
		})(Me, Private);
		Private.input.click(toggle);
		Private.toggle.click(toggle);
		
		if(config.value) {
			this.setValue(config.value);
		}
	};

})(this);