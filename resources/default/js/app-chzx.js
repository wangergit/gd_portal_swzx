/*
 * function:1>加载地图;初始化地图图层;地图搜索功能;2>初始化新闻;3>初始化水位站div;4>初始化航标idv; 5>获取系统时间;
 * 
 * creatime:2016/3/24
 * 
 */
var niceScroll;
$(function($) {
 
 
	// 扩展动画
	$.extend($.easing, {
		easeOutExpo : function(e, f, a, h, g) {
			return (f == g) ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a
		},
		easeOutBounce : function(x, t, b, c, d) {
			if ((t /= d) < (1 / 2.75)) {
				return c * (7.5625 * t * t) + b;
			} else if (t < (2 / 2.75)) {
				return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
			} else if (t < (2.5 / 2.75)) {
				return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
			} else {
				return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
			}
		}
	});
	setInterval('getSystime()', 1000);
	$("#wmstmap").load(function() {
 		initlayers();
	})
	/*
	 * $('div').find('.leftNav').each(function(){
	 * if($(this).attr('id')=='mian_leftNav') $(this).show(); else
	 * $(this).hide(); });
	 */
	
	$('#btn_search').click(function(){
			var qK = $("#q").val();
			var type = $(".s").html();
			if(qK!="请输入搜索的内容")
				SearchTool.searchByMap(qK,type);
	});
 
 $("body #Select").each(function(i){ 
	i= i+1
	this.id = "Select" + i; 
	var SumimasenSelect = $("#Select"+i)
	$(SumimasenSelect).find("ul li:first").hover(function(){
		$(".s").css("background","url(images/68_60.PNG) 0px 0px no-repeat");
		$(this).parent("ul").css("height",170)
		$(this).siblings("ul li:not(.s)").mouseenter(function(){
			$(".s").css("background","url(images/68_60.PNG) 0px 0px no-repeat");
			$(this).css("background","#4f89cb").css("color","#FFFFFF")
		});
		$(this).siblings("ul li:not(.s)").mouseleave(function(){
			$(this).css("background","none").css("color","#333")
			$(".s").css("background","url(images/68_60.PNG) 0px -30px no-repeat");
		});
		$(this).siblings("ul li:not(.s)").click(function(){
			$(this).parent("ul").css("height",28)
			var cdContent = $(this).text()
			$(SumimasenSelect).find("ul li:first").text(cdContent)
		});
		$(this).parent(SumimasenSelect).mouseleave(function(){
			$(this).css("height",28)
		});
});
	
	},function(){
	$(".s").css("background","url(images/68_60.PNG) 0px -30px no-repeat");
	
});
 
	
	
	$(window).resize(function(){
		setContainerSize() 
		if(niceScroll){
			niceScroll.after();
		}
	})
	SearchTool.init();
	MileageTool.init();
	BookMarkTool.init();
	$('#img_toolbox').click(function(){
		 
		$(this).toggleClass("toolClose");
		 var ele = this ;
		if(!$(this).hasClass("toolClose")){
			SearchTool.hide();
			$(".place.clearfix").animate({right:'-500px'},1000,function(){
				$(ele).attr("src","./resources/default/images/toolbox.png");
				$(ele).attr("title","打开工具箱");
			});
			
		}else{
		 
			$(".place.clearfix").animate({right:'56px'},1000,function(){
				$(ele).attr("src","./resources/default/images/toolbox_open.png");
				$(ele).attr("title","关闭工具箱");
			});
			
		}
		//$(".mapToolBox").animate({right:'510px'},2000);
		
	});
	
	infoHighchart.init();

});

