 
function Page(pageSize,container,instanceName){
//	var com = new CommonUtil.CompWS();
	this.name = instanceName;
	this.pageSize = pageSize ;
	this.container = container;
	this.cols = [];
	this.current = 1;
	this.dataList =null;
	this.currentNum = 0;
	this.all=0;
	this.params = "";
	if(this.instanceListenner){
		this.instanceListenner();
	}
	this.init();

}
Page.prototype.PageHideRoad = function(pageSize){
		this.pageSize = pageSize;
		this.reload();
}
/*
 *
 */
Page.prototype.init = function(){
	this.conObj = document.getElementById(this.container);
	if(!this.conObj){
		alert("can not find container");
		return false;
	}

	this.table = document.createElement("table");
	this.table.setAttribute("id","gridTable",0);
	this.table.setAttribute("width","96%",0);
	this.table.setAttribute("align","center",0);
	this.table.className="dpTable text-overflow";
	this.conObj.innerHTML="";
	this.conObj.appendChild(this.table);

};

Page.prototype.setWaiter=function(){

	var tbody = this.table.tBodies[0];
	if(tbody){
		while(tbody.rows[0]){
			if(tbody.rows[0].removeNode){
				tbody.rows[0].removeNode(true);
			}else{
				tbody.rows[0].parentNode.removeChild(tbody.rows[0])
			}
		}
		if(!this.cols.length)return;
		var cell = tbody.insertRow(-1).insertCell(-1);
		cell.colSpan=this.cols.length;
		cell.innerHTML="<div class='page_waiter'></div>";
	}
};

Page.prototype.getNextPage = function(){
	return this.current+1;
};

Page.prototype.getNextPageBtn = function(){
	if(this.current <this.getPageCount()){
		return "<a href='javascript:void(0);' onclick='"+this.name+".next()'>下一页</a>";
	}else{
		return "下一页";
	}
};

Page.prototype.getPrePage = function(){
	return this.current-1;
};
Page.prototype.getPrePageBtn = function(){
	if(this.current>1){
		return "<a href='javascript:void(0);' onclick='"+this.name+".previous()'>上一页</a>";
	}else{
		return "上一页";
	}
};

Page.prototype.getFirstPage = function(){
	return 1;
};

Page.prototype.getFirstPageBtn = function(){
	if(this.current>1){
		return "<a href='javascript:void(0);'class=\"pgnext\" onclick='"+this.name+".first()'>首页</a>";
	}else{
		return "首页";
	}
};

Page.prototype.getLastPage = function(){
	return this.getPageCount();
};

Page.prototype.getLastPageBtn = function(){

	if(this.current<this.getPageCount()){
		return "<a href='javascript:void(0);' onclick='"+this.name+".last()'>最末页</a>";
	}else{
		return "最末页";
	}
	
};

Page.prototype.getPageCount = function(){
	if(this.all<this.pageSize){
		return 1;
	}
	if(this.all%this.pageSize === 0){
		return parseInt(this.all/this.pageSize);
	}
	if(this.all%this.pageSize>0){
		return parseInt(this.all/this.pageSize)+1;
	}
};

Page.prototype.next = function(){

	if(this.current < this.getPageCount()){
		this.current =  this.current +1;
		this.setWaiter();
		this.load(this.current,this.pageSize,this.params);

	}

	//this.createGrid();
};

Page.prototype.previous = function(){
	if(this.current>1){
		this.current = this.current - 1;
		this.setWaiter();
		this.load(this.current,this.pageSize,this.params);

	}

};

Page.prototype.first = function(){
	this.current =1;
	this.setWaiter();
	this.load(this.current,this.pageSize,this.params);

};

