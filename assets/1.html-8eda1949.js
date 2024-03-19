import{_ as e,F as o,V as c,W as i,X as n,Y as s,Z as t,$ as p}from"./framework-56e099cb.js";const l={},u=n("p",null,"消息队列MQ",-1),r=n("p",null,"常见的消息队列有：",-1),k=n("ul",null,[n("li",null,"ActiveMQ"),n("li",null,"RabbitMQ"),n("li",null,"Kafka"),n("li",null,"RocketMQ")],-1),d={href:"https://www.rabbitmq.com/",target:"_blank",rel:"noopener noreferrer"},v=p(`<p>安装方式，可以选择 Docker 安装，或 二进制包安装</p><p>如果用 Docker 安装：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>$ docker run <span class="token operator">-</span>d <span class="token operator">--</span>restart<span class="token operator">=</span>always <span class="token operator">-</span>m 2g <span class="token operator">--</span>memory<span class="token operator">-</span>swap 2g <span class="token operator">--</span>cpus <span class="token number">1.1</span> \\
<span class="token operator">-</span>v $<span class="token constant">PWD</span><span class="token operator">/</span>rabbitmq<span class="token operator">-</span>data<span class="token operator">:</span><span class="token operator">/</span><span class="token keyword">var</span><span class="token operator">/</span>lib<span class="token operator">/</span>rabbitmq <span class="token operator">-</span>v $<span class="token constant">PWD</span><span class="token operator">/</span>log<span class="token operator">:</span><span class="token operator">/</span><span class="token keyword">var</span><span class="token operator">/</span>log<span class="token operator">/</span>rabbitmq \\
<span class="token operator">--</span>hostname rabbitmq01 <span class="token operator">--</span>name rabbitmq \\
<span class="token operator">-</span>e <span class="token constant">RABBITMQ_DEFAULT_USER</span><span class="token operator">=</span>admin <span class="token operator">-</span>e <span class="token constant">RABBITMQ_DEFAULT_PASS</span><span class="token operator">=</span>admin123 \\
<span class="token operator">-</span>p <span class="token number">5672</span><span class="token operator">:</span><span class="token number">5672</span> <span class="token operator">-</span>p <span class="token number">15672</span><span class="token operator">:</span><span class="token number">15672</span> <span class="token operator">-</span>p <span class="token number">15692</span><span class="token operator">:</span><span class="token number">15692</span> <span class="token literal-property property">rabbitmq</span><span class="token operator">:</span><span class="token number">3.9</span><span class="token number">.7</span><span class="token operator">-</span>management
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果使用二进制包安装，Ubuntu 下安装步骤如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code># 更新源
$ sudo apt<span class="token operator">-</span><span class="token keyword">get</span> update

# 安装 RabbitMQ
$ sudo apt<span class="token operator">-</span><span class="token keyword">get</span> install rabbitmq<span class="token operator">-</span>server

# 添加 admin 用户， 密码设置为 admin123
$ sudo rabbitmqctl add_user admin admin123

# 将 admin 用户设置为管理员角色
$ sudo rabbitmqctl set_user_tags admin administrator

# 设置 admin 赋权
$ sudo rabbitmqctl set_permissions <span class="token operator">-</span>p <span class="token operator">/</span> admin <span class="token string">&#39;.*&#39;</span> <span class="token string">&#39;.*&#39;</span> <span class="token string">&#39;.*&#39;</span>

# 启用图形管理界面
$ sudo rabbitmq<span class="token operator">-</span>plugins enable rabbitmq_management
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装完成后，管理界面在 15672 端口，浏览器访问</p>`,6),m={href:"http://your-rabbitmq-server-ip:15672",target:"_blank",rel:"noopener noreferrer"},b=p(`<p>服务管理命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo service rabbitmq-server stop
sudo service rabbitmq-server start
sudo service rabbitmq-server restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Java 中调用，添加 pom 依赖</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>dependency<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>groupId<span class="token operator">&gt;</span>com<span class="token punctuation">.</span>rabbitmq<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>artifactId<span class="token operator">&gt;</span>amqp<span class="token operator">-</span>client<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>version<span class="token operator">&gt;</span><span class="token number">5.10</span><span class="token number">.0</span><span class="token operator">&lt;</span><span class="token operator">/</span>version<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>dependency<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Java 代码如下</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> com<span class="token punctuation">.</span>rabbitmq<span class="token punctuation">.</span>client<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> java<span class="token punctuation">.</span>io<span class="token punctuation">.</span>IOException<span class="token punctuation">;</span>
<span class="token keyword">import</span> java<span class="token punctuation">.</span>nio<span class="token punctuation">.</span>charset<span class="token punctuation">.</span>StandardCharsets<span class="token punctuation">;</span>
<span class="token keyword">import</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span>TimeoutException<span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span>String<span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> throws IOException<span class="token punctuation">,</span> TimeoutException <span class="token punctuation">{</span>

        <span class="token function">publish1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">publish2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//consume();</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">publish1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> throws IOException<span class="token punctuation">,</span> TimeoutException <span class="token punctuation">{</span>
        <span class="token comment">//创建连接工厂</span>
        ConnectionFactory factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConnectionFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        factory<span class="token punctuation">.</span><span class="token function">setUsername</span><span class="token punctuation">(</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        factory<span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token string">&quot;admin123&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//设置 RabbitMQ 地址</span>
        factory<span class="token punctuation">.</span><span class="token function">setHost</span><span class="token punctuation">(</span><span class="token string">&quot;localhost&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        factory<span class="token punctuation">.</span><span class="token function">setPort</span><span class="token punctuation">(</span><span class="token number">5672</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//建立到代理服务器到连接</span>
        Connection conn <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">newConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//获得信道</span>
        Channel channel <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">createChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//声明队列。</span>
        <span class="token comment">//参数1：队列名</span>
        <span class="token comment">//参数2：持久化 （true表示是，队列将在服务器重启时依旧存在）</span>
        <span class="token comment">//参数3：独占队列（创建者可以使用的私有队列，断开后自动删除）</span>
        <span class="token comment">//参数4：当所有消费者客户端连接断开时是否自动删除队列</span>
        <span class="token comment">//参数5：队列的其他参数</span>
        channel<span class="token punctuation">.</span><span class="token function">queueDeclare</span><span class="token punctuation">(</span><span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//发布消息</span>
        String message <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>

        <span class="token comment">// 基本发布消息</span>
        <span class="token comment">// 第一个参数为交换机名称(空)</span>
        <span class="token comment">// 第二个参数为队列映射的路由key(直接使用队列名)</span>
        <span class="token comment">// 第三个参数为消息的其他属性、</span>
        <span class="token comment">// 第四个参数为发送信息的主体</span>
        channel<span class="token punctuation">.</span><span class="token function">basicPublish</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span> MessageProperties<span class="token punctuation">.</span><span class="token constant">MINIMAL_PERSISTENT_BASIC</span><span class="token punctuation">,</span> message<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span>StandardCharsets<span class="token punctuation">.</span><span class="token constant">UTF_8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        channel<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        conn<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">publish2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> throws IOException<span class="token punctuation">,</span> TimeoutException <span class="token punctuation">{</span>
        <span class="token comment">//创建连接工厂</span>
        ConnectionFactory factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConnectionFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        factory<span class="token punctuation">.</span><span class="token function">setUsername</span><span class="token punctuation">(</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        factory<span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token string">&quot;admin123&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//设置 RabbitMQ 地址</span>
        factory<span class="token punctuation">.</span><span class="token function">setHost</span><span class="token punctuation">(</span><span class="token string">&quot;localhost&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        factory<span class="token punctuation">.</span><span class="token function">setPort</span><span class="token punctuation">(</span><span class="token number">5672</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//建立到代理服务器到连接</span>
        Connection conn <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">newConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//获得信道</span>
        Channel channel <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">createChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//声明交换器</span>
        String exchangeName <span class="token operator">=</span> <span class="token string">&quot;/chat&quot;</span><span class="token punctuation">;</span>
        channel<span class="token punctuation">.</span><span class="token function">exchangeDeclare</span><span class="token punctuation">(</span>exchangeName<span class="token punctuation">,</span> <span class="token string">&quot;direct&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token comment">//声明队列。</span>
        <span class="token comment">//参数1：队列名</span>
        <span class="token comment">//参数2：持久化 （true表示是，队列将在服务器重启时依旧存在）</span>
        <span class="token comment">//参数3：独占队列（创建者可以使用的私有队列，断开后自动删除）</span>
        <span class="token comment">//参数4：当所有消费者客户端连接断开时是否自动删除队列</span>
        <span class="token comment">//参数5：队列的其他参数</span>
        channel<span class="token punctuation">.</span><span class="token function">queueDeclare</span><span class="token punctuation">(</span><span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//队列绑定到交换机</span>
        String routingKey <span class="token operator">=</span> <span class="token string">&quot;tag1&quot;</span><span class="token punctuation">;</span>
        channel<span class="token punctuation">.</span><span class="token function">queueBind</span><span class="token punctuation">(</span><span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/chat&quot;</span><span class="token punctuation">,</span> routingKey<span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token comment">//发布消息</span>
        String message <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>


        <span class="token comment">// 基本发布消息</span>
        <span class="token comment">// 第一个参数为交换机名称、</span>
        <span class="token comment">// 第二个参数为队列映射的路由key、</span>
        <span class="token comment">// 第三个参数为消息的其他属性 指定持久化 (创建队列也需要配置持久化)</span>
        <span class="token comment">// 第四个参数为发送信息的主体</span>
        channel<span class="token punctuation">.</span><span class="token function">basicPublish</span><span class="token punctuation">(</span><span class="token string">&quot;/chat&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;tag1&quot;</span><span class="token punctuation">,</span> MessageProperties<span class="token punctuation">.</span><span class="token constant">MINIMAL_PERSISTENT_BASIC</span><span class="token punctuation">,</span> message<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span>StandardCharsets<span class="token punctuation">.</span><span class="token constant">UTF_8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        channel<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        conn<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">consume</span><span class="token punctuation">(</span><span class="token punctuation">)</span> throws IOException<span class="token punctuation">,</span> TimeoutException <span class="token punctuation">{</span>
        ConnectionFactory factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConnectionFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        factory<span class="token punctuation">.</span><span class="token function">setUsername</span><span class="token punctuation">(</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        factory<span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token string">&quot;admin123&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//设置 RabbitMQ 地址</span>
        factory<span class="token punctuation">.</span><span class="token function">setHost</span><span class="token punctuation">(</span><span class="token string">&quot;localhost&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        factory<span class="token punctuation">.</span><span class="token function">setPort</span><span class="token punctuation">(</span><span class="token number">5672</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//建立到代理服务器到连接</span>
        Connection conn <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">newConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//获得信道</span>
        Channel channel <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">createChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//声明队列</span>
        channel<span class="token punctuation">.</span><span class="token function">queueDeclare</span><span class="token punctuation">(</span><span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//消费消息</span>
            boolean autoAck <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            String consumerTag <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
            channel<span class="token punctuation">.</span><span class="token function">basicConsume</span><span class="token punctuation">(</span><span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span> autoAck<span class="token punctuation">,</span> consumerTag<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">DefaultConsumer</span><span class="token punctuation">(</span>channel<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                @Override
                <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">handleDelivery</span><span class="token punctuation">(</span>String consumerTag<span class="token punctuation">,</span>
                                           Envelope envelope<span class="token punctuation">,</span>
                                           <span class="token constant">AMQP</span><span class="token punctuation">.</span>BasicProperties properties<span class="token punctuation">,</span>
                                           byte<span class="token punctuation">[</span><span class="token punctuation">]</span> body<span class="token punctuation">)</span> throws IOException <span class="token punctuation">{</span>

                    String routingKey <span class="token operator">=</span> envelope<span class="token punctuation">.</span><span class="token function">getRoutingKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    String contentType <span class="token operator">=</span> properties<span class="token punctuation">.</span><span class="token function">getContentType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                    System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;消费的路由键：&quot;</span> <span class="token operator">+</span> routingKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;消费的内容类型：&quot;</span> <span class="token operator">+</span> contentType<span class="token punctuation">)</span><span class="token punctuation">;</span>

                    System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;消费的消息体内容：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    String bodyStr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>body<span class="token punctuation">,</span> <span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>bodyStr<span class="token punctuation">)</span><span class="token punctuation">;</span>

                    <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                    <span class="token comment">//确认消息</span>
                    long deliveryTag <span class="token operator">=</span> envelope<span class="token punctuation">.</span><span class="token function">getDeliveryTag</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    channel<span class="token punctuation">.</span><span class="token function">basicAck</span><span class="token punctuation">(</span>deliveryTag<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token parameter">long t</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            Thread<span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>InterruptedException e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function g(y,f){const a=o("ExternalLinkIcon");return c(),i("div",null,[u,r,k,n("p",null,[s("接下来，我们主要掌握 RabbitMQ，官方文档 "),n("a",d,[s("https://www.rabbitmq.com/"),t(a)])]),v,n("p",null,[n("a",m,[s("http://your-rabbitmq-server-ip:15672"),t(a)])]),b])}const h=e(l,[["render",g],["__file","1.html.vue"]]);export{h as default};
