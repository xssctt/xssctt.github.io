import{_ as e,V as t,W as o,X as n}from"./framework-56e099cb.js";const a={},c=n("p",null,"public class demo { public static void main(String[] args) throws IOException, TimeoutException {",-1),s=n("pre",null,[n("code",null,`    publish1();
    publish2();

    //consume();
}


private static void publish1() throws IOException, TimeoutException {
    //创建连接工厂
    ConnectionFactory factory = new ConnectionFactory();

    factory.setUsername("admin");
    factory.setPassword("admin123");

    //设置 RabbitMQ 地址
    factory.setHost("192.168.80.131");
    factory.setPort(5672);

    //建立到代理服务器到连接
    Connection conn = factory.newConnection();

    //获得信道
    Channel channel = conn.createChannel();

    //声明队列。
    //参数1：队列名
    //参数2：持久化 （true表示是，队列将在服务器重启时依旧存在）
    //参数3：独占队列（创建者可以使用的私有队列，断开后自动删除）
    //参数4：当所有消费者客户端连接断开时是否自动删除队列
    //参数5：队列的其他参数
    channel.queueDeclare("msg", true, false, false, null);

    //发布消息
    String message = "hello";

    // 基本发布消息
    // 第一个参数为交换机名称(空)
    // 第二个参数为队列映射的路由key(直接使用队列名)
    // 第三个参数为消息的其他属性、
    // 第四个参数为发送信息的主体
    channel.basicPublish("", "msg", MessageProperties.MINIMAL_PERSISTENT_BASIC, message.getBytes(StandardCharsets.UTF_8));

    channel.close();
    conn.close();
}

private static void publish2() throws IOException, TimeoutException {
    //创建连接工厂
    ConnectionFactory factory = new ConnectionFactory();

    factory.setUsername("admin");
    factory.setPassword("admin123");

    //设置 RabbitMQ 地址
    factory.setHost("localhost");
    factory.setPort(5672);

    //建立到代理服务器到连接
    Connection conn = factory.newConnection();

    //获得信道
    Channel channel = conn.createChannel();

    //声明交换器
    String exchangeName = "/chat";
    channel.exchangeDeclare(exchangeName, "direct", true);


    //声明队列。
    //参数1：队列名
    //参数2：持久化 （true表示是，队列将在服务器重启时依旧存在）
    //参数3：独占队列（创建者可以使用的私有队列，断开后自动删除）
    //参数4：当所有消费者客户端连接断开时是否自动删除队列
    //参数5：队列的其他参数
    channel.queueDeclare("msg", true, false, false, null);

    //队列绑定到交换机
    String routingKey = "tag1";
    channel.queueBind("msg", "/chat", routingKey);


    //发布消息
    String message = "hello";


    // 基本发布消息
    // 第一个参数为交换机名称、
    // 第二个参数为队列映射的路由key、
    // 第三个参数为消息的其他属性 指定持久化 (创建队列也需要配置持久化)
    // 第四个参数为发送信息的主体
    channel.basicPublish("/chat", "tag1", MessageProperties.MINIMAL_PERSISTENT_BASIC, message.getBytes(StandardCharsets.UTF_8));


    channel.close();
    conn.close();
}

private static void consume() throws IOException, TimeoutException {
    ConnectionFactory factory = new ConnectionFactory();
    factory.setUsername("admin");
    factory.setPassword("admin123");

    //设置 RabbitMQ 地址
    factory.setHost("localhost");
    factory.setPort(5672);

    //建立到代理服务器到连接
    Connection conn = factory.newConnection();

    //获得信道
    Channel channel = conn.createChannel();

    //声明队列
    channel.queueDeclare("msg", true, false, false, null);

    while (true) {
        //消费消息
        boolean autoAck = false;
        String consumerTag = "";
        channel.basicConsume("msg", autoAck, consumerTag, new DefaultConsumer(channel) {
            @Override
            public void handleDelivery(String consumerTag,
                                       Envelope envelope,
                                       AMQP.BasicProperties properties,
                                       byte[] body) throws IOException {

                String routingKey = envelope.getRoutingKey();
                String contentType = properties.getContentType();

                System.out.println("消费的路由键：" + routingKey);
                System.out.println("消费的内容类型：" + contentType);

                System.out.println("消费的消息体内容：");
                String bodyStr = new String(body, "UTF-8");
                System.out.println(bodyStr);

                sleep(1000);

                //确认消息
                long deliveryTag = envelope.getDeliveryTag();
                channel.basicAck(deliveryTag, false);

            }
        });
    }
}

private static void sleep(long t) {
    try {
        Thread.sleep(t);
    } catch (InterruptedException e) {
        e.printStackTrace();
    }
}
`)],-1),r=n("p",null,"}",-1),i=[c,s,r];function l(u,h){return t(),o("div",null,i)}const y=e(a,[["render",l],["__file","2.html.vue"]]);export{y as default};
