import{b2 as _a,B as K,b3 as ya,E as x,W as Ca,D as Ea}from"./document.1a61f958.js";import{H as wa}from"./index.ee4a9210.js";import{H as Da}from"./index.9868a18b.js";import{f as P,g as h,cb as Fa,cc as Va,a5 as Aa,E as v,J as Q,o as c,h as D,w as t,a as n,u as a,a0 as V,c as $,an as Ba,F as Ua,Z as m,$ as g,d as e,b as i,a2 as qa,a8 as L,a1 as Ia,G as xa,aL as H,ca as X,_ as R,t as Wa,r as aa,e as $a}from"./app.a8da19fc.js";import{H as Oa}from"./index.05989cc2.js";import{H as Sa}from"./index.741bac9b.js";import{H as La}from"./index.89f57f6e.js";import{E as Ha,a as Na}from"./index.ee016b41.js";import{E as A}from"./index.a98fc326.js";import{v as Ra}from"./directive.e44098d0.js";import{E as ta}from"./index.a1eefa0f.js";import{E as ja}from"./index.a753a2a2.js";import"./useChoice.ab91fe8a.js";import"./index.61f06108.js";import"./index.34527478.js";import"./index.c393d617.js";import"./index.96e02907.js";import"./index.5adfa4a9.js";import"./index.473a5f93.js";import"./index.ccb72091.js";import"./typescript.72bf8adc.js";import"./cloneDeep.69d8d113.js";import"./index.c6d3bc07.js";import"./index.b2ec8009.js";import"./use-dialog.8bc7d712.js";import"./use-global-config.8953bce1.js";import"./scroll.ab9f8759.js";import"./index.7fd44429.js";import"./index.430b0837.js";import"./index.64b8dcf3.js";import"./index.a74d9ac1.js";import"./validator.06a03a89.js";const ea="upload",sa="camera",W="image",na="video",M="canvas",N="placeholder",Ta=["width","height"],Ma=["width","height"],Pa={key:1},Ga=P({__name:"index",props:{visible:{type:Boolean,required:!0},type:{type:Array,default:()=>[ea,sa]},width:{type:Number,default:600},fixWidth:{type:Number,default:32},height:{type:Number,default:400},accept:{type:String,default:".jpg,.jpeg,.png"},cropper:{type:Boolean,default:!0},cropperOption:{type:Object,default:()=>{}}},emits:["update:visible","close","error","save"],setup(r,{emit:d}){const o=r,b="\u7167\u7247\u62CD\u6444\u6210\u529F",u=h(),{videoInputs:B}=Fa({requestPermissions:!0,onUpdated(){var s;B.value.find(l=>l.deviceId&&l.deviceId===u.value)||(u.value=(s=B.value[0])==null?void 0:s.deviceId)}}),{stream:U,start:O,stop:k,enabled:_}=Va({videoDeviceId:u,audioDeviceId:!1}),q=h(),j=h(),y=h(""),f=h(""),C=h(!1),T=h(!1),E=Aa({visible:!1,type:"success",description:""});let F;const la=v(()=>`${o.width+o.fixWidth}px`),oa=v(()=>({width:`${o.width}px`,height:`${o.height}px`})),G=v(()=>o.type.includes(sa)&&u.value),ia=v(()=>o.type.includes(ea)),z=v(()=>y.value===W),Y=v(()=>y.value===M),S=v(()=>y.value===na),ua=v(()=>y.value===N||z.value||Y.value),pa=v(()=>y.value===N),J=v(()=>{const s=!!f.value,l=[M,W].includes(y.value);return s&&l});Q(U,()=>{q.value&&U.value&&(q.value.srcObject=U.value,q.value.play(),C.value=!1)});const I=v({get:()=>o.visible,set:s=>{d("update:visible",s),s||d("close")}}),ca=(s,l)=>{E.visible=!0,E.description=l,E.type=s,setTimeout(()=>{E.visible=!1},1500)},Z=()=>{I.value=!1},w=s=>{y.value=s},ra=()=>{w(N),f.value=""};Q(I,s=>{s?ra():k()});const da=()=>{if(f.value){w(W);return}w(N)},va=()=>{d("save",F,f.value),Z()},ma=()=>{if(C.value=!0,w(na),_.value){C.value=!1;return}O()},ha=()=>{if(!H)return;w(M),j.value.getContext("2d").drawImage(q.value,0,0,o.width,o.height),F=X.dataURLToFile(j.value.toDataURL(),"camera.png");const l=H.URL.createObjectURL(F);f.value=l,ca("success",b)},ka=(s,l,p)=>{l(),w(W),f.value=p,F=s},ga=s=>d("error",s),fa=()=>{T.value=!0},ba=(s,l)=>{if(!H)return;F=X.blobToFile(l,"cropper.png");const p=H.URL.createObjectURL(F);f.value=p,w(W)};return(s,l)=>(c(),D(La,{modelValue:a(I),"onUpdate:modelValue":l[2]||(l[2]=p=>xa(I)?I.value=p:null),title:"\u62CD\u7167\u4E0A\u4F20","close-on-click-modal":!1,width:a(la),"show-close":!1,"append-to-body":"","destroy-on-close":"","show-fullscreen":!1},{footer:t(()=>[n("div",{class:V(s.$style.footer)},[a(G)?(c(),D(a(Ha),{key:0,modelValue:u.value,"onUpdate:modelValue":l[1]||(l[1]=p=>u.value=p),class:V(s.$style.select)},{default:t(()=>[(c(!0),$(Ua,null,Ba(a(B),p=>(c(),D(a(Na),{key:p.deviceId,label:p.label,value:p.deviceId},null,8,["label","value"]))),128))]),_:1},8,["modelValue","class"])):(c(),$("span",Pa)),n("div",null,[m(e(a(A),{onClick:Z},{default:t(()=>[i("\u53D6\u6D88")]),_:1},512),[[g,!a(S)]]),m(e(a(A),{loading:C.value,onClick:da},{default:t(()=>[i("\u8FD4\u56DE")]),_:1},8,["loading"]),[[g,a(S)]]),m(e(a(A),{loading:C.value,type:"primary",onClick:ha},{default:t(()=>[i("\u62CD\u6444")]),_:1},8,["loading"]),[[g,a(S)]]),m(e(a(A),{onClick:fa},{default:t(()=>[i("\u88C1\u526A")]),_:1},512),[[g,a(J)&&r.cropper]]),m(e(a(A),{loading:C.value,type:"primary",onClick:va},{default:t(()=>[i("\u4FDD\u5B58")]),_:1},8,["loading"]),[[g,a(J)]])])],2)]),default:t(()=>[m((c(),$("div",{class:V(s.$style.window),style:Ia(a(oa))},[m(e(a(ta),{src:f.value,fit:"contain"},null,8,["src"]),[[g,a(z)]]),m(n("video",{ref_key:"elVideo",ref:q,width:r.width,height:r.height,muted:""},null,8,Ta),[[g,a(S)]]),m(n("canvas",{ref_key:"elCanvas",ref:j,width:r.width,height:r.height},null,8,Ma),[[g,a(Y)]]),m(n("div",{class:V(s.$style.alert)},[e(qa,{mode:"out-in"},{default:t(()=>[e(a(ja),{title:"\u63D0\u793A",type:E.type,center:"","show-icon":"",closable:!1,description:E.description},null,8,["type","description"])]),_:1})],2),[[g,E.visible]]),L(" \u64CD\u4F5C\u533A "),m(n("div",{class:V([{[s.$style["placeholder-opacity"]]:a(pa)},s.$style.placeholder])},[a(G)?(c(),$("div",{key:0,onClick:ma},[e(a(K),null,{default:t(()=>[e(a(_a))]),_:1})])):L("v-if",!0),a(ia)?(c(),D(Oa,{key:1,"http-request":ka,type:"button",onError:ga},{default:t(()=>[n("span",null,[e(a(K),null,{default:t(()=>[e(a(ya))]),_:1})])]),_:1})):L("v-if",!0)],2),[[g,a(ua)]]),r.cropper?(c(),D(Sa,{key:0,visible:T.value,"onUpdate:visible":l[0]||(l[0]=p=>T.value=p),image:f.value,option:r.cropperOption,dialog:"",onFinished:ba},null,8,["visible","image","option"])):L("v-if",!0)],6)),[[a(Ra),C.value]])]),_:1},8,["modelValue","width"]))}}),za="_window_2ntq2_1",Ya="_alert_2ntq2_13",Ja="_placeholder_2ntq2_23",Za="_footer_2ntq2_63",Ka="_select_2ntq2_68",Qa={window:za,alert:Ya,placeholder:Ja,"placeholder-opacity":"_placeholder-opacity_2ntq2_59",footer:Za,select:Ka},Xa={$style:Qa},ae=R(Ga,[["__cssModules",Xa],["__file","index.vue"]]),ee=P({__name:"example",setup(r){const d=h(""),o=h(!1),b=h(!0),u=h(["upload","camera"]),B=()=>{o.value=!0},U=(O,k)=>{d.value=k};return(O,k)=>(c(),D(Ca,null,{default:t(()=>[e(a(x),{label:"\u5C55\u793A\u533A"},{default:t(()=>[e(a(A),{onClick:B},{default:t(()=>[i("\u6253\u5F00")]),_:1}),e(ae,{visible:o.value,"onUpdate:visible":k[0]||(k[0]=_=>o.value=_),type:u.value,cropper:b.value,onSave:U},null,8,["visible","type","cropper"])]),_:1}),e(a(x),{label:"\u83B7\u53D6\u7684\u56FE\u7247"},{default:t(()=>[e(a(ta),{src:d.value,class:V(O.$style.image)},null,8,["src","class"])]),_:1}),e(a(x),{label:"\u672C\u5730Blob\u5730\u5740"},{default:t(()=>[n("span",null,Wa(d.value),1)]),_:1}),e(a(x),{label:"\u53C2\u6570\uFF1A\u7C7B\u578B"},{default:t(()=>[e(wa,{modelValue:u.value,"onUpdate:modelValue":k[1]||(k[1]=_=>u.value=_),options:["upload","camera"],multiple:""},null,8,["modelValue"])]),_:1}),e(a(x),{label:"\u53C2\u6570\uFF1A\u88C1\u526A"},{default:t(()=>[e(Da,{modelValue:b.value,"onUpdate:modelValue":k[2]||(k[2]=_=>b.value=_)},null,8,["modelValue"])]),_:1})]),_:1}))}}),se="_image_30q9p_1",ne={image:se},te={$style:ne},le=R(ee,[["__cssModules",te],["__file","example.vue"]]),oe=P({__name:"usage",setup(r){const d={params:[{param:"*v-model:visible",description:"\u663E\u793A/\u9690\u85CF",type:"boolen",defaultValue:"false"},{param:"type",description:"\u62CD\u7167\u4E0A\u4F20\u6A21\u5F0F",type:"('upload' | 'camera')[]",defaultValue:"['upload', 'camera']"},{param:"width",description:"\u4E3B\u7A97\u53E3\u5BBD\u5EA6",type:"number",defaultValue:"600"},{param:"height",description:"\u4E3B\u7A97\u53E3\u9AD8\u5EA6",type:"number",defaultValue:"400"},{param:"fixWidth",description:"\u4FEE\u6B63\u5BBD\u5EA6\uFF0C\u7528\u4E8E\u8BA1\u7B97 dialog \u5BBD\u5EA6",type:"number",defaultValue:"40"},{param:"accept",description:"\u4E0A\u4F20\u8FD0\u884C\u7684\u7C7B\u578B",type:"string",defaultValue:".jpg,.jpeg,.png"},{param:"cropper",description:"\u4E0A\u4F20\u524D\u662F\u5426\u88C1\u526A\u56FE\u7247",type:"boolean",defaultValue:"false"},{param:"cropper-option",description:"cropperjs \u7684 options",type:"https://github.com/fengyuanchen/cropperjs#options",defaultValue:"-"}],events:[{name:"close",description:"\u5BF9\u8BDD\u6846\u5173\u95ED\u7684\u56DE\u8C03",param:"-"},{name:"error",description:"\u9884\u4E0A\u4F20\u9519\u8BEF\u56DE\u8C03",param:"\u9519\u8BEF\u6587\u672C"},{name:"save",description:"\u4FDD\u5B58\u7684\u56DE\u8C03",param:"file: \u5904\u7406\u597D\u7684\u6587\u4EF6, localUrl: \u672C\u5730\u9884\u89C8\u5730\u5740"}]};return(o,b)=>(c(),D(Ea,{data:d}))}}),ie=R(oe,[["__file","usage.vue"]]),ue=n("h2",{id:"\u529F\u80FD",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u529F\u80FD","aria-hidden":"true"},"#"),i(" \u529F\u80FD")],-1),pe={class:"custom-container warning"},ce=n("p",{class:"custom-container-title"},"WARNING",-1),re=n("p",null,[n("strong",null,"\u7F51\u9875\u9700\u8981 https \u6A21\u5F0F\u624D\u80FD\u8C03\u7528\u6444\u50CF\u5934")],-1),de={href:"https://vueuse.org/core/useusermedia/#useusermedia",target:"_blank",rel:"noopener noreferrer"},ve=n("p",null,"\u53C2\u8003",-1),me={href:"https://github.com/vueuse/vueuse/pull/2032",target:"_blank",rel:"noopener noreferrer"},he={href:"https://github.com/vueuse/vueuse/issues/2193",target:"_blank",rel:"noopener noreferrer"},ke=n("h2",{id:"\u529F\u80FD\u793A\u4F8B",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u529F\u80FD\u793A\u4F8B","aria-hidden":"true"},"#"),i(" \u529F\u80FD\u793A\u4F8B")],-1),ge=$a(`<h2 id="\u6700\u5C0F\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u6700\u5C0F\u793A\u4F8B" aria-hidden="true">#</a> \u6700\u5C0F\u793A\u4F8B</h2><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Wrapper</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ElButton</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleClick<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u6253\u5F00<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ElButton</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HDialogCameraUpload</span>
            <span class="token attr-name"><span class="token namespace">v-model:</span>visible</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>visible<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">:http-request</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>httpRequest<span class="token punctuation">&quot;</span></span>
        <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Wrapper</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ElButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>
<span class="token keyword">import</span> Wrapper <span class="token keyword">from</span> <span class="token string">&#39;@/components/simple-wrapper.vue&#39;</span>
<span class="token keyword">import</span> HDialogCameraUpload <span class="token keyword">from</span> <span class="token string">&#39;../index.vue&#39;</span>

<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> visible <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    visible<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">httpRequest</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">file</span><span class="token operator">:</span> File<span class="token punctuation">,</span> <span class="token literal-property property">localUrl</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    result<span class="token punctuation">.</span>value <span class="token operator">=</span> localUrl
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>`,3),fe={__name:"dialog-camera-upload.html",setup(r){return(d,o)=>{const b=aa("RouterLink"),u=aa("ExternalLinkIcon");return c(),$("div",null,[ue,n("p",null,[i("\u901A\u8FC7\u6444\u50CF\u5934\u62CD\u7167\u6216\u8005\u76F4\u63A5\u4E0A\u4F20\u83B7\u53D6\u6587\u4EF6\u6570\u636E\uFF0C\u652F\u6301\u88C1\u526A\uFF0C\u4F9D\u8D56 "),e(b,{to:"/other/cropper.html"},{default:t(()=>[i("cropper")]),_:1})]),n("div",pe,[ce,re,n("p",null,[i("\u62CD\u7167\u56FE\u7247\u4E0E\u89C6\u53E3\u5927\u5C0F\u4E0D\u4E00\u81F4\u7684\u95EE\u9898\uFF0C\u9700\u8981\u7B49\u5230 "),n("a",de,[i("useUserMedia"),e(u)]),i(" \u66F4\u65B0\u53C2\u6570\uFF0Cv10\u7248\u672C")]),ve,n("ul",null,[n("li",null,[n("a",me,[i("https://github.com/vueuse/vueuse/pull/2032"),e(u)])]),n("li",null,[n("a",he,[i("https://github.com/vueuse/vueuse/issues/2193"),e(u)])])])]),ke,e(le),ge,e(ie)])}}},Ke=R(fe,[["__file","dialog-camera-upload.html.vue"]]);export{Ke as default};