Page.prototype.last = function(){
	this.current = this.getPageCount();
	this.setWaiter();
	this.load(this.current,this.pageSize,this.params);

};
Page.prototype.createCustomBody = function(){
		if(!this.customBody)
			return;
		var html = new Array();
		for(var i=0;i<this.dataList.length;i++){
			html.push(this.customBody(this.dataList[i]));
		}
		this.conObj.innerHTML=html.join("");
}
Page.prototype.createTHead = function(){
	//debugger;
	if(this.beforeCreateTHead){
		this.beforeCreateTHead();
	}

	if(this.cols){
		var thead = this.table.createTHead();

		var row = thead.insertRow(-1);

		for(var i=0;i<this.cols.length;i++){
			var cell = row.insertCell(-1);
			var obj = this;
			cell.innerHTML=this.cols[i].title;
			if(this.cols[i].width)
				cell.style.width=this.cols[i].width;
			if(this.cols[i].isSort){
				cell.setAttribute("sortCol",this.cols[i].col);
				cell.setAttribute("index",this.cols[i].objectIndex);
				cell.onclick = function(){
					obj.sort(this);  //排序功能
				};
			}
		}
	}

	this.setWaiter();
	if(this.afterCreateTHead){
		this.afterCreateTHead();
	}
};

Page.prototype.createGrid =  function(){

	var me = this;
	if(this.beforeCreateGrid){
		this.beforeCreateGrid();
	}
	var tbody = this.table.tBodies[0];

	if(!tbody){
		tbody = document.createElement("tbody");
		this.table.appendChild(tbody);
	}

	if(tbody){

		while(tbody.rows[0]){
			if(tbody.rows[0].removeNode){
				tbody.rows[0].removeNode(true);
			}else{
				tbody.rows[0].parentNode.removeChild(tbody.rows[0]);
			}
		}
		var pageDataList = this.dataList;
		if(pageDataList.length==0){
			var row = tbody.insertRow(-1); 
			var cell = row.insertCell(-1);
			cell.colSpan = me.cols.length;
			cell.align = "center";
			cell.innerHTML = "暂无相关信息";
		}

		var className = "odd";
		for(var j=0;j<pageDataList.length;j++){
			var row = tbody.insertRow(-1);
			row.className=className;
			row.jl_cn=className;
			row.style.cursor="pointer";
			if(className=="odd"){
				className="even";
			}else{
				className="odd";
			}
			for(var t =0;t<this.cols.length;t++){
				cell = row.insertCell(-1); 
				cell.innerHTML = this.cols[t].getCol(pageDataList[j]);

			}
			//扩展 onclick 事件
			if(row.attachEvent){
				row.id=pageDataList[j].id
				row.attachEvent("onclick",
					function(){
						if(me.processRowClick){
							me.processRowClick(event);
						}
					}
				);
			}else if(row.addEventListener){
				row.addEventListener("click",
					function(){
						if(me.processRowClick){
							me.processRowClick(event);
						}
					}
					,false
				);
			}
			if(me.onCreateRow){
				me.onCreateRow(row,pageDataList[j]);
			}

		}
		if(me.onRowClick && this.table.tBodies[0].rows[0]){
			this.table.tBodies[0].rows[0].className="";
			this.table.tBodies[0].rows[0].style.backgroundColor ="#BDB76B";
		}
	}
	if(this.afterCreateGrid){
		this.afterCreateGrid();
	}

};

Page.prototype.processRowClick=function(event){
    var evt = event||window.event;
    var src = evt.srcElement||evt.target;
    var obj = src.parentNode;
    if(obj.tagName!="TR"){
    	obj = obj.parentNode;
        if(obj.tagName!="TR"){
        	obj = obj.parentNode;
            if(obj.tagName!="TR"){
	        	obj = obj.parentNode;
            }
        }
    }
    if(obj.tagName=="TR"){
    	var rows = this.table.tBodies[0].rows;
    	for(var i=0;i<rows.length;i++){
    		rows[i].className = rows[i].jl_cn;
    		rows[i].style.backgroundColor="";
    	}
    	obj.className="";
    	obj.style.backgroundColor ="#ADFF2F";
        if(this.onRowClick){
        	
        	this.onRowClick(obj);
        }
    }
}

Page.prototype.loadReply = function(data){
	this.dataList = data.data;
	this.all = data.recordsTotal;
	this.currentNum = data.recordsTotal;
	this.createGrid();
	this.createNumBar();
	this.createCustomBody();
	if(this.afterLoad){
		this.afterLoad();
	}
	if(resizeGridTable)
		resizeGridTable();
};

