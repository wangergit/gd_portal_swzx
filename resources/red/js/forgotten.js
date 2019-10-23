(function(global) {
	var Disabled = false, User = null, PwPatt=/^(?=.*?[a-zA-Z])(?=.*?[0-6])[!"#$%&'()*+,\-./:;<=>?@\[\\\]^_`{|}~A-Za-z0-9]{6,18}$/;
	
	function changeVerify() {
		$("#verifyImage").attr("src", "Kaptcha.jpg?_dc="+new Date().getTime());
		$("#verifyCode").val("");
	}
	
	function showPageOne() {
		changeVerify();
		User = null;
		$("#card-page-two").hide();
		$("#card-page-three").hide();
		$("#card-page-one").show();
	}
	
	function showPageTwo() {
		$("#card-page-one").hide();
		$("#card-page-three").hide();
		$("#card-page-two").show();
	}
	
	function showPageThree() {
		$("#pwNew").val("");
		$("#pwConfirm").val("");
		$("#card-page-one").hide();
		$("#card-page-two").hide();
		$("#card-page-three").show();
	}
	
	function lockPageOne() {
		Disabled = true;
		$("#username").prop("readonly", true);
		$("#verifyCode").prop("readonly", true);
	}
	
	function unlockPageOne() {
		$("#username").prop("readonly", false);
		$("#verifyCode").prop("readonly", false);
		Disabled = false;
	}
	
	function lockPageTwo() {
		Disabled = true;
		$("#answer").prop("readonly", true);
	}
	
	function unlockPageTwo() {
		$("#answer").prop("readonly", false);
		Disabled = false;
	}
	
	function lockPageThree() {
		Disabled = true;
		$("#pwNew").prop("readonly", true);
		$("#pwConfirm").prop("readonly", true);
	}
	
	function unlockPageThree() {
		$("#pwNew").prop("readonly", false);
		$("#pwConfirm").prop("readonly", false);
		Disabled = false;
	}
	
	function displayMessage(message) {
		alert(message);
	}
	
	global.changeVerify = changeVerify;
	
	global.Card = {
		PageOne: {
			next: function() {
				if(!Disabled) {
					lockPageOne();
					var username = $("#username").val();
					var verifyCode = $("#verifyCode").val();
					if(!username) {
						displayMessage("帐号名不能为空！");
						unlockPageOne();
					} else if(!verifyCode) {
						displayMessage("验证码不能为空！");
						unlockPageOne();
					} else {
						$.post("getQuestion.do", {
							"username": username,
							"verifyCode": verifyCode
						}, function(json) {
							if(2 == json.status) {
								changeVerify();
								displayMessage("验证码错误！");
							} else if(1 == json.status) {
								User = username;
								if(json.question) {
									$("#question").text(json.question);
								} else {
									$("#question").html('<span style="color: #CCCCCC;">（未设置）</span>');
								}
								showPageTwo();
							} else {
								changeVerify();
								displayMessage("登陆账号错误！");
							}
						}).always(unlockPageOne);
					}
				}
			}
		},
		PageTwo: {
			back: showPageOne,
			next: function() {
				if(!Disabled) {
					lockPageTwo();
					var answer = $("#answer").val();
					if(!answer) {
						displayMessage("安全问题答案不能为空！");
						unlockPageTwo();
					} else {
						$.post("checkAnswer.do", {
							"username": User,
							"answer": answer
						}, function(json) {
							if(1 == json.status) {
								showPageThree();
							} else {
								displayMessage("安全问题答案错误！");
							}
						}).always(unlockPageTwo);
					}
				}
			}
		},
		PageThree: {
			back: showPageOne,
			save: function() {
				if(!Disabled) {
					lockPageThree();
					var password = $("#pwNew").val();
					var confirms = $("#pwConfirm").val();
					if(!password) {
						displayMessage("密码不能为空！");
						unlockPageThree();
					} else if(!PwPatt.test(password)) {
						displayMessage("密码格式不正确，请使用字母加数字的组合！");
						unlockPageThree();
					} else if(!confirms) {
						displayMessage("确认密码不能为空！");
						unlockPageThree();
					} else if(password == confirms) {
						$.post("changePassword.do", {
							"username": User,
							"password": password
						}, function(json) {
							if(1 == json.status) {
								displayMessage("密码已重置！");
								window.location.href="login.jhtml";
							} else {
								displayMessage("密码重置失败！");
								showPageOne();
							}
						}).always(unlockPageThree);
					} else {
						displayMessage("两次输入密码不一致！");
						unlockPageThree();
					}
				}
			}
		}
	};
	
	$(function() {
		showPageOne();
	});
	
})(this);