import{f as T,J as A,U as O,E as d,q as x,o as p,c as z,d as _,w as S,Z,$ as q,u as o,a as M,a0 as m,t as G,a2 as J,m as K,aQ as re,g as E,K as le,Y as ie,a3 as ue,h,a8 as w,a7 as ce,F as de,ak as pe,a1 as me,aP as fe,v as H,A as Q,I as $,aR as R,ac as ge}from"./app.fa95ec70.js";import{d as L,y,u as ye,h as ve,_ as Y,w as Ce,x as be,as as U,B as V,at as he,Z as Te,au as Ne}from"./document.2db9ebe0.js";import{m as we}from"./typescript.72bf8adc.js";import{p as Se,u as Be}from"./use-global-config.ba1ea21c.js";const ke=L({a11y:{type:Boolean,default:!0},locale:{type:y(Object)},size:ye,button:{type:y(Object)},experimentalFeatures:{type:y(Object)},keyboardNavigation:{type:Boolean,default:!0},message:{type:y(Object)},zIndex:Number,namespace:{type:String,default:"el"}}),I={};T({name:"ElConfigProvider",props:ke,setup(s,{slots:t}){A(()=>s.message,n=>{Object.assign(I,n!=null?n:{})},{immediate:!0,deep:!0});const e=Se(s);return()=>O(t,"default",{config:e==null?void 0:e.value})}});const Ee=L({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"}}),xe=["textContent"],ze=T({name:"ElBadge"}),Me=T({...ze,props:Ee,setup(s,{expose:t}){const e=s,n=ve("badge"),a=d(()=>e.isDot?"":x(e.value)&&x(e.max)?e.max<e.value?`${e.max}+`:`${e.value}`:`${e.value}`);return t({content:a}),(l,u)=>(p(),z("div",{class:m(o(n).b())},[O(l.$slots,"default"),_(J,{name:`${o(n).namespace.value}-zoom-in-center`,persisted:""},{default:S(()=>[Z(M("sup",{class:m([o(n).e("content"),o(n).em("content",l.type),o(n).is("fixed",!!l.$slots.default),o(n).is("dot",l.isDot)]),textContent:G(o(a))},null,10,xe),[[q,!l.hidden&&(o(a)||l.isDot)]])]),_:1},8,["name"])],2))}});var $e=Y(Me,[["__file","/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);const Ie=Ce($e),W=["success","info","warning","error"],i=we({customClass:"",center:!1,dangerouslyUseHTMLString:!1,duration:3e3,icon:void 0,id:"",message:"",onClose:void 0,showClose:!1,type:"info",offset:16,zIndex:0,grouping:!1,repeatNum:1,appendTo:K?document.body:void 0}),Oe=L({customClass:{type:String,default:i.customClass},center:{type:Boolean,default:i.center},dangerouslyUseHTMLString:{type:Boolean,default:i.dangerouslyUseHTMLString},duration:{type:Number,default:i.duration},icon:{type:be,default:i.icon},id:{type:String,default:i.id},message:{type:y([String,Object,Function]),default:i.message},onClose:{type:y(Function),required:!1},showClose:{type:Boolean,default:i.showClose},type:{type:String,values:W,default:i.type},offset:{type:Number,default:i.offset},zIndex:{type:Number,default:i.zIndex},grouping:{type:Boolean,default:i.grouping},repeatNum:{type:Number,default:i.repeatNum}}),_e={destroy:()=>!0},c=re([]),Le=s=>{const t=c.findIndex(a=>a.id===s),e=c[t];let n;return t>0&&(n=c[t-1]),{current:e,prev:n}},De=s=>{const{prev:t}=Le(s);return t?t.vm.exposed.bottom.value:0},Pe=(s,t)=>c.findIndex(n=>n.id===s)>0?20:t,Fe=["id"],je=["innerHTML"],He=T({name:"ElMessage"}),Re=T({...He,props:Oe,emits:_e,setup(s,{expose:t}){const e=s,{Close:n}=he,{ns:a,zIndex:l}=Be("message"),{currentZIndex:u,nextZIndex:f}=l,g=E(),C=E(!1),b=E(0);let B;const ee=d(()=>e.type?e.type==="error"?"danger":e.type:"info"),se=d(()=>{const r=e.type;return{[a.bm("icon",r)]:r&&U[r]}}),D=d(()=>e.icon||U[e.type]||""),te=d(()=>De(e.id)),P=d(()=>Pe(e.id,e.offset)+te.value),ne=d(()=>b.value+P.value),oe=d(()=>({top:`${P.value}px`,zIndex:u.value}));function k(){e.duration!==0&&({stop:B}=fe(()=>{N()},e.duration))}function F(){B==null||B()}function N(){C.value=!1}function ae({code:r}){r===Te.esc&&N()}return le(()=>{k(),f(),C.value=!0}),A(()=>e.repeatNum,()=>{F(),k()}),ie(document,"keydown",ae),ue(g,()=>{b.value=g.value.getBoundingClientRect().height}),t({visible:C,bottom:ne,close:N}),(r,j)=>(p(),h(J,{name:o(a).b("fade"),onBeforeLeave:r.onClose,onAfterLeave:j[0]||(j[0]=Ge=>r.$emit("destroy")),persisted:""},{default:S(()=>[Z(M("div",{id:r.id,ref_key:"messageRef",ref:g,class:m([o(a).b(),{[o(a).m(r.type)]:r.type&&!r.icon},o(a).is("center",r.center),o(a).is("closable",r.showClose),r.customClass]),style:me(o(oe)),role:"alert",onMouseenter:F,onMouseleave:k},[r.repeatNum>1?(p(),h(o(Ie),{key:0,value:r.repeatNum,type:o(ee),class:m(o(a).e("badge"))},null,8,["value","type","class"])):w("v-if",!0),o(D)?(p(),h(o(V),{key:1,class:m([o(a).e("icon"),o(se)])},{default:S(()=>[(p(),h(ce(o(D))))]),_:1},8,["class"])):w("v-if",!0),O(r.$slots,"default",{},()=>[r.dangerouslyUseHTMLString?(p(),z(de,{key:1},[w(" Caution here, message could've been compromised, never use user's input as message "),M("p",{class:m(o(a).e("content")),innerHTML:r.message},null,10,je)],2112)):(p(),z("p",{key:0,class:m(o(a).e("content"))},G(r.message),3))]),r.showClose?(p(),h(o(V),{key:2,class:m(o(a).e("closeBtn")),onClick:pe(N,["stop"])},{default:S(()=>[_(o(n))]),_:1},8,["class","onClick"])):w("v-if",!0)],46,Fe),[[q,C.value]])]),_:3},8,["name","onBeforeLeave"]))}});var Ue=Y(Re,[["__file","/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);let Ve=1;const X=s=>{const t=!s||H(s)||Q(s)||$(s)?{message:s}:s,e={...i,...t};if(!e.appendTo)e.appendTo=document.body;else if(H(e.appendTo)){let n=document.querySelector(e.appendTo);ge(n)||(n=document.body),e.appendTo=n}return e},Ae=s=>{const t=c.indexOf(s);if(t===-1)return;c.splice(t,1);const{handler:e}=s;e.close()},Ze=({appendTo:s,...t},e)=>{const n=`message_${Ve++}`,a=t.onClose,l=document.createElement("div"),u={...t,id:n,onClose:()=>{a==null||a(),Ae(b)},onDestroy:()=>{R(null,l)}},f=_(Ue,u,$(u.message)||Q(u.message)?{default:$(u.message)?u.message:()=>u.message}:null);f.appContext=e||v._context,R(f,l),s.appendChild(l.firstElementChild);const g=f.component,b={id:n,vnode:f,vm:g,handler:{close:()=>{g.exposed.visible.value=!1}},props:f.component.props};return b},v=(s={},t)=>{if(!K)return{close:()=>{}};if(x(I.max)&&c.length>=I.max)return{close:()=>{}};const e=X(s);if(e.grouping&&c.length){const a=c.find(({vnode:l})=>{var u;return((u=l.props)==null?void 0:u.message)===e.message});if(a)return a.props.repeatNum+=1,a.props.type=e.type,a.handler}const n=Ze(e,t);return c.push(n),n.handler};W.forEach(s=>{v[s]=(t={},e)=>{const n=X(t);return v({...n,type:s},e)}});function qe(s){for(const t of c)(!s||s===t.props.type)&&t.handler.close()}v.closeAll=qe;v._context=null;const We=Ne(v,"$message");export{We as E};
