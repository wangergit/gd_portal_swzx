/**
 * function:1.获取申请信息和审核已通过列表；2.获取申请历史记录列表，3.显示申请信息详细
 * 
 * cretime:2016/3/24
 */

var table;
$(function(){
	$("#container").after('<div id="footer"><p>Copyright © 2016-2017 广东省航道事务中心 </p></div>')
	    //获取申请信息和审核已通过列表；
		table = Util.dataTable({
			"dom": '#applicationTable',
			"width": 1200,
			"url" : "../service/getTableList.do",
			"aoColumns": [
							{"title": "服务名称", "data": "servicename" ,"sWidth":"80px"},
				            {"title": "服务地址", "data": "address" ,"sWidth":"20px","render":function(data){
								if(data){
									return "<div class='ellip'><p title=" + data + ">" + data + "</p></div>";
								}
								else
									return "";
							}},
//				            {"title": "申请人", "data": "applicant.realname" ,"sWidth":"55px"},
				            { "title": "申请时间","data": "applicationtime" ,"sWidth":"90px","render":function(data){
				            	if(data!=null)
				            	 return new Date(data).Format("yyyy-MM-dd hh:mm:ss");
				            	else
				            	 return "";
				            }},
				            { "title": "状态","data": "status.name" ,"sWidth":"50px","render":function(data,type,row){
				            	if(row.status.id==0)
									return "<span style=\"color:red\" >"+data+"</span>";
				            	else
				            		return data;
				            }},
//				            {"title": "审核人", "data": "auditor" ,"sWidth":"50px","render":function(data){
//				            	if(data!=null)
//				            		return data.realname;
//				            	else
//				            		return ""
//				            }},
				            { "title": "审核时间","data": "auditime" ,"sWidth":"50px","render":function(data){
				            	if(data!=null)
					            	 return new Date(data).Format("yyyy-MM-dd hh:mm:ss");
					            	else
					            	 return "";
					         }},
					         {"title": "操作","data": "id","width":"50px","render":function(data, type, row){
					        	 return "<a href=\"javascript:show('"+data+"')\"  role=\"button\" class=\"btn btn-minier btn-success\" >详细</a>"
					         }},
				        ]	
	    });
				
		//获取申请历史记录列表；
		 var	historTable = Util.dataTable({
				"dom": '#historyTable',
				"width": 1200,
				"url" : "../service/getHistoryList.do",
				"aoColumns": [
								{"title": "服务名称", "data": "servicename" ,"sWidth":"80px"},
					            {"title": "服务地址", "data": "address" ,"sWidth":"20px","render":function(data){
									if(data){
										return "<div class='ellip'><p title=" + data + ">" + data + "</p></div>";
									}
									else
										return "";
								}},
//					            {"title": "申请人", "data": "applicant.realname" ,"sWidth":"55px"},
					            { "title": "申请时间","data": "applicationtime" ,"sWidth":"50px","render":function(data){
					            	if(data!=null)
					            	 return new Date(data).Format("yyyy-MM-dd hh:mm:ss");
					            	else
					            	 return "";
					            }},
					            { "title": "状态","data": "status.name" ,"sWidth":"60px"},
//					            {"title": "审核人", "data": "auditor" ,"sWidth":"55px","render":function(data){
//					            	if(data!=null)
//					            		return data.realname;
//					            	else
//					            		return ""
//					            }},
					            { "title": "审核时间","data": "auditime" ,"sWidth":"50px","render":function(data){
					            	if(data!=null)
						            	 return new Date(data).Format("yyyy-MM-dd hh:mm:ss");
						            	else
						            	 return "";
						         }},
						        { "title": "审核意见","data": "opinion" ,"sWidth":"80px","render":function(data){
									if(data){
										return "<div class='ellip'><p title=" + data + ">" + data + "</p></div>";
									}
									else
										return "";
								}},
						        {"title": "操作","data": "id","width":"50px","render":function(data, type, row){
						        	 return "<a href=\"javascript:show('"+data+"')\"  role=\"button\" class=\"btn btn-minier btn-success\" >详细</a>"
						         }},
					        ]	
		    });
		 
});
    
//详细
   function show(id){
	   $("#info").resetForm();	   
	   Util.modal("#model-form",'show');
	   $("#service-tab").tab('show');
	   $("#info-div").loadmask();
	   $.post('../service/getServiceView.do',{"id":id},function(json){
		   if(json.status=="审核中"){
			   $("#audit-div").hide();
		   }else{
			   $("#audit-div").show();
		   }
		   $("#info").fill(json);
		   $("#info-div").unloadmask();
	   });	   
   }
