import{E as f,W as y,D as x}from"./document.d036075a.js";import{E as h}from"./index.3a083011.js";import{E as C}from"./index.0c97133f.js";import{f as E,g as d,B,I as q,o as v,h as g,Q as V,u as s,D as F,w as i,a as r,d as n,X as D,_,t as A,b,c0 as N,c as S,e as U}from"./app.102c0a36.js";import{E as $}from"./index.e3572f1a.js";import{E as T,a as w}from"./index.836239a1.js";import"./validator.8b0da09f.js";import"./index.03f8fb2b.js";import"./index.fc2d6e7a.js";import"./use-global-config.e2ea1b91.js";const W=E({__name:"index",props:{modelValue:null,confirmTitle:{default:"\u786E\u8BA4\u5207\u6362\u5417\uFF1F"},disabled:{type:Boolean,default:!1},className:{default:""},confirm:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(l,{emit:o}){const c=l,p=d(),k=()=>p.value?p.value.getElementsByClassName("h-switch")[0]:void 0,m=()=>{var e;return(e=k())==null?void 0:e.click()},u=B({get:()=>c.modelValue,set:e=>o("update:modelValue",e)});return q(()=>{var e;(e=k())==null||e.addEventListener("click",a=>{a.stopPropagation()})}),(e,a)=>l.disabled||!l.confirm?(v(),g(s(h),V({key:0,modelValue:s(u),"onUpdate:modelValue":a[0]||(a[0]=t=>F(u)?u.value=t:null),class:l.className},e.$attrs,{disabled:l.disabled}),null,16,["modelValue","class","disabled"])):(v(),g(s(C),{key:1,title:l.confirmTitle,onConfirm:m},{reference:i(()=>[r("span",{ref_key:"mainEle",ref:p,class:D(e.$style.main)},[n(s(h),V({modelValue:s(u),"onUpdate:modelValue":a[1]||(a[1]=t=>F(u)?u.value=t:null),class:["h-switch",l.className]},e.$attrs),null,16,["modelValue","class"])],2)]),_:1},8,["title"]))}}),O="_main_5oj5r_1",P={main:O},H={$style:P},I=_(W,[["__cssModules",H],["__file","index.vue"]]),M=E({__name:"example",setup(l){const o=d("Open"),c=d(0),p=d(!1),k=async()=>(p.value=!0,await N(c.value),p.value=!1,!0),m=d(!1),u=d(!1);return(e,a)=>(v(),g(y,null,{default:i(()=>[n(s(f),{label:"\u5C55\u793A\u533A"},{default:i(()=>[n(s($),null,{default:i(()=>[n(I,{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=t=>o.value=t),"before-change":k,"active-text":"\u5F00","inactive-text":"\u5173","active-value":"Open","inactive-value":"Close",loading:p.value,disabled:m.value,confirm:u.value},null,8,["modelValue","loading","disabled","confirm"]),r("span",null,"\u503C\uFF1A"+A(o.value),1)]),_:1})]),_:1}),n(s(f),{label:"\u6A21\u62DF\uFF1A\u5F02\u6B65\u5207\u6362"},{default:i(()=>[n(s(T),{modelValue:c.value,"onUpdate:modelValue":a[1]||(a[1]=t=>c.value=t)},{default:i(()=>[n(s(w),{label:0},{default:i(()=>[b("\u7ACB\u5373\u6267\u884C")]),_:1}),n(s(w),{label:1e3},{default:i(()=>[b("\u5EF6\u8FDF\u4E00\u79D2")]),_:1})]),_:1},8,["modelValue"])]),_:1}),n(s(f),{label:"\u53C2\u6570\uFF1A\u7981\u7528\u7EC4\u4EF6"},{default:i(()=>[n(s(h),{modelValue:m.value,"onUpdate:modelValue":a[2]||(a[2]=t=>m.value=t),"active-text":"\u542F\u7528","inactive-text":"\u7981\u7528","active-value":!1,"inactive-value":!0},null,8,["modelValue"])]),_:1}),n(s(f),{label:"\u53C2\u6570\uFF1A\u4E8C\u6B21\u786E\u8BA4"},{default:i(()=>[n(s(h),{modelValue:u.value,"onUpdate:modelValue":a[3]||(a[3]=t=>u.value=t),"active-text":"\u542F\u7528","inactive-text":"\u5173\u95ED","active-value":!0,"inactive-value":!1},null,8,["modelValue"])]),_:1})]),_:1}))}}),R=_(M,[["__file","example.vue"]]),j=E({__name:"usage",setup(l){const o={params:[{param:"*v-model",description:"\u7ED1\u5B9A\u503C",type:"boolean | string | number",defaultValue:"-"},{param:"confirmTitle",description:"confirm \u7684\u6807\u9898",type:"string",defaultValue:"\u786E\u8BA4\u5207\u6362\u5417\uFF1F"},{param:"confirm",description:"\u662F\u5426\u5F00\u542F\u4E8C\u6B21\u786E\u8BA4",type:"boolean",defaultValue:"false"},{param:"className",description:"el-switch \u7684 className",type:"string",defaultValue:"-"},{param:"\u5176\u4ED6",description:"el-switch \u7684\u5C5E\u6027\u3001\u4E8B\u4EF6",type:"https://element-plus.gitee.io/zh-CN/component/switch.html#%E5%B1%9E%E6%80%A7"}],events:[{name:"change",description:"switch \u72B6\u6001\u53D1\u751F\u53D8\u5316\u65F6\u7684\u56DE\u8C03\u51FD\u6570",param:"value"}]};return(c,p)=>(v(),g(x,{data:o}))}}),z=_(j,[["__file","usage.vue"]]),G=r("h2",{id:"\u529F\u80FD",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#\u529F\u80FD","aria-hidden":"true"},"#"),b(" \u529F\u80FD")],-1),L=r("p",null,"\u57FA\u4E8E el-switch \u548C el-popconfirm\uFF0C\u7528\u4E8E\u786E\u8BA4 Switch \u7EC4\u4EF6\u7684\u64CD\u4F5C",-1),Q=r("h2",{id:"\u529F\u80FD\u793A\u4F8B",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#\u529F\u80FD\u793A\u4F8B","aria-hidden":"true"},"#"),b(" \u529F\u80FD\u793A\u4F8B")],-1),X=U(`<h2 id="\u6700\u5C0F\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u6700\u5C0F\u793A\u4F8B" aria-hidden="true">#</a> \u6700\u5C0F\u793A\u4F8B</h2><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Wrapper</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HSwitch</span>
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
<span class="token keyword">import</span> HSwitch <span class="token keyword">from</span> <span class="token string">&#39;../index.vue&#39;</span>

<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;Open&#39;</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>`,3),J={__name:"switch.html",setup(l){return(o,c)=>(v(),S("div",null,[G,L,Q,n(R),X,n(z)]))}},ia=_(J,[["__file","switch.html.vue"]]);export{ia as default};