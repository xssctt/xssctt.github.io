import{_ as s,V as n,W as a,$ as e}from"./framework-56e099cb.js";const p={},o=e(`<hr><hr><hr><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>使用事务
<span class="token number">2.1</span>开始和提交事务
开始事务语句：<span class="token keyword">begin</span> 或者 <span class="token keyword">start</span> <span class="token keyword">transaction</span>
提交事务语句：<span class="token keyword">commit</span>
现有<span class="token keyword">user</span>表:

id          用户id
name		用户名字
age			用户年龄
balance		用户余额
<span class="token operator">+</span><span class="token comment">---------+-------------+------+-----+---------+----------------+</span>
<span class="token operator">|</span> Field   <span class="token operator">|</span> <span class="token keyword">Type</span>        <span class="token operator">|</span> <span class="token boolean">Null</span> <span class="token operator">|</span> <span class="token keyword">Key</span> <span class="token operator">|</span> <span class="token keyword">Default</span> <span class="token operator">|</span> Extra          <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">---------+-------------+------+-----+---------+----------------+</span>
<span class="token operator">|</span> id      <span class="token operator">|</span> <span class="token keyword">int</span>         <span class="token operator">|</span> <span class="token keyword">NO</span>   <span class="token operator">|</span> PRI <span class="token operator">|</span> <span class="token boolean">NULL</span>    <span class="token operator">|</span> <span class="token keyword">auto_increment</span> <span class="token operator">|</span>
<span class="token operator">|</span> name    <span class="token operator">|</span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">|</span> YES  <span class="token operator">|</span>     <span class="token operator">|</span> <span class="token boolean">NULL</span>    <span class="token operator">|</span>                <span class="token operator">|</span>
<span class="token operator">|</span> age     <span class="token operator">|</span> <span class="token keyword">int</span>         <span class="token operator">|</span> YES  <span class="token operator">|</span>     <span class="token operator">|</span> <span class="token boolean">NULL</span>    <span class="token operator">|</span>                <span class="token operator">|</span>
<span class="token operator">|</span> balance <span class="token operator">|</span> <span class="token keyword">int</span>         <span class="token operator">|</span> YES  <span class="token operator">|</span>     <span class="token operator">|</span> <span class="token boolean">NULL</span>    <span class="token operator">|</span>                <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">---------+-------------+------+-----+---------+----------------+</span>

下面是数据:
<span class="token operator">+</span><span class="token comment">----+------+-----+---------+</span>
<span class="token operator">|</span> id <span class="token operator">|</span> name <span class="token operator">|</span> age <span class="token operator">|</span> balance <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----+------+-----+---------+</span>
<span class="token operator">|</span>  <span class="token number">1</span> <span class="token operator">|</span> 小明 <span class="token operator">|</span>  <span class="token number">20</span> <span class="token operator">|</span>    <span class="token number">1500</span> <span class="token operator">|</span>
<span class="token operator">|</span>  <span class="token number">2</span> <span class="token operator">|</span> 小红 <span class="token operator">|</span>  <span class="token number">21</span> <span class="token operator">|</span>    <span class="token number">2000</span> <span class="token operator">|</span>
<span class="token operator">|</span>  <span class="token number">3</span> <span class="token operator">|</span> 小蓝 <span class="token operator">|</span>  <span class="token number">22</span> <span class="token operator">|</span>    <span class="token number">1800</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----+------+-----+---------+</span>

现在模拟银行转账的情况:
将小明的账户余额减少<span class="token number">500</span>块，将小红的余额增减<span class="token number">500</span>块。

<span class="token keyword">START</span> <span class="token keyword">TRANSACTION</span><span class="token punctuation">;</span>
<span class="token keyword">UPDATE</span> <span class="token keyword">user</span> <span class="token keyword">SET</span> balance <span class="token operator">=</span> balance <span class="token operator">-</span> <span class="token number">500</span> <span class="token keyword">WHERE</span> name <span class="token operator">=</span> <span class="token string">&#39;小明&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">UPDATE</span> <span class="token keyword">user</span> <span class="token keyword">SET</span> balance <span class="token operator">=</span> balance <span class="token operator">+</span> <span class="token number">500</span> <span class="token keyword">WHERE</span> name <span class="token operator">=</span> <span class="token string">&#39;小红&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">COMMIT</span><span class="token punctuation">;</span>

事务执行后的结果:

<span class="token operator">+</span><span class="token comment">----+------+-----+---------+</span>
<span class="token operator">|</span> id <span class="token operator">|</span> name <span class="token operator">|</span> age <span class="token operator">|</span> balance <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----+------+-----+---------+</span>
<span class="token operator">|</span>  <span class="token number">1</span> <span class="token operator">|</span> 小明 <span class="token operator">|</span>  <span class="token number">20</span> <span class="token operator">|</span>    <span class="token number">1000</span> <span class="token operator">|</span>
<span class="token operator">|</span>  <span class="token number">2</span> <span class="token operator">|</span> 小红 <span class="token operator">|</span>  <span class="token number">21</span> <span class="token operator">|</span>    <span class="token number">2500</span> <span class="token operator">|</span>
<span class="token operator">|</span>  <span class="token number">3</span> <span class="token operator">|</span> 小蓝 <span class="token operator">|</span>  <span class="token number">22</span> <span class="token operator">|</span>    <span class="token number">1800</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----+------+-----+---------+</span>

<span class="token number">2.2</span>rollback回滚
使用<span class="token keyword">rollback</span>关键字可以回到事务开始之前的状态。
如果你发现事务里逻辑有问题，可以回滚到事务之前的状态。
这可能比较抽象，看下面的例子，就会懂怎么用事务了。

当前表数据:

<span class="token operator">+</span><span class="token comment">----+------+-----+---------+</span>
<span class="token operator">|</span> id <span class="token operator">|</span> name <span class="token operator">|</span> age <span class="token operator">|</span> balance <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----+------+-----+---------+</span>
<span class="token operator">|</span>  <span class="token number">1</span> <span class="token operator">|</span> 小明 <span class="token operator">|</span>  <span class="token number">20</span> <span class="token operator">|</span>    <span class="token number">1000</span> <span class="token operator">|</span>
<span class="token operator">|</span>  <span class="token number">2</span> <span class="token operator">|</span> 小红 <span class="token operator">|</span>  <span class="token number">21</span> <span class="token operator">|</span>    <span class="token number">2500</span> <span class="token operator">|</span>
<span class="token operator">|</span>  <span class="token number">3</span> <span class="token operator">|</span> 小蓝 <span class="token operator">|</span>  <span class="token number">22</span> <span class="token operator">|</span>    <span class="token number">1800</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----+------+-----+---------+</span>

现将小蓝的余额扣除<span class="token number">300</span>，小红的余额增加<span class="token number">300</span>。
但中途发现只需要将小蓝的余额扣除<span class="token number">200</span>就够了，
而且事务都执行了一半了，事务里的数据都改了，怎么办呢？
这时回滚<span class="token punctuation">(</span><span class="token keyword">rollback</span><span class="token punctuation">)</span>就派上用场了。

<span class="token keyword">START</span> <span class="token keyword">TRANSACTION</span><span class="token punctuation">;</span>
<span class="token comment">#操作</span>
<span class="token keyword">UPDATE</span> <span class="token keyword">user</span> <span class="token keyword">SET</span> balance <span class="token operator">=</span> balance <span class="token operator">-</span> <span class="token number">300</span> <span class="token keyword">WHERE</span> name <span class="token operator">=</span> <span class="token string">&#39;小蓝&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">UPDATE</span> <span class="token keyword">user</span> <span class="token keyword">SET</span> balance <span class="token operator">=</span> balance <span class="token operator">+</span> <span class="token number">300</span> <span class="token keyword">WHERE</span> name <span class="token operator">=</span> <span class="token string">&#39;小红&#39;</span><span class="token punctuation">;</span>
<span class="token comment">#查表</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> <span class="token keyword">user</span><span class="token punctuation">;</span>
<span class="token comment">#发现问题，回滚</span>
<span class="token keyword">ROLLBACK</span><span class="token punctuation">;</span>
<span class="token comment">#再次查表</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> <span class="token keyword">user</span><span class="token punctuation">;</span>

结果:

回滚之前
<span class="token operator">+</span><span class="token comment">----+------+-----+---------+</span>
<span class="token operator">|</span> id <span class="token operator">|</span> name <span class="token operator">|</span> age <span class="token operator">|</span> balance <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----+------+-----+---------+</span>
<span class="token operator">|</span>  <span class="token number">1</span> <span class="token operator">|</span> 小明 <span class="token operator">|</span>  <span class="token number">20</span> <span class="token operator">|</span>    <span class="token number">1000</span>  <span class="token operator">|</span>
<span class="token operator">|</span>  <span class="token number">2</span> <span class="token operator">|</span> 小红 <span class="token operator">|</span>  <span class="token number">21</span> <span class="token operator">|</span>    <span class="token number">2800</span> <span class="token operator">|</span>
<span class="token operator">|</span>  <span class="token number">3</span> <span class="token operator">|</span> 小蓝 <span class="token operator">|</span>  <span class="token number">22</span> <span class="token operator">|</span>    <span class="token number">1500</span>    <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----+------+-----+---------+</span>

回滚之后
<span class="token operator">+</span><span class="token comment">----+------+-----+---------+</span>
<span class="token operator">|</span> id <span class="token operator">|</span> name <span class="token operator">|</span> age <span class="token operator">|</span> balance <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----+------+-----+---------+</span>
<span class="token operator">|</span>  <span class="token number">1</span> <span class="token operator">|</span> 小明 <span class="token operator">|</span>  <span class="token number">20</span> <span class="token operator">|</span>    <span class="token number">1000</span> <span class="token operator">|</span>
<span class="token operator">|</span>  <span class="token number">2</span> <span class="token operator">|</span> 小红 <span class="token operator">|</span>  <span class="token number">21</span> <span class="token operator">|</span>    <span class="token number">2500</span> <span class="token operator">|</span>
<span class="token operator">|</span>  <span class="token number">3</span> <span class="token operator">|</span> 小蓝 <span class="token operator">|</span>  <span class="token number">22</span> <span class="token operator">|</span>    <span class="token number">1800</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----+------+-----+---------+</span>



在回滚之后，数据又恢复原样了，之后可以再开启事务进行操作。

<span class="token number">2.3</span>savepoint保存点
其实，如果在事务里发现了逻辑错误的话，但是其中有一些逻辑是正确的呀，
直接回滚那不是麻烦了吗，又要重新开启一个事务，重新写一遍代码？？？😂
当然了，我们亲爱的MySQL设计者肯定不会这样做。

所以，在MySQL中，可以回到保存点时的状态而不用回滚事务。
MySQL中有savelpoint关键字来定义保存点。
语法如下:

<span class="token keyword">savepoint</span> name<span class="token punctuation">;</span>
<span class="token number">1</span>
比如定义一个名为point1的保存点:

<span class="token keyword">savepoint</span> point1<span class="token punctuation">;</span>
<span class="token number">1</span>
回滚到保存点的语法还不仅仅是直接<span class="token keyword">rollback</span>这么简单
下面时回滚到保存点的语法：

<span class="token keyword">rollback</span> <span class="token keyword">to</span> <span class="token keyword">savepoint</span> 保存点名
<span class="token number">1</span>
比如:

<span class="token keyword">rollback</span> <span class="token keyword">to</span> <span class="token keyword">savepoint</span> point1<span class="token punctuation">;</span>
<span class="token number">1</span>
注意：保存点只在事务内使用

光说不练假把式，下面就是一个案例：

<span class="token comment">#开启事务</span>
<span class="token keyword">START</span> <span class="token keyword">TRANSACTION</span><span class="token punctuation">;</span>
<span class="token comment">#修改数据</span>
<span class="token keyword">UPDATE</span> <span class="token keyword">user</span> <span class="token keyword">SET</span> balance <span class="token operator">=</span> balance <span class="token operator">-</span> <span class="token number">300</span> <span class="token keyword">WHERE</span> name <span class="token operator">=</span> <span class="token string">&#39;小蓝&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">UPDATE</span> <span class="token keyword">user</span> <span class="token keyword">SET</span> balance <span class="token operator">=</span> balance <span class="token operator">+</span> <span class="token number">300</span> <span class="token keyword">WHERE</span> name <span class="token operator">=</span> <span class="token string">&#39;小红&#39;</span><span class="token punctuation">;</span>
<span class="token comment">#设置保存点</span>
<span class="token keyword">SAVEPOINT</span> my_point<span class="token punctuation">;</span>
<span class="token comment">#删除小蓝的数据</span>
<span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> <span class="token keyword">user</span> <span class="token keyword">WHERE</span> name <span class="token operator">=</span> <span class="token string">&#39;小蓝&#39;</span><span class="token punctuation">;</span>
<span class="token comment">#查表</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> <span class="token keyword">user</span><span class="token punctuation">;</span>
<span class="token comment">#回滚到保存点时的状态</span>
<span class="token keyword">ROLLBACK</span> <span class="token keyword">TO</span> <span class="token keyword">SAVEPOINT</span> my_point<span class="token punctuation">;</span>
<span class="token comment">#提交事务</span>
<span class="token keyword">COMMIT</span><span class="token punctuation">;</span>

<span class="token comment">#再次查表</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> <span class="token keyword">user</span><span class="token punctuation">;</span>


执行结果：

执行事务前
<span class="token operator">+</span><span class="token comment">----+------+-----+---------+</span>
<span class="token operator">|</span> id <span class="token operator">|</span> name <span class="token operator">|</span> age <span class="token operator">|</span> balance <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----+------+-----+---------+</span>
<span class="token operator">|</span>  <span class="token number">1</span> <span class="token operator">|</span> 小明 <span class="token operator">|</span>  <span class="token number">20</span> <span class="token operator">|</span>    <span class="token number">1000</span> <span class="token operator">|</span>
<span class="token operator">|</span>  <span class="token number">2</span> <span class="token operator">|</span> 小红 <span class="token operator">|</span>  <span class="token number">21</span> <span class="token operator">|</span>    <span class="token number">2500</span> <span class="token operator">|</span>
<span class="token operator">|</span>  <span class="token number">3</span> <span class="token operator">|</span> 小蓝 <span class="token operator">|</span>  <span class="token number">22</span> <span class="token operator">|</span>    <span class="token number">1800</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----+------+-----+---------+</span>

执行事务后
<span class="token operator">+</span><span class="token comment">----+------+-----+---------+</span>
<span class="token operator">|</span> id <span class="token operator">|</span> name <span class="token operator">|</span> age <span class="token operator">|</span> balance <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----+------+-----+---------+</span>
<span class="token operator">|</span>  <span class="token number">1</span> <span class="token operator">|</span> 小明 <span class="token operator">|</span>  <span class="token number">20</span> <span class="token operator">|</span>    <span class="token number">1000</span> <span class="token operator">|</span>
<span class="token operator">|</span>  <span class="token number">2</span> <span class="token operator">|</span> 小红 <span class="token operator">|</span>  <span class="token number">21</span> <span class="token operator">|</span>    <span class="token number">2800</span> <span class="token operator">|</span>
<span class="token operator">|</span>  <span class="token number">3</span> <span class="token operator">|</span> 小蓝 <span class="token operator">|</span>  <span class="token number">22</span> <span class="token operator">|</span>    <span class="token number">1500</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----+------+-----+---------+</span>



可以看到小蓝的数据并没有被删除，因为回滚到了删除之前的状态。

总结：
在事务中设置保存点是个好习惯，可以让你的程序容错率更高。
特别是在进行删除数据这种危险的操作时，设置保存点是非常有必要的。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.事务的四大特性 当你把前面的内容都看过了，下面这几种性质就不难理解了。 事务的四大特性还是要掌握的，面试中也是经常问的。</p><p>3.1原子性（Atomicity） 事务中的全部操作是一个整体，这些操作要么都执行，要么都不执行。 这些操作是一个单元，就像原子一样不可分割，这就是所谓的原子性(Atomicity)。</p><p>3.2一致性（Consistency） 一致性(Consistency)讲的就是，最终表里的数据要么跟执行事务之前的数据保持一致, 要么跟执行事务之后的数据保持一致。</p><p>比如，张三有100元，李四有200元。 现在要转账，其实也就是一个事务，张三转给李四100块，李四收到一百块。 如果转账成功，即事务执行完毕，结果为张三剩0元，李四剩300元。 如果转账失败，即事务没执行完毕，结果为张三剩100元，李四剩200元。 不会出现张三剩0元，李四剩200元的情况，这就是事务的一致性。</p><p>3.3持久性（Durability） 持久性(Durability)就更好理解了，提交事务后，服务器就把数据写入到磁盘中了，对数据的更改是持久性的。</p><p>3.4隔离性（Isolation） 隔离性(Isolation)是针对数据资源的并发访问，当有多个事务操作同一个表时，不能被其他事务所干扰 这就是隔离性。</p><p>4.事务的四个隔离级别 在说事务的四个隔离级别之前，必须先说说脏读,不可重复读，幻读</p><p>脏读 有事务A和事务B，事务A对数据进行了修改，然后事务B读取了事务A里未提交的数据 但事务A进行了回滚，事务B读取到的数据就是无效的，这就是脏读。</p><p>不可重复读 事务A和事务B，事务B先读取了一个表中的数据，然后事务A对这个表的数据进行了修改 事务B之后读取到的数据跟先前读取的数据不一样，这就是不可重复读。 比如:在一个事务中刚开始读一个表时，有一项数据为30，可能由于有其他事务提交了，后来又变成了40。</p><p>幻读 幻读是针对插入操作来说的，事务B两次读取相同范围内的数据，但事务A插入了一些数据，导致事务B读取数据 的时候，又多出来一些数据。</p><p>比如： 在事务B中，你想在学生表中查18岁到20岁的学生，然后进行了一次查询。 事务A在表中添加了几个18岁到20岁的学生，然后事务B再次查询，发现多了几条记录 而且这几条记录还可能跟之前的纪律一样，就很魔幻，这就是幻读。</p><p>注意：不可重复读针对的是数据的修改，而幻读针对的是数据的增加。</p><p>4.1读未提交 读未提交(read uncommited)，指在一个事务中可以读取到另一个未提交事务的数据。</p><p>比如: 事务A修改数据修改数据。 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 事务B读取事务A中未提交的数据</p><p>读未提交会导致脏读，不可重复读和脏读。</p><p>4.2读已提交 读已提交(read commited) 指的是一个事务中，不能读取还未提交事务的数据，只能读取已提交事务的数据。</p><p>事务A先查询未修改的数据 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 事务B修改数据后，提交事务。 在查询一次已修改的数据。</p><p>读已提交解决了脏读的问题，但是会导致不可重复读和幻读。</p><p>4.3可重复读 可重复读(repeatable read)，在一个事务中，读取一个范围的数据时，这些数据不会因为其他事务的提交而发生改变。 这也是MySQL的默认隔离级别。</p><p>事务A在事务B提交之前先查询了数据， ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 事务B修改了数据，并把事务提交了。 事务A在事务B提交之后又查询了数据。</p><p>可重复读不会导致脏读和不可重复读，但是幻读的问题仍然未解决。</p><p>4.4序列化 序列化解决了脏读，幻读，和不可重复读，相当于一个事务一个事务地执行。 这里不在做演示。</p><p>各个隔离级别会导致的问题：</p><table><thead><tr><th></th><th>脏读</th><th>可重复读</th><th>幻读</th></tr></thead><tbody><tr><td>Read Uncommitted</td><td>√</td><td>√</td><td>√</td></tr><tr><td>Read Committed</td><td>×</td><td>√</td><td>√</td></tr><tr><td>Repeatable Read</td><td>×</td><td>×</td><td>√</td></tr><tr><td>Serializable</td><td>×</td><td>×</td><td>×</td></tr></tbody></table><hr><hr><p>记录MYSQL存储过程中的关键语法： <code>DELIMITER //</code> 声明语句结束符，用于区分; <code>CREATE PROCEDURE demo_in_parameter(IN p_in int)</code> 声明存储过程 <code>BEGIN .... END</code><br> 存储过程开始和结束符号 <code>SET @p_in=1</code> 变量赋值 <code>DECLARE l_int int unsigned default 4000000;</code></p><p><strong>变量定义</strong> 什么是mysql存储例程?存储例程是存储在数据库服务器中的一组sql语句，通过在查询中调用一个指定的名称来执行这些sql语句命令。 为什么要使用mysql存储过程？ 我们都知道应用程序分为两种，一种是基于web，一种是基于桌面，他们都和数据库进行交互来完成数据的存取工作。假设现在有一种应用程序包含了这两 种，现在要修改其中的一个查询sql语句，那么我们可能要同时修改他们中对应的查询sql语句，当我们的应用程序很庞大很复杂的时候问题就出现这，不易维 护！另外把sql查询语句放在我们的web程序或桌面中很容易遭到sql注入的破坏。而存储例程正好可以帮我们解决这些问题。 存储过程(stored procedure)、存储例程(store routine)、存储函数区别 Mysql存储例程实际包含了存储过程和存储函数，它们被统称为存储例程。 其中存储过程主要完成在获取记录或插入记录或更新记录或删除记录，即完成select insert delete update等的工作。而存储函数只完成查询的工作，可接受输入参数并返回一个结果。 创建mysql存储过程、存储函数 <code>create procedure 存储过程名(参数)</code> 存储过程体 <code>create function 存储函数名(参数)</code> 下面是存储过程的例子：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>DELIMITER <span class="token comment">// </span>
CREATE PROCEDURE <span class="token function">proc1</span><span class="token punctuation">(</span>OUT s <span class="token keyword">int</span><span class="token punctuation">)</span>
BEGIN
  SELECT <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> INTO s FROM user<span class="token punctuation">;</span>
END <span class="token comment">//</span>
DELIMITER <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注： （1）这里需要注意的是<code>DELIMITER//</code>和<code>DELIMITER;</code>两句， <code>DELIMITER</code>是分割符的意思，因为MySQL默认以&quot;<code>;</code>&quot;为分隔 符，如果我们没有声明分割符，那么编译器会把存储过程当成SQL语句进行处理，则存储过程的编译过程会报错，所以要事先用<code>DELIMITER</code>关键字申明当 前段分隔符，这样MySQL才会将&quot;<code>;</code>&quot;当做存储过程中的代码，不会执行这些代码，用完了之后要把分隔符还原。 （2）存储过程根据需要可能会有输入、输出、输入输出参数，这里有一个输出参数<code>s</code>，类型是<code>int</code>型，如果有多个参数用&quot;,&quot;分割开。 （3）过程体的开始与结束使用<code>BEGIN</code>与<code>END</code>进行标识。 这样，我们的一个MySQL存储过程就完成了，是不是很容易呢?看不懂也没关系，接下来，我们详细的讲解。</p><p><strong>(2). 声明分割符</strong> 其实，关于声明分割符，上面的注解已经写得很清楚，不需要多说，只是稍微要注意一点的是：如果是用MySQL的Administrator管理工具时，可以直接创建，不再需要声明。</p><p><strong>(3). 参数</strong> MySQL存储过程的参数用在存储过程的定义，共有三种参数类型,<code>IN</code>,<code>OUT</code>,<code>INOUT</code>,形式如： <code>CREATEPROCEDURE 存储过程名([[IN |OUT |INOUT ] 参数名 数据类形...])</code><strong>IN 输入参数:</strong> 表示该参数的值必须在调用存储过程时指定，在存储过程中修改该参数的值不能被返回，为默认值 <strong>OUT 输出参数:</strong> 该值可在存储过程内部被改变，并可返回 <strong>INOUT 输入输出参数:</strong> 调用时指定，并且可被改变和返回 <strong>Ⅰ. IN参数例子</strong> 创建:</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>DELIMITER <span class="token comment">//  </span>
CREATE PROCEDURE <span class="token function">demo_in_parameter</span><span class="token punctuation">(</span>IN p_in <span class="token keyword">int</span><span class="token punctuation">)</span>  
    BEGIN   
    SELECT p_in<span class="token punctuation">;</span>   
    SET p_in<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>   
    SELECT p_in<span class="token punctuation">;</span>   
    END<span class="token comment">//  </span>
DELIMITER <span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果:</p><div class="language-ruby line-numbers-mode" data-ext="rb"><pre class="language-ruby"><code><span class="token number">1.</span>  mysql <span class="token operator">&gt;</span> <span class="token constant">SET</span> <span class="token variable">@p_in</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>  
<span class="token number">2.</span>  mysql <span class="token operator">&gt;</span> <span class="token constant">CALL</span> demo_in_parameter<span class="token punctuation">(</span><span class="token variable">@p_in</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token number">3.</span>  <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>  
<span class="token number">4.</span>  <span class="token operator">|</span> p_in <span class="token operator">|</span>  
<span class="token number">5.</span>  <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>  
<span class="token number">6.</span>  <span class="token operator">|</span>   <span class="token number">1</span>  <span class="token operator">|</span>   
<span class="token number">7.</span>  <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>  
<span class="token number">8.</span>   
<span class="token number">9.</span>  <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>  
<span class="token number">10.</span><span class="token operator">|</span> p_in <span class="token operator">|</span>  
<span class="token number">11.</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>  
<span class="token number">12.</span><span class="token operator">|</span>   <span class="token number">2</span>  <span class="token operator">|</span>   
<span class="token number">13.</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>  
<span class="token number">14.</span> 
<span class="token number">15.</span>mysql<span class="token operator">&gt;</span> <span class="token constant">SELECT</span> <span class="token variable">@p_in</span><span class="token punctuation">;</span>  
<span class="token number">16.</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>  
<span class="token number">17.</span><span class="token operator">|</span> <span class="token variable">@p_in</span> <span class="token operator">|</span>  
<span class="token number">18.</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>  
<span class="token number">19.</span><span class="token operator">|</span>  <span class="token number">1</span>    <span class="token operator">|</span>  
<span class="token number">20.</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上可以看出，<code>p_in</code>虽然在存储过程中被修改，但并不影响<code>@p_id</code>的值</p><p><strong>Ⅱ.OUT参数例子</strong> 创建:</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>DELIMITER <span class="token comment">//  </span>
CREATE PROCEDURE <span class="token function">demo_out_parameter</span><span class="token punctuation">(</span>OUT p_out <span class="token keyword">int</span><span class="token punctuation">)</span>  
    BEGIN 
    SELECT p_out<span class="token punctuation">;</span>  
    SET p_out<span class="token operator">=</span>
    SELECT p_out<span class="token punctuation">;</span>  
    END <span class="token comment">//  </span>
DELIMITER <span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果:</p><div class="language-ruby line-numbers-mode" data-ext="rb"><pre class="language-ruby"><code><span class="token number">1.</span>  mysql <span class="token operator">&gt;</span> <span class="token constant">SET</span> <span class="token variable">@p_out</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>  
<span class="token number">2.</span>  mysql <span class="token operator">&gt;</span> <span class="token constant">CALL</span> sp_demo_out_parameter<span class="token punctuation">(</span><span class="token variable">@p_out</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token number">3.</span>  <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>  
<span class="token number">4.</span>  <span class="token operator">|</span> p_out <span class="token operator">|</span>   
<span class="token number">5.</span>  <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>  
<span class="token number">6.</span>  <span class="token operator">|</span> <span class="token constant">NULL</span>  <span class="token operator">|</span>   
<span class="token number">7.</span>  <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>  
<span class="token number">8.</span>   
<span class="token number">9.</span>  <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>  
<span class="token number">10.</span><span class="token operator">|</span> p_out <span class="token operator">|</span>  
<span class="token number">11.</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>  
<span class="token number">12.</span><span class="token operator">|</span>   <span class="token number">2</span>   <span class="token operator">|</span>   
<span class="token number">13.</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>  
<span class="token number">14.</span> 
<span class="token number">15.</span>mysql<span class="token operator">&gt;</span> <span class="token constant">SELECT</span> <span class="token variable">@p_out</span><span class="token punctuation">;</span>  
<span class="token number">16.</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>  
<span class="token number">17.</span><span class="token operator">|</span> p_out <span class="token operator">|</span>  
<span class="token number">18.</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>  
<span class="token number">19.</span><span class="token operator">|</span>   <span class="token number">2</span>   <span class="token operator">|</span>  
<span class="token number">20.</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Ⅲ. INOUT参数例子</strong> 创建:</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>DELIMITER <span class="token comment">//   </span>
CREATE PROCEDURE <span class="token function">demo_inout_parameter</span><span class="token punctuation">(</span>INOUT p_inout <span class="token keyword">int</span><span class="token punctuation">)</span>   
BEGIN 
    SELECT p_inout<span class="token punctuation">;</span>  
    SET p_inout<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>  
    SELECT p_inout<span class="token punctuation">;</span>   
 END <span class="token comment">//   </span>
DELIMITER <span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果:</p><div class="language-ruby line-numbers-mode" data-ext="rb"><pre class="language-ruby"><code><span class="token number">1.</span>  mysql <span class="token operator">&gt;</span> <span class="token constant">SET</span> <span class="token variable">@p_inout</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>  
<span class="token number">2.</span>  mysql <span class="token operator">&gt;</span> <span class="token constant">CALL</span> demo_inout_parameter<span class="token punctuation">(</span><span class="token variable">@p_inout</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>  
<span class="token number">3.</span>  <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>  
<span class="token number">4.</span>  <span class="token operator">|</span> p_inout <span class="token operator">|</span>  
<span class="token number">5.</span>  <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>  
<span class="token number">6.</span>  <span class="token operator">|</span>    <span class="token number">1</span>    <span class="token operator">|</span>  
<span class="token number">7.</span>  <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>  
<span class="token number">8.</span>   
<span class="token number">9.</span>  <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>  
<span class="token number">10.</span><span class="token operator">|</span> p_inout <span class="token operator">|</span>   
<span class="token number">11.</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>  
<span class="token number">12.</span><span class="token operator">|</span>    <span class="token number">2</span>    <span class="token operator">|</span>  
<span class="token number">13.</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>  
<span class="token number">14.</span> 
<span class="token number">15.</span>mysql <span class="token operator">&gt;</span> <span class="token constant">SELECT</span> <span class="token variable">@p_inout</span><span class="token punctuation">;</span>  
<span class="token number">16.</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>  
<span class="token number">17.</span><span class="token operator">|</span> <span class="token variable">@p_inout</span> <span class="token operator">|</span>   
<span class="token number">18.</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>  
<span class="token number">19.</span><span class="token operator">|</span>    <span class="token number">2</span>     <span class="token operator">|</span>  
<span class="token number">20.</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>(4). 变量</strong><strong>Ⅰ. 变量定义</strong><strong>局部变量声明一定要放在存储过程体的开始</strong><code>DECLAREvariable_name [,variable_name...] datatype [DEFAULT value];</code> 其中，datatype为MySQL的数据类型，如:<code>int</code>, <code>float</code>, <code>date</code>,<code>varchar(length)</code> 例如:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token number">1.</span>  <span class="token keyword">DECLARE</span> l_int <span class="token keyword type-declaration">int</span> unsigned <span class="token keyword">default</span> <span class="token number">4000000</span><span class="token punctuation">;</span>  
<span class="token number">2.</span>  <span class="token keyword">DECLARE</span> l_numeric <span class="token function">number</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token number">9.95</span><span class="token punctuation">;</span>  
<span class="token number">3.</span>  <span class="token keyword">DECLARE</span> l_date date <span class="token keyword">DEFAULT</span> <span class="token string single-quoted-string">&#39;1999-12-31&#39;</span><span class="token punctuation">;</span>  
<span class="token number">4.</span>  <span class="token keyword">DECLARE</span> l_datetime datetime <span class="token keyword">DEFAULT</span> <span class="token string single-quoted-string">&#39;1999-12-31 23:59:59&#39;</span><span class="token punctuation">;</span>  
<span class="token number">5.</span>  <span class="token keyword">DECLARE</span> l_varchar <span class="token function">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token string single-quoted-string">&#39;This will not be padded&#39;</span><span class="token punctuation">;</span>   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Ⅱ. 变量赋值</strong><code>SET 变量名 = 表达式值 [,variable_name = expression ...]</code></p><p><strong>Ⅲ. 用户变量</strong></p><div class="language-ruby line-numbers-mode" data-ext="rb"><pre class="language-ruby"><code>ⅰ<span class="token punctuation">.</span> 在MySQL客户端使用用户变量
<span class="token number">1.</span>  mysql <span class="token operator">&gt;</span> <span class="token constant">SELECT</span> <span class="token string-literal"><span class="token string">&#39;Hello World&#39;</span></span> into <span class="token variable">@x</span><span class="token punctuation">;</span>  
<span class="token number">2.</span>  mysql <span class="token operator">&gt;</span> <span class="token constant">SELECT</span> <span class="token variable">@x</span><span class="token punctuation">;</span>  
<span class="token number">3.</span>  <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>  
<span class="token number">4.</span>  <span class="token operator">|</span>   <span class="token variable">@x</span>        <span class="token operator">|</span>  
<span class="token number">5.</span>  <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>  
<span class="token number">6.</span>  <span class="token operator">|</span> Hello World <span class="token operator">|</span>  
<span class="token number">7.</span>  <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>  
<span class="token number">8.</span>  mysql <span class="token operator">&gt;</span> <span class="token constant">SET</span> <span class="token variable">@y</span><span class="token operator">=</span><span class="token string-literal"><span class="token string">&#39;Goodbye Cruel World&#39;</span></span><span class="token punctuation">;</span>  
<span class="token number">9.</span>  mysql <span class="token operator">&gt;</span> <span class="token constant">SELECT</span> <span class="token variable">@y</span><span class="token punctuation">;</span>  
<span class="token number">10.</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>  
<span class="token number">11.</span><span class="token operator">|</span>     <span class="token variable">@y</span>              <span class="token operator">|</span>  
<span class="token number">12.</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>  
<span class="token number">13.</span><span class="token operator">|</span> Goodbye Cruel World <span class="token operator">|</span>  
<span class="token number">14.</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>  
<span class="token number">15.</span> 
<span class="token number">16.</span>mysql <span class="token operator">&gt;</span> <span class="token constant">SET</span> <span class="token variable">@z</span><span class="token operator">=</span><span class="token number">1</span><span class="token operator">+</span><span class="token number">2</span><span class="token operator">+</span><span class="token number">3</span><span class="token punctuation">;</span>  
<span class="token number">17.</span>mysql <span class="token operator">&gt;</span> <span class="token constant">SELECT</span> <span class="token variable">@z</span><span class="token punctuation">;</span>  
<span class="token number">18.</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>  
<span class="token number">19.</span><span class="token operator">|</span> <span class="token variable">@z</span>   <span class="token operator">|</span>  
<span class="token number">20.</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>  
<span class="token number">21.</span><span class="token operator">|</span>  <span class="token number">6</span>   <span class="token operator">|</span>  
<span class="token number">22.</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ⅱ. 在存储过程中使用用户变量</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token number">1.</span>  mysql <span class="token operator">&gt;</span> <span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> GreetWorld<span class="token punctuation">(</span> <span class="token punctuation">)</span> <span class="token keyword">SELECT</span> CONCAT<span class="token punctuation">(</span><span class="token variable">@greeting</span><span class="token punctuation">,</span><span class="token string">&#39; World&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token number">2.</span>  mysql <span class="token operator">&gt;</span> <span class="token keyword">SET</span> <span class="token variable">@greeting</span><span class="token operator">=</span><span class="token string">&#39;Hello&#39;</span><span class="token punctuation">;</span>  
<span class="token number">3.</span>  mysql <span class="token operator">&gt;</span> <span class="token keyword">CALL</span> GreetWorld<span class="token punctuation">(</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token number">4.</span>  <span class="token operator">+</span><span class="token comment">----------------------------+  </span>
<span class="token number">5.</span>  <span class="token operator">|</span> CONCAT<span class="token punctuation">(</span><span class="token variable">@greeting</span><span class="token punctuation">,</span><span class="token string">&#39; World&#39;</span><span class="token punctuation">)</span> <span class="token operator">|</span>  
<span class="token number">6.</span>  <span class="token operator">+</span><span class="token comment">----------------------------+  </span>
<span class="token number">7.</span>  <span class="token operator">|</span>  Hello World               <span class="token operator">|</span>  
<span class="token number">8.</span>  <span class="token operator">+</span><span class="token comment">----------------------------+  </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ⅲ. 在存储过程间传递全局范围的用户变量</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token number">1.</span>  mysql<span class="token operator">&gt;</span> <span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> p1<span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token keyword">SET</span> <span class="token variable">@last_procedure</span><span class="token operator">=</span><span class="token string">&#39;p1&#39;</span><span class="token punctuation">;</span>  
<span class="token number">2.</span>  mysql<span class="token operator">&gt;</span> <span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> p2<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">SELECT</span> CONCAT<span class="token punctuation">(</span><span class="token string">&#39;Last procedure was &#39;</span><span class="token punctuation">,</span><span class="token variable">@last_procedure</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token number">3.</span>  mysql<span class="token operator">&gt;</span> <span class="token keyword">CALL</span> p1<span class="token punctuation">(</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token number">4.</span>  mysql<span class="token operator">&gt;</span> <span class="token keyword">CALL</span> p2<span class="token punctuation">(</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token number">5.</span>  <span class="token operator">+</span><span class="token comment">-----------------------------------------------+  </span>
<span class="token number">6.</span>  <span class="token operator">|</span> CONCAT<span class="token punctuation">(</span><span class="token string">&#39;Last procedure was &#39;</span><span class="token punctuation">,</span><span class="token variable">@last_proc</span>       <span class="token operator">|</span>  
<span class="token number">7.</span>  <span class="token operator">+</span><span class="token comment">-----------------------------------------------+  </span>
<span class="token number">8.</span>  <span class="token operator">|</span> <span class="token keyword">Last</span> <span class="token keyword">procedure</span> was p1                         <span class="token operator">|</span>  
<span class="token number">9.</span>  <span class="token operator">+</span><span class="token comment">-----------------------------------------------+  </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意: ①用户变量名一般以@开头 ②滥用用户变量会导致程序难以理解及管理</p><p><strong>(5). 注释</strong></p><hr><p>MySQL存储过程可使用两种风格的注释 双模杠：-- 该风格一般用于单行注释 c风格： 一般用于多行注释 例如：</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>DELIMITER <span class="token comment">//  </span>
CREATE <span class="token return-type class-name">PROCEDURE</span> proc1 <span class="token punctuation">(</span>IN <span class="token class-name">parameter1</span> INTEGER<span class="token punctuation">)</span>   
BEGIN   
   DECLARE <span class="token return-type class-name">variable1</span> <span class="token function">CHAR</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   
   <span class="token class-name">IF</span> parameter1 <span class="token operator">=</span> <span class="token number">17</span> THEN   
       <span class="token class-name">SET</span> variable1 <span class="token operator">=</span> &#39;birds&#39;<span class="token punctuation">;</span>   
       ELSE 
       <span class="token class-name">SET</span> variable1 <span class="token operator">=</span> &#39;beasts&#39;<span class="token punctuation">;</span>   
   <span class="token class-name">END</span> IF<span class="token punctuation">;</span>   
INSERT INTO <span class="token return-type class-name">table1</span> VALUES <span class="token punctuation">(</span>variable1<span class="token punctuation">)</span><span class="token punctuation">;</span>  
END <span class="token comment">//  </span>
DELIMITER <span class="token punctuation">;</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>4. MySQL存储过程的调用</strong> 用call和你过程名以及一个括号，括号里面根据需要，加入参数，参数包括输入参数、输出参数、输入输出参数。具体的调用方法可以参看上面的例子。</p><p><strong>5. MySQL存储过程的查询</strong> 我们像知道一个数据库下面有那些表，我们一般采用<code>show tables</code>进行查看。那么我们要查看某个数据库下面的存储过程，是否也可以采用呢？答案是，我们可以查看某个数据库下面的存储过程，但是是令一钟方式。 我们可以用 <code>selectname from mysql.proc where db=’数据库名’;</code> 或者 <code>selectroutine_name from information_schema.routines where routine_schema=&#39;数据库名&#39;;</code> 或者 <code>showprocedure status where db=&#39;数据库名&#39;;</code> 进行查询。 如果我们想知道，某个存储过程的详细，那我们又该怎么做呢？是不是也可以像操作表一样用<code>describe 表名</code>进行查看呢？ 答案是：我们可以查看存储过程的详细，但是需要用另一种方法： <code>SHOWCREATE PROCEDURE 数据库.存储过程名;</code> 就可以查看当前存储过程的详细。</p><p><strong>6. MySQL存储过程的修改</strong><code>ALTER PROCEDURE</code> 更改用<code>CREATE PROCEDURE</code> 建立的预先指定的存储过程，其不会影响相关存储过程或存储功能。</p><p><strong>7. MySQL存储过程的删除</strong> 删除一个存储过程比较简单，和删除表一样： <code>DROPPROCEDURE</code> 从MySQL的表格中删除一个或多个存储过程。</p><p><strong>8. MySQL存储过程的控制语句</strong><strong>(1). 变量作用域</strong> 内部的变量在其作用域范围内享有更高的优先权，当执行到end。变量时，内部变量消失，此时已经在其作用域外，变量不再可见了，应为在存储过程外再也不能找到这个申明的变量，但是你可以通过out参数或者将其值指派给会话变量来保存其值。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DELIMITER</span> <span class="token comment">//  </span>
<span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> proc3<span class="token punctuation">(</span><span class="token punctuation">)</span>  
 <span class="token keyword">begin</span> 
   <span class="token keyword">declare</span> x1 <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&#39;outer&#39;</span><span class="token punctuation">;</span>  
   <span class="token keyword">begin</span> 
   <span class="token keyword">declare</span> x1 <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&#39;inner&#39;</span><span class="token punctuation">;</span>  
   <span class="token keyword">select</span> x
   <span class="token keyword">end</span><span class="token punctuation">;</span>  
   <span class="token keyword">select</span> x
 <span class="token keyword">end</span> <span class="token comment">//  </span>
<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>** (2). 条件语句** <strong>Ⅰ. if-then -else语句</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DELIMITER</span> <span class="token comment">//  </span>
<span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> proc2<span class="token punctuation">(</span><span class="token operator">IN</span> parameter <span class="token keyword">int</span><span class="token punctuation">)</span>  
  <span class="token keyword">begin</span> 
    <span class="token keyword">declare</span> var <span class="token keyword">int</span><span class="token punctuation">;</span>  
    <span class="token keyword">set</span> var<span class="token operator">=</span>parameter<span class="token operator">+</span>
    <span class="token keyword">if</span> var<span class="token operator">=</span><span class="token number">0</span> <span class="token keyword">then</span> 
        <span class="token keyword">insert</span> <span class="token keyword">into</span> t <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">17</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token keyword">end</span> <span class="token keyword">if</span><span class="token punctuation">;</span> 
    <span class="token keyword">if</span> parameter<span class="token operator">=</span><span class="token number">0</span> <span class="token keyword">then</span> 
        <span class="token keyword">update</span> t <span class="token keyword">set</span> s1<span class="token operator">=</span>s1<span class="token operator">+</span>
    <span class="token keyword">else</span> 
        <span class="token keyword">update</span> t <span class="token keyword">set</span> s1<span class="token operator">=</span>s1<span class="token operator">+</span>
    <span class="token keyword">end</span> <span class="token keyword">if</span><span class="token punctuation">;</span>  
  <span class="token keyword">end</span> <span class="token comment">//  </span>
<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Ⅱ. case语句：</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DELIMITER</span> <span class="token comment">//  </span>
<span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> proc3 <span class="token punctuation">(</span><span class="token operator">in</span> parameter <span class="token keyword">int</span><span class="token punctuation">)</span>  
  <span class="token keyword">begin</span> 
    <span class="token keyword">declare</span> var <span class="token keyword">int</span><span class="token punctuation">;</span>  
    <span class="token keyword">set</span> var<span class="token operator">=</span>parameter<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>  
    <span class="token keyword">case</span> var  
        <span class="token keyword">when</span> <span class="token number">0</span> <span class="token keyword">then</span>   
          <span class="token keyword">insert</span> <span class="token keyword">into</span> t <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">17</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token keyword">when</span> <span class="token number">1</span> <span class="token keyword">then</span>   
          <span class="token keyword">insert</span> <span class="token keyword">into</span> t <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token keyword">else</span>   
          <span class="token keyword">insert</span> <span class="token keyword">into</span> t <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">19</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token keyword">end</span> <span class="token keyword">case</span><span class="token punctuation">;</span>  
  <span class="token keyword">end</span> <span class="token comment">//  </span>
<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">case</span>
    <span class="token keyword">when</span> <span class="token keyword">var</span><span class="token operator">=</span><span class="token number">0</span> then
        insert <span class="token keyword">into</span> <span class="token return-type class-name">t</span> <span class="token function">values</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">when</span> <span class="token keyword">var</span><span class="token operator">&gt;</span><span class="token number">0</span> then
    <span class="token keyword">when</span> <span class="token keyword">var</span><span class="token operator">&lt;</span><span class="token number">0</span> then
    <span class="token keyword">else</span> 
end <span class="token keyword">case</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>(3). 循环语句</strong><strong>Ⅰ. while ···· end while：</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token number">1.</span>  mysql <span class="token operator">&gt;</span> <span class="token keyword">DELIMITER</span> <span class="token comment">//  </span>
<span class="token number">2.</span>  mysql <span class="token operator">&gt;</span> <span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> proc4<span class="token punctuation">(</span><span class="token punctuation">)</span>  
<span class="token number">3.</span>       <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">begin</span> 
<span class="token number">4.</span>       <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">declare</span> var <span class="token keyword">int</span><span class="token punctuation">;</span>  
<span class="token number">5.</span>       <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">set</span> var<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>  
<span class="token number">6.</span>       <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">while</span> var<span class="token operator">&lt;</span><span class="token number">6</span> <span class="token keyword">do</span>  
<span class="token number">7.</span>       <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">insert</span> <span class="token keyword">into</span> t <span class="token keyword">values</span><span class="token punctuation">(</span>var<span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token number">8.</span>       <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">set</span> var<span class="token operator">=</span>var<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>  
<span class="token number">9.</span>       <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">end</span> <span class="token keyword">while</span><span class="token punctuation">;</span>  
<span class="token number">10.</span>     <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">end</span><span class="token punctuation">;</span>  
<span class="token number">11.</span>     <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token comment">//  </span>
<span class="token number">12.</span>mysql <span class="token operator">&gt;</span> <span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code> <span class="token keyword">while</span>条件 <span class="token keyword">do</span>
<span class="token operator">--</span>循环体
<span class="token keyword">endwhile</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Ⅱ. repeat···· end repeat：</strong> 它在执行操作后检查结果，而while则是执行前进行检查。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token number">1.</span>  mysql <span class="token operator">&gt;</span> <span class="token keyword">DELIMITER</span> <span class="token comment">//  </span>
<span class="token number">2.</span>  mysql <span class="token operator">&gt;</span> <span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> proc5 <span class="token punctuation">(</span><span class="token punctuation">)</span>  
<span class="token number">3.</span>       <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">begin</span>   
<span class="token number">4.</span>       <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">declare</span> v <span class="token keyword">int</span><span class="token punctuation">;</span>  
<span class="token number">5.</span>       <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">set</span> v<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>  
<span class="token number">6.</span>       <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">repeat</span>  
<span class="token number">7.</span>       <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">insert</span> <span class="token keyword">into</span> t <span class="token keyword">values</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token number">8.</span>       <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">set</span> v<span class="token operator">=</span>v<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>  
<span class="token number">9.</span>       <span class="token operator">-</span><span class="token operator">&gt;</span> until v<span class="token operator">&gt;=</span><span class="token number">5</span>  
<span class="token number">10.</span>     <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">end</span> <span class="token keyword">repeat</span><span class="token punctuation">;</span>  
<span class="token number">11.</span>     <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">end</span><span class="token punctuation">;</span>  
<span class="token number">12.</span>     <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token comment">//  </span>
<span class="token number">13.</span>mysql <span class="token operator">&gt;</span> <span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-ruby line-numbers-mode" data-ext="rb"><pre class="language-ruby"><code> repeat
<span class="token operator">-</span><span class="token operator">-</span>循环体
<span class="token keyword">until</span>循环条件     
endrepeat<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Ⅲ. loop ·····endloop:</strong> loop循环不需要初始条件，这点和while 循环相似，同时和repeat循环一样不需要结束条件, leave语句的意义是离开循环。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token number">1.</span>  mysql <span class="token operator">&gt;</span> <span class="token keyword">DELIMITER</span> <span class="token comment">//  </span>
<span class="token number">2.</span>  mysql <span class="token operator">&gt;</span> <span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> proc6 <span class="token punctuation">(</span><span class="token punctuation">)</span>  
<span class="token number">3.</span>       <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">begin</span> 
<span class="token number">4.</span>       <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">declare</span> v <span class="token keyword">int</span><span class="token punctuation">;</span>  
<span class="token number">5.</span>       <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">set</span> v<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>  
<span class="token number">6.</span>       <span class="token operator">-</span><span class="token operator">&gt;</span> LOOP_LABLE:<span class="token keyword">loop</span>  
<span class="token number">7.</span>       <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">insert</span> <span class="token keyword">into</span> t <span class="token keyword">values</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token number">8.</span>       <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">set</span> v<span class="token operator">=</span>v<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>  
<span class="token number">9.</span>       <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">if</span> v <span class="token operator">&gt;=</span><span class="token number">5</span> <span class="token keyword">then</span> 
<span class="token number">10.</span>     <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">leave</span> LOOP_LABLE<span class="token punctuation">;</span>  
<span class="token number">11.</span>     <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">end</span> <span class="token keyword">if</span><span class="token punctuation">;</span>  
<span class="token number">12.</span>     <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">end</span> <span class="token keyword">loop</span><span class="token punctuation">;</span>  
<span class="token number">13.</span>     <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">end</span><span class="token punctuation">;</span>  
<span class="token number">14.</span>     <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token comment">//  </span>
<span class="token number">15.</span>mysql <span class="token operator">&gt;</span> <span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Ⅳ. LABLES 标号：</strong> 标号可以用在begin repeat while 或者loop 语句前，语句标号只能在合法的语句前面使用。可以跳出循环，使运行指令达到复合语句的最后一步。</p><p><strong>(4). ITERATE迭代</strong><strong>Ⅰ. ITERATE:</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token number">1.</span>    通过引用复合语句的标号<span class="token punctuation">,</span>来从新开始复合语句
<span class="token number">2.</span>  mysql <span class="token operator">&gt;</span> <span class="token keyword">DELIMITER</span> <span class="token comment">//  </span>
<span class="token number">3.</span>  mysql <span class="token operator">&gt;</span> <span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> proc10 <span class="token punctuation">(</span><span class="token punctuation">)</span>  
<span class="token number">4.</span>       <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">begin</span> 
<span class="token number">5.</span>       <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">declare</span> v <span class="token keyword">int</span><span class="token punctuation">;</span>  
<span class="token number">6.</span>       <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">set</span> v<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>  
<span class="token number">7.</span>       <span class="token operator">-</span><span class="token operator">&gt;</span> LOOP_LABLE:<span class="token keyword">loop</span>  
<span class="token number">8.</span>      <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">if</span> v<span class="token operator">=</span><span class="token number">3</span> <span class="token keyword">then</span>   
<span class="token number">9.</span>      <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">set</span> v<span class="token operator">=</span>v<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>  
<span class="token number">10.</span>        <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">ITERATE</span> LOOP_LABLE<span class="token punctuation">;</span>  
<span class="token number">11.</span>        <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">end</span> <span class="token keyword">if</span><span class="token punctuation">;</span>  
<span class="token number">12.</span>     <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">insert</span> <span class="token keyword">into</span> t <span class="token keyword">values</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token number">13.</span>     <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">set</span> v<span class="token operator">=</span>v<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>  
<span class="token number">14.</span>        <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">if</span> v<span class="token operator">&gt;=</span><span class="token number">5</span> <span class="token keyword">then</span> 
<span class="token number">15.</span>        <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">leave</span> LOOP_LABLE<span class="token punctuation">;</span>  
<span class="token number">16.</span>     <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">end</span> <span class="token keyword">if</span><span class="token punctuation">;</span>  
<span class="token number">17.</span>     <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">end</span> <span class="token keyword">loop</span><span class="token punctuation">;</span>  
<span class="token number">18.</span>     <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">end</span><span class="token punctuation">;</span>  
<span class="token number">19.</span>     <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token comment">//  </span>
<span class="token number">20.</span>mysql <span class="token operator">&gt;</span> <span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>9. MySQL存储过程的基本函数</strong></p><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(1).字符串类**
 \`CHARSET(str)\`
 返回字串字符集

\`CONCAT (string2 [,... ])\`
 连接字串

\`INSTR (string ,substring )\`
 返回substring首次在string中出现的位置,不存在返回0

\`LCASE (string2 )\`
 转换成小写

\`LEFT (string2 ,length )\`
 从string2中的左边起取length个字符

\`LENGTH (string )\`
 string长度

\`LOAD_FILE (file_name )\`
 从文件读取内容

\`LOCATE (substring , string [,start_position ] )\`
 同INSTR,但可指定开始位置

\`LPAD (string2 ,length ,pad )\`
 重复用pad加在string开头,直到字串长度为lengthLTRIM (string2 )

去除前端空格
 \`REPEAT (string2 ,count )\`
 重复count次

\`REPLACE (str ,search_str ,replace_str )\`
 在str中用replace_str替换search_str

\`RPAD (string2 ,length ,pad)\`
 在str后用pad补充,直到长度为lengthRTRIM (string2 )
 去除后端空格

\`STRCMP (string1 ,string2 )\`
 逐字符比较两字串大小,
 \`SUBSTRING (str , position [,length ])\`
 从str的position开始,取length个字符,注：mysql中处理字符串时，默认第一个字符下标为1，即参数position必须大于等于1



\`\`\`sql
1.  mysql&gt; select substring(&#39;abcd&#39;,0,2);  
2.  +-----------------------+  
3.  | substring(&#39;abcd&#39;,0,2) |  
4.  +-----------------------+  
5.  |                       |  
6.  +-----------------------+  
7.  1 row in set (0.00 sec)  
8.   
9.  mysql&gt; select substring(&#39;abcd&#39;,1,2);  
10.+-----------------------+  
11.| substring(&#39;abcd&#39;,1,2) |  
12.+-----------------------+  
13.|     ab                |  
14.+-----------------------+  
15.1 row in set (0.02 sec)  
\`\`\`

\`TRIM([[BOTH|LEADING|TRAILING][padding] FROM]string2)\`
 去除指定位置的指定字符

\`UCASE (string2 )\`
 转换成大写

\`RIGHT(string2,length)\`
 取string2最后length个字符

\`SPACE(count)\`
 生成count个空格

**(2).数学类**
 \`ABS (number2 )\`
 绝对值

\`BIN (decimal_number )\`
 十进制转二进制

\`CEILING (number2 )\`
 向上取整

\`CONV(number2,from_base,to_base)\`
 进制转换

\`FLOOR (number2 )\`
 向下取整

\`FORMAT (number,decimal_places )\`
 保留小数位数

\`HEX (DecimalNumber )\`
 转十六进制注：HEX()中可传入字符串，则返回其ASC-11码，如HEX(&#39;DEF&#39;)返回4142143也可以传入十进制整数，返回其十六进制编码，如HEX(25)返回19

\`LEAST (number , number2 [,..])\`
 求最小值

\`MOD (numerator ,denominator )\`
 求余

\`POWER (number ,power )\`
 求指数

\`RAND([seed])\`
 随机数

\`ROUND (number [,decimals ])\`
 四舍五入,decimals为小数位数]
 注：返回类型并非均为整数，如：(1)默认变为整形值



\`\`\`csharp
1.  mysql&gt; select round(1.23);  
2.  +-------------+  
3.  | round(1.23) |  
4.  +-------------+  
5.  |           1 |  
6.  +-------------+  
7.  1 row in set (0.00 sec)  
8.   
9.  mysql&gt; select round(1.56);  
10.+-------------+  
11.| round(1.56) |  
12.+-------------+  
13.|           2 |  
14.+-------------+  
15.1 row in set (0.00 sec) 
\`\`\`

(2)可以设定小数位数，返回浮点型数据



\`\`\`csharp
1.  mysql&gt; select round(1.567,2);  
2.  +----------------+  
3.  | round(1.567,2) |  
4.  +----------------+  
5.  |           1.57 |  
6.  +----------------+  
7.  1 row in set (0.00 sec) 
SIGN (number2 ) //
\`\`\`

------

**(3).日期时间类**
 \`ADDTIME (date2 ,time_interval )\`
 将time_interval加到date2

\`CONVERT_TZ (datetime2 ,fromTZ ,toTZ )\`
 转换时区

\`CURRENT_DATE ( )\`
 当前日期

\`CURRENT_TIME ( )\`
 当前时间

\`CURRENT_TIMESTAMP ( )\`
 当前时间戳

\`DATE (datetime )\`
 返回datetime的日期部分

\`DATE_ADD (date2 , INTERVAL d_value d_type )\`
 在date2中加上日期或时间

\`DATE_FORMAT (datetime ,FormatCodes )\`
 使用formatcodes格式显示datetime

\`DATE_SUB (date2 , INTERVAL d_value d_type )\`
 在date2上减去一个时间

\`DATEDIFF (date1 ,date2 )\`
 两个日期差

\`DAY (date )\`
 返回日期的天

\`DAYNAME (date )\`
 英文星期

\`DAYOFWEEK (date )\`
 星期(1-7) ,1为星期天

\`DAYOFYEAR (date )\`
 一年中的第几天

\`EXTRACT (interval_name FROM date )\`
 从date中提取日期的指定部分

\`MAKEDATE (year ,day )\`
 给出年及年中的第几天,生成日期串

\`MAKETIME (hour ,minute ,second )\`
 生成时间串

\`MONTHNAME (date )\`
 英文月份名NOW ( )
 当前时间

\`SEC_TO_TIME (seconds )\`
 秒数转成时间

\`STR_TO_DATE (string ,format )\`
 字串转成时间,以format格式显示

\`TIMEDIFF (datetime1 ,datetime2 )\`
 两个时间差

\`TIME_TO_SEC (time )\`
 时间转秒数]

\`WEEK (date_time [,start_of_week ])\`
 第几周

\`YEAR (datetime )\`
 年份

\`DAYOFMONTH(datetime)\`
 月的第几天

\`HOUR(datetime)\`
 小时

\`LAST_DAY(date)\`
 date的月的最后日期

\`MICROSECOND(datetime)\`
 微秒

\`MONTH(datetime)\`
 月

\`MINUTE(datetime)\`
 分返回符号,正负或0

SQRT(number2)

开平方
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,87),t=[o];function l(r,c){return n(),a("div",null,t)}const d=s(p,[["render",l],["__file","2.html.vue"]]);export{d as default};
