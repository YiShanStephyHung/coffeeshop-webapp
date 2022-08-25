(function(){"use strict";var e={732:function(e,t,n){var r=n(963),i=n(252);function o(e,t){const n=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(n)}var l=n(744);const s={},a=(0,l.Z)(s,[["render",o]]);var u=a,c=n(201),d=n(577);const h={class:"container"},p=(0,i._)("h1",{class:"title"},"My Coffee Shop",-1),b=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th",{width:"12%"},"#"),(0,i._)("th",{width:"auto"},"品項"),(0,i._)("th",{width:"12%"},"價格"),(0,i._)("th",{width:"12%"},"尺寸"),(0,i._)("th",{width:"20%"},"備註"),(0,i._)("th",{width:"32%"})])],-1),_=(0,i._)("tr",null,[(0,i._)("td",null,"範例"),(0,i._)("td",null,"拿鐵"),(0,i._)("td",null,"90"),(0,i._)("td",null,"L"),(0,i._)("td",null,"微冰微糖"),(0,i._)("td",null,[(0,i._)("button",{class:"btn_alter"},"修改"),(0,i._)("button",{class:"btn_del"},"刪除")])],-1),f=["onClick","contenteditable"],v=["onClick","contenteditable"],m=["onClick","contenteditable"],w=["onClick","contenteditable"],k=["onClick"],y=["onClick"],g=(0,i._)("label",{for:"name"},[(0,i.Uk)("品項"),(0,i._)("span",null,"*")],-1),C=(0,i._)("label",{for:"price"},[(0,i.Uk)("價格"),(0,i._)("span",null,"*")],-1),z=(0,i._)("label",{for:"size"},[(0,i.Uk)("尺寸"),(0,i._)("span",null,"*")],-1),E=(0,i._)("option",{disabled:"",value:""},"請選擇",-1),O=(0,i._)("option",null,"L",-1),D=(0,i._)("option",null,"M",-1),j=(0,i._)("option",null,"S",-1),x=[E,O,D,j],U=(0,i._)("label",{for:"notes"},"備註",-1),I={key:0,class:"error"},S={key:1,class:"error"},q={key:2,class:"error"};function M(e,t,n,o,l,s){return(0,i.wg)(),(0,i.iD)("div",h,[p,(0,i._)("table",null,[b,(0,i._)("tbody",null,[_,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l.orders,((n,r)=>((0,i.wg)(),(0,i.iD)("tr",{key:r},[(0,i._)("td",null,(0,d.zw)(++r),1),(0,i._)("td",{onClick:e=>s.editable(r),contenteditable:l.isContenteditable},(0,d.zw)(n.name),9,f),(0,i._)("td",{onClick:e=>s.editable(r),contenteditable:l.isContenteditable,onKeyup:t[0]||(t[0]=t=>e.value=e.value.replace(/^(0+)|[^\d]+/g,""))},(0,d.zw)(n.price),41,v),(0,i._)("td",{onClick:e=>s.editable(r),contenteditable:l.isContenteditable},(0,d.zw)(n.size),9,m),(0,i._)("td",{onClick:e=>s.editable(r),contenteditable:l.isContenteditable},(0,d.zw)(n.notes),9,w),(0,i._)("td",null,[l.isEditing&&r===l.currentId?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("button",{key:0,class:"btn_alter",onClick:e=>s.alterOrder(r)}," 修改 ",8,k)),l.isEditing&&r===l.currentId?((0,i.wg)(),(0,i.iD)("button",{key:1,class:"btn_save",onClick:t[1]||(t[1]=(...e)=>s.saveOrder&&s.saveOrder(...e))}," 儲存 ")):(0,i.kq)("",!0),(0,i._)("button",{type:"button",class:"btn_del",onClick:e=>s.removeOrder(r)}," 刪除 ",8,y)])])))),128))])]),(0,i._)("form",{onSubmit:t[7]||(t[7]=(0,r.iM)((()=>{}),["prevent"]))},[(0,i._)("div",null,[g,(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>l.name=e)},null,512),[[r.nr,l.name]])]),(0,i._)("div",null,[C,(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=e=>l.price=e),onkeyup:"value=value.replace(/^(0+)|[^\\d]+/g,'')"},null,512),[[r.nr,l.price]])]),(0,i._)("div",null,[z,(0,i.wy)((0,i._)("select",{"onUpdate:modelValue":t[4]||(t[4]=e=>l.size=e)},x,512),[[r.bM,l.size]])]),(0,i._)("div",null,[U,(0,i.wy)((0,i._)("textarea",{rows:"1",placeholder:"輸入文字","onUpdate:modelValue":t[5]||(t[5]=e=>l.notes=e)},null,512),[[r.nr,l.notes]])]),l.nameError?((0,i.wg)(),(0,i.iD)("div",I,(0,d.zw)(l.nameError),1)):(0,i.kq)("",!0),l.priceError?((0,i.wg)(),(0,i.iD)("div",S,(0,d.zw)(l.priceError),1)):(0,i.kq)("",!0),l.sizeError?((0,i.wg)(),(0,i.iD)("div",q,(0,d.zw)(l.sizeError),1)):(0,i.kq)("",!0),(0,i._)("div",null,[(0,i._)("button",{type:"submit",class:"btn_submit",onClick:t[6]||(t[6]=(...e)=>s.onSubmit&&s.onSubmit(...e))},"新增")])],32)])}var V={data(){return{name:"",price:"",size:"",notes:"",orders:[],nameError:"",priceError:"",sizeError:"",currentId:-1,isEditing:!1,isContenteditable:!1,focus:!1}},methods:{onSubmit(){this.nameError=""==this.name.trim()?"「品項」為必填欄位":"",this.priceError=""==this.price.trim()?"「價格」為必填欄位":"",this.sizeError=""==this.size.trim()?"「尺寸」為必填欄位":"",this.nameError||this.priceError||this.sizeError||(this.orders.push({name:this.name,price:this.price,size:this.size,notes:this.notes}),console.log(this.orders),this.clearForm())},clearForm(){this.name="",this.price="",this.size="",this.notes=""},alterOrder(e){this.isEditing=!0,this.currentId=e},saveOrder(){this.isEditing=!1,this.currentId=-1},editable(e){this.isEditing&&e===this.currentId?this.isContenteditable=!0:this.isContenteditable=!1},removeOrder(e){const t=e-1;this.orders.splice(t,1)}}};const F=(0,l.Z)(V,[["render",M]]);var P=F;const K=[{path:"/",name:"orderboard",component:P}],L=(0,c.p7)({history:(0,c.PO)("/coffeeshop-webapp/"),routes:K});var T=L;(0,r.ri)(u).use(T).mount("#app")}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,r,i,o){if(!r){var l=1/0;for(c=0;c<e.length;c++){r=e[c][0],i=e[c][1],o=e[c][2];for(var s=!0,a=0;a<r.length;a++)(!1&o||l>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[a])}))?r.splice(a--,1):(s=!1,o<l&&(l=o));if(s){e.splice(c--,1);var u=i();void 0!==u&&(t=u)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[r,i,o]}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var i,o,l=r[0],s=r[1],a=r[2],u=0;if(l.some((function(t){return 0!==e[t]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(a)var c=a(n)}for(t&&t(r);u<l.length;u++)o=l[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(c)},r=self["webpackChunkcoffeeshop"]=self["webpackChunkcoffeeshop"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(732)}));r=n.O(r)})();
//# sourceMappingURL=app.7eb4e528.js.map