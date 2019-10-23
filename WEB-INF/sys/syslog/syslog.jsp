<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
  	String contextPath = request.getContextPath();
%>
<!DOCTYPE html>
<html lang="zh-CN">
	<jsp:include page="/include/meta.jsp" />
	
	<body class="no-skin">
		
		<jsp:include page="/include/head.jsp" />
		
		<div class="main-container" id="main-container">

			<jsp:include page="/include/menu.jsp" />
			
			<div class="main-content">
				<div class="main-content-inner">
					<div class="page-content">
						
						<jsp:include page="/include/module.jsp" />
						<div class="row">
							<!-- .col -->
							<div class="col-xs-12 col-sm-12">
								<div class="search-form">
									<form id="searchform">
									<div class="search-from-group" style="width: 75%;">
										<div class="search-group">
											<label class="no-padding-right" for="start-date">开始时间</label>
											<span class="input-icon input-icon-right">
												<input type="text" id="start-date" name="startdate" class="date-picker" data-date-format="yyyy-mm-dd">
												<i class="ace-icon fa fa-calendar blue"></i>
											</span>
										</div>
										<div class="search-group">
											<label class="no-padding-right" for="end-date">结束时间</label>
											<span class="input-icon input-icon-right">
												<input type="text" id="end-date" name="enddate" class="date-picker" data-date-format="yyyy-mm-dd">
												<i class="ace-icon fa fa-calendar blue"></i>
											</span>
										</div>
										<div class="search-group">
											<label class="no-padding-right" for="type-select">操作类型</label>
											<span class="input-icon input-icon-right">
												<select class="form-control" id="type-select" name="logtype">
													<option value=""></option>
													<option value="GET">查看</option>
													<option value="ADD">新增</option>
													<option value="UPDATE">修改</option>
													<option value="DELETE">删除</option>
													<option value="LOGIN">登陆系统</option>
													
												</select>
											</span>
										</div>
									</div>
									
									<div class="right search-from-group" style="width: 25%;">
										<div class="input-group search-group">
											<input type="text" name="searchinfo" class="form-control search-query" placeholder="输入账号、用户或操作结果查询">
											<span class="input-group-btn">
												<button type="button" id="searchBtn" class="btn btn-purple btn-sm">
													<span class="ace-icon fa fa-search icon-on-right bigger-110"></span>
													查询
												</button>
											</span>
										</div>
									</div>
									</form>
								</div>
								<div class="table-header">
									日志列表
								</div>
								<table class="table table-striped table-bordered" id="logTable" width="100%">
                        		</table>
							</div><!-- /.col -->
						</div><!-- /.row -->
					</div><!-- /.page-content -->
				</div>
			</div><!-- /.main-content -->

			<jsp:include page="/include/footscript.jsp" />
		</div><!-- /.main-container -->
		
	</body>
	<script type="text/javascript" src="<%=contextPath %>/assets/js/date-time/bootstrap-datepicker.js"></script>
	<script type="text/javascript" src="<%=contextPath %>/system/syslog/js/syslog.js"></script>
</html>