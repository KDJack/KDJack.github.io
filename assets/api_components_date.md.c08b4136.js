import{_ as p,C as o,c,k as l,H as s,w as r,Q as n,o as E}from"./chunks/framework.21619c98.js";const k=JSON.parse('{"title":"Date 时间","description":"","frontmatter":{},"headers":[],"relativePath":"api/components/date.md","filePath":"api/components/date.md"}'),y={name:"api/components/date.md"},i=n('<h1 id="date-时间" tabindex="-1">Date 时间 <a class="header-anchor" href="#date-时间" aria-label="Permalink to &quot;Date 时间&quot;">​</a></h1><h2 id="名称" tabindex="-1">名称 <a class="header-anchor" href="#名称" aria-label="Permalink to &quot;名称&quot;">​</a></h2><p>组件名称：ElPlusFormDate</p><p>被引用类型: <span class="r-tip">date</span></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>被引用类型是指：当该组件作为子组件被 form 或者 table 组件引用时， formDesc 中对应的 type 类型。</p></div><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2>',6),d={class:"info custom-block"},u=l("p",{class:"custom-block-title"},"先看效果",-1),F={class:"demo"},m={class:"demo"},q={class:"demo"},h=n(`<details class="details custom-block"><summary>代码</summary><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;demo&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">ElPlusFormDate</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;item&quot;</span><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">:desc</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{ placeholder: &#39;请选择 (size: large)&#39;, size: &#39;large&#39; }&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">ElPlusFormDate</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;item&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:desc</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{ placeholder: &#39;请选择 (size: default)&#39; }&quot;</span><span style="color:#E1E4E8;">  /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">ElPlusFormDate</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;item&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:desc</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{ placeholder: &#39;请选择 (size: small)&#39;, size: &#39;small&#39; }&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;demo&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">ElPlusFormDate</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;item&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:desc</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{ placeholder: &#39;请选择 (周)&#39;, type:&#39;week&#39;, format:&#39;[Week] ww&#39; }&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">ElPlusFormDate</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;item&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:desc</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{ placeholder: &#39;请选择 (月)&#39;, type:&#39;month&#39; }&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">ElPlusFormDate</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;item&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:desc</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{ placeholder: &#39;请选择 (年)&#39;, type:&#39;year&#39; }&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">ElPlusFormDate</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;item&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:desc</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{ placeholder: &#39;请选择 (禁用)&#39;, disabledDate:(date)=&gt; (date &gt; new Date()) }&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;demo&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#B31D28;font-style:italic;">ElPlusFormDate</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;item&quot;</span><span style="color:#24292E;">  </span><span style="color:#6F42C1;">:desc</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{ placeholder: &#39;请选择 (size: large)&#39;, size: &#39;large&#39; }&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#B31D28;font-style:italic;">ElPlusFormDate</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;item&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:desc</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{ placeholder: &#39;请选择 (size: default)&#39; }&quot;</span><span style="color:#24292E;">  /&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#B31D28;font-style:italic;">ElPlusFormDate</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;item&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:desc</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{ placeholder: &#39;请选择 (size: small)&#39;, size: &#39;small&#39; }&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;demo&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#B31D28;font-style:italic;">ElPlusFormDate</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;item&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:desc</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{ placeholder: &#39;请选择 (周)&#39;, type:&#39;week&#39;, format:&#39;[Week] ww&#39; }&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#B31D28;font-style:italic;">ElPlusFormDate</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;item&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:desc</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{ placeholder: &#39;请选择 (月)&#39;, type:&#39;month&#39; }&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#B31D28;font-style:italic;">ElPlusFormDate</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;item&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:desc</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{ placeholder: &#39;请选择 (年)&#39;, type:&#39;year&#39; }&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#B31D28;font-style:italic;">ElPlusFormDate</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;item&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:desc</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{ placeholder: &#39;请选择 (禁用)&#39;, disabledDate:(date)=&gt; (date &gt; new Date()) }&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></details><h2 id="api-属性" tabindex="-1">API 属性 <a class="header-anchor" href="#api-属性" aria-label="Permalink to &quot;API 属性&quot;">​</a></h2><p>这里只列举除官方组件以外的属性，官网属性参考 <a href="https://element-plus.gitee.io/zh-CN/component/date-picker.html#attributes" target="_blank" rel="noreferrer">官网 DatePicker API</a></p>`,3);function _(D,B,g,C,f,P){const a=o("ElPlusFormDate"),t=o("ClientOnly");return E(),c("div",null,[i,l("div",d,[u,s(t,null,{default:r(()=>[l("div",F,[s(a,{class:"item",desc:{placeholder:"请选择 (size: large)",size:"large"}}),s(a,{class:"item",desc:{placeholder:"请选择 (size: default)"}}),s(a,{class:"item",desc:{placeholder:"请选择 (size: small)",size:"small"}})]),l("div",m,[s(a,{class:"item",desc:{placeholder:"请选择 (周)",type:"week",format:"[Week] ww"}}),s(a,{class:"item",desc:{placeholder:"请选择 (月)",type:"month"}}),s(a,{class:"item",desc:{placeholder:"请选择 (年)",type:"year"}})]),l("div",q,[s(a,{class:"item",desc:{placeholder:"请选择 (禁用)",disabledDate:e=>e>new Date}},null,8,["desc"])])]),_:1})]),h])}const b=p(y,[["render",_]]);export{k as __pageData,b as default};