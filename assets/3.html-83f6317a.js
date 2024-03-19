import{_ as n,V as s,W as a,$ as e}from"./framework-56e099cb.js";const t={},p=e(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">free300<span class="token punctuation">.</span>demo<span class="token punctuation">.</span></span><span class="token class-name">Stream</span><span class="token punctuation">;</span>



<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FileStream</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>

        <span class="token class-name">String</span> <span class="token constant">PATH</span><span class="token operator">=</span><span class="token string">&quot;src/main/java/free300/demo/Stream/&quot;</span><span class="token punctuation">;</span>


        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token constant">PATH</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">listRoots</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token class-name">File</span> file<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token constant">PATH</span><span class="token operator">+</span><span class="token string">&quot;demo.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

       <span class="token comment">// file.renameTo(new File(PATH+&quot;demo1.txt&quot;));</span>



        <span class="token keyword">if</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;存在&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">canRead</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;可读&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">canWrite</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;可写&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

<span class="token comment">//        File file1=new File(PATH+&quot;delete/deletedemo.txt&quot;);</span>
<span class="token comment">//</span>
<span class="token comment">//        if(file1.delete()){</span>
<span class="token comment">//            System.out.println(&quot;删除成功&quot;);</span>
<span class="token comment">//        }else {</span>
<span class="token comment">//            System.out.println(&quot;删除失败&quot;);</span>
<span class="token comment">//        }</span>

        <span class="token class-name">File</span> file2<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token constant">PATH</span><span class="token operator">+</span><span class="token string">&quot;delete&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span>file2<span class="token punctuation">.</span><span class="token function">isDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;文件夹&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;不是文件夹&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>


        <span class="token class-name">File</span> file3<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token constant">PATH</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;长度&quot;</span><span class="token operator">+</span>file3<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>file3<span class="token punctuation">.</span><span class="token function">canExecute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

       <span class="token class-name">File</span><span class="token punctuation">[</span><span class="token punctuation">]</span> files<span class="token operator">=</span>file3<span class="token punctuation">.</span><span class="token function">listFiles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">File</span> f<span class="token operator">:</span> files<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>f<span class="token punctuation">.</span><span class="token function">getPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>





        <span class="token class-name">FileInputStream</span> inputStream<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//        int buffer;</span>
<span class="token comment">//</span>
<span class="token comment">//        byte[] buff=new byte[2];</span>
<span class="token comment">//        Byte[] buff2=new Byte[1024];</span>
<span class="token comment">//</span>
<span class="token comment">//</span>
<span class="token comment">//        while ((buffer = inputStream.read()) != -1){</span>
<span class="token comment">//            System.out.println((char) buffer);</span>
<span class="token comment">//        }</span>

        <span class="token class-name">InputStreamReader</span> inputStreamReader<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span>inputStream<span class="token punctuation">)</span><span class="token punctuation">;</span>



<span class="token comment">//        int bt;</span>
<span class="token comment">//        Byte[] bt1=new Byte[1024];</span>
<span class="token comment">//        byte[] bt2=new byte[2];</span>
<span class="token comment">//        char[] chars=new char[1024];</span>
<span class="token comment">//</span>
         <span class="token comment">// System.out.println(inputStreamReader.read(chars, 0, 10));</span>
<span class="token comment">//</span>
<span class="token comment">//        while ((bt = inputStreamReader.read(chars,0,100)) != -1){</span>
<span class="token comment">//            System.out.println(new String(chars,0,bt));</span>
<span class="token comment">//        }</span>



        <span class="token class-name">BufferedReader</span> bufferedReader<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span>inputStreamReader<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>bufferedReader<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>



        <span class="token keyword">if</span><span class="token punctuation">(</span>bufferedReader <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            bufferedReader<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>inputStreamReader <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            inputStreamReader<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>


        <span class="token comment">//int read(byte[] b)</span>
        <span class="token comment">//          从此输入流中将最多 b.length 个字节的数据读入一个 byte 数组中。</span>
        <span class="token comment">// int read(byte[] b, int off, int len)</span>
        <span class="token comment">//          从此输入流中将最多 len 个字节的数据读入一个 byte 数组中。</span>
        <span class="token comment">// long skip(long n)</span>
        <span class="token comment">//          从输入流中跳过并丢弃 n 个字节的数据。</span>

<span class="token comment">//        while ((buffer = inputStream.read(buff)) != -1){</span>
<span class="token comment">//            System.out.println(new String(buff));</span>
<span class="token comment">//        }</span>
<span class="token comment">//</span>
<span class="token comment">//        while ((buffer = inputStream.read(buff)) != -1){</span>
<span class="token comment">//            System.out.println(buff);</span>
<span class="token comment">//        }</span>
<span class="token comment">//</span>
<span class="token comment">//        while ((buffer = inputStream.read(buff)) != -1){</span>
<span class="token comment">//            System.out.println(buffer);</span>
<span class="token comment">//        }</span>
<span class="token comment">//</span>
<span class="token comment">//</span>
<span class="token comment">//        while ((buffer = inputStream.read(buff)) != -1){</span>
<span class="token comment">//            System.out.println(new String(buff,0,buffer));</span>
<span class="token comment">//        }</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span>inputStream <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            inputStream<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>









<span class="token comment">//------------------------------------------------------------------------------------------------------------------------------------------------</span>



        <span class="token class-name">FileOutputStream</span> outputStream<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token constant">PATH</span><span class="token operator">+</span><span class="token string">&quot;dt.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">String</span> demo<span class="token operator">=</span><span class="token string">&quot;aweiyijingsiloigvb哦苹果v抵抗&quot;</span><span class="token punctuation">;</span>
<span class="token comment">//        byte[] bytes = demo.getBytes();</span>
<span class="token comment">//</span>
<span class="token comment">//        outputStream.write(bytes);</span>
        <span class="token class-name">OutputStreamWriter</span> outputStreamWriter<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">OutputStreamWriter</span><span class="token punctuation">(</span>outputStream<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">BufferedWriter</span> bufferedWriter<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">BufferedWriter</span><span class="token punctuation">(</span>outputStreamWriter<span class="token punctuation">)</span><span class="token punctuation">;</span>

        bufferedWriter<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>demo<span class="token punctuation">)</span><span class="token punctuation">;</span>

       <span class="token comment">// outputStreamWriter.write(demo,0,demo.length());</span>


        <span class="token keyword">if</span><span class="token punctuation">(</span>bufferedWriter <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            bufferedWriter<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span>outputStreamWriter <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            outputStreamWriter<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>outputStream <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            outputStream<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>




    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),c=[p];function i(l,o){return s(),a("div",null,c)}const d=n(t,[["render",i],["__file","3.html.vue"]]);export{d as default};
