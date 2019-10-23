/**
 * function:1.保存用户注册信息；2.白哦单验证；3.刷新验证码；
 * 
 * creatime:2016/3/24
 */
function saveUser(){	
	usernameCheck();
	passwordCheck();
	passworkConfirm();
	nameCheck();
	companyCheck();
	phoneCheck();
	emailCheck();
	questionCheck();
	answerCheck();
	var data = Util.getFormData("#register");
	var span=$("#register").find("span");
	var count=0;
	$("#register").find("span").each(function(){
		if($(this).hasClass('bubble'))
			count++
	});
	if(count==0){
		$.post("register.do",data,function(json){
			if(json.status==2){
				$('#verifCode').val('');
				changeimage();
				alert("验证码错误！");
			}else if(json.status==0){
				alert("注册用户信息成功！");
				var obj=window.location;
				var contextPath=obj.pathname.split("/")[1];
				window.location.href="login.jhtml";
			}else{
				alert("用户注册失败！");
			}						
		 });
	}
}

//验证用户名是否已经注册
function usernameCheck(){
	var name=$('#username').val();
	if(name!=""){
		$.post("validateUserName.do",{"name":name},function(json){
			if(!json.status){
				$("#username_tip").html("&nbsp;&nbsp该帐号名已注册");
				$("#username_tip").addClass("bubble");
			}
			else{
				$("#username_tip").html("");
				$("#username_tip").removeClass("bubble");
			}
		});	
	}else{
		$("#username_tip").html("&nbsp;&nbsp帐号名不能为空！");
		$("#username_tip").addClass("bubble");
	}
}

//验证密码
function passwordCheck(){
    // var a=/^(?=.*?[a-zA-Z])(?=.*?[0-6])[!"#$%&'()*+,\-./:;<=>?@\[\\\]^_`{|}~A-Za-z0-9]{8,18}$/;
		let a = new RegExp('^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_!@#$%^&*`~()-+=]+$)(?![a-z0-9]+$)(?![a-z\W_!@#$%^&*`~()-+=]+$)(?![0-9\W_!@#$%^&*`~()-+=]+$)[a-zA-Z0-9\W_!@#$%^&*`~()-+=]{8,30}$');
    let t1=$('#pwdOnce').val();
       if(t1!=""){
		    if(!a.test(t1)) {   
		    	$("#pwdOnce_tip").html("&nbsp;&nbsp密码格式不正确，请使用大写字母、小写字母、数字、特殊字符，三个以上组合，长度8位以上！");
	    		$("#pwdOnce_tip").addClass("bubble");
		    }else{
		    	$("#pwdOnce_tip").html("");
	    		$("#pwdOnce_tip").removeClass("bubble");
		    }  
       }else{
    	   $("#pwdOnce_tip").html("&nbsp;&nbsp密码不能为空！");
   		   $("#pwdOnce_tip").addClass("bubble");
       }
	return false;
}

//确认密码
function passworkConfirm(){
	var t1=$('#pwdOnce').val();
	var t2=$('#pwdTwo').val();
	if(t1!=""&&t2!=""){
		if(t1!=t2){
			$("#pwdTwo_tip").html("&nbsp;&nbsp两次输入密码不一致");
    		$("#pwdTwo_tip").addClass("bubble");
		}else{
			$("#pwdTwo_tip").html("");
    		$("#pwdTwo_tip").removeClass("bubble");
		}
    }else if(t2==""){
    	$("#pwdTwo_tip").html("&nbsp;&nbsp确认密码不能为空！");
		$("#pwdTwo_tip").addClass("bubble");
    }
}

//验证真实姓名
function nameCheck(){
	var realname=$('#realname').val();
	if(realname!=""){
		if(realname.length>12){
			$("#realname_tip").html("&nbsp;&nbsp真实姓名长度超过范围！");
			$("#realname_tip").addClass("bubble");
		}else{
			$("#realname_tip").html("");
    		$("#realname_tip").removeClass("bubble");
		}		
	}else{
		$("#realname_tip").html("&nbsp;&nbsp真实姓名不能为空！");
		$("#realname_tip").addClass("bubble");
	}
}

//验证工作单位
function companyCheck(){
//	var company=$('#company').val();
//	if(company!=""){
//		if(company.length>12){
//			$("#company_tip").html("&nbsp;&nbsp工作单位名称过长！");
//			$("#company_tip").addClass("bubble");		
//		}else{
//			$("#company_tip").html("");
//    		$("#company_tip").removeClass("bubble");
//		}
//	}else{
//		$("#company_tip").html("&nbsp;&nbsp工作单位不能为空！");
//		$("#company_tip").addClass("bubble");
//	}
}

//验证联系电话
function phoneCheck(){
	var a=/^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$|(^((\(\d{3}\))|(\d{3}\-))?(1[358]\d{9})$)/;
    var t1=$('#phone').val();
    if(t1!=""){
		    if(!a.test(t1)) {
		    	$("#phone_tip").html("&nbsp;&nbsp联系电话格式不正确！");
				$("#phone_tip").addClass("bubble");	
		    }else{
		    	$("#phone_tip").html("");
	    		$("#phone_tip").removeClass("bubble");
		    }     
    }else{
    	$("#phone_tip").html("&nbsp;&nbsp联系电话不能为空！");
		$("#phone_tip").addClass("bubble");    	
    }
}

//验证邮箱
function emailCheck(){
	var a=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/ ;
    var t1=$('#email').val();
    if(t1!=""){
		    if(!a.test(t1)) {
		    	$("#email_tip").html("&nbsp;&nbsp邮箱格式不正确！");
				$("#email_tip").addClass("bubble");	
		    }else{
		    	$("#email_tip").html("");
	    		$("#email_tip").removeClass("bubble");
		    }     
    }else{
    	$("#email_tip").html("&nbsp;&nbsp邮箱地址不能为空！");
		$("#email_tip").addClass("bubble");    	
    }
}

function questionCheck(){
	var question = $('#question').val();
	if ("" == question) {
		$("#question_tip").html("&nbsp;&nbsp安全问题不能为空！");
		$("#question_tip").addClass("bubble");
	} else {
		if (answer.length > 100) {
			$("#question_tip").html("&nbsp;&nbsp安全问题答案长度超过范围！");
			$("#question_tip").addClass("bubble");
		} else {
			$("#question_tip").html("");
			$("#question_tip").removeClass("bubble");
		}
	}
}

function answerCheck(){
	var answer = $('#answer').val();
	if ("" == answer) {
		$("#answer_tip").html("&nbsp;&nbsp安全问题答案不能为空！");
		$("#answer_tip").addClass("bubble");
	} else {
		if (answer.length < 2) {
			$("#answer_tip").html("&nbsp;&nbsp安全问题答案太短！");
			$("#answer_tip").addClass("bubble");
		} else if (answer.length>100) {
			$("#answer_tip").html("&nbsp;&nbsp安全问题答案长度超过范围！");
			$("#answer_tip").addClass("bubble");
		} else {
			$("#answer_tip").html("");
			$("#answer_tip").removeClass("bubble");
		}
	}
}

//刷新验证码
function changeimage(){
	var im = document.getElementById("vimage");
	im.src="Kaptcha.jpg?pasdas="+new Date().getTime();
}

function verifyCheck(){
	var verify = $('#verifCode').val();
	if ("" == verify) {
		$("#verify_tip").html("&nbsp;&nbsp验证码不能为空！");
		$("#verify_tip").addClass("bubble");
	} else {
		$("#verify_tip").html("");
		$("#verify_tip").removeClass("bubble");
	}
}
