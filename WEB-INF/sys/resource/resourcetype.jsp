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
							<div class="col-xs-6 col-sm-12">
								<div>
									<p>
										<a href="javascript:save()" role="button" class="btn btn-sm btn-success"> 添加资源类型 </a>
									</p>
								</div>
								<div class="table-header">
									资源类型列表
								</div>
								<table class="table table-striped table-bordered" id="resourceTable" width="100%">
                        		</table>
							</div><!-- /.col -->
						</div><!-- /.row -->
						
						
						
						<div id="model-form" class="modal" tabindex="-1">
							<div class="modal-dialog">
								<div class="modal-content">
									<div class="modal-header">
										<button type="button" class="close" data-dismiss="modal">&times;</button>
										<h4 class="blue bigger">添加资源类型</h4>
									</div>

									<div class="modal-body">
										<div class="row">
											<div class="col-xs-12">
												<form class="form-horizontal" id="saveForm" method="get">
													<input type="hidden" name="id" id="id" />
													
													<div class="form-group">
														<label class="control-label col-xs-12 col-sm-3 no-padding-right" for="resourceCode">类型编码:</label>

														<div class="col-xs-12 col-sm-9">
															<div class="clearfix">
																<input type="text" name="code" id="resourceCode" class="col-xs-12 col-sm-8" />
<!-- 																<input type="hidden" name="code" id="code" /> -->
															</div>
														</div>
													</div>
													
													<div class="form-group">
														<label class="control-label col-xs-12 col-sm-3 no-padding-right" for="name">类型名称:</label>

														<div class="col-xs-12 col-sm-9">
															<div class="clearfix">
																<input type="text" name="name" id="name" class="col-xs-12 col-sm-8" />
															</div>
														</div>
													</div>

													<div class="space-2"></div>

													<div class="form-group">
														<label class="control-label col-xs-12 col-sm-3 no-padding-right" for="url">类型描述:</label>

														<div class="col-xs-12 col-sm-9">
															<div class="clearfix">
																<input type="text" name="mark" id="url" class="col-xs-12 col-sm-8" />
															</div>
														</div>
													</div>

												</form>
											</div>
										</div>
									</div>

									<div class="modal-footer">
										<button class="btn btn-sm" data-dismiss="modal">
											<i class="ace-icon fa fa-times"></i>
											取消
										</button>

										<button id = "savebt" class="btn btn-sm btn-primary" onclick="saveResource()" style="display:none">
											<i class="ace-icon fa fa-check"></i>
											保存
										</button>
										
										<button id = "updatebt" class="btn btn-sm btn-primary" onclick="updateResourceType()" style="display:''">
											<i class="ace-icon fa fa-check"></i>
											更新
										</button>
									</div>
								</div>
							</div>
						</div><!-- PAGE CONTENT ENDS -->

					</div><!-- /.page-content -->
				</div>
			</div><!-- /.main-content -->

			<jsp:include page="/include/footscript.jsp" />
		</div><!-- /.main-container -->
		
	</body>
	<link rel="stylesheet" type="text/css" href="<%=contextPath %>/assets/js/zTree/css/zTreeStyle/zTreeStyle.css"/>
 	<script type="text/javascript" src="<%=contextPath %>/assets/js/zTree/js/jquery.ztree.core-3.5.js"></script>
	<script type="text/javascript" src="<%=contextPath %>/assets/js/fuelux/fuelux.tree.js"></script>
	<script type="text/javascript" src="js/resourcetype.js"></script>
</html>