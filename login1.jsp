<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="org.springframework.security.core.AuthenticationException" %>
<%
  	String contextPath = request.getContextPath();
    AuthenticationException anthenticationException = null;
	String message = null;
	if( session.getAttribute("SPRING_SECURITY_LAST_EXCEPTION")!=null){
		anthenticationException=(AuthenticationException)session.getAttribute("SPRING_SECURITY_LAST_EXCEPTION");
		message = anthenticationException.getMessage();
		System.out.println(message);
	}
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7, IE=9">
<title>广东省航道事务中心—电子航道图服务网站</title>
<link rel="shortcut icon" href="<%=contextPath %>/web/images/favicon.ico">
<link type="text/css" rel="stylesheet" href="<%=contextPath %>/css/common.css" />
<link type="text/css" rel="stylesheet" href="<%=contextPath %>/css/style.css" />
<link href="css/css.css" rel="stylesheet" type="text/css">
<script src="<%=contextPath %>/assets/js/jquery.js"></script>
</head>

<body style="background:url(../images/bg_body.jpg) no-repeat scroll center 0 #EAF1F6;">
<div class="headerBox">
  <div class="header w960 clear">
    <div class="header_left">广东省电子航道图政务外网公共服务网站</div>
    <div class="header_right">
      <ul>
        <li><img src="<%=contextPath%>/images/home.png" /><a href="<%=contextPath%>/index.jsp">返回首页</a></li>
        <li><img src="<%=contextPath %>/images/zc.png" /><a href="<%=contextPath%>/mine/registered/registered.jsp">快速注册</a></li>
      </ul>  
    </div>
  </div>
</div>
<!--------- end header ----------------------------------------------------------------------------------------------------------------------------------->    
<!--------- container ------------------------------------------------------------------------------------------------------------------------------------>    
<div id="log_content">


    <div class="log-reg-box clearfix">
        <div class="log-reg-left log-reg-left2">
            <div class="log-reg-title"><h2>用户登录</h2><span>已有账号忘记密码？<label style="color:blue">请联系管理员</label></span></div>
            
        <form  id="form" name="form" action="j_spring_security_check" submit="form();"   method="post">
            <p class="register_info_line"><label for="mobileNum" class="label"><span class="requied_symbol">*</span>登录账号：</label><input type="text" value="" id="username" name="j_dlm" maxlength="11"  data-prompt="请正确填写登录账号" class="input"><span class="prompt">请正确填写登录账号</span></p>
            <p class="register_info_line c_two_register_info_line"><label for="pwdOnce" class="label"><span class="requied_symbol">*</span>登录密码：</label><input type="password" id="password" name="j_yhmm" maxlength="18" data-prompt="6-18个字符，请使用字母或数字，不能使用特殊符号" class="input"><span class="prompt">6-18个字符，请使用字母或数字，不能使用特殊符号</span></p>
            <p class="register_info_line"><label for="verifCode" class="label"><span class="requied_symbol">*</span>验证码：</label><input type="text" value=""  maxlength="4" id="vcode" name='j_vcode' class="text-box input verif_code"><img id="vimage"  title="点击刷新验证码" class="verif_code_img" onclick="changeimage();"  style="height:30px; " src="Kaptcha.jpg"/> <span style="color:#999; font-family: SimSun;">看不清？<span id="changeVerifCodeImg" class="change_verif_code_img" onclick="changeimage()">换一张</span></span><span class="prompt"></span></p>
            <p class="register_info_line register_submit_btn_wrapper"><a id="login" href="javascript:login()" class="red32" >立即登录</a></p>
        </form>        
        </div>
        <div class="log-reg-right2"><img src="<%=contextPath %>/images/shop.jpg" /></div>
    </div>
     <input type="hidden" id="message" value="<%=message%>">


    <div class="clear"></div>
</div>
<!--------- end container -------------------------------------------------------------------------------------------------------------------------------->    
<!--------- footer --------------------------------------------------------------------------------------------------------------------------------------->    
<div id="footer">
    <p>Copyright © 2016-2017 广东省航道事务中心</p>
</div>
<!--------- end footer ----------------------------------------------------------------------------------------------------------------------------------->    
</div>
		<script type="text/javascript">
			if('ontouchstart' in document.documentElement) document.write("<script src='assets/js/jquery.mobile.custom.js'>"+"<"+"/script>");
			jQuery(function($) {
				$('#username').keydown(function(e) {
					if (e.keyCode == 13) {
						if($(this).val() != "")
							$('#password').focus();
					}
				});
				$('#password').keydown(function(e) {
					if (e.keyCode == 13) {
						login();
					}
				});
				
				if($('#message').val()!="null"){
					alert($('#message').val());
				}
			});
			function login(){
				if($('#username').val() == '')
					alert("请输入用户名");
				else if($('#password').val() == '')
					alert("请输入密码");
				else{
					$("#login").html("登录中");
					$("#form").submit();
				}
			}
			
			function changeimage(){
	    		var im = document.getElementById("vimage");
	    		im.src="Kaptcha.jpg?pasdas="+new Date().getTime();

	    	}
			
		</script>
</body>
</html>