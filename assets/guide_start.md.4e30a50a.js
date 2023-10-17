import{_ as s,c as a,o as l,Q as n}from"./chunks/framework.7d5be37a.js";const h=JSON.parse('{"title":"安装","description":"","frontmatter":{},"headers":[],"relativePath":"guide/start.md","filePath":"guide/start.md"}'),e={name:"guide/start.md"},o=n(`<h1 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">注意</p><p>该组件由于 table 和 form 逻辑耦合较高，且需要在注册组件时传入相关配置信息，所以目前仅支持 <span style="color:var(--vp-c-primary);">app.use()</span> 方式进行全局注册，不支持局部注册，另外因为组件内部未打包 Element Plus 相关组件源码，所以 Element Plus 也需要全局注册！！！</p><p>介意的小伙伴请勿食用~</p></div><h2 id="前提" tabindex="-1">前提 <a class="header-anchor" href="#前提" aria-label="Permalink to &quot;前提&quot;">​</a></h2><p>该组件是对 Element-Plus 组件库的二次封装，完全依赖 Element-Plus</p><p>所以该组件的应用项目场景应为：<span style="color:var(--vp-c-primary);">VUE3 + TS + Element Plus </span></p><h2 id="环境" tabindex="-1">环境 <a class="header-anchor" href="#环境" aria-label="Permalink to &quot;环境&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">请确保你的环境满足以下条件</p><ul><li>nodejs &gt;= 16 (推荐 ^16.18.1)</li><li>vue &gt;= 3 (推荐 ^3.2.47)</li><li>vite &gt;= 4 (推荐 ^4.3.9)</li><li>element-plus &gt;= 2 (推荐 ^2.3.6)</li></ul></div><h2 id="安装-1" tabindex="-1">安装 <a class="header-anchor" href="#安装-1" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>在项目根目录的终端运行：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">el-plus-crud</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-S</span></span>
<span class="line"><span style="color:#B392F0;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">or</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">el-plus-crud</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-S</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">el-plus-crud</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-S</span></span>
<span class="line"><span style="color:#6F42C1;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">or</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#032F62;">el-plus-crud</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-S</span></span></code></pre></div>`,10),p=[o];function t(r,c,i,d,u,y){return l(),a("div",null,p)}const m=s(e,[["render",t]]);export{h as __pageData,m as default};