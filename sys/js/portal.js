/*
 * @function：1>注册用户表格数据的展示；2>表单的验证；3>增加、修改、删除、查看注册用户信息的相应操作；4>模糊搜索查询
 *                     5>锁定用户
 *                     
 * @date: 2016-1-20
 * 
 * @author:gaojian
 * 
 */
var table;
$(function(){	
		table = Util.dataTable({
			"dom": '#userTable',
			"width": 1200,
			"url" : contextpath+"/system/webuser/getTableList.do",
			"aoColumns": [
							{"title": "用户名", "data": "username" ,"sWidth":"80px"},
				            {"title": "真实姓名", "data": "realname" ,"sWidth":"100px"},
				            { "title": "状态","data": "lock" ,"sWidth":"50px","render":function(data){
				            	if (data==1)
				            		return "停用";
				            	else
				            		return "启用";
				            }},
				            //{ "title": "登陆错误次数","data": "tryCount" ,"sWidth":"50px"},
				            /*{"title": "最后登录时间", "data": "lastTime" , "sWidth":"160px","render":function(data){
				            	if(data!=null)
				            	    return new Date(data).Format("yyyy-MM-dd hh:mm:ss");
				            	else
				            		return "";
				            }},*/
				            { "title": "启用时间","data": "lockDate" ,"sWidth":"160px","render":function(data){
				            	if(data!=null)
				            	    return new Date(data).Format("yyyy-MM-dd hh:mm:ss");
				            	else
				            		return "";
				            }},
				            {"title":"操作","data":"id","sWidth":"175px","render":function(data,type,row){	
				            	var html= "<a href=\"javascript:void(0)\"  role=\"button\"></a>" +
				            	"<a href=\"javascript:view('"+data+"')\"  role=\"button\" class=\"btn btn-minier btn-success\">详细</a>"+
		            			"<a href=\"javascript:getUser('"+data+"')\" role=\"button\" class=\"btn btn-minier btn-primary\">修改</a>" +
		            			"<a href=\"javascript:deleteUser('"+data+"')\"  role=\"button\" class=\"btn btn-minier btn-danger\">删除</a>";
				            	if (row.lock==1)
				            		html+="<a href=\"javascript:lock('"+row.id+"','"+row.lock+"')\"  role=\"button\" class=\"btn btn-minier btn-warning\">启用</a>";
				            	else
				            		html+="<a href=\"javascript:lock('"+row.id+"','"+row.lock+"')\"  role=\"button\" class=\"btn btn-minier btn-warning\">停用</a>";
				            	return html;
				            }}
				        ]	
	    });
	
		//修改注册用户信息时勾选checkbox使密码可以修改
		$("#id-disable-check").click(function(){
			if(this.checked){
				$("#modifypsw").removeAttr("disabled");
				$("#mds").show();
			}else{
				$("#modifypsw").attr("disabled","true");
				$("#mds").hide();
			}
		})
    //添加注册用户表单验证
		Util.validate('#saveForm',{
			rules: {
				username: {
					required: true,
					maxlength:12
				},
				password: {
					required: true,
					maxlength:18
				},
				realname: {
					required: true,
					maxlength:12
				},
				company: {
					maxlength:12
				},
				address: {
					maxlength:18
				},
			},
			messages: {
				username: {
					required:"请输入用户名！",
					maxlength:"最大长度为12个字符！"
				},
				password:{
					required:"请输入密码！",
					maxlength:"最大长度为18个字符！"
				},
				realname:{
					required:"请输入真实姓名！",	
					maxlength:"最大长度为12个字符！"
				},
				company:"最大长度为12个字符",
				address:"最大长度为18个字符",
			}
		});
	//修改注册用户表单验证	
		Util.validate('#updateForm',{
			rules: {
				username: {
					required: true,
					maxlength:12
				},
				realname: {
					required: true,
					maxlength:12
				},
				company: {
					maxlength:12
				},
				address: {
					maxlength:18
				},
			},
			messages: {
				username: {
					required:"请输入用户名！",
					maxlength:"最大长度为12个字符！"
				},
				realname:{
					required:"请输入真实姓名！",	
					maxlength:"最大长度为12个字符！"
				},
				company:"最大长度为12个字符",
				address:"最大长度为18个字符",
			}
		});
	//按条件搜索查询注册用户信息
		$("#searchBtn").click(function(){
			var param = $("#searchform").serialize();
			var tableSettings = table.fnSettings();
			tableSettings.ajax.data.params = param;
			table.fnDraw( false );
		});
		document.onkeydown = function () {
	        if (window.event && window.event.keyCode == 13) {
	            window.event.returnValue = false;
	        }
	    }
		$('#searchbtn').keydown(function(e) {
			if (e.keyCode == 13) {
				$("#searchBtn").click();
			}
		});
	});
   //初始化表单
	function initForm(form,option){
		$(form).resetForm();
		$(form).find("input").each(function(i,item){
			if($(item).hasClass("tooltip-error"))
				$(item).tooltip('destroy');
		});
		$(form).find("input").removeAttr("readonly").closest('.form-group').removeClass('has-error');
		$(form).find("textarea").removeAttr("readonly").closest('.form-group').removeClass('has-error');
		$("#modifypsw").attr("disabled","true");
		$("#mds").hide();
		$('#unameTip').hide();	
		$('#upswTip').hide();	
		$('#uphoneTip').hide();	
		if(option == "save"){
			$("#form-title").html("注册用户");
			$('#nameTip').hide();	
			$('#pswTip').hide();	
			$('#phoneTip').hide();	
			$("#div_psw").show();
			$("#div_cpsw").show();
			$('#savebtn').show();
			$("#div_tryCount").hide();
			$("#div_lastTime").hide();
			$("#div_lockDate").hide();
			$("#lastTime").removeAttr("name");
			$("#lockDate").removeAttr("name");
			$("#username").attr("onblur","check()");		
		}else if(option == "view"){
			$(form).find("input").attr("readonly","true");
			$(form).find("textarea").attr("readonly","true");
			$("#form-title").html("用户信息");
			$("#div_psw").hide();
			$("#div_cpsw").hide();
			$('#savebtn').hide();
			$("#detail").show();
			$("#div_tryCount").show();
			$("#div_lastTime").show();
			$("#div_lockDate").show();
			$("#lastTime").attr("name","lastTime");
			$("#lockDate").attr("name","lockDate");
			$("#username").removeAttr("onblur");
		}
	}	
	//删除注册用户信息
	function deleteUser(id){
		bootbox.confirm("是否 删除此用户？",function(result){
			if(result){		
				$.post(contextpath+"/system/webuser/deleteUser.do",{"id":id},function(json){
					if(json.status==0){
						bootbox.alert("删除注册用户信息成功！");
					}else{
					    bootbox.alert("删除注册用户信息失败！");
					}
//				Util.modal("#user-form",'toggle');
					Util.reloadTable("#userTable");
				});
			}	
		});
	}


