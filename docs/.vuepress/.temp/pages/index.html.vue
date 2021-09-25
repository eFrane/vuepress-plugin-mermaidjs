<template><h1 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h1>
<p>Install it with your package manager of choice:</p>
<p><strong>npm</strong>:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> --save-dev vuepress-plugin-mermaidjs
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>yarn</strong>:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">yarn</span> <span class="token function">add</span> -D vuepress-plugin-mermaidjs
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Add it to the plugin listing of your vuepress config:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// .vuepress/config.js</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">'mermaidjs'</span>
    <span class="token punctuation">]</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h1 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h1>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>If you're looking for an easier time creating your diagrams,
have a look at mermaid's <a href="https://mermaidjs.github.io/mermaid-live-editor/" target="_blank" rel="noopener noreferrer">live editor<OutboundLink/></a>!</p>
</div>
<h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>
<p>If you want to configure Mermaid further, options given
to the plugin are passed through to Mermaid:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">[</span> <span class="token string">'mermaidjs'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> gantt<span class="token operator">:</span> <span class="token punctuation">{</span> barHeight<span class="token operator">:</span> <span class="token number">40</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
    <span class="token punctuation">]</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="fenced-code-block-syntax" tabindex="-1"><a class="header-anchor" href="#fenced-code-block-syntax" aria-hidden="true">#</a> Fenced code block syntax</h2>
<p>The plugin provides mermaidjs diagram rendering for fenced code blocks
with language name 'mermaid':</p>
<pre><code>``` mermaid
sequenceDiagram
Alice-&gt;John: Hello John, how are you?
loop every minute
    John--&gt;Alice: Great!
end
```
</code></pre>
<h2 id="tag-syntax-not-recommended" tabindex="-1"><a class="header-anchor" href="#tag-syntax-not-recommended" aria-hidden="true">#</a> Tag Syntax (not recommended)</h2>
<p>If you really don't want to use the code block syntax
this plugin also supports using a tag wrapper
for mermaidjs-diagrams like so:</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mermaid</span><span class="token punctuation">></span></span>
graph lR
Documentation--with diagrams-->_[is Awesome]
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mermaid</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>yielding:</p>
<Mermaid id="mermaid_382ee1c1" graph="graph LR
Documentation--with diagrams-->_[is Awesome]"></Mermaid><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>The tag-syntax can be useful if you want to attach additional CSS-classes
to a diagram, e.g. for aligning it on the page.</p>
</div>
<h1 id="known-caveats" tabindex="-1"><a class="header-anchor" href="#known-caveats" aria-hidden="true">#</a> Known Caveats</h1>
<p><em>None currently</em></p>
</template>
