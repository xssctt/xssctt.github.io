import{_ as t,V as e,W as n,$ as o}from"./framework-56e099cb.js";const u={},s=o(`<pre><code>@Component  //注册为Bean
public class TestListener {
//---------------------------------------------------------------------------------

@RabbitListener(queues = &quot;hq&quot;)   //定义此方法为队列yyds的监听器，一旦监听到新的消息，就会接受并处理
public void test(Message message){
    System.out.println(&quot;test: &quot;+new String(message.getBody()));
}


//---------------------------------------------------------------------------------
</code></pre><p>// @RabbitListener(queues = &quot;hq&quot;) //定义此方法为队列yyds的监听器，一旦监听到新的消息，就会接受并处理 // public void test1(String message){ // System.out.println(&quot;test1: &quot;+message); // }</p><pre><code>//---------------------------------------------------------------------------------


@RabbitListener(queues = &quot;xss&quot;)          //监听并回答
public String receiver(String data){
    System.out.println(&quot;一号消息队列监听器 &quot;+data);
    return &quot;收到!&quot;;
}






//---------------------------------------------------------------------------------



@RabbitListener(queues = &quot;xss&quot;,containerFactory = &quot;listenerContainer&quot;)          //监听并回答
public String receiver1(String data){
    System.out.println(&quot;1号消息队列监听器 &quot;+data);
    return &quot;收到!&quot;;
}

@RabbitListener(queues = &quot;xss&quot;,containerFactory = &quot;listenerContainer&quot;)          //监听并回答
public String receiver2(String data){
    System.out.println(&quot;2号消息队列监听器 &quot;+data);
    return &quot;收到!&quot;;
}
//---------------------------------------------------------------------------------






@RabbitListener(queues = &quot;xss&quot;,containerFactory = &quot;listenerContainer&quot;,concurrency = &quot;10&quot;)  //concurrency  线程  containerFactory指定队列 拿去数据
public String receiver3(String data){
    System.out.println(&quot;3号消息队列监听器 &quot;+data);
    return &quot;收到!&quot;;
}
//---------------------------------------------------------------------------------
</code></pre><p>//发布订阅模式 监听不同的队列再同一个交换机</p><pre><code>@RabbitListener(queues = &quot;xss1&quot;)   //定义此方法为队列yyds的监听器，一旦监听到新的消息，就会接受并处理
public void demo1(String message){
    System.out.println(&quot;demo1: &quot;+message);
}


@RabbitListener(queues = &quot;xss2&quot;)   //定义此方法为队列yyds的监听器，一旦监听到新的消息，就会接受并处理
public void demo2(String message){
    System.out.println(&quot;demo2: &quot;+message);
}

//---------------------------------------------------------------------------------


//路由模式  监听同一个队列 不同routing key  再同一个交换机

@RabbitListener(queues = &quot;hq1&quot;)   //定义此方法为队列yyds的监听器，一旦监听到新的消息，就会接受并处理
public void demo3(String message){
    System.out.println(&quot;demo1: &quot;+message);
}




//---------------------------------------------------------------------------------
</code></pre><p>// // @RabbitListener(queues = &quot;xss&quot;,messageConverter = &quot;jacksonConverter&quot;) //json 处理消息 // public void test2(User user){ // System.out.println(user); // } //---------------------------------------------------------------------------------</p><pre><code>@RabbitListener(queues = &quot;dl-xss&quot;, messageConverter = &quot;jacksonConverter&quot;)   // 监听死信队列的消息  json 处理
public void receiver(User user){
    System.out.println(&quot;死信队列的消息&quot;+user);
}

//---------------------------------------------------------------------------------
</code></pre><p>}</p>`,8),r=[s];function i(q,a){return e(),n("div",null,r)}const p=t(u,[["render",i],["__file","7.html.vue"]]);export{p as default};
