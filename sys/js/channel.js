var table,ztree;
$(function(){
	
	//执行初始化方法
	Init();
	
	//初始化树
	InitTree();
	
	/**
	 * 初始化表格
	 */
	table = Util.dataTable({
		"dom": '#newscolumnTable',
		"url" : contextpath+"/news/newscolumn/getTableList.do",
		"params" : 'parentid=1',
		"aoColumns": [{"title": "栏目名称", "data": "name" ,"name":"name"},
					  {"title": "访问路径", "data": "path" ,"name":"path"},
		              {"title": "栏目类型", "data": "columntype.name" ,"name":"columntype"},
		              {"title": "栏目模板", "data": "template" ,"name":"template"},
		              {"title": "启用状态", "data": "state" ,"name":"state","render":function(data){
		            	  if(data == 0){
		            		  return "停用";
		            	  }else if(data == 1){
		            		  return "启用";
		            	  }else{
		            		  return "";
		            	  }
		              }},
		              {"title": "操作","data": "id","width":"195px","render":function(data, type, row){
		            	  var opt = "";
		            	  if(row.state == 1){
		            		  opt += "<a href=\"javascript:opt('"+data+"','"+row.state+"')\" role=\"button\" class=\"btn btn-minier btn-danger\">停用</a>";
		            	  }else{
		            		  opt += "<a href=\"javascript:opt('"+data+"','"+row.state+"')\" role=\"button\" class=\"btn btn-minier btn-success\">启用</a>";
		            	  }
		            	  opt += "<a href=\"javascript:view('"+data+"')\" role=\"button\" class=\"btn btn-minier btn-info\">查看</a>" +
		            	 		"<a href=\"javascript:modify('"+data+"')\" role=\"button\" class=\"btn btn-minier btn-primary\">修改</a>" +
		            			"<a href=\"javascript:remove('"+data+"')\"  role=\"button\" class=\"btn btn-minier btn-danger\">删除</a>";
		            	  return opt;
		              }}
			         ]
    });
	
	/*
	 * 表单验证配置
	 */
	Util.validate('#saveForm',{
		ignore: "",
		rules: {
			name: {
				required: true
			},
			"columntype.id": {
				required: true
			},
			sort: {
				required: true,
				digits:true
			},
			url:{
				required: true 
			}
		},
		messages: {
			name:"请输入栏目名称",
			"columntype.id":"请选择栏目类型",
			sort:"必填项且为数字!",
			url: "请输入外部链接URL",
		}
	});
	
	
});

function Init(){
	
	$("#url").closest("div.form-group").hide();
	
	$.post(contextpath+"/news/newscolumn/getSelectJson.do",function(json){
		$("#type").empty();
		$("#type").removeAttr("disabled");
		$("#type").append("<option value=''>请选择</option>");
		$(json.tree).each(function(){
			$("#type").append("<option value='"+this.id+"'>"+this.name+"</option>");
		})
		$(".templates").empty();
		$(json.templates).each(function(s,i){
			$(".templates").append("<option value='"+i+"'>"+i+"</option>");
		})
		
	})
	
	$("#type").change(function(){
		if(this.value == 2 || this.value == 4){
			$("#url").closest("div.form-group").show();
		}else{
			$("#url").closest("div.form-group").hide();
		}
	});
}

/**
 * 初始化表单  --表单显示前需要完成的事情
 * @param option option 为 string 类型，当 option 等于 save 时为添加表单，等于 update 时为修改表单，否则为预览表单
 */
function initForm(option){
	//重置表单并清除提示效果
	$('#saveForm').resetForm();
	$('#saveForm').find("input").each(function(i,item){
		if($(item).hasClass("tooltip-error"))
			$(item).tooltip('destroy');
	});
	$('#saveForm').find("input").removeAttr("readonly").closest('.form-group').removeClass('has-error');
	$('#saveForm').find("textarea").removeAttr("readonly").closest('.form-group').removeClass('has-error');
	if(option == "save"){
		$("#form-title").html("添加栏目类型");
		$('#updatebtn').hide();
		$('#savebtn').show();
	}else if(option == "update"){
		$("#form-title").html("修改栏目类型");
		$('#updatebtn').show();
		$('#savebtn').hide();
	}else{
		$('#saveForm').find("input").attr("readonly","true");
		$('#saveForm').find("textarea").attr("readonly","true");
		$("#form-title").html("栏目类型信息");
		$('#updatebtn').hide();
		$('#savebtn').hide();
	}

}

/**
 * 弹出新增新闻栏目框
 */
function add(){
	initForm("save");
	Util.modal("#model-form",'show');
}

