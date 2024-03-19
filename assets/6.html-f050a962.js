import{_ as e,V as u,W as i,X as n}from"./framework-56e099cb.js";const a={},t=n("pre",null,[n("code",null,`@Configuration
public class RabbitConfiguration {
@Resource
private CachingConnectionFactory connectionFactory;


//---------------------------------------------------------------------------------

@Bean(name = "listenerContainer")
public SimpleRabbitListenerContainerFactory listenerContainer() {
    SimpleRabbitListenerContainerFactory factory = new SimpleRabbitListenerContainerFactory();
    factory.setConnectionFactory(connectionFactory);
    factory.setPrefetchCount(1);   //将PrefetchCount设定为1表示一次只能取一个
    return factory;
}

//---------------------------------------------------------------------------------



@Bean("directExchange")  //定义交换机Bean，可以很多个
public Exchange directExchange(){
    return ExchangeBuilder.directExchange("amq.direct").build();
}

//---------------------------------------------------------------------------------

@Bean("directDlExchange")  //创建一个新的死信交换机
public Exchange directDlExchange(){
    return ExchangeBuilder.directExchange("dlx.direct").build();
}

//---------------------------------------------------------------------------------

//发布订阅 fanoutExchange

@Bean("fanoutExchange")
public Exchange fanoutExchange(){         //注意这里是fanoutExchange   路由

    return ExchangeBuilder.fanoutExchange("amq.fanout").build();
}


//---------------------------------------------------------------------------------


@Bean("xssQueue")     //定义消息队列
public Queue queue(){
    return QueueBuilder
            .nonDurable("xss")   //非持久化类型 //.durable() 持久化类型
            .deadLetterExchange("dlx.direct")   //指定死信交换机
            .deadLetterRoutingKey("dl-xss")   //指定死信RoutingKey
            .ttl(5000)            //ttl  多久不处理进入死信队列
            .maxLength(10)          ///
            .build();
}

//---------------------------------------------------------------------------------

@Bean("xssQueue1")     //定义消息队列
public Queue queue1(){
    return QueueBuilder
            .nonDurable("xss1")   //非持久化类型 //.durable() 持久化类型
            .deadLetterExchange("dlx.direct")   //指定死信交换机
            .deadLetterRoutingKey("dl-xss")   //指定死信RoutingKey
            .ttl(5000)            //ttl  多久不处理进入死信队列
            .maxLength(10)          ///
            .build();
}


@Bean("xssQueue2")     //定义消息队列
public Queue queue2(){
    return QueueBuilder
            .nonDurable("xss2")   //非持久化类型 //.durable() 持久化类型
            .deadLetterExchange("dlx.direct")   //指定死信交换机
            .deadLetterRoutingKey("dl-xss")   //指定死信RoutingKey
            .ttl(5000)            //ttl  多久不处理进入死信队列
            .maxLength(10)          ///
            .build();
}

//---------------------------------------------------------------------------------



@Bean("xssDlQueue")   //创建一个新的死信队列
public Queue dlQueue(){
    return QueueBuilder
            .nonDurable("dl-xss")
            .build();
}


//---------------------------------------------------------------------------------




@Bean("hqQueue1")
public Queue hqQueue1(){
    return QueueBuilder.nonDurable("hq1").build();    //  同一个队列
}

@Bean("hqQueue2")
public Queue hqQueue2(){
    return QueueBuilder.nonDurable("hq1").build();      //  同一个队列
}


//---------------------------------------------------------------------------------



@Bean("binding")
public Binding binding(@Qualifier("directExchange") Exchange exchange,   //普通交换机 directExchange
                       @Qualifier("xssQueue") Queue queue){
    //将我们刚刚定义的交换机和队列进行绑定
    return BindingBuilder
            .bind(queue)   //绑定队列
            .to(exchange)  //到交换机
            .with("my-xss")   //使用自定义的routingKey
            .noargs();
}


//---------------------------------------------------------------------------------



@Bean("dlBinding")   //死信交换机和死信队列进绑定
public Binding dlBinding(@Qualifier("directDlExchange") Exchange exchange,    //死信交换机 directDlExchange
                         @Qualifier("xssDlQueue") Queue queue){
    return BindingBuilder
            .bind(queue)
            .to(exchange)
            .with("dl-xss")         //绑定 死信队列
            .noargs();
}


//---------------------------------------------------------------------------------




@Bean("binding")
public Binding bindingxss1(@Qualifier("fanoutExchange") Exchange exchange,
                        @Qualifier("xssQueue1") Queue queue){
    return BindingBuilder
            .bind(queue)
            .to(exchange)
            .with("xss1")             //不同队列 绑定同一个交换机
            .noargs();
}


@Bean("binding2")
public Binding bindingxss2(@Qualifier("fanoutExchange") Exchange exchange,
                        @Qualifier("xssQueue2") Queue queue){
    return BindingBuilder
            .bind(queue)
            .to(exchange)
            .with("xss2")                //不同队列 绑定同一个交换机
            .noargs();
}





//---------------------------------------------------------------------------------





@Bean("binding")
public Binding binding1(@Qualifier("fanoutExchange") Exchange exchange,
                        @Qualifier("hqQueue1") Queue queue){
    return BindingBuilder
            .bind(queue)
            .to(exchange)
            .with("hq1")             //同一个队列 绑定同一个交换机  routing key 不同
            .noargs();
}


@Bean("binding2")
public Binding binding2(@Qualifier("fanoutExchange") Exchange exchange,
                        @Qualifier("hqQueue2") Queue queue){
    return BindingBuilder
            .bind(queue)
            .to(exchange)
            .with("hq2")                //同一个队列 绑定同一个交换机  routing key 不同
            .noargs();
}


//---------------------------------------------------------------------------------






@Bean("jacksonConverter")   //直接创建一个用于JSON转换的Bean
public Jackson2JsonMessageConverter converter(){
    return new Jackson2JsonMessageConverter();
}



//---------------------------------------------------------------------------------
`)],-1),r=n("p",null,"}",-1),c=[t,r];function l(d,o){return u(),i("div",null,c)}const s=e(a,[["render",l],["__file","6.html.vue"]]);export{s as default};
