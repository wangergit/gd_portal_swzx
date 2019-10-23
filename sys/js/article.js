var table,ztree,save,update,editor,tags;
$(function(){
	document.onkeydown = function () {
        if (window.event && window.event.keyCode == 13) {
            window.event.returnValue = false;
        }
    }
	//执行初始化方法
	Init();
	
	//初始化树
	InitTree();
	
	/**
	 * 初始化表格
	 */
	table = Util.dataTable({
		"dom": '#newstable',
		"url" : contextpath+"/news/newsmanage/getTableList.do",
		"aoColumns": [{"title": "新闻标题", "data": "1" ,"name":"title"},
		              {"title": "作者", "data": "3" ,"name":"auther"},
		              {"title": "新闻栏目", "data": "5" ,"name":"newsColumn"},
		              {"title": "状态", "data": "6" ,"name":"state"},
		              {"title": "创建时间", "data": "4" ,"name":"publishtime","render":function(data){
		            	  if(data){
		            		  return new Date(data).Format();
		            	  }else
		            		  return "";
		              }},
		              {"title": "操作","data": "0","width":"175px","render":function(data, type, row){
		            	 return "<a href=\"javascript:view('"+data+"')\" role=\"button\" class=\"btn btn-minier btn-info\">预览</a>" +
		            	 		"<a href=\"javascript:modify('"+data+"')\" role=\"button\" class=\"btn btn-minier btn-primary\">修改</a>" +
		            			"<a href=\"javascript:remove('"+data+"')\"  role=\"button\" class=\"btn btn-minier btn-danger\">删除</a>";
		              }}
			         ]
    });
	
	/*
	 * 表单验证配置
	 */
	Util.validate('#saveForm',{
		ignore: "",
		rules: {
			title: {
				required: true
			},
			author: {
				required: true
			},
			newsdate: {
				required: true
			}
		},
		messages: {
			title:"请输入标题",
			author:"请输入作者",
			newsdate:"请选择新闻时间"
		}
	});
	
	//按条件搜索查询注册用户信息
	$("#searchBtn").click(function(){
		var param = $("#searchform").serialize();
		var tableSettings = table.fnSettings();
		tableSettings.ajax.data.params = param;
		table.fnDraw( false );
	});
	$('#queryName').keydown(function(e) {
		if (e.keyCode == 13) {
			$("#searchBtn").click();
		}
	});
});

