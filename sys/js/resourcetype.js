$(function(){
	
	var table = Util.dataTable({
		"dom": '#resourceTable',
		"width": 1200,
		"url" : contextpath+"/system/resouceType/getTableList.do",
		"aoColumns": [  	                
						{"title": "类型编码", "data": "code" ,"width":"80px"},
			            {"title": "类型名称", "data": "name" ,"name":"name","width":"120px"},
			            {"title": "类型描述","data": "mark" ,"name":"mark","width":"150px"},
			            {"title": "操作","data": "id","width":"70px","render":function(data, type, row){
			            	return "<a href=\"javascript:updateResource('"+data+"')\" role=\"button\" class=\"btn btn-minier btn-primary\">修改</a>" +
			            	"<a href=\"javascript:deleteResource('"+data+"')\"  role=\"button\" class=\"btn btn-minier btn-danger\">删除</a>";
//			            	"<a href=\"javascript:void(0)\"  role=\"button\" class=\"btn btn-minier btn-success\">查看</a>" +
			            	
			            }}
			        ]
    });
	
	
	InitTree();
	
	/*$.post(contextpath+"/system/resouce/getResourceTree.do",function(json){
		$.fn.zTree.init($("#resourceTree"), {
			treeId:"objTree",
			callback: {
				onClick: function(event, treeId, treeNode){
					if(treeNode.type==100){
						table.sParam = treeNode.id;
						oTable.fnDraw( false );
					};
				}
			}
		},json.data);
	});*/
	
	$('#validation-form').validate({
		errorElement: 'div',
		errorClass: 'help-block',
		focusInvalid: false,
		ignore: "",
		rules: {
			resourceCode: {
				required: true,
				resourceCode:true
			},
			name: {
				required: true,
				name: true,
			},
			url: {
				required: true,
				url: true
			},
			sort: {
				required: true,
				sort:true
			},
		},

		messages: {
			resourceCode: "请输入资源编码！",
			name:"请输入资源名称！",
			url: "请输入请求地址！",
			sort:"请选择排序编号！"
		},


		highlight: function (e) {
			$(e).closest('.form-group').removeClass('has-info').addClass('has-error');
		},

		success: function (e) {
			$(e).closest('.form-group').removeClass('has-error');//.addClass('has-info');
			$(e).remove();
		},

		errorPlacement: function (error, element) {
			if(element.is('input[type=checkbox]') || element.is('input[type=radio]')) {
				var controls = element.closest('div[class*="col-"]');
				if(controls.find(':checkbox,:radio').length > 1) controls.append(error);
				else error.insertAfter(element.nextAll('.lbl:eq(0)').eq(0));
			}
			else if(element.is('.select2')) {
				error.insertAfter(element.siblings('[class*="select2-container"]:eq(0)'));
			}
			else if(element.is('.chosen-select')) {
				error.insertAfter(element.siblings('[class*="chosen-container"]:eq(0)'));
			}
			else error.insertAfter(element.parent());
		},

		submitHandler: function (form) {
		},
		invalidHandler: function (form) {
		}
	});

});

function save(){
	document.getElementsByTagName("h4")[0].innerHTML = "添加资源";
	$("#savebt").attr("style", "display:''");
	$("#updatebt").attr("style", "display:none");
	Util.modal("#model-form",'toggle');
	Util.reloadTable("#resourceTable");
}

function saveResource(){
	var data = Util.getFormData("#saveForm");
	$.post(contextpath+"/system/resouceType/addResourceType.do",data,function(json){
		if(json.status == 1){
			alert("保存成功!");
		}else if(json.status == 2){
			alert(json.message);
		}else if(json.status == 3){
			alert("有相同的类型编码和类型名称,请修改后保存!");
			return;
		}
		Util.modal("#model-form",'toggle');
		Util.reloadTable("#resourceTable");
	});
}

function updateResource(id){
	$.post(contextpath+"/system/resouceType/getResourceTypeById.do",{id:id},function(json){
		document.getElementsByTagName("h4")[0].innerHTML = "修改资源";
		$("#model-form").fill(json);
		Util.modal("#model-form",'toggle');
		$("#updatebt").attr("style", "display:''");
		$("#savebt").attr("style", "display:none");
	});
}

function updateResourceType(){
	var data = Util.getFormData("#saveForm");
	$.post(contextpath+"/system/resouceType/updateResourceType.do",data,function(json){
		if(json.status == 1){
			alert("修改成功");
		}else if(json.status == 2){
			alert("修改失败");
		}else if(json.status == 3){
			alert("有相同的类型编码和类型名称,请修改后更新!");
			return;
		}
		Util.modal("#model-form",'toggle');
		Util.reloadTable("#resourceTable");
	});
}

function deleteResource(id){
	var result=confirm("是否删除该资源类型？");
	if(result){
		$.post(contextpath+"/system/resouceType/deleteResourceType.do",{id:id},function(json){
			if(json.status){
				Util.reloadTable("#resourceTable");
				alert("删除成功！");
			}else{
				alert("删除失败！");
			}
			
		});
	}
}

function InitTree(){
	var sampleData = initiateDemoData();//see below


	$('#resourceTree').ace_tree({
		dataSource: sampleData['dataSource1'],
		multiSelect: true,
		cacheItems: true,
		'open-icon' : 'ace-icon tree-minus',
		'close-icon' : 'ace-icon tree-plus',
		'selectable' : true,
		loadingHTML : '<div class="tree-loading"><i class="ace-icon fa fa-refresh fa-spin blue"></i></div>'
	});
	
	
	function initiateDemoData(){
		var tree_data = {
				'for-sale' : {text: '数据交换', type: 'folder',additionalParameters : {
					'children' : {
					'appliances' : {text: '南京数据交换列表', type: 'item'},
					'arts-crafts' : {text: '宜昌数据交换列表', type: 'item'}
					}
				}
			}	,
			'vehicles' : {text: '数据处理', type: 'folder'}	,
			'rentals' : {text: '后台管理', type: 'folder'}	,
			'real-estate' : {text: '系统设置', type: 'folder'}
		};
		
		var dataSource1 = function(options, callback){
			var $data = null;
			if(!("text" in options) && !("type" in options)){
				$data = tree_data;//the root tree
				callback({ data: $data });
				return;
			}
			else if("type" in options && options.type == "folder") {
				if("additionalParameters" in options && "children" in options.additionalParameters)
					$data = options.additionalParameters.children || {};
				else $data = {} ;//no data
			}
			
			if($data != null)//this setTimeout is only for mimicking some random delay
				setTimeout(function(){callback({ data: $data });} , parseInt(Math.random() * 500) + 200);

			//we have used static data here
			//but you can retrieve your data dynamically from a server using ajax call
			//checkout examples/treeview.html and examples/treeview.js for more info
		};	
		return {'dataSource1': dataSource1};
    }
	
}
