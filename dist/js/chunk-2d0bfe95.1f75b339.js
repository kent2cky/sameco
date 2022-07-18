(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bfe95"],{4014:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[a("app-i18n",{attrs:{code:"home.menu"}})],1),a("el-breadcrumb-item",{attrs:{to:{path:"/iam"}}},[a("app-i18n",{attrs:{code:"iam.menu"}})],1),a("el-breadcrumb-item",[a("app-i18n",{attrs:{code:"iam.view.title"}})],1)],1),a("div",{staticClass:"app-content-page"},[a("h1",{staticClass:"app-content-title"},[a("app-i18n",{attrs:{code:"iam.view.title"}})],1),e.record?a("app-iam-view-toolbar"):e._e(),e.loading?a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"app-page-spinner"}):e._e(),e.record&&!e.loading?a("el-form",{staticClass:"form",attrs:{"label-position":e.labelPosition,"label-width":e.labelWidthForm},nativeOn:{submit:function(e){e.preventDefault()}}},[a("app-view-item-text",{attrs:{label:e.fields.id.label,value:e.presenter(e.record,"id")}}),a("app-view-item-text",{attrs:{label:e.fields.email.label,value:e.presenter(e.record,"email")}}),a("app-view-item-text",{attrs:{label:e.fields.firstName.label,value:e.presenter(e.record,"firstName")}}),a("app-view-item-text",{attrs:{label:e.fields.lastName.label,value:e.presenter(e.record,"lastName")}}),a("app-view-item-text",{attrs:{label:e.fields.phoneNumber.label,value:e.presenter(e.record,"phoneNumber"),prefix:"+"}}),a("app-view-item-image",{attrs:{label:e.fields.avatarsIam.label,value:e.presenter(e.record,"avatarsIam")}}),a("app-view-item-custom",{attrs:{label:e.fields.disabledAsStatus.label,value:e.presenter(e.record,"disabledAsStatus")}},[a("el-tag",{attrs:{type:e.record[e.fields.disabledAsStatus.name]?"danger":"success"}},[e._v(e._s(e.presenter(e.record,"disabledAsStatus")))])],1),a("app-view-item-custom",{attrs:{label:e.fields.roles.label,value:e.presenter(e.record,"roles")}},e._l(e.record.roles,function(t){return a("div",{key:t},[a("el-tooltip",{attrs:{content:e.roleDescriptionOf(t)}},[a("span",[e._v(e._s(e.roleLabelOf(t)))])])],1)}),0),a("app-view-item-text",{attrs:{label:e.fields.createdAt.label,value:e.presenter(e.record,"createdAt")}}),a("app-view-item-text",{attrs:{label:e.fields.updatedAt.label,value:e.presenter(e.record,"updatedAt")}})],1):e._e()],1)],1)},i=[],o=(a("96cf"),a("3b8d")),s=a("cebc"),l=a("bd86"),n=(a("7f7f"),a("2f62")),d=a("1a88"),c=a("12cb"),p=a("ee8a"),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-page-toolbar"},[e.record&&e.hasPermissionToEdit?a("router-link",{attrs:{to:{path:"/iam/"+e.record.id+"/edit"}}},[a("el-button",{attrs:{icon:"el-icon-fa-edit",type:"primary"}},[a("app-i18n",{attrs:{code:"common.edit"}})],1)],1):e._e(),e.record&&e.hasPermissionToEdit?a("el-button",{attrs:{disabled:e.loading,icon:e.record.disabled?"el-icon-fa-check":"el-icon-fa-ban",type:"primary"},on:{click:function(t){return e.doToggleStatus()}}},[e.record.disabled?a("app-i18n",{attrs:{code:"iam.enable"}}):e._e(),e.record.disabled?e._e():a("app-i18n",{attrs:{code:"iam.disable"}})],1):e._e(),e.record&&e.hasPermissionToAuditLogs?a("router-link",{attrs:{to:{path:"/audit-logs",query:{entityId:e.record.id}}}},[a("el-button",{attrs:{icon:"el-icon-fa-history"}},[a("app-i18n",{attrs:{code:"auditLog.menu"}})],1)],1):e._e(),e.record&&e.hasPermissionToAuditLogs?a("router-link",{attrs:{to:{path:"/audit-logs",query:{createdByEmail:e.record.email}}}},[a("el-button",{attrs:{icon:"el-icon-fa-eye"}},[a("app-i18n",{attrs:{code:"iam.view.activity"}})],1)],1):e._e()],1)},m=[],b=a("e3b4"),f=a("5d6e"),v={name:"app-iam-view-toolbar",computed:Object(s["a"])({},Object(n["c"])({currentUser:"auth/currentUser",record:"iam/view/record",loading:"iam/view/loading"}),{hasPermissionToEdit:function(){return new b["a"](this.currentUser).edit},hasPermissionToImport:function(){return new b["a"](this.currentUser).import},hasPermissionToAuditLogs:function(){return new f["a"](this.currentUser).read}}),methods:Object(s["a"])({},Object(n["b"])({doToggleStatus:"iam/view/doToggleStatus"}))},h=v,w=a("2877"),g=Object(w["a"])(h,u,m,!1,null,null,null),O=g.exports,_=d["a"].fields,y={name:"app-iam-view-page",props:["id"],components:Object(l["a"])({},O.name,O),computed:Object(s["a"])({},Object(n["c"])({labelPosition:"layout/labelPosition",labelWidthForm:"layout/labelWidthForm",record:"iam/view/record",loading:"iam/view/loading"}),{fields:function(){return _}}),created:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.doFind(this.id);case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),methods:Object(s["a"])({},Object(n["b"])({doFind:"iam/view/doFind"}),{presenter:function(e,t){return d["a"].presenter(e,t)},roleDescriptionOf:function(e){return p["a"].descriptionOf(e)},roleLabelOf:function(e){return p["a"].labelOf(e)},i18n:function(e){return Object(c["d"])(e)}})},j=y,x=Object(w["a"])(j,r,i,!1,null,null,null);t["default"]=x.exports}}]);
//# sourceMappingURL=chunk-2d0bfe95.1f75b339.js.map