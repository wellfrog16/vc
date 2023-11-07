import{E as l,W as C,D}from"./document.2db9ebe0.js";import{H as V}from"./index.8edd5bfe.js";import{H as y}from"./index.6d953c96.js";import{E as _}from"./index.6e867be0.js";import{f as b,g as d,o as k,h as E,w as s,d as a,u as e,b as o,a as t,t as v,_ as g,r as x,c as B,e as A}from"./app.fa95ec70.js";import"./index.963af650.js";import"./useChoice.2259ac6e.js";import"./directive.0bb325ac.js";import"./use-global-config.ba1ea21c.js";import"./index.0d33b1e8.js";import"./index.989ee8ab.js";import"./typescript.72bf8adc.js";import"./index.b392661f.js";import"./index.61172a86.js";const w=b({__name:"example",setup(h){const u=d(""),i=d(""),r=d(),m=d(!0),f=c=>{u.value=c},F=c=>{r.value=c};return(c,n)=>(k(),E(C,null,{default:s(()=>[a(e(l),{label:"\u5C55\u793A\u533A"},{default:s(()=>[a(y,{modelValue:u.value,"onUpdate:modelValue":n[0]||(n[0]=p=>u.value=p),"format-value":i.value,"onUpdate:format-value":n[1]||(n[1]=p=>i.value=p),"pad-decimal":m.value,onChange:F},null,8,["modelValue","format-value","pad-decimal"])]),_:1}),a(e(l),{label:"\u64CD\u4F5C"},{default:s(()=>[a(e(_),{onClick:n[2]||(n[2]=p=>f("123456789"))},{default:s(()=>[o("\u8BBE\u7F6E123456789")]),_:1}),a(e(_),{onClick:n[3]||(n[3]=p=>f("6666.02"))},{default:s(()=>[o("\u8BBE\u7F6E6666.02")]),_:1})]),_:1}),a(e(l),{label:"\u53C2\u6570\uFF1A\u8865\u96F6"},{default:s(()=>[a(V,{modelValue:m.value,"onUpdate:modelValue":n[4]||(n[4]=p=>m.value=p)},null,8,["modelValue"])]),_:1}),a(e(l),{label:"\u7ED3\u679C\uFF1A\u503C"},{default:s(()=>[t("span",null,v(u.value),1)]),_:1}),a(e(l),{label:"\u7ED3\u679C\uFF1A\u683C\u5F0F\u5316"},{default:s(()=>[t("span",null,v(i.value),1)]),_:1}),a(e(l),{label:"@change"},{default:s(()=>[t("span",null,v(r.value),1)]),_:1})]),_:1}))}}),I=g(w,[["__file","example.vue"]]),q=b({__name:"usage",setup(h){const u={params:[{param:"*v-model",description:"\u7ED1\u5B9A\u503C",type:"string",defaultValue:"-"},{param:"v-model:format-value",description:"\u5E26\u6709\u5343\u5206\u4F4D\u7684\u503C",type:"string",defaultValue:"-"},{param:"option",description:"\u6307\u4EE4 v-thoursand \u53C2\u6570",type:"IThousandOption",defaultValue:"\u4E0B\u4E00\u884C"},{param:"",description:"{ decimalScale: 2, integerScale: 12 }",type:" - ",defaultValue:" - "},{param:"padDecimal",description:"format-value \u5C0F\u6570\u4F4D\u88650",type:"boolean",defaultValue:"true"},{param:"\u5176\u4ED6",description:"el-input \u5C5E\u6027",type:"https://element-plus.gitee.io/zh-CN/component/input.html#input-%E5%B1%9E%E6%80%A7",defaultValue:"-"}],types:[{param:"IThousandOption",description:"{ decimalScale: \u5C0F\u6570\u4F4D\u957F\u5EA6, integerScale: \u6574\u6570\u4F4D\u957F\u5EA6 }"}],events:[{name:"change",description:"\u4EC5\u5F53 modelValue \u6539\u53D8\u65F6\uFF0C\u5F53\u8F93\u5165\u6846\u5931\u53BB\u7126\u70B9\u6216\u7528\u6237\u6309 Enter \u65F6\u4EE5\u53CA option \u53D8\u5316\u65F6\u89E6\u53D1",param:"[value, format-value]"}]};return(i,r)=>(k(),E(D,{data:u}))}}),H=g(q,[["__file","usage.vue"]]),N=t("h2",{id:"\u529F\u80FD",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#\u529F\u80FD","aria-hidden":"true"},"#"),o(" \u529F\u80FD")],-1),S=t("h2",{id:"\u529F\u80FD\u793A\u4F8B",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#\u529F\u80FD\u793A\u4F8B","aria-hidden":"true"},"#"),o(" \u529F\u80FD\u793A\u4F8B")],-1),T=A(`<h2 id="\u6700\u5C0F\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u6700\u5C0F\u793A\u4F8B" aria-hidden="true">#</a> \u6700\u5C0F\u793A\u4F8B</h2><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Wrapper</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HThousandInput</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>result<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Wrapper</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> Wrapper <span class="token keyword">from</span> <span class="token string">&#39;@/components/simple-wrapper.vue&#39;</span>
<span class="token keyword">import</span> HThousandInput <span class="token keyword">from</span> <span class="token string">&#39;../index.vue&#39;</span>

<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>`,3),W={__name:"thousand-input.html",setup(h){return(u,i)=>{const r=x("RouterLink");return k(),B("div",null,[N,t("p",null,[o("\u5343\u5206\u4F4D\u8F93\u5165\u6846\uFF0C\u57FA\u7840\u7684\u5343\u5206\u4F4D\u5E94\u7528\uFF0C\u5982\u679C\u5E94\u7528\u4E8E\u8D27\u5E01\uFF0C\u8BF7\u67E5\u770B\u589E\u5F3A\u7248 "),a(r,{to:"/form/currency.html"},{default:s(()=>[o("currency")]),_:1})]),S,a(I),T,a(H)])}}},Y=g(W,[["__file","thousand-input.html.vue"]]);export{Y as default};