var BookMarkTool = {
	data:null,
	
	init :function(){
		 var str = $.cookie('bookmark');
		 var json = eval('(' + str + ')');
		 if(json && json.data){
			 var html="";
			 $(json.data).each(function(index,ele){
				 html+="<li>"; 
				 html+="<img  style=\"cursor:pointer\" src=\""+resPath+"/images/sign_delete.png\" onclick=\"BookMarkTool.remove("+index+",this);\"  />  ";
				 html+="<a href=\"javascript:BookMarkTool.position("+ele.x+","+ele.y+","+ele.level+");\">"+ele.title+"</a>" ;
				 html+="</li>"; 
				 BookMarkTool.data = json.data;
			 });
			 $("#bookmarks").html(html);
			 
		 }
	},
	position:function(x,y,level){
		wmstmap.HJMap.centerAndZoom(x,y,level);
	},
	showAddPannel:function(){
		$("#div_bookmarklist").hide();
		$("#div_bookmarktitle").show();
		$("#img_bookmarkadd").hide();
		$("#img_bookmarklist").show();
	},
	showListPannel:function(){
		$("#div_bookmarklist").show();
		$("#div_bookmarktitle").hide();
		$("#img_bookmarkadd").show();
		$("#img_bookmarklist").hide();
	},
	add:function(){
		 var title=$('#txt_title').val();
		 if(title.Trim()=="")return alert("请输入标题!");
		 var obj = new Object();
		 obj.level = wmstmap.HJMap.map.getLevel();
		 var point = wmstmap.HJMap.map.extent.getCenter()
		 obj.x = point.x;
		 obj.y = point.y;
		 obj.user = "";
		 obj.title= title;
		 var cookie = new Object();
		 if(!BookMarkTool.data)BookMarkTool.data = new Array();
		 BookMarkTool.data.push(obj);
		 cookie = "{data:"+JSON.stringify(BookMarkTool.data)+"}";
		 console.log(cookie);
		 $.cookie("bookmark",cookie);
		 BookMarkTool.init();
		 BookMarkTool.showListPannel();
	},
	remove:function(index,ele){
		 $(ele).parent().remove();
		 BookMarkTool.data.splice(index,1);
		 var cookie = "{data:"+JSON.stringify(BookMarkTool.data)+"}";
		 $.cookie("bookmark",cookie);
	},
	hide:function(){
		$("#myBookMarkModal").hide();
	},
	show:function(){
		$("#myBookMarkModal").show();
	}
}

var MileageTool ={
	 init:function(){
		  $.post(contextPath+'/common/getNCList.do',{},function(json){
			 
			$(json).each(function(index,ele){
				$("#select_nc").append("<option value='"+index+"'>"+ele.name+"</option>");
			 });
		    $('#select_nc').change(function(){
				$("#select_ns").empty();
				var ns = json[this.value];
				if(!ns ){
					$("#select_ns").append("<option value='-1'>请选择航段</option>");
					return;
				}
				if(ns.segments==""){
					$("#select_ns").append("<option value='-1'>该航道的航段信息不完善!</option>");
					return;
				};
			   $(ns.segments).each(function(index,ele){
				    $("#select_ns").append("<option value='"+ele.id+"'>"+ele.name+"</option>");
			   });
			});
			 
		});
		$("#txt_mileage").keyup(function () {
                //如果输入非数字，则替换为''，如果输入数字，则在每4位之后添加一个空格分隔
                this.value = this.value.replace(/[^\d]/g, '').replace(/(\d{4})(?=\d)/g, "$1 ");
		})
	 },
	 position:function(){
		var sid = $("#select_ns").val();
		var mileage =  $("#txt_mileage").val();
		if(sid<0 || mileage<0)return ;
		$.post(contextPath+'/common/getMileage.do',{nsid:sid,mileage:mileage},function(json){
		if(json){
			wmstmap.HJMap.centerAtGraphic(json.x,json.y,resPath+"/images/location.png");
		 }else{
			 alert("未找到里程信息!");
		 }
		});
	 },
	 hide:function(){
		 $('#myModal').hide();
		 wmstmap.HJMap.resultlayer.clear();
	 },
	 show:function(){
		 $('#myModal').show();
	 }
	
}

