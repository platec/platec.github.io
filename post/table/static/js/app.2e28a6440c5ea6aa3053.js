webpackJsonp([1],{NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]},o=i("VU/8")({name:"App"},a,!1,null,null,null).exports,r=i("/ocq"),l={created:function(){},data:function(){return{tableData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}]}},methods:{handleSave:function(t,e){setTimeout(function(){e()})}}},s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",[i("simple-table",{attrs:{data:t.tableData},on:{"update:data":function(e){t.tableData=e},save:t.handleSave}},[i("el-table-column",{attrs:{prop:"date",label:"日期",width:"180"}}),t._v(" "),i("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),t._v(" "),i("el-table-column",{attrs:{prop:"address",label:"地址"}})],1)],1)])},staticRenderFns:[]},u=i("VU/8")(l,s,!1,null,null,null).exports;n.default.use(r.a);var c=new r.a({routes:[{path:"/",name:"Index",component:u}]}),d=i("//Fk"),p=i.n(d),h=i("c/Tr"),f=i.n(h),v=i("mvHQ"),m=i.n(v),b=document.addEventListener?function(t,e,i){t&&e&&i&&t.addEventListener(e,i,!1)}:function(t,e,i){t&&e&&i&&t.attachEvent("on"+e,i)},x=[],w="@@clickoutsideContext",g=void 0,_=0;function y(t,e,i){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!(i&&i.context&&n.target&&a.target)||t.contains(n.target)||t.contains(a.target)||t===n.target||i.context.popperElm&&(i.context.popperElm.contains(n.target)||i.context.popperElm.contains(a.target))||(e.expression&&t[w].methodName&&i.context[t[w].methodName]?i.context[t[w].methodName]():t[w].bindingFn&&t[w].bindingFn())}}!n.default.prototype.$isServer&&b(document,"mousedown",function(t){return g=t}),!n.default.prototype.$isServer&&b(document,"mouseup",function(t){x.forEach(function(e){return e[w].documentHandler(t,g)})});var S={name:"SimpleTable",directives:{clickoutside:{bind:function(t,e,i){x.push(t);var n=_++;t[w]={id:n,documentHandler:y(t,e,i),methodName:e.expression,bindingFn:e.value}},update:function(t,e,i){t[w].documentHandler=y(t,e,i),t[w].methodName=e.expression,t[w].bindingFn=e.value},unbind:function(t){for(var e=x.length,i=0;i<e;i++)if(x[i][w].id===t[w].id){x.splice(i,1);break}delete t[w]}}},props:{data:Array,size:{type:String,default:"mini"}},data:function(){var t=JSON.parse(m()(this.data)).map(function(t,e){return t._id=e,t});return{originalData:JSON.parse(m()(t)),tableData:t,inputValue:null,inputHolderVisible:!1,contextMenuVisible:!1,contextMenuRow:null,historyStore:[]}},watch:{data:function(){this.tableData=JSON.parse(m()(this.data)).map(function(t,e){return t._id=e,t})},tableData:function(){var t=this.tableData,e=this.originalData,i=this.$refs.table.columns.map(function(t){return t.property}),n=document.querySelector("tbody");this.$nextTick(function(){for(var a=0;a<t.length;a++){var o=t[a],r=e[a];for(var l in i){var s=i[l],u=n.querySelectorAll(".el-table__row")[a].querySelectorAll("td")[l];void 0===r?u.classList.add("new"):u.classList.remove("new"),void 0!==r&&o[s]!==r[s]?u.classList.add("modified"):u.classList.remove("modified")}}})}},methods:{handleModify:function(t,e,i,n){var a=function(t){var e,i;if(t)return t.getClientRects().length?(e=t.getBoundingClientRect(),i=t.ownerDocument.defaultView,{top:e.top+i.pageYOffset,left:e.left+i.pageXOffset}):{top:0,left:0}}(i);this.inputHolderVisible=!0;var o=document.querySelector(".inputHolder");o.style.top=a.top+"px",o.style.left=a.left+"px";var r=document.querySelector("textarea"),l=window.getComputedStyle(i);r.style.width=parseInt(l.width)-4+"px",r.style.height=parseInt(l.height)-4+"px",r.style.lineHeight=parseInt(l.height)-4+"px",r.style.fontSize=l.fontSize;var s=i.parentElement,u=s.parentElement,c=f()(s.querySelectorAll("td")).indexOf(i),d=f()(u.querySelectorAll("tr")).indexOf(s);this.position={col:c,row:d,prop:e.property,cell:i},this.inputValue=t[e.property]},handleMenu:function(t,e){e.preventDefault(),this.contextMenuRow=t;var i=document.querySelector(".contextMenu");this.contextMenuVisible=!0,i.style.top=e.clientY+"px",i.style.left=e.clientX+"px"},outsideInputHolder:function(){if(this.inputHolderVisible){var t=this.originalData[this.position.row]||{};if(this.inputValue!==t[this.position.prop]){var e={new:JSON.parse(m()(this.tableData)),old:JSON.parse(m()(this.originalData))};this.historyStore.push(e)}var i=this.tableData[this.position.row];i[this.position.prop]=this.inputValue,this.tableData.splice(this.position.row,1,i)}this.inputHolderVisible=!1},outsideMenu:function(){this.contextMenuVisible&&(this.contextMenuVisible=!1)},deleteCurrentRow:function(){var t=this,e={new:JSON.parse(m()(this.tableData)),old:JSON.parse(m()(this.originalData))};this.historyStore.push(e),this.tableData=this.tableData.filter(function(e){return e._id!==t.contextMenuRow._id}),this.originalData=this.originalData.filter(function(e){return e._id!==t.contextMenuRow._id}),this.contextMenuVisible=!1,this.$emit("delete-row",this.contextMenuRow)},handleClick:function(t,e,i,n){this.$emit("cell-click",t,e,i,n)},addNewRow:function(){var t={new:JSON.parse(m()(this.tableData)),old:JSON.parse(m()(this.originalData))};this.historyStore.push(t),this.tableData.push({_id:this.tableData.length}),this.contextMenuVisible=!1,this.$emit("add-row")},handleUndo:function(){if(this.historyStore.length>0){var t=this.historyStore.pop();this.tableData=t.new,this.originalData=t.old,this.contextMenuVisible=!1}},handleSave:function(){var t=this;new p.a(function(e){t.$emit("save",t.tableData,e)}).then(function(){t.originalData=JSON.parse(m()(t.tableData)),t.$emit("update:data",t.tableData),t.historyStore=[],t.contextMenuVisible=!1})}}},D={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-table",{ref:"table",staticStyle:{width:"100%"},attrs:{border:"",stripe:"",size:t.size,data:t.tableData},on:{"cell-dblclick":t.handleModify,"row-contextmenu":t.handleMenu,"cell-click":t.handleClick}},[t._t("default")],2),t._v(" "),i("div",{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:t.outsideInputHolder,expression:"outsideInputHolder"},{name:"show",rawName:"v-show",value:t.inputHolderVisible,expression:"inputHolderVisible"}],staticClass:"inputHolder"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],domProps:{value:t.inputValue},on:{input:function(e){e.target.composing||(t.inputValue=e.target.value)}}})]),t._v(" "),i("div",{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:t.outsideMenu,expression:"outsideMenu"},{name:"show",rawName:"v-show",value:t.contextMenuVisible,expression:"contextMenuVisible"}],staticClass:"contextMenu"},[i("table",[t._m(0),t._v(" "),i("thead"),t._v(" "),i("tbody",[i("tr",{on:{click:t.addNewRow}},[t._m(1)]),t._v(" "),i("tr",{on:{click:t.deleteCurrentRow}},[t._m(2)]),t._v(" "),i("tr",{class:{disabled:0===t.historyStore.length},on:{click:t.handleUndo}},[t._m(3)]),t._v(" "),i("tr",{on:{click:t.handleSave}},[t._m(4)])])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("colgroup",[e("col",{staticStyle:{width:"215px"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{height:"22px"}},[e("div",{staticClass:"itemWrapper"},[this._v("插入行")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{height:"22px"}},[e("div",{staticClass:"itemWrapper"},[this._v("删除当前行")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{height:"22px"}},[e("div",{staticClass:"itemWrapper"},[this._v("撤销")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{height:"22px"}},[e("div",{staticClass:"itemWrapper"},[this._v("保存")])])}]};var V=i("VU/8")(S,D,!1,function(t){i("b0lp")},null,null).exports;V.install=function(t){t.component(V.name,V)};var M=V,N=i("zL8q"),k=i.n(N);i("tvR6");n.default.use(k.a),n.default.use(M),n.default.config.productionTip=!1,new n.default({el:"#app",router:c,components:{App:o},template:"<App/>"})},b0lp:function(t,e){},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.2e28a6440c5ea6aa3053.js.map