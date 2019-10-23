/*
 * 要素编辑服务
 */
var FeatureServeice = {

		map:null,
	    //查询服务地址
	    identifyUrl: null,
		//查询工具
	    identifyTask: null,
	    //查询参数
	    identifyParams: null,
	    //事件句柄
	    clickHandler:null,
	    //是否停用点击查询
	    isStop:false,

		/*
		 *初化工具
		 */
		Init: function (map,url) {
			this.map = map;
	        this.identifyUrl = url;
	        //设置当前工具
	        HJMapTools.SetCurTool(this);
	        //设置鼠标样式
	        this.map.setMapCursor("help");
	        
			require([  
				"esri/tasks/IdentifyTask",
				"esri/tasks/IdentifyParameters",         
				"dojo/dom-construct",
				"dojo/domReady!"
				], function (       
						IdentifyTask, 
						IdentifyParameters,      
						domConstruct
				) {
				/*
				 *创建identify查询工具
				 */
				FeatureServeice.clickHandler = FeatureServeice.map.on("click", FeatureServeice.executeIdentifyTask);
				//create identify tasks and setup parameters
				FeatureServeice.identifyTask = new IdentifyTask(FeatureServeice.identifyUrl);

				//查询参数设置
				FeatureServeice.identifyParams = new IdentifyParameters();
				FeatureServeice.identifyParams.tolerance = 3;
				FeatureServeice.identifyParams.returnGeometry = true;
				FeatureServeice.identifyParams.layerIds = FeatureServeice.layerIds;
				FeatureServeice.identifyParams.layerOption = IdentifyParameters.LAYER_OPTION_ALL;
				FeatureServeice.identifyParams.width = FeatureServeice.map.width;
				FeatureServeice.identifyParams.height = FeatureServeice.map.height;
			});
		},
		/*
		 *查询
		 */
		executeIdentifyTask: function (event) {
			if(FeatureServeice.isStop){
				FeatureServeice.isStop=false;
				return;
			}
			FeatureServeice.identifyParams.geometry = event.mapPoint;
			FeatureServeice.identifyParams.mapExtent = FeatureServeice.map.extent;
			parent.FeatureTool.showWait();
			var deferred = FeatureServeice.identifyTask
			.execute(FeatureServeice.identifyParams)
			.addCallback(function (response) {
				// response is an array of identify result objects
				// Let's return an array of features.
				// TODO:something
				/*
				 * 获取Feature 填充编辑框
				 */
				/*console.log(HJMap);
				console.log(response);
				console.log(FeatureServeice.IdentifyInfo);*/
				
				parent.FeatureTool.show(ConfigUtil.getFeatures(response));
				return dojo._base.array.map(response, FeatureServeice.IdentifyInfo);
			});
//			FeatureServeice.map.infoWindow.setFeatures([deferred]);
//			FeatureServeice.map.infoWindow.show(event.mapPoint);
		},
		
		Dispose: function () {
	        if (FeatureServeice.clickHandler) {
	            dojo.disconnect(FeatureServeice.clickHandler);
	        }
	        //设置鼠标样式
	        this.map.setMapCursor("default");
	    },

		editFeature:function(data){
			if(data){
				
			}
		},

		saveFeature:function(){
			var data = {};
			$.post("",data,function(){
				
			});
		},

		openSearchModel:function(){

		},

		searchFeatureInfos:function(param){
			
		}
}

var ConfigUtil = {
//		layerids: [9,10,14,18,28,29,38,39,40,41,45,60,64,65,69,70,71,72,73],
		layerids:[22,23,25,26,27,28,30,31,32,33,34,35,36,37,38,39,40,41,42,44,45,46,47,49,50,51,52,53,54,55,56,57,59,60,61,62,63,64,65,66,67,68],
		
		getFeatures: function(responses){
			features = new Array();
			$(responses).each(function(){
				if(ConfigUtil.layerids.indexOf(this.layerId)!= -1 ){
					features.push(this);
				}
			});
			return features;
		}
}
