(function(e){function t(t){for(var a,i,l=t[0],c=t[1],s=t[2],g=0,f=[];g<l.length;g++)i=l[g],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);p&&p(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,l=1;l<n.length;l++){var c=n[l];0!==r[c]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},o=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/html-vue-test/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var p=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r={class:"container"};function o(e,t,n,o,i,l){var c=Object(a["u"])("StorageWrapper");return Object(a["p"])(),Object(a["e"])("div",r,[Object(a["g"])(c)])}n("b0c0");var i={class:"navbar"},l={class:"navbar__text"},c={class:"storage"},s={key:0,class:"folder"},p={class:"folder__list"},g={class:"file"},f={class:"file__list storage__file-list"};function m(e,t,n,r,o,m){var u=Object(a["u"])("FolderView"),b=Object(a["u"])("FileView");return Object(a["p"])(),Object(a["e"])(a["a"],null,[Object(a["f"])("nav",i,[e.HISTORY.length>1?(Object(a["p"])(),Object(a["e"])("button",{key:0,class:"navbar__btn",onClick:t[0]||(t[0]=function(){return m.toPreviosFolder&&m.toPreviosFolder.apply(m,arguments)})})):Object(a["d"])("",!0),Object(a["f"])("span",l,Object(a["w"])(e.DATA.name),1)]),Object(a["f"])("main",c,[e.DATA.folders.length?(Object(a["p"])(),Object(a["e"])("div",s,[Object(a["f"])("ul",p,[Object(a["g"])(u,{data:e.DATA},null,8,["data"])])])):Object(a["d"])("",!0),Object(a["f"])("div",g,[Object(a["f"])("ul",f,[Object(a["g"])(b,{files_data:e.DATA.files},null,8,["files_data"])])])])],64)}var u=n("5530"),b=["onClick"],A=Object(a["f"])("div",{class:"folder-item__icon"},null,-1),d={class:"folder-item__name"};function j(e,t,n,r,o,i){return Object(a["p"])(!0),Object(a["e"])(a["a"],null,Object(a["t"])(n.data.folders,(function(e,t){return Object(a["p"])(),Object(a["e"])("li",{class:"folder-item",key:t,onClick:function(t){return i.newData(e)}},[A,Object(a["f"])("span",d,Object(a["w"])(e.name),1)],8,b)})),128)}var O=n("5502"),h={name:"FolderView",props:{data:Object},methods:Object(u["a"])(Object(u["a"])({},Object(O["b"])(["GET_DATA_FROM_API","CHANGE_STATE"])),{},{newData:function(e){this.CHANGE_STATE(e)}})};h.render=j;var y=h,T=n("612a"),_=n.n(T),v=Object(a["f"])("img",{src:_.a,alt:""},null,-1),S={class:"file-item__name"};function w(e,t,n,r,o,i){return Object(a["p"])(!0),Object(a["e"])(a["a"],null,Object(a["t"])(n.files_data,(function(e,t){return Object(a["p"])(),Object(a["e"])("li",{class:"file-item",key:t},[v,Object(a["f"])("span",S,Object(a["w"])(e.name),1)])})),128)}var E={name:"FileView",props:{files_data:{type:Array}},computed:{}};E.render=w;var D=E,P={name:"StorageWrapper",components:{FolderView:y,FileView:D},computed:Object(u["a"])({},Object(O["c"])(["DATA","HISTORY"])),methods:Object(u["a"])(Object(u["a"])({},Object(O["b"])(["GET_DATA_FROM_API","CHANGE_PAST_DATA"])),{},{toPreviosFolder:function(){this.CHANGE_PAST_DATA()}}),beforeMount:function(){this.GET_DATA_FROM_API()}};P.render=m;var k=P,x={name:"App",components:{StorageWrapper:k}};n("a9d1");x.render=o;var F=x,C=n("6c02"),N=[{path:"/",component:F},{path:"/file",name:"file",component:D,props:!0}],R=Object(C["a"])({routes:N,history:Object(C["b"])("/html-vue-test/")}),B=R,G=(n("a434"),{name:"src",folders:[{name:"assets",folders:[{name:"icons",folders:[{name:"cows",folders:[],files:[{name:"big-brown-cow.png",type:"image/png",length:"1024"},{name:"inside-cow.png",type:"image/png",length:"1024"},{name:"more-cows.png",type:"image/png",length:"1024"},{name:"cows-in-black.png",type:"image/png",length:"1024"}]},{name:"rabits",folders:[],files:[{name:"small-rabit.png",type:"image/png",length:"1024"},{name:"cook-rabit.png",type:"image/png",length:"1024"},{name:"love-rabits.png",type:"image/png",length:"1024"}]},{name:"foxes",folders:[],files:[{name:"cute-foxes.png",type:"image/png",length:"1024"},{name:"foxes-are-the-best.png",type:"image/png",length:"1024"},{name:"foxes-forever.png",type:"image/png",length:"1024"},{name:"me-and-foxes.png",type:"image/png",length:"1024"},{name:"kind-of-foxes.png",type:"image/png",length:"1024"},{name:"kiss-foxes.png",type:"image/png",length:"1024"}]},{name:"deer",folders:[],files:[{name:"deer-in-forest.jpeg",type:"image/jpeg",length:"1024"},{name:"big-deer.jpeg",type:"image/jpeg",length:"1024"},{name:"love-deer.jpeg",type:"image/jpeg",length:"1024"}]},{name:"elefants",folders:[],files:[{name:"huge-elefants.jpeg",type:"image/jpeg",length:"1024"},{name:"elefants-in-africa.jpeg",type:"image/jpeg",length:"1024"}]}],files:[{name:"close.svg",type:"image/svg",length:"1024"},{name:"open.svg",type:"image/svg",length:"1024"},{name:"exit.svg",type:"image/svg",length:"1024"},{name:"relocat.svg",type:"image/svg",length:"1024"}]},{name:"backgrounds",folders:[],files:[{name:"common.jpeg",type:"image/jpeg",length:"1024"},{name:"secondary.jpg",type:"image/jpeg",length:"1024"},{name:"overlay.png",type:"image/png",length:"1024"}]}],files:[]}],files:[{name:".browserslistrc",type:"application/octet-stream",length:"1024"},{name:".gitignore",type:"text/plain",length:"231"},{name:"babel.config.js",type:"application/javascript",length:"73"},{name:"package-lock.json",type:"application/json",length:"47941"}]}),Q=Object(O["a"])({state:{data:[],history:[]},mutations:{SET_DATA_TO_STATE:function(e,t){e.data=t,e.history.push(t)},PAST_DATA_TO_STATE:function(e){e.history.length-1>0&&(e.history.splice(e.history.length-1,1),e.data=e.history[e.history.length-1])}},actions:{GET_DATA_FROM_API:function(e){var t=e.commit;t("SET_DATA_TO_STATE",G)},CHANGE_STATE:function(e,t){var n=e.commit;n("SET_DATA_TO_STATE",t)},CHANGE_PAST_DATA:function(e){var t=e.commit;t("PAST_DATA_TO_STATE")}},getters:{DATA:function(e){return e.data},HISTORY:function(e){return e.history}}});Object(a["c"])(F).use(Q).use(B).mount("#app")},"612a":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAA30lEQVRoge2ZMQ6CQBBFn8baA2jNPS09ig29dyIWcAEtxMRY6Cw7O6Pmv2QLEpj/X4YKQAhhoQN6YAKulecQ3J0OuDgUT5PoncuHS3i8NqkSr6Fecx7nWFuwNNhrTphEhEBTiSiBZhKRAk0kogXcJTIEXCWyBEwSK2Nw6TOWOVbe5q0XDv0aNoFZ1s0VbernNyCBbCSQjQSykUA2EshGAtlIIBsJZCOBbCSQjeWrxARsn65rPm6VMn66wbKBs0ORpbhk74GB+t9JpWcAdh4CzINO3Ffauvg4Z7mVF+KfuQEADATf0SgDdQAAAABJRU5ErkJggg=="},"8bfb":function(e,t,n){},a9d1:function(e,t,n){"use strict";n("8bfb")}});
//# sourceMappingURL=app.97b005d7.js.map