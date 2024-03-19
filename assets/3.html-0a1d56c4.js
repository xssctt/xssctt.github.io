const n=JSON.parse(`{"key":"v-1975ed9a","path":"/other/mybatis/3.html","title":"数据库","lang":"zh-CN","frontmatter":{"title":"数据库","icon":"page","order":31,"author":"xss","date":"2023-12-11T00:00:00.000Z","category":["数据库"],"tag":["数据库","sql"],"footer":"这是测试显示的页脚","copyright":"无版权","description":"import mysql.connector # 连接数据库 cnx = mysql.connector.connect(user='root', password='password', host='127.0.0.1', database='article_db') cursor = cnx.cursor() # 获取总记录数 query = \\"SELECT COUNT(*) FROM articles\\" cursor.execute(query) total_count = cursor.fetchone()[0] /pagenum 第几页 / pagesize 每页多少数据 /total_count 查询的总记录 / total_pages 总页数 /offset = (page_num - 1) * page_size 需要跳过的数据数 # 设置分页参数 page_size = 10 page_num = 1 # 计算总页数 total_pages = total_count // page_size if total_count % page_size != 0: total_pages += 1 # 获取当前页数据 offset = (page_num - 1) * page_size query = \\"SELECT id, title, content, userid FROM articles LIMIT %s OFFSET %s\\" cursor.execute(query, (page_size, offset)) current_page_data = cursor.fetchall() # 页面切换逻辑 while True: # 显示当前页数据 display_page(current_page_data) # 获取用户输入的页码 page_num = input(\\"请输入要跳转的页码(1-%d):\\" % total_pages) page_num = int(page_num) if page_num &lt; 1 or page_num &gt; total_pages: print(\\"页码越界,请重新输入\\") continue # 计算偏移量 offset = (page_num - 1) * page_size # 获取新一页数据 cursor.execute(query, (page_size, offset)) current_page_data = cursor.fetchall() # 关闭连接 cnx.close()","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/other/mybatis/3.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"数据库"}],["meta",{"property":"og:description","content":"import mysql.connector # 连接数据库 cnx = mysql.connector.connect(user='root', password='password', host='127.0.0.1', database='article_db') cursor = cnx.cursor() # 获取总记录数 query = \\"SELECT COUNT(*) FROM articles\\" cursor.execute(query) total_count = cursor.fetchone()[0] /pagenum 第几页 / pagesize 每页多少数据 /total_count 查询的总记录 / total_pages 总页数 /offset = (page_num - 1) * page_size 需要跳过的数据数 # 设置分页参数 page_size = 10 page_num = 1 # 计算总页数 total_pages = total_count // page_size if total_count % page_size != 0: total_pages += 1 # 获取当前页数据 offset = (page_num - 1) * page_size query = \\"SELECT id, title, content, userid FROM articles LIMIT %s OFFSET %s\\" cursor.execute(query, (page_size, offset)) current_page_data = cursor.fetchall() # 页面切换逻辑 while True: # 显示当前页数据 display_page(current_page_data) # 获取用户输入的页码 page_num = input(\\"请输入要跳转的页码(1-%d):\\" % total_pages) page_num = int(page_num) if page_num &lt; 1 or page_num &gt; total_pages: print(\\"页码越界,请重新输入\\") continue # 计算偏移量 offset = (page_num - 1) * page_size # 获取新一页数据 cursor.execute(query, (page_size, offset)) current_page_data = cursor.fetchall() # 关闭连接 cnx.close()"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"xss"}],["meta",{"property":"article:tag","content":"数据库"}],["meta",{"property":"article:tag","content":"sql"}],["meta",{"property":"article:published_time","content":"2023-12-11T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数据库\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-12-11T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xss\\"}]}"]]},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.08,"words":323},"filePathRelative":"other/mybatis/3.md","localizedDate":"2023年12月11日","excerpt":"<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">import</span> <span class=\\"token namespace\\">mysql<span class=\\"token punctuation\\">.</span>connector</span>\\n\\n# 连接数据库\\ncnx <span class=\\"token operator\\">=</span> mysql<span class=\\"token punctuation\\">.</span>connector<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">connect</span><span class=\\"token punctuation\\">(</span>user<span class=\\"token operator\\">=</span><span class=\\"token char\\">'root'</span><span class=\\"token punctuation\\">,</span> password<span class=\\"token operator\\">=</span>'password'<span class=\\"token punctuation\\">,</span>\\n                              host<span class=\\"token operator\\">=</span>'<span class=\\"token number\\">127.0</span><span class=\\"token number\\">.0</span><span class=\\"token number\\">.1</span>'<span class=\\"token punctuation\\">,</span>\\n                              database<span class=\\"token operator\\">=</span>'article_db'<span class=\\"token punctuation\\">)</span>\\ncursor <span class=\\"token operator\\">=</span> cnx<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">cursor</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n\\n# 获取总记录数  \\nquery <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"SELECT COUNT(*) FROM articles\\"</span>\\ncursor<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">execute</span><span class=\\"token punctuation\\">(</span>query<span class=\\"token punctuation\\">)</span>\\ntotal_count <span class=\\"token operator\\">=</span> cursor<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">fetchone</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">]</span>\\n\\n\\n    <span class=\\"token operator\\">/</span>pagenum  第几页 <span class=\\"token operator\\">/</span> pagesize 每页多少数据 <span class=\\"token operator\\">/</span>total_count 查询的总记录 <span class=\\"token operator\\">/</span> total_pages 总页数\\n    <span class=\\"token operator\\">/</span>offset <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span>page_num <span class=\\"token operator\\">-</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">*</span> page_size   需要跳过的数据数\\n    \\n# 设置分页参数 \\npage_size <span class=\\"token operator\\">=</span> <span class=\\"token number\\">10</span>  \\npage_num <span class=\\"token operator\\">=</span> <span class=\\"token number\\">1</span> \\n\\n# 计算总页数\\ntotal_pages <span class=\\"token operator\\">=</span> total_count <span class=\\"token comment\\">// page_size</span>\\n<span class=\\"token keyword\\">if</span> total_count <span class=\\"token operator\\">%</span> page_size <span class=\\"token operator\\">!=</span> <span class=\\"token number\\">0</span><span class=\\"token operator\\">:</span>\\n    total_pages <span class=\\"token operator\\">+=</span> <span class=\\"token number\\">1</span>\\n\\n# 获取当前页数据\\noffset <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span>page_num <span class=\\"token operator\\">-</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">*</span> page_size\\nquery <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"SELECT id, title, content, userid FROM articles LIMIT %s OFFSET %s\\"</span>\\ncursor<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">execute</span><span class=\\"token punctuation\\">(</span>query<span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">(</span>page_size<span class=\\"token punctuation\\">,</span> offset<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\ncurrent_page_data <span class=\\"token operator\\">=</span> cursor<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">fetchall</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n\\n# 页面切换逻辑\\n<span class=\\"token keyword\\">while</span> <span class=\\"token class-name\\">True</span><span class=\\"token operator\\">:</span>\\n    # 显示当前页数据\\n    <span class=\\"token function\\">display_page</span><span class=\\"token punctuation\\">(</span>current_page_data<span class=\\"token punctuation\\">)</span>\\n    \\n    # 获取用户输入的页码\\n    page_num <span class=\\"token operator\\">=</span> <span class=\\"token function\\">input</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"请输入要跳转的页码(1-%d):\\"</span> <span class=\\"token operator\\">%</span> total_pages<span class=\\"token punctuation\\">)</span>\\n    page_num <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">int</span><span class=\\"token punctuation\\">(</span>page_num<span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token keyword\\">if</span> page_num <span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span> 1 or page_num <span class=\\"token punctuation\\">&gt;</span></span> total_pages<span class=\\"token operator\\">:</span>\\n        <span class=\\"token function\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"页码越界,请重新输入\\"</span><span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token keyword\\">continue</span>\\n\\n    # 计算偏移量\\n    offset <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span>page_num <span class=\\"token operator\\">-</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">*</span> page_size\\n    \\n    # 获取新一页数据\\n    cursor<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">execute</span><span class=\\"token punctuation\\">(</span>query<span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">(</span>page_size<span class=\\"token punctuation\\">,</span> offset<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> \\n    current_page_data <span class=\\"token operator\\">=</span> cursor<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">fetchall</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n\\n# 关闭连接\\ncnx<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">close</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
