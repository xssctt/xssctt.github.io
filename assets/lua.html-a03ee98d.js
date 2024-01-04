import{_ as n,V as a,W as s,$ as e}from"./framework-56e099cb.js";const t="/assets/icon/image-20231201101923859.png",c="/assets/icon/image-20231201104047776.png",o={},i=e('<figure><img src="'+t+`" alt="image-20231201101923859" tabindex="0" loading="lazy"><figcaption>image-20231201101923859</figcaption></figure><p>xss@ubuntu:~$ vim ~/.bashrc xss@ubuntu:~$ source ~/.bashrc</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-- 获取当前脚本所在路径
local script_path = debug.getinfo(1, &#39;S&#39;).source:match[[^@?(.*[\\/])[^\\/]-$]]

-- 将当前路径添加到 package.path 中
package.path = script_path .. &quot;?.lua;&quot; .. package.
-- 获取当前脚本所在路径
local script_path = debug.getinfo(1, &#39;S&#39;).source:match[[^@?(.*[\\/])[^\\/]-$]]

-- 将当前路径添加到 package.path 中
package.path = script_path .. &quot;?.lua;&quot; .. package.path

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+c+`" alt="image-20231201104047776" tabindex="0" loading="lazy"><figcaption>image-20231201104047776</figcaption></figure><p>让我们逐步解释你提供的元表（Metatable）的例子：</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token comment">-- 示例 1: 使用元表设置和获取</span>
mytable <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>                          <span class="token comment">-- 普通表 </span>
mymetatable <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>                      <span class="token comment">-- 元表</span>
<span class="token function">setmetatable</span><span class="token punctuation">(</span>mytable<span class="token punctuation">,</span> mymetatable<span class="token punctuation">)</span>    <span class="token comment">-- 把 mymetatable 设为 mytable 的元表 </span>

<span class="token comment">-- 或者可以写成一行</span>
mytable <span class="token operator">=</span> <span class="token function">setmetatable</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这段代码创建了一个普通的表 <code>mytable</code> 和一个空的元表 <code>mymetatable</code>，然后通过 <code>setmetatable</code> 函数将元表关联到表上。现在，<code>mytable</code> 的元表就是 <code>mymetatable</code>。</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token comment">-- 示例 2: 查看对象的元表</span>
<span class="token function">getmetatable</span><span class="token punctuation">(</span>mytable<span class="token punctuation">)</span>                 <span class="token comment">-- 这回返回 mymetatable</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这段代码使用 <code>getmetatable</code> 函数查看表 <code>mytable</code> 的元表，返回的结果应该是 <code>mymetatable</code>。</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token comment">-- 示例 3: __index 元方法</span>
other <span class="token operator">=</span> <span class="token punctuation">{</span> foo <span class="token operator">=</span> <span class="token number">3</span> <span class="token punctuation">}</span> 
t <span class="token operator">=</span> <span class="token function">setmetatable</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> __index <span class="token operator">=</span> other <span class="token punctuation">}</span><span class="token punctuation">)</span> 
t<span class="token punctuation">.</span>foo
<span class="token comment">-- 输出: 3</span>
<span class="token comment">-- 因为 t 表中没有 foo 键，通过 __index 元方法查找到了元表 other 中的 foo 值</span>
t<span class="token punctuation">.</span>bar
<span class="token comment">-- 输出: nil</span>
<span class="token comment">-- 因为 t 表和元表 other 都没有 bar 键，返回 nil</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里创建了一个表 <code>other</code>，并将其作为元表的 <code>__index</code> 元方法关联到表 <code>t</code> 上。当你访问 <code>t.foo</code> 时，Lua 首先在表 <code>t</code> 中查找，然后根据元表的 <code>__index</code> 元方法找到了 <code>other</code> 表中的 <code>foo</code> 值。当访问 <code>t.bar</code> 时，由于 <code>t</code> 和其元表都没有 <code>bar</code> 键，返回 <code>nil</code>。</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token comment">-- 示例 4: __newindex 元方法</span>
mymetatable <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
mytable <span class="token operator">=</span> <span class="token function">setmetatable</span><span class="token punctuation">(</span><span class="token punctuation">{</span>key1 <span class="token operator">=</span> <span class="token string">&quot;value1&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> __newindex <span class="token operator">=</span> mymetatable <span class="token punctuation">}</span><span class="token punctuation">)</span>

mytable<span class="token punctuation">.</span>key1
<span class="token comment">-- 输出: value1</span>
<span class="token comment">-- 通过 __newindex 元方法对已存在键进行访问</span>
mytable<span class="token punctuation">.</span>newkey <span class="token operator">=</span> <span class="token string">&quot;新值2&quot;</span>
<span class="token comment">-- 输出: 新值2</span>
<span class="token comment">-- 通过 __newindex 元方法对新键进行赋值，而不进行实际赋值操作</span>
mytable<span class="token punctuation">.</span>key1 <span class="token operator">=</span> <span class="token string">&quot;新值1&quot;</span>
<span class="token comment">-- 输出: 新值1</span>
<span class="token comment">-- 对已存在键进行赋值，而不调用 __newindex 元方法</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里创建了一个表 <code>mytable</code> 并将其元表 <code>mymetatable</code> 中的 <code>__newindex</code> 元方法关联到表 <code>mytable</code> 上。当对已存在的键 <code>key1</code> 进行访问时，直接返回该键的值。当对新键 <code>newkey</code> 进行赋值时，通过元方法 <code>__newindex</code> 进行处理而不实际进行赋值操作。当对已存在键 <code>key1</code> 进行赋值时，由于已存在键，直接进行赋值操作而不调用元方法。</p><p>这些示例展示了元表在 Lua 中的基本用法，包括 <code>__index</code>、<code>__newindex</code> 元方法以及元表的设置和获取。这些功能可以用于实现一些高级的表操作和定制化的行为。</p>`,14),l=[i];function p(d,u){return a(),s("div",null,l)}const r=n(o,[["render",p],["__file","lua.html.vue"]]);export{r as default};
