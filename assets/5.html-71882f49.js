import{_ as e,V as t,W as r,X as n}from"./framework-56e099cb.js";const a={},o=n("pre",null,[n("code",null,`@SpringBootTest
class Springboot3ApplicationTests {
@Resource
DataSource dataSource;

@Resource
IUserService userService;

@Resource
RedisTemplate<String,Object> redisTemplate;

// spring MQ --------------------------------------------

//RabbitTemplate为我们封装了大量的RabbitMQ操作，已经由Starter提供，因此直接注入使用即可
@Resource
RabbitTemplate template;

@Test
void publisher() {
    //使用convertAndSend方法一步到位，参数基本和之前是一样的
    //最后一个消息本体可以是Object类型，真是大大的方便
    template.convertAndSend("amq.direct", "my-xss", "Hello World!");
}

@Test
void publisher1() {
    //会等待消费者消费然后返回响应结果
    Object res = template.convertSendAndReceive("amq.direct", "my-xss", "Hello World!");
    System.out.println("收到消费者响应："+res);
}

@Test
void publisher2() {
    //会等待消费者消费然后返回响应结果
    Object res = template.convertSendAndReceive("amq.direct", "my-xss", new User());
    System.out.println("收到消费者响应："+res);
}
`)],-1),s=n("p",null,"// java ---------------------",-1),c=n("pre",null,[n("code",null,`@Test
void contextLoadMQpublisher() {

    //使用ConnectionFactory来创建连接
    ConnectionFactory factory = new ConnectionFactory();

    //设定连接信息，基操
    factory.setHost("192.168.80.131");
    factory.setPort(5672);  //注意这里写5672，是amqp协议端口
    factory.setUsername("admin");
    factory.setPassword("admin123");
    factory.setVirtualHost("/test");

    //创建连接
    try (Connection connection = factory.newConnection();
         Channel channel = connection.createChannel() ){  //通过Connection创建新的Channel
            //声明队列，如果此队列不存在，会自动创建
            channel.queueDeclare("xss", true, false, false, null);
            //将队列绑定到交换机
            channel.queueBind("xss", "amq.direct", "my-xss");
            //发布新的消息，注意消息需要转换为byte[]
            channel.basicPublish("amq.direct", "my-xss", null, "Hello World!".getBytes());

    }catch (Exception e){
        e.printStackTrace();
    }
}


@Test
void contextLoadMQRabbitListener() throws IOException, TimeoutException {
    ConnectionFactory factory = new ConnectionFactory();
    factory.setHost("192.168.80.131");
    factory.setPort(5672);
    factory.setUsername("admin");
    factory.setPassword("admin123");
    factory.setVirtualHost("/test");

    //这里不使用try-with-resource，因为消费者是一直等待新的消息到来，然后按照
    //我们设定的逻辑进行处理，所以这里不能在定义完成之后就关闭连接
    Connection connection = factory.newConnection();
    Channel channel = connection.createChannel();

    //创建一个基本的消费者
    channel.basicConsume("xss", false, (s, delivery) -> {

        System.out.println(new String(delivery.getBody()));

        //basicAck是确认应答，第一个参数是当前的消息标签，后面的参数是
        //是否批量处理消息队列中所有的消息，如果为false表示只处理当前消息
        //channel.basicAck(delivery.getEnvelope().getDeliveryTag(), false);

        //basicNack是拒绝应答，最后一个参数表示是否将当前消息放回队列，如果
        //为false，那么消息就会被丢弃
        channel.basicNack(delivery.getEnvelope().getDeliveryTag(), false, true);


        //跟上面一样，最后一个参数为false，只不过这里省了
        //channel.basicReject(delivery.getEnvelope().getDeliveryTag(), false);


    }, s -> {});
}













@Test
void contextLoadp() {
    LambdaQueryWrapper<User> userWrapper=new LambdaQueryWrapper<>();
    userWrapper.eq(User::getId,1);
    System.out.println(userService.getOne(userWrapper));
}



@Test
void contextLoadsp() {

    FastAutoGenerator
            .create(new DataSourceConfig.Builder(dataSource))
            .globalConfig(builder -> {
                builder.author("lbw");              //作者信息，一会会变成注释
                builder.commentDate("2024-01-01");  //日期信息，一会会变成注释
                builder.outputDir("src/main/java"); //输出目录设置为当前项目的目录
            })
            //打包设置，这里设置一下包名就行，注意跟我们项目包名设置为一致的
            .packageConfig(builder -> builder.parent("com.example"))
            .strategyConfig(builder -> {
                //设置为所有Mapper添加@Mapper注解
                builder
                        .mapperBuilder()
                        .mapperAnnotation(Mapper.class)
                        .build();
            })
            .execute();

}
`)],-1),i=n("p",null,"}",-1),l=[o,s,c,i];function d(u,p){return t(),r("div",null,l)}const y=e(a,[["render",d],["__file","5.html.vue"]]);export{y as default};
