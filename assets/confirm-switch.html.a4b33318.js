import{e as P,o as U,B as z,p as T,F as x,G as I,u as R,q as W,s as H,H as O,_ as M,w as j,E as w,W as G,D as L}from"./document.5a06ee6b.js";import{E as V}from"./index.1c34b64b.js";import{b as S,E as q}from"./index.b16314e8.js";import{f as C,g,z as _,o as v,h as k,w as i,a as c,X as y,u as e,Y as J,a3 as X,a4 as D,b as h,t as E,d as o,R as Y,T as F,E as K,J as N,_ as B,av as Q,c as Z,e as aa}from"./app.11033573.js";import{E as ea}from"./index.a8859f4e.js";import{E as na,a as A}from"./index.325e651f.js";import"./validator.005be054.js";import"./index.c49c4348.js";const sa=P({title:String,confirmButtonText:String,cancelButtonText:String,confirmButtonType:{type:String,values:S,default:"primary"},cancelButtonType:{type:String,values:S,default:"text"},icon:{type:U,default:()=>z},iconColor:{type:String,default:"#f90"},hideIcon:{type:Boolean,default:!1},hideAfter:{type:Number,default:200},onConfirm:{type:T(Function)},onCancel:{type:T(Function)},teleported:x.teleported,persistent:x.persistent,width:{type:[String,Number],default:150}}),ta={name:"ElPopconfirm"},la=C({...ta,props:sa,setup(u){const s=u,{t:p}=I(),t=R("popconfirm"),f=g(),m=()=>{var a,d;(d=(a=f.value)==null?void 0:a.onClose)==null||d.call(a)},r=_(()=>({width:W(s.width)})),n=a=>{var d;(d=s.onConfirm)==null||d.call(s,a),m()},l=a=>{var d;(d=s.onCancel)==null||d.call(s,a),m()},b=_(()=>s.confirmButtonText||p("el.popconfirm.confirmButtonText")),$=_(()=>s.cancelButtonText||p("el.popconfirm.cancelButtonText"));return(a,d)=>(v(),k(e(O),F({ref_key:"tooltipRef",ref:f,trigger:"click",effect:"light"},a.$attrs,{"popper-class":`${e(t).namespace.value}-popover`,"popper-style":e(r),teleported:a.teleported,"fallback-placements":["bottom","top","right","left"],"hide-after":a.hideAfter,persistent:a.persistent}),{content:i(()=>[c("div",{class:y(e(t).b())},[c("div",{class:y(e(t).e("main"))},[!a.hideIcon&&a.icon?(v(),k(e(H),{key:0,class:y(e(t).e("icon")),style:J({color:a.iconColor})},{default:i(()=>[(v(),k(X(a.icon)))]),_:1},8,["class","style"])):D("v-if",!0),h(" "+E(a.title),1)],2),c("div",{class:y(e(t).e("action"))},[o(e(q),{size:"small",type:a.cancelButtonType==="text"?"":a.cancelButtonType,text:a.cancelButtonType==="text",onClick:l},{default:i(()=>[h(E(e($)),1)]),_:1},8,["type","text"]),o(e(q),{size:"small",type:a.confirmButtonType==="text"?"":a.confirmButtonType,text:a.confirmButtonType==="text",onClick:n},{default:i(()=>[h(E(e(b)),1)]),_:1},8,["type","text"])],2)],2)]),default:i(()=>[a.$slots.reference?Y(a.$slots,"reference",{key:0}):D("v-if",!0)]),_:3},16,["popper-class","popper-style","teleported","hide-after","persistent"]))}});var oa=M(la,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popconfirm/src/popconfirm.vue"]]);const ia=j(oa),ua=C({__name:"index",props:{modelValue:{type:String,default:""},confirmTitle:{type:String,default:"\u786E\u8BA4\u5207\u6362\u5417\uFF1F"},disabled:{type:Boolean,default:!1},className:{type:String,default:""}},emits:["update:modelValue","change"],setup(u,{emit:s}){const p=u,t=g(),f=()=>t.value?t.value.getElementsByClassName("h-switch")[0]:void 0,m=()=>{var n;return(n=f())==null?void 0:n.click()},r=_({get:()=>p.modelValue,set:n=>s("update:modelValue",n)});return K(()=>{var n;(n=f())==null||n.addEventListener("click",l=>{l.stopPropagation()})}),(n,l)=>u.disabled?(v(),k(e(V),F({key:0,modelValue:e(r),"onUpdate:modelValue":l[0]||(l[0]=b=>N(r)?r.value=b:null),class:u.className},n.$attrs,{disabled:u.disabled}),null,16,["modelValue","class","disabled"])):(v(),k(e(ia),{key:1,title:u.confirmTitle,onConfirm:m},{reference:i(()=>[c("span",{ref_key:"mainEle",ref:t,class:y(n.$style.main)},[o(e(V),F({modelValue:e(r),"onUpdate:modelValue":l[1]||(l[1]=b=>N(r)?r.value=b:null),class:["h-switch",u.className]},n.$attrs),null,16,["modelValue","class"])],2)]),_:1},8,["title"]))}}),pa="_main_5oj5r_1",ca={main:pa},ra={$style:ca},da=B(ua,[["__cssModules",ra],["__file","index.vue"]]),ma=C({__name:"example",setup(u){const s=g("Open"),p=g(0),t=g(!1),f=async()=>(t.value=!0,await Q(p.value),t.value=!1,!0),m=g(!1);return(r,n)=>(v(),k(G,null,{default:i(()=>[o(e(w),{label:"\u5C55\u793A\u533A"},{default:i(()=>[o(e(ea),null,{default:i(()=>[o(da,{modelValue:s.value,"onUpdate:modelValue":n[0]||(n[0]=l=>s.value=l),"before-change":f,"active-text":"\u5F00","inactive-text":"\u5173","active-value":"Open","inactive-value":"Close",loading:t.value,disabled:m.value},null,8,["modelValue","loading","disabled"]),c("span",null,"\u503C\uFF1A"+E(s.value),1)]),_:1})]),_:1}),o(e(w),{label:"\u6A21\u62DF\uFF1A\u5F02\u6B65\u5207\u6362"},{default:i(()=>[o(e(na),{modelValue:p.value,"onUpdate:modelValue":n[1]||(n[1]=l=>p.value=l)},{default:i(()=>[o(e(A),{label:0},{default:i(()=>[h("\u7ACB\u5373\u6267\u884C")]),_:1}),o(e(A),{label:1e3},{default:i(()=>[h("\u5EF6\u8FDF\u4E00\u79D2")]),_:1})]),_:1},8,["modelValue"])]),_:1}),o(e(w),{label:"\u53C2\u6570\uFF1A\u7981\u7528\u7EC4\u4EF6"},{default:i(()=>[o(e(V),{modelValue:m.value,"onUpdate:modelValue":n[2]||(n[2]=l=>m.value=l),"active-text":"\u542F\u7528","inactive-text":"\u7981\u7528","active-value":!1,"inactive-value":!0},null,8,["modelValue"])]),_:1})]),_:1}))}}),va=B(ma,[["__file","example.vue"]]),fa=C({__name:"usage",setup(u){const s={params:[{param:"*v-model",description:"\u7ED1\u5B9A\u503C",type:"boolean | string | number",defaultValue:"-"},{param:"confirmTitle",description:"confirm \u7684\u6807\u9898",type:"string",defaultValue:"\u786E\u8BA4\u5207\u6362\u5417\uFF1F"},{param:"className",description:"el-switch \u7684 className",type:"string",defaultValue:"-"},{param:"\u5176\u4ED6",description:"el-switch \u7684\u5C5E\u6027\u3001\u4E8B\u4EF6",type:"https://element-plus.gitee.io/zh-CN/component/switch.html#%E5%B1%9E%E6%80%A7"}],events:[{name:"change",description:"switch \u72B6\u6001\u53D1\u751F\u53D8\u5316\u65F6\u7684\u56DE\u8C03\u51FD\u6570",param:"value"}]};return(p,t)=>(v(),k(L,{data:s}))}}),ka=B(fa,[["__file","usage.vue"]]),ha=c("h2",{id:"\u529F\u80FD",tabindex:"-1"},[c("a",{class:"header-anchor",href:"#\u529F\u80FD","aria-hidden":"true"},"#"),h(" \u529F\u80FD")],-1),ga=c("p",null,"\u57FA\u4E8E el-switch \u548C el-popconfirm\uFF0C\u7528\u4E8E\u786E\u8BA4 Switch \u7EC4\u4EF6\u7684\u64CD\u4F5C",-1),ba=c("h2",{id:"\u529F\u80FD\u793A\u4F8B",tabindex:"-1"},[c("a",{class:"header-anchor",href:"#\u529F\u80FD\u793A\u4F8B","aria-hidden":"true"},"#"),h(" \u529F\u80FD\u793A\u4F8B")],-1),ya=aa(`<h2 id="\u6700\u5C0F\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u6700\u5C0F\u793A\u4F8B" aria-hidden="true">#</a> \u6700\u5C0F\u793A\u4F8B</h2><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Wrapper</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HConfirmSwitch</span>
            <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>result<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">active-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u5F00<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">inactive-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u5173<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">active-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Open<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">inactive-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Close<span class="token punctuation">&quot;</span></span>
        <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Wrapper</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> Wrapper <span class="token keyword">from</span> <span class="token string">&#39;@/components/simple-wrapper.vue&#39;</span>
<span class="token keyword">import</span> HConfirmSwitch <span class="token keyword">from</span> <span class="token string">&#39;../index.vue&#39;</span>

<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;Open&#39;</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>`,3),_a={__name:"confirm-switch.html",setup(u){return(s,p)=>(v(),Z("div",null,[ha,ga,ba,o(va),ya,o(ka)]))}},Sa=B(_a,[["__file","confirm-switch.html.vue"]]);export{Sa as default};
