import{E as f,W as aa,D as ea}from"./document.5a06ee6b.js";import{f as w,g as r,z as sa,o as c,h as m,w as l,c as W,aj as na,u as n,F as ta,d as i,X as b,b as x,t as h,V as N,c5 as U,at as z,J as la,a4 as ua,_ as C,a as H,e as j}from"./app.11033573.js";import{D as oa}from"./vuedraggable.umd.9f76bded.js";import{H as pa}from"./index.13a4a9c2.js";import{E as K}from"./index.a8859f4e.js";import{E as M}from"./index.6d554735.js";import{E as P}from"./index.22d22e81.js";import{E as ra}from"./index.b0a75a33.js";import{E as ca}from"./index.67a86637.js";import"./index.8e8ea243.js";import"./index.9d60a7f1.js";import"./index.400ac224.js";import"./index.379de840.js";import"./index.b16314e8.js";import"./index.c49c4348.js";import"./typescript.72bf8adc.js";import"./index.d62ae4ff.js";const ia=w({__name:"index",props:{modelValue:{type:Array,required:!0,default:()=>[]},regexp:{type:RegExp,default:/\S+/},errorMessage:{type:String,default:""},readonly:{type:Boolean,default:!1},valueFormat:{type:Function,default:v=>v}},emits:["update:modelValue","change"],setup(v,{emit:u}){const p=v,_="\u540D\u79F0\u91CD\u590D\u4E86",k=r(!1),d=r(!1),e=r(""),o=r(""),V=r(""),F=r(),E=r(),J=r(),L=r(),y=r(),g=sa({get(){return p.modelValue.map(a=>({name:a,editVisible:a===o.value}))},set(a){const s=a.map(t=>p.valueFormat(t.name||t));u("update:modelValue",s)}}),O=a=>{e.value=a,o.value=a},T=a=>{const s=[...p.modelValue];s.splice(s.indexOf(a),1),g.value=s,u("change",s)},$=a=>p.modelValue.includes(a)&&o.value!==a,X=a=>p.regexp.test(a),I=a=>!$(a)&&X(a),D=()=>{k.value=!1,V.value="",clearTimeout(E.value)},S=()=>{var a;clearTimeout(E.value),$(e.value)&&(V.value=_),k.value=!0,(a=F.value)==null||a.focus(),E.value=setTimeout(()=>D(),3e3)},G=({target:a})=>{if(y.value=a,e.value=e.value.trim(),e.value===""){T(o.value);return}if(F.value=a,!I(e.value)){S();return}const s=g.value.map(t=>t.name===o.value?e.value:t.name);o.value="",g.value=s,u("change",s)},Q=()=>{D(),e.value=o.value},R=()=>{e.value="",d.value=!0},Y=({target:a})=>{if(y.value=a,e.value=e.value.trim(),e.value===""){d.value=!1;return}if(F.value=a,!I(e.value)){S();return}const s=[...p.modelValue,e.value];d.value=!1,g.value=s,u("change",s),setTimeout(()=>R(),0)},Z=()=>{D(),d.value=!1,e.value=""},q=({target:a})=>{if(!a)return;y.value=a,a.blur()};return(a,s)=>v.readonly?(c(),m(n(K),{key:0,wrap:""},{default:l(()=>[(c(!0),W(ta,null,na(n(g),t=>(c(),m(n(M),{key:t.name},{default:l(()=>[x(h(t.name),1)]),_:2},1024))),128))]),_:1})):(c(),m(n(K),{key:1,wrap:""},{default:l(()=>[i(n(oa),{modelValue:n(g),"onUpdate:modelValue":s[2]||(s[2]=t=>la(g)?g.value=t:null),"drag-class":"el-tag--success",class:b(a.$style.draggable),tag:"span","item-key":"name",animation:"400"},{item:l(({element:t})=>[t.editVisible?N((c(),m(n(P),{key:1,modelValue:e.value,"onUpdate:modelValue":s[0]||(s[0]=B=>e.value=B),size:"small",clearable:"",class:b(a.$style.input),onClear:Q,onKeyup:z(q,["enter"]),onBlur:G},null,8,["modelValue","class","onKeyup"])),[[n(U)]]):(c(),m(n(M),{key:0,closable:"",class:b(a.$style.tag),onClose:B=>T(t.name),onDblclick:B=>O(t.name)},{default:l(()=>[x(h(t.name),1)]),_:2},1032,["class","onClose","onDblclick"]))]),footer:l(()=>[d.value?N((c(),m(n(P),{key:0,ref_key:"createRef",ref:L,modelValue:e.value,"onUpdate:modelValue":s[1]||(s[1]=t=>e.value=t),size:"small",clearable:"",class:b(a.$style.input),onClear:Z,onKeyup:z(q,["enter"]),onBlur:Y},null,8,["modelValue","class","onKeyup"])),[[n(U)]]):(c(),m(pa,{key:1,size:"small",icon:{name:"Plus"},onClick:R}))]),_:1},8,["modelValue","class"]),k.value?(c(),m(n(ra),{key:0,ref_key:"popoverRef",ref:J,"virtual-ref":y.value,visible:k.value,placement:"bottom"},{default:l(()=>[i(n(ca),{type:"error",closable:!1,class:b(a.$style.alert)},{default:l(()=>[x(h(V.value||v.errorMessage),1)]),_:1},8,["class"])]),_:1},8,["virtual-ref","visible"])):ua("v-if",!0)]),_:1}))}}),da="_input_1tp7v_1",ma="_draggable_1tp7v_5",va="_alert_1tp7v_17",ga={input:da,draggable:ma,alert:va},ka={$style:ga},A=C(ia,[["__cssModules",ka],["__file","index.vue"]]),fa=w({__name:"example",setup(v){const u=r(["\u5C0F\u9F99\u867E","\u6BDB\u8840\u65FA","\u5241\u6912\u9C7C\u5934","\u51B0\u6FC0\u51CC"]),p=r([111,222,333,444]),_=d=>parseInt(d),k=d=>{console.log(d)};return(d,e)=>(c(),m(aa,null,{default:l(()=>[i(n(f),{label:"\u5C55\u793A\u533A"},{default:l(()=>[i(A,{modelValue:u.value,"onUpdate:modelValue":e[0]||(e[0]=o=>u.value=o),onChange:k},null,8,["modelValue"])]),_:1}),i(n(f),{label:"\u7ED3\u679C"},{default:l(()=>[H("span",null,h(u.value),1)]),_:1}),i(n(f),{label:"\u5C55\u793A\u533A\uFF1A\u53EA\u80FD\u662F\u6570\u5B57"},{default:l(()=>[i(A,{modelValue:p.value,"onUpdate:modelValue":e[1]||(e[1]=o=>p.value=o),regexp:/^\d+$/,"value-format":_,"error-message":"\u53EA\u80FD\u8F93\u5165\u6570\u5B57",onChange:k},null,8,["modelValue"])]),_:1}),i(n(f),{label:"\u7ED3\u679C"},{default:l(()=>[H("span",null,h(p.value),1)]),_:1}),i(n(f),{label:"\u53EA\u8BFB\u5C55\u793A"},{default:l(()=>[i(A,{modelValue:u.value,"onUpdate:modelValue":e[2]||(e[2]=o=>u.value=o),readonly:""},null,8,["modelValue"])]),_:1})]),_:1}))}}),ba=C(fa,[["__file","example.vue"]]),ha=w({__name:"usage",setup(v){const u={params:[{param:"*v-model",description:"\u7ED1\u5B9A\u503C",type:"string[]",defaultValue:"[]"},{param:"regexp",description:"tag\u503C\u7684\u6821\u9A8C\u89C4\u5219",type:"RegExp",defaultValue:"/\\S+/"},{param:"error-message",description:"\u6821\u9A8C\u9519\u8BEF\u7684\u63D0\u793A",type:"string",defaultValue:""},{param:"readonly",description:"\u53EA\u8BFB\u6A21\u5F0F",type:"boolean",defaultValue:!1},{param:"value-format",description:"\u7ED3\u679C\u683C\u5F0F\u5316",type:"(val: string | number) => string | number",defaultValue:"val=>val"}],events:[{name:"change",description:"\u503C\u66F4\u65B0\u65F6\u89E6\u53D1\uFF0C\u6CE8\u610F\uFF1A\u975E\u53D8\u5316\uFF0C\u53EA\u8981\u66F4\u65B0\u5C31\u89E6\u53D1",param:"\u66F4\u65B0\u540E\u7684\u503C"}]};return(p,_)=>(c(),m(ea,{data:u}))}}),_a=C(ha,[["__file","usage.vue"]]),ya=j('<h2 id="\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u529F\u80FD" aria-hidden="true">#</a> \u529F\u80FD</h2><p>\u57FA\u4E8E el-tag\uFF0C\u7528\u4E8E\u6807\u7B7E\u7EC4\u7684\u7F16\u8F91\uFF0C\u53EF\u4EE5<strong>\u62D6\u62FD</strong>\u6392\u5E8F</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u6B64\u7EC4\u4EF6\u4F9D\u8D56 vuedraggable-es\uFF0C\u4F7F\u7528\u65F6\u9700\u8981</p><p>npm i vuedraggable-es@^4.1.1</p></div><h2 id="\u529F\u80FD\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u529F\u80FD\u793A\u4F8B" aria-hidden="true">#</a> \u529F\u80FD\u793A\u4F8B</h2>',4),Ca=j(`<h2 id="\u6700\u5C0F\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u6700\u5C0F\u793A\u4F8B" aria-hidden="true">#</a> \u6700\u5C0F\u793A\u4F8B</h2><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Wrapper</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HTags</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>result<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Wrapper</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> Wrapper <span class="token keyword">from</span> <span class="token string">&#39;@/components/simple-wrapper.vue&#39;</span>
<span class="token keyword">import</span> HTags <span class="token keyword">from</span> <span class="token string">&#39;../index.vue&#39;</span>

<span class="token keyword">const</span> result <span class="token operator">=</span> ref<span class="token operator">&lt;</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;\u5C0F\u9F99\u867E&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u6BDB\u8840\u65FA&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5241\u6912\u9C7C\u5934&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u51B0\u6FC0\u51CC&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>`,3),Va={__name:"tags.html",setup(v){return(u,p)=>(c(),W("div",null,[ya,i(ba),Ca,i(_a)]))}},Ka=C(Va,[["__file","tags.html.vue"]]);export{Ka as default};
