import{f as U,g as f,aA as z,z as g,G as m,E as O,I as $,o as D,h as A,w as i,d as c,u as o,b as y,V,a as F,X as W,Y as H,J as Q,c as T,aK as L,ay as q,a0 as N,c8 as J,_ as G}from"./app.11033573.js";import{E as b}from"./index.b16314e8.js";import{aJ as K,L as X}from"./document.5a06ee6b.js";import{E as Y}from"./index.a8859f4e.js";import{v as R}from"./directive.dabd7b41.js";import{E as P}from"./index.1a06e6e9.js";const Z=U({__name:"index",props:{dialog:{type:Boolean,default:!1},visible:{type:Boolean,default:!1},image:{type:[String,Object],required:!0},option:{type:Object,default:()=>{}},imageSmoothingQuality:{type:String,default:"high"},containerWidth:{type:String,default:"600px"},containerHeight:{type:String,default:"450px"},cropperWidth:{type:Number,default:400},cropperHeight:{type:Number,default:300}},emits:["init","update:visible","cancel","finished"],setup(w,{expose:M,emit:d}){const a=w,n=f(!1),s=f(),l=z(),k=f(""),p=f(!1),r=g({get:()=>a.visible,set:e=>{d("update:visible",e)}}),C=g(()=>({width:a.containerWidth,height:a.containerHeight})),j=g(()=>`${parseInt(a.containerWidth)+40}px`),v=g(()=>{if(typeof a.image=="string"){const t=new Image;return t.src=a.image,t}const e=a.image;if(L&&(e==null?void 0:e.size)){const t=new Image,u=L.URL.createObjectURL(e);return t.src=u,t}return a.image}),_=()=>{if(!l.value||!a.dialog)return;const e=l.value.getCroppedCanvas();k.value=(e==null?void 0:e.toDataURL())||""},E=async()=>{var t;if(!s.value)return;(t=l.value)==null||t.destroy(),n.value=!0,p.value=!1,s.value.childNodes.forEach(u=>{var x;return(x=s.value)==null?void 0:x.removeChild(u)}),s.value.appendChild(v.value);const e=await q.loadCdnSingle("cropper");l.value=new e(v.value,{dragMode:"move",viewMode:1,aspectRatio:a.cropperWidth/a.cropperHeight,toggleDragModeOnDblclick:!1,guides:!0,cropmove:a.dialog?X(_,1e3):()=>{},...a.option,ready(){n.value=!1,_(),N(()=>d("init"))}})},B=()=>{n.value||(r.value=!1,d("cancel"))},h=()=>{if(!(n.value||!l.value))return l.value.getCroppedCanvas({width:a.cropperWidth,height:a.cropperHeight,imageSmoothingQuality:a.imageSmoothingQuality})},S=()=>{const e=h();if(!!e)return J.canvasToBlob(e)},I=()=>{const e=h(),t=S();r.value=!1,d("finished",e,t)};return m(()=>a.option,()=>{p.value=!0}),m(v,()=>{p.value=!0}),m(r,()=>{a.visible&&(!l.value||p.value)&&N(()=>E())}),M({instance:l,getCroppedCanvas:h,getBlobData:S}),O(()=>!a.dialog&&E()),$(()=>{var e;return(e=l.value)==null?void 0:e.destroy()}),(e,t)=>w.dialog?(D(),A(o(P),{key:0,modelValue:o(r),"onUpdate:modelValue":t[0]||(t[0]=u=>Q(r)?r.value=u:null),title:"\u56FE\u7247\u88C1\u526A",width:o(j),"custom-class":"or-dialog","append-to-body":"","close-on-click-modal":!1,"before-close":B},{footer:i(()=>[c(o(Y),null,{default:i(()=>[c(o(b),{loading:n.value,onClick:B},{default:i(()=>[y("\u53D6\u6D88")]),_:1},8,["loading"]),c(o(K),{href:k.value,download:"cropper.jpg",underline:!1},{default:i(()=>[c(o(b),{type:"primary"},{default:i(()=>[y("\u4E0B\u8F7D\u5207\u7247")]),_:1})]),_:1},8,["href"]),c(o(b),{loading:n.value,type:"primary",onClick:I},{default:i(()=>[y("\u786E\u5B9A")]),_:1},8,["loading"])]),_:1})]),default:i(()=>[V(F("div",{ref_key:"workbench",ref:s,class:W(e.$style.workbench),style:H(o(C))},null,6),[[o(R),n.value]])]),_:1},8,["modelValue","width"])):V((D(),T("div",{key:1,ref_key:"workbench",ref:s,class:W(e.$style.workbench),style:H(o(C))},null,6)),[[o(R),n.value]])}}),ee="_workbench_ja7q1_1",ae={workbench:ee},te={$style:ae},ue=G(Z,[["__cssModules",te],["__file","index.vue"]]);export{ue as H};
