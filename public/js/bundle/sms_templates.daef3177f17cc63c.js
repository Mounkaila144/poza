"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[254],{3243:(t,s,e)=>{e.r(s),e.d(s,{default:()=>c});var a=e(95353),i=e(5947),o=e.n(i);function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function r(t,s){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);s&&(a=a.filter((function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),e.push.apply(e,a)}return e}function _(t){for(var s=1;s<arguments.length;s++){var e=null!=arguments[s]?arguments[s]:{};s%2?r(Object(e),!0).forEach((function(s){m(t,s,e[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(e,s))}))}return t}function m(t,s,e){return(s=function(t){var s=function(t,s){if("object"!==n(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var a=e.call(t,s||"default");if("object"!==n(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===s?String:Number)(t)}(t,"string");return"symbol"===n(s)?s:String(s)}(s))in t?Object.defineProperty(t,s,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[s]=e,t}const d={metaInfo:{title:"SMS Templates"},data:function(){return{isLoading:!0,Submit_Processing:!1,sms_body_sale:"",sms_body_quotation:"",sms_body_payment_received:"",sms_body_purchase:"",sms_body_payment_sent:"",sms_body:""}},methods:_(_({},(0,a.i0)(["refreshUserPermissions"])),{},{update_sms_body:function(t){var s=this;this.Submit_Processing=!0,o().start(),o().set(.1),"sale"==t?this.sms_body=this.sms_body_sale:"quotation"==t?this.sms_body=this.sms_body_quotation:"payment_received"==t?this.sms_body=this.sms_body_payment_received:"purchase"==t?this.sms_body=this.sms_body_purchase:"payment_sent"==t&&(this.sms_body=this.sms_body_payment_sent),axios.put("/update_sms_body",{sms_body:this.sms_body,sms_body_type:t}).then((function(t){Fire.$emit("Event_sms"),s.makeToast("success",s.$t("Successfully_Updated"),s.$t("Success")),o().done(),s.Submit_Processing=!1})).catch((function(t){o().done(),s.makeToast("danger",s.$t("InvalidData"),s.$t("Failed")),s.Submit_Processing=!1}))},get_sms_template:function(){var t=this;axios.get("get_sms_template").then((function(s){t.sms_body_sale=s.data.sms_body_sale,t.sms_body_quotation=s.data.sms_body_quotation,t.sms_body_payment_received=s.data.sms_body_payment_received,t.sms_body_purchase=s.data.sms_body_purchase,t.sms_body_payment_sent=s.data.sms_body_payment_sent,t.isLoading=!1})).catch((function(s){setTimeout((function(){t.isLoading=!1}),500)}))}}),created:function(){var t=this;this.get_sms_template(),Fire.$on("Event_sms",(function(){t.get_sms_template()}))}};const c=(0,e(14486).A)(d,(function(){var t=this,s=t._self._c;return s("div",{staticClass:"main-content"},[s("breadcumb",{attrs:{page:t.$t("sms_templates"),folder:t.$t("Settings")}}),t._v(" "),t.isLoading?s("div",{staticClass:"loading_page spinner spinner-primary mr-3"}):s("div",{attrs:{id:"section_notifications_template"}},[s("div",{staticClass:"row mt-5"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[s("h4",[t._v(t._s(t.$t("Notification_Client")))])]),t._v(" "),s("div",{staticClass:"card-body"},[s("b-tabs",{attrs:{"active-nav-item-class":"nav nav-tabs","content-class":"mt-3"}},[s("b-tab",{attrs:{title:t.$t("Sale")}},[s("form",{on:{submit:function(s){return s.preventDefault(),t.update_sms_body("sale")}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("span",[s("strong",[t._v(t._s(t.$t("Available_Tags"))+" : ")])]),t._v(" "),s("p",[t._v("\n                        {contact_name},{business_name},{invoice_number},{invoice_url},{total_amount},{paid_amount},{due_amount}\n                      ")])]),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"form-group col-md-12"},[s("label",{attrs:{for:"sms_body_sale"}},[t._v(t._s(t.$t("sms_body"))+" ")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.sms_body_sale,expression:"sms_body_sale"}],staticClass:"form-control",staticStyle:{height:"200px!important"},attrs:{type:"text",name:"sms_body_sale",id:"sms_body_sale",placeholder:t.$t("sms_body")},domProps:{value:t.sms_body_sale},on:{input:function(s){s.target.composing||(t.sms_body_sale=s.target.value)}}})])]),t._v(" "),s("div",{staticClass:"row mt-3"},[s("div",{staticClass:"col-md-6"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:t.Submit_Processing}},[t.Submit_Processing?s("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):t._e(),t._v(" "),s("i",{staticClass:"i-Yes me-2 font-weight-bold"}),t._v(" "+t._s(t.$t("submit"))+"\n                      ")])])])])]),t._v(" "),s("b-tab",{attrs:{title:t.$t("Quote")}},[s("form",{on:{submit:function(s){return s.preventDefault(),t.update_sms_body("quotation")}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("span",[s("strong",[t._v(t._s(t.$t("Available_Tags"))+" : ")])]),t._v(" "),s("p",[t._v("\n                        {contact_name},{business_name},{quotation_number},{quotation_url},{total_amount}\n                      ")])]),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"form-group col-md-12"},[s("label",{attrs:{for:"sms_body_quotation"}},[t._v(t._s(t.$t("sms_body"))+" ")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.sms_body_quotation,expression:"sms_body_quotation"}],staticClass:"form-control",staticStyle:{height:"200px!important"},attrs:{type:"text",name:"sms_body_quotation",id:"sms_body_quotation",placeholder:t.$t("sms_body")},domProps:{value:t.sms_body_quotation},on:{input:function(s){s.target.composing||(t.sms_body_quotation=s.target.value)}}})])]),t._v(" "),s("div",{staticClass:"row mt-3"},[s("div",{staticClass:"col-md-6"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:t.Submit_Processing}},[t.Submit_Processing?s("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):t._e(),t._v(" "),s("i",{staticClass:"i-Yes me-2 font-weight-bold"}),t._v(" "+t._s(t.$t("submit"))+"\n                      ")])])])])]),t._v(" "),s("b-tab",{attrs:{title:t.$t("PaiementsReceived")}},[s("form",{on:{submit:function(s){return s.preventDefault(),t.update_sms_body("payment_received")}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("span",[s("strong",[t._v(t._s(t.$t("Available_Tags"))+" : ")])]),t._v(" "),s("p",[t._v("\n                        {contact_name},{business_name},{payment_number},{paid_amount}\n                      ")])]),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"form-group col-md-12"},[s("label",{attrs:{for:"sms_body_payment_received"}},[t._v(t._s(t.$t("sms_body"))+" ")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.sms_body_payment_received,expression:"sms_body_payment_received"}],staticClass:"form-control",staticStyle:{height:"200px!important"},attrs:{type:"text",name:"sms_body_payment_received",id:"sms_body_payment_received",placeholder:t.$t("sms_body")},domProps:{value:t.sms_body_payment_received},on:{input:function(s){s.target.composing||(t.sms_body_payment_received=s.target.value)}}})])]),t._v(" "),s("div",{staticClass:"row mt-3"},[s("div",{staticClass:"col-md-6"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:t.Submit_Processing}},[t.Submit_Processing?s("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):t._e(),t._v(" "),s("i",{staticClass:"i-Yes me-2 font-weight-bold"}),t._v(" "+t._s(t.$t("submit"))+"\n                      ")])])])])])],1)],1)])])]),t._v(" "),s("div",{staticClass:"row mt-5"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[s("h4",[t._v(t._s(t.$t("Notification_Supplier")))])]),t._v(" "),s("div",{staticClass:"card-body"},[s("b-tabs",{attrs:{"active-nav-item-class":"nav nav-tabs","content-class":"mt-3"}},[s("b-tab",{attrs:{title:t.$t("Purchase")}},[s("form",{on:{submit:function(s){return s.preventDefault(),t.update_sms_body("purchase")}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("span",[s("strong",[t._v(t._s(t.$t("Available_Tags"))+" : ")])]),t._v(" "),s("p",[t._v("\n                      {contact_name},{business_name},{invoice_number},{invoice_url},{total_amount},{paid_amount},{due_amount}\n                    ")])]),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"form-group col-md-12"},[s("label",{attrs:{for:"sms_body_purchase"}},[t._v(t._s(t.$t("sms_body"))+" ")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.sms_body_purchase,expression:"sms_body_purchase"}],staticClass:"form-control",staticStyle:{height:"200px!important"},attrs:{type:"text",name:"sms_body_purchase",id:"sms_body_purchase",placeholder:t.$t("sms_body")},domProps:{value:t.sms_body_purchase},on:{input:function(s){s.target.composing||(t.sms_body_purchase=s.target.value)}}})])]),t._v(" "),s("div",{staticClass:"row mt-3"},[s("div",{staticClass:"col-md-6"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:t.Submit_Processing}},[t.Submit_Processing?s("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):t._e(),t._v(" "),s("i",{staticClass:"i-Yes me-2 font-weight-bold"}),t._v(" "+t._s(t.$t("submit"))+"\n                    ")])])])])]),t._v(" "),s("b-tab",{attrs:{title:t.$t("PaiementsSent")}},[s("form",{on:{submit:function(s){return s.preventDefault(),t.update_sms_body("payment_sent")}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("span",[s("strong",[t._v(t._s(t.$t("Available_Tags"))+" : ")])]),t._v(" "),s("p",[t._v("\n                      {contact_name},{business_name},{payment_number},{paid_amount}\n                    ")])]),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"form-group col-md-12"},[s("label",{attrs:{for:"sms_body_payment_sent"}},[t._v(t._s(t.$t("sms_body")))]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.sms_body_payment_sent,expression:"sms_body_payment_sent"}],staticClass:"form-control",staticStyle:{height:"200px!important"},attrs:{type:"text",name:"sms_body_payment_sent",id:"sms_body_payment_sent",placeholder:t.$t("sms_body")},domProps:{value:t.sms_body_payment_sent},on:{input:function(s){s.target.composing||(t.sms_body_payment_sent=s.target.value)}}})])]),t._v(" "),s("div",{staticClass:"row mt-3"},[s("div",{staticClass:"col-md-6"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:t.Submit_Processing}},[t.Submit_Processing?s("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):t._e(),t._v(" "),s("i",{staticClass:"i-Yes me-2 font-weight-bold"}),t._v(" "+t._s(t.$t("submit"))+"\n                    ")])])])])])],1)],1)])])])])],1)}),[],!1,null,null,null).exports}}]);