(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-769d"],{"0a59":function(t,e,n){},"0bfb":function(t,e,n){"use strict";var a=n("cb7c");t.exports=function(){var t=a(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"11a4":function(t,e,n){"use strict";var a=n("1af1"),r=n.n(a);r.a},"11e9":function(t,e,n){var a=n("52a7"),r=n("4630"),i=n("6821"),o=n("6a99"),s=n("69a8"),c=n("c69a"),l=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?l:function(t,e){if(t=i(t),e=o(e,!0),c)try{return l(t,e)}catch(t){}if(s(t,e))return r(!a.f.call(t,e),t[e])}},"1af1":function(t,e,n){},"214f":function(t,e,n){"use strict";var a=n("32e9"),r=n("2aba"),i=n("79e5"),o=n("be13"),s=n("2b4c");t.exports=function(t,e,n){var c=s(t),l=n(o,c,""[t]),u=l[0],f=l[1];i(function(){var e={};return e[c]=function(){return 7},7!=""[t](e)})&&(r(String.prototype,t,u),a(RegExp.prototype,c,2==e?function(t,e){return f.call(t,this,e)}:function(t){return f.call(t,this)}))}},"2a35":function(t,e,n){},3846:function(t,e,n){n("9e1e")&&"g"!=/./g.flags&&n("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:n("0bfb")})},"3a5e":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hide-block",class:t.hide},[n("div",{},[n("font-awesome-icon",{attrs:{icon:"spinner",pulse:""}}),n("br"),n("span",[t._v("Carregando...")])],1)])},r=[],i=(n("cadf"),n("551c"),n("097d"),{name:"Loading",props:{hide:String}}),o=i,s=(n("c161"),n("2877")),c=Object(s["a"])(o,a,r,!1,null,"6f66f8ea",null);c.options.__file="Loading.vue";e["a"]=c.exports},"52a7":function(t,e){e.f={}.propertyIsEnumerable},"5dbc":function(t,e,n){var a=n("d3f4"),r=n("8b97").set;t.exports=function(t,e,n){var i,o=e.constructor;return o!==n&&"function"==typeof o&&(i=o.prototype)!==n.prototype&&a(i)&&r&&r(t,i),t}},"68e5":function(t,e,n){"use strict";var a=n("0a59"),r=n.n(a);r.a},"6b54":function(t,e,n){"use strict";n("3846");var a=n("cb7c"),r=n("0bfb"),i=n("9e1e"),o="toString",s=/./[o],c=function(t){n("2aba")(RegExp.prototype,o,t,!0)};n("79e5")(function(){return"/a/b"!=s.call({source:"a",flags:"b"})})?c(function(){var t=a(this);return"/".concat(t.source,"/","flags"in t?t.flags:!i&&t instanceof RegExp?r.call(t):void 0)}):s.name!=o&&c(function(){return s.call(this)})},"84d0":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page municipio",attrs:{id:"app"}},[n("Loading",{attrs:{hide:t.hide}}),n("div",{staticClass:"container"},[n("div",{staticClass:"page-content"},[t.municipio?n("section",{staticClass:"showcase"},[n("div",{staticClass:"row mb-5"},[n("div",{staticClass:"col-8 col-sm-9 col-md-9 col-lg-10"},[n("h2",[t._v(t._s(t.municipio.nome)+" - "+t._s(t.municipio.uf))])]),n("div",{staticClass:"col-4 col-sm-3 col-md-3 col-lg-2"},[n("select",{ref:"selectAno",staticClass:"form-control form-control-lg ano",attrs:{name:"ano"},on:{change:t.onChangeYear}},t._l(t.anoAtual-2007,function(e){return n("option",{key:t.anoAtual-e+1,domProps:{selected:t.anoAtual-e+1==t.ano}},[t._v("\n                "+t._s(t.anoAtual-e+1)+"\n              ")])}))])]),t.parlamentares?n("div",{staticClass:"graficos"}):t._e(),t.parlamentares?n("div",{staticClass:"parlamentares"},t._l(t.parlamentares,function(e){return n("div",{key:e.nome,staticClass:"parlamentar mb-5"},[n("div",{staticClass:"clearfix mb-1"},[n("p",{staticClass:"pull-right"},[t._v("\n                "+t._s(e.totalEmendas)+" projetos"),n("br"),t._v("\n                R$ "+t._s(t.currencyFormat(e.valorTotalRepasseEmenda))+"\n              ")]),n("h4",[t._v(t._s(e.nome))])]),n("h6",[t._v("Projetos do Ano")]),e.emendas?n("table",{staticClass:"table table-condensed"},[t._m(0,!0),n("tbody",[0==e.emendas.length?n("tr",{staticClass:"table-warning"},[n("td",{staticStyle:{"text-align":"center"},attrs:{colspan:"7",role:""}},[n("font-awesome-icon",{attrs:{icon:"spinner",pulse:""}})],1)]):t._e(),t._l(e.emendas,function(e){return n("tr",{key:e.id},[n("td",[n("router-link",{attrs:{to:{name:"emenda",params:{id:e.id}}}},[t._v("\n                      Ver\n                    ")])],1),n("td",[t._v(t._s(e.proposta.id)+"/"+t._s(e.proposta.anoProposta))]),n("td",[n("Excerpt",{attrs:{message:e.proposta.descricaoObjeto}})],1),n("td",{staticClass:"d-none d-sm-table-cell"},[t._v(t._s(e.proposta.nomeProponente))]),n("td",{staticClass:"d-none d-md-table-cell"},[t._v(t._s(t.currencyFormat(e.proposta.valorGlobalProposta)))]),n("td",{staticClass:"d-none d-xs-table-cell"},[t._v(t._s(t.currencyFormat(e.proposta.valorContrapartidaProposta)))]),n("td",[t._v(t._s(t.currencyFormat(e.proposta.valorRepasseProposta)))])])})],2)]):t._e()])})):t._e()]):n("section",{staticClass:"error alert alert-danger"},[t._m(1)])])])],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",{staticClass:"thead-light"},[n("tr",[n("th"),n("th",[t._v("Processo")]),n("th",[t._v("Objeto")]),n("th",{staticClass:"d-none d-sm-table-cell"},[t._v("Proponente")]),n("th",{staticClass:"d-none d-md-table-cell"},[t._v("Pedido (R$)")]),n("th",{staticClass:"d-none d-xs-table-cell"},[t._v("Contrapartida (R$)")]),n("th",[t._v("Repasse (R$)")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"text-align":"center"}},[n("h2",[t._v("Município não encontrado.")]),t._v("\n          Por favor, \n            "),n("a",{attrs:{href:"javascript:history.go(-1)"}},[t._v("retorne e tente novamente")]),t._v(".\n        ")])}],i=(n("6b54"),n("ac6a"),n("a481"),n("c5f6"),n("cadf"),n("551c"),n("097d"),n("3a5e")),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fullText"},[t._v(" \n  "+t._s(t.getText())+"\n  "),t.hasInformationToShowOrHide()?n("span",{staticClass:"info"},[t.full?n("button",{staticClass:"label label-primary",on:{click:t.changeText}},[t._v("Ver Menos")]):n("button",{staticClass:"label label-primary",on:{click:t.changeText}},[t._v("Ver mais")])]):t._e()])},s=[],c={name:"Excerpt",data:function(){return{full:!1}},props:{message:String,length:Number},methods:{textIsLong:function(t,e){return t.length>e+5},changeText:function(){this.full=!this.full},getText:function(){var t=this.message,e=this.length;return null==e&&(e=120),this.textIsLong(t,e)?this.full?t:t.substring(0,e)+"...":t},hasInformationToShowOrHide:function(){var t=this.length;return null==t&&(t=120),!!this.textIsLong(this.message,t)}}},l=c,u=(n("11a4"),n("2877")),f=Object(u["a"])(l,o,s,!1,null,"37b736a1",null);f.options.__file="Excerpt.vue";var p=f.exports,d={name:"municipio",components:{Loading:i["a"],Excerpt:p},props:{id:String,ano:Number},data:function(){return{municipio:!1,parlamentares:!1,hide:"",anoAtual:(new Date).getFullYear()}},methods:{onChangeYear:function(){var t=Number(this.$refs.selectAno.value);this.$router.replace("/municipio/"+this.id+"/"+t),this.hide="",this.getMunicipio(this.id),this.getParlamentares(this.id,t)},getMunicipio:function(t){var e=this;if(null!=t){var n=this;axios.get(n.$apiUrls.getMunicipioPorId(t)).then(function(t){e.municipio=t.data,e.hide="hide"})}},getParlamentares:function(t,e){var n=this;null!=e&&void 0!=e||(e=this.anoAtual);var a=this;axios.get(a.$apiUrls.getParlamentaresPorMunicipioEAno(t,e)).then(function(t){return n.hide="hide",Array.isArray(t.data)&&t.data.length>0&&t.data.forEach(function(t,n){t.emendas=[],axios.get(encodeURI(a.$apiUrls.getConveniosPorParlamentarEAno(t.nome,e))).then(function(e){t.emendas=e.data})}),a.parlamentares=t.data,!0},function(t){return n.parlamentares=!1,console.log(t),!1})},currencyFormat:function(t){var e=(t/1).toFixed(2).replace(".",",");return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}},mounted:function(){this.getMunicipio(this.id),this.getParlamentares(this.id,this.ano)}},h=d,g=(n("68e5"),Object(u["a"])(h,a,r,!1,null,"6e24f19a",null));g.options.__file="Municipio.vue";e["default"]=g.exports},"8b97":function(t,e,n){var a=n("d3f4"),r=n("cb7c"),i=function(t,e){if(r(t),!a(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,a){try{a=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),a(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:a(t,n),t}}({},!1):void 0),check:i}},9093:function(t,e,n){var a=n("ce10"),r=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return a(t,r)}},a481:function(t,e,n){n("214f")("replace",2,function(t,e,n){return[function(a,r){"use strict";var i=t(this),o=void 0==a?void 0:a[e];return void 0!==o?o.call(a,i,r):n.call(String(i),a,r)},n]})},aa77:function(t,e,n){var a=n("5ca1"),r=n("be13"),i=n("79e5"),o=n("fdef"),s="["+o+"]",c="​",l=RegExp("^"+s+s+"*"),u=RegExp(s+s+"*$"),f=function(t,e,n){var r={},s=i(function(){return!!o[t]()||c[t]()!=c}),l=r[t]=s?e(p):o[t];n&&(r[n]=l),a(a.P+a.F*s,"String",r)},p=f.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=f},ac6a:function(t,e,n){for(var a=n("cadf"),r=n("0d58"),i=n("2aba"),o=n("7726"),s=n("32e9"),c=n("84f2"),l=n("2b4c"),u=l("iterator"),f=l("toStringTag"),p=c.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=r(d),g=0;g<h.length;g++){var m,v=h[g],_=d[v],b=o[v],y=b&&b.prototype;if(y&&(y[u]||s(y,u,p),y[f]||s(y,f,v),c[v]=p,_))for(m in a)y[m]||i(y,m,a[m],!0)}},c161:function(t,e,n){"use strict";var a=n("2a35"),r=n.n(a);r.a},c5f6:function(t,e,n){"use strict";var a=n("7726"),r=n("69a8"),i=n("2d95"),o=n("5dbc"),s=n("6a99"),c=n("79e5"),l=n("9093").f,u=n("11e9").f,f=n("86cc").f,p=n("aa77").trim,d="Number",h=a[d],g=h,m=h.prototype,v=i(n("2aeb")(m))==d,_="trim"in String.prototype,b=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){e=_?e.trim():p(e,3);var n,a,r,i=e.charCodeAt(0);if(43===i||45===i){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+e}for(var o,c=e.slice(2),l=0,u=c.length;l<u;l++)if(o=c.charCodeAt(l),o<48||o>r)return NaN;return parseInt(c,a)}}return+e};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof h&&(v?c(function(){m.valueOf.call(n)}):i(n)!=d)?o(new g(b(e)),n,h):b(e)};for(var y,C=n("9e1e")?l(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;C.length>x;x++)r(g,y=C[x])&&!r(h,y)&&f(h,y,u(g,y));h.prototype=m,m.constructor=h,n("2aba")(a,d,h)}},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-769d.c7e34caa.js.map