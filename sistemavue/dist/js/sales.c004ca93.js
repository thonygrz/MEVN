(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["sales"],{"0d29":function(e,t,a){},af7c:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-data-table",{directives:[{name:"show",rawName:"v-show",value:!e.newEnter,expression:"!newEnter"}],staticClass:"elevation-1",attrs:{headers:e.headers,items:e.ventas,search:e.search},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:""}},[a("v-toolbar-title",[e._v("Ventas")]),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-text-field",{attrs:{"prepend-icon":"mdi-magnify",label:"Buscar","single-line":"","hide-details":"",justify:"center"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),a("v-spacer"),a("v-btn",{staticClass:"mb-2",attrs:{color:"primary",dark:""},on:{click:e.changeNewEnter}},[e._v(" Nuevo Item ")]),a("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[a("v-card",[e.actionType?a("v-card-title",{staticClass:"headline"},[e._v("¿Estás seguro de activar este item?")]):a("v-card-title",{staticClass:"headline"},[e._v("¿Estás seguro de desactivar este item?")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancelar")]),e.actionType?a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.activateItemConfirm}},[e._v("Activar")]):a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.deactivateItemConfirm}},[e._v("Desactivar")]),a("v-spacer")],1)],1)],1),a("v-dialog",{model:{value:e.facturaDialog,callback:function(t){e.facturaDialog=t},expression:"facturaDialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[a("v-btn",{attrs:{color:"blue"},on:{click:e.verFactura}},[a("v-icon",[e._v("mdi-printer")])],1),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" Factura ")],1),a("v-card-text",[a("div",{attrs:{id:"factura"}},[a("header",[a("div",{attrs:{id:"logo"}},[a("img",{attrs:{src:"data:image/png;base64,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",id:"imagen"}})]),a("div",{attrs:{id:"datos"}},[a("p",{attrs:{id:"encabezado"}},[a("b",[e._v("IncanatoIT")]),a("br"),e._v("José Gálvez 1368, Chongoyape - Chiclayo, Perú"),a("br"),e._v("Telefono:(+51)931742904"),a("br"),e._v("Email:jcarlos.ad7@gmail.com ")])]),a("div",{attrs:{id:"fact"}},[a("p",[e._v(" "+e._s(e.tipoComprobante)),a("br"),e._v(" "+e._s(e.serieComprobante)+"-"+e._s(e.numComprobante)),a("br"),e._v(" "+e._s(e.fecha)+" ")])])]),a("br"),a("section",[a("div",[a("table",{attrs:{id:"facliente"}},[a("tbody",[a("tr",[a("td",{attrs:{id:"cliente"}},[a("strong",[e._v("Sr(a). "+e._s(e.persona.name))]),a("br"),a("strong",[e._v("Documento:")]),e._v(" "+e._s(e.persona.documentType)+"-"+e._s(e.persona.documentNumber)),a("br"),a("strong",[e._v("Dirección:")]),e._v(" "+e._s(e.persona.address)),a("br"),a("strong",[e._v("Teléfono:")]),e._v(" "+e._s(e.persona.phoneNumber)),a("br"),a("strong",[e._v("Email:")]),e._v(" "+e._s(e.persona.email)+" ")])])])])])]),a("br"),a("section",[a("div",[a("table",{attrs:{id:"facarticulo"}},[a("thead",[a("tr",{attrs:{id:"fa"}},[a("th",[e._v("CANT")]),a("th",[e._v("DESCRIPCION")]),a("th",[e._v("PRECIO UNIT")]),a("th",[e._v("DESC.")]),a("th",[e._v("PRECIO TOTAL")])])]),a("tbody",e._l(e.articulos,(function(t){return a("tr",{key:t._id},[a("td",{staticStyle:{"text-align":"center"}},[e._v(" "+e._s(t.quantity)+" ")]),a("td",[e._v(" "+e._s(t.name)+" ")]),a("td",{staticStyle:{"text-align":"right"}},[e._v(" "+e._s(t.price)+" ")]),a("td",{staticStyle:{"text-align":"right"}},[e._v(" "+e._s(t.discount)+" ")]),a("td",{staticStyle:{"text-align":"right"}},[e._v(" "+e._s(t.price*t.quantity-t.discount)+" ")])])})),0),a("tfoot",[a("tr",[a("th"),a("th"),a("th"),a("th",{staticStyle:{"text-align":"right"}},[e._v("SUBTOTAL")]),a("th",{staticStyle:{"text-align":"right"}},[e._v(" "+e._s(e.totalParcial)+" ")])]),a("tr",[a("th"),a("th"),a("th"),a("th",{staticStyle:{"text-align":"right"}},[e._v("IVA")]),a("th",{staticStyle:{"text-align":"right"}},[e._v(" "+e._s(e.totalImpuesto)+" ")])]),a("tr",[a("th"),a("th"),a("th"),a("th",{staticStyle:{"text-align":"right"}},[e._v("TOTAL")]),a("th",{staticStyle:{"text-align":"right"}},[e._v(e._s(e.totalNeto))])])])])])]),a("br"),a("br"),a("footer",[a("div",{attrs:{id:"gracias"}},[a("p",[a("b",[e._v("Gracias por su compra!")])])])])])]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.changeFacturaDialog}},[e._v("Cancelar")]),a("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var r=t.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.showItem(r)}}},[e._v(" mdi-eye ")]),a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.verFactura(r)}}},[e._v(" mdi-printer ")]),1===r.status?a("v-icon",{attrs:{small:""},on:{click:function(t){return e.deactivateItem(r)}}},[e._v(" mdi-cancel ")]):a("v-icon",{attrs:{small:""},on:{click:function(t){return e.activateItem(r)}}},[e._v(" mdi-check ")])]}},{key:"no-data",fn:function(){return[a("v-btn",{attrs:{color:"primary"},on:{click:e.getVentas}},[e._v(" Reset ")])]},proxy:!0},{key:"item.status",fn:function(t){var r=t.item;return[a("v-chip",{attrs:{color:e.getColor(r.status),dark:""}},[e._v(" "+e._s(e.statusName(r.status))+" ")])]}}])}),a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-row",{directives:[{name:"show",rawName:"v-show",value:e.newEnter,expression:"newEnter"}],staticClass:"px-16 pb-16"},[a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-combobox",{attrs:{label:"Tipo de comprobante",items:e.tiposComprobante,rules:[e.rules.required]},model:{value:e.tipoComprobante,callback:function(t){e.tipoComprobante=t},expression:"tipoComprobante"}})],1),a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-text-field",{attrs:{label:"Serie de comprobante",rules:[e.rules.required,e.rules.minSeries]},model:{value:e.serieComprobante,callback:function(t){e.serieComprobante=t},expression:"serieComprobante"}})],1),a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-text-field",{attrs:{label:"Número de comprobante",rules:[e.rules.required,e.rules.minNum]},model:{value:e.numComprobante,callback:function(t){e.numComprobante=t},expression:"numComprobante"}})],1),a("v-col",{attrs:{cols:"12",sm:"8"}},[a("v-combobox",{attrs:{label:"Cliente",items:e.clientes,rules:[e.rules.required]},model:{value:e.cliente,callback:function(t){e.cliente=t},expression:"cliente"}})],1),a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-text-field",{attrs:{label:"Impuesto",rules:[e.rules.required]},model:{value:e.impuesto,callback:function(t){e.impuesto=t},expression:"impuesto"}})],1),a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-text-field",{attrs:{label:"Código"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.buscarCodigo(t)}},model:{value:e.codigo,callback:function(t){e.codigo=t},expression:"codigo"}})],1),a("v-col",{attrs:{cols:"12",sm:"1"}},[a("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",color:"teal"},on:{click:e.changeArticuloDialog}},[a("v-icon",{attrs:{dark:""}},[e._v(" mdi-format-list-bulleted-square ")])],1),a("v-dialog",{attrs:{"max-width":"1000px"},model:{value:e.articuloDialog,callback:function(t){e.articuloDialog=t},expression:"articuloDialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12"}},[a("v-text-field",{attrs:{"prepend-icon":"mdi-magnify",label:"Buscar","single-line":"","hide-details":""},model:{value:e.searchArticulo,callback:function(t){e.searchArticulo=t},expression:"searchArticulo"}})],1),a("v-col",{attrs:{cols:"12",sm:"12"}},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers3,items:e.articulosDialog,"hide-default-footer":"",loading:e.loadDialog,"loading-text":"Buscando artículos... por favor espere."},scopedSlots:e._u([{key:"item.add",fn:function(t){var r=t.item;return[a("v-icon",{attrs:{small:""},on:{click:function(t){return e.agregarDetalle(r)}}},[e._v(" mdi-plus-thick ")])]}},{key:"item.status",fn:function(t){var r=t.item;return[a("v-chip",{attrs:{color:e.getColor(r.status),dark:""}},[e._v(" "+e._s(e.statusName(r.status))+" ")])]}}])})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v(" Cancelar ")])],1)],1)],1)],1),a("v-col",{attrs:{cols:"12",sm:"7"}},[a("p",{directives:[{name:"show",rawName:"v-show",value:e.errorCodeMessage,expression:"errorCodeMessage"}],staticClass:"red--text"},[e._v(" "+e._s(e.errorMessage)+" ")])]),a("v-col",{attrs:{cols:"12",sm:"12"}},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers2,items:e.articulos,"hide-default-footer":""},scopedSlots:e._u([{key:"item.actions",fn:function(t){var r=t.item;return[a("v-icon",{attrs:{small:""},on:{click:function(t){return e.removeArticle(r)}}},[e._v(" mdi-delete ")])]}},{key:"item.quantity",fn:function(t){var r=t.item;return[a("v-text-field",{attrs:{type:"number"},model:{value:r.quantity,callback:function(t){e.$set(r,"quantity",t)},expression:"item.quantity"}})]}},{key:"item.price",fn:function(t){var r=t.item;return[a("v-text-field",{attrs:{type:"number"},model:{value:r.price,callback:function(t){e.$set(r,"price",t)},expression:"item.price"}})]}},{key:"item.discount",fn:function(t){var r=t.item;return[a("v-text-field",{attrs:{type:"number"},model:{value:r.discount,callback:function(t){e.$set(r,"discount",t)},expression:"item.discount"}})]}},{key:"item.subtotal",fn:function(t){var r=t.item;return[a("p",[e._v("$"+e._s(r.price*r.quantity-r.discount))])]}},{key:"no-data",fn:function(){return[a("v-alert",{attrs:{value:!0,color:"warning",icon:"mdi-alert"}},[e._v(" Debes añadir un artículo ")])]},proxy:!0}])})],1),a("v-col",{attrs:{cols:"12",sm:"12"}},[a("p",{staticClass:"d-flex justify-end ma-0"},[a("b",[e._v("Total Parcial $ ")]),e._v(" "+e._s(e.totalParcial)+" ")]),a("p",{staticClass:"d-flex justify-end ma-0"},[a("b",[e._v("Impuesto $ ")]),e._v(" "+e._s(e.totalImpuesto)+" ")]),a("p",{staticClass:"d-flex justify-end ma-0"},[a("b",[e._v("Impuesto $ ")]),e._v(" "+e._s(e.totalNeto)+" ")])]),a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-btn",{staticClass:"mx-2",attrs:{dark:"",small:"",color:"grey"},on:{click:e.closeNewEnter}},[e._v(" Cancelar ")]),a("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.botonGuardar,expression:"botonGuardar"}],staticClass:"mx-2",attrs:{dark:"",small:"",color:"green"},on:{click:e.save}},[e._v(" Guardar ")])],1)],1)],1)],1)},o=[],s=(a("a4d3"),a("e01a"),a("4de4"),a("4160"),a("c975"),a("d81d"),a("45fc"),a("a434"),a("b0c0"),a("b680"),a("159b"),a("96cf"),a("1da1")),i=a("bc3a"),n=a.n(i),c={name:"Ventas",data:function(){return{search:"",dialog:!1,dialogDelete:!1,articuloDialog:!1,headers:[{text:"Acciones",value:"actions",sortable:!1},{text:"Usuario",value:"user.name"},{text:"Cliente",value:"person.name"},{text:"Fecha",value:"createdAt"},{text:"Tipo de comprobante",value:"proofType"},{text:"Serie de comprobante",value:"proofSeries"},{text:"Número de comprobante",value:"proofNumber"},{text:"Impuesto",value:"tax"},{text:"Total",value:"total"},{text:"Estado",value:"status",align:"center"}],headers2:[{text:"Borrar",value:"actions",align:"center",sortable:!1},{text:"Artículo",value:"name",align:"center"},{text:"Cantidad",value:"quantity",align:"center",sortable:!1},{text:"Precio",value:"price",align:"center",sortable:!1},{text:"Descuento",value:"discount",align:"center",sortable:!1},{text:"SubTotal",value:"subtotal",align:"center",sortable:!1}],headers3:[{text:"Agregar",value:"add",sortable:!1,align:"center"},{text:"Nombre",value:"name"},{text:"Descripción",value:"description"},{text:"Precio de venta",value:"sellingPrice"},{text:"Stock",value:"stock"},{text:"Código",value:"code"},{text:"Categoría",value:"category.name"},{text:"Estado",value:"status",align:"center"}],articulos:[],articulosDialog:[],clientes:[],codigo:"",tiposComprobante:["FACTURA","BOLETA"],editedIndex:-1,defaultItem:{name:"",description:"",status:0},ventas:[],_id:"",nombre:"",descripcion:"",tipoComprobante:"",serieComprobante:"",numComprobante:"",cliente:"",rules:{required:function(e){return!!e||"Campo requerido"},min:function(e){return e&&e.length>=1&&e.length<=53||"El nombre debe estar entre 1 y 50 caracteres"},minSeries:function(e){return e&&e.length>=1&&e.length<=7||"El nombre debe estar entre 1 y 7 caracteres"},minNum:function(e){return e&&e.length>=1&&e.length<=10||"El nombre debe estar entre 1 y 10 caracteres"}},valid:!1,item:null,actionType:null,newEnter:!1,errorCodeMessage:!1,errorMessage:"error",impuesto:.18,formTitle:"Añadir artículos",searchArticulo:"",loadDialog:!1,botonGuardar:!0,descuento:0,facturaDialog:!1,fecha:"",persona:""}},computed:{totalParcial:function(){var e=this,t=0;return this.articulos.forEach((function(a){t+=a.price*a.quantity*(e.impuesto+1)-a.discount})),t.toFixed(2)},totalImpuesto:function(){return(this.totalParcial*this.impuesto).toFixed(2)},totalNeto:function(){return(parseFloat(this.totalParcial)+parseFloat(this.totalImpuesto)).toFixed(2)}},watch:{dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()},searchArticulo:function(){this.loadDialog=!0,this.getArticulos()}},created:function(){this.getVentas(),this.getClientes()},methods:{getArticulos:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,a={Token:e.$store.state.token},r={headers:a},t.next=5,n.a.get("article/list?keyword="+e.searchArticulo,r);case 5:o=t.sent,e.articulosDialog=o.data,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0);case 12:e.loadDialog=!1;case 13:case"end":return t.stop()}}),t,null,[[0,9]])})))()},getVentas:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,a={Token:e.$store.state.token},r={headers:a},t.next=5,n.a.get("sale/list",r);case 5:o=t.sent,e.ventas=o.data,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},getClientes:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,r,o,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,a={Token:e.$store.state.token},r={headers:a},t.next=5,n.a.get("person/list",r);case 5:o=t.sent,s=o.data,e.clientes=s.filter((function(e){return"Cliente"===e.personType})),e.clientes=e.clientes.map((function(e){return{value:e._id,text:e.name}})),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))()},encontrarArticulo:function(e){var t=this.articulos.some((function(t){return t._id===e}));return console.log("find: ",t),t},removeFromArray:function(e,t){var a=e.indexOf(t);-1!=a&&e.splice(a,1)},removeArticle:function(e){this.removeFromArray(this.articulos,e)},agregarDetalle:function(e){this.encontrarArticulo(e._id)?(this.errorCodeMessage=!0,this.errorMessage="El artículo ya fue ingresado.",console.log("ya se agregó el articulo")):this.articulos.push({_id:e._id,name:e.name,quantity:1,price:e.sellingPrice,discount:0})},buscarCodigo:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,a={Token:e.$store.state.token},r={headers:a},t.next=5,n.a.get("article/query?code="+e.codigo,r);case 5:o=t.sent,console.log(o.data),e.errorCodeMessage=!1,e.agregarDetalle(o.data),e.codigo="",t.next=16;break;case 12:t.prev=12,t.t0=t["catch"](0),console.log(t.t0),400===t.t0.response.status&&(e.errorMessage="El código ingresado no pertenece a ningún artículo",e.errorCodeMessage=!0);case 16:case"end":return t.stop()}}),t,null,[[0,12]])})))()},statusName:function(e){return 1===e?"Activo":0===e?"Desactivado":"Estado desconocido"},showItem:function(e){this._id=e._id,this.cliente=e.person.name,this.tipoComprobante=e.proofType,this.serieComprobante=e.proofSeries,this.numComprobante=e.proofNumber,this.impuesto=e.tax,this.articulos=e.details,this.botonGuardar=!1,this.changeNewEnter()},deactivateItem:function(e){this._id=e._id,this.actionType=0,this.dialogDelete=!0},activateItem:function(e){this._id=e._id,this.actionType=1,this.dialogDelete=!0},deactivateItemConfirm:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,a={Token:e.$store.state.token},r={headers:a},t.next=5,n.a.put("/sale/deactivate",{_id:e._id},r);case 5:e.clean(),e.close(),e.getVentas(),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0);case 13:e.closeDelete();case 14:case"end":return t.stop()}}),t,null,[[0,10]])})))()},activateItemConfirm:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,a={Token:e.$store.state.token},r={headers:a},t.next=5,n.a.put("/sale/activate",{_id:e._id},r);case 5:e.clean(),e.close(),e.getVentas(),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0);case 13:e.closeDelete();case 14:case"end":return t.stop()}}),t,null,[[0,10]])})))()},close:function(){this.articuloDialog=!1,this.searchArticulo="",this.$refs.form.resetValidation()},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},clean:function(){this._id="",this.nombre="",this.descripcion="",this.cliente="",this.tipoComprobante="",this.serieComprobante="",this.numComprobante="",this.articulos=[],this.$refs.form.resetValidation()},getColor:function(e){return 1===e?"green":0===e?"red":"black"},closeNewEnter:function(){this.clean(),this.changeNewEnter(),this.botonGuardar=!0},changeNewEnter:function(){this.newEnter=!this.newEnter},verFactura:function(e){this.changeFacturaDialog(),this.clean(),this._id=e._id,this.nombre=e.name,this.descripcion=e.description,this.persona=e.person,this.tipoComprobante=e.proofType,this.serieComprobante=e.proofSeries,this.numComprobante=e.proofNumber,this.fecha=e.createdAt,this.articulos=e.details},changeFacturaDialog:function(){this.facturaDialog=!this.facturaDialog},changeArticuloDialog:function(){this.articuloDialog=!this.articuloDialog},save:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(e.$refs.form.validate()&&e.articulos.length>0)){t.next=16;break}return t.prev=1,a={Token:e.$store.state.token},r={headers:a},t.next=6,n.a.post("/sale/add",{user:e.$store.state.user._id,person:e.cliente.value,proofType:e.tipoComprobante,proofSeries:e.serieComprobante,proofNumber:e.numComprobante,tax:e.impuesto,total:e.totalNeto,details:e.articulos},r);case 6:e.clean(),e.changeNewEnter(),e.getArticulos(),e.getVentas(),t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](1),console.log(t.t0);case 15:e.close();case 16:case"end":return t.stop()}}),t,null,[[1,12]])})))()}}},l=c,u=(a("bdad"),a("2877")),d=a("6544"),v=a.n(d),m=a("0798"),p=a("8336"),h=a("b0af"),f=a("99d9"),b=a("cc20"),g=a("62ad"),x=a("2b5d"),C=a("a523"),k=a("8fea"),w=a("169a"),_=a("ce7e"),y=a("4bd4"),D=a("132d"),A=a("0fd9"),E=a("2fa4"),T=a("8654"),V=a("71d9"),I=a("2a7f"),N=Object(u["a"])(l,r,o,!1,null,"009373f7",null);t["default"]=N.exports;v()(N,{VAlert:m["a"],VBtn:p["a"],VCard:h["a"],VCardActions:f["a"],VCardText:f["b"],VCardTitle:f["c"],VChip:b["a"],VCol:g["a"],VCombobox:x["a"],VContainer:C["a"],VDataTable:k["a"],VDialog:w["a"],VDivider:_["a"],VForm:y["a"],VIcon:D["a"],VRow:A["a"],VSpacer:E["a"],VTextField:T["a"],VToolbar:V["a"],VToolbarTitle:I["a"]})},bdad:function(e,t,a){"use strict";var r=a("0d29"),o=a.n(r);o.a}}]);
//# sourceMappingURL=sales.c004ca93.js.map