function Init(){
	//激活 datepicker
	$('.date-picker').datepicker({
		autoclose: true,
		todayHighlight: true
	})
	//show datepicker when clicking on the icon
	.next().on(ace.click_event, function(){
		$(this).prev().focus();
	});

	$('.input-daterange').datepicker({autoclose:true});
	
	KindEditor.ready(function(K) {
        var options = {
        	cssPath : contextpath+'/assets/js/editer/themes/simple/simple.css',
	        filterMode : true,
	        uploadJson : contextpath+"/news/newsmanage/fileUpload.do",
            fileManagerJson : contextpath+"/news/newsmanage/fileManager.do",
         	allowUpload : true, //允许上传图片
            allowImageUpload : true,
            allowFileManager:true, //允许对上传图片进行管理
            afterUpload: function(){this.sync();}, //图片上传后，将上传内容同步到textarea中
            afterBlur: function(){this.sync();},   ////失去焦点时，将上传内容同步到textarea中
            items:[
                   'source', '|', 'undo', 'redo', '|', 'preview', 'print', 'template', 'code', 'cut', 'copy', 'paste',
                   'plainpaste', 'wordpaste', '|', 'justifyleft', 'justifycenter', 'justifyright',
                   'justifyfull', 'insertorderedlist', 'insertunorderedlist', 'indent', 'outdent', 'subscript',
                   'superscript', 'clearhtml', 'quickformat', 'selectall', '|', 'fullscreen', '/',
                   'formatblock', 'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold',
                   'italic', 'underline', 'strikethrough', 'lineheight', 'removeformat', '|', 'image', /*'multiimage',*/
                   'flash', 'media', 'insertfile', 'table', 'hr', 'emoticons', 'baidumap', 'pagebreak',
                   'anchor', 'link', 'unlink'
           ],
           afterCreate : function() {
				var self = this;
				
				/**
				 * 保存新闻
				 */
				save = function(){
					self.sync();
					var data = Util.getFormData("#saveForm");
					
					if($('#saveForm').valid()){
						$("#model-form .modal-dialog").loadopacity();
						data.content = $('#editor_news').val();
						var tags = data.tags;
						if($.isArray(tags)){
							data.tags = tags.join(",");
						}
						console.log(data);
						$.post(contextpath+"/news/newsmanage/saveNews.do",data,function(json){
							if(json.flag){
								table.fnDraw( false );
								resetTree();
								Util.modal("#model-form",'toggle');
								bootbox.alert("保存成功");
							}else{
								bootbox.alert(json.msg);
							}
							$("#model-form").unloadopacity();
						});
					}
				}
				
				/**
				 * 修改新闻
				 */
				update = function(){

					self.sync();
					//序列化表单内容
					var data = Util.getFormData("#saveForm");
					//数据有效性校验
					if($('#saveForm').valid()){
						//遮罩弹出框显示主体，显示加载中
						$("#model-form .modal-dialog").loadopacity();
						data.content = $('#editor_news').val();
						var tags = data.tags;
						if($.isArray(tags)){
							data.tags = tags.join(",");
						}
						console.log(data);
						$.post(contextpath+"/news/newsmanage/updateNews.do",data,function(json){
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
			}
    	};
        
    	editor = K.create('#editor_news', options);
	});
	
	$.post(contextpath+"/news/newstag/getNewsTagList.do",function(json){
		var tags = json;
		$("#tags").empty();
		$(json).each(function(i,item){
			$("#tags").append("<option value='"+item.id+"'>"+item.name+"</option>");
		});
		$('#tags').multiselect({
			selectAllText: ' 选择所有',
	        selectAllValue: 'multiselect-all',
	        filterPlaceholder: '搜索',
	        filterBehavior: 'text',
	        includeFilterClearBtn: true,
	        preventInputChangeEvent: false,
	        nonSelectedText: '未选择标签',
	        nSelectedText: '个标签已选中',
	        allSelectedText: '已选择所有标签',

			enableFiltering : true,
			buttonClass : 'btn btn-white btn-primary',
			templates : {
				button : '<button type="button" class="multiselect dropdown-toggle" data-toggle="dropdown"></button>',
				ul : '<ul class="multiselect-container dropdown-menu"></ul>',
				filter : '<li class="multiselect-item filter"><div class="input-group"><span class="input-group-addon"><i class="fa fa-search"></i></span><input class="form-control multiselect-search" type="text"></div></li>',
				filterClearBtn : '<span class="input-group-btn"><button class="btn btn-default btn-white btn-grey multiselect-clear-filter" type="button"><i class="fa fa-times-circle red2"></i></button></span>',
				li : '<li><a href="javascript:void(0);"><label></label></a></li>',
				divider : '<li class="multiselect-item divider"></li>',
				liGroup : '<li class="multiselect-item group"><label class="multiselect-group"></label></li>'
			}
		});
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
		$("#form-title").html("添加新闻");
		$('#updatebtn').hide();
		$('#savebtn').show();
	}else if(option == "update"){
		$("#form-title").html("修改新闻");
		$('#updatebtn').show();
		$('#savebtn').hide();
	}else{
		$('#saveForm').find("input").attr("readonly","true");
		$('#saveForm').find("textarea").attr("readonly","true");
		$("#form-title").html("预览新闻");
		$('#updatebtn').hide();
		$('#savebtn').hide();
	}

	$("#tags").data('multiselect').clearSelection();
}

/**
 * 弹出新增新闻框
 */
function add(){
	$('#newsdate').val('');
	$('#newsdate').datepicker('update');
	var parentId;
	var nodes = ztree.getSelectedNodes();
	if(nodes[0] && nodes[0].id){
		var node = nodes[0];
		if(node.isParent){
			bootbox.alert("请选择叶子节点栏目添加新闻");
			return;
		}else
			$("#columnid").val(node.id);
	}else{
		bootbox.alert("请选择叶子节点栏目添加新闻");
		return;
	}

	try {
		editor.html("");
	} catch (e) {
		bootbox.alert("正在初始化编辑器,请等待几秒后再试！");
		return;
	}
	initForm("save");
	$("#model-form .modal-body").unloadmask();
	Util.modal("#model-form",'show');
}

/**
 * 弹出新闻详细框
 * @param id 新闻唯一标识
 */
function view(id){
	Util.modal("#model-info",'show');
	$("#model-info .modal-body").loadmask();
	$.post(contextpath+"/news/newsmanage/getNews.do",{id:id},function(json){
		var tags_info = "";
		if(json.tags != null){
			var tagsArray = json.tags.split(",");
			$(tags).each(function(){
				var that = this;
				$(tagsArray).each(function(){
					if(that.id == this){
						if(tags_info != "")
							tags_info += ",";
						tags_info += that.name;
					}
				});
			});
		}
		
		$("#news_tags").html(tags_info);
		$("#news_title").html(json.title);
		$("#news_author").html(json.author);
		if(json.newsdate)
			$("#news_createtime").html(new Date(json.newsdate).Format("yyyy-MM-dd"));
		$("#news_body").html(json.content);
		$("#model-info .modal-body").unloadmask();
	});
}

/**
 * 弹出新闻修改框
 * @param id 新闻唯一标识
 */
function modify(id){
	initForm("update");
	Util.modal("#model-form",'show');
	$("#model-form .modal-body").loadmask();
	$.post(contextpath+"/news/newsmanage/getNews.do",{id:id},function(json){
		json.newsdate = new Date(json.newsdate).Format();
		$("#model-form").fill(json);
		try {
			editor.html("");
			editor.appendHtml(json.content);
		} catch (e) {
			bootbox.alert("正在初始化编辑器,请等待几秒后再试！");
			return;
		}
		var tags = "";
		if(json.tags != null) tags = json.tags.split(",")
		$("#tags").multiselect('select', tags);
		$("#model-form .modal-body").unloadmask();
	});
}

function remove(id){
	bootbox.confirm("是否删除此新闻？", function(result) {
		if(result) {
			$("#newstable").loadopacity();
			$.post(contextpath+"/news/newsmanage/deleteNews.do",{id:id},function(json){
				$("#newstable").unloadopacity();
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
 * 初始化栏目树
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
					var nodes = ztree.getSelectedNodes();
					if(nodes[0] && nodes[0].id){
						if(currentNodeId == nodes[0].id) return;
						currentNodeId = nodes[0].id;
						var tableSettings = table.fnSettings();
						tableSettings.ajax.data.params = "parentid="+nodes[0].id;
						table.fnDraw( false );
					}
				}
			}
		},json);
	});
}

/**
 * 刷新栏目树
 */
function resetTree(){
	ztree.refresh();
	//获取选中的树节点
	/*var nodes = ztree.getSelectedNodes();
	//如果选中的树节点，异步刷新选中节点的父节点
	if (nodes[0]){
		var node = nodes[0];
		ztree.reAsyncChildNodes(node.getParentNode(), "refresh");
		node = ztree.getNodeByParam("id", node.id, null);
		//如果当前节点是父节点，则刷新并展开当前节点的子节点
		console.log(node);
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
	}*/
}