//添加密码验证新
function	validatePassword(type){
	let a = new RegExp('^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_!@#$%^&*`~()-+=]+$)(?![a-z0-9]+$)(?![a-z\W_!@#$%^&*`~()-+=]+$)(?![0-9\W_!@#$%^&*`~()-+=]+$)[a-zA-Z0-9\W_!@#$%^&*`~()-+=]{8,30}$');
	if(type === "save"){
		a.test($("#password").val())? $("#warningSP").hide(): $("#warningSP").show();
	}else if(type === "update"&&$("#id-disable-check").is(':checked')){
		a.test($("#modifypsw").val())? $("#warningUP").hide(): $("#warningUP").show();
	}
}
	
	//修改注册用户信息
	function updateUser(){
	   if($('#updateForm').valid()&&$("#warningUP").css('display')=="none"){
//		   if($('#upswTip').css('display')=="none"&&$('#unameTip').css('display')=="none"&&$('#uphoneTip').css('display')=="none"){
				bootbox.confirm("是否 确认修改用户信息？",function(result){
					if(result){
					$("#webuser-form").loadmask();
					var data = Util.getFormData("#updateForm");
					$.post(contextpath+"/system/webuser/updateUser.do",data,function(json){
						if(json.status==0){
							bootbox.alert("修改注册用户信息成功！");
							Util.modal("#user-form",'toggle');
							Util.reloadTable("#userTable");
						}else{
						    bootbox.alert("修改注册用户信息失败！");
						}
						$("#webuser-form").unloadmask();
					});
					}
				});
//	   }
	   }
	} 
    function openSave(){
    	initForm("#saveForm","save");
    	Util.modal("#model-form",'show');
    }
    
    //保存用户信息
	function saveUser(){
    	if($('#saveForm').valid()){
    		if($('#password').val()==$('#cpsw').val()&&$('#nameTip').css('display')=="none"&&$('#phoneTip').css('display')=="none"&&$("#warningSP").css('display')=="none"){
					bootbox.confirm("是否 保存用户信息？",function(result){
						if(result){
							
							var data = Util.getFormData("#saveForm");
			     		$.post(contextpath+"/system/webuser/addUser.do",data,function(json){
			//				var obj = eval("("+json+")");
			     			if(json.status==0){
								bootbox.alert("新增注册用户信息成功！");
								Util.modal("#model-form",'toggle');
								Util.reloadTable("#userTable");
							}else{
							    bootbox.alert("新增注册用户信息失败！");
							}		
						});
						}
					});
		}	
    	}
	}
	//修改获取用户信息
	function getUser(id){
		initForm("#updateForm","update");
		    Util.modal("#user-form",'show');
		    $("#webuser-form").loadmask();
		    $("#username2").attr("readonly","readonly");
			$.post(contextpath+"/system/webuser/getUser.do",{"id":id},function(json){
				console.log(json);
				$("#user-form").fill(json);
				$("#modifypsw").val("");
				$("#webuser-form").unloadmask();
			});
	}
	
	//详细
	function view(id){	
		initForm("#saveForm","view");
		Util.modal("#model-form",'show');
		$("#webuser-info").loadmask();
		$.post(contextpath+"/system/webuser/getUser.do",{"id":id},function(json){
			console.log(json);
			if(json.lastTime!=null)
				json.lastTime=new Date(json.lastTime).Format("yyyy-MM-dd hh:mm:ss");
			else
				json.lastTime="";
			if(json.lockDate!=null)
				json.lockDate=new Date(json.lockDate).Format("yyyy-MM-dd hh:mm:ss");
			else
				json.lockDate="";
			$("#model-form").fill(json);
			$("#modifypsw").val(" ");
			$("#webuser-info").unloadmask();
		});	
	}