Page.prototype.gotoPage = function(n){
	var all_s = document.getElementById("all_sel");
	if(all_s) all_s.checked="";
	this.current = n;
	this.load(this.current,this.pageSize,this.params);
	this.setWaiter();
};

Page.prototype.sortDESC = function(index,prop){
	var dataList = this.dataList;
	//$alert(prop);
	//debugger;
	for(var j=0;j<dataList.length;j++){

		for(var i=0;i<(dataList.length-j);i++){
			if(i>0){
				var data1;
				var data0;
				if(dataList[i].length){
					data1 = dataList[i][index];
					data0 = dataList[i-1][index];
				}else{
					data1 = dataList[i];
					data0 = dataList[i-1];
				}
				if(data1[prop]>data0[prop]){
					var tempData = dataList[i-1];
					dataList[i-1]=dataList[i];
					dataList[i]=tempData;
				}
			}
		}
	}
	this.data = dataList;
	this.createGrid();
};

Page.prototype.sortASC = function(index,prop){
	var dataList = this.dataList;

	//debugger;
	for(var j=0;j<dataList.length;j++){

		for(var i=0;i<(dataList.length-j);i++){
			if(i>0){
				var data1;
				var data0;
				if(dataList[i].length){
					data1 = dataList[i][index];
					data0 = dataList[i-1][index];
				}else{
					data1 = dataList[i];
					data0 = dataList[i-1];
				}
				if(data1[prop]<data0[prop]){
					var tempData = dataList[i-1];
					dataList[i-1]=dataList[i];
					dataList[i]=tempData;
				}
			}
		}
	}

	this.data = dataList;
	this.createGrid();
};

Page.prototype.sort = function(obj){
	//debugger;
	if(window.event){
		obj = event.srcElement;
	}

	if(obj.tagName == "IMG" ){
		obj = obj.parentElement;
	}

	if(this.currentSortImg){
		this.currentSortImg.style.display="none";
	}

	var prop = obj.getAttribute("sortCol");
	var notes = obj.childNodes;

	var img;

	for(var i=0;i<notes.length;i++){
		if(notes[i].tagName == "IMG" && notes[i].name=="sort"){
			img = notes[i];
		}
	}

	//debugger;
	if(img){
		this.currentSortImg = img;
		img.style.display="";
		if(img.getAttribute("sortType") =="asc"){

			this.sortDESC(obj.getAttribute("index"),prop);
			img.setAttribute("sortType","desc",0);
			img.src=context+"/images/grid/desc.gif"
		}else if(img.getAttribute("sortType") == "desc"){

			this.sortASC(obj.getAttribute("index"),prop);
			img.setAttribute("sortType","asc",0);
			img.src=context+"/images/grid/asc.gif";
		}
	}else{
		this.sortDESC(obj.getAttribute("index"),prop);
		var image = new Image("","sort",context+"/images/grid/desc.gif");
		var imgObj = image.newImage();
		imgObj.setAttribute("sortType","desc",0);
		obj.appendChild(imgObj);
		this.currentSortImg = imgObj;
	}


	//alert(obj.outerHTML);
};

Page.prototype.pageAll = function(objId){
	var obj = document.getElementById(objId);
	if(obj){
		obj.innerHTML = this.all;
	}
};

Page.prototype.setNumBar = function(barCon){
	this.numBar = barCon;
};

Page.prototype.createNumBar = function(){

	var barConObj;
	if(this.numBar){
		barConObj = document.getElementById(this.numBar);
	}
	if(barConObj){
		if(this.current > this.getPageCount()){
			this.current = this.getPageCount();
		}
		var start = this.current - 5;
		var end = this.current + 5;
		var barStr ="";
		barStr="总数"+this.all+"条  当前页记录数："+this.currentNum+" 共"+this.getPageCount()+"页/第"+this.current+"页   ";
		for(var i=start;i<=end;i++){
			if(i>0 && i<=this.getPageCount()){
				if(i==this.current){
					barStr+="<b style='color:red'>"+i+"</b>";
				}else{
					barStr+=" <label class=\"page_num  page-number   \" style=\"cursor:pointer;\" onmouseover=\"this.style.textDecoration='underline'\" onmouseout=\"this.style.textDecoration='none'\" onclick=\""+this.name+".gotoPage("+i+")\">"
					barStr+= i;
					barStr+="</label> ";	
				}

			}
		}
		barStr += "    "+this.getFirstPageBtn() +" "+ this.getPrePageBtn() +" "+ this.getNextPageBtn() +" "+ this.getLastPageBtn();
		barConObj.align="right";
		barConObj.style.width="96%";
		barConObj.innerHTML=barStr;
	}
};

