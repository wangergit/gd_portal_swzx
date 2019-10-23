(function(Global) {
	var Disabled = false, Doms = {};
	
	Global.refresh = function() {
		if (!Disabled) {
			Doms.image.attr("src", "Kaptcha.jpg?pasdas=" + new Date().getTime());
		}
	};
	
	Global.login = function() {
		if (!Disabled) {
			var un = $.trim(Doms.username.val()), 
				pw = Doms.passwrod.val();
			if (!un) {
				Global.message({
					"style": "warning",
					"title": "错误",
					"text": "请输入用户名!"
				});
				return;
			}
			if (!pw) {
				Global.message({
					"style": "warning",
					"title": "错误",
					"text": "请输入密码!"
				});
				return;
			}
			Disabled = true;
			$("button").prop("disabled", true);
			Doms.form.submit();
		}
	};
	
	$(function() {
		Doms.form = $("#form_login");
		// Doms.username = $("#txt_username");
		// Doms.password = $("#txt_password");
		Doms.xun = $("#txt_username");
		Doms.xpw = $("#txt_password");
		Doms.code = $("#txt_code");
		Doms.image = $("#img_code");
	});
	
})(this);