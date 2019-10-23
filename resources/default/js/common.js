var Util = {
	getWindowWidth : function() {
		return window['innerWidth'] || document.documentElement.clientWidth;
	},
	dialogInit : function() {
		// 设置对话框全局默认配置
//		var d = art.dialog.defaults;
//		// 按需加载要用到的皮肤，数组第一个为默认皮肤
//		// 如果只使用默认皮肤，可以不填写skin
//		d.skin = [ 'chrome', 'default', 'aero' ];
//		// 支持拖动
//		d.drag = true;
//		// 超过此面积大小的对话框使用替身拖动
//		d.showTemp = 100000;
	},
	/**
	 * 弹出对话窗口
	 * @param url
	 * @param title
	 * @param width
	 * @param height
	 */
	openDialog : function(url, title, width, height) {
		width = width || 800;
		height = height || 500;
		var windowHeight = document.documentElement.clientHeight;// 获取浏览器窗口的高度
		// var windowHeight = window.screen.availHeight-100;//获取电脑屏幕的高
		if (windowHeight - height < 5) {
			height = windowHeight - 5;
		}
		art.dialog.open(url, {
			title : title,
			width : width,
			height : height,
			limit : false,// 拖动不受限制
			lock : true
		});
	},
	/**
	 * 关闭对话窗口
	 */
	closeDialog : function() {
		art.dialog.close();
	},

	/**
	 * 配置数据表格
	 * @param params
	 * @return
	 */
	dataTable : function(params) {
		var spinner = Util.Spinner();
		var time = new Date();
		if (params.width < $(params.dom).width()) {
			params.width = false;
		}
		aoColumns = new Array();
		if(params.checkbox){
			var aoColumn = {
					title: "<input type=\"checkbox\" class=\"ace\" /><span class=\"lbl\"></span>",
					data: params.checkboxId || "id",
					width: "24px",
		            bSortable:false,
					render: function(data){
						return "<input type=\"checkbox\" class=\"ace\" value="+data+" /><span class=\"lbl\"></span>";
		            }
				};
			aoColumns.push(aoColumn);
			aoColumns = aoColumns.concat(params.aoColumns);
		}else
			aoColumns = params.aoColumns;
		var param = {
			// searching: false,
			autoWidth:false,
			stateSave:false,
			processing: true,
			deferRender: true,
			ordering : params.ordering?true:false,
			serverSide : true,
//			width : params.width || "100%",
			scrollX : params.width ? true : false,
			aoColumns : aoColumns,
			aLengthMenu : [ 10, 15, 25, 50 ],
			// 使用post方式
			ajax : {
				url : params.url,
				type : 'POST',
				data : {
					params : params.params || ""
				}
			},
			preDrawCallback : function(){
				spinner = spinner.spin($(params.dom).parent()[0]);
			},
			drawCallback : function() {
				spinner.spin();
//				console.log("用时："+(new Date() - time) + "毫秒");
			}
		};
		
		if(params.ordering && params.order){
			param.order = params.order;
		}

		var oTable = $(params.dom)
			.wrap("<div class='dataTables_borderWrap' />") //if you are applying
			// horizontal scrolling (sScrollX)
			.dataTable(param);

		if(params.checkbox){
			//initiate TableTools extension
			var tableTools_obj = new $.fn.dataTable.TableTools( oTable, {
				"sRowSelector": "td:not(:last-child)",
				"sRowSelect": "multi",
				"fnRowSelected": function(row) {
					//check checkbox when row is selected
					try { $(row).find('input[type=checkbox]').get(0).checked = true }
					catch(e) {}
				},
				"fnRowDeselected": function(row) {
					//uncheck checkbox
					try { $(row).find('input[type=checkbox]').get(0).checked = false }
					catch(e) {}
				},
		
				"sSelectedClass": "success"
		    } );
			
			//table checkboxes
			$('th input[type=checkbox], td input[type=checkbox]').prop('checked', false);
			
			//And for the first simple table, which doesn't have TableTools or dataTables
			//select/deselect all rows according to table header checkbox
			var active_class = 'active';
			
			$(params.dom+' > thead > tr > th input[type=checkbox]').eq(0).on('click', function(){
				var th_checked = this.checked;//checkbox inside "TH" table header
				
				$(this).closest('table').find('tbody > tr').each(function(){
					var row = this;
					if(th_checked){
						tableTools_obj.fnSelect(row);
//						$(row).addClass(active_class).find('input[type=checkbox]').eq(0).prop('checked', true);
						$(row).find('input[type=checkbox]').eq(0).prop('checked', true);
					}else{
						tableTools_obj.fnDeselect(row);
						$(row).find('input[type=checkbox]').eq(0).prop('checked', false);
					}
				});
			});
			
		}
		return oTable;
	},
	reloadTable : function(dt) {
		var table = $(dt).dataTable();
		table.fnDraw();
	},
	/**
	 * 根据ID获取表格对应对象
	 * @param dt
	 * @param id
	 * @returns data
	 */
	getTableSelectRowById: function (dt,id) {
		var table = dt;
		if(typeof(dt) == String){
			table = $(dt).dataTable();
		}
		var nTrs = table.fnGetNodes();//fnGetNodes获取表格所有行，nTrs[i]表示第i行tr对象
		var data;
		for ( var i in nTrs) {
			data = table.fnGetData(nTrs[i]);
			if(data.id = id)
				return data;
		}
	},
	/**
	 * 根据FormID获取表单对象
	 * @param form
	 * @returns form表单对象
	 */
	getFormData : function(form) {
		var o = {};
		var a = $(form).serializeArray();
		$.each(a, function() {
			if (o[this.name] !== undefined) {
				if (!o[this.name].push) {
					o[this.name] = [ o[this.name] ];
				}
				o[this.name].push(this.value || '');
			} else {
				o[this.name] = this.value || '';
			}
		});
		return o;
	},
	modal : function(d, fs, options) {
		$(d).modal(fs, options);
	},
	/**
	 * 表单验证
	 * @param dom
	 * @param options
	 */
	validate : function(dom,options){
		options.errorPlacement = function(error, element){
			var elem = $(element);

	        // Check we have a valid error message  
	        if(!error.is(':empty')) {  
	            // Apply the tooltip only if it isn't valid  
	            elem.first().tooltip({  
	            	placement: "left",
	                title: error.html()
	            }).tooltip('show');
	            elem.closest('.form-group').addClass('has-error');
	        }

	        // If the error is empty, remove the tooltip
	        else { elem.tooltip('destroy'); }
		},
		options.success = function (e,ele) {
			$(ele).tooltip('destroy');
			$(ele).closest('.form-group').removeClass('has-error');//.addClass('has-info');
//			$(e).remove();
		},
		options.errorElement = 'span',
		options.errorClass = 'tooltip-error',
		options.focusInvalid = true;
		
		$(dom).validate(options);
	},
	/**
	 * 获取 Spinner 实例
	 * @returns Spinner 实例
	 */
	Spinner : function(){
		var opts = {
			lines : 13, // 花瓣数目
			length : 8, // 花瓣长度
			width : 4, // 花瓣宽度
			radius : 10, // 花瓣距中心半径
			corners : 1, // 花瓣圆滑度 (0-1)
			rotate : 0, // 花瓣旋转角度
			direction : 1, // 花瓣旋转方向 1: 顺时针, -1: 逆时针
			color : '#000000', // 花瓣颜色
			speed : 1, // 花瓣旋转速度
			trail : 60, // 花瓣旋转时的拖影(百分比)
			shadow : false, // 花瓣是否显示阴影
			hwaccel : false, // spinner 是否启用硬件加速及高速旋转
			className : 'spinner', // spinner css 样式名称
			zIndex : 20000, // spinner的z轴 (默认是20000)
			top : '50%', // spinner 相对父容器Top定位 单位 px
			left : '50%'// spinner 相对父容器Left定位 单位 px
		};
		return new Spinner(opts);
	},
	Alert : function(msg){
		$.gritter.add({
			title: '系统提示',
			text: msg,
			class_name: 'gritter-info gritter-center',
			id: "gritter-alert"
		});
	},
	uploadForm : function(option){
		var form = option.form,url= option.url,suc = option.suc,err=option.err;
		
		$(form).ajaxSubmit({
			url : url,
			dataType : "json",
			type : "POST",
			beforeSubmit : function() {
				console.log(222);
			},
			success : function(data) {
				if(suc){
					suc(data);
				}
			},
			error : function(error) {
				err(error);
			}
		});

	},
	loadWarningNews : function(){
//		$.post(contextpath+"/manage/application/getApplicationNums.do",function(json){
//			$(".message-remind").html(json);
//			$("#warning_news").empty();
//			$(json).each(function(i,item){
//				if(i>7)
//					return;
//				else{
//					$("#message-remind").append(getNewsItem(item));
//				}
//			});
//		});
	},
	Init : function() {
		
		Util.dialogInit();
		Util.loadWarningNews();
		$("#refresh_news").click(function(e){
			e.stopPropagation();
			Util.loadWarningNews();
		});
	}
};
(function() {
	Util.Init();
})();

