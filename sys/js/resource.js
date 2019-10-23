var table,ztree;
$(function(){
	
	table = Util.dataTable({
		"dom": '#resourceTable',
		"width": 1200,
		"url" : contextpath+"/system/resouce/getTableList.do",
		params : 'parentResource.id=1000',
		"aoColumns": [  	                
						/*{"title": "编码", "data": "code" ,"width":"80px","render":function(data, type, row){
							if(data!=null||data!=undefined){
							return data.substring(data.length-3);
							}else{
								return "";
							}
						}},*/
			            {"title": "名称", "data": "name" ,"name":"name","width":"180px"},
			            {"title": "请求", "data": "url" ,"name":"url"},
			            {"title": "排序","data": "sort" ,"name":"sort","width":"60px"},
			            {"title": "资源图例","data": "ico" ,"name":"ico","width":"160px"},
			            {"title": "操作","data": "id","width":"175px","render":function(data, type, row){
			            	return "<a href=\"javascript:view('"+data+"')\"  role=\"button\" class=\"btn btn-minier btn-success\">查看</a>" +
			            			"<a href=\"javascript:modify('"+data+"')\" role=\"button\" class=\"btn btn-minier btn-primary\">修改</a>" +
			            			"<a href=\"javascript:dele('"+data+"')\"  role=\"button\" class=\"btn btn-minier btn-danger\">删除</a>";
			            }}
			        ]
    });
	
	/*
	 * 表单验证配置
	 */
	Util.validate('#saveForm',{
		ignore: "",
		rules: {
			resourceCode: {
				required: true
			},
			name: {
				required: true
			},
			url: {
				required: true
			},
			sort: {
				required: true
			},
		},

		messages: {
			resourceCode: "请输入资源编码！",
			name:"请输入资源名称！",
			url: "请输入请求地址！",
			sort:"请选择排序编号！"
		}
	});
	
	/*
	 * 初始化资源树
	 */
	InitTree();

});

/**
 * 初始化表单  --表单显示前需要完成的事情
 * @param option option 为 string 类型，当 option 等于 save 时为添加表单，等于 update 时为修改表单，否则为预览表单
 */
function initForm(option){
	$('#saveForm').resetForm();
	$('#saveForm').find("input").each(function(i,item){
		if($(item).hasClass("tooltip-error"))
			$(item).tooltip('destroy');
	});
	$('#saveForm').find("input").removeAttr("readonly").closest('.form-group').removeClass('has-error');
	$('#saveForm').find("textarea").removeAttr("readonly").closest('.form-group').removeClass('has-error');
	if(option == "save"){
		$("#form-title").html("添加资源");
		$('#updatebtn').hide();
		$('#savebtn').show();
	}else if(option == "update"){
		$("#form-title").html("修改资源");
		$('#updatebtn').show();
		$('#savebtn').hide();
	}else{
		$('#saveForm').find("input").attr("readonly","true");
		$('#saveForm').find("textarea").attr("readonly","true");
		$("#form-title").html("资源属性");
		$('#updatebtn').hide();
		$('#savebtn').hide();
	}

}

function save(){
	var nodes = ztree.getSelectedNodes();
	if(!nodes[0]){
		Util.Alert("添加资源时，请先选择父节点");
		return;
	}
	initForm("save");
	Util.modal("#model-form",'show');
	$("#parentResource").val(nodes[0].id);
}

function modify(id){
	initForm("update");
	Util.modal("#model-form",'show');
	$("#model-form .modal-body").loadmask();
	$.post(contextpath+"/system/resouce/getResourceById.do",{id:id},function(json){
		$("#model-form").fill(json);
		$('#sort').val(json.sort);
		$('#resourceCode').val(json.code.substring(json.code.length - 3));
		$("#model-form").unloadmask();
	});
}

function view(id){
	initForm("");
	Util.modal("#model-form",'show');
	$("#model-form .modal-body").loadmask();
	$.post(contextpath+"/system/resouce/getResourceById.do",{id:id},function(json){
		$("#model-form").fill(json);
		$('#sort').val(json.sort);
		$('#resourceCode').val(json.code.substring(json.code.length - 3));
		$("#model-form").unloadmask();
	});
}

function saveResource(){
	var code= ztree.getSelectedNodes()[0].code;	
	$('#code').val(code+$('#resourceCode').val());
	var data = Util.getFormData("#saveForm");
	if($('#saveForm').valid())
		$("#model-form .modal-dialog").loadopacity();
		$.post(contextpath+"/system/resouce/addResource.do",data,function(json){
			if(json.statu){
				bootbox.alert("保存成功");
				InitTree();
			}else{
				bootbox.alert(json.message);
			}
			table.fnDraw( false );
			Util.modal("#model-form",'toggle');
			$("#model-form").unloadopacity();
			resetTree();
		});
}

function updateResource(){
	var code= $('#code').val();
	$('#code').val(code.substring(0,code.length -3)+$('#resourceCode').val());
	var data = Util.getFormData("#saveForm");
	if($('#saveForm').valid())
		$("#model-form .modal-dialog").loadopacity();
		$.post(contextpath+"/system/resouce/updateResource.do",data,function(json){
			if(json.status){
				bootbox.alert("修改成功");
			}else{
				bootbox.alert("修改失败");
			}
			Util.modal("#model-form",'toggle');
			$("#model-form").unloadopacity();
			table.fnDraw( false );
			resetTree();
		});
}

function dele(id){
	bootbox.confirm("是否删除该资源？", function(result) {
		if(result) {
			$("#resourceTable").loadopacity();
			$.post(contextpath+"/system/resouce/deleteResource.do",{id:id},function(json){
				$("#resourceTable").unloadopacity();
				if(json.status){
					bootbox.alert("资源删除成功！");
					resetTree();
					table.fnDraw( false );
				}else{
					bootbox.alert("资源删除失败！");
				}
				
			});
		}
	});
}

function InitTree(){
	var currentNodeId = "";
	$.get(contextpath+"/system/resouce/getResourceTree.do",function(json){
		ztree = $.fn.zTree.init($("#resourceTree"), {
			treeId:"objTree",
			async: {
				enable: true,
				type: "get",
				contentType: "application/json",
				url: contextpath+"/system/resouce/getResourceList.do",
				autoParam: ["id"]
			},
			/*view: {
				showIcon: false
			},*/
			callback: {
				onClick: function(event, treeId, treeNode){
					if(treeNode.isParent){
						var nodes = ztree.getSelectedNodes();
						if(nodes[0] && nodes[0].id){
							if(currentNodeId == nodes[0].id) return;
							currentNodeId = nodes[0].id;
							var tableSettings = table.fnSettings();
//							console.log(tableSettings);
							tableSettings.ajax.data.params = "parentResource.id="+nodes[0].id;
							table.fnDraw( false );
						}
					};
				}
			}
		},json);
	});
}

/**
 * 刷新资源树
 */
function resetTree(){
	var nodes = ztree.getSelectedNodes();
	if (nodes[0])
		ztree.reAsyncChildNodes(nodes[0], "refresh");
	else{
		nodes = ztree.getNodes();
		if (nodes[0])
			ztree.reAsyncChildNodes(nodes[0], "refresh");
	}
}
