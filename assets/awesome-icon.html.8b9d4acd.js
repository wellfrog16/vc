import{E as r,W as b,D as w}from"./document.2db9ebe0.js";import{H as C}from"./index.963af650.js";import{H as o}from"./index.f047ede1.js";import{E as x}from"./index.52958dd4.js";import{f as k,g as f,E,o as d,h as v,w as u,d as n,a,a0 as y,a1 as V,u as l,_ as m,r as F,c as A,b as s,e as D}from"./app.fa95ec70.js";import"./useChoice.2259ac6e.js";import"./directive.0bb325ac.js";import"./use-global-config.ba1ea21c.js";import"./index.0d33b1e8.js";import"./index.25d768ac.js";import"./index.989ee8ab.js";import"./typescript.72bf8adc.js";import"./index.b392661f.js";const I=k({__name:"example",setup(_){const t=f(18),p=[{label:"\u7C89\u7EA2",value:"deeppink"},{label:"\u9EC4\u7EFF",value:"yellowgreen"},{label:"\u6D45\u84DD",value:"cornflowerblue"},{label:"\u94F6\u8272",value:"silver"},{label:"\u91D1\u8272",value:"gold"}],e=f("deeppink"),h=E(()=>({color:e.value,fontSize:`${t.value}px`}));return(g,c)=>(d(),v(b,null,{default:u(()=>[n(l(r),{label:"\u5C55\u793A\u533A"},{default:u(()=>[a("div",{class:y(g.$style.icons),style:V(l(h))},[n(o,{name:"fa-brands fa-bilibili"}),n(o,{name:"fa-solid fa-car-side"}),n(o,{name:"fa-solid fa-chart-line"}),n(o,{name:"fa-brands fa-github-alt"}),n(o,{name:"fa-regular fa-face-laugh-beam"}),n(o,{name:"fa-regular fa-id-card"})],6)]),_:1}),n(l(r),{label:"\u5927\u5C0F\u63A7\u5236"},{default:u(()=>[n(l(x),{modelValue:t.value,"onUpdate:modelValue":c[0]||(c[0]=i=>t.value=i),min:14,max:30},null,8,["modelValue"])]),_:1}),n(l(r),{label:"\u989C\u8272\u63A7\u5236"},{default:u(()=>[n(C,{modelValue:e.value,"onUpdate:modelValue":c[1]||(c[1]=i=>e.value=i),options:p},null,8,["modelValue"])]),_:1})]),_:1}))}}),B="_icons_od9dm_1",S={icons:B},q={$style:S},H=m(I,[["__cssModules",q],["__file","example.vue"]]),z=k({__name:"usage",setup(_){const t={params:[{param:"*name",description:"icon \u5BF9\u5E94\u7684 name\uFF0C\u8BE6\u60C5\u70B9\u51FB\u540E\u9762\u7684\u94FE\u63A5",type:"https://fontawesome.com/search?m=free&s=brands%2Csolid%2Cregular",defaultValue:"-"},{param:"mode",description:"\u4F7F\u7528 Css \u8FD8\u662F SVG",type:"css | svg",defaultValue:"css"}]};return(p,e)=>(d(),v(w,{data:t}))}}),N=m(z,[["__file","usage.vue"]]),W=a("h2",{id:"\u529F\u80FD",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u529F\u80FD","aria-hidden":"true"},"#"),s(" \u529F\u80FD")],-1),$=a("p",null,[s("\u57FA\u4E8E "),a("code",null,"font-awesome 6.1.2"),s(" \u7684 "),a("code",null,"free"),s(" \u7248\u672C\u5C01\u88C5\u7684 icon \u7EC4\u4EF6\u3002\u63D0\u4F9B\u5168\u91CF "),a("code",null,"Css"),s(" \u6216\u8005 "),a("code",null,"SVG"),s(" \u52A0\u8F7D\u65B9\u5F0F\u3002")],-1),j=a("li",null,[s("\u901A\u8FC7 "),a("code",null,"font-size"),s(" \u63A7\u5236 icon \u5927\u5C0F\uFF0C"),a("code",null,"color"),s(" \u63A7\u5236 icon \u7684\u989C\u8272\u3002")],-1),G={href:"https://fontawesome.com/search?m=free&s=brands%2Csolid%2Cregular",target:"_blank",rel:"noopener noreferrer"},P=a("code",null,"brands",-1),T=a("code",null,"solid",-1),U=a("code",null,"regular",-1),K={class:"custom-container tip"},L=a("p",{class:"custom-container-title"},"TIP",-1),M=a("p",null,[s("\u7531\u4E8E\u4E3A\u4E86\u65B9\u4FBF\u800C\u5168\u91CF\u5F15\u7528\uFF0C\u6240\u4EE5\u4F7F\u7528 SVG \u6A21\u5F0F\u65F6\uFF0C\u52A0\u8F7D\u7684 js \u6BD4\u8F83\u5927("),a("code",null,"629K"),s(")\u3002 \u4F46\u662F\u4F7F\u7528 Css \u6A21\u5F0F\u65F6\uFF0C\u7531\u4E8E\u6709 "),a("code",null,"brands"),s("\u3001"),a("code",null,"solid"),s("\u3001"),a("code",null,"regular"),s(" \u4E09\u4E2A\u5206\u7C7B\uFF0C\u5982\u679C\u6CA1\u6709\u4F7F\u7528\u67D0\u4E2A\u5206\u7C7B\u7684 icon\uFF0C\u5219\u4E0D\u4F1A\u52A0\u8F7D\u5BF9\u5E94\u5206\u7C7B\u7684\u5B57\u4F53\u3002 \u6240\u4EE5\u4F7F\u7528 Css \u6A21\u5F0F\u65F6\uFF0C\u52A0\u8F7D\u7684\u8D44\u6E90\u91CF\u8F83\u5C0F\uFF0C\u4E09\u4E2A\u5206\u7C7B\u5168\u91CF "),a("code",null,"300K"),s("\u3002")],-1),J={href:"https://fontawesome.com/v6/docs/web/use-with/vue/",target:"_blank",rel:"noopener noreferrer"},O=a("div",{class:"custom-container tip"},[a("p",{class:"custom-container-title"},"TIP"),a("p",null,[s("\u6B64\u5916\uFF0C\u8BE5\u7EC4\u4EF6\u4F7F\u7528\u4E86 CDN \u8D44\u6E90\uFF0C\u5982\u679C\u7EC4\u4EF6"),a("strong",null,"\u6CA1\u6709"),s("\u88AB\u663E\u793A\uFF0C\u4E5F"),a("strong",null,"\u4E0D\u4F1A"),s("\u52A0\u8F7D\u5BF9\u5E94\u7684 js \u548C css\u3002")])],-1),Q=a("h2",{id:"\u529F\u80FD\u793A\u4F8B",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u529F\u80FD\u793A\u4F8B","aria-hidden":"true"},"#"),s(" \u529F\u80FD\u793A\u4F8B")],-1),R=D(`<h2 id="\u6700\u5C0F\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u6700\u5C0F\u793A\u4F8B" aria-hidden="true">#</a> \u6700\u5C0F\u793A\u4F8B</h2><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Wrapper</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HAwesomeIcon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fa-solid fa-dog<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Wrapper</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> Wrapper <span class="token keyword">from</span> <span class="token string">&#39;@/components/simple-wrapper.vue&#39;</span>
<span class="token keyword">import</span> HAwesomeIcon <span class="token keyword">from</span> <span class="token string">&#39;../index.vue&#39;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>`,3),X={__name:"awesome-icon.html",setup(_){return(t,p)=>{const e=F("ExternalLinkIcon");return d(),A("div",null,[W,$,a("ul",null,[j,a("li",null,[s("\u4F60\u53EF\u4EE5\u901A\u8FC7 "),a("a",G,[s("\u8FD9\u91CC"),n(e)]),s(" \u67E5\u770B\u6240\u6709\u53EF\u4EE5\u4F7F\u7528\u7684 icon\u3002\u5B83\u5305\u62EC "),P,s("\u3001"),T,s("\u3001"),U,s(" \u4E09\u4E2A\u5206\u7C7B\u3002")])]),a("div",K,[L,M,a("p",null,[s("\u5982\u679C\u671F\u671B\u6309\u9700\u52A0\u8F7D\uFF0C\u53EF\u4EE5\u4F7F\u7528 fontawesome \u5B98\u65B9\u63D0\u4F9B\u7684 "),a("a",J,[s("vue \u7EC4\u4EF6"),n(e)])])]),O,Q,n(H),R,n(N)])}}},ra=m(X,[["__file","awesome-icon.html.vue"]]);export{ra as default};
