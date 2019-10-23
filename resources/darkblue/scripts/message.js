(function(Global) {
	var Me = this;
	
	Me.shown = false;
	Me.defaults = {
		"style": "primary",
		"header": false,
		"closeable": true,
		"title": "消息",
		"ok": "确定"
	};
	Me.callback = null;
	
	Me.showDialog = function() {
		if (!Me.shown) {
			Me.palMask.show();
			Me.palDialog.show();
			Me.shown = true;
		}
	}
	
	Me.hideDialog = function() {
		if (Me.shown) {
			Me.palDialog.hide();
			Me.palMask.hide();
			Me.shown = false;
		}
		Me.callback = null;
	}
	
	Global["message"] = function (config) {
		Me.hideDialog();
		Me.palPanel.removeClass("panel-primary");
		Me.palPanel.removeClass("panel-success");
		Me.palPanel.removeClass("panel-warning");
		Me.palPanel.removeClass("panel-danger");
		Me.btnOk.removeClass("btn-primary");
		Me.btnOk.removeClass("btn-success");
		Me.btnOk.removeClass("btn-warning");
		Me.btnOk.removeClass("btn-danger");
		
		var style = config.style || Me.defaults.style;
		switch(style.toLowerCase()) {
			case "success":
				Me.palPanel.addClass("panel-success");
				Me.btnOk.addClass("btn-success");
			break;
			case "warning":
				Me.palPanel.addClass("panel-warning");
				Me.btnOk.addClass("btn-warning");
			break;
			case "danger":
			case "error":
				Me.palPanel.addClass("panel-danger");
				Me.btnOk.addClass("btn-danger");
			break;
			default:
				Me.palPanel.addClass("panel-primary");
				Me.btnOk.addClass("btn-primary");
		}
		
		if (config.title || Me.defaults.header) {
			Me.btnHeader.show();
			
			Me.btnTitle.text(config.title || Me.defaults.title);
		
			if (config.closeable || Me.defaults.closeable) {
				Me.btnClose.show();
			} else {
				Me.btnClose.hide();
			}
		} else {
			Me.btnHeader.hide();
		}
		
		Me.palContent.text(config.text || "");
		
		Me.btnOk.text(config.ok || Me.defaults.ok);
		if (config.callback) {
			Me.callback = config.callback;
		}
		
		Me.onResize();
		Me.showDialog();
	};
	
	Me.onResize = function() {
		Me.palDialog.css("left", Math.round(($(window).width() - Me.palDialog.width()) / 2) + "px");
		Me.palDialog.css("top", Math.round(($(window).height() - Me.palDialog.height()) / 2) + "px");
	};
	
	$(function() {
		Me.palMask = $("#mask_message");
		Me.palDialog = $("#dialog_message");
		Me.palPanel = $("#dialog_message .panel");
		Me.btnHeader = $("#dialog_message .panel-heading");
		Me.btnTitle = $("#dialog_message .panel-heading .panel-title");
		Me.btnClose = $("#dialog_message .panel-heading button");
		Me.palContent = $("#dialog_message .panel-body");
		Me.btnOk = $("#dialog_message .panel-footer button");
		
		Me.btnClose.click((function (Me) {
			return function() {
				Me.hideDialog.call(Me);
			};
		})(Me));
		
		Me.btnOk.click((function (Global, Me) {
			return function() {
				var fn, scope, result = true;
				if (Me.callback) {
					if ($.isFuncton(Me.callback)) {
						fn = Me.callback;
						scope = Global;
					} else if ($.isFuncton(Me.callback.fn)) {
						fn = Me.callback.fn;
						scope = Me.callback.scope || Global;
					}
				}
				if (fn) {
					try {
						result = fn.call(scope);
					} catch(ex) {
						console.log(ex);
						result = false;
					}
				}
				if (result) {
					Me.hideDialog.call(Me);
				}
			};
		})(Global, Me));
	});
	
})(this);