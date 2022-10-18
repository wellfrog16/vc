import{f as j,g as c,z as a,V as B,u as t,o as r,h as u,w as h,c as D,Y as b,X as y,b as F,F as T,a4 as g,R as I,d as N,t as V,a0 as L,aK as z,c7 as M,_ as A}from"./app.996e40ef.js";import{H as P}from"./index.9d5471eb.js";import{H as K}from"./index.304ce2b9.js";import{H as W}from"./index.afb4abfe.js";import{v as X}from"./directive.26800a14.js";import{E as Y}from"./index.982f0608.js";import{E as G}from"./index.7729014c.js";const S={width:"200px",height:"100px",src:"",fit:"contain",icon:"Plus",iconSize:30},_={icon:"Upload",type:"primary",size:"",text:"\u4E0A\u4F20\u56FE\u7247"},J={accept:{type:String,default:".jpg,.jpeg,.png"},type:{type:String,default:"image"},imageOptions:{type:Object,default:()=>S},buttonOptions:{type:Object,default:()=>_},maxSize:{type:Number,default:2*1024*1024},httpRequest:{type:Function},beforeUpload:{type:Function},cropper:{type:Boolean,default:!1},cropperOption:{type:Object,default:()=>{}}},Q=j({__name:"index",props:J,emits:["error"],setup(O,{emit:k}){const s=O,n=c(!1),f=c(""),d=c(!1),m=c(),i=a(()=>{const e={...S,...s.imageOptions};return f.value&&(e.src=f.value),e}),p=a(()=>({..._,...s.buttonOptions})),E=a(()=>!!i.value.src),U=a(()=>{const e=i.value;return{width:e.width,height:e.height,"line-height":e.height}}),w=a(()=>{const e=i.value;return{width:e.width,height:e.height,"line-height":e.height,"font-size":`${e.iconSize}px`}}),C=a(()=>s.type==="image"),H=a(()=>s.type==="button"),q=e=>{if(e.size>s.maxSize){const o=`\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 ${s.maxSize/1024/1024}M`;return k("error",o),!1}return s.beforeUpload?s.beforeUpload(e)?(n.value=!0,!0):!1:(n.value=!0,!0)},x=e=>{const o=q(e);return o&&s.cropper?(m.value=e,L(()=>{d.value=!0}),!1):o},v=({file:e})=>{if(!!z&&s.httpRequest){const o=z.URL.createObjectURL(e),l=()=>{f.value=o,n.value=!1};s.httpRequest(e,l,o)}},R=()=>{n.value=!1},$=(e,o)=>{const l=M.blobToFile(o,"cropper.jpg");v({file:l})};return(e,o)=>B((r(),u(t(G),{class:y([e.$style.uploader,`upload-type-${e.type}`]),action:"","show-file-list":!1,accept:e.accept,"http-request":v,"before-upload":x},{default:h(()=>[t(C)?(r(),D(T,{key:0},[t(E)?(r(),u(t(Y),{key:0,src:t(i).src,fit:t(i).fit,style:b(t(U)),class:y(e.$style.photo)},{placeholder:h(()=>[F("\u52A0\u8F7D\u4E2D")]),_:1},8,["src","fit","style","class"])):(r(),u(P,{key:1,name:t(i).icon,class:y([e.$style.icon]),style:b(t(w))},null,8,["name","class","style"]))],64)):g("v-if",!0),t(H)?I(e.$slots,"default",{key:1},()=>[N(K,{size:t(p).size,type:t(p).type,icon:{name:t(p).icon}},{default:h(()=>[F(V(t(p).text),1)]),_:1},8,["size","type","icon"])]):g("v-if",!0),e.cropper&&m.value?(r(),u(W,{key:2,visible:d.value,"onUpdate:visible":o[0]||(o[0]=l=>d.value=l),image:m.value,option:e.cropperOption,dialog:"",onFinished:$,onCancel:R},null,8,["visible","image","option"])):g("v-if",!0)]),_:3},8,["class","accept"])),[[t(X),n.value]])}}),Z="_uploader_e7qei_1",ee="_icon_e7qei_18",te="_photo_e7qei_26",oe={uploader:Z,icon:ee,photo:te},se={$style:oe},ue=A(Q,[["__cssModules",se],["__file","index.vue"]]);export{ue as H};