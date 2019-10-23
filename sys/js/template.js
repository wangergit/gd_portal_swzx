var table,ztree;
$(function(){
	document.onkeydown = function () {
        if (window.event && window.event.keyCode == 13) {
            window.event.returnValue = false;
        }
    }
	//初始化树
	InitTree();
	 
	$('#btn_submit').click(function(){
		var data = new Object();
		data.filePath = $('#filepath').val();
		data.content = $('#source').val();
		data.filename = $('#filename').val();
		if(data.filename=="")return alert("请选择目录");
		$.post(contextpath+"/system/updateTemplate.do",data,function(json){
			 if(json.status){
				 $('#filepath').val("");
				 $('#source').val("");
				 $('#filename').val("");
				 alert("更新成功！");
			 }
		});
	});
	
});

/**
 * 初始化新闻栏目树
 */
function InitTree(){
	var currentNodeId = "";
	$.post(contextpath+"/system/templatelist.do",{id:1},function(json){
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
					if(!treeNode.isParent){
						$.post(contextpath+"/system/getTemplate.do",{file:treeNode.id+"\\"+treeNode.name},function(json){
							var path = json.path;
							$('#source').val(json.html);
							$('#filepath').val(path.replace(json.name,""));
							$('#filename').val(json.name);
							$('#span_filepath').html("\\"+path.replace(json.name,""));
						});
					}else{
						var nodes = ztree.getSelectedNodes();
						var node = nodes[0];
						$('#filepath').val(node.id+"\\"+node.name);
						$('#span_filepath').html("\\"+node.id+"\\"+node.name+"\\");
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
