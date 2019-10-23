/**
 * @function:1>表单验证;2>获取登录用户id;3>根据id获取用户信息；4>填充表单
 * 
 * @author:gaojian
 * 
 * @data:2016/2/24
 */

// 更新用户信息
function updateUser() {
	nameCheck();
	companyCheck();
	phoneCheck();
	emailCheck();
	var data = Util.getFormData("#updateForm");
	var span = $("#updateForm").find("span");
	var count = 0;
	$("#updateForm").find("span").each(function() {
		if ($(this).hasClass('bubble'))
			count++
	});
	if (count == 0) {
		if (confirm("确认修改用户信息吗？？")) {
			$.post("../system/webuser/updateUser.do", data, function(json) {
				if (json.status == 0) {
					alert("修改用户信息成功！");
				} else {
					alert("修改用户信息失败！");
				}
			});
		}
	}
}

// 修改密码
function updatePassword() {
	oldpwdCheck();
	passwordCheck();
	passworkConfirm();
	var oldpwd = $('#oldpwd').val();
	var newpwd = $('#pwdOnce').val();
	var count = 0;
	$("#passwordForm").find("span").each(function() {
		if ($(this).hasClass('bubble'))
			count++
	});
	if (count == 0) {
		if (confirm("确认修改密码吗？")) {
			$.post("../system/webuser/updatePassword.do", {
				"id" : userid,
				"oldpwd" : oldpwd,
				"newpwd" : newpwd
			}, function(json) {
				if (json.status == 0) {
					alert("修改密码成功！");
				} else if (json.status == 2) {
					alert("原密码不正确！");
					$('#oldpwd').val('');
				} else {
					alert("修改密码失败！");
				}
			});
		}
	}
}

// 验证真实姓名
function nameCheck() {
	var realname = $('#realname').val();
	if (realname != "") {
		if (realname.length > 12) {
			$("#realname_tip").html("&nbsp;&nbsp真实姓名长度超过范围！");
			$("#realname_tip").addClass("bubble");
		} else {
			$("#realname_tip").html("请输入您的真实姓名");
			$("#realname_tip").removeClass("bubble");
		}
	} else {
		$("#realname_tip").html("&nbsp;&nbsp真实姓名不能为空！");
		$("#realname_tip").addClass("bubble");
	}
}

// 验证工作单位
function companyCheck() {
	var company = $('#company').val();
	if (company != "") {
		if (company.length > 12) {
			$("#company_tip").html("&nbsp;&nbsp工作单位名称过长！");
			$("#company_tip").addClass("bubble");
		} else {
			$("#company_tip").html("请填写正确的工作单位名称");
			$("#company_tip").removeClass("bubble");
		}
	} else {
		$("#company_tip").html("&nbsp;&nbsp工作单位不能为空！");
		$("#company_tip").addClass("bubble");
	}
}

// 验证联系电话
function phoneCheck() {
	var a = /^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$|(^((\(\d{3}\))|(\d{3}\-))?(1[358]\d{9})$)/;
	var t1 = $('#phone').val();
	if (t1 != "") {
		if (!a.test(t1)) {
			$("#phone_tip").html("&nbsp;&nbsp联系电话格式不正确！");
			$("#phone_tip").addClass("bubble");
		} else {
			$("#phone_tip").html("请填写正确的通讯号码");
			$("#phone_tip").removeClass("bubble");
		}
	} else {
		$("#phone_tip").html("&nbsp;&nbsp联系电话不能为空！");
		$("#phone_tip").addClass("bubble");
	}
}

// 验证邮箱
function emailCheck() {
	var a = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
	var t1 = $('#email').val();
	if (t1 != "") {
		if (!a.test(t1)) {
			$("#email_tip").html("&nbsp;&nbsp邮箱格式不正确！");
			$("#email_tip").addClass("bubble");
		} else {
			$("#email_tip").html("请填写正确的邮箱地址");
			$("#email_tip").removeClass("bubble");
		}
	} else {
		$("#email_tip").html("&nbsp;&nbsp邮箱地址不能为空！");
		$("#email_tip").addClass("bubble");
	}
}

// 原密码验证
function oldpwdCheck() {
	var t1 = $('#oldpwd').val();
	if (t1 != "") {
		if (t1.length > 18) {
			$("#oldpwd_tip").html("&nbsp;&nbsp密码长度超过范围！");
			$("#oldpwd_tip").addClass("bubble");
		} else {
			$("#oldpwd_tip").html("请输入原密码");
			$("#oldpwd_tip").removeClass("bubble");
		}
	} else {
		$("#oldpwd_tip").html("&nbsp;&nbsp原密码不能为空！");
		$("#oldpwd_tip").addClass("bubble");
	}

}

// 密码验证
function passwordCheck() {
	var a = /^(?=.*?[a-zA-Z])(?=.*?[0-6])[!"#$%&'()*+,\-./:;<=>?@\[\\\]^_`{|}~A-Za-z0-9]{6,18}$/;
	var t1 = $('#pwdOnce').val();
	var t2 = $('#oldpwd').val();
	if (t1 != "") {
		if (!a.test(t1)) {
			$("#pwdOnce_tip").html("&nbsp;&nbsp密码格式不正确");
			$("#pwdOnce_tip").addClass("bubble");
		} else if (t1 == t2) {
			$("#pwdOnce_tip").html("&nbsp;&nbsp新密码不能与原密码相同");
			$("#pwdOnce_tip").addClass("bubble");
		} else {
			$("#pwdOnce_tip").html("6-18个字符，请使用字母加数字的组合");
			$("#pwdOnce_tip").removeClass("bubble");
		}
	} else {
		$("#pwdOnce_tip").html("&nbsp;&nbsp密码不能为空！");
		$("#pwdOnce_tip").addClass("bubble");
	}
}

// 确认密码
function passworkConfirm() {
	var t1 = $('#pwdOnce').val();
	var t2 = $('#pwdTwo').val();
	if (t1 != "" && t2 != "") {
		if (t1 != t2) {
			$("#pwdTwo_tip").html("&nbsp;&nbsp两次输入密码不一致");
			$('#pwdTwo').val('');
			$("#pwdTwo_tip").addClass("bubble");
		} else {
			$("#pwdTwo_tip").html("请确认新密码");
			$("#pwdTwo_tip").removeClass("bubble");
		}
	} else if (t2 == "") {
		$("#pwdTwo_tip").html("&nbsp;&nbsp确认密码不能为空！");
		$("#pwdTwo_tip").addClass("bubble");
	}
}