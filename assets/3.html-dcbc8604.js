import{_ as n,V as s,W as a,$ as e}from"./framework-56e099cb.js";const p={},t=e(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token namespace">mysql<span class="token punctuation">.</span>connector</span>

# 连接数据库
cnx <span class="token operator">=</span> mysql<span class="token punctuation">.</span>connector<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span>user<span class="token operator">=</span><span class="token char">&#39;root&#39;</span><span class="token punctuation">,</span> password<span class="token operator">=</span>&#39;password&#39;<span class="token punctuation">,</span>
                              host<span class="token operator">=</span>&#39;<span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span>&#39;<span class="token punctuation">,</span>
                              database<span class="token operator">=</span>&#39;article_db&#39;<span class="token punctuation">)</span>
cursor <span class="token operator">=</span> cnx<span class="token punctuation">.</span><span class="token function">cursor</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

# 获取总记录数  
query <span class="token operator">=</span> <span class="token string">&quot;SELECT COUNT(*) FROM articles&quot;</span>
cursor<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span>query<span class="token punctuation">)</span>
total_count <span class="token operator">=</span> cursor<span class="token punctuation">.</span><span class="token function">fetchone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>


    <span class="token operator">/</span>pagenum  第几页 <span class="token operator">/</span> pagesize 每页多少数据 <span class="token operator">/</span>total_count 查询的总记录 <span class="token operator">/</span> total_pages 总页数
    <span class="token operator">/</span>offset <span class="token operator">=</span> <span class="token punctuation">(</span>page_num <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> page_size   需要跳过的数据数
    
# 设置分页参数 
page_size <span class="token operator">=</span> <span class="token number">10</span>  
page_num <span class="token operator">=</span> <span class="token number">1</span> 

# 计算总页数
total_pages <span class="token operator">=</span> total_count <span class="token comment">// page_size</span>
<span class="token keyword">if</span> total_count <span class="token operator">%</span> page_size <span class="token operator">!=</span> <span class="token number">0</span><span class="token operator">:</span>
    total_pages <span class="token operator">+=</span> <span class="token number">1</span>

# 获取当前页数据
offset <span class="token operator">=</span> <span class="token punctuation">(</span>page_num <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> page_size
query <span class="token operator">=</span> <span class="token string">&quot;SELECT id, title, content, userid FROM articles LIMIT %s OFFSET %s&quot;</span>
cursor<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span>query<span class="token punctuation">,</span> <span class="token punctuation">(</span>page_size<span class="token punctuation">,</span> offset<span class="token punctuation">)</span><span class="token punctuation">)</span>
current_page_data <span class="token operator">=</span> cursor<span class="token punctuation">.</span><span class="token function">fetchall</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

# 页面切换逻辑
<span class="token keyword">while</span> <span class="token class-name">True</span><span class="token operator">:</span>
    # 显示当前页数据
    <span class="token function">display_page</span><span class="token punctuation">(</span>current_page_data<span class="token punctuation">)</span>
    
    # 获取用户输入的页码
    page_num <span class="token operator">=</span> <span class="token function">input</span><span class="token punctuation">(</span><span class="token string">&quot;请输入要跳转的页码(1-%d):&quot;</span> <span class="token operator">%</span> total_pages<span class="token punctuation">)</span>
    page_num <span class="token operator">=</span> <span class="token keyword">int</span><span class="token punctuation">(</span>page_num<span class="token punctuation">)</span>
    <span class="token keyword">if</span> page_num <span class="token generics"><span class="token punctuation">&lt;</span> 1 or page_num <span class="token punctuation">&gt;</span></span> total_pages<span class="token operator">:</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;页码越界,请重新输入&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">continue</span>

    # 计算偏移量
    offset <span class="token operator">=</span> <span class="token punctuation">(</span>page_num <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> page_size
    
    # 获取新一页数据
    cursor<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span>query<span class="token punctuation">,</span> <span class="token punctuation">(</span>page_size<span class="token punctuation">,</span> offset<span class="token punctuation">)</span><span class="token punctuation">)</span> 
    current_page_data <span class="token operator">=</span> cursor<span class="token punctuation">.</span><span class="token function">fetchall</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

# 关闭连接
cnx<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[t];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","3.html.vue"]]);export{r as default};
