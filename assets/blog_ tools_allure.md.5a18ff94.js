import{_ as s,o as l,c as a,Q as n}from"./chunks/framework.a4f2a176.js";const C=JSON.parse('{"title":"allure","description":"allure常用命令","frontmatter":{"title":"allure","date":"2020-07-02T00:00:00.000Z","description":"allure常用命令","disabled":false,"readMins":2,"tags":["Github"]},"headers":[],"relativePath":"blog/ tools/allure.md","filePath":"blog/ tools/allure.md"}'),p={name:"blog/ tools/allure.md"},o=n(`<h1 id="allure常用命令" tabindex="-1">allure常用命令 <a class="header-anchor" href="#allure常用命令" aria-label="Permalink to &quot;allure常用命令&quot;">​</a></h1><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">#先执行这个生成report</span></span>
<span class="line"><span style="color:#B392F0;">allure</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">generate</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">./allure-results</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-o</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">allure-report</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--clean</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#生成测试报告指定ip和端口</span></span>
<span class="line"><span style="color:#B392F0;">allure</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">serve</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">allure-results</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-h</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ip</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">port---</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">ip直接在本地ifconfig选择en0即可，端口随便指定一个没有被占用的即可</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#B392F0;">例如：</span></span>
<span class="line"><span style="color:#B392F0;">allure</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">serve</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">allure-results</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-h</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">192.168</span><span style="color:#9ECBFF;">.130.111</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">8088</span></span>
<span class="line"><span style="color:#B392F0;">不指定ip端口--可能会导致访问不了的情况</span></span>
<span class="line"><span style="color:#B392F0;">allure</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">serve</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">allure-results</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">#先执行这个生成report</span></span>
<span class="line"><span style="color:#6F42C1;">allure</span><span style="color:#24292E;"> </span><span style="color:#032F62;">generate</span><span style="color:#24292E;"> </span><span style="color:#032F62;">./allure-results</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-o</span><span style="color:#24292E;"> </span><span style="color:#032F62;">allure-report</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--clean</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#生成测试报告指定ip和端口</span></span>
<span class="line"><span style="color:#6F42C1;">allure</span><span style="color:#24292E;"> </span><span style="color:#032F62;">serve</span><span style="color:#24292E;"> </span><span style="color:#032F62;">allure-results</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-h</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ip</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#032F62;">port---</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">ip直接在本地ifconfig选择en0即可，端口随便指定一个没有被占用的即可</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6F42C1;">例如：</span></span>
<span class="line"><span style="color:#6F42C1;">allure</span><span style="color:#24292E;"> </span><span style="color:#032F62;">serve</span><span style="color:#24292E;"> </span><span style="color:#032F62;">allure-results</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-h</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">192.168</span><span style="color:#032F62;">.130.111</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">8088</span></span>
<span class="line"><span style="color:#6F42C1;">不指定ip端口--可能会导致访问不了的情况</span></span>
<span class="line"><span style="color:#6F42C1;">allure</span><span style="color:#24292E;"> </span><span style="color:#032F62;">serve</span><span style="color:#24292E;"> </span><span style="color:#032F62;">allure-results</span></span></code></pre></div>`,2),e=[o];function r(t,c,y,E,F,i){return l(),a("div",null,e)}const d=s(p,[["render",r]]);export{C as __pageData,d as default};
