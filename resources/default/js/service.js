/*
 * function:1.获取服务接口列表；2.保存服务申请信息
 * 
 * 
 * 
 */
var service_page;
var imagePath = "http://10.1.67.163/:8080/thumbnail/";
var servicePath = "http://10.1.67.193/:9091/gdservice/";
var gisPatj = "http://10.1.67.163/:6080/arcgis/rest/services/";
//获取服务接口列表
$(function(){
	 
//	service_page = new Page(4,"service_page","service_page");
//	service_page.customBody = function(data){
//		return createTableBody(data);
//	}
//	service_page.load = function(currentPage,pageSize){
//		var params = this.params;
//		if(this.types)
//			params+=this.types;
//		$.post(contextPath+'/service/getServiceList.do',{"draw":1,"start":(currentPage-1)*pageSize,"length":4,"params":params},function(json){
//			service_page.loadReply(json);
//		});
//	}
//	service_page.setNumBar("div_gridTools");
//	service_page.create();
//	$('#btn_search').click(function(){
//		service_page.params = "servicename="+$('#txt_serach').val();
//		service_page.create();
//	});
	$('.date-picker').datepicker({
		autoclose: true,
		todayHighlight: true
	});
    $('.closeWindow').click(function(){
    	hideMask();
    	$('#myModal').hide();
        $("#mask").hide();
    });
});
function chooseType(type,dom){
	if(type>0)
		service_page.types = "&servicetype.id="+type;
	else
		service_page.types = null;	
	service_page.create();
}
function createTableBody(row){
	var thumbnail = imagePath+row.icon;
	var name = row.servicename;
	var type = row.servicetype.name;
	var date =(row.createtime==null)?'':new Date(row.createtime).Format("yyyy-MM-dd hh:mm:ss");
	var address = "";
	if(row.servicetype.id==2){
		 address = gisPatj +row.address;
	}else{
		 if(row.servicetype.id==3 || row.servicetype.id==4)
			 address = servicePath+"file/" +row.address;
		 else
			 address = servicePath+"query/" +row.address;
	}
		
	var remark = row.remark;
	var func = "opendiv('"+row.id+"','"+name+"','"+row.servicetype.id+"')" ;
	var html = ("<li class=\'clearfix\'> <div class=\'imgBox\'><img src=\'"+thumbnail+"\'></div><div class=\'txtBox\'><span><span>"+name+"</span></span><span><label>服务类型：</label>"+type+"</span><span><label>服务注册时间：</label>"+date+"</span><span><label>服务地址：</label>"+address+"</span><span><label>描述：</label>"+remark+"</span><span><button class=\'btn btn-primary btn-lg\' onclick=\""+func+"\">申请使用</button></span></div></li>");
	return html;
}
//确认登陆状态
function opendiv(id,name,serviceType){

//	if(serviceType==2)
//		$('#div_maprequest').show();
//	else
//		$('#div_maprequest').hide();
	if(user==null||user=="-1")
		alert('请先登录！');
	else{
		$("#mask").css("height",$(document).height());
		$("#mask").css("width",$(document).width());     
		$("#mask").show();   
		$('#fid').val(id);
		$('#servicename').html(name);
		$('#myModal').show();
		showMask();
	}
}
//保存申请信息
function save(){
	var id=$('#fid').val();
	var client = $('#client').val();
	var referer = $('#referer').val();
	var termtime=$("#applydate").val();
	if(referer==''){
		if(client=='referer'){
			alert("请填写服务器地址信息!");
		}else{
			alert("请填写IP地址!");
		}
		return ;
	}
	if(termtime!=null && termtime !=''){
	 if(confirm("确认提交服务申请吗？？")){
		    $("#myModal").loadopacity();
			 $.post(contextPath+'/service/save.do',{"id":id,"termtime":termtime,client:client,referer:referer},function(json){
					if(json){
						if(json.status==0){
							alert("提交申请成功!");		
							$('#myModal').hide();
					        $("#mask").hide();
						}else{
							alert("提交申请失败！");
						}
					}
					$("#myModal").unloadopacity();
					$('#myModal').modal('hide');
				});
	 }		
	}else{
		alert("请选择服务使用期限!")
	}	
}


function openRemark(){
	if($('#note').text()=='【展开全文】'){
		$('#ellipsis').hide();
		$('#remark').show();
		$('#note').text('【收起全文】');
	}else{
		$('#remark').hide();
		$('#ellipsis').show();
		$('#note').text('【展开全文】');
	}
	
}

function detailed(serviceid){
	 $.post(contextPath+'/service/getInterFaceList.do',{"serviceid":serviceid},function(json){
	 });
}