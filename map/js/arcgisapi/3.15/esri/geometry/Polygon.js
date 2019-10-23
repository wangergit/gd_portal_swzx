// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
//>>built
define("esri/geometry/Polygon","dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/has ../kernel ../lang ../SpatialReference ./Geometry ./Point ./Extent ./mathUtils ../srUtils".split(" "),function(z,p,l,A,q,B,E,C,r,w,s,D){var x={type:"polygon",rings:null},n=z(C,{declaredClass:"esri.geometry.Polygon",constructor:function(a){l.mixin(this,x);this.rings=[];this._ring=0;a&&(l.isArray(a)?this.rings=l.isArray(a[0][0])?a:[a]:a.rings?l.mixin(this,a):this.spatialReference=a,this.spatialReference&&(this.spatialReference=
D.createSpatialReference(this.spatialReference)));this.verifySR()},addRing:function(a){this.clearCache();this._ring=this.rings.length;this.rings[this._ring]=[];l.isArray(a[0])?p.forEach(a,this._addPointArr,this):p.forEach(a,this._addPoint,this);return this},_addPointArr:function(a){this.rings[this._ring].push(a)},_addPoint:function(a){this.rings[this._ring].push([a.x,a.y])},_insertPoints:function(a,b){this.clearCache();this._ring=b;this.rings[this._ring]||(this.rings[this._ring]=[]);p.forEach(a,this._addPoint,
this)},_validateInputs:function(a,b){return null!==a&&void 0!==a&&(0>a||a>=this.rings.length)||null!==b&&void 0!==a&&(0>b||b>=this.rings[a].length)?!1:!0},getPoint:function(a,b){if(this._validateInputs(a,b))return new r(this.rings[a][b],this.spatialReference)},setPoint:function(a,b,c){if(this._validateInputs(a,b))return this.clearCache(),this.rings[a][b]=[c.x,c.y],this},insertPoint:function(a,b,c){if(this._validateInputs(a)&&B.isDefined(b)&&0<=b&&b<=this.rings[a].length)return this.clearCache(),this.rings[a].splice(b,
0,[c.x,c.y]),this},removeRing:function(a){if(this._validateInputs(a,null)){this.clearCache();a=this.rings.splice(a,1)[0];var b,c=a.length,e=this.spatialReference;for(b=0;b<c;b++)a[b]=new r(a[b],e);return a}},removePoint:function(a,b){if(this._validateInputs(a,b))return this.clearCache(),new r(this.rings[a].splice(b,1)[0],this.spatialReference)},getExtent:function(){var a;a=this.getCacheValue("_extent");var b=this.getCacheValue("_partwise");if(a)return a=new w(a),a._partwise=b,a;a=this.rings;var c=
a.length;if(c&&a[0].length){var e,d,f,h,g,m,k,n,y=h=a[0][0][0],l=g=a[0][0][1],p=Math.min,q=Math.max,r=this.spatialReference,b=[],s,t,u,v;for(m=0;m<c;m++){e=a[m];s=t=e[0]&&e[0][0];u=v=e[0]&&e[0][1];n=e.length;for(k=0;k<n;k++)d=e[k],f=d[0],d=d[1],y=p(y,f),l=p(l,d),h=q(h,f),g=q(g,d),s=p(s,f),u=p(u,d),t=q(t,f),v=q(v,d);b.push(new w({xmin:s,ymin:u,xmax:t,ymax:v,spatialReference:r?r.toJson():null}))}a={xmin:y,ymin:l,xmax:h,ymax:g,spatialReference:r?r.toJson():null};b=1<b.length?b:null;this.setCacheValue("_extent",
a);this.setCacheValue("_partwise",b);a=new w(a);a._partwise=b;return a}},contains:function(a){var b=this.rings,c,e=!1,d,f,h,g,m,k,n=b.length;c=this.spatialReference;d=a.spatialReference;var l=a.x;a=a.y;c&&(d&&!c.equals(d)&&c._canProject(d))&&(a=c.isWebMercator()?r.lngLatToXY(l,a):r.xyToLngLat(l,a,!0),l=a[0],a=a[1]);for(k=0;k<n;k++){c=b[k];h=c.length;for(m=g=0;m<h;m++)if(g++,g===h&&(g=0),d=c[m],f=c[g],(d[1]<a&&f[1]>=a||f[1]<a&&d[1]>=a)&&d[0]+(a-d[1])/(f[1]-d[1])*(f[0]-d[0])<l)e=!e}return e},getCentroid:function(){var a=
this.getCacheValue("_centroid");if(void 0!==a)return a;var a=this.rings,b,c,e,d=[],f,h;p.forEach(a,function(a){b=c=e=0;p.forEach(a,function(d,k){k<a.length-1&&(f=a[k+1],h=d[0]*f[1]-f[0]*d[1],b+=(d[0]+f[0])*h,c+=(d[1]+f[1])*h,e+=h)});0<e&&(e*=-1);e&&d.push([b,c,e/2])});d.sort(function(a,b){return a[2]-b[2]});b=c=void 0;if(d[0])a=6*d[0][2],b=d[0][0]/a,c=d[0][1]/a;else if(a=a[0]&&a[0].length?this._getLineCentroid(a[0]):null)b=a.x,c=a.y;a=isNaN(b)||isNaN(c)?null:new r(b,c,this.spatialReference);this.setCacheValue("_centroid",
a);return a},_getLineCentroid:function(a){var b,c=0,e=0,d=0,f,h,g={x:0,y:0},m={x:0,y:0},k,n=a.length,l;for(k=0;k<n-1;k++)f=a[k],h=a[k+1],f&&h&&(g.x=f[0],g.y=f[1],m.x=h[0],m.y=h[1],b=s.getLength(g,m),0<b&&(c+=b,f=s.getMidpoint(f,h),e+=b*f[0],d+=b*f[1]));0<c?l={x:e/c,y:d/c}:a[0]&&(l={x:a[0][0],y:a[0][1]});return l},isClockwise:function(a){var b=0,c,e=a.length,d=l.isArray(a[0])?function(a,b){return a[0]*b[1]-b[0]*a[1]}:function(a,b){return a.x*b.y-b.x*a.y};for(c=0;c<e;c++)b+=d(a[c],a[(c+1)%e]);return 0>=
b/2},isSelfIntersecting:function(a){a=a||this;var b,c,e,d,f,h,g,m=a.rings.length,k;for(e=0;e<m;e++){for(b=0;b<a.rings[e].length-1;b++){f=[[a.rings[e][b][0],a.rings[e][b][1]],[a.rings[e][b+1][0],a.rings[e][b+1][1]]];for(c=e+1;c<m;c++)for(d=0;d<a.rings[c].length-1;d++)if(h=[[a.rings[c][d][0],a.rings[c][d][1]],[a.rings[c][d+1][0],a.rings[c][d+1][1]]],(g=s._getLineIntersection2(f,h))&&!(g[0]===f[0][0]&&g[1]===f[0][1]||g[0]===h[0][0]&&g[1]===h[0][1]||g[0]===f[1][0]&&g[1]===f[1][1]||g[0]===h[1][0]&&g[1]===
h[1][1]))return!0}d=a.rings[e].length;if(!(4>=d))for(b=0;b<d-3;b++){k=d-1;0===b&&(k=d-2);f=[[a.rings[e][b][0],a.rings[e][b][1]],[a.rings[e][b+1][0],a.rings[e][b+1][1]]];for(c=b+2;c<k;c++)if(h=[[a.rings[e][c][0],a.rings[e][c][1]],[a.rings[e][c+1][0],a.rings[e][c+1][1]]],(g=s._getLineIntersection2(f,h))&&!(g[0]===f[0][0]&&g[1]===f[0][1]||g[0]===h[0][0]&&g[1]===h[0][1]||g[0]===f[1][0]&&g[1]===f[1][1]||g[0]===h[1][0]&&g[1]===h[1][1]))return!0}}return!1},toJson:function(){var a={rings:l.clone(this.rings)},
b=this.spatialReference;b&&(a.spatialReference=b.toJson());return a}});n.defaultProps=x;n.createEllipse=function(a){var b=a.center.x,c=a.center.y,e=a.longAxis,d=a.shortAxis,f=a.numberOfPoints,h=a.map,g,m,k;a=[];var l=2*Math.PI/f;for(m=0;m<f;m++)g=Math.cos(m*l),k=Math.sin(m*l),g=h.toMap({x:e*g+b,y:d*k+c}),a.push(g);a.push(a[0]);b=new n(h.spatialReference);b.addRing(a);return b};n.createCircle=function(a){return n.createEllipse({center:a.center,longAxis:a.r,shortAxis:a.r,numberOfPoints:a.numberOfPoints,
map:a.map})};n.fromExtent=function(a){var b=a.normalize();a=a.spatialReference;return new n({rings:p.map(b,function(a){return[[a.xmin,a.ymin],[a.xmin,a.ymax],[a.xmax,a.ymax],[a.xmax,a.ymin],[a.xmin,a.ymin]]}),spatialReference:a?a.toJson():null})};A("extend-esri")&&(l.setObject("geometry.Polygon",n,q),q.geometry.defaultPolygon=x,q.geometry.createEllipse=n.createEllipse,q.geometry.createCircle=n.createCircle,q.geometry.isClockwise=n.prototype.isClockwise,q.geometry.polygonSelfIntersecting=n.prototype.isSelfIntersecting);
return n});