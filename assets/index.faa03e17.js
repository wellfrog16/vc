import{m as V,q as J,f as ee,b0 as fe,g as _,aW as ke,M as _e,E as v,J as ie,a4 as me,K as ve,o as y,h as ue,d as c,w as L,a as w,a0 as d,u as t,ak as Ie,a8 as C,c as x,F as Q,a7 as ze,an as Le,Z as Ce,$ as Ee,a1 as ce,U,a2 as Se,ad as xe,Y as M,aG as Ne,t as Oe,V as Te,ac as Re,v as $e,c8 as Ae}from"./app.8dd14888.js";import{aN as Be,R as Ve,d as pe,y as de,ap as Me,b6 as Ye,o as ge,h as we,p as Xe,B as O,a5 as De,ae as Fe,af as Pe,b7 as He,az as We,b8 as Ke,b9 as je,_ as ye,T as B,v as Ze,w as be}from"./document.f7ed7038.js";import{m as he}from"./typescript.72bf8adc.js";import{u as qe}from"./index.0b0e9f31.js";import{a as Ge}from"./scroll.6c7ea0ea.js";var Ue="Expected a function";function re(r,f,l){var s=!0,b=!0;if(typeof r!="function")throw new TypeError(Ue);return Be(l)&&(s="leading"in l?!!l.leading:s,b="trailing"in l?!!l.trailing:b),Ve(r,f,{leading:s,maxWait:f,trailing:b})}const Je=(r,f)=>{if(!V||!r||!f)return!1;const l=r.getBoundingClientRect();let s;return f instanceof Element?s=f.getBoundingClientRect():s={top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},l.top<s.bottom&&l.bottom>s.top&&l.right>s.left&&l.left<s.right},Qe=pe({urlList:{type:de(Array),default:()=>he([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:Boolean,teleported:Boolean,closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7}}),ea={close:()=>!0,switch:r=>J(r),rotate:r=>J(r)},aa=["src"],ta=ee({name:"ElImageViewer"}),na=ee({...ta,props:Qe,emits:ea,setup(r,{expose:f,emit:l}){const s=r,b={CONTAIN:{name:"contain",icon:fe(Me)},ORIGINAL:{name:"original",icon:fe(Ye)}},{t:E}=ge(),i=we("image-viewer"),{nextZIndex:ae}=Xe(),T=_(),N=_([]),S=ke(),I=_(!0),p=_(s.initialIndex),g=_e(b.CONTAIN),u=_({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),Y=v(()=>{const{urlList:a}=s;return a.length<=1}),$=v(()=>p.value===0),P=v(()=>p.value===s.urlList.length-1),te=v(()=>s.urlList[p.value]),ne=v(()=>[i.e("btn"),i.e("prev"),i.is("disabled",!s.infinite&&$.value)]),X=v(()=>[i.e("btn"),i.e("next"),i.is("disabled",!s.infinite&&P.value)]),se=v(()=>{const{scale:a,deg:n,offsetX:o,offsetY:h,enableTransition:z}=u.value;let m=o/a,k=h/a;switch(n%360){case 90:case-270:[m,k]=[k,-m];break;case 180:case-180:[m,k]=[-m,-k];break;case 270:case-90:[m,k]=[-k,m];break}const A={transform:`scale(${a}) rotate(${n}deg) translate(${m}px, ${k}px)`,transition:z?"transform .3s":""};return g.value.name===b.CONTAIN.name&&(A.maxWidth=A.maxHeight="100%"),A}),H=v(()=>J(s.zIndex)?s.zIndex:ae());function R(){oe(),l("close")}function le(){const a=re(o=>{switch(o.code){case B.esc:s.closeOnPressEscape&&R();break;case B.space:Z();break;case B.left:q();break;case B.up:e("zoomIn");break;case B.right:G();break;case B.down:e("zoomOut");break}}),n=re(o=>{const h=o.deltaY||o.deltaX;e(h<0?"zoomIn":"zoomOut",{zoomRate:s.zoomRate,enableTransition:!1})});S.run(()=>{M(document,"keydown",a),M(document,"wheel",n)})}function oe(){S.stop()}function W(){I.value=!1}function K(a){I.value=!1,a.target.alt=E("el.image.error")}function j(a){if(I.value||a.button!==0||!T.value)return;u.value.enableTransition=!1;const{offsetX:n,offsetY:o}=u.value,h=a.pageX,z=a.pageY,m=re(A=>{u.value={...u.value,offsetX:n+A.pageX-h,offsetY:o+A.pageY-z}}),k=M(document,"mousemove",m);M(document,"mouseup",()=>{k()}),a.preventDefault()}function D(){u.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function Z(){if(I.value)return;const a=Ze(b),n=Object.values(b),o=g.value.name,z=(n.findIndex(m=>m.name===o)+1)%a.length;g.value=b[a[z]],D()}function F(a){const n=s.urlList.length;p.value=(a+n)%n}function q(){$.value&&!s.infinite||F(p.value-1)}function G(){P.value&&!s.infinite||F(p.value+1)}function e(a,n={}){if(I.value)return;const{minScale:o,maxScale:h}=s,{zoomRate:z,rotateDeg:m,enableTransition:k}={zoomRate:s.zoomRate,rotateDeg:90,enableTransition:!0,...n};switch(a){case"zoomOut":u.value.scale>o&&(u.value.scale=Number.parseFloat((u.value.scale/z).toFixed(3)));break;case"zoomIn":u.value.scale<h&&(u.value.scale=Number.parseFloat((u.value.scale*z).toFixed(3)));break;case"clockwise":u.value.deg+=m,l("rotate",u.value.deg);break;case"anticlockwise":u.value.deg-=m,l("rotate",u.value.deg);break}u.value.enableTransition=k}return ie(te,()=>{me(()=>{const a=N.value[0];a!=null&&a.complete||(I.value=!0)})}),ie(p,a=>{D(),l("switch",a)}),ve(()=>{var a,n;le(),(n=(a=T.value)==null?void 0:a.focus)==null||n.call(a)}),f({setActiveItem:F}),(a,n)=>(y(),ue(xe,{to:"body",disabled:!a.teleported},[c(Se,{name:"viewer-fade",appear:""},{default:L(()=>[w("div",{ref_key:"wrapper",ref:T,tabindex:-1,class:d(t(i).e("wrapper")),style:ce({zIndex:t(H)})},[w("div",{class:d(t(i).e("mask")),onClick:n[0]||(n[0]=Ie(o=>a.hideOnClickModal&&R(),["self"]))},null,2),C(" CLOSE "),w("span",{class:d([t(i).e("btn"),t(i).e("close")]),onClick:R},[c(t(O),null,{default:L(()=>[c(t(De))]),_:1})],2),C(" ARROW "),t(Y)?C("v-if",!0):(y(),x(Q,{key:0},[w("span",{class:d(t(ne)),onClick:q},[c(t(O),null,{default:L(()=>[c(t(Fe))]),_:1})],2),w("span",{class:d(t(X)),onClick:G},[c(t(O),null,{default:L(()=>[c(t(Pe))]),_:1})],2)],64)),C(" ACTIONS "),w("div",{class:d([t(i).e("btn"),t(i).e("actions")])},[w("div",{class:d(t(i).e("actions__inner"))},[c(t(O),{onClick:n[1]||(n[1]=o=>e("zoomOut"))},{default:L(()=>[c(t(He))]),_:1}),c(t(O),{onClick:n[2]||(n[2]=o=>e("zoomIn"))},{default:L(()=>[c(t(We))]),_:1}),w("i",{class:d(t(i).e("actions__divider"))},null,2),c(t(O),{onClick:Z},{default:L(()=>[(y(),ue(ze(t(g).icon)))]),_:1}),w("i",{class:d(t(i).e("actions__divider"))},null,2),c(t(O),{onClick:n[3]||(n[3]=o=>e("anticlockwise"))},{default:L(()=>[c(t(Ke))]),_:1}),c(t(O),{onClick:n[4]||(n[4]=o=>e("clockwise"))},{default:L(()=>[c(t(je))]),_:1})],2)],2),C(" CANVAS "),w("div",{class:d(t(i).e("canvas"))},[(y(!0),x(Q,null,Le(a.urlList,(o,h)=>Ce((y(),x("img",{ref_for:!0,ref:z=>N.value[h]=z,key:o,src:o,style:ce(t(se)),class:d(t(i).e("img")),onLoad:W,onError:K,onMousedown:j},null,46,aa)),[[Ee,h===p.value]])),128))],2),U(a.$slots,"default")],6)]),_:3})],8,["disabled"]))}});var sa=ye(na,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image-viewer/src/image-viewer.vue"]]);const la=be(sa),oa=pe({hideOnClickModal:Boolean,src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:Boolean,scrollContainer:{type:de([String,Object])},previewSrcList:{type:de(Array),default:()=>he([])},previewTeleported:Boolean,zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7}}),ra={load:r=>r instanceof Event,error:r=>r instanceof Event,switch:r=>J(r),close:()=>!0,show:()=>!0},ia=["src","loading"],ua={key:0},ca=ee({name:"ElImage",inheritAttrs:!1}),da=ee({...ca,props:oa,emits:ra,setup(r,{emit:f}){const l=r;let s="";const{t:b}=ge(),E=we("image"),i=Ne(),ae=qe(),T=_(),N=_(!1),S=_(!0),I=_(!1),p=_(),g=_(),u=V&&"loading"in HTMLImageElement.prototype;let Y,$;const P=v(()=>[E.e("inner"),X.value&&E.e("preview"),S.value&&E.is("loading")]),te=v(()=>i.style),ne=v(()=>{const{fit:e}=l;return V&&e?{objectFit:e}:{}}),X=v(()=>{const{previewSrcList:e}=l;return Array.isArray(e)&&e.length>0}),se=v(()=>{const{previewSrcList:e,initialIndex:a}=l;let n=a;return a>e.length-1&&(n=0),n}),H=v(()=>l.loading==="eager"?!1:!u&&l.loading==="lazy"||l.lazy),R=()=>{!V||(S.value=!0,N.value=!1,T.value=l.src)};function le(e){S.value=!1,N.value=!1,f("load",e)}function oe(e){S.value=!1,N.value=!0,f("error",e)}function W(){Je(p.value,g.value)&&(R(),D())}const K=Ae(W,200,!0);async function j(){var e;if(!V)return;await me();const{scrollContainer:a}=l;Re(a)?g.value=a:$e(a)&&a!==""?g.value=(e=document.querySelector(a))!=null?e:void 0:p.value&&(g.value=Ge(p.value)),g.value&&(Y=M(g,"scroll",K),setTimeout(()=>W(),100))}function D(){!V||!g.value||!K||(Y==null||Y(),g.value=void 0)}function Z(e){if(!!e.ctrlKey){if(e.deltaY<0)return e.preventDefault(),!1;if(e.deltaY>0)return e.preventDefault(),!1}}function F(){!X.value||($=M("wheel",Z,{passive:!1}),s=document.body.style.overflow,document.body.style.overflow="hidden",I.value=!0,f("show"))}function q(){$==null||$(),document.body.style.overflow=s,I.value=!1,f("close")}function G(e){f("switch",e)}return ie(()=>l.src,()=>{H.value?(S.value=!0,N.value=!1,D(),j()):R()}),ve(()=>{H.value?j():R()}),(e,a)=>(y(),x("div",{ref_key:"container",ref:p,class:d([t(E).b(),e.$attrs.class]),style:ce(t(te))},[N.value?U(e.$slots,"error",{key:0},()=>[w("div",{class:d(t(E).e("error"))},Oe(t(b)("el.image.error")),3)]):(y(),x(Q,{key:1},[T.value!==void 0?(y(),x("img",Te({key:0},t(ae),{src:T.value,loading:e.loading,style:t(ne),class:t(P),onClick:F,onLoad:le,onError:oe}),null,16,ia)):C("v-if",!0),S.value?(y(),x("div",{key:1,class:d(t(E).e("wrapper"))},[U(e.$slots,"placeholder",{},()=>[w("div",{class:d(t(E).e("placeholder"))},null,2)])],2)):C("v-if",!0)],64)),t(X)?(y(),x(Q,{key:2},[I.value?(y(),ue(t(la),{key:0,"z-index":e.zIndex,"initial-index":t(se),infinite:e.infinite,"zoom-rate":e.zoomRate,"min-scale":e.minScale,"max-scale":e.maxScale,"url-list":e.previewSrcList,"hide-on-click-modal":e.hideOnClickModal,teleported:e.previewTeleported,"close-on-press-escape":e.closeOnPressEscape,onClose:q,onSwitch:G},{default:L(()=>[e.$slots.viewer?(y(),x("div",ua,[U(e.$slots,"viewer")])):C("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","zoom-rate","min-scale","max-scale","url-list","hide-on-click-modal","teleported","close-on-press-escape"])):C("v-if",!0)],64)):C("v-if",!0)],6))}});var fa=ye(da,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image/src/image.vue"]]);const ya=be(fa);export{ya as E};