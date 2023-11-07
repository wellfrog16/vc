import{E as Pe}from"./index.25d768ac.js";import{d as ve,y as le,u as ye,a2 as Ee,U as te,I as fe,C as Be,j as Te,Y as Ve,Z as Me,G as ze,l as we,h as ge,N as Ie,_ as xe,o as Ye,k as Fe,e as Ke,w as Re}from"./document.2db9ebe0.js";import{q as me,B as Xe,g as Q,K as pe,Y as Ae,a4 as se,E as f,M as $e,D as We,J as re,f as ae,a5 as Ce,al as ce,o as L,c as X,d as Ne,w as he,a as Z,t as Ue,u as t,a0 as p,a1 as J,v as Se,am as Oe,R as je,h as ue,a8 as ne,F as oe,an as ie}from"./app.fa95ec70.js";const Le=Symbol("sliderContextKey"),He=ve({modelValue:{type:le([Number,Array]),default:0},id:{type:String,default:void 0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},showInput:Boolean,showInputControls:{type:Boolean,default:!0},size:ye,inputSize:ye,showStops:Boolean,showTooltip:{type:Boolean,default:!0},formatTooltip:{type:le(Function),default:void 0},disabled:Boolean,range:Boolean,vertical:Boolean,height:String,debounce:{type:Number,default:300},label:{type:String,default:void 0},rangeStartLabel:{type:String,default:void 0},rangeEndLabel:{type:String,default:void 0},formatValueText:{type:le(Function),default:void 0},tooltipClass:{type:String,default:void 0},placement:{type:String,values:Ee,default:"top"},marks:{type:le(Object)},validateEvent:{type:Boolean,default:!0}}),de=e=>me(e)||Xe(e)&&e.every(me),Ge={[te]:de,[fe]:de,[Be]:de},_e=(e,l,i)=>{const a=Q();return pe(async()=>{e.range?(Array.isArray(e.modelValue)?(l.firstValue=Math.max(e.min,e.modelValue[0]),l.secondValue=Math.min(e.max,e.modelValue[1])):(l.firstValue=e.min,l.secondValue=e.max),l.oldValue=[l.firstValue,l.secondValue]):(typeof e.modelValue!="number"||Number.isNaN(e.modelValue)?l.firstValue=e.min:l.firstValue=Math.min(e.max,Math.max(e.min,e.modelValue)),l.oldValue=l.firstValue),Ae(window,"resize",i),await se(),i()}),{sliderWrapper:a}},qe=e=>f(()=>e.marks?Object.keys(e.marks).map(Number.parseFloat).sort((i,a)=>i-a).filter(i=>i<=e.max&&i>=e.min).map(i=>({point:i,position:(i-e.min)*100/(e.max-e.min),mark:e.marks[i]})):[]),Je=(e,l,i)=>{const{form:a,formItem:s}=Te(),c=$e(),u=Q(),V=Q(),w={firstButton:u,secondButton:V},d=f(()=>e.disabled||(a==null?void 0:a.disabled)||!1),v=f(()=>Math.min(l.firstValue,l.secondValue)),o=f(()=>Math.max(l.firstValue,l.secondValue)),x=f(()=>e.range?`${100*(o.value-v.value)/(e.max-e.min)}%`:`${100*(l.firstValue-e.min)/(e.max-e.min)}%`),C=f(()=>e.range?`${100*(v.value-e.min)/(e.max-e.min)}%`:"0%"),P=f(()=>e.vertical?{height:e.height}:{}),T=f(()=>e.vertical?{height:x.value,bottom:C.value}:{width:x.value,left:C.value}),M=()=>{c.value&&(l.sliderSize=c.value[`client${e.vertical?"Height":"Width"}`])},I=m=>{const h=e.min+m*(e.max-e.min)/100;if(!e.range)return u;let E;return Math.abs(v.value-h)<Math.abs(o.value-h)?E=l.firstValue<l.secondValue?"firstButton":"secondButton":E=l.firstValue>l.secondValue?"firstButton":"secondButton",w[E]},S=m=>{const h=I(m);return h.value.setPosition(m),h},Y=m=>{l.firstValue=m,g(e.range?[v.value,o.value]:m)},k=m=>{l.secondValue=m,e.range&&g([v.value,o.value])},g=m=>{i(te,m),i(fe,m)},y=async()=>{await se(),i(Be,e.range?[v.value,o.value]:e.modelValue)},j=m=>{var h,E,G,_,q,O;if(d.value||l.dragging)return;M();let R=0;if(e.vertical){const N=(G=(E=(h=m.touches)==null?void 0:h.item(0))==null?void 0:E.clientY)!=null?G:m.clientY;R=(c.value.getBoundingClientRect().bottom-N)/l.sliderSize*100}else{const N=(O=(q=(_=m.touches)==null?void 0:_.item(0))==null?void 0:q.clientX)!=null?O:m.clientX,z=c.value.getBoundingClientRect().left;R=(N-z)/l.sliderSize*100}if(!(R<0||R>100))return S(R)};return{elFormItem:s,slider:c,firstButton:u,secondButton:V,sliderDisabled:d,minValue:v,maxValue:o,runwayStyle:P,barStyle:T,resetSize:M,setPosition:S,emitChange:y,onSliderWrapperPrevent:m=>{var h,E;(((h=w.firstButton.value)==null?void 0:h.dragging)||((E=w.secondButton.value)==null?void 0:E.dragging))&&m.preventDefault()},onSliderClick:m=>{j(m)&&y()},onSliderDown:async m=>{const h=j(m);h&&(await se(),h.value.onButtonDown(m))},setFirstValue:Y,setSecondValue:k}},{left:Ze,down:Qe,right:De,up:el,home:ll,end:tl,pageUp:al,pageDown:nl}=Me,ol=(e,l,i)=>{const a=Q(),s=Q(!1),c=f(()=>l.value instanceof Function),u=f(()=>c.value&&l.value(e.modelValue)||e.modelValue),V=Ve(()=>{i.value&&(s.value=!0)},50),w=Ve(()=>{i.value&&(s.value=!1)},50);return{tooltip:a,tooltipVisible:s,formatValue:u,displayTooltip:V,hideTooltip:w}},rl=(e,l,i)=>{const{disabled:a,min:s,max:c,step:u,showTooltip:V,precision:w,sliderSize:d,formatTooltip:v,emitChange:o,resetSize:x,updateDragging:C}=We(Le),{tooltip:P,tooltipVisible:T,formatValue:M,displayTooltip:I,hideTooltip:S}=ol(e,v,V),Y=Q(),k=f(()=>`${(e.modelValue-s.value)/(c.value-s.value)*100}%`),g=f(()=>e.vertical?{bottom:k.value}:{left:k.value}),y=()=>{l.hovering=!0,I()},j=()=>{l.hovering=!1,l.dragging||S()},H=n=>{a.value||(n.preventDefault(),R(n),window.addEventListener("mousemove",N),window.addEventListener("touchmove",N),window.addEventListener("mouseup",z),window.addEventListener("touchend",z),window.addEventListener("contextmenu",z),Y.value.focus())},A=n=>{a.value||(l.newPosition=Number.parseFloat(k.value)+n/(c.value-s.value)*100,$(l.newPosition),o())},U=()=>{A(-u.value)},m=()=>{A(u.value)},h=()=>{A(-u.value*4)},E=()=>{A(u.value*4)},G=()=>{a.value||($(0),o())},_=()=>{a.value||($(100),o())},q=n=>{let b=!0;[Ze,Qe].includes(n.key)?U():[De,el].includes(n.key)?m():n.key===ll?G():n.key===tl?_():n.key===nl?h():n.key===al?E():b=!1,b&&n.preventDefault()},O=n=>{let b,F;return n.type.startsWith("touch")?(F=n.touches[0].clientY,b=n.touches[0].clientX):(F=n.clientY,b=n.clientX),{clientX:b,clientY:F}},R=n=>{l.dragging=!0,l.isClick=!0;const{clientX:b,clientY:F}=O(n);e.vertical?l.startY=F:l.startX=b,l.startPosition=Number.parseFloat(k.value),l.newPosition=l.startPosition},N=n=>{if(l.dragging){l.isClick=!1,I(),x();let b;const{clientX:F,clientY:W}=O(n);e.vertical?(l.currentY=W,b=(l.startY-l.currentY)/d.value*100):(l.currentX=F,b=(l.currentX-l.startX)/d.value*100),l.newPosition=l.startPosition+b,$(l.newPosition)}},z=()=>{l.dragging&&(setTimeout(()=>{l.dragging=!1,l.hovering||S(),l.isClick||$(l.newPosition),o()},0),window.removeEventListener("mousemove",N),window.removeEventListener("touchmove",N),window.removeEventListener("mouseup",z),window.removeEventListener("touchend",z),window.removeEventListener("contextmenu",z))},$=async n=>{if(n===null||Number.isNaN(+n))return;n<0?n=0:n>100&&(n=100);const b=100/((c.value-s.value)/u.value);let W=Math.round(n/b)*b*(c.value-s.value)*.01+s.value;W=Number.parseFloat(W.toFixed(w.value)),W!==e.modelValue&&i(te,W),!l.dragging&&e.modelValue!==l.oldValue&&(l.oldValue=e.modelValue),await se(),l.dragging&&I(),P.value.updatePopper()};return re(()=>l.dragging,n=>{C(n)}),{disabled:a,button:Y,tooltip:P,tooltipVisible:T,showTooltip:V,wrapperStyle:g,formatValue:M,handleMouseEnter:y,handleMouseLeave:j,onButtonDown:H,onKeyDown:q,setPosition:$}},sl=(e,l,i,a)=>({stops:f(()=>{if(!e.showStops||e.min>e.max)return[];if(e.step===0)return[];const u=(e.max-e.min)/e.step,V=100*e.step/(e.max-e.min),w=Array.from({length:u-1}).map((d,v)=>(v+1)*V);return e.range?w.filter(d=>d<100*(i.value-e.min)/(e.max-e.min)||d>100*(a.value-e.min)/(e.max-e.min)):w.filter(d=>d>100*(l.firstValue-e.min)/(e.max-e.min))}),getStopStyle:u=>e.vertical?{bottom:`${u}%`}:{left:`${u}%`}}),ul=(e,l,i,a,s,c)=>{const u=d=>{s(te,d),s(fe,d)},V=()=>e.range?![i.value,a.value].every((d,v)=>d===l.oldValue[v]):e.modelValue!==l.oldValue,w=()=>{var d,v;e.min>e.max&&ze("Slider","min should not be greater than max.");const o=e.modelValue;e.range&&Array.isArray(o)?o[1]<e.min?u([e.min,e.min]):o[0]>e.max?u([e.max,e.max]):o[0]<e.min?u([e.min,o[1]]):o[1]>e.max?u([o[0],e.max]):(l.firstValue=o[0],l.secondValue=o[1],V()&&(e.validateEvent&&((d=c==null?void 0:c.validate)==null||d.call(c,"change").catch(x=>we())),l.oldValue=o.slice())):!e.range&&typeof o=="number"&&!Number.isNaN(o)&&(o<e.min?u(e.min):o>e.max?u(e.max):(l.firstValue=o,V()&&(e.validateEvent&&((v=c==null?void 0:c.validate)==null||v.call(c,"change").catch(x=>we())),l.oldValue=o)))};w(),re(()=>l.dragging,d=>{d||w()}),re(()=>e.modelValue,(d,v)=>{l.dragging||Array.isArray(d)&&Array.isArray(v)&&d.every((o,x)=>o===v[x])&&l.firstValue===d[0]&&l.secondValue===d[1]||w()},{deep:!0}),re(()=>[e.min,e.max],()=>{w()})},il=ve({modelValue:{type:Number,default:0},vertical:Boolean,tooltipClass:String,placement:{type:String,values:Ee,default:"top"}}),dl={[te]:e=>me(e)},ml=["tabindex"],cl=ae({name:"ElSliderButton"}),vl=ae({...cl,props:il,emits:dl,setup(e,{expose:l,emit:i}){const a=e,s=ge("slider"),c=Ce({hovering:!1,dragging:!1,isClick:!1,startX:0,currentX:0,startY:0,currentY:0,startPosition:0,newPosition:0,oldValue:a.modelValue}),{disabled:u,button:V,tooltip:w,showTooltip:d,tooltipVisible:v,wrapperStyle:o,formatValue:x,handleMouseEnter:C,handleMouseLeave:P,onButtonDown:T,onKeyDown:M,setPosition:I}=rl(a,c,i),{hovering:S,dragging:Y}=ce(c);return l({onButtonDown:T,onKeyDown:M,setPosition:I,hovering:S,dragging:Y}),(k,g)=>(L(),X("div",{ref_key:"button",ref:V,class:p([t(s).e("button-wrapper"),{hover:t(S),dragging:t(Y)}]),style:J(t(o)),tabindex:t(u)?-1:0,onMouseenter:g[0]||(g[0]=(...y)=>t(C)&&t(C)(...y)),onMouseleave:g[1]||(g[1]=(...y)=>t(P)&&t(P)(...y)),onMousedown:g[2]||(g[2]=(...y)=>t(T)&&t(T)(...y)),onTouchstart:g[3]||(g[3]=(...y)=>t(T)&&t(T)(...y)),onFocus:g[4]||(g[4]=(...y)=>t(C)&&t(C)(...y)),onBlur:g[5]||(g[5]=(...y)=>t(P)&&t(P)(...y)),onKeydown:g[6]||(g[6]=(...y)=>t(M)&&t(M)(...y))},[Ne(t(Ie),{ref_key:"tooltip",ref:w,visible:t(v),placement:k.placement,"fallback-placements":["top","bottom","right","left"],"stop-popper-mouse-event":!1,"popper-class":k.tooltipClass,disabled:!t(d),persistent:""},{content:he(()=>[Z("span",null,Ue(t(x)),1)]),default:he(()=>[Z("div",{class:p([t(s).e("button"),{hover:t(S),dragging:t(Y)}])},null,2)]),_:1},8,["visible","placement","popper-class","disabled"])],46,ml))}});var ke=xe(vl,[["__file","/home/runner/work/element-plus/element-plus/packages/components/slider/src/button.vue"]]);const fl=ve({mark:{type:le([String,Object]),default:void 0}});var gl=ae({name:"ElSliderMarker",props:fl,setup(e){const l=ge("slider"),i=f(()=>Se(e.mark)?e.mark:e.mark.label),a=f(()=>Se(e.mark)?void 0:e.mark.style);return()=>Oe("div",{class:l.e("marks-text"),style:a.value},i.value)}});const bl=["id","role","aria-label","aria-labelledby"],yl={key:1},Vl=ae({name:"ElSlider"}),wl=ae({...Vl,props:He,emits:Ge,setup(e,{expose:l,emit:i}){const a=e,s=ge("slider"),{t:c}=Ye(),u=Ce({firstValue:0,secondValue:0,oldValue:0,dragging:!1,sliderSize:1}),{elFormItem:V,slider:w,firstButton:d,secondButton:v,sliderDisabled:o,minValue:x,maxValue:C,runwayStyle:P,barStyle:T,resetSize:M,emitChange:I,onSliderWrapperPrevent:S,onSliderClick:Y,onSliderDown:k,setFirstValue:g,setSecondValue:y}=Je(a,u,i),{stops:j,getStopStyle:H}=sl(a,u,x,C),{inputId:A,isLabeledByFormItem:U}=Fe(a,{formItemContext:V}),m=Ke(),h=f(()=>a.inputSize||m.value),E=f(()=>a.label||c("el.slider.defaultLabel",{min:a.min,max:a.max})),G=f(()=>a.range?a.rangeStartLabel||c("el.slider.defaultRangeStartLabel"):E.value),_=f(()=>a.formatValueText?a.formatValueText(n.value):`${n.value}`),q=f(()=>a.rangeEndLabel||c("el.slider.defaultRangeEndLabel")),O=f(()=>a.formatValueText?a.formatValueText(b.value):`${b.value}`),R=f(()=>[s.b(),s.m(m.value),s.is("vertical",a.vertical),{[s.m("with-input")]:a.showInput}]),N=qe(a);ul(a,u,x,C,i,V);const z=f(()=>{const r=[a.min,a.max,a.step].map(K=>{const D=`${K}`.split(".")[1];return D?D.length:0});return Math.max.apply(null,r)}),{sliderWrapper:$}=_e(a,u,M),{firstValue:n,secondValue:b,sliderSize:F}=ce(u),W=r=>{u.dragging=r};return je(Le,{...ce(a),sliderSize:F,disabled:o,precision:z,emitChange:I,resetSize:M,updateDragging:W}),l({onSliderClick:Y}),(r,K)=>{var D,be;return L(),X("div",{id:r.range?t(A):void 0,ref_key:"sliderWrapper",ref:$,class:p(t(R)),role:r.range?"group":void 0,"aria-label":r.range&&!t(U)?t(E):void 0,"aria-labelledby":r.range&&t(U)?(D=t(V))==null?void 0:D.labelId:void 0,onTouchstart:K[2]||(K[2]=(...B)=>t(S)&&t(S)(...B)),onTouchmove:K[3]||(K[3]=(...B)=>t(S)&&t(S)(...B))},[Z("div",{ref_key:"slider",ref:w,class:p([t(s).e("runway"),{"show-input":r.showInput&&!r.range},t(s).is("disabled",t(o))]),style:J(t(P)),onMousedown:K[0]||(K[0]=(...B)=>t(k)&&t(k)(...B)),onTouchstart:K[1]||(K[1]=(...B)=>t(k)&&t(k)(...B))},[Z("div",{class:p(t(s).e("bar")),style:J(t(T))},null,6),Ne(ke,{id:r.range?void 0:t(A),ref_key:"firstButton",ref:d,"model-value":t(n),vertical:r.vertical,"tooltip-class":r.tooltipClass,placement:r.placement,role:"slider","aria-label":r.range||!t(U)?t(G):void 0,"aria-labelledby":!r.range&&t(U)?(be=t(V))==null?void 0:be.labelId:void 0,"aria-valuemin":r.min,"aria-valuemax":r.range?t(b):r.max,"aria-valuenow":t(n),"aria-valuetext":t(_),"aria-orientation":r.vertical?"vertical":"horizontal","aria-disabled":t(o),"onUpdate:modelValue":t(g)},null,8,["id","model-value","vertical","tooltip-class","placement","aria-label","aria-labelledby","aria-valuemin","aria-valuemax","aria-valuenow","aria-valuetext","aria-orientation","aria-disabled","onUpdate:modelValue"]),r.range?(L(),ue(ke,{key:0,ref_key:"secondButton",ref:v,"model-value":t(b),vertical:r.vertical,"tooltip-class":r.tooltipClass,placement:r.placement,role:"slider","aria-label":t(q),"aria-valuemin":t(n),"aria-valuemax":r.max,"aria-valuenow":t(b),"aria-valuetext":t(O),"aria-orientation":r.vertical?"vertical":"horizontal","aria-disabled":t(o),"onUpdate:modelValue":t(y)},null,8,["model-value","vertical","tooltip-class","placement","aria-label","aria-valuemin","aria-valuemax","aria-valuenow","aria-valuetext","aria-orientation","aria-disabled","onUpdate:modelValue"])):ne("v-if",!0),r.showStops?(L(),X("div",yl,[(L(!0),X(oe,null,ie(t(j),(B,ee)=>(L(),X("div",{key:ee,class:p(t(s).e("stop")),style:J(t(H)(B))},null,6))),128))])):ne("v-if",!0),t(N).length>0?(L(),X(oe,{key:2},[Z("div",null,[(L(!0),X(oe,null,ie(t(N),(B,ee)=>(L(),X("div",{key:ee,style:J(t(H)(B.position)),class:p([t(s).e("stop"),t(s).e("marks-stop")])},null,6))),128))]),Z("div",{class:p(t(s).e("marks"))},[(L(!0),X(oe,null,ie(t(N),(B,ee)=>(L(),ue(t(gl),{key:ee,mark:B.mark,style:J(t(H)(B.position))},null,8,["mark","style"]))),128))],2)],64)):ne("v-if",!0)],38),r.showInput&&!r.range?(L(),ue(t(Pe),{key:0,ref:"input","model-value":t(n),class:p(t(s).e("input")),step:r.step,disabled:t(o),controls:r.showInputControls,min:r.min,max:r.max,debounce:r.debounce,size:t(h),"onUpdate:modelValue":t(g),onChange:t(I)},null,8,["model-value","class","step","disabled","controls","min","max","debounce","size","onUpdate:modelValue","onChange"])):ne("v-if",!0)],42,bl)}}});var hl=xe(wl,[["__file","/home/runner/work/element-plus/element-plus/packages/components/slider/src/slider.vue"]]);const Bl=Re(hl);export{Bl as E};
