/**
 * 
 */
$(function(){
	
	$('.date-picker').datepicker({
		autoclose: true,
		todayHighlight: true
	});
	$.post(contextpath+"/sys/statistics/initAccess.do",{},function(json){
		
		getHighcharts(json);
		
	});
	$("#queryBtn").click(function(){
		var param = new Object();
		var b = $('#start-date').val();
		var e = $('#end-date').val();
		if(b)
			param.b = new Date(b );
		if(e)
			param.e = new Date(e );
		$.post(contextpath+"/sys/statistics/initAccess.do",param,function(json){
			
			getHighcharts(json);
			
		});
	});

});
function getHighcharts(result){ 
		
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
	    $('#container').highcharts({
	        chart: {
	            plotBackgroundColor: null,
	            plotBorderWidth: null,
	            plotShadow: false
	        },
	        credits:{
				enabled:false // 禁用版权信息
			},
	        title: {
	            text: result.title +' 网站访问统计'
	        },
	        tooltip: {
	            pointFormat: '访问比例: <b>{point.percentage:.1f}% </b> <b>访问次数：{point.e}(次)</b>'
	        },
	        plotOptions: {
	            pie: {
	                allowPointSelect: true,
	                cursor: 'pointer',
	                dataLabels: {
	                    enabled: true,
	                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
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