var infoHighchart = {
		
     beaconSt:function(){
    	  $.post('./common/getAppSt.do',{},function(json){
 			  var result = new Object();
    		  	  result.data = json;
    			  result.title ="航标统计信息";
    			  infoHighchart.create(result);
 		  });
     },
	 bridgeSt:function(){
		 
		 var param = SearchTool.getSearchParams()["桥梁"];
		 
		 wmstmap.FindTaskTool.queryLayer(param.layerids[0]); 
		 
		 wmstmap.FindTaskTool.callBackFunc =infoHighchart.bridgeCallBack;
	 },
	 toggle:function(){
		 	
		 $("#div_st").toggle(500);
	 },
	 bridgeCallBack:function(data){
		 console.log(data);
		 var result = new Object();
		 var sobj = new Object();
		 for(var i=0;i<data.length ; i++){
			 var obj = data[i];
			 var nav = obj.attributes["NAVHGT"];
			 if(sobj[nav]){
				var z =  sobj[nav];
				 sobj[nav] = z+1;
			 }else{
				 sobj[nav] = 1;
			 };
		 };
		 var list = new Array();
		 for(var key in sobj){
			 var so = sobj[key];
			 var o = new Object();
			 o.name= "净高（"+key+"）米";
			 o.y = so;
			 list.push(o);
		 }
		 result.data = list;
		 result.title ="桥梁通航净高统计--桥梁总数："+data.length;
		 wmstmap.FindTaskTool.Clear();
		 infoHighchart.create(result);
	 },
     		
	 init :function(){
		 
		var result =  {"title":"航标信息",
				"data":[{ "name":"xxxx","y":10},{ "name":"xxxx","y":2},{ "name":"xxxx","y":2}],
				};
		 
		 infoHighchart.create(result);
	 },
	 create:function(result){ 
			
		   Highcharts.getOptions().plotOptions.pie.colors = (function () {
		        var colors = [],
		            base = Highcharts.getOptions().colors[0],
		            i;
		        for (i = 0; i < 10; i += 1) {
		            // Start out with a darkened base color (negative brighten), and end
		            // up with a much brighter color
		            colors.push(Highcharts.Color(base).brighten((i - 3) / 7).get());
		        }
		        return colors;
		    }());
		    // Build the chart
		    $('#mapHighChart').highcharts({
		        chart: {
		            plotBackgroundColor: null,
		            plotBorderWidth: null,
		            plotShadow: false
		        },
		        credits:{
					enabled:false // 禁用版权信息
				},
		        title: {
		            text: result.title +' 统计'
		        },
		        tooltip: {
		            pointFormat: ''
		        },
		        plotOptions: {
		            pie: {
		                allowPointSelect: true,
		                cursor: 'pointer',
		                dataLabels: {
		                    enabled: true,
		                    format: '<b>{point.name}</b>: {point.y}座  ',
		                    style: {
		                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
		                    }
		                }
		            }
		        },
		        series: [{
		            type: 'pie',
		            name: '访问模块',
		            data: result.data
		        }]
		    });
	}
		
};
function PicBrowseTool(dom,data){
	this.dom = dom;
	this.data = data ;
	this.index = 0;
};
PicBrowseTool.prototype.left = function(){
	this.index=this.index-1;
	if(this.index<0)
		this.index = this.data.length-1;
	this.show();
};
PicBrowseTool.prototype.right = function(){
	this.index=this.index+1;
	if(this.index>=this.data.length)
		this.index = 0;
	this.show();
};
PicBrowseTool.prototype.show = function(){
	$(this.dom).attr("src", this.data[this.index]);
};



 

