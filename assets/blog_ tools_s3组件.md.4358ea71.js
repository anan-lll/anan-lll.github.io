import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.a4f2a176.js";const u=JSON.parse('{"title":"s3","description":"s3日常使用","frontmatter":{"title":"s3","date":"2022-3-8","description":"s3日常使用","disabled":false,"readMins":10,"tags":["Github"]},"headers":[],"relativePath":"blog/ tools/s3组件.md","filePath":"blog/ tools/s3组件.md"}'),p={name:"blog/ tools/s3组件.md"},o=l(`<h1 id="s3常用命令" tabindex="-1">s3常用命令 <a class="header-anchor" href="#s3常用命令" aria-label="Permalink to &quot;s3常用命令&quot;">​</a></h1><h2 id="命令" tabindex="-1">命令 <a class="header-anchor" href="#命令" aria-label="Permalink to &quot;命令&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">1、查看当前有多少bucket</span></span>
<span class="line"><span style="color:#E1E4E8;">[root@yeoo </span><span style="color:#F97583;">~</span><span style="color:#E1E4E8;">]# s3cmd ls s3://</span></span>
<span class="line"><span style="color:#B392F0;">2015-05-20</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">08</span><span style="color:#9ECBFF;">:06</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">s3://bicher</span></span>
<span class="line"><span style="color:#B392F0;">2015-07-15</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">16</span><span style="color:#9ECBFF;">:11</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">s3://bicherweb</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">2、创建一个新bucket</span></span>
<span class="line"><span style="color:#B392F0;">s3cmd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mb</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">s3://bucket-name</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">3、上传一个文件到bucket</span></span>
<span class="line"><span style="color:#B392F0;">s3cmd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">put</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">filename</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">s3://bucket-name/filename</span></span>
<span class="line"><span style="color:#B392F0;">上传多个文件</span></span>
<span class="line"><span style="color:#B392F0;">s3cmd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">put</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">filename</span><span style="color:#79B8FF;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">s3://bucket-name/</span><span style="color:#E1E4E8;">     </span><span style="color:#6A737D;">#注意只写bucket名称</span></span>
<span class="line"><span style="color:#B392F0;">上传制定文件前缀</span></span>
<span class="line"><span style="color:#B392F0;">s3cmd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">put</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--force</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">filename</span><span style="color:#79B8FF;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">s3://bucket-name/prefixed:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">4、下载一个文件从bucket</span></span>
<span class="line"><span style="color:#B392F0;">s3cmd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">get</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">s3://bucket/filename</span></span>
<span class="line"><span style="color:#B392F0;">支持下载多个文件</span></span>
<span class="line"><span style="color:#B392F0;">s3cmd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">get</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">s3://bucket/filename1</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">filename2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">5、删除bucket中文件</span></span>
<span class="line"><span style="color:#B392F0;">s3cmd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">del</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">s3://bucket/filename</span></span>
<span class="line"><span style="color:#B392F0;">支持删除多个文件</span></span>
<span class="line"><span style="color:#B392F0;">s3cmd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">del</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">s3://bucket/filename</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">s3://bucket/filenam2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">6、删除bucket</span></span>
<span class="line"><span style="color:#B392F0;">s3cmd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rb</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">s3://bucket-name</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">1、查看当前有多少bucket</span></span>
<span class="line"><span style="color:#24292E;">[root@yeoo </span><span style="color:#D73A49;">~</span><span style="color:#24292E;">]# s3cmd ls s3://</span></span>
<span class="line"><span style="color:#6F42C1;">2015-05-20</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">08</span><span style="color:#032F62;">:06</span><span style="color:#24292E;">  </span><span style="color:#032F62;">s3://bicher</span></span>
<span class="line"><span style="color:#6F42C1;">2015-07-15</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">16</span><span style="color:#032F62;">:11</span><span style="color:#24292E;">  </span><span style="color:#032F62;">s3://bicherweb</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">2、创建一个新bucket</span></span>
<span class="line"><span style="color:#6F42C1;">s3cmd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mb</span><span style="color:#24292E;"> </span><span style="color:#032F62;">s3://bucket-name</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">3、上传一个文件到bucket</span></span>
<span class="line"><span style="color:#6F42C1;">s3cmd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">put</span><span style="color:#24292E;"> </span><span style="color:#032F62;">filename</span><span style="color:#24292E;"> </span><span style="color:#032F62;">s3://bucket-name/filename</span></span>
<span class="line"><span style="color:#6F42C1;">上传多个文件</span></span>
<span class="line"><span style="color:#6F42C1;">s3cmd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">put</span><span style="color:#24292E;"> </span><span style="color:#032F62;">filename</span><span style="color:#005CC5;">*</span><span style="color:#24292E;"> </span><span style="color:#032F62;">s3://bucket-name/</span><span style="color:#24292E;">     </span><span style="color:#6A737D;">#注意只写bucket名称</span></span>
<span class="line"><span style="color:#6F42C1;">上传制定文件前缀</span></span>
<span class="line"><span style="color:#6F42C1;">s3cmd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">put</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--force</span><span style="color:#24292E;"> </span><span style="color:#032F62;">filename</span><span style="color:#005CC5;">*</span><span style="color:#24292E;"> </span><span style="color:#032F62;">s3://bucket-name/prefixed:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">4、下载一个文件从bucket</span></span>
<span class="line"><span style="color:#6F42C1;">s3cmd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">get</span><span style="color:#24292E;"> </span><span style="color:#032F62;">s3://bucket/filename</span></span>
<span class="line"><span style="color:#6F42C1;">支持下载多个文件</span></span>
<span class="line"><span style="color:#6F42C1;">s3cmd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">get</span><span style="color:#24292E;"> </span><span style="color:#032F62;">s3://bucket/filename1</span><span style="color:#24292E;"> </span><span style="color:#032F62;">filename2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">5、删除bucket中文件</span></span>
<span class="line"><span style="color:#6F42C1;">s3cmd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">del</span><span style="color:#24292E;"> </span><span style="color:#032F62;">s3://bucket/filename</span></span>
<span class="line"><span style="color:#6F42C1;">支持删除多个文件</span></span>
<span class="line"><span style="color:#6F42C1;">s3cmd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">del</span><span style="color:#24292E;"> </span><span style="color:#032F62;">s3://bucket/filename</span><span style="color:#24292E;"> </span><span style="color:#032F62;">s3://bucket/filenam2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">6、删除bucket</span></span>
<span class="line"><span style="color:#6F42C1;">s3cmd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rb</span><span style="color:#24292E;"> </span><span style="color:#032F62;">s3://bucket-name</span></span></code></pre></div><h2 id="基于s3cmd" tabindex="-1">基于s3cmd <a class="header-anchor" href="#基于s3cmd" aria-label="Permalink to &quot;基于s3cmd&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">1.查看S3上buctet目录下的内容：s3cmd</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--config=路径/.s3cfg</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ls</span></span>
<span class="line"><span style="color:#B392F0;">2.从S3上获取存储的文件到本地：s3cmd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">get</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">文件路径/文件名</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">自定义文件名；</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">在linux机器上使用s3cmd示例（以测试网的s3环境10.27为例，使用/home/xuky/.s3cfg的配置文件）</span></span>
<span class="line"><span style="color:#B392F0;">查看bucket：</span></span>
<span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">s3cmd</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-c</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/home/xuky/.s3cfg</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ls</span></span>
<span class="line"><span style="color:#B392F0;">查看对应bucket目录下的文件</span></span>
<span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">s3cmd</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-c /home/xuky/.s3cfg</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ls</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">s3://bucket-name/</span></span>
<span class="line"><span style="color:#B392F0;">下载对应文件：</span></span>
<span class="line"><span style="color:#B392F0;">sudo s3cmd -c /home/xuky/.s3cfg get 对应的文件具体s3完整文件路径 本地存储路径</span></span>
<span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">s3cmd</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-c</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/home/xuky/.s3cfg</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">get</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">s3://geyan/20190701/nonactiveids.dat ./</span></span>
<span class="line"><span style="color:#B392F0;">上传对应文件：</span></span>
<span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">s3cmd</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-c</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/home/xuky/.s3cfg</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">put ./nonactiveids.dat s3://geyan/20190702/nonactiveids.dat </span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">查看更多的指令以及使用方法：</span></span>
<span class="line"><span style="color:#B392F0;">s3cmd</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--help</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">1.查看S3上buctet目录下的内容：s3cmd</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--config=路径/.s3cfg</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ls</span></span>
<span class="line"><span style="color:#6F42C1;">2.从S3上获取存储的文件到本地：s3cmd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">get</span><span style="color:#24292E;"> </span><span style="color:#032F62;">文件路径/文件名</span><span style="color:#24292E;"> </span><span style="color:#032F62;">自定义文件名；</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">在linux机器上使用s3cmd示例（以测试网的s3环境10.27为例，使用/home/xuky/.s3cfg的配置文件）</span></span>
<span class="line"><span style="color:#6F42C1;">查看bucket：</span></span>
<span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">s3cmd</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-c</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/home/xuky/.s3cfg</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ls</span></span>
<span class="line"><span style="color:#6F42C1;">查看对应bucket目录下的文件</span></span>
<span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">s3cmd</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-c /home/xuky/.s3cfg</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ls</span><span style="color:#24292E;"> </span><span style="color:#032F62;">s3://bucket-name/</span></span>
<span class="line"><span style="color:#6F42C1;">下载对应文件：</span></span>
<span class="line"><span style="color:#6F42C1;">sudo s3cmd -c /home/xuky/.s3cfg get 对应的文件具体s3完整文件路径 本地存储路径</span></span>
<span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">s3cmd</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-c</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/home/xuky/.s3cfg</span><span style="color:#24292E;"> </span><span style="color:#032F62;">get</span><span style="color:#24292E;"> </span><span style="color:#032F62;">s3://geyan/20190701/nonactiveids.dat ./</span></span>
<span class="line"><span style="color:#6F42C1;">上传对应文件：</span></span>
<span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">s3cmd</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-c</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/home/xuky/.s3cfg</span><span style="color:#24292E;"> </span><span style="color:#032F62;">put ./nonactiveids.dat s3://geyan/20190702/nonactiveids.dat </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">查看更多的指令以及使用方法：</span></span>
<span class="line"><span style="color:#6F42C1;">s3cmd</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--help</span></span></code></pre></div><h2 id="基于python" tabindex="-1">基于python <a class="header-anchor" href="#基于python" aria-label="Permalink to &quot;基于python&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">（1）安装boto3；</span></span>
<span class="line"><span style="color:#B392F0;">若安装了easy_install工具，则执行easy_install boto3即可；</span></span>
<span class="line"><span style="color:#B392F0;">或者安装了pip，使用pip install boto3；</span></span>
<span class="line"><span style="color:#B392F0;">（2）对应的程序代码；</span></span>
<span class="line"><span style="color:#6A737D;">###引入依赖</span></span>
<span class="line"><span style="color:#B392F0;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">boto3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">###连接s3环境</span></span>
<span class="line"><span style="color:#B392F0;">s3</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">boto3.client</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">&#39;s3&#39;</span><span style="color:#B392F0;">,</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">use_ssl=False,</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">endpoint_url=&quot;https://oss-dev.ge.cn&quot;,aws_access_key_id=&#39;07852C1HPZQ7FRJ6S5C5&#39;,aws_secret_access_key=&#39;egoXz8nHe31YVRau5ZPAJyiRKaPpvDWykhKDpbyU&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">###endpoint_url=&quot;https://oss-dev.ge.cn&quot;，这个具体指的是s3的服务地址；</span></span>
<span class="line"><span style="color:#6A737D;">###aws_access_key_id，这个是s3的access key；</span></span>
<span class="line"><span style="color:#6A737D;">###aws_secret_access_key，这个是s3的secret key；</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">###上传文件，upload_file(Filename, Bucket, Key, ExtraArgs=None, Callback=None, Config=None)</span></span>
<span class="line"><span style="color:#B392F0;">s3.upload_file(r</span><span style="color:#B392F0;">&#39;C:/Users/me/Desktop/个验codis清理工具/nonactiveids.dat&#39;</span><span style="color:#B392F0;">,</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;geyan&#39;,</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">r&#39;20190702/nonactiveids.dat&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">###第一个参数为原始文件路径；第二个参数为bucket name；第三个参数为在s3上存储的具体路径与文件名；</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">###下载文件，download_file(Bucket, Key, Filename, ExtraArgs=None, Callback=None, Config=None)</span></span>
<span class="line"><span style="color:#B392F0;">s3.download_file(</span><span style="color:#B392F0;">&#39;mybucket&#39;</span><span style="color:#B392F0;">,</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;hello.txt&#39;,</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;/tmp/hello.txt&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">###第一个参数为bucket name；第二个参数为s3上文件路径；第三个参数为本地存储文件路径；</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">###列出所有bucket，python3</span></span>
<span class="line"><span style="color:#B392F0;">response</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">s3.list_buckets</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">&#39;Existing buckets:&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#B392F0;"> for</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bucket</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">in</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">response[&#39;Buckets&#39;]:</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;"> </span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">f</span><span style="color:#B392F0;">&#39;{bucket[&quot;Name&quot;]}&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">###列出bucket下所有的文件或者匹配文件路径前缀的域名</span></span>
<span class="line"><span style="color:#B392F0;">s3.list_objects(Bucket</span><span style="color:#E1E4E8;">=</span><span style="color:#B392F0;">&#39;geyan&#39;</span><span style="color:#B392F0;">,Prefix</span><span style="color:#E1E4E8;">=</span><span style="color:#B392F0;">&#39;/20190701&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">###带prefix则匹配路径prefix，不带这个参数就会打印出所有的</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">##  参考文档：</span></span>
<span class="line"><span style="color:#6A737D;">##  （1）https://www.cnblogs.com/weiyinfu/p/10993205.html</span></span>
<span class="line"><span style="color:#6A737D;">##  （2）https://www.e-learn.cn/content/wangluowenzhang/189710</span></span>
<span class="line"><span style="color:#6A737D;">##  备注：</span></span>
<span class="line"><span style="color:#6A737D;">##  若需要完成其他功能，可以自行搜索boto3所有的功能api，也可以使用其官方文档或着查看python中的doc，比如dir()方法查看所有支持的函数、help()方法查看具体函数的入参或者使用方法；</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">（1）安装boto3；</span></span>
<span class="line"><span style="color:#6F42C1;">若安装了easy_install工具，则执行easy_install boto3即可；</span></span>
<span class="line"><span style="color:#6F42C1;">或者安装了pip，使用pip install boto3；</span></span>
<span class="line"><span style="color:#6F42C1;">（2）对应的程序代码；</span></span>
<span class="line"><span style="color:#6A737D;">###引入依赖</span></span>
<span class="line"><span style="color:#6F42C1;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">boto3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">###连接s3环境</span></span>
<span class="line"><span style="color:#6F42C1;">s3</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">boto3.client</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">&#39;s3&#39;</span><span style="color:#6F42C1;">,</span><span style="color:#24292E;"> </span><span style="color:#032F62;">use_ssl=False,</span><span style="color:#24292E;"> </span><span style="color:#032F62;">endpoint_url=&quot;https://oss-dev.ge.cn&quot;,aws_access_key_id=&#39;07852C1HPZQ7FRJ6S5C5&#39;,aws_secret_access_key=&#39;egoXz8nHe31YVRau5ZPAJyiRKaPpvDWykhKDpbyU&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">###endpoint_url=&quot;https://oss-dev.ge.cn&quot;，这个具体指的是s3的服务地址；</span></span>
<span class="line"><span style="color:#6A737D;">###aws_access_key_id，这个是s3的access key；</span></span>
<span class="line"><span style="color:#6A737D;">###aws_secret_access_key，这个是s3的secret key；</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">###上传文件，upload_file(Filename, Bucket, Key, ExtraArgs=None, Callback=None, Config=None)</span></span>
<span class="line"><span style="color:#6F42C1;">s3.upload_file(r</span><span style="color:#6F42C1;">&#39;C:/Users/me/Desktop/个验codis清理工具/nonactiveids.dat&#39;</span><span style="color:#6F42C1;">,</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;geyan&#39;,</span><span style="color:#24292E;"> </span><span style="color:#032F62;">r&#39;20190702/nonactiveids.dat&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">###第一个参数为原始文件路径；第二个参数为bucket name；第三个参数为在s3上存储的具体路径与文件名；</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">###下载文件，download_file(Bucket, Key, Filename, ExtraArgs=None, Callback=None, Config=None)</span></span>
<span class="line"><span style="color:#6F42C1;">s3.download_file(</span><span style="color:#6F42C1;">&#39;mybucket&#39;</span><span style="color:#6F42C1;">,</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;hello.txt&#39;,</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;/tmp/hello.txt&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">###第一个参数为bucket name；第二个参数为s3上文件路径；第三个参数为本地存储文件路径；</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">###列出所有bucket，python3</span></span>
<span class="line"><span style="color:#6F42C1;">response</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">s3.list_buckets</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">&#39;Existing buckets:&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6F42C1;"> for</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bucket</span><span style="color:#24292E;"> </span><span style="color:#032F62;">in</span><span style="color:#24292E;"> </span><span style="color:#032F62;">response[&#39;Buckets&#39;]:</span></span>
<span class="line"><span style="color:#6F42C1;">  </span><span style="color:#24292E;"> </span><span style="color:#032F62;"> </span><span style="color:#24292E;"> </span><span style="color:#032F62;">print</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">f</span><span style="color:#6F42C1;">&#39;{bucket[&quot;Name&quot;]}&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">###列出bucket下所有的文件或者匹配文件路径前缀的域名</span></span>
<span class="line"><span style="color:#6F42C1;">s3.list_objects(Bucket</span><span style="color:#24292E;">=</span><span style="color:#6F42C1;">&#39;geyan&#39;</span><span style="color:#6F42C1;">,Prefix</span><span style="color:#24292E;">=</span><span style="color:#6F42C1;">&#39;/20190701&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">###带prefix则匹配路径prefix，不带这个参数就会打印出所有的</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">##  参考文档：</span></span>
<span class="line"><span style="color:#6A737D;">##  （1）https://www.cnblogs.com/weiyinfu/p/10993205.html</span></span>
<span class="line"><span style="color:#6A737D;">##  （2）https://www.e-learn.cn/content/wangluowenzhang/189710</span></span>
<span class="line"><span style="color:#6A737D;">##  备注：</span></span>
<span class="line"><span style="color:#6A737D;">##  若需要完成其他功能，可以自行搜索boto3所有的功能api，也可以使用其官方文档或着查看python中的doc，比如dir()方法查看所有支持的函数、help()方法查看具体函数的入参或者使用方法；</span></span></code></pre></div><h2 id="基于java" tabindex="-1">基于Java <a class="header-anchor" href="#基于java" aria-label="Permalink to &quot;基于Java&quot;">​</a></h2><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">编写脚本之前需要先引入对应的maven依赖</span></span>
<span class="line"><span style="color:#F97583;">package</span><span style="color:#E1E4E8;"> util;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> com.getui.oss.client.OssAccount;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> com.getui.oss.client.OssClient;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> java.io.File;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">S3Util</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">private</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">final</span><span style="color:#E1E4E8;"> Config CONFIG;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">private</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">final</span><span style="color:#E1E4E8;"> String FILE_PATH;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">private</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> OssAccount ossAccount;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> File </span><span style="color:#B392F0;">downloadFile</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">final</span><span style="color:#E1E4E8;"> String </span><span style="color:#FFAB70;">cloudPath</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">final</span><span style="color:#E1E4E8;"> File file </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">File</span><span style="color:#E1E4E8;">(S3Util.FILE_PATH);</span></span>
<span class="line"><span style="color:#E1E4E8;"> OssClient.</span><span style="color:#B392F0;">downloadFile</span><span style="color:#E1E4E8;">(S3Util.ossAccount, cloudPath, file);</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> file;</span></span>
<span class="line"><span style="color:#E1E4E8;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">deleteFile</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">final</span><span style="color:#E1E4E8;"> File file </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">File</span><span style="color:#E1E4E8;">(S3Util.FILE_PATH);</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (file.</span><span style="color:#B392F0;">exists</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                file.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> Boolean </span><span style="color:#B392F0;">uploadFile</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">final</span><span style="color:#E1E4E8;"> String </span><span style="color:#FFAB70;">cloudPath</span><span style="color:#E1E4E8;">, String </span><span style="color:#FFAB70;">filePath</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> OssClient.</span><span style="color:#B392F0;">uploadFile</span><span style="color:#E1E4E8;">(S3Util.ossAccount,filePath,cloudPath);</span></span>
<span class="line"><span style="color:#E1E4E8;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            CONFIG </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Config.</span><span style="color:#B392F0;">getInstance</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;"> FILE_PATH </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> S3Util.CONFIG.</span><span style="color:#B392F0;">getClearFileBasePath</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> File.separator </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;nonactiveids.dat&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;"> S3Util.ossAccount </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> OssAccount.</span><span style="color:#B392F0;">builder</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">assessKey</span><span style="color:#E1E4E8;">(S3Util.CONFIG.</span><span style="color:#B392F0;">getAwsAccessKey</span><span style="color:#E1E4E8;">()).</span><span style="color:#B392F0;">secretKey</span><span style="color:#E1E4E8;">(S3Util.CONFIG.</span><span style="color:#B392F0;">getAwsSecretKey</span><span style="color:#E1E4E8;">()).</span><span style="color:#B392F0;">bucketName</span><span style="color:#E1E4E8;">(S3Util.CONFIG.</span><span style="color:#B392F0;">getAwsBucketName</span><span style="color:#E1E4E8;">()).</span><span style="color:#B392F0;">bucketUrl</span><span style="color:#E1E4E8;">(S3Util.CONFIG.</span><span style="color:#B392F0;">getAwsBucketUrl</span><span style="color:#E1E4E8;">()).</span><span style="color:#B392F0;">build</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">String</span><span style="color:#E1E4E8;">[] </span><span style="color:#FFAB70;">argv</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">            File myFile </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">downloadFile</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;/20190702/nonactiveids.dat&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">编写脚本之前需要先引入对应的maven依赖</span></span>
<span class="line"><span style="color:#D73A49;">package</span><span style="color:#24292E;"> util;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> com.getui.oss.client.OssAccount;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> com.getui.oss.client.OssClient;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> java.io.File;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">S3Util</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">private</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">final</span><span style="color:#24292E;"> Config CONFIG;</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;">private</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">final</span><span style="color:#24292E;"> String FILE_PATH;</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;">private</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> OssAccount ossAccount;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> File </span><span style="color:#6F42C1;">downloadFile</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">final</span><span style="color:#24292E;"> String </span><span style="color:#E36209;">cloudPath</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">final</span><span style="color:#24292E;"> File file </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">File</span><span style="color:#24292E;">(S3Util.FILE_PATH);</span></span>
<span class="line"><span style="color:#24292E;"> OssClient.</span><span style="color:#6F42C1;">downloadFile</span><span style="color:#24292E;">(S3Util.ossAccount, cloudPath, file);</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> file;</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">deleteFile</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">final</span><span style="color:#24292E;"> File file </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">File</span><span style="color:#24292E;">(S3Util.FILE_PATH);</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (file.</span><span style="color:#6F42C1;">exists</span><span style="color:#24292E;">()) {</span></span>
<span class="line"><span style="color:#24292E;">                file.</span><span style="color:#6F42C1;">delete</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> Boolean </span><span style="color:#6F42C1;">uploadFile</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">final</span><span style="color:#24292E;"> String </span><span style="color:#E36209;">cloudPath</span><span style="color:#24292E;">, String </span><span style="color:#E36209;">filePath</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> OssClient.</span><span style="color:#6F42C1;">uploadFile</span><span style="color:#24292E;">(S3Util.ossAccount,filePath,cloudPath);</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            CONFIG </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Config.</span><span style="color:#6F42C1;">getInstance</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;"> FILE_PATH </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> S3Util.CONFIG.</span><span style="color:#6F42C1;">getClearFileBasePath</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> File.separator </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;nonactiveids.dat&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;"> S3Util.ossAccount </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> OssAccount.</span><span style="color:#6F42C1;">builder</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">assessKey</span><span style="color:#24292E;">(S3Util.CONFIG.</span><span style="color:#6F42C1;">getAwsAccessKey</span><span style="color:#24292E;">()).</span><span style="color:#6F42C1;">secretKey</span><span style="color:#24292E;">(S3Util.CONFIG.</span><span style="color:#6F42C1;">getAwsSecretKey</span><span style="color:#24292E;">()).</span><span style="color:#6F42C1;">bucketName</span><span style="color:#24292E;">(S3Util.CONFIG.</span><span style="color:#6F42C1;">getAwsBucketName</span><span style="color:#24292E;">()).</span><span style="color:#6F42C1;">bucketUrl</span><span style="color:#24292E;">(S3Util.CONFIG.</span><span style="color:#6F42C1;">getAwsBucketUrl</span><span style="color:#24292E;">()).</span><span style="color:#6F42C1;">build</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">String</span><span style="color:#24292E;">[] </span><span style="color:#E36209;">argv</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">            File myFile </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">downloadFile</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;/20190702/nonactiveids.dat&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span></code></pre></div>`,9),e=[o];function c(t,r,y,E,i,F){return n(),a("div",null,e)}const C=s(p,[["render",c]]);export{u as __pageData,C as default};
