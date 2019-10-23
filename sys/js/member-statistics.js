/**
 * 
 */
$(function(){
	
	$('.date-picker').datepicker({
		autoclose: true,
		todayHighlight: true
	});
	
	$.post(contextpath+"/sys/statistics/initMemberRegister.do",{},function(json){
		 $('#spanDay').html(json.day);
		 $('#spanWeek').html(json.week);
		 $('#spanMonth').html(json.month);
		 $('#spanYear').html(json.year);
		 $('#spanAll').html(json.all);
	});
	
	getHighcharts($('#container1'),new Object()); 
	$("#queryBtn").click(function(){
		var param = new Object();
		var b = $('#start-date').val();
		var e = $('#end-date').val();
		if(b=="" || e =="")return alert("请选择时间段!");
		param.b = new Date(b );
		param.e = new Date(e );
		$.post(contextpath+"/sys/statistics/customMemberRegister.do",param,function(json){
			
			getHighcharts($('#container1'),json); 
			
		});
		
		
	});
});
function getHighcharts(con,chart){
	  con.highcharts({
	        title: {
	            text: '区间报表曲线图',
	            x: -20 //center
	        },
	        credits:{
				enabled:false // 禁用版权信息
			},
	        xAxis: {
	            categories: chart.categories?chart.categories:["xxxx-xx-xx"]
	        },
	        yAxis: {
	            title: {
	                text: '注册人数(位)'
	            },
	            plotLines: [{
	                value: 0,
	                width: 1,
	                color: '#808080'
	            }]
	        },
	        tooltip: {
	            valueSuffix: '位'
	        },
	        legend: {
	            layout: 'vertical',
	            align: 'right',
	            verticalAlign: 'middle',
	            borderWidth: 0
	        },
	        series: [{
	            name: '人数',
	            data: chart.data?chart.data:[0]
	        } ]
	    });
}