Page.prototype.appendCol = function(col){
	this.cols.push(col);
};


Page.prototype.create = function(){
	if(this.beforeCreate){
		this.beforeCreate();
	}

	this.createTHead();
	if(this.beforeLoad){
		this.beforeLoad();
	}

	//debugger;
	this.load(1,this.pageSize);

};

Page.prototype.reload = function(){

	this.load(this.current,this.pageSize,this.params);
	//this.load(1,this.pageSize);
    //this.gotoPage(1);
}
Page.prototype.reloadThisPage = function(){
	this.gotoPage(this.current);
}
//Page.prototype.reloadNewPage = function(number){
//	this.gotoPage(this.number);
//}

function SimpleCol(title,index,col,isSort,w){
	this.title = title;
	this.objectIndex = index;
	this.col = col;
	this.isSort = isSort;
	if(w) this.width = w;
	this.getCol = function(data){

		try {
			if (typeof data[index][this.col] == "undefined") {
				return data[this.col]?data[this.col]:"";
			}
			return data[index][this.col]?data[index][this.col]:"";
		} catch (Ex) {
                        if(typeof data[this.col] =="number"){
                          return data[this.col];
                        }
			return data[this.col]?data[this.col]:"";
		}
	};
}
function ArrayCol(title,col,isSort){
	this.title = title;
	this.col = col;
	this.isSort = isSort;
	this.getCol = function(data){
		return data[this.col];
	}


}
/*function Image(id,name,src){
	this.id = id;
	this.name = name;
	this.src = src;
};

Image.prototype.newImage = function(){
	var img = document.createElement("IMG");
	img.setAttribute("name",this.name,0);
	img.setAttribute("id",this.id,0);
	img.setAttribute("src",this.src,0);
	return img;
};*/

/**
 *需要Date的拓展
 */
function DateCol(title,index,col,isSort,format){
	this.title = title;
	this.objectIndex = index;
	this.col = col;
	this.isSort = isSort;
	this.getCol = function(data){
		var value = null;
		if(data.length){
			value = data[index][this.col];
		}else{
			value = data[this.col];
		}
		if(value)
			return value.format(format);
		return "-";
	};
} 


function resizeGridTable(){
	var gridTable = document.getElementById("gridTable");
	if(!gridTable)return;
	var cw = gridTable.clientWidth+"px";
	var con = document.getElementById("gridOperator");
	var menu = document.getElementById("menu");
	var gridTools = document.getElementById("gridTools");
	var mybody = document.getElementById("mybody");
	if(con) con.style.width =  cw;
	if(gridTools) gridTools.style.width =cw;
	if(menu) menu.style.width = cw;
	if(mybody) mybody.style.width =cw;
}
window.onresize = function (){
	if(document.getElementById("gridTable")){
		resizeGridTable();
	};
	 
};
//CommonUtil.CompWS =function() {
//    var de = document.documentElement,db = document.body;
//    var L = (window.pageXOffset|| (de&&de.scrollLeft) || db.scrollLeft || 0);
//    var T = (window.pageYOffset|| (de&&de.scrollTop) || db.scrollTop || 0);
//    var W = (window.innerWidth || (de&&de.clientWidth) || db.clientWidth || 0);
//    var H = (window.innerHeight|| (de&&de.clientHeight) || db.clientHeight || 0);
//    var pW = (db.scrollWidth || db.offsetWidth || 0);
//    var pH = (db.scrollHeight || db.offsetHeight || 0);
//    return { top: T, left: L, width: W, height: H, pWidth:pW, pHeight:pH };
//}