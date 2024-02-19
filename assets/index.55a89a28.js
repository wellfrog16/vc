import{_ as S,d as g,b0 as I,Z as l,B as c,A as M,e as R,j as k,F as U,a3 as j,b1 as D,w as K}from"./document.d036075a.js";import{f as h,P as y,g as N,O as $,A as V,I as F,u as a,K as H,B as v,o as T,h as z,w as B,c as J,t as _,X as Y,a4 as P,b as q,Q as G}from"./app.102c0a36.js";const Q=h({inheritAttrs:!1});function W(t,r,n,o,d,i){return y(t.$slots,"default")}var X=S(Q,[["render",W],["__file","collection.vue"]]);const Z=h({name:"ElCollectionItem",inheritAttrs:!1});function x(t,r,n,o,d,i){return y(t.$slots,"default")}var ee=S(Z,[["render",x],["__file","collection-item.vue"]]);const te="data-el-collection-item",oe=t=>{const r=`El${t}Collection`,n=`${r}Item`,o=Symbol(r),d=Symbol(n),i={...X,name:r,setup(){const b=N(null),f=new Map;$(o,{itemMap:f,getItems:()=>{const p=a(b);if(!p)return[];const s=Array.from(p.querySelectorAll(`[${te}]`));return[...f.values()].sort((C,E)=>s.indexOf(C.ref)-s.indexOf(E.ref))},collectionRef:b})}},m={...ee,name:n,setup(b,{attrs:f}){const u=N(null),p=V(o,void 0);$(d,{collectionItemRef:u}),F(()=>{const s=a(u);s&&p.itemMap.set(s,{ref:s,...f})}),H(()=>{const s=a(u);p.itemMap.delete(s)})}};return{COLLECTION_INJECTION_KEY:o,COLLECTION_ITEM_INJECTION_KEY:d,ElCollection:i,ElCollectionItem:m}},w=g({trigger:I.trigger,effect:{...l.effect,default:"light"},type:{type:c(String)},placement:{type:c(String),default:"bottom"},popperOptions:{type:c(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:c([Number,String]),default:0},maxHeight:{type:c([Number,String]),default:""},popperClass:{type:String,default:""},disabled:{type:Boolean,default:!1},role:{type:String,default:"menu"},buttonProps:{type:c(Object)},teleported:l.teleported});g({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:M}});g({onKeydown:{type:c(Function)}});oe("Dropdown");const re=g({trigger:I.trigger,placement:w.placement,disabled:I.disabled,visible:l.visible,transition:l.transition,popperOptions:w.popperOptions,tabindex:w.tabindex,content:l.content,popperStyle:l.popperStyle,popperClass:l.popperClass,enterable:{...l.enterable,default:!0},effect:{...l.effect,default:"light"},teleported:l.teleported,title:String,width:{type:[String,Number],default:150},offset:{type:Number,default:void 0},showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0},showArrow:{type:Boolean,default:!0},persistent:{type:Boolean,default:!0},"onUpdate:visible":{type:Function}}),ne={"update:visible":t=>R(t),"before-enter":()=>!0,"before-leave":()=>!0,"after-enter":()=>!0,"after-leave":()=>!0},se="onUpdate:visible",le=h({name:"ElPopover"}),ae=h({...le,props:re,emits:ne,setup(t,{expose:r,emit:n}){const o=t,d=v(()=>o[se]),i=k("popover"),m=N(),b=v(()=>{var e;return(e=a(m))==null?void 0:e.popperRef}),f=v(()=>[{width:U(o.width)},o.popperStyle]),u=v(()=>[i.b(),o.popperClass,{[i.m("plain")]:!!o.content}]),p=v(()=>o.transition===`${i.namespace.value}-fade-in-linear`),s=()=>{var e;(e=m.value)==null||e.hide()},O=()=>{n("before-enter")},C=()=>{n("before-leave")},E=()=>{n("after-enter")},L=()=>{n("update:visible",!1),n("after-leave")};return r({popperRef:b,hide:s}),(e,fe)=>(T(),z(a(j),G({ref_key:"tooltipRef",ref:m},e.$attrs,{trigger:e.trigger,placement:e.placement,disabled:e.disabled,visible:e.visible,transition:e.transition,"popper-options":e.popperOptions,tabindex:e.tabindex,content:e.content,offset:e.offset,"show-after":e.showAfter,"hide-after":e.hideAfter,"auto-close":e.autoClose,"show-arrow":e.showArrow,"aria-label":e.title,effect:e.effect,enterable:e.enterable,"popper-class":a(u),"popper-style":a(f),teleported:e.teleported,persistent:e.persistent,"gpu-acceleration":a(p),"onUpdate:visible":a(d),onBeforeShow:O,onBeforeHide:C,onShow:E,onHide:L}),{content:B(()=>[e.title?(T(),J("div",{key:0,class:Y(a(i).e("title")),role:"title"},_(e.title),3)):P("v-if",!0),y(e.$slots,"default",{},()=>[q(_(e.content),1)])]),default:B(()=>[e.$slots.reference?y(e.$slots,"reference",{key:0}):P("v-if",!0)]),_:3},16,["trigger","placement","disabled","visible","transition","popper-options","tabindex","content","offset","show-after","hide-after","auto-close","show-arrow","aria-label","effect","enterable","popper-class","popper-style","teleported","persistent","gpu-acceleration","onUpdate:visible"]))}});var ie=S(ae,[["__file","popover.vue"]]);const A=(t,r)=>{const n=r.arg||r.value,o=n==null?void 0:n.popperRef;o&&(o.triggerRef=t)};var pe={mounted(t,r){A(t,r)},updated(t,r){A(t,r)}};const ce="popover",de=D(pe,ce),be=K(ie,{directive:de});export{be as E};