function opt(id,state){
	if(state == 1)
		state = 0;
	else
		state = 1;
	$.post(contextpath+"/news/newscolumn/updateNewsColumnState.do",{id:id,state:state},function(json){
		if(json.flag){
			//刷新表格
			table.fnDraw( false );
		}else{
			bootbox.alert(json.msg);
		}
	});
}

/**
 * 弹出新闻栏目详细框
 * @param id 新闻栏目唯一标识
 */
function view(id){
	initForm();
	Util.modal("#model-form",'show');
	fillValue(id);
}

/**
 * 弹出新闻栏目修改框
 * @param id 新闻栏目唯一标识
 */
function modify(id){
	initForm("update");
	Util.modal("#model-form",'show');
	fillValue(id);
}

/**
 * 获取新闻栏目新并填充到弹出框
 * @param id 新闻栏目唯一标识
 */
function fillValue(id){
	Util.modal("#model-form",'show');
	$("#model-form .modal-body").loadmask();
	$.post(contextpath+"/news/newscolumn/getNewsColumn.do",{id:id},function(json){
		$("#model-form").fill(json);
		$("#model-form").unloadmask();
	});
}

/**
 * 保存新闻栏目
 */
function save(){
	var parentId;
	var nodes = ztree.getSelectedNodes();
	if(nodes[0] && nodes[0].id){
		$("#parentid").val(nodes[0].id);
	}
	var data = Util.getFormData("#saveForm");
	if($('#saveForm').valid()){
		$("#model-form .modal-dialog").loadopacity();
		$.post(contextpath+"/news/newscolumn/saveNewsColumn.do",data,function(json){
			if(json.flag){
				bootbox.alert("保存成功");
				table.fnDraw( false );
				resetTree();
				Util.modal("#model-form",'toggle');
			}else{
				bootbox.alert(json.msg);
			}
			$("#model-form").unloadopacity();
		});
	}
}

/**
 * 修改新闻栏目
 */
function update(){
	
	//序列化表单内容
	var data = Util.getFormData("#saveForm");
	//数据有效性校验
	if($('#saveForm').valid()){
		//遮罩弹出框显示主体，显示加载中
		$("#model-form .modal-dialog").loadopacity();
		$.post(contextpath+"/news/newscolumn/updateNewsColumn.do",data,function(json){
			if(json.flag){
				bootbox.alert("保存成功");
				//刷新表格
				table.fnDraw( false );
				//刷新栏目树
				resetTree();
				Util.modal("#model-form",'toggle');
			}else{
				bootbox.alert(json.msg);
			}
			//取消遮罩，显示弹出框主体内容
			$("#model-form").unloadopacity();
		});
	}
}

function remove(id){
	bootbox.confirm("是否删除此信息吗？", function(result) {
		if(result) {
			$("#newscolumnTable").loadopacity();
			$.post(contextpath+"/news/newscolumn/deleteNewsColumn.do",{id:id},function(json){
				$("#newscolumnTable").unloadopacity();
				if(json.flag){
					bootbox.alert("删除成功！");
					resetTree();
					table.fnDraw( false );
				}else{
					bootbox.alert(json.msg);
				}
				
			});
		}
	});
}

/**
 * 初始化新闻栏目树
 */
function InitTree(){
	var currentNodeId = "";
	$.post(contextpath+"/news/newscolumn/getNewsColumnTree.do",{id:1},function(json){
		ztree = $.fn.zTree.init($("#newscolumnTree"), {
			treeId:"objTree",
			async: {
				enable: true,
				type: "get",
				contentType: "application/json",
				url: contextpath+"/news/newscolumn/getNodeList.do",
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
							tableSettings.ajax.data.params = "parentid="+nodes[0].id;
							table.fnDraw( false );
						}
					};
				}
			}
		},json);
	});
}

/**
 * 刷新栏目树
 */
function resetTree(){
	//获取选中的树节点
	var nodes = ztree.getSelectedNodes();
	//如果选中的树节点，异步刷新选中节点的父节点
	if (nodes[0]){
		var node = nodes[0];
		ztree.reAsyncChildNodes(node.getParentNode(), "refresh");
		node = ztree.getNodeByParam("id", node.id, null);
		//如果当前节点是父节点，则刷新并展开当前节点的子节点
		if(node && node.isParent){
			ztree.reAsyncChildNodes(node, "refresh");
			ztree.expandNode(node, true, false, true);
		}
	}else{//如果没有选中节点，则刷新整棵树
		nodes = ztree.getNodes();
		if (nodes[0])
			ztree.reAsyncChildNodes(nodes[0], "refresh");
		else
			ztree.refresh();
	}
}
