var table;
$(function(){
		table = Util.dataTable({
			"dom": '#userTable',
			"width": 1200,
			"url" : contextpath+"/system/user/getTableList.do",
			"aoColumns": [
							{"title": "用户名", "data": "username" ,"sWidth":"80px"},
				            {"title": "真实姓名", "data": "realname" ,"sWidth":"100px"},
//				            { "title": "状态","data": "lock" ,"sWidth":"50px"},
//				            { "title": "登陆错误次数","data": "tryCount" ,"sWidth":"50px"},
				            {"title": "最后登录时间", "data": "lastTime" , "sWidth":"160px","render":function(data){
				            	if(data)
				            		return new Date(data).Format();
				            	else
				            		return "";
				            }},
//				            { "title": "锁定时间","data": "lockDate" ,"sWidth":"160px"},
				            {"title":"操作","data":"id","sWidth":"175px","render":function(data){
				            	return "<a href=\"javascript:void(0)\"  role=\"button\"></a>" +
		            			"<a href=\"javascript:getUser('"+data+"')\" role=\"button\" class=\"btn btn-minier btn-primary\">修改</a>" +
		            			"<a href=\"javascript:deleteUser('"+data+"')\"  role=\"button\" class=\"btn btn-minier btn-danger\">删除</a>"+
				            	"<a href=\"javascript:configuration('"+data+"')\"  role=\"button\" class=\"btn btn-minier btn-warning\">配置</a>";
				            }}
				        ]
	    });

		$("#id-disable-check").click(function(){
			if(this.checked){
				$("#modifypsw").removeAttr("disabled");
			}else{
				$("#modifypsw").attr("disabled","true");
        $('#updatePwWarning').hide();
			}
		})

		Util.validate('#saveForm',{
			rules: {
				username: {
					required: true
				},
				password: {
					required: true
				},
				realname: {
					required: true
				},
			},
			messages: {
				username: "请输入用户名！",
				password:"请输入密码！",
				realname: "请输入真实姓名！",
			}
		});

		Util.validate('#updateForm',{
			rules: {
				username: {
					required: true
				},
				realname: {
					required: true
				},
			},
			messages: {
				username: "请输入用户名！",

				realname: "请输入真实姓名！",
			}
		});
//		$("#searchBtn").click(function(){
//			var param = $("#searchform").serialize();
//			var tableSettings = table.fnSettings();
//			tableSettings.ajax.data.params = param;
//			table.fnDraw( false );
//		});
	});

//验证密码
function passwordCheck(type){
	// var a=/^(?=.*?[a-zA-Z])(?=.*?[0-6])[!"#$%&'()*+,\-./:;<=>?@\[\\\]^_`{|}~A-Za-z0-9]{8,18}$/;
	let a = new RegExp('^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_!@#$%^&*`~()-+=]+$)(?![a-z0-9]+$)(?![a-z\W_!@#$%^&*`~()-+=]+$)(?![0-9\W_!@#$%^&*`~()-+=]+$)[a-zA-Z0-9\W_!@#$%^&*`~()-+=]{8,30}$');
	let t1;
	if(type==="add"){
		t1=$('#password').val();
		if(!a.test(t1)) {
			$("#addPwWarning").show();
		}else{
			$("#addPwWarning").hide();
		}
	}else if(type==="update") {
		t1=$('#modifypsw').val();
		if(!a.test(t1)) {
			$("#updatePwWarning").show();
		}else{
			$("#updatePwWarning").hide();
		}
	}
	return false;
}

