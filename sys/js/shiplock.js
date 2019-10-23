var table;	
$(function(){
	$.post("http://14.23.108.204:6080/arcgis/rest/services/%E4%B8%93%E9%A2%98/%E9%80%9A%E8%88%AA%E5%BB%BA%E7%AD%91%E7%89%A9/MapServer/1/query?where=1%3D1&outFields=*&returnGeometry=false&f=pjson",function(json){
//	$.post("../sys/js/shiplock.json",function(json){
		var data = JSON.parse(json);
//		console.log(data.features);
		$(data.features).each(function(){
			var item = this.attributes;
			var content = "<tr><td>"+(item.LOKNAM && item.LOKNAM != "null" ?item.LOKNAM:"")+"</td><td>"+(item.LOKCOD?item.LOKCOD:"")+"</td>"+
						"<td>"+(item.MEADATE?new Date(item.MEADATE).Format():"")+"</td>"+
						"<td>"+(item.LOKCOD?item.LOKCOD:"")+"</td>"+
						"<td>"+(item.CONDTN?item.CONDTN:"")+"</td>"+
						"<td>"+(item.MANDEP?item.MANDEP:"")+"</td>"+
						"<td><a href=\"javascript:operate('"+item.LOKNAM+"','"+(item.LOKCOD?item.LOKCOD:"")+"')\" " +
						"role='button' class='btn btn-minier btn-primary'>上传图片</a></td></tr>"
			$("#shiplockTable tbody").append(content);
		});
		
		$('#shiplockTable').DataTable();
	});
	
//	var shiplockPath = "http://10.0.109.54:8080/shiplockpic/";
	var shiplockPath = "http://127.0.0.1:8890/bridgepic/";
	
	//editables on graphic page
	$.fn.editable.defaults.mode = 'inline';
	$.fn.editableform.loading = "<div class='editableform-loading'><i class='ace-icon fa fa-spinner fa-spin fa-2x light-blue'></i></div>";
    $.fn.editableform.buttons = '<button type="submit" class="btn btn-info editable-submit"><i class="ace-icon fa fa-check"></i></button>'+
    '<button type="button" class="btn editable-cancel"><i class="ace-icon fa fa-times"></i></button>';    
	//editables 
	
	try {//ie8 throws some harmless exceptions, so let's catch'em
		
		//first let's add a fake appendChild method for Image element for browsers that have a problem with this
		//because editable plugin calls appendChild, and it causes errors on IE at unpredicted points
		try {
			document.createElement('IMG').appendChild(document.createElement('B'));
		} catch(e) {
			Image.prototype.appendChild = function(el){}
		}

		var last_gritter;
		$('#choice').editable({
//			showbuttons: false,
			type: 'image',
			name: 'choice',
			value: null,
			image: {
				//specify ace file input plugin's options here
				btn_choose: '选择图例',
				droppable: true,
				maxSize: 110000,//~100Kb

				//and a few extra ones here
				name: 'choice',//put the field name here as well, will be used inside the custom plugin
				on_error : function(error_type) {//on_error function will be called when the selected file has a problem
					if(last_gritter) $.gritter.remove(last_gritter);
					if(error_type == 1) {//file format error
						last_gritter = $.gritter.add({
							title: '亲,你上传的不是一张图片!',
							text: '请选择一张 jpg|gif|png 图片!',
							class_name: 'gritter-error gritter-center'
						});
					} else if(error_type == 2) {//file size rror
						last_gritter = $.gritter.add({
							title: '亲,图片太大了，换张小的试试!',
							text: '图片大小不能超过 100Kb!',
							class_name: 'gritter-error gritter-center'
						});
					}
					else {//other error
					}
				},
				on_success : function() {
					$.gritter.removeAll();
				}
			},
		    url: function(params) {
				// ***UPDATE AVATAR HERE*** //
				//for a working upload example you can replace the contents of this function with 
				//examples/profile-avatar-update.js

				var deferred = new $.Deferred;

				var value = $('#choice').next().find('input[type=hidden]:eq(0)').val();
				if(!value || value.length == 0) {
					deferred.resolve();
					return deferred.promise();
				}
				
				$('#choice').next().find('input[type=file][name="choice"]').attr("id","choice_img_file");

				//图片上传
				$.ajaxFileUpload({
					url : contextpath + "/manage/shiplock/uploadshiplockPic.do", // 需要链接到服务器地址
					fileElementId : 'choice_img_file', 						// 文件选择框的id属性
					dataType:'json',  										//服务器返回的格式,可以是json或xml等
					success : function(data, status) {
						if("FileReader" in window) {
							//for browsers that have a thumbnail of selected image
							//var thumb = $('#choice').next().find('img').data('thumb');
							//if(thumb) $('#choice').get(0).src = thumb;
						}
						
						deferred.resolve({'status':'OK'});
						//清除提示信息
						if(last_gritter) $.gritter.remove(last_gritter);
						
						//上传完成后添加上传的图片
						$("#choice").attr("src",shiplockPath + data.filename)
//						addGraphicItem(data.filename);
					},
					error : function(data, status, e) {
						deferred.resolve({'status':'OK'});
						bootbox.alert("上传失败!");
					}
				});

				return deferred.promise();
				
			},
			
			success: function(response, newValue) {
			}
		})
	}catch(e) {}
	
});

function operate(name,code){
	Util.modal("#model-form",'show');
	$("#model-form .modal-body").loadmask();
	$("#choice").attr("src","/gd_portal/sys/image/noimg.jpg");
	$.post(contextpath+"/manage/shiplock/getShipLockPic.do",{shiplockname:name,shiplockcode:code},function(json){
		$("#model-form #name").val(name);
		$("#model-form #code").val(code);
		if(json.state){
			$("#choice").attr("src",json.picpath)
		}
		$("#model-form .modal-body").unloadmask();
	})
}

function save(){
	var name = $("#model-form #name").val();
	var code = $("#model-form #code").val();
	var picpath = "",src = $("#choice").attr("src");
	if(src != "/gd_portal/sys/image/noimg.jpg"){
		picpath = src;
		$.post(contextpath+"/manage/shiplock/saveShipLockPic.do",{picpath:picpath,shiplockname:name,shiplockcode:code},function(json){
			if(json.state){
				Util.modal("#model-form",'toggle');
				bootbox.alert("保存成功");
			}else{
				bootbox.alert(json.msg);
			}
		});
	}else{
		bootbox.alert("请选择图片进行上传");
	}
	
	
}



	