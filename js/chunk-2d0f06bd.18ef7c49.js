(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f06bd"],{"9bfd":function(a,s,r){"use strict";r.r(s);var e=function(){var a=this,s=a.$createElement,r=a._self._c||s;return r("div",[r("CCard",[r("CCardHeader",[r("CIcon",{attrs:{name:"cil-justify-center"}}),r("strong",[a._v(" Bootstrap Progress")]),r("div",{staticClass:"card-header-actions"},[r("a",{staticClass:"card-header-action",attrs:{href:"https://coreui.io/vue/docs/components/progress",rel:"noreferrer noopener",target:"_blank"}},[r("small",{staticClass:"text-muted"},[a._v("docs")])])])],1),r("CCardBody",[r("CProgress",{attrs:{value:a.counter,max:a.max,"show-percentage":"",animated:""}}),r("CProgress",{staticClass:"mt-1",attrs:{max:a.max,"show-value":""}},[r("CProgressBar",{attrs:{value:.6*a.counter,color:"gradient-success"}}),r("CProgressBar",{attrs:{value:.25*a.counter,color:"gradient-warning"}}),r("CProgressBar",{attrs:{value:.15*a.counter,color:"gradient-danger"}})],1),r("CButton",{staticClass:"mt-4",attrs:{color:"secondary"},on:{click:a.clicked}},[a._v(" Click me to animate progress bars ")])],1)],1),r("CCard",[r("CCardHeader",[r("CIcon",{attrs:{name:"cil-justify-center"}}),a._v(" "),r("strong",[a._v(" Progress ")]),r("small",[a._v("labels")])],1),r("CCardBody",[r("h6",[a._v("No label")]),r("CProgress",{staticClass:"mb-3",attrs:{value:a.value,max:a.max2}}),r("h6",[a._v("Value label")]),r("CProgress",{staticClass:"mb-3",attrs:{value:a.value,max:a.max2,"show-value":""}}),r("h6",[a._v("Progress label")]),r("CProgress",{staticClass:"mb-3",attrs:{value:a.value,max:a.max2,"show-percentage":""}}),r("h6",[a._v("Value label with precision")]),r("CProgress",{staticClass:"mb-3",attrs:{value:a.value,max:a.max2,precision:2,"show-value":""}}),r("h6",[a._v("Progress label with precision")]),r("CProgress",{staticClass:"mb-3",attrs:{value:a.value,max:a.max2,precision:2,"show-percentage":""}})],1)],1),r("CCard",[r("CCardHeader",[r("CIcon",{attrs:{name:"cil-justify-center"}}),r("strong",[a._v(" Progress ")]),r("small",[a._v("width")])],1),r("CCardBody",[r("h6",[a._v("Default width")]),r("CProgress",{staticClass:"mb-3",attrs:{value:a.value3}}),r("h6",[a._v("Custom widths")]),r("CProgress",{staticClass:"w-75 mb-2",attrs:{value:a.value3}}),r("CProgress",{staticClass:"w-50 mb-2",attrs:{value:a.value3}}),r("CProgress",{staticClass:"w-25",attrs:{value:a.value3}})],1)],1),r("CCard",[r("CCardHeader",[r("CIcon",{attrs:{name:"cil-justify-center"}}),r("strong",[a._v(" Progress ")]),r("small",[a._v("height")])],1),r("CCardBody",[r("h6",[a._v("Default height")]),r("CProgress",{staticClass:"mb-3",attrs:{value:a.value3,"show-percentage":""}}),r("h6",[a._v("Custom heights")]),r("CProgress",{staticClass:"mb-2",attrs:{size:"xs",value:a.value3,"show-percentage":""}}),r("CProgress",{staticClass:"mb-2",attrs:{size:"sm",value:a.value3,"show-percentage":""}}),r("CProgress",{staticClass:"mb-2",staticStyle:{height:"2rem"},attrs:{value:a.value3,"show-percentage":""}}),r("CProgress",{staticClass:"mb-2",staticStyle:{height:"20px"},attrs:{value:a.value3,"show-percentage":""}}),r("CProgress",{staticStyle:{height:"2px"},attrs:{value:a.value3}})],1)],1),r("CCard",[r("CCardHeader",[r("CIcon",{attrs:{name:"cil-justify-center"}}),r("strong",[a._v(" Progress ")]),r("small",[a._v("colors")])],1),r("CCardBody",a._l(a.bars,(function(s,e){return r("div",{key:e,staticClass:"row mb-1"},[r("div",{staticClass:"col-sm-2"},[a._v(a._s(s.color)+":")]),r("div",{staticClass:"col-sm-10 pt-1"},[r("CProgress",{key:s.color,attrs:{value:s.value,color:s.color}})],1)])})),0)],1),r("CCard",[r("CCardHeader",[r("CIcon",{attrs:{name:"cil-justify-center"}}),r("strong",[a._v(" Progress ")]),r("small",[a._v("striped")])],1),r("CCardBody",[r("CProgress",{staticClass:"mb-2",attrs:{value:25,color:"success",striped:a.striped}}),r("CProgress",{staticClass:"mb-2",attrs:{value:50,color:"info",striped:a.striped}}),r("CProgress",{staticClass:"mb-2",attrs:{value:75,color:"warning",striped:a.striped}}),r("CProgress",{staticClass:"mb-2",attrs:{value:100,color:"danger",striped:a.striped}}),r("CButton",{attrs:{color:"secondary"},on:{click:function(s){a.striped=!a.striped}}},[a._v(" "+a._s(a.striped?"Remove":"Add")+" Striped ")])],1)],1),r("CCard",[r("CCardHeader",[r("CIcon",{attrs:{name:"cil-justify-center"}}),r("strong",[a._v(" Progress ")]),r("small",[a._v("animated")])],1),r("CCardBody",[r("CProgress",{staticClass:"mb-2",attrs:{value:25,color:"success",striped:"",animated:a.animate}}),r("CProgress",{staticClass:"mb-2",attrs:{value:50,color:"info",striped:"",animated:a.animate}}),r("CProgress",{staticClass:"mb-2",attrs:{value:75,color:"warning",striped:"",animated:a.animate}}),r("CProgress",{staticClass:"mb-3",attrs:{value:100,color:"danger",animated:a.animate}}),r("CButton",{attrs:{color:"secondary"},on:{click:function(s){a.animate=!a.animate}}},[a._v(" "+a._s(a.animate?"Stop":"Start")+" Animation ")])],1)],1),r("CCard",[r("CCardHeader",[r("CIcon",{attrs:{name:"cil-justify-center"}}),r("strong",[a._v(" Progress ")]),r("small",[a._v("multiple bars")])],1),r("CCardBody",[r("CProgress",{staticClass:"mb-3",attrs:{max:a.max3}},[r("CProgressBar",{attrs:{color:"gradient-primary",value:a.values[0]}}),r("CProgressBar",{attrs:{color:"gradient-success",value:a.values[1]}}),r("CProgressBar",{attrs:{color:"gradient-info",value:a.values[2]}})],1),r("CProgress",{staticClass:"mb-3",attrs:{"show-percentage":"",max:a.max3}},[r("CProgressBar",{attrs:{color:"gradient-primary",value:a.values[0]}}),r("CProgressBar",{attrs:{color:"gradient-success",value:a.values[1]}}),r("CProgressBar",{attrs:{color:"gradient-info",value:a.values[2]}})],1),r("CProgress",{staticClass:"mb-3",attrs:{"show-value":"",striped:"",max:a.max3}},[r("CProgressBar",{attrs:{color:"gradient-primary",value:a.values[0]}}),r("CProgressBar",{attrs:{color:"gradient-success",value:a.values[1]}}),r("CProgressBar",{attrs:{color:"gradient-info",value:a.values[2]}})],1),r("CProgress",{staticClass:"mb-3",attrs:{max:a.max3}},[r("CProgressBar",{attrs:{color:"gradient-primary",value:a.values[0],"show-percentage":""}}),r("CProgressBar",{attrs:{color:"success",value:a.values[1],animated:"","show-percentage":""}}),r("CProgressBar",{attrs:{color:"gradient-info",value:a.values[2],striped:"","show-percentage":""}})],1)],1)],1)],1)},t=[],o={name:"ProgressBars",data:function(){return{counter:73,max:100,max2:50,value:33.333333333,value3:75,bars:[{color:"gradient-success",value:75},{color:"gradient-info",value:75},{color:"gradient-warning",value:75},{color:"gradient-danger",value:75},{color:"gradient-primary",value:75},{color:"gradient-secondary",value:75},{color:"gradient-dark",value:75}],timer:null,striped:!0,animate:!0,max3:100,values:[15,30,20]}},methods:{clicked:function(){this.counter=Math.random()*this.max}},mounted:function(){var a=this;this.timer=setInterval((function(){a.bars.forEach((function(a){a.value=25+75*Math.random()}))}),2e3)},beforeDestroy:function(){clearInterval(this.timer),this.timer=null}},l=o,i=r("2877"),c=Object(i["a"])(l,e,t,!1,null,null,null);s["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0f06bd.18ef7c49.js.map