var SearchTool = {
	
	init:function(){
		var searchTypeObject = [
			{name:"航标",func:"SearchTool.searchByMap(null,'航标')",ico:resPath+"/images/22.png"},
			{name:"船闸",func:"SearchTool.searchByMap(null,'船闸')",ico:resPath+"/images/33.png"},
			{name:"码头",func:"SearchTool.searchByMap(null,'码头')",ico:resPath+"/images/55.png"},
			{name:"锚泊区",func:"SearchTool.searchByMap(null,'锚泊区')",ico:resPath+"/images/66.png"},
			{name:"桥梁",func:"SearchTool.searchByMap(null,'桥梁')",ico:resPath+"/images/44.png",showAttr:{"BRGNAM":"桥梁名称","MANDEP":"管理单位","NAVHGT":"通航净高","NAVWID":"通航净宽"}},
			{name:"水位站",func:"SearchTool.searchByMap(null,'水位站')",ico:resPath+"/images/555.png"},
			];
		var searchTypeHtml = "";
		searchTypeHtml += '<div class="leftModular"><ul class="clearfix">';
		$(searchTypeObject).each(function(index,element){
		var func = element.func;
		var name = element.name;
		var ico  = element.ico;
		searchTypeHtml+='<li><a href="javascript:'+func+';"><img  src="'+ico+'"><div style="text-decoration: none;" class="text" hidefocus="true" >'+name+'</div></a></li>';
		})
		searchTypeHtml+='</ul></div>';
		$('#leftCon').html(searchTypeHtml);
		 $("#infoModal_beacon").hide(500);
    	 $("#infoModal_bridge").hide(500);
	},
	graphicClick:function(grapic){
			var attr = grapic.attributes;
			var param = SearchTool.getSearchParams()[attr.layerName] ;
			param = (param)?param:SearchTool.getSearchParams()[ SearchTool.searchType];
			if(!param || !param.showAttr){
				var param = new Object();
				for(var key in SearchTool.getSearchParams()){
					var layerSett = SearchTool.getSearchParams()[key];
					if(layerSett.name=="全部")continue;
					$(layerSett.layerids).each(function(i,v){
						 if(this==attr.layerId){
							 param.infowindows=layerSett.infowindows;
							 param.form = layerSett.form;
							 param.showAttr = layerSett.showAttr;
							 param.layerId = attr.layerId;
							 return false
						 }
					})
				}
				if(!param.infowindows)return;
			}else{
				 param.layerId = param.layerids[0];
			}

			var broPic = {
					"大牛石侧面浮标":["./resources/default/images/app/dc.jpg"],
					"大田磅过河岸标":["./resources/default/images/app/yab.jpg"],
					"阅江大桥左1":["./resources/default/images/app/hf.jpg"],
					"南广铁路西江大桥":["./resources/default/images/app/nc1.jpg","./resources/default/images/app/nc2.jpg"],
					"金马大桥":["./resources/default/images/app/dq1.jpg"
						,"./resources/default/images/app/dq2.jpg"
						,"./resources/default/images/app/dq3.jpg"
						,"./resources/default/images/app/dq4.jpg"
						]
			};
			var picObj= ["./resources/default/images/app/nopic.jpg"];
			var html = "";
			$(param.form+" span").each(function(){
				var key = $(this).attr("name")
				var ckey = param.showAttr[key];
				var value = (attr[key])?attr[key]:attr[ckey];
				if(value && value!="Null")
					$(this).html(value);
				else
					$(this).html("&nbsp;");
				
				if(broPic[value]){
					picObj = broPic[value];
				};
		    });
			
			var images = SearchTool.getImages(param.layerId);
			
			$('#'+images.defaultClass).attr("src",picObj[0]);
			
			$('.'+images.defaultClass).attr("href",picObj[0]);
			$(".div_thumbnail_images").empty();
			var divHtml = "";
			$(images.list).each(function(index,element){
				divHtml += "<p><a class=\""+images.defaultClass+"\" href=\""+element+"\"  > </a></p> ";
			});
			$(".div_thumbnail_images").html(divHtml);
			$("."+images.defaultClass).colorbox({ rel: 'group1', transition: "none", innerWidth: '700px' });
			SearchTool.grapicShow(param.infowindows);
			
			var picBrowseTool1 = new PicBrowseTool("#beacon_images",picObj);
			var picBrowseTool2 = new PicBrowseTool("#bridge_images",picObj);
			$('.bridgeleft').unbind();
			$('.bridgeright').unbind();
			$('.beaconleft').unbind();
			$('.beaconright').unbind();
			$(".bridgeleft").click(function(){
				picBrowseTool2.left();
			});
			$(".bridgeright").click(function(){
				picBrowseTool2.right();
			});
			$(".beaconleft").click(function(){
				picBrowseTool1.left();
			});
			$(".beaconright").click(function(){
				picBrowseTool1.right();
			});
			
			
	},
	grapicShow:function(id){
		$(id).show(500);
	},
	grapicHide:function(id){
		$(id).hide(500);
		if(id!="#infoModal_beacon" && id!="#infoModal_bridge"){
			wmstmap.FindTaskTool.Clear();
		};
	},
	getSearchParams:function(){
		var searchParams = {
			"全部":{name:"全部",layerids:[0,7,10,11,12,16],searchFields:["航标名称","桥梁名称","浮码头名称","固定码头名称","锚泊区名称","船闸名称"]},
			"航标":{name:"航标",form:"#form_beacon",infowindows:"#infoModal_beacon",layerids:[0],searchFields:["航标类型"],fkey:"NMKNAM",showAttr:{
				
				"NMKNAM":"航标名称","CATNMK":"航标类型","NMKCOD":"航标编号","BNKWTW":"航标岸别","STATUS":"工作状态",
				"CATMAN":"管理类别","MANDEP":"管理单位","MNTDEP":"维护单位","TELEID":"航标遥测摇控系统标识符","NMKSHP":"标体形状",
				"NMKCOL":"标身颜色","NMKPAT":"标身图案","LITCOL":"灯色","LITCHR":"灯质","PERIOD":"闪光周期",
				"TOPSHP":"顶标形状","TOPCOL":"顶标颜色","SCAMIN":"最小比例尺","LOCTON":"设置位置","INFORM":"备注信息"
				
			}},
			"码头":{name:"码头",layerids:[11],searchFields:["固定码头名称"],fkey:"TRMNAM"},
			"桥梁":{name:"桥梁",form:"#form_bridge",infowindows:"#infoModal_bridge",layerids:[7],searchFields:["桥梁名称"],fkey:"BRGNAM",
			showAttr:{
				"BRGNAM":"桥梁名称","NSPNNO":"通航孔数","NAVWID":"通航净宽","NAVHGT":"通航净高","NAVWID":"通航净宽",
				"CATBRG":"桥梁类别","USEBRG":"桥梁用途","HDSTHY":"斜边水平距离","DHNAVS":"设计最高通航水位","APPRNO":"航道审批文号",
				"MANDEP":"管理单位","CONDTN":"建设状态","DELIFE":"使用年限","INFORM":"备注信息","SCAMIN":"最小比例尺","BRGCOD":"桥梁编码"	
				}
			 },
			"锚泊区":{name:"锚泊区",layerids:[12],searchFields:["锚泊区名称"],fkey:"ACANAM"},
			"船闸":{name:"船闸",layerids:[16],searchFields:["船闸名称"],fkey:"LOKNAM"}
		}; 
		return searchParams;
		
	},
	getImages:function(type){
		
		var images = {
				"0":{defaultClass:"beacon_images",defaultImage:"./resources/default/images/app/dc.jpg" },
				"7":{defaultClass:"bridge_images",defaultImage:"./resources/default/images/app/dq1.jpg" }
		};
		for(var key in images){
			$("."+images[key].defaultClass).removeClass("cboxElement");
		} 
		 
		return  images[type];
	},
	searchByMap:function(key,type,callBack){
		var searchParams = SearchTool.getSearchParams();
		//key = (!key || key=="")?"*":key;
		var param = searchParams[type];
		if(!key){
			wmstmap.FindTaskTool.queryLayer(param.layerids[0]);
		}else{
		
			wmstmap.FindTaskTool.findParams.layerIds = param.layerids;
			wmstmap.FindTaskTool.findParams.searchFields = param.searchFields;
			wmstmap.FindTaskTool.FindByValue(key);
		}
		if(!callBack)
			wmstmap.FindTaskTool.callBackFunc =SearchTool.drawSearchResultHtml;
		else
			wmstmap.FindTaskTool.callBackFunc = callBack;
		
		SearchTool.searchType = type;
		SearchTool.searchFKey = param.fkey;
		wmstmap.FindTaskTool.graphicClick = SearchTool.graphicClick;
	},
	drawSearchResultHtml:function(data,currentPageNum){
		 
		if(data)
		   SearchTool.result = data;
		var pageSize = 5 ;
		var all = SearchTool.result.length;
		var pageNum = 1 ;
		if( all< pageSize){
			pageNum =  1;
		}
		if( all% pageSize === 0){
			pageNum =  parseInt( all/pageSize);
		}
		if( all% pageSize>0){
			pageNum =  parseInt(all/pageSize)+1;
		}
		currentPageNum = (currentPageNum)?currentPageNum:1;
		var searchResultHtml = "";
		searchResultHtml+="<div>";
		searchResultHtml+="<div class=\'lefttop\'><span class=\'home\'></span><a href=\'javascript:SearchTool.init();\'>分类</a><span class=\'next\'>></span>"+SearchTool.searchType+"</div>";
		searchResultHtml+="<div class=\'leftcon\' id=\'mian_leftNav\'>                        ";
		searchResultHtml+="<div id=\'PoiResultDiv\' class=\'PoiResultDiv\'>";
		searchResultHtml+="<div id=\'PoiItemsDiv\' class=\'PoiItemsDiv\'>";
		for(var z = (currentPageNum-1)*pageSize;z<=(currentPageNum * pageSize)-1;z++ ){
			var obj =  SearchTool.result[z];
			console.log(obj);
			if(!obj)continue;
			var title = (obj.value)?obj.value:obj.attributes[SearchTool.searchFKey];
		 
			title = (title==null || title.Trim() =="")?"暂无名称":title.Trim();
			searchResultHtml+="<div class=\'PoiItem\'>";
			searchResultHtml+="<div class=\'Index\'>"+(z+1)+"</div>";
			searchResultHtml+="<div class=\'ItemText\'>";
			searchResultHtml+="<div class=\'Name\'>";
			searchResultHtml+="<div class=\'operate\'><a class=\'tipIcon locate\' title=\'定位\' href=\'javascript:SearchTool.position("+z+");\'>定位</a></div>";
			searchResultHtml+="<div class=\'PoiNameInfo\'><span class=\'PoiName\'>"+title+"</span></div>";
			searchResultHtml+="</div>";
			//searchResultHtml+="<div class=\'Detail\'>";
			//searchResultHtml+="<div poiindex=\'4\' class=\'poiRichInfo\'>这里显示内容内容内容内容内容内容内容内容内容内容内容内容</div>";
			//searchResultHtml+="</div>";
			searchResultHtml+="</div>";
			searchResultHtml+="</div>";
		};	
			
		searchResultHtml+="<div class=\'PoiPageDiv\'>";
		searchResultHtml+="<div class=\'PageDiv\'>";
		searchResultHtml+="<table cellspacing=\'0\' cellpadding=\'0\' border=\'0\' style=\'width:auto;\'>";
		searchResultHtml+="<tbody>";
		searchResultHtml+="<tr>";
		
		if(currentPageNum==1){
			searchResultHtml+="    <td class=\'PrePage\'><a href=\'javascript:void(0);\'>上一页</a></td>";
		}else {
			searchResultHtml+="    <td class=\'PrePage\'><a href=\'javascript:SearchTool.drawSearchResultHtml(null,"+(currentPageNum-1)+");\'>上一页</a></td>";
		};
		searchResultHtml+="<td class=\'Page\'>";

		var pageEndHtml = "";
		if(currentPageNum>pageNum)
			currentPageNum = pageNum;
		var pageStart = (currentPageNum-3)>0?currentPageNum-3:1 ;
		var pageEnd = (currentPageNum + 3)<pageNum?(currentPageNum + 3):pageNum;
		if(pageEnd<7 && pageNum>7 )
			pageEnd = 7 ;
		if(pageNum>7 && (pageEnd==pageNum || pageNum<(pageEnd-7))){
			pageStart = pageEnd-6;
		};
		for(var k =pageStart ; k <= pageEnd ; k++){
			 console.log(k+":"+pageNum);
			 if(k==currentPageNum){
				 searchResultHtml+="<span>"+k+"</span>";
			 }else{
				  searchResultHtml+="<a href=\'javascript:SearchTool.drawSearchResultHtml(null,"+k+");\'>"+k+"</a>";
			 }
		}
		searchResultHtml+=pageEndHtml;
		searchResultHtml+="</td>";
		if(currentPageNum==pageNum){
			searchResultHtml+=" <td class=\'NextPage\'><a href=\'javascript:void(0);\'>下一页</a></td>";
		}else {
			searchResultHtml+=" <td class=\'NextPage\'><a href=\'javascript:SearchTool.drawSearchResultHtml(null,"+(currentPageNum+1)+");\'>下一页</a></td>";
		};
		
		searchResultHtml+="</tr>";
		
		searchResultHtml+="</tbody>";
		searchResultHtml+="</table>";
		searchResultHtml+="</div>";
		searchResultHtml+="</div>";
		searchResultHtml+="</div>                    ";
		searchResultHtml+="</div>";
		searchResultHtml+="</div>";
		$('#leftCon').html(searchResultHtml);
	},
	position:function(index){
		var obj =  SearchTool.result[index];
		var gem ;
		if(obj.feature){
			gem = obj.feature.geometry;
		}else{
			gem = obj.geometry;
		}
		wmstmap.HJMap.zoom2Geometry(gem);
	},
	toggle:function(){
		$('#mian_leftNav').toggle(1000,function(){
		    var dis = $(this).css("display");
		    if(dis=="none"){
		    	 wmstmap.FindTaskTool.Clear();	
		    	 SearchTool.init();
		    	 $("#infoModal_beacon").hide(500);
		    	 $("#infoModal_bridge").hide(500);
		    }
		});
	},
	show:function(){
		$('#mian_leftNav').show(1000);
	},
	hide:function(){
		$('#mian_leftNav').hide(1000);
	}
 
	
}
 
 String.prototype.Trim = function()
 { 
       return this.replace(/(^\s*)|(\s*$)/g, ""); 
 }
 function initPoiResultDiv(){
	// 美化浏览器的滚动条
	if(!niceScroll){
		niceScroll = $("#mian_leftNav").niceScroll({
			touchbehavior : false,
			cursorcolor : "#dfebf0 ",
			cursoropacitymax : 1,
			cursorwidth : 4,
			horizrailenabled : true,
			cursorborderradius : 5,
			autohidemode : true,
			background : 'none',
			cursorborder : 'solid 1px #d7e4ea ',
			after : function(){
				$("#mian_leftNav").find(".PoiResultDiv").each(function() {
					$(this).css("margin-top", $(this).prev().height() + 6 + "px");
					$(this).css("color","red");
				});
			}
		});
	}else{
		niceScroll.after();
	}
}
// 实时获取系统时间
function getSystime() {
	var now = new Date();
	var hour = now.getHours();
	var minutes = now.getMinutes();
	var seconds = now.getSeconds();
	if (hour < 10)
		hour = '0' + hour;
	if (minutes < 10)
		minutes = '0' + minutes;
	if (seconds < 10)
		seconds = '0' + seconds;
	$('#systime').html(
			now.getYear() + 1900 + "年" + (now.getMonth() + 1) + "月"
					+ now.getDate() + "日  " + hour + ":" + minutes + ":"
					+ seconds + " 星期" + '日一二三四五六'.charAt(new Date().getDay()));
}

