(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ae8da"],{"0b0b":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[a("app-i18n",{attrs:{code:"home.menu"}})],1),a("el-breadcrumb-item",{attrs:{to:{path:"/overhead"}}},[a("app-i18n",{attrs:{code:"entities.overhead.menu"}})],1),a("el-breadcrumb-item",[e.isEditing?a("app-i18n",{attrs:{code:"entities.overhead.edit.title"}}):e._e(),e.isEditing?e._e():a("app-i18n",{attrs:{code:"entities.overhead.new.title"}})],1)],1),a("div",{staticClass:"app-content-page"},[a("h1",{staticClass:"app-content-title"},[e.isEditing?a("app-i18n",{attrs:{code:"entities.overhead.edit.title"}}):e._e(),e.isEditing?e._e():a("app-i18n",{attrs:{code:"entities.overhead.new.title"}})],1),e.findLoading?a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.findLoading,expression:"findLoading"}],staticClass:"app-page-spinner"}):e._e(),e.findLoading?e._e():a("app-overhead-form",{attrs:{isEditing:e.isEditing,record:e.record,saveLoading:e.saveLoading},on:{cancel:e.doCancel,submit:e.doSubmit}})],1)],1)},n=[],r=(a("ac6a"),a("96cf"),a("3b8d")),o=a("cebc"),d=a("bd86"),s=(a("7f7f"),a("2f62")),c=a("ccee"),p=a("c89f"),u={name:"app-overhead-form-page",props:["id"],components:Object(d["a"])({},c["a"].name,c["a"]),computed:Object(o["a"])({},Object(s["c"])({record:"overhead/form/record",findLoading:"overhead/form/findLoading",saveLoading:"overhead/form/saveLoading"}),{isEditing:function(){return!!this.id}}),created:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.isEditing){e.next=5;break}return e.next=3,this.doFind(this.id);case 3:e.next=7;break;case 5:return e.next=7,this.doNew();case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),methods:Object(o["a"])({},Object(s["b"])({doFind:"overhead/form/doFind",doNew:"overhead/form/doNew",doUpdate:"overhead/form/doUpdate",doCreate:"overhead/form/doCreate"}),{doCancel:function(){Object(p["a"])().push("/overhead")},doSubmit:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.isEditing){e.next=4;break}return e.abrupt("return",this.doUpdate(t));case 4:return e.abrupt("return",this.doCreate(t.values));case 5:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()})},h=u,f=a("2877"),m=Object(f["a"])(h,i,n,!1,null,null,null);t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d0ae8da.cf62928a.js.map