(function(e){function t(t){for(var a,o,l=t[0],s=t[1],c=t[2],g=0,f=[];g<l.length;g++)o=l[g],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);p&&p(t);while(f.length)f.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,l=1;l<n.length;l++){var s=n[l];0!==i[s]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},i={app:0},r=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/html-vue-test/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var p=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),i={class:"container"};function r(e,t,n,r,o,l){var s=Object(a["v"])("StorageWrapper");return Object(a["q"])(),Object(a["f"])("div",i,[Object(a["h"])(s)])}n("b0c0");var o={class:"navbar"},l={class:"navbar__text"},s={class:"storage"},c={key:0,class:"folder"},p={class:"folder__list"},g={class:"file"},f={class:"file__list storage__file-list"};function b(e,t,n,i,r,b){var m=Object(a["v"])("FolderView"),u=Object(a["v"])("FileView");return Object(a["q"])(),Object(a["f"])(a["a"],null,[Object(a["g"])("nav",o,[e.HISTORY.length>1?(Object(a["q"])(),Object(a["f"])("button",{key:0,class:"navbar__btn",onClick:t[0]||(t[0]=function(){return b.toPreviosFolder&&b.toPreviosFolder.apply(b,arguments)})})):Object(a["e"])("",!0),Object(a["g"])("span",l,Object(a["x"])(e.DATA.name),1)]),Object(a["g"])("main",s,[e.DATA.folders.length?(Object(a["q"])(),Object(a["f"])("div",c,[Object(a["g"])("ul",p,[Object(a["h"])(m,{data:e.DATA},null,8,["data"])])])):Object(a["e"])("",!0),Object(a["g"])("div",g,[Object(a["g"])("ul",f,[(Object(a["q"])(!0),Object(a["f"])(a["a"],null,Object(a["u"])(e.DATA.files,(function(e,t){return Object(a["q"])(),Object(a["d"])(u,{key:t,file_data:e},null,8,["file_data"])})),128))])])])],64)}var m=n("5530"),u=["onClick"],A=Object(a["g"])("div",{class:"folder-item__icon"},null,-1),j={class:"folder-item__name"};function O(e,t,n,i,r,o){return Object(a["q"])(!0),Object(a["f"])(a["a"],null,Object(a["u"])(n.data.folders,(function(e,t){return Object(a["q"])(),Object(a["f"])("li",{class:"folder-item",key:t,onClick:function(t){return o.newData(e)}},[A,Object(a["g"])("span",j,Object(a["x"])(e.name),1)],8,u)})),128)}var d=n("5502"),h={name:"FolderView",props:{data:Object},methods:Object(m["a"])(Object(m["a"])({},Object(d["b"])(["GET_DATA_FROM_API","CHANGE_STATE"])),{},{newData:function(e){this.CHANGE_STATE(e)}})};h.render=O;var y=h,T=n("612a"),_=n.n(T),v=Object(a["g"])("img",{src:_.a,alt:""},null,-1),S={class:"file-item__name"},w={key:0,class:"file-item__list"},E={class:"file-item__type"},D={class:"file-item__type"};function k(e,t,n,i,r,o){return Object(a["q"])(),Object(a["f"])("li",{class:"file-item",onClick:t[0]||(t[0]=function(){return o.toggleTypeList&&o.toggleTypeList.apply(o,arguments)})},[v,Object(a["g"])("span",S,Object(a["x"])(n.file_data.name),1),r.isTypeListVisible?(Object(a["q"])(),Object(a["f"])("ul",w,[Object(a["g"])("li",E,"Type: "+Object(a["x"])(n.file_data.type),1),Object(a["g"])("li",D,"Size: "+Object(a["x"])(n.file_data.length),1)])):Object(a["e"])("",!0)])}var x={name:"FileView",props:{file_data:{type:Object}},data:function(){return{isTypeListVisible:!1}},methods:{toggleTypeList:function(){this.isTypeListVisible=!this.isTypeListVisible}},watch:{file_data:function(){this.isTypeListVisible=!1}}};x.render=k;var P=x,C={name:"StorageWrapper",components:{FolderView:y,FileView:P},computed:Object(m["a"])({},Object(d["c"])(["DATA","HISTORY"])),methods:Object(m["a"])(Object(m["a"])({},Object(d["b"])(["GET_DATA_FROM_API","CHANGE_PAST_DATA"])),{},{toPreviosFolder:function(){this.CHANGE_PAST_DATA()}}),beforeMount:function(){this.GET_DATA_FROM_API()}};C.render=b;var F=C,V={name:"App",components:{StorageWrapper:F}};n("a9d1");V.render=r;var N=V,R=n("6c02"),B=[{path:"/",component:N},{path:"/file",name:"file",component:P,props:!0}],G=Object(R["a"])({routes:B,history:Object(R["b"])("/html-vue-test/")}),Q=G,q=(n("a434"),{name:"src",folders:[{name:"assets",folders:[{name:"icons",folders:[{name:"cows",folders:[],files:[{name:"big-brown-cow.png",type:"image/png",length:"1024"},{name:"inside-cow.png",type:"image/png",length:"1024"},{name:"more-cows.png",type:"image/png",length:"1024"},{name:"cows-in-black.png",type:"image/png",length:"1024"}]},{name:"rabits",folders:[],files:[{name:"small-rabit.png",type:"image/png",length:"1024"},{name:"cook-rabit.png",type:"image/png",length:"1024"},{name:"love-rabits.png",type:"image/png",length:"1024"}]},{name:"foxes",folders:[],files:[{name:"cute-foxes.png",type:"image/png",length:"1024"},{name:"foxes-are-the-best.png",type:"image/png",length:"1024"},{name:"foxes-forever.png",type:"image/png",length:"1024"},{name:"me-and-foxes.png",type:"image/png",length:"1024"},{name:"kind-of-foxes.png",type:"image/png",length:"1024"},{name:"kiss-foxes.png",type:"image/png",length:"1024"}]},{name:"deer",folders:[],files:[{name:"deer-in-forest.jpeg",type:"image/jpeg",length:"1024"},{name:"big-deer.jpeg",type:"image/jpeg",length:"1024"},{name:"love-deer.jpeg",type:"image/jpeg",length:"1024"}]},{name:"elefants",folders:[],files:[{name:"huge-elefants.jpeg",type:"image/jpeg",length:"1024"},{name:"elefants-in-africa.jpeg",type:"image/jpeg",length:"1024"}]}],files:[{name:"close.svg",type:"image/svg",length:"1024"},{name:"open.svg",type:"image/svg",length:"1024"},{name:"exit.svg",type:"image/svg",length:"1024"},{name:"relocat.svg",type:"image/svg",length:"1024"}]},{name:"backgrounds",folders:[],files:[{name:"common.jpeg",type:"image/jpeg",length:"1024"},{name:"secondary.jpg",type:"image/jpeg",length:"1024"},{name:"overlay.png",type:"image/png",length:"1024"}]}],files:[]}],files:[{name:".browserslistrc",type:"application/octet-stream",length:"1024"},{name:".gitignore",type:"text/plain",length:"231"},{name:"babel.config.js",type:"application/javascript",length:"73"},{name:"package-lock.json",type:"application/json",length:"47941"}]}),I=Object(d["a"])({state:{data:[],history:[]},mutations:{SET_DATA_TO_STATE:function(e,t){e.data=t,e.history.push(t)},PAST_DATA_TO_STATE:function(e){e.history.length-1>0&&(e.history.splice(e.history.length-1,1),e.data=e.history[e.history.length-1])}},actions:{GET_DATA_FROM_API:function(e){var t=e.commit;t("SET_DATA_TO_STATE",q)},CHANGE_STATE:function(e,t){var n=e.commit;n("SET_DATA_TO_STATE",t)},CHANGE_PAST_DATA:function(e){var t=e.commit;t("PAST_DATA_TO_STATE")}},getters:{DATA:function(e){return e.data},HISTORY:function(e){return e.history}}});Object(a["c"])(N).use(I).use(Q).mount("#app")},"612a":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAA30lEQVRoge2ZMQ6CQBBFn8baA2jNPS09ig29dyIWcAEtxMRY6Cw7O6Pmv2QLEpj/X4YKQAhhoQN6YAKulecQ3J0OuDgUT5PoncuHS3i8NqkSr6Fecx7nWFuwNNhrTphEhEBTiSiBZhKRAk0kogXcJTIEXCWyBEwSK2Nw6TOWOVbe5q0XDv0aNoFZ1s0VbernNyCBbCSQjQSykUA2EshGAtlIIBsJZCOBbCSQjeWrxARsn65rPm6VMn66wbKBs0ORpbhk74GB+t9JpWcAdh4CzINO3Ffauvg4Z7mVF+KfuQEADATf0SgDdQAAAABJRU5ErkJggg=="},"8bfb":function(e,t,n){},a9d1:function(e,t,n){"use strict";n("8bfb")}});
//# sourceMappingURL=app.1896642a.js.map