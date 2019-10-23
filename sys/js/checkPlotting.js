var table;	
$(function(){
	HJMap.InitBase('viewMap');
	table = Util.dataTable({
		"dom": '#plottingTable',
		"url" : contextpath+"/system/plotting/list.do",
		"aoColumns": [
						{"title": "标题", "data": "title" ,"width":"80px"},
			            {"title": "内容", "data": "content" ,"width":"400px","render":function(data){
			            	return "<div class='elli' title='"+data+"'>"+data+"</div>";
			            }},
			            {"title": "标绘类型", "data": "type" , "width":"160px","render":function(data){
			            	return getTypeStr(data);
			            }},
			            {"title": "状态", "data": "audited" , "width":"80px","render":function(data){
			            	if(data) return "已发布";
			            	else return "未发布";
			            }},
			            {"title":"操作","data":"id","sWidth":"175px","render":function(data,type,row){
			            	var str = "<a href=\"javascript:void(0)\"  role=\"button\" class=\"btn btn-minier btn-success view\">查看</a>";
			            	if(!row.audited)
			            		str += "<a href=\"javascript:checkPlotting('"+data+"')\" role=\"button\" class=\"btn btn-minier btn-primary\">发布</a>";
			            	return str;
			            }}
			        ]	
    });
	
	$(document).on("click",".view",function(e){
		var rowdata = table.api().row($(this).closest('tr')).data();
//		console.log(rowdata);
		$("#publish").hide()
		Util.modal("#model-form",'show');
		$("#model-form .modal-body").loadmask();
		$("#id").val(rowdata.id);
		
		$("#model-form .modal-body").unloadmask();
		if(!rowdata.audited){$("#publish").show()}
		if(rowdata.graphics){
			var gjson = $.parseJSON(rowdata.graphics);
			HJDrawTool.clear();
			HJDrawTool.drawGraphic({id:rowdata.id,title:rowdata.title,content:rowdata.content},rowdata.type,gjson);
//			HJDrawTool.DrawGraphic2Layer(gjson);
			var graphic=new esri.Graphic(gjson);
			HJMap.zoom2Geometry(graphic.geometry);
		}
	});
	
});

function getTypeStr(type){
	switch (type)
	{
		case "point":return "点"; break;
		case "circle":return "圆"; break;
		case "extent":return "面"; break;
		case "polyline":return "线"; break;
		case "polygon":return "多边形"; break;
		case "default":return ""; break;
	}
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
			query();
		}
	})
});

function checkPlotting(id){
	var _id = id || $("#id").val();
	bootbox.confirm("是否 确认发布标绘?",function(result){
		if(result){
			$("#model-form").loadmask();
			$.post(contextpath+"/system/plotting/publish.do",{id:_id},function(json){
				$("#model-form").unloadmask();
				if(json.status){
					bootbox.alert("发布成功");
					Util.modal("#model-form",'hide');
					table.fnDraw( false );
				}else{
					bootbox.alert("发布失败");
				}
			});
		}
	});
}

	