//用户名注册验证
	function check(){
		var id=$('#id').val();
		 var name=$('#username').val();
		        $.post(contextpath+"/system/webuser/valide.do",{"id":id,"name":name},function(json){
		        	if(!json.status)
		        		$('#nameTip').show();
		        	else
		        		$('#nameTip').hide();	
		        });
	}		
//修改用户信息用户名验证
	function ucheck(){
		var id=$('#id2').val();
		var name=$('#username2').val();
		  $.post(contextpath+"/system/user/valide.do",{"id":id,"name":name},function(json){
	      	if(!json.status)
	      		$('#unameTip').show();
	    	else
	    		$('#unameTip').hide();	
	      });
	}
//添加注册用户时检查密码是否一致
	function pscheck(){
		if($('#password').val()!=$('#cpsw').val())
			$('#pswTip').show();
		else
			$('#pswTip').hide();	
	}
//修改注册用户时检查密码是否一致
	function mpscheck(){
		if($('#modifypsw').val()!=$('#modifypsw2').val())
			$('#"upswTip"').show();
		else
			$('#upswTip').hide();	
	}
	
//注册用户手机号码验证
	 function telephone(obj)
	    {
	        var a=/^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$|(^((\(\d{3}\))|(\d{3}\-))?(1[358]\d{9})$)/;
	        var t1=$('#phone').val();
	        if(!a.test(t1))
	        {
	        	$('#phoneTip').show();
	        }else{
	        	$('#phoneTip').hide();
	        }     
	    }
	 
//修改用户手机号码验证
	 function utelephone(obj)
	    {
	        var a=/^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$|(^((\(\d{3}\))|(\d{3}\-))?(1[358]\d{9})$)/;
	        var t1=$('#phone2').val();
	        if(!a.test(t1))
	        {
	        	$('#uphoneTip').show();
	        }else{
	        	$('#uphoneTip').hide();
	        }     
	    }
//锁定解锁用户
	function lock(id,lock){
		var info;
		var note,msg;
		if(lock=='0'){
			info="是否停用该用户帐号？";
			note="停用用户帐号失败！";
			msg = "帐号停用成功";
		}else{
			info="是否启用该用户帐号？"
			note="启用用户帐号失败！";
			msg = "帐号启用成功";
		}
		bootbox.confirm(info,function(result){
			if(result){
				$.post(contextpath+"/system/webuser/lock.do",{"id":id,"lock":lock},function(json){
			     	if(json.status==1){ 
		     			bootbox.alert(msg);
		     		}	
			     	else if(json.status==0)
			     		bootbox.alert("他人已执行此操作，为您刷新列表!");
			     	else
			     		bootbox.alert("操作失败！");
			     	Util.reloadTable("#userTable");
			     });					
			}
		});
}	
	

	