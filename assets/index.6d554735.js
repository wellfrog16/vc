import{f as E,z as w,o as t,c as T,a as n,R as m,X as o,u as a,h as c,w as r,d as k,as as g,a4 as h,Y as C,Z as N}from"./app.11033573.js";import{e as M,x as V,h as $,u as I,a6 as y,s as b,_ as P,w as R}from"./document.5a06ee6b.js";const X=M({closable:Boolean,type:{type:String,values:["success","info","warning","danger",""],default:""},hit:Boolean,disableTransitions:Boolean,color:{type:String,default:""},size:{type:String,values:V,default:""},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),Y={close:l=>l instanceof MouseEvent,click:l=>l instanceof MouseEvent},Z={name:"ElTag"},j=E({...Z,props:X,emits:Y,setup(l,{emit:i}){const v=l,_=$(),s=I("tag"),u=w(()=>{const{type:e,hit:f,effect:S,closable:z,round:B}=v;return[s.b(),s.is("closable",z),s.m(e),s.m(_.value),s.m(S),s.is("hit",f),s.is("round",B)]}),p=e=>{i("close",e)},d=e=>{i("click",e)};return(e,f)=>e.disableTransitions?(t(),T("span",{key:0,class:o(a(u)),style:C({backgroundColor:e.color}),onClick:d},[n("span",{class:o(a(s).e("content"))},[m(e.$slots,"default")],2),e.closable?(t(),c(a(b),{key:0,class:o(a(s).e("close")),onClick:g(p,["stop"])},{default:r(()=>[k(a(y))]),_:1},8,["class","onClick"])):h("v-if",!0)],6)):(t(),c(N,{key:1,name:`${a(s).namespace.value}-zoom-in-center`,appear:""},{default:r(()=>[n("span",{class:o(a(u)),style:C({backgroundColor:e.color}),onClick:d},[n("span",{class:o(a(s).e("content"))},[m(e.$slots,"default")],2),e.closable?(t(),c(a(b),{key:0,class:o(a(s).e("close")),onClick:g(p,["stop"])},{default:r(()=>[k(a(y))]),_:1},8,["class","onClick"])):h("v-if",!0)],6)]),_:3},8,["name"]))}});var q=P(j,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);const F=R(q);export{F as E,X as t};
