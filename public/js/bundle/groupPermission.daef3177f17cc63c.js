"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9321],{80067:(e,t,s)=>{s.r(t),s.d(t,{default:()=>m});var r=s(95353),i=s(5947),n=s.n(i);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function a(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function l(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?a(Object(s),!0).forEach((function(t){c(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function c(e,t,s){return(t=function(e){var t=function(e,t){if("object"!==o(e)||null===e)return e;var s=e[Symbol.toPrimitive];if(void 0!==s){var r=s.call(e,t||"default");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===o(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}const u={metaInfo:{title:"Permissions"},data:function(){return{isLoading:!0,serverParams:{columnFilters:{},sort:{field:"id",type:"desc"},page:1,perPage:10},totalRows:"",search:"",limit:"10",roles:[]}},computed:l(l({},(0,r.L8)(["currentUserPermissions"])),{},{columns:function(){return[{label:this.$t("RoleName"),field:"name",tdClass:"text-left",thClass:"text-left"},{label:this.$t("Description"),field:"description",tdClass:"text-left",thClass:"text-left"},{label:this.$t("Action"),field:"actions",html:!0,tdClass:"text-right",thClass:"text-right",sortable:!1}]}}),methods:{updateParams:function(e){this.serverParams=Object.assign({},this.serverParams,e)},onPageChange:function(e){var t=e.currentPage;this.serverParams.page!==t&&(this.updateParams({page:t}),this.Get_Roles(t))},onPerPageChange:function(e){var t=e.currentPerPage;this.limit!==t&&(this.limit=t,this.updateParams({page:1,perPage:t}),this.Get_Roles(1))},onSortChange:function(e){this.updateParams({sort:{type:e[0].type,field:e[0].field}}),this.Get_Roles(this.serverParams.page)},onSearch:function(e){this.search=e.searchTerm,this.Get_Roles(this.serverParams.page)},Get_Roles:function(e){var t=this;n().start(),n().set(.1),axios.get("roles?page="+e+"&SortField="+this.serverParams.sort.field+"&SortType="+this.serverParams.sort.type+"&search="+this.search+"&limit="+this.limit).then((function(e){t.roles=e.data.roles,t.totalRows=e.data.totalRows,n().done(),t.isLoading=!1})).catch((function(e){n().done(),setTimeout((function(){t.isLoading=!1}),500)}))},Delete_Role:function(e){var t=this;this.$swal({title:this.$t("Delete.Title"),text:this.$t("Delete.Text"),type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:this.$t("Delete.cancelButtonText"),confirmButtonText:this.$t("Delete.confirmButtonText")}).then((function(s){s.value&&axios.delete("roles/"+e).then((function(){t.$swal(t.$t("Delete.Deleted"),t.$t("Delete.RoleDeleted"),"success"),Fire.$emit("Delete_role")})).catch((function(){t.$swal(t.$t("Delete.Failed"),t.$t("Delete.Therewassomethingwronge"),"warning")}))}))}},created:function(){var e=this;this.Get_Roles(1),Fire.$on("Delete_role",(function(){setTimeout((function(){e.Get_Roles(e.serverParams.page)}),500)}))}};const m=(0,s(14486).A)(u,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"main-content"},[t("breadcumb",{attrs:{page:e.$t("GroupPermissions"),folder:e.$t("Settings")}}),e._v(" "),e.isLoading?t("div",{staticClass:"loading_page spinner spinner-primary mr-3"}):e._e(),e._v(" "),e.isLoading?e._e():t("b-card",{staticClass:"wrapper"},[t("vue-good-table",{attrs:{mode:"remote",columns:e.columns,totalRows:e.totalRows,rows:e.roles,"search-options":{enabled:!0,placeholder:e.$t("Search_this_table")},"pagination-options":{enabled:!0,mode:"records",nextLabel:"next",prevLabel:"prev"},styleClass:"table-hover tableOne vgt-table"},on:{"on-page-change":e.onPageChange,"on-per-page-change":e.onPerPageChange,"on-sort-change":e.onSortChange,"on-search":e.onSearch},scopedSlots:e._u([{key:"table-row",fn:function(s){return 1!==s.row.id?["actions"==s.column.field?t("span",[e.currentUserPermissions&&e.currentUserPermissions.includes("permissions_edit")?t("router-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Edit",to:"/app/Settings/Permissions/edit/"+s.row.id}},[t("i",{staticClass:"i-Edit text-25 text-success"})]):e._e(),e._v(" "),e.currentUserPermissions&&e.currentUserPermissions.includes("permissions_delete")?t("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Delete"},on:{click:function(t){return e.Delete_Role(s.row.id)}}},[t("i",{staticClass:"i-Close-Window text-25 text-danger"})]):e._e()],1):e._e()]:void 0}}],null,!0)},[t("div",{staticClass:"mt-2 mb-3",attrs:{slot:"table-actions"},slot:"table-actions"},[e.currentUserPermissions&&e.currentUserPermissions.includes("permissions_add")?t("router-link",{staticClass:"btn-rounded btn btn-primary ripple btn-icon m-1",attrs:{to:"/app/Settings/Permissions/store"}},[t("span",{staticClass:"ul-btn__icon"},[t("i",{staticClass:"i-Add"})]),e._v(" "),t("span",{staticClass:"ul-btn__text ml-1"},[e._v(e._s(e.$t("Add")))])]):e._e()],1)])],1)],1)}),[],!1,null,null,null).exports}}]);