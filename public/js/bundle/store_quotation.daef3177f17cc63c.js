"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2233],{11014:(t,e,i)=>{i.r(e),i.d(e,{default:()=>_});var a=i(95353),s=i(5947),r=i.n(s);const o={data:function(){return{description:"",unitPrice:0,quantity:0}},methods:{handleOk:function(t){var e={description:this.description,unitPrice:this.unitPrice,quantity:this.quantity};t.preventDefault(),this.$emit("submit",e)}}};var n=i(14486);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function d(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function l(t,e,i){return(e=function(t){var e=function(t,e){if("object"!==u(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var a=i.call(t,e||"default");if("object"!==u(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===u(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}const c={components:{CreateFreetextDetail:(0,n.A)(o,(function(){var t=this,e=t._self._c;return e("div",[e("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal1",modifiers:{modal1:!0}}],staticClass:"mt-3",attrs:{variant:"primary","r-click":"() => AddUnamed()"}},[e("i",{staticClass:"i-add me-2"}),t._v("\n                "+t._s(t.$t("Add"))+"\n              ")]),t._v(" "),e("b-modal",{attrs:{id:"modal1",title:"Enter Details"},on:{ok:t.handleOk}},[e("form",{on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleOk.apply(null,arguments)}}},[e("b-form-group",{attrs:{label:"Description"}},[e("b-form-input",{model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1),t._v(" "),e("b-form-group",{attrs:{label:"Unit Price"}},[e("b-form-input",{attrs:{type:"number"},model:{value:t.unitPrice,callback:function(e){t.unitPrice=e},expression:"unitPrice"}})],1),t._v(" "),e("b-form-group",{attrs:{label:"Quantity"}},[e("b-form-input",{attrs:{type:"number"},model:{value:t.quantity,callback:function(e){t.quantity=e},expression:"quantity"}})],1)],1)])],1)}),[],!1,null,null,null).exports},metaInfo:{title:"Create Quotation"},data:function(){return{focused:!1,timer:null,search_input:"",product_filter:[],isLoading:!0,SubmitProcessing:!1,Submit_Processing_detail:!1,warehouses:[],units:[],clients:[],products:[],details:[],detail:{},quotations:[],quotation_with_stock:"",quote:{id:"",statut:"pending",notes:"",date:(new Date).toISOString().slice(0,10),client_id:"",warehouse_id:"",tax_rate:0,TaxNet:0,shipping:0,discount:0},total:0,GrandTotal:0,product:{id:"",code:"",product_type:"",stock:"",quantity:1,discount:"",DiscountNet:"",discount_Method:"",sale_unit_id:"",fix_stock:"",fix_price:"",name:"",unitSale:"",Net_price:"",Total_price:"",Unit_price:"",subtotal:"",product_id:"",detail_id:"",taxe:"",tax_percent:"",tax_method:"",product_variant_id:"",is_imei:"",imei_number:""},symbol:""}},computed:function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?d(Object(i),!0).forEach((function(e){l(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):d(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}({},(0,a.L8)(["currentUserPermissions","currentUser"])),methods:{handleFocus:function(){this.focused=!0},handleBlur:function(){this.focused=!1},Submit_Quotation:function(){var t=this;this.$refs.create_quote.validate().then((function(e){e?t.Create_Quotation():t.makeToast("danger",t.$t("Please_fill_the_form_correctly"),t.$t("Failed"))}))},submit_Update_Detail:function(){var t=this;this.$refs.Update_Detail_quote.validate().then((function(e){e&&t.Update_Detail()}))},getValidationState:function(t){var e=t.dirty,i=t.validated,a=t.valid;return e||i?void 0===a?null:a:null},makeToast:function(t,e,i){this.$root.$bvToast.toast(e,{title:i,variant:t,solid:!0})},get_units:function(t){var e=this;axios.get("get_units?id="+t).then((function(t){var i=t.data;return e.units=i}))},Modal_Updat_Detail:function(t){var e=this;r().start(),r().set(.1),this.detail={},this.get_units(t.product_id),this.detail.detail_id=t.detail_id,this.detail.sale_unit_id=t.sale_unit_id,this.detail.name=t.name,this.detail.product_type=t.product_type,this.detail.Unit_price=t.Unit_price,this.detail.fix_price=t.fix_price,this.detail.fix_stock=t.fix_stock,this.detail.stock=t.stock,this.detail.tax_method=t.tax_method,this.detail.discount_Method=t.discount_Method,this.detail.discount=t.discount,this.detail.quantity=t.quantity,this.detail.tax_percent=t.tax_percent,this.detail.is_imei=t.is_imei,this.detail.imei_number=t.imei_number,setTimeout((function(){r().done(),e.$bvModal.show("form_Update_Detail")}),1e3)},Update_Detail:function(){var t=this;r().start(),r().set(.1),this.Submit_Processing_detail=!0;for(var e=0;e<this.details.length;e++)if(this.details[e].detail_id===this.detail.detail_id){for(var i=0;i<this.units.length;i++)this.units[i].id==this.detail.sale_unit_id&&("/"==this.units[i].operator?(this.details[e].stock=this.detail.fix_stock*this.units[i].operator_value,this.details[e].unitSale=this.units[i].ShortName):(this.details[e].stock=this.detail.fix_stock/this.units[i].operator_value,this.details[e].unitSale=this.units[i].ShortName));this.details[e].stock<this.details[e].quantity?this.details[e].quantity=this.details[e].stock:this.details[e].quantity=1,this.details[e].Unit_price=this.detail.Unit_price,this.details[e].tax_percent=this.detail.tax_percent,this.details[e].tax_method=this.detail.tax_method,this.details[e].discount_Method=this.detail.discount_Method,this.details[e].discount=this.detail.discount,this.details[e].sale_unit_id=this.detail.sale_unit_id,this.details[e].imei_number=this.detail.imei_number,this.details[e].product_type=this.detail.product_type,"2"==this.details[e].discount_Method?this.details[e].DiscountNet=this.details[e].discount:this.details[e].DiscountNet=parseFloat(this.details[e].Unit_price*this.details[e].discount/100),"1"==this.details[e].tax_method?(this.details[e].Net_price=parseFloat(this.details[e].Unit_price-this.details[e].DiscountNet),this.details[e].taxe=parseFloat(this.details[e].tax_percent*(this.details[e].Unit_price-this.details[e].DiscountNet)/100)):(this.details[e].Net_price=parseFloat((this.details[e].Unit_price-this.details[e].DiscountNet)/(this.details[e].tax_percent/100+1)),this.details[e].taxe=parseFloat(this.details[e].Unit_price-this.details[e].Net_price-this.details[e].DiscountNet)),this.$forceUpdate()}this.Calcul_Total(),setTimeout((function(){r().done(),t.Submit_Processing_detail=!1,t.$bvModal.hide("form_Update_Detail")}),1e3)},search:function(){var t=this;if(this.timer&&(clearTimeout(this.timer),this.timer=null),this.search_input.length<2)return this.product_filter=[];""!=this.quote.warehouse_id&&null!=this.quote.warehouse_id?this.timer=setTimeout((function(){var e=t.products.filter((function(e){return e.code===t.search_input||e.barcode.includes(t.search_input)}));1===e.length?t.SearchProduct(e[0]):t.product_filter=t.products.filter((function(e){return e.name.toLowerCase().includes(t.search_input.toLowerCase())||e.code.toLowerCase().includes(t.search_input.toLowerCase())||e.barcode.toLowerCase().includes(t.search_input.toLowerCase())}))}),800):this.makeToast("warning",this.$t("SelectWarehouse"),this.$t("Warning"))},getResultValue:function(t){return t.code+" ("+t.name+")"},SearchProduct:function(t){this.product={},this.details.length>0&&this.details.some((function(e){return e.code===t.code}))?this.makeToast("warning",this.$t("AlreadyAdd"),this.$t("Warning")):("is_service"==t.product_type?(this.product.quantity=1,this.product.code=t.code):(this.product.code=t.code,this.product.stock=t.qte_sale,this.product.fix_stock=t.qte,t.qte_sale<1?this.product.quantity=t.qte_sale:this.product.quantity=1),this.product.product_variant_id=t.product_variant_id,this.Get_Product_Details(t.id,t.product_variant_id)),this.search_input="",this.$refs.product_autocomplete.value="",this.product_filter=[]},AddUnamed:function(t){var e,i;this.product={},this.product.quantity=(null==t?void 0:t.quantity)||1,this.product.code=null!==(e=null==t?void 0:t.description)&&void 0!==e?e:"Free Text",this.product.Unit_price=null!==(i=null==t?void 0:t.unitPrice)&&void 0!==i?i:0,this.product.stock=1/0,this.product.discount=0,this.product.DiscountNet=0,this.product.discount_Method="2",this.product.product_type="free_text",this.product.name="[Edit This]",this.product.Net_price=0,this.product.Unit_price=0,this.product.fix_price=0,this.product.taxe=0,this.product.tax_method="no_tax",this.product.tax_percent=20,this.product.unitSale="na",this.product.is_imei=!1,this.product.imei_number="",this.add_product(),this.Calcul_Total()},Selected_Warehouse:function(t){this.search_input="",this.product_filter=[],this.Get_Products_By_Warehouse(t)},Get_Products_By_Warehouse:function(t){var e=this;r().start(),r().set(.1),axios.get("get_Products_by_warehouse/"+t+"?stock="+this.quotation_with_stock+"&product_service=1").then((function(t){e.products=t.data,r().done()})).catch((function(t){}))},add_product:function(){this.details.length>0?this.Last_Detail_id():0===this.details.length&&(this.product.detail_id=1),this.details.push(this.product),this.product.is_imei&&this.Modal_Updat_Detail(this.product)},Verified_Qty:function(t,e){for(var i=0;i<this.details.length;i++)this.details[i].detail_id===e&&(isNaN(t.quantity)&&(this.details[i].quantity=t.stock),this.quotation_with_stock&&t.quantity>t.stock?(this.makeToast("warning",this.$t("LowStock"),this.$t("Warning")),this.details[i].quantity=t.stock):this.details[i].quantity=t.quantity);this.$forceUpdate(),this.Calcul_Total()},increment:function(t,e){for(var i=0;i<this.details.length;i++)this.details[i].detail_id==e&&(this.quotation_with_stock&&t.quantity+1>t.stock?this.makeToast("warning",this.$t("LowStock"),this.$t("Warning")):this.formatNumber(this.details[i].quantity++,2));this.$forceUpdate(),this.Calcul_Total()},decrement:function(t,e){for(var i=0;i<this.details.length;i++)this.details[i].detail_id==e&&t.quantity-1>0&&(this.quotation_with_stock&&t.quantity-1>t.stock?this.makeToast("warning",this.$t("LowStock"),this.$t("Warning")):this.formatNumber(this.details[i].quantity--,2));this.$forceUpdate(),this.Calcul_Total()},keyup_OrderTax:function(){isNaN(this.quote.tax_rate)?this.quote.tax_rate=0:""==this.quote.tax_rate?(this.quote.tax_rate=0,this.Calcul_Total()):this.Calcul_Total()},keyup_Discount:function(){isNaN(this.quote.discount)?this.quote.discount=0:""==this.quote.discount?(this.quote.discount=0,this.Calcul_Total()):this.Calcul_Total()},keyup_Shipping:function(){isNaN(this.quote.shipping)?this.quote.shipping=0:""==this.quote.shipping?(this.quote.shipping=0,this.Calcul_Total()):this.Calcul_Total()},formatNumber:function(t,e){var i=("string"==typeof t?t:t.toString()).split(".");if(e<=0)return i[0];var a=i[1]||"";if(a.length>e)return"".concat(i[0],".").concat(a.substr(0,e));for(;a.length<e;)a+="0";return"".concat(i[0],".").concat(a)},Calcul_Total:function(){this.total=0;for(var t=0;t<this.details.length;t++){var e=this.details[t].taxe*this.details[t].quantity;this.details[t].subtotal=parseFloat(this.details[t].quantity*this.details[t].Net_price+e),this.total=parseFloat(this.total+this.details[t].subtotal)}var i=parseFloat(this.total-this.quote.discount);this.quote.TaxNet=parseFloat(i*this.quote.tax_rate/100),this.GrandTotal=parseFloat(i+this.quote.TaxNet+this.quote.shipping);var a=this.GrandTotal.toFixed(2);this.GrandTotal=parseFloat(a)},delete_Product_Detail:function(t){for(var e=0;e<this.details.length;e++)t===this.details[e].detail_id&&(this.details.splice(e,1),this.Calcul_Total())},verifiedForm:function(){if(this.details.length<=0)return this.makeToast("warning",this.$t("AddProductToList"),this.$t("Warning")),!1;for(var t=0,e=0;e<this.details.length;e++)""!=this.details[e].quantity&&0!==this.details[e].quantity||(t+=1);return!(t>0)||(this.makeToast("warning",this.$t("AddQuantity"),this.$t("Warning")),!1)},Create_Quotation:function(){var t=this;this.verifiedForm()&&(this.SubmitProcessing=!0,r().start(),r().set(.1),axios.post("quotations",{date:this.quote.date,client_id:this.quote.client_id,GrandTotal:this.GrandTotal,warehouse_id:this.quote.warehouse_id,statut:this.quote.statut,notes:this.quote.notes,tax_rate:this.quote.tax_rate?this.quote.tax_rate:0,TaxNet:this.quote.TaxNet?this.quote.TaxNet:0,Discount:this.quote.discount?this.quote.discount:0,shipping:this.quote.shipping?this.quote.shipping:0,details:this.details}).then((function(e){r().done(),t.makeToast("success",t.$t("Create.TitleQuote"),t.$t("Success")),t.SubmitProcessing=!1,t.$router.push({name:"index_quotation"})})).catch((function(e){r().done(),t.makeToast("danger",t.$t("InvalidData"),t.$t("Failed")),t.SubmitProcessing=!1})))},Last_Detail_id:function(){this.product.detail_id=0;var t=this.details.length;this.product.detail_id=this.details[t-1].detail_id+1},Get_Product_Details:function(t,e){var i=this;axios.get("/show_product_data/"+t+"/"+e).then((function(t){i.product.discount=0,i.product.DiscountNet=0,i.product.discount_Method="2",i.product.product_id=t.data.id,i.product.product_type=t.data.product_type,i.product.name=t.data.name,i.product.Net_price=t.data.Net_price,i.product.Unit_price=t.data.Unit_price,i.product.fix_price=t.data.fix_price,i.product.taxe=t.data.tax_price,i.product.tax_method=t.data.tax_method,i.product.tax_percent=t.data.tax_percent,i.product.unitSale=t.data.unitSale,i.product.sale_unit_id=t.data.sale_unit_id,i.product.is_imei=t.data.is_imei,i.product.imei_number="",i.add_product(),i.Calcul_Total()}))},GetElements:function(){var t=this;axios.get("quotations/create").then((function(e){var i;(t.clients=e.data.clients,t.warehouses=e.data.warehouses,t.quote.warehouse_id)||(t.quote.warehouse_id=null===(i=e.data.warehouses[0])||void 0===i?void 0:i.id,setTimeout((function(){t.Selected_Warehouse(t.quote.warehouse_id)}),100));t.quotation_with_stock=e.data.quotation_with_stock,t.isLoading=!1})).catch((function(e){setTimeout((function(){t.isLoading=!1}),500)}))}},created:function(){this.GetElements()}};const _=(0,n.A)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-content"},[e("breadcumb",{attrs:{page:t.$t("AddQuote"),folder:t.$t("ListQuotations")}}),t._v(" "),t.isLoading?e("div",{staticClass:"loading_page spinner spinner-primary mr-3"}):t._e(),t._v(" "),t.isLoading?t._e():e("validation-observer",{ref:"create_quote"},[e("b-form",{on:{submit:function(e){return e.preventDefault(),t.Submit_Quotation.apply(null,arguments)}}},[e("b-row",[e("b-col",{attrs:{lg:"12",md:"12",sm:"12"}},[e("b-card",[e("b-row",[e("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"4",sm:"12"}},[e("validation-provider",{attrs:{name:"date",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(i){return[e("b-form-group",{attrs:{label:t.$t("date")+" *"}},[e("b-form-input",{attrs:{state:t.getValidationState(i),"aria-describedby":"date-feedback",type:"date"},model:{value:t.quote.date,callback:function(e){t.$set(t.quote,"date",e)},expression:"quote.date"}}),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"OrderTax-feedback"}},[t._v(t._s(i.errors[0]))])],1)]}}],null,!1,360094787)})],1),t._v(" "),e("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"4",sm:"12"}},[e("validation-provider",{attrs:{name:"Customer",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(i){var a=i.valid,s=i.errors;return e("b-form-group",{attrs:{label:t.$t("Customer")+" *"}},[e("v-select",{class:{"is-invalid":!!s.length},attrs:{state:!s[0]&&(!!a||null),reduce:function(t){return t.value},placeholder:t.$t("Choose_Customer"),options:t.clients.map((function(t){return{label:t.name,value:t.id}}))},model:{value:t.quote.client_id,callback:function(e){t.$set(t.quote,"client_id",e)},expression:"quote.client_id"}}),t._v(" "),e("b-form-invalid-feedback",[t._v(t._s(s[0]))])],1)}}],null,!1,2018987146)})],1),t._v(" "),e("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"4",sm:"12"}},[e("validation-provider",{attrs:{name:"warehouse",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(i){var a=i.valid,s=i.errors;return e("b-form-group",{attrs:{label:t.$t("warehouse")+" *"}},[e("v-select",{class:{"is-invalid":!!s.length},attrs:{state:!s[0]&&(!!a||null),disabled:t.details.length>0,reduce:function(t){return t.value},placeholder:t.$t("Choose_Warehouse"),options:t.warehouses.map((function(t){return{label:t.name,value:t.id}}))},on:{input:t.Selected_Warehouse},model:{value:t.quote.warehouse_id,callback:function(e){t.$set(t.quote,"warehouse_id",e)},expression:"quote.warehouse_id"}}),t._v(" "),e("b-form-invalid-feedback",[t._v(t._s(s[0]))])],1)}}],null,!1,1546300320)})],1),t._v(" "),e("b-col",{staticClass:"mb-5",attrs:{cols:"9",md:"11"}},[e("h6",[t._v(t._s(t.$t("ProductName")))]),t._v(" "),e("div",{staticClass:"autocomplete",attrs:{id:"autocomplete"}},[e("input",{ref:"product_autocomplete",staticClass:"autocomplete-input",attrs:{placeholder:t.$t("Scan_Search_Product_by_Code_Name")},on:{input:function(e){return t.search_input=e.target.value},keyup:function(e){return t.search(t.search_input)},focus:t.handleFocus,blur:t.handleBlur}}),t._v(" "),e("ul",{directives:[{name:"show",rawName:"v-show",value:t.focused,expression:"focused"}],staticClass:"autocomplete-result-list"},t._l(t.product_filter,(function(i){return e("li",{staticClass:"autocomplete-result",on:{mousedown:function(e){return t.SearchProduct(i)}}},[t._v(t._s(t.getResultValue(i)))])})),0)])]),t._v(" "),e("b-col",{staticClass:"pt-3",attrs:{sm:"12",md:"1"}},[e("CreateFreetextDetail",{on:{submit:function(e){return t.AddUnamed(e)}}})],1),t._v(" "),e("b-col",{attrs:{md:"12"}},[e("b-form-group",{attrs:{label:t.$t("OBJECT")}},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.quote.notes,expression:"quote.notes"}],staticClass:"form-control",attrs:{rows:"4",placeholder:t.$t("Afewwords")},domProps:{value:t.quote.notes},on:{input:function(e){e.target.composing||t.$set(t.quote,"notes",e.target.value)}}})])],1),t._v(" "),e("b-col",{attrs:{md:"12"}},[e("h5",[t._v(t._s(t.$t("order_products"))+" *")]),t._v(" "),e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-hover"},[e("thead",{staticClass:"bg-gray-300"},[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("#")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("ProductName")))]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Net_Unit_Price")))]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("CurrentStock")))]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Qty")))]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Discount")))]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Tax")))]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("SubTotal")))]),t._v(" "),e("th",{staticClass:"text-center",attrs:{scope:"col"}},[e("i",{staticClass:"fa fa-trash"})])])]),t._v(" "),e("tbody",[t.details.length<=0?e("tr",[e("td",{attrs:{colspan:"9"}},[t._v(t._s(t.$t("NodataAvailable")))])]):t._e(),t._v(" "),t._l(t.details,(function(i){return e("tr",[e("td",[t._v(t._s(i.detail_id))]),t._v(" "),e("td",[e("span",[t._v(t._s(i.code))]),t._v(" "),e("br"),t._v(" "),e("span",{staticClass:"badge badge-success"},[t._v(t._s(i.name))])]),t._v(" "),e("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.formatNumber(i.Net_price,3)))]),t._v(" "),e("td",["is_service"==i.product_type?e("span",{staticClass:"badge badge-warning"},[t._v("----")]):e("span",{staticClass:"badge badge-warning"},[t._v(t._s(i.stock)+" "+t._s(i.unitSale))])]),t._v(" "),e("td",[e("div",{staticClass:"quantity"},[e("b-input-group",[e("b-input-group-prepend",[e("span",{staticClass:"btn btn-primary btn-sm",on:{click:function(e){return t.decrement(i,i.detail_id)}}},[t._v("-")])]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model.number",value:i.quantity,expression:"detail.quantity",modifiers:{number:!0}}],staticClass:"form-control",attrs:{min:0,max:i.stock},domProps:{value:i.quantity},on:{keyup:function(e){return t.Verified_Qty(i,i.detail_id)},input:function(e){e.target.composing||t.$set(i,"quantity",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),e("b-input-group-append",[e("span",{staticClass:"btn btn-primary btn-sm",on:{click:function(e){return t.increment(i,i.detail_id)}}},[t._v("+")])])],1)],1)]),t._v(" "),e("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.formatNumber(i.DiscountNet*i.quantity,2))+"\n                        ")]),t._v(" "),e("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.formatNumber(i.taxe*i.quantity,2)))]),t._v(" "),e("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(i.subtotal.toFixed(2)))]),t._v(" "),e("td",[t.currentUserPermissions&&t.currentUserPermissions.includes("edit_product_quotation")?e("i",{staticClass:"i-Edit text-25 text-success cursor-pointer",on:{click:function(e){return t.Modal_Updat_Detail(i)}}}):t._e(),t._v(" "),e("i",{staticClass:"i-Close-Window text-25 text-danger cursor-pointer",on:{click:function(e){return t.delete_Product_Detail(i.detail_id)}}})])])}))],2)])])]),t._v(" "),e("div",{staticClass:"offset-md-9 col-md-3 mt-4"},[e("table",{staticClass:"table table-striped table-sm"},[e("tbody",[e("tr",[e("td",{staticClass:"bold"},[t._v(t._s(t.$t("OrderTax")))]),t._v(" "),e("td",[e("span",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.quote.TaxNet.toFixed(2))+" ("+t._s(t.formatNumber(t.quote.tax_rate,2))+"\n                          %)")])])]),t._v(" "),e("tr",[e("td",{staticClass:"bold"},[t._v(t._s(t.$t("Discount")))]),t._v(" "),e("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.quote.discount.toFixed(2)))])]),t._v(" "),e("tr",[e("td",{staticClass:"bold"},[t._v(t._s(t.$t("Shipping")))]),t._v(" "),e("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.quote.shipping.toFixed(2)))])]),t._v(" "),e("tr",[e("td",[e("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.$t("Total")))])]),t._v(" "),e("td",[e("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.currentUser.currency)+" "+t._s(t.GrandTotal.toFixed(2)))])])])])])]),t._v(" "),t.currentUserPermissions&&t.currentUserPermissions.includes("edit_tax_discount_shipping_quotation")?e("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"4",sm:"12"}},[e("validation-provider",{attrs:{name:"Order Tax",rules:{regex:/^\d*\.?\d*$/}},scopedSlots:t._u([{key:"default",fn:function(i){return[e("b-form-group",{attrs:{label:t.$t("OrderTax")}},[e("b-input-group",{attrs:{append:"%"}},[e("b-form-input",{attrs:{state:t.getValidationState(i),"aria-describedby":"OrderTax-feedback",label:"Order Tax"},on:{keyup:function(e){return t.keyup_OrderTax()}},model:{value:t.quote.tax_rate,callback:function(e){t.$set(t.quote,"tax_rate",t._n(e))},expression:"quote.tax_rate"}})],1),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"OrderTax-feedback"}},[t._v(t._s(i.errors[0]))])],1)]}}],null,!1,3727461571)})],1):t._e(),t._v(" "),t.currentUserPermissions&&t.currentUserPermissions.includes("edit_tax_discount_shipping_quotation")?e("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"4",sm:"12"}},[e("validation-provider",{attrs:{name:"Discount",rules:{regex:/^\d*\.?\d*$/}},scopedSlots:t._u([{key:"default",fn:function(i){return[e("b-form-group",{attrs:{label:t.$t("Discount")}},[e("b-input-group",{attrs:{append:t.currentUser.currency}},[e("b-form-input",{attrs:{state:t.getValidationState(i),"aria-describedby":"Discount-feedback",label:"Discount"},on:{keyup:function(e){return t.keyup_Discount()}},model:{value:t.quote.discount,callback:function(e){t.$set(t.quote,"discount",t._n(e))},expression:"quote.discount"}})],1),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"Discount-feedback"}},[t._v(t._s(i.errors[0]))])],1)]}}],null,!1,1727881252)})],1):t._e(),t._v(" "),t.currentUserPermissions&&t.currentUserPermissions.includes("edit_tax_discount_shipping_quotation")?e("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"4",sm:"12"}},[e("validation-provider",{attrs:{name:"Shipping",rules:{regex:/^\d*\.?\d*$/}},scopedSlots:t._u([{key:"default",fn:function(i){return[e("b-form-group",{attrs:{label:t.$t("Shipping")}},[e("b-input-group",{attrs:{append:t.currentUser.currency}},[e("b-form-input",{attrs:{state:t.getValidationState(i),"aria-describedby":"Shipping-feedback",label:"Shipping"},on:{keyup:function(e){return t.keyup_Shipping()}},model:{value:t.quote.shipping,callback:function(e){t.$set(t.quote,"shipping",t._n(e))},expression:"quote.shipping"}})],1),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"Shipping-feedback"}},[t._v(t._s(i.errors[0]))])],1)]}}],null,!1,2462909828)})],1):t._e(),t._v(" "),e("b-col",{attrs:{md:"12"}},[e("b-form-group",[e("b-button",{attrs:{variant:"primary",disabled:t.SubmitProcessing},on:{click:t.Submit_Quotation}},[e("i",{staticClass:"i-Yes me-2 font-weight-bold"}),t._v(" "+t._s(t.$t("submit")))]),t._v(" "),t.SubmitProcessing?t._m(0):t._e()],1)],1)],1)],1)],1)],1)],1)],1),t._v(" "),e("validation-observer",{ref:"Update_Detail_quote"},[e("b-modal",{attrs:{"hide-footer":"",size:"lg",id:"form_Update_Detail",title:t.detail.name}},[e("b-form",{on:{submit:function(e){return e.preventDefault(),t.submit_Update_Detail.apply(null,arguments)}}},[e("b-row",[e("b-col",{attrs:{lg:"6",md:"6",sm:"12"}},[e("validation-provider",{attrs:{name:"Product Price",rules:{required:!0,regex:/^\d*\.?\d*$/}},scopedSlots:t._u([{key:"default",fn:function(i){return[e("b-form-group",{attrs:{label:t.$t("ProductPrice")+" *",id:"Price-input"}},[e("b-form-input",{attrs:{label:"Product Price",state:t.getValidationState(i),"aria-describedby":"Price-feedback"},model:{value:t.detail.Unit_price,callback:function(e){t.$set(t.detail,"Unit_price",e)},expression:"detail.Unit_price"}}),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"Price-feedback"}},[t._v(t._s(i.errors[0]))])],1)]}}])})],1),t._v(" "),e("b-col",{attrs:{lg:"6",md:"6",sm:"12"}},[e("validation-provider",{attrs:{name:"Tax Method",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(i){var a=i.valid,s=i.errors;return e("b-form-group",{attrs:{label:t.$t("TaxMethod")+" *"}},[e("v-select",{class:{"is-invalid":!!s.length},attrs:{state:!s[0]&&(!!a||null),reduce:function(t){return t.value},placeholder:t.$t("Choose_Method"),options:[{label:"Exclusive",value:"1"},{label:"Inclusive",value:"2"}]},model:{value:t.detail.tax_method,callback:function(e){t.$set(t.detail,"tax_method",e)},expression:"detail.tax_method"}}),t._v(" "),e("b-form-invalid-feedback",[t._v(t._s(s[0]))])],1)}}])})],1),t._v(" "),e("b-col",{attrs:{lg:"6",md:"6",sm:"12"}},[e("validation-provider",{attrs:{name:"Order Tax",rules:{required:!0,regex:/^\d*\.?\d*$/}},scopedSlots:t._u([{key:"default",fn:function(i){return[e("b-form-group",{attrs:{label:t.$t("OrderTax")+" *"}},[e("b-input-group",{attrs:{append:"%"}},[e("b-form-input",{attrs:{label:"Order Tax",state:t.getValidationState(i),"aria-describedby":"OrderTax-feedback"},model:{value:t.detail.tax_percent,callback:function(e){t.$set(t.detail,"tax_percent",e)},expression:"detail.tax_percent"}})],1),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"OrderTax-feedback"}},[t._v(t._s(i.errors[0]))])],1)]}}])})],1),t._v(" "),e("b-col",{attrs:{lg:"6",md:"6",sm:"12"}},[e("validation-provider",{attrs:{name:"Discount Method",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(i){var a=i.valid,s=i.errors;return e("b-form-group",{attrs:{label:t.$t("Discount_Method")+" *"}},[e("v-select",{class:{"is-invalid":!!s.length},attrs:{reduce:function(t){return t.value},placeholder:t.$t("Choose_Method"),state:!s[0]&&(!!a||null),options:[{label:"Percent %",value:"1"},{label:"Fixed",value:"2"}]},model:{value:t.detail.discount_Method,callback:function(e){t.$set(t.detail,"discount_Method",e)},expression:"detail.discount_Method"}}),t._v(" "),e("b-form-invalid-feedback",[t._v(t._s(s[0]))])],1)}}])})],1),t._v(" "),e("b-col",{attrs:{lg:"6",md:"6",sm:"12"}},[e("validation-provider",{attrs:{name:"Discount Rate",rules:{required:!0,regex:/^\d*\.?\d*$/}},scopedSlots:t._u([{key:"default",fn:function(i){return[e("b-form-group",{attrs:{label:t.$t("Discount")+" *"}},[e("b-form-input",{attrs:{label:"Discount",state:t.getValidationState(i),"aria-describedby":"Discount-feedback"},model:{value:t.detail.discount,callback:function(e){t.$set(t.detail,"discount",e)},expression:"detail.discount"}}),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"Discount-feedback"}},[t._v(t._s(i.errors[0]))])],1)]}}])})],1),t._v(" "),"is_service"!=t.detail.product_type?e("b-col",{attrs:{lg:"6",md:"6",sm:"12"}},[e("validation-provider",{attrs:{name:"Unit Sale",rules:{required:!1}},scopedSlots:t._u([{key:"default",fn:function(i){var a=i.valid,s=i.errors;return e("b-form-group",{attrs:{label:t.$t("UnitSale")}},[e("v-select",{class:{"is-invalid":!!s.length},attrs:{state:!s[0]&&(!!a||null),placeholder:t.$t("Choose_Unit_Sale"),reduce:function(t){return t.value},options:t.units.map((function(t){return{label:t.name,value:t.id}}))},model:{value:t.detail.sale_unit_id,callback:function(e){t.$set(t.detail,"sale_unit_id",e)},expression:"detail.sale_unit_id"}}),t._v(" "),e("b-form-invalid-feedback",[t._v(t._s(s[0]))])],1)}}],null,!1,1152733391)})],1):t._e(),t._v(" "),e("b-col",{directives:[{name:"show",rawName:"v-show",value:t.detail.is_imei,expression:"detail.is_imei"}],attrs:{lg:"12",md:"12",sm:"12"}},[e("b-form-group",{attrs:{label:t.$t("Add_product_IMEI_Serial_number")}},[e("b-form-input",{attrs:{label:"Add_product_IMEI_Serial_number",placeholder:t.$t("Add_product_IMEI_Serial_number")},model:{value:t.detail.imei_number,callback:function(e){t.$set(t.detail,"imei_number",e)},expression:"detail.imei_number"}})],1)],1),t._v(" "),e("b-col",{attrs:{md:"12"}},[e("b-form-group",[e("b-button",{attrs:{variant:"primary",type:"submit",disabled:t.Submit_Processing_detail}},[e("i",{staticClass:"i-Yes me-2 font-weight-bold"}),t._v(" "+t._s(t.$t("submit")))]),t._v(" "),t.Submit_Processing_detail?t._m(1):t._e()],1)],1)],1)],1)],1)],1)],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"typo__p"},[t("div",{staticClass:"spinner sm spinner-primary mt-3"})])},function(){var t=this._self._c;return t("div",{staticClass:"typo__p"},[t("div",{staticClass:"spinner sm spinner-primary mt-3"})])}],!1,null,null,null).exports}}]);