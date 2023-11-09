import{f as N,E as v,am as B,U as A,g as x,aq as I,B as p,q as g,A as T,v as L,d as y,b as O}from"./app.a8da19fc.js";import{d as $,h as C,y as h,H as R,P as o,J as P,K as V,w as Y}from"./document.1a61f958.js";const _=$({prefixCls:{type:String}}),w=N({name:"ElSpaceItem",props:_,setup(e,{slots:u}){const m=C("space"),i=v(()=>`${e.prefixCls||m.b()}__item`);return()=>B("div",{class:i.value},A(u,"default"))}}),z={small:8,default:12,large:16};function j(e){const u=C("space"),m=v(()=>[u.b(),u.m(e.direction),e.class]),i=x(0),n=x(0),d=v(()=>{const t=e.wrap||e.fill?{flexWrap:"wrap",marginBottom:`-${n.value}px`}:{},l={alignItems:e.alignment};return[t,l,e.style]}),f=v(()=>{const t={paddingBottom:`${n.value}px`,marginRight:`${i.value}px`},l=e.fill?{flexGrow:1,minWidth:`${e.fillRatio}%`}:{};return[t,l]});return I(()=>{const{size:t="small",wrap:l,direction:r,fill:a}=e;if(p(t)){const[s=0,c=0]=t;i.value=s,n.value=c}else{let s;g(t)?s=t:s=z[t||"small"]||z.small,(l||a)&&r==="horizontal"?i.value=n.value=s:r==="horizontal"?(i.value=s,n.value=0):(n.value=s,i.value=0)}}),{classes:m,containerStyle:d,itemStyle:f}}const k=$({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},class:{type:h([String,Object,Array]),default:""},style:{type:h([String,Array,Object]),default:""},alignment:{type:h(String),default:"center"},prefixCls:{type:String},spacer:{type:h([Object,String,Number,Array]),default:null,validator:e=>T(e)||g(e)||L(e)},wrap:Boolean,fill:Boolean,fillRatio:{type:Number,default:100},size:{type:[String,Array,Number],values:R,validator:e=>g(e)||p(e)&&e.length===2&&e.every(g)}}),q=N({name:"ElSpace",props:k,setup(e,{slots:u}){const{classes:m,containerStyle:i,itemStyle:n}=j(e);function d(f,t="",l=[]){const{prefixCls:r}=e;return f.forEach((a,s)=>{P(a)?p(a.children)&&a.children.forEach((c,S)=>{P(c)&&p(c.children)?d(c.children,`${t+S}-`,l):l.push(y(w,{style:n.value,prefixCls:r,key:`nested-${t+S}`},{default:()=>[c]},o.PROPS|o.STYLE,["style","prefixCls"]))}):V(a)&&l.push(y(w,{style:n.value,prefixCls:r,key:`LoopKey${t+s}`},{default:()=>[a]},o.PROPS|o.STYLE,["style","prefixCls"]))}),l}return()=>{var f;const{spacer:t,direction:l}=e,r=A(u,"default",{key:0},()=>[]);if(((f=r.children)!=null?f:[]).length===0)return null;if(p(r.children)){let a=d(r.children);if(t){const s=a.length-1;a=a.reduce((c,S,E)=>{const b=[...c,S];return E!==s&&b.push(y("span",{style:[n.value,l==="vertical"?"width: 100%":null],key:E},[T(t)?t:O(t,o.TEXT)],o.STYLE)),b},[])}return y("div",{class:m.value,style:i.value},a,o.STYLE|o.CLASS)}return r.children}}}),G=Y(q);export{G as E};
