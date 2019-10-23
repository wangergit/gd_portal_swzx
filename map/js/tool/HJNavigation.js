/*
*导航工具
*/
var HJNavigation = {
    map:null,
    navigation: null,
    /*
    *初始化
    */
    Init: function (map) {
        try{
            this.map = map;
			map.on("zoom-end", this.OnZoomEnd);
            //放大缩小
            this.navigation = new esri.toolbars.Navigation(map);            
            this.navigation.activate(esri.toolbars.Navigation.PAN);
            this.map.setMapCursor("pointer");
        } catch (ex) {

        }
    },   
    /*
    *缩小工具
    */
    ZoomIn: function () {
        HJMapTools.SetCurTool(this);
        this.navigation.activate(esri.toolbars.Navigation.ZOOM_IN);
        this.map.setMapCursor("crosshair");
    },
    /*
    *放大工具
    */
    ZoomOut: function () {
        HJMapTools.SetCurTool(this);
        this.navigation.activate(esri.toolbars.Navigation.ZOOM_OUT);
        this.map.setMapCursor("crosshair");
    },
    /*
   *漫游工具
   */
    Pan: function () {
        HJMapTools.SetCurTool(this);
        this.navigation.activate(esri.toolbars.Navigation.PAN);
        this.map.setMapCursor("pointer");
    },
	/*
    *全图显示
    */
    zoomToFullExtent: function () {
        HJMapTools.SetCurTool(this);
        this.navigation.zoomToFullExtent();
        this.map.setMapCursor("pointer");
    },
    /*
    *前一视图
    */
    zoomToPrevExtent: function () {
        HJMapTools.SetCurTool(this);
        this.navigation.zoomToPrevExtent();
        this.map.setMapCursor("pointer");
    },
    /*
    *后一视图
    */
    zoomToNextExtent: function () {
        HJMapTools.SetCurTool(this);
        this.navigation.zoomToNextExtent();
        this.map.setMapCursor("pointer");
    },
	/*
	*放在一级
	*/
	ZoomOutCmd:function(){
		if(this.map.getZoom()<this.map.getMaxZoom())
		{
			this.map.setZoom(this.map.getZoom()+1);
		}
	},
	/*
	*缩小一级
	*/
	ZoomInCmd:function(){
		if(this.map.getZoom()>this.map.getMinZoom()){
			this.map.setZoom(this.map.getZoom()-1);
		}
	},
	/*
	*向左移动
	*/
	PanLeft:function(){
		this.map.panLeft();
	},
	/*
	*向右移动
	*/
	PanRight:function(){
		this.map.panRight();
	},
	/*
	*向上移动
	*/
	PanUp:function(){
		this.map.panUp();
	},
	/*
	*向下移动
	*/
	PanDown:function(){
		this.map.panDown();
	},
	/*
	*地图缩放，调整进度条
	*/
	OnZoomEnd:function(evt){
		
			var pos=(HJMap.map.getMaxZoom() - evt.level)*7+"px";
			$(".toolbarDiv_SlipPos").css("top",pos);
		
	},
    /*
    *释放资源
    */
    Dispose: function () {   
        this.navigation.activate(esri.toolbars.Navigation.PAN);
        this.map.setMapCursor("default");
    }
};