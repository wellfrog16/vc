import{E as b,W as C,D as y}from"./document.5a06ee6b.js";import{p as B,a as V,u as D}from"./useChoice.4a53c148.js";import{E as x,a as A}from"./index.36466788.js";import{f as _,o as p,h as k,w as l,c as F,aj as w,u as a,F as S,T as q,J as I,_ as h,g as f,d as e,a4 as O,b as E,a as o,t as P,a0 as N,e as T}from"./app.11033573.js";import{E as W}from"./index.a8859f4e.js";import{E as U}from"./index.b16314e8.js";import{E as $}from"./index.1c34b64b.js";import"./index.22d22e81.js";import"./typescript.72bf8adc.js";import"./index.d62ae4ff.js";import"./index.6d554735.js";import"./scroll.e0113a2a.js";import"./isEqual.cdc3130c.js";import"./validator.005be054.js";import"./index.c49c4348.js";const H=_({__name:"index",props:B,emits:V,setup(v,{emit:i}){const c=v,{loading:t,myOptions:r,myProps:n,myValue:d}=D({props:c,emits:i},"async-picker");return(g,u)=>(p(),k(a(x),q({modelValue:a(d),"onUpdate:modelValue":u[0]||(u[0]=s=>I(d)?d.value=s:null),multiple:g.multiple,"collapse-tags":"",loading:a(t)},{...g.$attrs}),{default:l(()=>[(p(!0),F(S,null,w(a(r),(s,m)=>(p(),k(a(A),{key:s[a(n).key]||s[a(n).label],label:s[a(n).label],value:s[a(n).value]||m},null,8,["label","value"]))),128))]),_:1},16,["modelValue","multiple","loading"]))}}),j=h(H,[["__file","index.vue"]]),z=_({__name:"example",setup(v){const i=[{label:"\u5C0F\u9F99\u867E",value:1},{label:"\u6BDB\u8840\u65FA",value:2},{label:"\u5241\u6912\u9C7C\u5934",value:3},{label:"\u51B0\u6FC0\u51CC",value:4},{label:"\u91D1\u6C64\u80A5\u725B",value:5}],c=()=>new Promise(u=>{setTimeout(()=>u(i),1e3)}),t=f(),r=f(!1),n=f(!0),d=()=>{n.value=!1,N(()=>{n.value=!0})},g=u=>{t.value=u?[]:void 0};return(u,s)=>(p(),k(C,null,{default:l(()=>[e(a(b),{label:"\u5C55\u793A\u533A"},{default:l(()=>[e(a(W),null,{default:l(()=>[n.value?(p(),k(j,{key:0,modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=m=>t.value=m),options:c,clearable:"",multiple:r.value,placeholder:"\u8BF7\u9009\u62E9"},null,8,["modelValue","multiple"])):O("v-if",!0),e(a(U),{onClick:d},{default:l(()=>[E("\u91CD\u65B0\u52A0\u8F7D")]),_:1})]),_:1})]),_:1}),e(a(b),{label:"\u53C2\u6570\uFF1A\u5355/\u591A\u9009"},{default:l(()=>[e(a($),{modelValue:r.value,"onUpdate:modelValue":s[1]||(s[1]=m=>r.value=m),"active-text":"\u591A\u9009","inactive-text":"\u5355\u9009","active-value":!0,"inactive-value":!1,onChange:g},null,8,["modelValue"])]),_:1}),e(a(b),{label:"\u7ED3\u679C"},{default:l(()=>[o("span",null,P(t.value),1)]),_:1})]),_:1}))}}),J=h(z,[["__file","example.vue"]]),L=_({__name:"usage",setup(v){const i={params:[{param:"*v-model",description:"\u7ED1\u5B9A\u503C",type:"Value | Value[]",defaultValue:""},{param:"*options",description:"\u9009\u9879\u6570\u636E\uFF0C\u53EF\u4EE5\u662F Promise \u6570\u636E",type:"IChoiceOption | (() => Promise<IChoiceOption>)",defaultValue:"[]"},{param:"multiple",description:"\u662F\u5426\u591A\u9009",type:"boolean",defaultValue:"false"},{param:"name",description:"\u4F7F\u7528 localStorage \u7F13\u5B58\u65F6\u7684 key\uFF0C\u7A7A\u4E0D\u7F13\u5B58",type:"string",defaultValue:""},{param:"loadingText",description:"\u52A0\u8F7D\u6587\u6848",type:"string",defaultValue:"\u52A0\u8F7D\u4E2D"},{param:"props",description:"\u914D\u7F6E\u9009\u9879\uFF0C\u7528\u4E8E\u6307\u5B9A\u6570\u636E\u7684 key",type:"IChoiceOptionProps",defaultValue:"-"},{param:"expires",description:"\u5BF9\u6570\u636E\u8FDB\u884C localStorage \u7F13\u5B58\uFF0C\u6307\u5B9A\u65E5\u671F\u5230\u671F\u6216\u8005 X \u79D2\u540E\u5931\u6548\u3002\u4E0D\u7F13\u5B58\u8BBE\u7F6E\u4E3A 0",type:"Date | number",defaultValue:"7200"},{param:"\u5176\u4ED6",description:"el-select \u7684\u5C5E\u6027\u3001\u4E8B\u4EF6",type:"https://element-plus.gitee.io/zh-CN/component/select.html#select-%E5%B1%9E%E6%80%A7"}],types:[{param:"Value",description:"string | number | boolean"},{param:"IChoiceOption",description:"IOption[] | string[] | number[]"},{param:"IChoiceOptionProps",description:"{ key: string; value: string; label: string}"},{param:"IOption",description:"{ label: string; value: Value, key?: string }"}],events:[{name:"init",description:"options \u4E3A\u5F02\u6B65\u65F6\uFF0C\u52A0\u8F7D\u5B8C\u6210\u7684\u56DE\u8C03",param:"options"},{name:"change",description:"\u9009\u62E9\u53D8\u5316\u65F6\u7684\u89E6\u53D1",param:"value"}]};return(c,t)=>(p(),k(y,{data:i}))}}),R=h(L,[["__file","usage.vue"]]),X=o("h2",{id:"\u529F\u80FD",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#\u529F\u80FD","aria-hidden":"true"},"#"),E(" \u529F\u80FD")],-1),G=o("p",null,"\u57FA\u4E8E el-select\uFF0C\u7528\u4E8E\u5355\u9009\u548C\u591A\u9009\u6570\u636E\u6E90\u662F\u5F02\u6B65/\u540C\u6B65\u83B7\u53D6\u7684\u6570\u636E",-1),K=o("p",null,"\u5EFA\u8BAE\u7528\u4E8E 5 - 20 \u4E2A\u9009\u62E9\u9879\u7684\u573A\u666F",-1),M=o("h2",{id:"\u529F\u80FD\u793A\u4F8B",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#\u529F\u80FD\u793A\u4F8B","aria-hidden":"true"},"#"),E(" \u529F\u80FD\u793A\u4F8B")],-1),Q=T(`<h2 id="\u6700\u5C0F\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u6700\u5C0F\u793A\u4F8B" aria-hidden="true">#</a> \u6700\u5C0F\u793A\u4F8B</h2><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Wrapper</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HSelect</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>result<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Wrapper</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> Wrapper <span class="token keyword">from</span> <span class="token string">&#39;@/components/simple-wrapper.vue&#39;</span>
<span class="token keyword">import</span> HSelect <span class="token keyword">from</span> <span class="token string">&#39;../index.vue&#39;</span>

<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;\u5C0F\u9F99\u867E&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u6BDB\u8840\u65FA&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5241\u6912\u9C7C\u5934&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u51B0\u6FC0\u51CC&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;\u6BDB\u8840\u65FA&#39;</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>`,3),Y={__name:"select.html",setup(v){return(i,c)=>(p(),F("div",null,[X,G,K,M,e(J),Q,e(R)]))}},ka=h(Y,[["__file","select.html.vue"]]);export{ka as default};
