(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d208bf9"],{a5b1:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[r("app-i18n",{attrs:{code:"home.menu"}})],1),r("el-breadcrumb-item",{attrs:{to:{path:"/parts"}}},[r("app-i18n",{attrs:{code:"entities.parts.menu"}})],1),r("el-breadcrumb-item",[r("app-i18n",{attrs:{code:"entities.parts.view.title"}})],1)],1),r("div",{staticClass:"app-content-page"},[r("h1",{staticClass:"app-content-title"},[r("app-i18n",{attrs:{code:"entities.parts.view.title"}})],1),e.loading?r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"app-page-spinner"}):e._e(),e.record?r("app-parts-view-toolbar"):e._e(),e.record?r("el-form",{staticClass:"form",attrs:{"label-position":e.labelPosition,"label-width":e.labelWidthForm},nativeOn:{submit:function(e){e.preventDefault()}}},[r("app-view-item-text",{attrs:{label:e.fields.id.label,value:e.presenter(e.record,"id")}}),r("app-view-item-text",{attrs:{label:e.fields.name.label,value:e.presenter(e.record,"name")}}),r("app-view-item-text",{attrs:{label:e.fields.quantity.label,value:e.presenter(e.record,"quantity")}}),r("app-view-item-text",{attrs:{label:e.fields.status.label,value:e.presenter(e.record,"status")}}),r("app-view-item-image",{attrs:{label:e.fields.images.label,value:e.presenter(e.record,"images")}}),r("app-view-item-text",{attrs:{label:e.fields.stock.label,value:e.presenter(e.record,"stock")}}),r("app-view-item-text",{attrs:{label:e.fields.createdAt.label,value:e.presenter(e.record,"createdAt")}}),r("app-view-item-text",{attrs:{label:e.fields.updatedAt.label,value:e.presenter(e.record,"updatedAt")}})],1):e._e()],1)],1)},i=[],n=(r("96cf"),r("3b8d")),o=r("cebc"),s=r("bd86"),c=(r("7f7f"),r("2f62")),l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-page-toolbar"},[e.record&&e.hasPermissionToEdit?r("router-link",{attrs:{to:{path:"/parts/"+e.record.id+"/edit"}}},[r("el-button",{attrs:{icon:"el-icon-fa-edit",type:"primary"}},[r("app-i18n",{attrs:{code:"common.edit"}})],1)],1):e._e(),e.record&&e.hasPermissionToDestroy?r("el-button",{attrs:{disabled:e.destroyLoading,icon:"el-icon-fa-trash",type:"primary"},on:{click:e.doDestroyWithConfirm}},[r("app-i18n",{attrs:{code:"common.destroy"}})],1):e._e(),e.record&&e.hasPermissionToAuditLogs?r("router-link",{attrs:{to:{path:"/audit-logs",query:{entityId:e.record.id}}}},[r("el-button",{attrs:{icon:"el-icon-fa-history"}},[r("app-i18n",{attrs:{code:"auditLog.menu"}})],1)],1):e._e()],1)},d=[],p=r("99ce"),u=r("5d6e"),m=r("12cb"),b={name:"app-parts-view-toolbar",computed:Object(o["a"])({},Object(c["c"])({currentUser:"auth/currentUser",record:"parts/view/record",loading:"parts/view/loading",destroyLoading:"parts/destroy/loading"}),{hasPermissionToEdit:function(){return new p["a"](this.currentUser).edit},hasPermissionToImport:function(){return new p["a"](this.currentUser).import},hasPermissionToDestroy:function(){return new p["a"](this.currentUser).destroy},hasPermissionToAuditLogs:function(){return new u["a"](this.currentUser).read}}),methods:Object(o["a"])({},Object(c["b"])({doDestroy:"parts/destroy/doDestroy"}),{doDestroyWithConfirm:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$confirm(Object(m["d"])("common.areYouSure"),Object(m["d"])("common.confirm"),{confirmButtonText:Object(m["d"])("common.yes"),cancelButtonText:Object(m["d"])("common.no"),type:"warning"});case 3:return e.abrupt("return",this.doDestroy(this.record.id));case 6:e.prev=6,e.t0=e["catch"](0);case 8:case"end":return e.stop()}},e,this,[[0,6]])}));function t(){return e.apply(this,arguments)}return t}()})},f=b,h=r("2877"),v=Object(h["a"])(f,l,d,!1,null,null,null),w=v.exports,g=r("0ed5"),y=g["a"].fields,O={name:"app-parts-view-page",props:["id"],components:Object(s["a"])({},w.name,w),computed:Object(o["a"])({},Object(c["c"])({labelPosition:"layout/labelPosition",labelWidthForm:"layout/labelWidthForm",record:"parts/view/record",loading:"parts/view/loading"}),{fields:function(){return y}}),created:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.doFind(this.id);case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),methods:Object(o["a"])({},Object(c["b"])({doFind:"parts/view/doFind"}),{presenter:function(e,t){return g["a"].presenter(e,t)}})},j=O,x=Object(h["a"])(j,a,i,!1,null,null,null);t["default"]=x.exports}}]);
//# sourceMappingURL=chunk-2d208bf9.34bf608b.js.map