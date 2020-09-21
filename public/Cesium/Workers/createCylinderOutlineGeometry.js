define(["./when-54c2dc71","./Check-6c0211bc","./Math-fc8cecf5","./Cartesian2-bddc1162","./Transforms-43808565","./RuntimeError-2109023a","./WebGLConstants-76bb35d1","./ComponentDatatype-6d99a1ee","./GeometryAttribute-49698167","./GeometryAttributes-4fcfcf40","./IndexDatatype-53503fee","./GeometryOffsetAttribute-7350d9af","./CylinderGeometryLibrary-b0214ab1"],function(h,t,e,v,A,i,r,R,G,O,V,C,L){"use strict";var g=new v.Cartesian2;function f(t){var e=(t=h.defaultValue(t,h.defaultValue.EMPTY_OBJECT)).length,i=t.topRadius,r=t.bottomRadius,a=h.defaultValue(t.slices,128),n=Math.max(h.defaultValue(t.numberOfVerticalLines,16),0);this._length=e,this._topRadius=i,this._bottomRadius=r,this._slices=a,this._numberOfVerticalLines=n,this._offsetAttribute=t.offsetAttribute,this._workerName="createCylinderOutlineGeometry"}f.packedLength=6,f.pack=function(t,e,i){return i=h.defaultValue(i,0),e[i++]=t._length,e[i++]=t._topRadius,e[i++]=t._bottomRadius,e[i++]=t._slices,e[i++]=t._numberOfVerticalLines,e[i]=h.defaultValue(t._offsetAttribute,-1),e};var d={length:void 0,topRadius:void 0,bottomRadius:void 0,slices:void 0,numberOfVerticalLines:void 0,offsetAttribute:void 0};return f.unpack=function(t,e,i){e=h.defaultValue(e,0);var r=t[e++],a=t[e++],n=t[e++],o=t[e++],u=t[e++],s=t[e];return h.defined(i)?(i._length=r,i._topRadius=a,i._bottomRadius=n,i._slices=o,i._numberOfVerticalLines=u,i._offsetAttribute=-1===s?void 0:s,i):(d.length=r,d.topRadius=a,d.bottomRadius=n,d.slices=o,d.numberOfVerticalLines=u,d.offsetAttribute=-1===s?void 0:s,new f(d))},f.createGeometry=function(t){var e=t._length,i=t._topRadius,r=t._bottomRadius,a=t._slices,n=t._numberOfVerticalLines;if(!(e<=0||i<0||r<0||0===i&&0===r)){var o,u,s=2*a,f=L.CylinderGeometryLibrary.computePositions(e,i,r,a,!1),d=2*a;0<n&&(o=Math.min(n,a),u=Math.round(a/o),d+=o);for(var c=V.IndexDatatype.createTypedArray(s,2*d),l=0,b=0;b<a-1;b++)c[l++]=b,c[l++]=b+1,c[l++]=b+a,c[l++]=b+1+a;if(c[l++]=a-1,c[l++]=0,c[l++]=a+a-1,c[l++]=a,0<n)for(b=0;b<a;b+=u)c[l++]=b,c[l++]=b+a;var m=new O.GeometryAttributes;m.position=new G.GeometryAttribute({componentDatatype:R.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:f}),g.x=.5*e,g.y=Math.max(r,i);var p,y,_=new A.BoundingSphere(v.Cartesian3.ZERO,v.Cartesian2.magnitude(g));return h.defined(t._offsetAttribute)&&(e=f.length,p=new Uint8Array(e/3),y=t._offsetAttribute===C.GeometryOffsetAttribute.NONE?0:1,C.arrayFill(p,y),m.applyOffset=new G.GeometryAttribute({componentDatatype:R.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:p})),new G.Geometry({attributes:m,indices:c,primitiveType:G.PrimitiveType.LINES,boundingSphere:_,offsetAttribute:t._offsetAttribute})}},function(t,e){return h.defined(e)&&(t=f.unpack(t,e)),f.createGeometry(t)}});
