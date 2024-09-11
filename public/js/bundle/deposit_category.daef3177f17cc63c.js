"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4162],{62190:(t,e,r)=>{r.r(e),r.d(e,{default:()=>u});var i=r(95353),s=r(5947),o=r.n(s);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==a(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,e||"default");if("object"!==a(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===a(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const d={metaInfo:{title:"Deposit Category"},data:function(){return{isLoading:!0,SubmitProcessing:!1,serverParams:{columnFilters:{},sort:{field:"id",type:"desc"},page:1,perPage:10},selectedIds:[],totalRows:"",search:"",categories:[],editmode:!1,limit:"10",category:{id:"",title:""}}},computed:c(c({},(0,i.L8)(["currentUserPermissions"])),{},{columns:function(){return[{label:this.$t("title"),field:"title",tdClass:"text-left",thClass:"text-left"},{label:this.$t("Action"),field:"actions",html:!0,tdClass:"text-right",thClass:"text-right",sortable:!1}]}}),methods:{Submit_Category:function(){var t=this;this.$refs.Create_Category.validate().then((function(e){e?t.editmode?t.Update_Category():t.Create_Category():t.makeToast("danger",t.$t("Please_fill_the_form_correctly"),t.$t("Failed"))}))},makeToast:function(t,e,r){this.$root.$bvToast.toast(e,{title:r,variant:t,solid:!0})},updateParams:function(t){this.serverParams=Object.assign({},this.serverParams,t)},onPageChange:function(t){var e=t.currentPage;this.serverParams.page!==e&&(this.updateParams({page:e}),this.Get_Categories(e))},onPerPageChange:function(t){var e=t.currentPerPage;this.limit!==e&&(this.limit=e,this.updateParams({page:1,perPage:e}),this.Get_Categories(1))},selectionChanged:function(t){var e=this,r=t.selectedRows;this.selectedIds=[],r.forEach((function(t,r){e.selectedIds.push(t.id)}))},onSortChange:function(t){this.updateParams({sort:{type:t[0].type,field:t[0].field}}),this.Get_Categories(this.serverParams.page)},onSearch:function(t){this.search=t.searchTerm,this.Get_Categories(this.serverParams.page)},getValidationState:function(t){var e=t.dirty,r=t.validated,i=t.valid;return e||r?void 0===i?null:i:null},New_Category:function(){this.reset_Form(),this.editmode=!1,this.$bvModal.show("New_Category")},Edit_Category:function(t){this.Get_Categories(this.serverParams.page),this.reset_Form(),this.category=t,this.editmode=!0,this.$bvModal.show("New_Category")},reset_Form:function(){this.category={id:"",title:""}},Get_Categories:function(t){var e=this;o().start(),o().set(.1),axios.get("deposits_category?page="+t+"&SortField="+this.serverParams.sort.field+"&SortType="+this.serverParams.sort.type+"&search="+this.search+"&limit="+this.limit).then((function(t){e.categories=t.data.deposits_category,e.totalRows=t.data.totalRows,o().done(),e.isLoading=!1})).catch((function(t){o().done(),setTimeout((function(){e.isLoading=!1}),500)}))},Create_Category:function(){var t=this;this.SubmitProcessing=!0,axios.post("deposits_category",{title:this.category.title}).then((function(e){Fire.$emit("event_Category_deposit"),t.makeToast("success",t.$t("Successfully_Created"),t.$t("Success")),t.SubmitProcessing=!1})).catch((function(e){t.makeToast("danger",t.$t("InvalidData"),t.$t("Failed")),t.SubmitProcessing=!1}))},Update_Category:function(){var t=this;this.SubmitProcessing=!0,axios.put("deposits_category/"+this.category.id,{title:this.category.title}).then((function(e){Fire.$emit("event_Category_deposit"),t.makeToast("success",t.$t("Successfully_Updated"),t.$t("Success")),t.SubmitProcessing=!1})).catch((function(e){t.makeToast("danger",t.$t("InvalidData"),t.$t("Failed")),t.SubmitProcessing=!1}))},Delete_Category:function(t){var e=this;this.$swal({title:this.$t("Delete.Title"),text:this.$t("Delete.Text"),type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:this.$t("Delete.cancelButtonText"),confirmButtonText:this.$t("Delete.confirmButtonText")}).then((function(r){r.value&&axios.delete("deposits_category/"+t).then((function(){e.$swal(e.$t("Delete.Deleted"),e.$t("Delete.CatDeleted"),"success"),Fire.$emit("event_delete_category_deposit")})).catch((function(){e.$swal(e.$t("Delete.Failed"),e.$t("Delete.Therewassomethingwronge"),"warning")}))}))}},created:function(){var t=this;this.Get_Categories(1),Fire.$on("event_Category_deposit",(function(){t.Get_Categories(t.serverParams.page),t.$bvModal.hide("New_Category")})),Fire.$on("event_delete_category_deposit",(function(){t.Get_Categories(t.serverParams.page)}))}};const u=(0,r(14486).A)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-content"},[e("breadcumb",{attrs:{page:t.$t("deposit_Category"),folder:t.$t("Expenses")}}),t._v(" "),t.isLoading?e("div",{staticClass:"loading_page spinner spinner-primary mr-3"}):e("div",[e("vue-good-table",{attrs:{mode:"remote",columns:t.columns,totalRows:t.totalRows,rows:t.categories,"search-options":{enabled:!0,placeholder:t.$t("Search_this_table")},"pagination-options":{enabled:!0,mode:"records",nextLabel:"next",prevLabel:"prev"},styleClass:"tableOne table-hover vgt-table"},on:{"on-page-change":t.onPageChange,"on-per-page-change":t.onPerPageChange,"on-sort-change":t.onSortChange,"on-search":t.onSearch},scopedSlots:t._u([{key:"table-row",fn:function(r){return["actions"==r.column.field?e("span",[t.currentUserPermissions&&t.currentUserPermissions.includes("deposit_edit")?e("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"cursor-pointer",attrs:{title:"Edit"},on:{click:function(e){return t.Edit_Category(r.row)}}},[e("i",{staticClass:"i-Edit text-25 text-success"})]):t._e(),t._v(" "),t.currentUserPermissions&&t.currentUserPermissions.includes("deposit_delete")?e("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"cursor-pointer",attrs:{title:"Delete"},on:{click:function(e){return t.Delete_Category(r.row.id)}}},[e("i",{staticClass:"i-Close-Window text-25 text-danger"})]):t._e()]):t._e()]}}])},[e("div",{attrs:{slot:"selected-row-actions"},slot:"selected-row-actions"},[e("button",{staticClass:"btn btn-danger btn-sm",on:{click:function(e){return t.delete_by_selected()}}},[t._v(t._s(t.$t("Del")))])]),t._v(" "),e("div",{staticClass:"mt-2 mb-3",attrs:{slot:"table-actions"},slot:"table-actions"},[t.currentUserPermissions&&t.currentUserPermissions.includes("deposit_add")?e("b-button",{attrs:{size:"sm",variant:"primary ripple m-1"},on:{click:function(e){return t.New_Category()}}},[e("i",{staticClass:"i-Add"}),t._v("\n          "+t._s(t.$t("Add"))+"\n        ")]):t._e()],1)])],1),t._v(" "),e("validation-observer",{ref:"Create_Category"},[e("b-modal",{attrs:{"hide-footer":"",size:"md",id:"New_Category",title:t.editmode?t.$t("Edit"):t.$t("Add")}},[e("b-form",{on:{submit:function(e){return e.preventDefault(),t.Submit_Category.apply(null,arguments)}}},[e("b-row",[e("b-col",{attrs:{md:"12"}},[e("validation-provider",{attrs:{name:"Name category",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(r){return[e("b-form-group",{attrs:{label:t.$t("title")+" *"}},[e("b-form-input",{attrs:{state:t.getValidationState(r),"aria-describedby":"category-feedback",label:"name"},model:{value:t.category.title,callback:function(e){t.$set(t.category,"title",e)},expression:"category.title"}}),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"category-feedback"}},[t._v(t._s(r.errors[0]))])],1)]}}])})],1),t._v(" "),e("b-col",{staticClass:"mt-3",attrs:{md:"12"}},[e("b-button",{attrs:{variant:"primary",type:"submit",disabled:t.SubmitProcessing}},[e("i",{staticClass:"i-Yes me-2 font-weight-bold"}),t._v(" "+t._s(t.$t("submit")))]),t._v(" "),t.SubmitProcessing?t._m(0):t._e()],1)],1)],1)],1)],1)],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"typo__p"},[t("div",{staticClass:"spinner sm spinner-primary mt-3"})])}],!1,null,null,null).exports}}]);