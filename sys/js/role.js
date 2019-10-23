var ztree;
$(function(){
	
	var table = Util.dataTable({
		"dom": '#roleTable',
		"width": 1200,
		"url" : contextpath+"/system/role/getDataTables.do",
		"aoColumns": [  	                
						{"sTitle": "角色名称", "mData": "rolename" ,"sName":"rolename", "width":"300px","bSortable": false},
//			            {"sTitle": "角色类型", "mData": "roleType" ,"sName":"roleType", "bSortable": false},
			            {"sTitle": "备注", "mData": "remark" ,"sName":"remark", "bSortable": false},
			            {"title": "操作","data": "id","width":"200px","render":function(data, type, row){
			            	return "<a href=\"javascript:view('"+data+"')\"  role=\"button\" class=\"btn btn-minier btn-success\">查看</a>" +
			            			"<a href=\"javascript:modify('"+data+"')\" role=\"button\" class=\"btn btn-minier btn-primary\">修改</a>" +
			            			"<a href=\"javascript:dele('"+data+"')\"  role=\"button\" class=\"btn btn-minier btn-danger\">删除</a>"+
			                     	"<a href=\"javascript:configuration('"+data+"')\"  role=\"button\" class=\"btn btn-minier btn-warning\">配置</a>";
			            }}
			        ]
    });
	
	
	Util.validate('#saveForm',{
		ignore: "",
		rules: {
			rolename: {
				required: true
			},
		
		},

		messages: {
			rolename: "请输入角色名称！",
		}
	});
	
	$('#widget-tree').ace_scroll({
		size: 300
    });
});



function openSave(){
	initForm("save");
	Util.modal("#model-form",'toggle');
}

function modify(id){
	initForm("update");
	Util.modal("#model-form",'toggle');
	$("#model-form .modal-body").loadmask();
	$.post(contextpath+"/system/role/getRoleById.do",{id:id},function(json){
		$("#model-form").fill(json);
		
		$("#model-form").unloadmask();
	});
}


function initForm(option){
	$('#saveForm').resetForm();
	$('#saveForm').find("input").each(function(i,item){
		if($(item).hasClass("tooltip-error"))
			$(item).tooltip('destroy');
	});
	$('#saveForm').find("input").removeAttr("readonly").closest('.form-group').removeClass('has-error');
	$('#saveForm').find("textarea").removeAttr("readonly").closest('.form-group').removeClass('has-error');
	if(option == "save"){
		$("#form-title").html("添加角色");
		$('#updatebtn').hide();
		$('#savebtn').show();
	}else if(option == "update"){
		$("#form-title").html("修改角色");
		$('#updatebtn').show();
		$('#savebtn').hide();
	}else{
		$('#saveForm').find("input").attr("readonly","true");
		$('#saveForm').find("textarea").attr("readonly","true");
		$("#form-title").html("角色属性");
		$('#updatebtn').hide();
		$('#savebtn').hide();
	}

}
/*function view(id){
	Util.modal("#model-form",'toggle');
	$("#model-form .modal-body").loadmask();
	$.post(contextpath+"/system/resouce/getRoleById.do",{id:id},function(json){
		$("#model-form").fill(json);		
		$("#model-form").unloadmask();
	});
	
}
*/
function view(id){
	Util.modal("#model-form",'toggle');
	$("#model-form .modal-body").loadmask();
	$.post(contextpath+"/system/role/getRoleById.do",{id:id},function(json){
		$("#model-form").fill(json);		
		document.getElementsByTagName("h4")[0].innerHTML = "角色属性";
		$('#updatebtn').hide();
		$('#savebtn').hide();
		$("#model-form").unloadmask();
	});
}

function dele(id){
	bootbox.confirm("是否删除该角色？",function(result){
		if(result){
			$.post(contextpath+"/system/role/deleteRole.do",{id:id},function(json){
				if(json.status){
					Util.reloadTable("#roleTable");
					bootbox.alert("删除成功！");
				}else{
					bootbox.alert("删除失败！");
				}
			});
			}
		});	
}




function saveRole(){
	
	if($('#saveForm').valid()){
		
		
		bootbox.confirm("是否 保存该角色信息？",function(result){
			if(result){
				$("#savebtn").attr("disabled","true");
				var data = Util.getFormData("#saveForm");
				$.post(contextpath+"/system/role/add.do",data,function(json){
					if(json.status){
						bootbox.alert("保存成功");
					}else{
						bootbox.alert("保存失败");
					}
//					$("#savebtn").reomveAttr("disabled");
					Util.reloadTable("#roleTable");
					Util.modal("#model-form",'toggle');
				});
				}
			});
	
}
	
}
function updateRole(){
	if($('#saveForm').valid()){
		
		
		bootbox.confirm("是否 保存该角色信息？",function(result){
			if(result){
				$("#model-form .modal-body").loadmask();
				var data = Util.getFormData("#saveForm");
				$.post(contextpath+"/system/role/updateRole.do",data,function(json){
					if(json.status){
						bootbox.alert("修改成功");
					}else{
						bootbox.alert("修改失败");
					}
					Util.modal("#model-form",'toggle');
					Util.reloadTable("#roleTable");
					$("#model-form").unloadmask();
				});
				}
			});
	
	
	}	
}



function configuration(roleId){
	Util.modal("#configuration",'toggle');	
	$("#configuration .modal-body").loadmask();
	$('#roleid').val(roleId);
	InitTree(roleId);	
	
}

function saveConfiguration(){
	bootbox.confirm("是否 保存该角色配置信息？",function(result){
		if(result){var id=$('#roleid').val();
		var nodes=ztree.getCheckedNodes(true);
		var a = "";
		$.each(nodes, function(){
			
//			if($(this).attr("isParent") == false){
				
		    	if(a!=""){
		    		a = a + "," +  $(this).attr("id");
		    	}else{
		    		a = $(this).attr("id");
		    	}
			    			
//			}	
			    
		});   
		$.post(contextpath+"/system/resouce/resourceRole.do",{"ress":a,"roleId":id},function(json){
			if(json.status){
				bootbox.alert("保存成功");
			}else{
				bootbox.alert("保存失败");
			}
			Util.modal("#configuration",'toggle');	
		});
		}
		});
		
}

function InitTree(roleId){
	$.get(contextpath+"/system/resouce/getTree.do?roleId="+roleId,function(json){
		ztree = $.fn.zTree.init($("#resourceTree"), {
			treeId:"objTree",
			check: {
				enable: true,
			},
			callback: {
				onClick: function(event, treeId, treeNode){
					if(treeNode.isParent){
						var tableSettings = table.fnSettings();
						var nodes = ztree.getSelectedNodes();
						if(nodes[0] && nodes[0].id)
							tableSettings.ajax.data.params = "parentResource.id="+nodes[0].id;
						console.log(tableSettings);
						table.fnDraw( false );
					};
				}
			}
		},json);
		$("#configuration").unloadmask();
	});
}
