(function(Global) {
	var Me = this, Doms = {}, Vars = {
		"id": null
	};
	
	function cancel() {
		if (Vars.id) {
			Doms.dialog.hide();
			Vars.id = null;
			Doms.type.select();
			Doms.address.val("");
			Doms.exprice.val("");
		}
	}
	
	Global["apply"] = {
		"open": function(id, name) {
			if (!Vars.id) {
				Doms.name.text(name);
				Doms.dialog.css("left", Math.round(($(window).width() - Doms.dialog.width()) / 2) + "px");
				Doms.dialog.css("top", Math.round(($(window).height() - Doms.dialog.height()) / 2) + "px");
				Doms.dialog.show();
				Vars.id = id;
			}
		},
		"save": function() {
			var type = Doms.type.getValue(), address = Doms.address.val(), exprice = Doms.exprice.val();
			if (!type || !address) {
				Global.message({
					"style": "warning",
					"title": "错误",
					"text": "请填写服务器地址信息！"
				});
				return;
			}
			if (!exprice) {
				Global.message({
					"style": "warning",
					"title": "错误",
					"text": "请选择服务使用期限！"
				});
				return;
			}
			Doms.mask.loadopacity("操作处理中...");
			$.post(CONTEXT + "/service/save.do", {
				"id": Vars.id, 
				"client": type,
				"referer": address,
				"termtime": exprice
			}, function(json){
				Doms.mask.unloadopacity();
				if(json && json.status == 0) {
					cancel();
					Global.message({
						"style": "success",
						"title": "成功",
						"text": "提交申请成功！"
					});
				} else {
					Global.message({
						"style": "error",
						"title": "错误",
						"text": "申请提交失败！"
					});
				}
			});
		},
		"cancel": cancel
	};
	
	$(function() {
		Doms.dialog = $("#dialog_apply");
		Doms.mask = $("#dialog_apply .panel");
		Doms.name = $("#apply_txt_name p");
		Doms.type = new Global.ComboBox("#apply_cmb_type");
		Doms.address = $("#apply_txt_address");
		Doms.exprice = $("#apply_dat_exprice");
		
		Doms.type.loadData([
			{ "label": "域名地址", "value": "referer" },
			{ "label": "IP地址", "value": "ip" }
		]);
		
		$(".date-picker").datepicker({
			"autoclose": true,
			"todayHighlight": true
		});
	});
	
}) (this);