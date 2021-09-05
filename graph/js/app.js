(function(){"use strict";var e={869:function(e,t,i){var n=i(963),s=i(252);const r={class:"container",ref:"container"};function o(e,t){return(0,s.wg)(),(0,s.j4)("div",r,null,512)}function a(e){return e instanceof h}class h{constructor(e){Object.defineProperty(this,"_datas",{enumerable:!0,configurable:!0,writable:!0,value:[]});const t=arguments.length;if(1===t){const e=arguments[0];if(a(e)){const t=e.size();for(let i=0;i<t;i++)this._datas.push(e.get(i))}else if(Array.isArray(e)){const t=e.length;for(let i=0;i<t;i++)this._datas.push(e[i])}else null!==e&&this._datas.push(e)}else if(t>1)for(let i=0;i<t;i++)this._datas.push(arguments[i])}push(...e){const t=e.length;for(let i=0;i<t;i++)this.add(e[i])}pop(){return this._datas.pop()}shift(){return this._datas.shift()}unshift(...e){this._datas.unshift.apply(this._datas,e)}size(){return this._datas.length}isEmpty(){return 0===this._datas.length}add(e,t){void 0===t?this._datas.push(e):this._datas.splice(t,0,e)}addAll(e){if(Array.isArray(e)){const t=e,i=t.length;for(let e=0;e<i;e++)this._datas.push(t[e])}else if(a(e)){const t=e,i=t.size();for(let e=0;e<i;e++)this._datas.push(t.get(e))}}get(e){return this._datas[e]}slice(e,t){return new h(this._datas.slice(e,t))}remove(e){const t=this._datas.indexOf(e);if(t>=0)return this.removeAt(t),t}set(e,t){return this._datas[e]=t}clear(){return this._datas.splice(0,this._datas.length)}contains(e){return this._datas.includes(e)}indexOf(e){return this._datas.indexOf(e)}removeAt(e){return this._datas.splice(e,1)[0]}forEach(e,t){this.each(e,t)}each(e,t){const i=this._datas.length;for(let n=0;n<i;n++){const i=this._datas[n];t?e.call(t,i,n,this):e(i,n,this)}}reverseEach(e,t){for(let i=this._datas.length-1;i>=0;i--){const n=this._datas[i];t?e.call(t,n):e(n)}}getArray(){return this._datas}toArray(e,t){if(e){const i=[],n=this._datas.length;for(let s=0;s<n;s++){const n=this._datas[s];t?e.call(t,n)&&i.push(n):e(n)&&i.push(n)}return i}return this._datas.concat()}toList(e,t){if(e){const i=new h,n=this._datas.length;for(let s=0;s<n;s++){const n=this._datas[s];t?e.call(t,n)&&i.add(n):e(n)&&i.add(n)}return i}return new h(this)}reverse(){this._datas.reverse()}sort(e){return e?this._datas.sort(e):this._datas.sort(),this}toString(){return this._datas.toString()}}class l{constructor(){Object.defineProperty(this,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Data"}),Object.defineProperty(this,"_notifier",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_id",{enumerable:!0,configurable:!0,writable:!0,value:void 0})}getId(){return this._id}setId(e){this._id=e}setNotifier(e){this._notifier=e}update(){this._notifier&&this._notifier.emitNextTick("render")}}class c extends l{constructor(){super(),Object.defineProperty(this,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Node"}),Object.defineProperty(this,"_x",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_y",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_width",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_height",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_image",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_displayName",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"_styleMap",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"_anchorX",{enumerable:!0,configurable:!0,writable:!0,value:.5}),Object.defineProperty(this,"_anchorY",{enumerable:!0,configurable:!0,writable:!0,value:.5}),Object.defineProperty(this,"_rotation",{enumerable:!0,configurable:!0,writable:!0,value:void 0})}getPostion(){return{x:this._x,y:this._y}}setPosition(e){this._x=e.x,this._y=e.y,this.update()}getWidth(){return this._width}setWidth(e){this._width=e,this.update()}getHeight(){return this._height}setHeight(e){this._height=e,this.update()}getImage(){return this._image}setImage(e){this._image=e,this.update()}getDisplayName(){return this._displayName}setDisplayName(e){this._displayName=e,this.update()}getSize(){if(void 0===this._width||void 0===this._height){const e=m(this.getImage());return{width:e.width,height:e.height}}return{width:this._width,height:this._height}}setSize(e,t){this._width=e,this._height=t}getRect(){const{x:e,y:t}=this.getPostion(),{width:i,height:n}=this.getSize();let{x:s,y:r}=this.getAnchor();return s=void 0===s?f.anchorX:s,r=void 0===r?f.anchorY:r,{x:e-i*s,y:t-n*r,width:i,height:n}}setRect(e,t,i,n){this._x=e,this._y=t,this._width=i,this._height=n,this.update()}setStyle(e,t){if(void 0!==t&&"string"===typeof e)this._styleMap.set(e,t);else if("object"===typeof e&&Object.keys(e).length>0)for(const i in e)this._styleMap.set(i,e[i]);this.update()}getStyle(e){return this._styleMap.get(e)}getAnchor(){return{x:this._anchorX,y:this._anchorY}}setAnchor(e){this._anchorX=e.x,this._anchorY=e.y,this.update()}getRotation(){return this._rotation}setRotation(e){this._rotation=e,this.update()}}class u extends l{constructor(){super(),Object.defineProperty(this,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Text"}),Object.defineProperty(this,"_x",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_y",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_width",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_height",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_styleMap",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"_anchorX",{enumerable:!0,configurable:!0,writable:!0,value:.5}),Object.defineProperty(this,"_anchorY",{enumerable:!0,configurable:!0,writable:!0,value:.5}),Object.defineProperty(this,"_rotation",{enumerable:!0,configurable:!0,writable:!0,value:void 0})}getPostion(){return{x:this._x,y:this._y}}setPosition(e){this._x=e.x,this._y=e.y,this.update()}getWidth(){return this._width}setWidth(e){this._width=e,this.update()}getHeight(){return this._height}setHeight(e){this._height=e,this.update()}getSize(){return{width:this._width,height:this._height}}setSize(e,t){this._width=e,this._height=t}getRect(){const{x:e,y:t}=this.getPostion(),{width:i,height:n}=this.getSize();let{x:s,y:r}=this.getAnchor();return s=void 0===s?f.anchorX:s,r=void 0===r?f.anchorY:r,{x:e-i*s,y:t-n*r,width:i,height:n}}setRect(e,t,i,n){this._x=e,this._y=t,this._width=i,this._height=n,this.update()}setStyle(e,t){if(void 0!==t&&"string"===typeof e)this._styleMap.set(e,t);else if("object"===typeof e&&Object.keys(e).length>0)for(const i in e)this._styleMap.set(i,e[i]);this.update()}getStyle(e){return this._styleMap.get(e)}getAnchor(){return{x:this._anchorX,y:this._anchorY}}setAnchor(e){this._anchorX=e.x,this._anchorY=e.y,this.update()}getRotation(){return this._rotation}setRotation(e){this._rotation=e,this.update()}}class d extends l{constructor(){super(),Object.defineProperty(this,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Edge"}),Object.defineProperty(this,"_styleMap",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"_source",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_target",{enumerable:!0,configurable:!0,writable:!0,value:void 0})}setStyle(e,t){if(void 0!==t&&"string"===typeof e)this._styleMap.set(e,t);else if("object"===typeof e&&Object.keys(e).length>0)for(const i in e)this._styleMap.set(i,e[i]);this.update()}getStyle(e){return this._styleMap.get(e)}setSource(e){this._source=e,this.update()}setTarget(e){this._target=e,this.update()}getSource(){return this._source}getTarget(){return this._target}}class g extends l{constructor(){super(),Object.defineProperty(this,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Shape"}),Object.defineProperty(this,"_x",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_y",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_width",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_height",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_closePath",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_styleMap",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"_segments",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"_points",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"_anchorX",{enumerable:!0,configurable:!0,writable:!0,value:.5}),Object.defineProperty(this,"_anchorY",{enumerable:!0,configurable:!0,writable:!0,value:.5}),Object.defineProperty(this,"_rotation",{enumerable:!0,configurable:!0,writable:!0,value:void 0})}getPostion(){return{x:this._x,y:this._y}}setPosition(e){this._x=e.x,this._y=e.y,this.update()}getWidth(){return this._width}setWidth(e){this._width=e,this.update()}getHeight(){return this._height}setHeight(e){this._height=e,this.update()}getPoints(){return this._points}setPoints(e){this._points=e,this.update()}getSegments(){return this._segments}setSegments(e){this._segments=e,this.update()}isClosePath(){return void 0===this._closePath||this._closePath}setClosePath(e){this._closePath=e,this.update()}getSize(){return{width:this._width,height:this._height}}setSize(e,t){this._width=e,this._height=t}getRect(){const{x:e,y:t}=this.getPostion(),{width:i,height:n}=this.getSize();let{x:s,y:r}=this.getAnchor();return s=void 0===s?f.anchorX:s,r=void 0===r?f.anchorY:r,{x:e-i*s,y:t-n*r,width:i,height:n}}setRect(e,t,i,n){this._x=e,this._y=t,this._width=i,this._height=n,this.update()}setStyle(e,t){if(void 0!==t&&"string"===typeof e&&this._styleMap.set(e,t),e&&Object.keys(e).length>0)for(const i in e)this._styleMap.set(i,e[i]);this.update()}getStyle(e){return this._styleMap.get(e)}getAnchor(){return{x:this._anchorX,y:this._anchorY}}setAnchor(e){this._anchorX=e.x,this._anchorY=e.y,this.update()}getRotation(){return this._rotation}setRotation(e){this._rotation=e,this.update()}}class f{}function b(e,t){const i=t;if(i.className){e.fillStyle=i.getStyle("shape.background")||f.backgroundColor,e.strokeStyle=i.getStyle("shape.border.color")||f.borderColor;const t=i.getStyle("shape.border.width");e.lineWidth=void 0===t||t<0?0:t,e.lineJoin=i.getStyle("shape.border.join")||f.borderJoin,e.lineCap=i.getStyle("shape.border.cap")||f.borderCap}else{const i=t;e.fillStyle=i.background||f.backgroundColor,e.strokeStyle=i.borderColor||f.borderColor,void 0===i.borderWidth||i.borderWidth<0?e.lineWidth=0:e.lineWidth=i.borderWidth,e.lineJoin=i.borderJoin||f.borderJoin,e.lineCap=i.borderCap||f.borderCap}}Object.defineProperty(f,"borderColor",{enumerable:!0,configurable:!0,writable:!0,value:"#979797"}),Object.defineProperty(f,"backgroundColor",{enumerable:!0,configurable:!0,writable:!0,value:"transparent"}),Object.defineProperty(f,"borderWidth",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(f,"font",{enumerable:!0,configurable:!0,writable:!0,value:"12px arial, sans-serif"}),Object.defineProperty(f,"align",{enumerable:!0,configurable:!0,writable:!0,value:"left"}),Object.defineProperty(f,"vAlign",{enumerable:!0,configurable:!0,writable:!0,value:"middle"}),Object.defineProperty(f,"borderJoin",{enumerable:!0,configurable:!0,writable:!0,value:"round"}),Object.defineProperty(f,"borderCap",{enumerable:!0,configurable:!0,writable:!0,value:"butt"}),Object.defineProperty(f,"fillRule",{enumerable:!0,configurable:!0,writable:!0,value:"evenodd"}),Object.defineProperty(f,"fontColor",{enumerable:!0,configurable:!0,writable:!0,value:"black"}),Object.defineProperty(f,"text",{enumerable:!0,configurable:!0,writable:!0,value:"text"}),Object.defineProperty(f,"symbolWidth",{enumerable:!0,configurable:!0,writable:!0,value:100}),Object.defineProperty(f,"symbolHeight",{enumerable:!0,configurable:!0,writable:!0,value:100}),Object.defineProperty(f,"anchorX",{enumerable:!0,configurable:!0,writable:!0,value:.5}),Object.defineProperty(f,"anchorY",{enumerable:!0,configurable:!0,writable:!0,value:.5});const _={Node:c,Text:u,Edge:d,Shape:g};function y(e){return _[e]}const p=new Map;function v(e,t){p.set(e,t)}function m(e){return p.get(e)}function w(e){return"set"+e.charAt(0).toUpperCase()+e.slice(1)}function x(e,t){let i,n;return t.pageX||t.pageY?(i=t.pageX,n=t.pageY):(i=t.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,n=t.clientY+document.body.scrollTop+document.documentElement.scrollTop),i-=e.offsetLeft,n-=e.offsetTop,{x:i,y:n}}function P(e,t,i){return!(t<e.x||t>e.x+e.width||i<e.y||i>e.y+e.height)}function j(e,t,i){const n=(e.x-t.x)*Math.cos(i)-(e.y-t.y)*Math.sin(i)+t.x,s=(e.x-t.x)*Math.sin(i)+(e.y-t.y)*Math.cos(i)+t.y;return{x:n,y:s}}class O{constructor(){Object.defineProperty(this,"_events",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_isWaiting",{enumerable:!0,configurable:!0,writable:!0,value:!1}),this._events=Object.create(null)}on(e,t){if(Array.isArray(e))for(let i=0,n=e.length;i<n;i++)this.on(e[i],t);else(this._events[e]||(this._events[e]=[])).push(t);return this}off(e,t){if(!arguments.length)return this._events=Object.create(null),this;if(Array.isArray(e)){for(let i=0,n=e.length;i<n;i++)this.off(e[i],t);return this}const i=this._events[e];if(!i)return this;if(!t)return this._events[e]=null,this;let n,s=i.length;while(s--)if(n=i[s],n===t||n.fn===t){i.splice(s,1);break}return this}once(e,t){const i=this;function n(){i.off(e,t),t.apply(i,arguments)}return n.fn=t,this.on(e,n),this}emit(e){const t=this._events[e];if(t){const e=Array.from(arguments).slice(1);for(let i=0,n=t.length;i<n;i++)t[i].apply(this,e)}return this}emitNextTick(e){this._isWaiting||(this._isWaiting=!0,setTimeout((()=>{this.emit(e),this._isWaiting=!1}),0))}}function S(e,t){const i=t;if(i.className){const i=t,n=i.getStyle("shape.border.width");void 0!==n&&e.stroke()}else{const i=t;void 0!==i.borderWidth&&e.stroke()}e.fill()}function k(e,t){const i=t.getRotation();if(i){const{x:n,y:s}=t.getPostion();e.translate(n,s),e.rotate(i),e.translate(-n,-s)}}function T(e,t){k(e,t);const{x:i,y:n,width:s,height:r}=t.getRect();if(e.translate(i,n),"Node"===t.className){const i=t.getImage();if(i&&i.endsWith(".json")){const t=m(i),n=s/t.width,o=r/t.height;e.scale(n,o)}}}function I(e,t){const{x:i,y:n,width:s,height:r}=t.getRect();e.save();const o=t;if(o.getRotation){const t=o.getRotation();if(t){const{x:i,y:n}=o.getPostion();e.translate(i,n),e.rotate(t),e.translate(-i,-n)}}e.beginPath(),e.rect(i,n,s,r),e.lineWidth=1,e.strokeStyle="#60ACFC",e.stroke(),e.closePath(),e.restore()}class N{constructor(e,t){Object.defineProperty(this,"x",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"y",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.x=e,this.y=t}add(e){return new N(this.x+e.x,this.y+e.y)}subtract(e){return new N(this.x-e.x,this.y-e.y)}}function C(e,t){let i,n,s;s="source"===t?e.getSource():e.getTarget(),i=e.getStyle(`edge.${t}.anchor.x`),n=e.getStyle(`edge.${t}.anchor.y`),i=void 0===i?f.anchorX:i,n=void 0===n?f.anchorY:n;const{x:r,y:o}=s.getPostion(),{width:a,height:h}=s.getSize(),{x:l,y:c}=s.getAnchor();return{x:r-a*l+a*i,y:o-h*c+h*n}}function M(e,t){const i=t.getSource(),n=t.getTarget();if(i&&n){e.save(),e.beginPath(),e.strokeStyle=t.getStyle("edge.color")||f.borderColor;const s=t.getStyle("edge.width")||f.borderWidth,r=t.getStyle("edge.cap"),o=t.getStyle("edge.join");e.lineJoin=o||f.borderJoin,e.lineWidth=s<=0?1:s,e.lineCap=r||f.borderCap;let a=C(t,"source"),h=C(t,"target");const l=i.getRotation(),c=n.getRotation();l&&(a=j(a,i.getPostion(),l)),c&&(h=j(h,n.getPostion(),c));const u=t.getStyle("edge.segments");if(u){const i=[...t.getStyle("edge.points")];i.unshift(a),i.push(h);const n=u.length;for(let t=0,s=0;t<n;t++){const n=u[t];if(1===n){const t=i[s++];e.moveTo(t.x,t.y)}else if(2===n){const t=i[s++];e.lineTo(t.x,t.y)}else if(3===n){const t=i[s++],n=i[s++];e.quadraticCurveTo(t.x,t.y,n.x,n.y)}else if(4===n){const t=i[s++],n=i[s++],r=i[s++];e.bezierCurveTo(t.x,t.y,n.x,n.y,r.x,r.y)}}}else e.moveTo(a.x,a.y),e.lineTo(h.x,h.y);e.stroke(),e.restore()}}const z=function(){const e={},t=document.createElement("canvas").getContext("2d");return function(i,n){t.font=i;let s=e[t.font];return s||(s=2*t.measureText("e").width+4,e[t.font]=s),{width:t.measureText(n).width+4,height:s}}}();function R(e,t){let i,n,s,r,o,a,h,l,c;e.save();const u=t;u.type?([i,n,s,r]=u.rect,({text:o,font:a,color:h,align:l,vAlign:c}=u)):(T(e,t),i=0,n=0,({width:s,height:r}=t.getSize()),o=t.getStyle("text"),a=t.getStyle("text.font"),h=t.getStyle("text.color"),l=t.getStyle("text.align"),c=t.getStyle("text.vAlign")),e.font=a||f.font;const d=z(e.font,o);e.textAlign="center",e.textBaseline="middle",e.fillStyle=h||f.fontColor,c=c||f.vAlign,l=l||f.align,h=h||f.fontColor,o=o||f.text;let g=0,b=0;b="top"===c?n+d.height/2:"middle"===c?n+r/2:n+r-d.height/2,g="right"===l?i+s-d.width/2:"left"===l?i+d.width/2:i+s/2,e.fillText(o,g,b),e.restore()}function A(e){const t=[],i=e.length;for(let n=0;n<i;n+=2)t.push({x:e[n],y:e[n+1]});return t}function W(e,t){let i,n,s;e.save();const r=t,o=t;if(r.className?(s=r.getPoints(),i=r.getSegments(),n=r.isClosePath()):(({segments:i,closePath:n}=o),s=A(o.points)),b(e,r),e.beginPath(),i&&i.length>0){const t=i.length;for(let r=0,o=0;r<t;r++){const t=i[r];if(1===t){const t=s[o++];e.moveTo(t.x,t.y)}else if(2===t){const t=s[o++];e.lineTo(t.x,t.y)}else if(3===t){const t=s[o++],i=s[o++];e.quadraticCurveTo(t.x,t.y,i.x,i.y)}else if(4===t){const t=s[o++],i=s[o++],n=s[o++];e.bezierCurveTo(t.x,t.y,i.x,i.y,n.x,n.y)}else 5===t&&e.closePath();n&&e.closePath()}}else{const t=s.length;if(t>0){let i=s[0];e.moveTo(i.x,i.y);for(let n=1;n<t;n++){const t=s[n];e.lineTo(t.x,t.y)}n&&e.closePath()}}const a=(r.className?r.getStyle("shape.border.width"):o.borderWidth)||0;0!==a&&(e.lineWidth=a,e.stroke());const h=r.className?r.getStyle("shape.background"):o.background,l=(o?o.fillRule:r.getStyle("shape.fill.rule"))||f.fillRule;h&&e.fill(l),e.restore()}function L(e,t){let i,n,s,r;e.save();const o=t;if(o.className)i=0,n=0,({width:s,height:r}=o.getSize());else{const e=t;[i,n,s,r]=e.rect}b(e,t),e.beginPath(),e.rect(i,n,s,r),e.closePath(),S(e,t),e.restore()}function E(e,t){let i,n,s,r,o,a,h;e.save();const l=t;if(l.className)i=0,n=0,({width:s,height:r}=l.getSize()),o=l.getStyle("shape.arc.from"),a=l.getStyle("shape.arc.to"),h=l.getStyle("shape.arc.close");else{const e=t;[i,n,s,r]=e.rect,({arcFrom:o,arcTo:a,arcClose:h}=e)}const c=Math.min(s,r)/2;b(e,t),e.beginPath();const u=i+s/2,d=n+r/2;e.arc(u,d,c,o,a),void 0!==h&&!0!==h||(e.lineTo(u,d),e.closePath()),S(e,t),e.restore()}function X(e,t){let i,n,s,r;e.save();const o=t;if(o.className)i=0,n=0,({width:s,height:r}=o.getSize());else{const e=t;[i,n,s,r]=e.rect}b(e,o),e.beginPath(),e.moveTo(i+s/2,n),e.lineTo(i+s,n+r),e.lineTo(i,n+r),e.lineTo(i+s/2,n),e.closePath(),e.stroke(),e.fill(),e.restore()}function Y(e,t){let i,n,s,r;e.save();const o=t;if(o.className)i=0,n=0,({width:s,height:r}=o.getSize());else{const e=t;[i,n,s,r]=e.rect}b(e,t);const a=Math.min(s,r)/2;e.beginPath(),e.arc(i+s/2,n+r/2,a,0,2*Math.PI,!0),e.closePath(),S(e,t),e.restore()}function D(e,t){let i,n,s,r;e.save();const o=t;if(o.className)i=0,n=0,({width:s,height:r}=o.getSize());else{const e=t;[i,n,s,r]=e.rect}const a=s/2,h=r/2;e.beginPath();const l=h/a;a!==h&&e.scale(1,l),e.arc(i+a,(n+h)/l,a,0,2*Math.PI,!0),e.closePath(),e.restore(),e.save(),b(e,o),S(e,o),e.restore()}function B(e,t){let i,n,s,r,o;e.save();const a=t;if(a.className)i=0,n=0,({width:s,height:r}=a.getSize()),o=a.getImage();else{const e=t;[i,n,s,r]=e.rect,({name:o}=e)}if(o){const t=m(o);t&&e.drawImage(t,i,n,s,r)}e.restore()}var J=function(e,t,i,n){function s(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function o(e){try{h(n.next(e))}catch(t){r(t)}}function a(e){try{h(n["throw"](e))}catch(t){r(t)}}function h(e){e.done?i(e.value):s(e.value).then(o,a)}h((n=n.apply(e,t||[])).next())}))};class H{constructor(e){Object.defineProperty(this,"_canvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_context",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_container",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_dataList",{enumerable:!0,configurable:!0,writable:!0,value:new h}),Object.defineProperty(this,"_notifier",{enumerable:!0,configurable:!0,writable:!0,value:new O}),Object.defineProperty(this,"_background",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_dataMap",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"_lastId",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_selection",{enumerable:!0,configurable:!0,writable:!0,value:new h}),Object.defineProperty(this,"_ro",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.createLowerCanvas(),e.editable&&this._initEventListeners(),this._notifier.on("render",(()=>{this.render()}))}getDataList(){return this._dataList}addData(e,t){e.setNotifier(this._notifier),e.getId()||e.setId(++this._lastId),this._dataMap.set(e.getId(),e),this._dataList.add(e,t),this.update()}getDataById(e){return this._dataMap.get(e)}load(e){return J(this,void 0,void 0,(function*(){const t=yield H.loadResource(e);this._deserialize(t)}))}_initEventListeners(){const e={x:0,y:0},t=t=>{const n=x(document.body,t),s=this.getDataList();if(s.size()>0){const t=new h;let i;for(let r=0;r<s.size();r++){const t=s.get(r);if("Edge"!==t.className){const s=t;let r=s.getRotation();const{x:o,y:a}=t.getPostion();let h=n.x,l=n.y;r&&({x:h,y:l}=j(n,s.getPostion(),-1*r));const c=t.getRect();P(c,h,l)&&(e.x=n.x-o,e.y=n.y-a,i=t)}}i&&t.add(i),0===this.getSelection().size()&&0===t.size()||this.setSelection(t)}document.addEventListener("mousemove",i,!1)},i=t=>{const i=this.getSelection(),n=x(document.body,t);i.size()>0&&i.each((t=>{const i={x:n.x-e.x,y:n.y-e.y};if("Shape"===(null===t||void 0===t?void 0:t.className)){const e=t,n=e.getPoints(),{x:s,y:r}=e.getPostion(),o=n.map((e=>{const t=new N(e.x,e.y),n=new N(i.x-s,i.y-r),o=t.add(n);return{x:o.x,y:o.y}}));e.setPoints(o)}t&&t.setPosition(Object.assign({},i))}))},n=e=>{document.removeEventListener("mousemove",i,!1)};document.addEventListener("mousedown",t,!1),document.addEventListener("mouseup",n,!1);const s=e=>{const t=x(this._canvas,e),i=this.getDataList();let n;for(let s=0;s<i.size();s++){const e=i.get(s);if("Edge"!==e.className){const i=e;let s=i.getRotation(),r=t.x,o=t.y;s&&({x:r,y:o}=j(t,i.getPostion(),-1*s));const a=i.getRect();if(P(a,r,o)){n=e;break}}}this._canvas.style.cursor=n?"pointer":"default"};this._canvas.addEventListener("mousemove",s,!1)}_deserialize(e){this._dataList.clear(),this._dataMap.clear();const t=e.p;t.background&&this.setBackground(t.background);const i=e.d,n=[],s=[];this._lastId=0;for(const o of i){const e=o.c.slice(o.c.indexOf(".")+1),t=o.i;t>=this._lastId&&(this._lastId=t);const i=y(e),r=new i;r.setId(t),this._dataMap.set(t,r),r.setNotifier(this._notifier),s.push(r),n.push(o)}const r=n.length;for(let o=0;o<r;o++){const e=s[o],t=n[o];this._deserializeData(e,t),this.addData(e)}}_deserializeData(e,t){const i=t.p||{},n=(t.a,t.s||{});for(const s in i){const t=w(s),n=i[s];e[t]&&e[t](this._deserializeValue(n))}for(const s in n){const t=n[s];e.setStyle(s,this._deserializeValue(t))}}_deserializeValue(e){if(void 0!==e&&null!==e)return e.__i?this.getDataById(e.__i):e.__a?e.__a:e}update(){this._notifier.emitNextTick("render")}render(){this._renderAllData()}_renderAllData(){this._context.clearRect(0,0,this._canvas.width,this._canvas.height),this._background&&(this._context.fillStyle=this._background,this._context.fillRect(0,0,this._canvas.width,this._canvas.height),this._context.restore());const e=this.getDataList(),t=e.size();for(let n=0;n<t;n++){const t=e.get(n);this._renderData(t)}const i=this.getSelection();i.each((e=>{e&&I(this._context,e)}))}_renderData(e){const t=e.className,i=this._context;switch(i.save(),t){case"Node":this._renderNode(e);break;case"Edge":this._renderEdge(e);break;case"Text":this._renderText(e);break;case"Shape":this._renderShape(e);break}i.restore()}_renderNode(e){const t=e.getImage(),i=e.getStyle("shape");!t||m(t)?(T(this._context,e),!t&&i?this._renderBasicShape(i,e):t&&(t.endsWith(".json")?this._renderSymbolImage(t,e):B(this._context,e))):H.loadImage([t]).then((()=>{this.update()}))}_renderBasicShape(e,t){switch(e){case"rect":L(this._context,t);break;case"circle":Y(this._context,t);break;case"oval":D(this._context,t);break;case"triangle":X(this._context,t);break;case"arc":E(this._context,t);break;case"text":R(this._context,t);break;case"image":t.name&&t.name.endsWith(".json")?this._renderSymbolImage(t.name,t):B(this._context,t);break;case"shape":W(this._context,t);break}}_renderSymbolImage(e,t,i){const n=m(e),s=n.comps;if(this._context.save(),i&&n){const[e,t,s,r]=i.rect;this._context.translate(e,t);const o=s/n.width,a=r/n.height;this._context.scale(o,a)}if(s)for(const r of s){if(r.rotation){const[e,t,i,n]=r.rect,s=r.anchorX||f.anchorX,o=r.anchorY||f.anchorY,a=e+i*s,h=t+n*o;this._context.translate(a,h),this._context.rotate(r.rotation),this._context.translate(-a,-h)}if("image"!==r.type)this._renderBasicShape(r.type,r);else{const e=r.name,i=m(e);if(!i){H.loadImage([e]).then((()=>{this.update()}));continue}e.endsWith(".json")?this._renderSymbolImage(e,t,r):B(this._context,r)}}this._context.restore()}_renderEdge(e){const t=e.getSource(),i=e.getTarget(),n=[];t.getImage&&t.getImage()&&!m(t.getImage())&&n.push(t.getImage()),i.getImage&&i.getImage()&&!m(i.getImage())&&n.push(i.getImage()),n.length>0?H.loadImage(n).then((()=>{this.update()})):M(this._context,e)}_renderText(e){R(this._context,e)}_renderShape(e){k(this._context,e),W(this._context,e)}fitContent(){}mount(e){this._container=e||document.body,this._container.appendChild(this._canvas),this._ro=new ResizeObserver((e=>{for(const t of e){const{width:e,height:i}=t.contentRect,n=Math.floor(e),s=Math.floor(i);this._canvas.width=n,this._canvas.height=s,this._canvas.style.width=n+"px",this._canvas.style.height=s+"px",this.render()}})),this._ro.observe(this._container)}createLowerCanvas(){const e=document.createElement("canvas");e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.right="0px",e.style.bottom="0px";const t=e.getContext("2d");if(!t)throw new Error("get 2d context failed");return this._context=t,this._canvas=e,this._canvas}static loadResource(e){return J(this,void 0,void 0,(function*(){const t=H.convertURL(e),i=yield fetch(t,{method:"GET"}),n=yield i.json();return n}))}static loadImage(e){return J(this,void 0,void 0,(function*(){const t=e.map((e=>new Promise((t=>{if(e.endsWith(".json"))this.loadResource(e).then((i=>{v(e,i),t()}));else{const i=new Image;i.onload=()=>{v(e,i),t()},e.startsWith("data:image")?i.src=e:i.src=H.convertURL(e)}}))));return Promise.all(t)}))}setBackground(e){this._background=e}getBackground(){return this._background}getSelection(){return this._selection}setSelection(e){this._selection=new h(e),this.update()}destory(){this._ro.disconnect(),this._dataList.clear(),this._dataMap.clear(),this._notifier.off("render")}}Object.defineProperty(H,"convertURL",{enumerable:!0,configurable:!0,writable:!0,value:e=>e});var U={GraphView:H,Node:c,Edge:d,Shape:g,Text:u},V=function(e,t,i,n){function s(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function o(e){try{h(n.next(e))}catch(t){r(t)}}function a(e){try{h(n["throw"](e))}catch(t){r(t)}}function h(e){e.done?i(e.value):s(e.value).then(o,a)}h((n=n.apply(e,t||[])).next())}))},$=(0,s.aZ)({name:"App",components:{},mounted(){return V(this,void 0,void 0,(function*(){H.convertURL=e=>`storage/${e}`;const e=new U.GraphView({editable:!0});e.load("displays/basic.json"),e.mount(this.$refs.container),window.gv=e}))}});$.render=o;var F=$;const G=(0,n.ri)(F);G.mount("#app")}},t={};function i(n){var s=t[n];if(void 0!==s)return s.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,i),r.exports}i.m=e,function(){var e=[];i.O=function(t,n,s,r){if(!n){var o=1/0;for(c=0;c<e.length;c++){n=e[c][0],s=e[c][1],r=e[c][2];for(var a=!0,h=0;h<n.length;h++)(!1&r||o>=r)&&Object.keys(i.O).every((function(e){return i.O[e](n[h])}))?n.splice(h--,1):(a=!1,r<o&&(o=r));if(a){e.splice(c--,1);var l=s();void 0!==l&&(t=l)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[n,s,r]}}(),function(){i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};i.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,r,o=n[0],a=n[1],h=n[2],l=0;for(s in a)i.o(a,s)&&(i.m[s]=a[s]);if(h)var c=h(i);for(t&&t(n);l<o.length;l++)r=o[l],i.o(e,r)&&e[r]&&e[r][0](),e[o[l]]=0;return i.O(c)},n=self["webpackChunkgraph"]=self["webpackChunkgraph"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=i.O(void 0,[998],(function(){return i(869)}));n=i.O(n)})();