// 初始化图层信息
function initlayers() {
	var checked = "checked";
	var layersHtml = "";
	var layers = wmstmap.HJConfig.Layers();
	for (var i = 0; i < layers.length; i++) {
		if (layers[i].name == "")
			continue;
		checked = layers[i].visible == true ? "checked='checked'" : '';
		layersHtml += '<span><a href="#" ><input onclick="wmstmap.HJMenuBuilder.LayerVisible(this)" type="checkbox" '
				+ checked
				+ ' value='
				+ layers[i].name
				+ ' id="'+ layers[i].name 
				+ '"/>'
				+ "<label for='" + layers[i].name
				+ "'>" + layers[i].name
				+ '</label></a></span>';
	}
	$('#layers').html(layersHtml);
}
//收缩左下导航div
function setting(){
	if($('#FullScreen').hasClass('InlineBlock')){
		$('#mian_leftNav').hide();
		$('#FullScreen').removeClass('InlineBlock');
		$('#FullScreen').addClass('InlineNone');
		$('#FullScreen').attr('title','展开左栏');
	}else{
		$('#mian_leftNav').show();
		$('#FullScreen').removeClass('InlineNone');
		$('#FullScreen').addClass('InlineBlock');
		$('#FullScreen').attr('title','收起左栏');
	}
	setContainerSize();
}
