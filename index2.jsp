<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="com.ienc.common.login.dto.LoginUser"%>
<%
    String contextPath = request.getContextPath();
    LoginUser user=(LoginUser)request.getSession().getAttribute("systemLoginName");
    String yym=request.getRequestURI().substring(6);
    request.getSession().setAttribute("yym", yym); 
%>
<!DOCTYPE html>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7, IE=9">
<title>电子航道图政务服务平台</title>
<link href="<%=contextPath%>/assets/css/css.css" rel="stylesheet" type="text/css">
<link href="<%=contextPath%>/assets/css/index.css" rel="stylesheet" type="text/css" />
<script src="<%=contextPath %>/assets/js/jquery.js"></script>
<script src="<%=contextPath %>/assets/js/zzsc.js"></script>
<style type="text/css">
.topright ul li a{color: #FFF0F5;}
</style>
</head>
<body class="bj_con">
<div class="top">

    <div class="logoBox"><span class="logo"><img src="<%=contextPath %>/assets/images/logo.png" /></span>电子航道图政务服务平台</div>
    <div class="toprightSatnav">
         <ul>         
        <%if(user!=null){%>
            <li><img src="<%=contextPath%>/assets/images/dl1.png" /><a href="<%=contextPath%>/mine/person/data.jsp"><%=user.getLoginName() %></a></li>
        	<li><img src="<%=contextPath%>/assets/images/exit1.png" /><a href="<%=contextPath %>/logout">注销</a></li>
            <li><img src="<%=contextPath%>/assets/images/ht1.png" /><a href="<%=contextPath%>/public/registered/11.jsp">后台登录</a></li>
        <%}else{%>
           <li><img src="<%=contextPath%>/assets/images/dl1.png" /><a href="<%=contextPath %>/login.jsp">用户登录</a></li>
           <li><img src="<%=contextPath%>/assets/images/zc1.png" /><a href="<%=contextPath%>/public/registered/registered.jsp">快速注册</a></li>
		   <li><img src="<%=contextPath%>/assets/images/ht1.png" /><a href="<%=contextPath%>/public/registered/11.jsp">后台登录</a></li>
        <%}%> 
      </ul>
        </div>
</div>
<div class="content" >
    <div class="box">
        <div class="t_news">
            <ul class="news_li">
                <li>
                	<div class="guide_news"><a href="#" target="_blank">广东省电子航道图政务外网公共服务平台新闻公告</a><span class="guide_time">2016-09-10</span></div>
                	<div class="guide_news last"><a href="#" target="_blank">广东省电子航道图政务外网公共服务平台新闻公告广东省电子航道图政务外网公共服务平台新闻公告</a><span class="guide_time">2016-09-10</span></div>
                </li>
                <li>
                	<div class="guide_news"><a href="#" target="_blank">广东省电子航道图政务外网公共服务平台新闻公告</a><span class="guide_time">2016-09-10</span></div>
                	<div class="guide_news last"><a href="#" target="_blank">广东省电子航道图政务外网公共服务平台新闻公告广东省电子航道图政务外网公共服务平台新闻公告</a><span class="guide_time">2016-09-10</span></div>
                </li>
                <li>
                	<div class="guide_news"><a href="#" target="_blank">广东省电子航道图政务外网公共服务平台新闻公告</a><span class="guide_time">2016-09-10</span></div>
                	<div class="guide_news last"><a href="#" target="_blank">广东省电子航道图政务外网公共服务平台新闻公告广东省电子航道图政务外网公共服务平台新闻公告</a><span class="guide_time">2016-09-10</span></div>
                </li>
                <li>
                	<div class="guide_news"><a href="#" target="_blank">广东省电子航道图政务外网公共服务平台新闻公告</a><span class="guide_time">2016-09-10</span></div>
                	<div class="guide_news last"><a href="#" target="_blank">广东省电子航道图政务外网公共服务平台新闻公告广东省电子航道图政务外网公共服务平台新闻公告</a><span class="guide_time">2016-09-10</span></div>
                </li>
                <li>
                	<div class="guide_news"><a href="#" target="_blank">广东省电子航道图政务外网公共服务平台新闻公告</a><span class="guide_time">2016-09-10</span></div>
                	<div class="guide_news last"><a href="#" target="_blank">广东省电子航道图政务外网公共服务平台新闻公告广东省电子航道图政务外网公共服务平台新闻公告</a><span class="guide_time">2016-09-10</span></div>
                </li>
            </ul>
            <ul class="swap"></ul>
        </div>
    </div>
	<ul class="gnShop">
    	<li><a class="one" href="<%=contextPath %>/comprehensive/index.jsp">综合应用</a></li>
    	<li><a class="two" href="<%=contextPath%>/public/service/service.jsp">服务资源</a></li>
    	<li><a class="three" href="<%=contextPath%>/public/news/news.jsp">公告信息</a></li>
    </ul>
</div>
<script type="text/javascript">
 function getViewSize() {
	return {
		"w": window['innerWidth'] || document.documentElement.clientWidth,
		"h": window['innerHeight'] || document.documentElement.clientHeight
	}
}
function setContainerSize() {
	size = getViewSize();
    $(".map").width(size["w"]);
	var offheight = 97;
	
	$("iframe,.map,.icon,.left,.have").height(size["h"]-offheight);
    if(size["w"]<1024){
	$('html,body,.map').width(1024);
    $('html,body').css('overflowX','auto');
	}
	else{
	$('html,body,.map').width(size["w"]);
    $('html,body').css('overflowX','hidden');

	}
}
 setContainerSize();
 window.onresize=setContainerSize;
 $('.icon p').toggle(function(){
  $('.left').hide();
  $('.icon').addClass("icon2");
  $('.mapsh').addClass("mapsh2");
  $('#div_iframe').css("width","100%");
},
function(){
  $('.left').show();
  $('.icon').removeClass("icon2");
  $('.mapsh').removeClass("mapsh2");
}
)

</script>
</body>
</html>