/**
 * 查询功能
 */
	function query(){
		var queryname = "searchinfo="+$("#queryName").val();
		var tableSettings = table.fnSettings();
		tableSettings.ajax.data.params = queryname;
		table.fnDraw( false );
	}

	/**
	 * enter按键查询功能
	 * @param id
	 */
	$("#buttonquery").ready(function(even){
		$(this).keydown(function(even){
			if(even.which=="13"){
				var queryname = "searchinfo="+$("#queryName").val();
				var tableSettings = table.fnSettings();
				tableSettings.ajax.data.params = queryname;
				table.fnDraw( false );
			}
		})
	});



	function deleteUser(id){
		bootbox.confirm("是否 删除此用户？",function(result){
			if(result){
				$.post(contextpath+"/system/user/deleteUser.do",{"id":id},function(json){
					bootbox.alert(json.message);
//				Util.modal("#user-form",'toggle');
					Util.reloadTable("#userTable");
				});
			}
		});
	}

	function updateUser(){
    if($("#id-disable-check")[0].checked && $("#modifypsw").val()===""){
      $('#updatePwWarning').show();
    }
		let un = $('#updateUnWarning').css('display')==="none";
		let pw = $('#updatePwWarning').css('display')==="none";

		if($('#updateForm').valid() && un && pw){
		bootbox.confirm("是否 确认修改用户信息？",function(result){
			if(result){
			$("#updateForm").loadmask();
			var data = Util.getFormData("#updateForm");
			$.post(contextpath+"/system/user/updateUser.do",data,function(json){
				bootbox.alert(json.message);
				Util.modal("#user-form",'toggle');
				Util.reloadTable("#userTable");
				$("#updateForm").unloadmask();
			});
			}
		});
	   }
	}

	function saveUser(){
		let un = $('#addUnWarning').css('display')==="none";
		let pw = $('#addPwWarning').css('display')==="none";

		if($('#saveForm').valid() && un && pw){
		bootbox.confirm("是否保存用户信息？",function(result){
			if(result){
				var data = Util.getFormData("#saveForm");
			$.post(contextpath+"/system/user/addUser.do",data,function(json){
//				var obj = eval("("+json+")");
				bootbox.alert(json.message);
				Util.modal("#model-form",'toggle');
				Util.reloadTable("#userTable");
			});
			}
		});
		}
	}

	function getUser(id){
			$(".updateWarning").hide();
		   Util.modal("#user-form",'show');
		    $("#updateForm").loadmask();
			$.post(contextpath+"/system/user/getUser.do",{"id":id},function(json){
				$("#user-form").fill(json);
				$("#modifypsw").val("");
				$("#updateForm").unloadmask();
			});
	}

	//用户名注册验证
	function check(){
		var id=$('#id').val();
		 var name=$('#username').val();
		        $.post(contextpath+"/system/user/valide.do",{"id":id,"name":name},function(json){
		        	if(!json.status)
		        		$('#addUnWarning').show();
		        	else
		        		$('#addUnWarning').hide();
		        });
	}
	//修改用户信息用户名验证
	function ucheck(){
		var id=$('#id2').val();
		var name=$('#username2').val();
		  $.post(contextpath+"/system/user/valide.do",{"id":id,"name":name},function(json){
	      	if(!json.status)
	      		$('#updateUnWarning').show();
	    	else
	    		$('#updateUnWarning').hide();
	      });
	}

	function configuration(userId){
		$('#userId').val(userId);
		Util.modal("#distribution",'toggle');
		$("#simple-table").loadmask();
		$.post(contextpath+"/system/role/getAllRole.do",{"userId":userId},function(json){
			var html="";
			if(json){
				for(i=0;i<json.length;i++){
					html+="<tr><td class='center'><label class='pos-rel'><input type='checkbox' class='ace' value='"+json[i].id+"' "+json[i].checked+"/><span class='lbl'></span></label></td>"
						+"<td>"+json[i].rolename+"</td><td>"+json[i].remark+"</td></tr>";
				}
			   }else{
					html="<tr><td colspan=’3‘>没有数据</td></tr>";
				}
		       document.getElementById("roleResource").innerHTML=html;
		       $("#simple-table").unloadmask();
		});
	}

	function saveConfiguration(){
				bootbox.confirm("是否 保存配置信息？",function(result){
			if(result){
				 var a="";
		       var userId=$('#userId').val();
				$("input[type='checkbox']:checked").each(function () {
					if(a!=""){
			    		a = a + "," +  this.value;
			    	}else{
			    		a = this.value;
			    	}
				});
				$.post(contextpath+"/system/role/userRole.do",{"ress":a,"userId":userId},function(json){
					if(json.status){
						bootbox.alert("保存成功");
					}else{
						bootbox.alert("保存失败");
					}
					Util.modal("#distribution",'toggle');
				});
			}
		});
	}
	
	