function getNewsItem(news){
	var dom = $("<li>");
	var content = $("<a>");;
	if(news.amount){
		content.attr("href",news.path);
		var div = $("<div>");
		div.addClass("clearfix");
		var span =$( "<span class=\"pull-left\">").append("<i class=\"btn btn-xs no-hover "+news.type+"\"></i>").append(" "+news.name);
		div.append(span);
		div.append("<span class=\"pull-right badge badge-info\" >"+news.amount+"</span>");
		content.append(div);
	}
	else{
		content.attr("href",news.path);
		content.append("<i class=\"btn btn-xs "+news.type+"\"></i>").append(" "+news.name);
	}
//	content.click(function(){
//		window.Location.herf=news.path;
//	})
	dom.append(content);
	return dom;
}

/**
 * 日期格式化
 */
Date.prototype.Format = function(format) {
	var fmt = format || "yyyy-MM-dd hh:mm:ss";
	var o = {
		"M+" : this.getMonth() + 1, // 月份
		"d+" : this.getDate(), // 日
		"h+" : this.getHours(), // 小时
		"m+" : this.getMinutes(), // 分
		"s+" : this.getSeconds(), // 秒
		"q+" : Math.floor((this.getMonth() + 3) / 3), // 季度
		"S" : this.getMilliseconds() // 毫秒
	};
	if (/(y+)/.test(fmt))
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "")
				.substr(4 - RegExp.$1.length));
	for ( var k in o)
		if (new RegExp("(" + k + ")").test(fmt))
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
}
$.fn.serializeObject = function() {
	 var o = {};
	 var a = this.serializeArray();
	 $.each(a, function() {
	 if (o[this.name] !== undefined) {
	 if (!o[this.name].push) {
	 o[this.name] = [o[this.name]];
	}
	 o[this.name].push(this.value || '');
	 } else {
	 o[this.name] = this.value || '';
	}
	});
	 return o;
};