"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9260],{93807:(t,e,r)=>{r.r(e),r.d(e,{default:()=>l});var a=r(95353),s=r(5947),i=r.n(s);function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var a=r.call(t,e||"default");if("object"!==n(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===n(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const c={metaInfo:{title:"Edit Return Purchase"},data:function(){return{isLoading:!0,SubmitProcessing:!1,details:[],detail:{},purchase_return:{id:"",date:"",notes:"",statut:"",supplier_id:"",warehouse_id:"",purchase_id:"",tax_rate:0,TaxNet:0,shipping:0,discount:0},total:0,GrandTotal:0}},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},(0,a.L8)(["currentUser"])),methods:{Submit_purchase_return:function(){var t=this;this.$refs.edit_Return.validate().then((function(e){e?t.Update_purchase_return():t.makeToast("danger",t.$t("Please_fill_the_form_correctly"),t.$t("Failed"))}))},getValidationState:function(t){var e=t.dirty,r=t.validated,a=t.valid;return e||r?void 0===a?null:a:null},makeToast:function(t,e,r){this.$root.$bvToast.toast(e,{title:r,variant:t,solid:!0})},Verified_Qty:function(t,e){for(var r=0;r<this.details.length;r++)this.details[r].detail_id==e&&(isNaN(t.quantity)&&(this.details[r].quantity=1),t.quantity>t.purchase_quantity?(this.makeToast("warning",this.$t("qty_return_is_greater_than_qty_purchased"),this.$t("Warning")),this.details[r].quantity=t.quantity_copy):t.quantity>t.stock?(this.makeToast("warning",this.$t("qty_return_is_greater_than_Quantity_Remaining"),this.$t("Warning")),this.details[r].quantity=t.quantity_copy):this.details[r].quantity=t.quantity,this.Calcul_Total(),this.$forceUpdate())},increment:function(t,e){for(var r=0;r<this.details.length;r++)this.details[r].detail_id==e&&(t.quantity+1>t.purchase_quantity?this.makeToast("warning",this.$t("qty_return_is_greater_than_qty_purchased"),this.$t("Warning")):t.quantity+1>t.stock?this.makeToast("warning",this.$t("qty_return_is_greater_than_Quantity_Remaining"),this.$t("Warning")):this.formatNumber(this.details[r].quantity++,2));this.$forceUpdate(),this.Calcul_Total()},decrement:function(t,e){for(var r=0;r<this.details.length;r++)this.details[r].detail_id==e&&t.quantity-1>0&&t.quantity-1>0&&(t.quantity-1>t.purchase_quantity?this.makeToast("warning",this.$t("qty_return_is_greater_than_qty_purchased"),this.$t("Warning")):t.quantity-1>t.stock?this.makeToast("warning",this.$t("qty_return_is_greater_than_Quantity_Remaining"),this.$t("Warning")):this.formatNumber(this.details[r].quantity--,2));this.$forceUpdate(),this.Calcul_Total()},formatNumber:function(t,e){var r=("string"==typeof t?t:t.toString()).split(".");if(e<=0)return r[0];var a=r[1]||"";if(a.length>e)return"".concat(r[0],".").concat(a.substr(0,e));for(;a.length<e;)a+="0";return"".concat(r[0],".").concat(a)},Calcul_Total:function(){this.total=0;for(var t=0;t<this.details.length;t++){var e=this.details[t].taxe*this.details[t].quantity;this.details[t].subtotal=parseFloat(this.details[t].quantity*this.details[t].Net_cost+e),this.total=parseFloat(this.total+this.details[t].subtotal)}var r=parseFloat(this.total-this.purchase_return.discount);this.purchase_return.TaxNet=parseFloat(r*this.purchase_return.tax_rate/100),this.GrandTotal=parseFloat(r+this.purchase_return.TaxNet+this.purchase_return.shipping);var a=this.GrandTotal.toFixed(2);this.GrandTotal=parseFloat(a)},keyup_OrderTax:function(){isNaN(this.purchase_return.tax_rate)?this.purchase_return.tax_rate=0:""==this.purchase_return.tax_rate?(this.purchase_return.tax_rate=0,this.Calcul_Total()):this.Calcul_Total()},keyup_Discount:function(){isNaN(this.purchase_return.discount)?this.purchase_return.discount=0:""==this.purchase_return.discount?(this.purchase_return.discount=0,this.Calcul_Total()):this.Calcul_Total()},keyup_Shipping:function(){isNaN(this.purchase_return.shipping)?this.purchase_return.shipping=0:""==this.purchase_return.shipping?(this.purchase_return.shipping=0,this.Calcul_Total()):this.Calcul_Total()},verifiedForm:function(){if(this.details.length<=0)return this.makeToast("warning",this.$t("AddProductToList"),this.$t("Warning")),!1;for(var t=0,e=0;e<this.details.length;e++)""==this.details[e].quantity&&0===this.details[e].quantity||(t+=1);return 0!==t||(this.makeToast("warning",this.$t("Please_add_return_quantity"),this.$t("Warning")),!1)},Update_purchase_return:function(){var t=this;if(this.verifiedForm()){this.SubmitProcessing=!0,i().start(),i().set(.1);var e=this.$route.params.id;axios.put("returns/purchase/".concat(e),{date:this.purchase_return.date,supplier_id:this.purchase_return.supplier_id,warehouse_id:this.purchase_return.warehouse_id,purchase_id:this.purchase_return.purchase_id,statut:this.purchase_return.statut,notes:this.purchase_return.notes,tax_rate:this.purchase_return.tax_rate?this.purchase_return.tax_rate:0,TaxNet:this.purchase_return.TaxNet?this.purchase_return.TaxNet:0,discount:this.purchase_return.discount?this.purchase_return.discount:0,shipping:this.purchase_return.shipping?this.purchase_return.shipping:0,GrandTotal:this.GrandTotal,details:this.details}).then((function(e){i().done(),t.makeToast("success",t.$t("Update.TitleReturn"),t.$t("Success")),t.SubmitProcessing=!1,t.$router.push({name:"index_purchase_return"})})).catch((function(e){i().done(),t.makeToast("danger",t.$t("InvalidData"),t.$t("Failed")),t.SubmitProcessing=!1}))}},GetElements:function(){var t=this,e=this.$route.params.id,r=this.$route.params.purchase_id;axios.get("returns/purchase/edit_purchase_return/".concat(e,"/").concat(r)).then((function(e){t.purchase_return=e.data.purchase_return,t.details=e.data.details,t.Calcul_Total(),t.isLoading=!1})).catch((function(e){setTimeout((function(){t.isLoading=!1}),500)}))}},created:function(){this.GetElements()}};const l=(0,r(14486).A)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-content"},[e("breadcumb",{attrs:{page:t.$t("EditPurchaseReturn"),folder:t.$t("ListReturns")}}),t._v(" "),t.isLoading?e("div",{staticClass:"loading_page spinner spinner-primary mr-3"}):t._e(),t._v(" "),t.isLoading?t._e():e("validation-observer",{ref:"edit_Return"},[e("b-form",{on:{submit:function(e){return e.preventDefault(),t.Submit_purchase_return.apply(null,arguments)}}},[e("b-row",[e("b-col",{attrs:{lg:"12",md:"12",sm:"12"}},[e("b-card",[e("b-row",[e("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"4",sm:"12"}},[e("validation-provider",{attrs:{name:"date",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(r){return[e("b-form-group",{attrs:{label:t.$t("date")+" *"}},[e("b-form-input",{attrs:{state:t.getValidationState(r),"aria-describedby":"date-feedback",type:"date"},model:{value:t.purchase_return.date,callback:function(e){t.$set(t.purchase_return,"date",e)},expression:"purchase_return.date"}}),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"OrderTax-feedback"}},[t._v(t._s(r.errors[0]))])],1)]}}],null,!1,2401931655)})],1),t._v(" "),e("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"4",sm:"12"}},[e("b-form-group",{attrs:{label:t.$t("Purchase")}},[e("b-form-input",{attrs:{label:"Purchase",disabled:"disabled"},model:{value:t.purchase_return.purchase_ref,callback:function(e){t.$set(t.purchase_return,"purchase_ref",e)},expression:"purchase_return.purchase_ref"}})],1)],1),t._v(" "),e("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"4",sm:"12"}},[e("validation-provider",{attrs:{name:"Status",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(r){var a=r.valid,s=r.errors;return e("b-form-group",{attrs:{label:t.$t("Status")+" *"}},[e("v-select",{class:{"is-invalid":!!s.length},attrs:{state:!s[0]&&(!!a||null),reduce:function(t){return t.value},placeholder:t.$t("Choose_Status"),options:[{label:"completed",value:"completed"},{label:"pending",value:"pending"}]},model:{value:t.purchase_return.statut,callback:function(e){t.$set(t.purchase_return,"statut",e)},expression:"purchase_return.statut"}}),t._v(" "),e("b-form-invalid-feedback",[t._v(t._s(s[0]))])],1)}}],null,!1,4018469702)})],1),t._v(" "),e("b-col",{attrs:{md:"12"}},[e("h5",[t._v(t._s(t.$t("list_product_returns"))+" *")]),t._v(" "),e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-hover"},[e("thead",{staticClass:"bg-gray-300"},[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("#")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("ProductName")))]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Net_Unit_Cost")))]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("qty_purchased")))]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Current_stock")))]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Qty_return")))]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Discount")))]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Tax")))]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("SubTotal")))])])]),t._v(" "),e("tbody",[t.details.length<=0?e("tr",[e("td",{attrs:{colspan:"9"}},[t._v(t._s(t.$t("NodataAvailable")))])]):t._e(),t._v(" "),t._l(t.details,(function(r){return e("tr",{key:r.detail_id,class:{row_deleted:1===r.del||0===r.no_unit}},[e("td",[t._v(t._s(r.detail_id))]),t._v(" "),e("td",[e("span",[t._v(t._s(r.code))]),t._v(" "),e("br"),t._v(" "),e("span",{staticClass:"badge badge-success"},[t._v(t._s(r.name))])]),t._v(" "),e("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.formatNumber(r.Net_cost,3)))]),t._v(" "),e("td",[e("span",{staticClass:"badge badge-outline-warning"},[t._v(t._s(r.purchase_quantity)+" "+t._s(r.unitPurchase))])]),t._v(" "),e("td",[e("span",{staticClass:"badge badge-outline-warning"},[t._v(t._s(r.stock)+" "+t._s(r.unitPurchase))])]),t._v(" "),e("td",[e("div",{staticClass:"quantity"},[e("b-input-group",[e("b-input-group-prepend",[e("span",{directives:[{name:"show",rawName:"v-show",value:0!==r.no_unit,expression:"detail.no_unit !== 0"}],staticClass:"btn btn-primary btn-sm",on:{click:function(e){return t.decrement(r,r.detail_id)}}},[t._v("-")])]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model.number",value:r.quantity,expression:"detail.quantity",modifiers:{number:!0}}],staticClass:"form-control",attrs:{min:0,disabled:1===r.del||0===r.no_unit},domProps:{value:r.quantity},on:{keyup:function(e){return t.Verified_Qty(r,r.detail_id)},input:function(e){e.target.composing||t.$set(r,"quantity",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),e("b-input-group-append",[e("span",{directives:[{name:"show",rawName:"v-show",value:0!==r.no_unit,expression:"detail.no_unit !== 0"}],staticClass:"btn btn-primary btn-sm",on:{click:function(e){return t.increment(r,r.detail_id)}}},[t._v("+")])])],1)],1)]),t._v(" "),e("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.formatNumber(r.DiscountNet*r.quantity,2)))]),t._v(" "),e("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.formatNumber(r.taxe*r.quantity,2)))]),t._v(" "),e("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(r.subtotal.toFixed(2)))])])}))],2)])])]),t._v(" "),e("div",{staticClass:"offset-md-9 col-md-3 mt-4"},[e("table",{staticClass:"table table-striped table-sm"},[e("tbody",[e("tr",[e("td",{staticClass:"bold"},[t._v(t._s(t.$t("OrderTax")))]),t._v(" "),e("td",[e("span",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.purchase_return.TaxNet.toFixed(2))+" ("+t._s(t.formatNumber(t.purchase_return.tax_rate,2))+" %)")])])]),t._v(" "),e("tr",[e("td",{staticClass:"bold"},[t._v(t._s(t.$t("Discount")))]),t._v(" "),e("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.purchase_return.discount.toFixed(2)))])]),t._v(" "),e("tr",[e("td",{staticClass:"bold"},[t._v(t._s(t.$t("Shipping")))]),t._v(" "),e("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.purchase_return.shipping.toFixed(2)))])]),t._v(" "),e("tr",[e("td",[e("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.$t("Total")))])]),t._v(" "),e("td",[e("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.currentUser.currency)+" "+t._s(t.GrandTotal.toFixed(2)))])])])])])]),t._v(" "),e("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"4",sm:"12"}},[e("validation-provider",{attrs:{name:"Order Tax",rules:{regex:/^\d*\.?\d*$/}},scopedSlots:t._u([{key:"default",fn:function(r){return[e("b-form-group",{attrs:{label:t.$t("OrderTax")}},[e("b-input-group",{attrs:{append:"%"}},[e("b-form-input",{attrs:{state:t.getValidationState(r),"aria-describedby":"OrderTax-feedback",label:"Order Tax"},on:{keyup:function(e){return t.keyup_OrderTax()}},model:{value:t.purchase_return.tax_rate,callback:function(e){t.$set(t.purchase_return,"tax_rate",t._n(e))},expression:"purchase_return.tax_rate"}})],1),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"OrderTax-feedback"}},[t._v(t._s(r.errors[0]))])],1)]}}],null,!1,1336547271)})],1),t._v(" "),e("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"4",sm:"12"}},[e("validation-provider",{attrs:{name:"Discount",rules:{regex:/^\d*\.?\d*$/}},scopedSlots:t._u([{key:"default",fn:function(r){return[e("b-form-group",{attrs:{label:t.$t("Discount")}},[e("b-input-group",{attrs:{append:t.currentUser.currency}},[e("b-form-input",{attrs:{state:t.getValidationState(r),"aria-describedby":"Discount-feedback",label:"Discount"},on:{keyup:function(e){return t.keyup_Discount()}},model:{value:t.purchase_return.discount,callback:function(e){t.$set(t.purchase_return,"discount",t._n(e))},expression:"purchase_return.discount"}})],1),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"Discount-feedback"}},[t._v(t._s(r.errors[0]))])],1)]}}],null,!1,2122150112)})],1),t._v(" "),e("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"4",sm:"12"}},[e("validation-provider",{attrs:{name:"Shipping",rules:{regex:/^\d*\.?\d*$/}},scopedSlots:t._u([{key:"default",fn:function(r){return[e("b-form-group",{attrs:{label:t.$t("Shipping")}},[e("b-input-group",{attrs:{append:t.currentUser.currency}},[e("b-form-input",{attrs:{state:t.getValidationState(r),"aria-describedby":"Shipping-feedback",label:"Shipping"},on:{keyup:function(e){return t.keyup_Shipping()}},model:{value:t.purchase_return.shipping,callback:function(e){t.$set(t.purchase_return,"shipping",t._n(e))},expression:"purchase_return.shipping"}})],1),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"Shipping-feedback"}},[t._v(t._s(r.errors[0]))])],1)]}}],null,!1,2406569408)})],1),t._v(" "),e("b-col",{attrs:{md:"12"}},[e("b-form-group",{attrs:{label:t.$t("Please_provide_any_details")}},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.purchase_return.notes,expression:"purchase_return.notes"}],staticClass:"form-control",attrs:{rows:"4",placeholder:t.$t("Afewwords")},domProps:{value:t.purchase_return.notes},on:{input:function(e){e.target.composing||t.$set(t.purchase_return,"notes",e.target.value)}}})])],1),t._v(" "),e("b-col",{attrs:{md:"12"}},[e("b-form-group",[e("b-button",{attrs:{variant:"primary",disabled:t.SubmitProcessing},on:{click:t.Submit_purchase_return}},[e("i",{staticClass:"i-Yes me-2 font-weight-bold"}),t._v(" "+t._s(t.$t("submit")))]),t._v(" "),t.SubmitProcessing?t._m(0):t._e()],1)],1)],1)],1)],1)],1)],1)],1)],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"typo__p"},[t("div",{staticClass:"spinner sm spinner-primary mt-3"})])}],!1,null,null,null).exports}}]);