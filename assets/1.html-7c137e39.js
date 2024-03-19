import{_ as n,V as s,W as a,$ as p}from"./framework-56e099cb.js";const t={},e=p(`<hr><h1 id="orderinfoservice" tabindex="-1"><a class="header-anchor" href="#orderinfoservice" aria-hidden="true">#</a> OrderInfoService</h1><hr><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>javaclimb<span class="token punctuation">.</span>xshopping<span class="token punctuation">.</span>service</span><span class="token punctuation">;</span>


<span class="token keyword">import</span> <span class="token import"><span class="token namespace">cn<span class="token punctuation">.</span>hutool<span class="token punctuation">.</span>core<span class="token punctuation">.</span>date<span class="token punctuation">.</span></span><span class="token class-name">DateUtil</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">cn<span class="token punctuation">.</span>hutool<span class="token punctuation">.</span>core<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">RandomUtil</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>github<span class="token punctuation">.</span>pagehelper<span class="token punctuation">.</span></span><span class="token class-name">PageHelper</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>github<span class="token punctuation">.</span>pagehelper<span class="token punctuation">.</span></span><span class="token class-name">PageInfo</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>javaclimb<span class="token punctuation">.</span>xshopping<span class="token punctuation">.</span>common<span class="token punctuation">.</span></span><span class="token class-name">Common</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>javaclimb<span class="token punctuation">.</span>xshopping<span class="token punctuation">.</span>common<span class="token punctuation">.</span></span><span class="token class-name">ResultCode</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>javaclimb<span class="token punctuation">.</span>xshopping<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">GoodsInfo</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>javaclimb<span class="token punctuation">.</span>xshopping<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">OrderGoodsRel</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>javaclimb<span class="token punctuation">.</span>xshopping<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">OrderInfo</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>javaclimb<span class="token punctuation">.</span>xshopping<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">UserInfo</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>javaclimb<span class="token punctuation">.</span>xshopping<span class="token punctuation">.</span>exception<span class="token punctuation">.</span></span><span class="token class-name">CustomException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>javaclimb<span class="token punctuation">.</span>xshopping<span class="token punctuation">.</span>mapper<span class="token punctuation">.</span></span><span class="token class-name">OrderGoodsRelMapper</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>javaclimb<span class="token punctuation">.</span>xshopping<span class="token punctuation">.</span>mapper<span class="token punctuation">.</span></span><span class="token class-name">OrderInfoMapper</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Service</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>transaction<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Transactional</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Resource</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpServletRequest</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Date</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Map</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OrderInfoService</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Resource</span>
    <span class="token keyword">private</span> <span class="token class-name">UserInfoService</span> userInfoService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Resource</span>
    <span class="token keyword">private</span> <span class="token class-name">OrderInfoMapper</span> orderInfoMapper<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Resource</span>
    <span class="token keyword">private</span> <span class="token class-name">GoodsInfoService</span> goodsInfoService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Resource</span>
    <span class="token keyword">private</span> <span class="token class-name">CartInfoSevice</span> cartInfoSevice<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Resource</span>
    <span class="token keyword">private</span> <span class="token class-name">OrderGoodsRelMapper</span> orderGoodsRelMapper<span class="token punctuation">;</span>




    <span class="token doc-comment comment">/**
     * 下单
     *
     * 前端把订单商品列表返回后台orderInfo
     * orderInfo 存在用户id  后台获取用户信息
     * 修饰订单id 保存
     */</span>
    <span class="token comment">//spring管理sql事务 出错回滚数据</span>
    <span class="token annotation punctuation">@Transactional</span>
    <span class="token keyword">public</span> <span class="token class-name">OrderInfo</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">OrderInfo</span> orderInfo<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//1 生成订单信息 用户信息 放到orderOInfo</span>
        <span class="token class-name">Long</span> userId<span class="token operator">=</span>orderInfo<span class="token punctuation">.</span><span class="token function">getUserid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//d订单id 用户id+当前时间+流水号</span>
        <span class="token class-name">String</span> orderId<span class="token operator">=</span>userId<span class="token operator">+</span> <span class="token class-name">DateUtil</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&quot;yyyyMMddHHmm&quot;</span><span class="token punctuation">)</span><span class="token operator">+</span> <span class="token class-name">RandomUtil</span><span class="token punctuation">.</span><span class="token function">randomNumbers</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        orderInfo<span class="token punctuation">.</span><span class="token function">setOrderid</span><span class="token punctuation">(</span>orderId<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//用户相关</span>
        <span class="token comment">// 用户查到的数据放到订单信息表</span>
        <span class="token class-name">UserInfo</span> userInfo<span class="token operator">=</span>userInfoService<span class="token punctuation">.</span><span class="token function">findById</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//地址</span>
        orderInfo<span class="token punctuation">.</span><span class="token function">setLinkaddress</span><span class="token punctuation">(</span>userInfo<span class="token punctuation">.</span><span class="token function">getAddress</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//昵称</span>
        orderInfo<span class="token punctuation">.</span><span class="token function">setLinkman</span><span class="token punctuation">(</span>userInfo<span class="token punctuation">.</span><span class="token function">getNickname</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//电话</span>
        orderInfo<span class="token punctuation">.</span><span class="token function">setLinkphone</span><span class="token punctuation">(</span>userInfo<span class="token punctuation">.</span><span class="token function">getPhone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//2 保存订单表//订单创建时间</span>
        orderInfo<span class="token punctuation">.</span><span class="token function">setCreatetime</span><span class="token punctuation">(</span><span class="token class-name">DateUtil</span><span class="token punctuation">.</span><span class="token function">formatDateTime</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//保存</span>
        orderInfoMapper<span class="token punctuation">.</span><span class="token function">insertSelective</span><span class="token punctuation">(</span>orderInfo<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">OrderInfo</span><span class="token punctuation">&gt;</span></span> orderInfoList<span class="token operator">=</span>orderInfoMapper<span class="token punctuation">.</span><span class="token function">findByOrderId</span><span class="token punctuation">(</span>orderId<span class="token punctuation">)</span><span class="token punctuation">;</span>



        <span class="token doc-comment comment">/**
         * //3 查询订单商品列表 便利
         * goodsList
         * 从orderInfo获取商品列表
         * 获取各个商品id 在后台查询商品数量 商品库存 修改
         * 查询销量 修改销量 sale+count
         * 修改关联表
         */</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">GoodsInfo</span><span class="token punctuation">&gt;</span></span> goodsList<span class="token operator">=</span>orderInfo<span class="token punctuation">.</span><span class="token function">getGoodsList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">GoodsInfo</span> orderGoodsVO <span class="token operator">:</span> goodsList<span class="token punctuation">)</span><span class="token punctuation">{</span>

            <span class="token class-name">Long</span> goodsId<span class="token operator">=</span>orderGoodsVO<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//goodsDetail   goodsInfoService  数据库</span>
            <span class="token class-name">GoodsInfo</span> goodsDetail<span class="token operator">=</span>goodsInfoService<span class="token punctuation">.</span><span class="token function">findById</span><span class="token punctuation">(</span>goodsId<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>goodsDetail <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">continue</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">//order 购买</span>
            <span class="token class-name">Integer</span> orderCount<span class="token operator">=</span>orderGoodsVO<span class="token punctuation">.</span><span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> orderGoodsVO<span class="token punctuation">.</span><span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 库存</span>
            <span class="token class-name">Integer</span> goodsCount<span class="token operator">=</span>goodsDetail<span class="token punctuation">.</span><span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span>goodsDetail<span class="token punctuation">.</span><span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//4 修改库存</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>orderCount<span class="token operator">&gt;</span>goodsCount<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">CustomException</span><span class="token punctuation">(</span><span class="token class-name">ResultCode</span><span class="token punctuation">.</span><span class="token constant">ORDER_PAY_ERROR</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        goodsDetail<span class="token punctuation">.</span><span class="token function">setCount</span><span class="token punctuation">(</span>goodsCount <span class="token operator">-</span> orderCount<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//5 增加销量</span>
            <span class="token keyword">int</span> sales<span class="token operator">=</span>goodsDetail<span class="token punctuation">.</span><span class="token function">getSales</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span>goodsDetail<span class="token punctuation">.</span><span class="token function">getSales</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            goodsDetail<span class="token punctuation">.</span><span class="token function">setSales</span><span class="token punctuation">(</span>sales<span class="token operator">+</span>orderCount<span class="token punctuation">)</span><span class="token punctuation">;</span>
            goodsInfoService<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>goodsDetail<span class="token punctuation">)</span><span class="token punctuation">;</span>


            <span class="token comment">//6 商品订单关联表 将增加关系</span>
            <span class="token class-name">OrderGoodsRel</span> orderGoodsRel<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">OrderGoodsRel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            orderGoodsRel<span class="token punctuation">.</span><span class="token function">setOrderid</span><span class="token punctuation">(</span>orderInfoList<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            orderGoodsRel<span class="token punctuation">.</span><span class="token function">setGoodsid</span><span class="token punctuation">(</span>goodsId<span class="token punctuation">)</span><span class="token punctuation">;</span>
            orderGoodsRel<span class="token punctuation">.</span><span class="token function">setCount</span><span class="token punctuation">(</span>orderCount<span class="token punctuation">)</span><span class="token punctuation">;</span>
            orderGoodsRelMapper<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>orderGoodsRel<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

        <span class="token comment">//7 清除购物车</span>
        cartInfoSevice<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> orderInfo<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 根据终端用户获取 订单 状态
     *
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">PageInfo</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">OrderInfo</span><span class="token punctuation">&gt;</span></span> <span class="token function">findFrontPages</span><span class="token punctuation">(</span><span class="token class-name">Long</span> userId<span class="token punctuation">,</span><span class="token class-name">String</span> state<span class="token punctuation">,</span><span class="token class-name">Integer</span> pageNum<span class="token punctuation">,</span><span class="token class-name">Integer</span> pageSize<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">PageHelper</span><span class="token punctuation">.</span><span class="token function">startPage</span><span class="token punctuation">(</span>pageNum<span class="token punctuation">,</span>pageSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">OrderInfo</span><span class="token punctuation">&gt;</span></span> orderInfos<span class="token punctuation">;</span>
        <span class="token comment">//</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>userId <span class="token operator">==</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            orderInfos<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            orderInfos<span class="token operator">=</span>orderInfoMapper<span class="token punctuation">.</span><span class="token function">findByEndUserId</span><span class="token punctuation">(</span>userId<span class="token punctuation">,</span>state<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">OrderInfo</span> orderInfo<span class="token operator">:</span>orderInfos<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">packOrder</span><span class="token punctuation">(</span>orderInfo<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>



        <span class="token keyword">return</span> <span class="token class-name">PageInfo</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>orderInfos<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>




    <span class="token doc-comment comment">/**
     *包装订单的用户和商品信息
     * order
     * userid  --&gt; userinfo
     * id -----&gt; order_goods_rel : orderid(order.id)  goodsid  count
     * goodsid --&gt; goodsinfo
     * count
     *
     * 包装 把 用户信息user info  商品信息 goods info 查询到并放入orderinfo
     *
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">packOrder</span><span class="token punctuation">(</span><span class="token class-name">OrderInfo</span> orderInfo<span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token comment">//用户信息 userinfo  orderInfo.getUserid()不会空 在添加购物车已判断是否空</span>
       orderInfo<span class="token punctuation">.</span><span class="token function">setUserInfo</span><span class="token punctuation">(</span>userInfoService<span class="token punctuation">.</span><span class="token function">findById</span><span class="token punctuation">(</span>orderInfo<span class="token punctuation">.</span><span class="token function">getUserid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>

       <span class="token comment">//商品信息</span>
        <span class="token class-name">Long</span> orderId<span class="token operator">=</span>orderInfo<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//rel  id  goodsid count  用户买的什么商品id 买了多少件</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">OrderGoodsRel</span><span class="token punctuation">&gt;</span></span> rels<span class="token operator">=</span> orderGoodsRelMapper<span class="token punctuation">.</span><span class="token function">findByOrderid</span><span class="token punctuation">(</span>orderId<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">GoodsInfo</span><span class="token punctuation">&gt;</span></span> goodsInfoList<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">OrderGoodsRel</span> rel<span class="token operator">:</span> rels<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//获取 用户购买 商品的信息</span>
            <span class="token class-name">GoodsInfo</span> goodsInfo<span class="token operator">=</span>goodsInfoService<span class="token punctuation">.</span><span class="token function">findById</span><span class="token punctuation">(</span>rel<span class="token punctuation">.</span><span class="token function">getGoodsid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>goodsInfo <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">//rel.getCount()  用户买的什么商品id 买了多少件</span>
                goodsInfo<span class="token punctuation">.</span><span class="token function">setCount</span><span class="token punctuation">(</span>rel<span class="token punctuation">.</span><span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                goodsInfoList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>goodsInfo<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        orderInfo<span class="token punctuation">.</span><span class="token function">setGoodsList</span><span class="token punctuation">(</span>goodsInfoList<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//orderInfo  userInfo +  goodsList</span>
    <span class="token punctuation">}</span>


    <span class="token doc-comment comment">/**
     * 改变订单状态
     * <span class="token keyword">@param</span> <span class="token parameter">id</span>
     * <span class="token keyword">@param</span> <span class="token parameter">state</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">changeState</span><span class="token punctuation">(</span><span class="token class-name">Long</span> id<span class="token punctuation">,</span><span class="token class-name">String</span> state<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">OrderInfo</span> order<span class="token operator">=</span>orderInfoMapper<span class="token punctuation">.</span><span class="token function">finById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Long</span> userId<span class="token operator">=</span>order<span class="token punctuation">.</span><span class="token function">getUserid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">UserInfo</span> user<span class="token operator">=</span>userInfoService<span class="token punctuation">.</span><span class="token function">findById</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>state<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;待发货&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//校验余额</span>
            <span class="token class-name">Double</span> account<span class="token operator">=</span>user<span class="token punctuation">.</span><span class="token function">getAccount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Double</span> totalPrice<span class="token operator">=</span>order<span class="token punctuation">.</span><span class="token function">getTotalprice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>account <span class="token operator">&lt;</span> totalPrice<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">CustomException</span><span class="token punctuation">(</span><span class="token string">&quot;-1&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;账户余额不足&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            user<span class="token punctuation">.</span><span class="token function">setAccount</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span><span class="token function">getAccount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> order<span class="token punctuation">.</span><span class="token function">getTotalprice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//修改用户余额</span>
            userInfoService<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>state<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;已退货&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//校验余额</span>
            <span class="token class-name">Double</span> account<span class="token operator">=</span>user<span class="token punctuation">.</span><span class="token function">getAccount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Double</span> totalPrice<span class="token operator">=</span>order<span class="token punctuation">.</span><span class="token function">getTotalprice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            user<span class="token punctuation">.</span><span class="token function">setAccount</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span><span class="token function">getAccount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> order<span class="token punctuation">.</span><span class="token function">getTotalprice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//修改用户余额</span>
            userInfoService<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//更新订单的状态</span>
        orderInfoMapper<span class="token punctuation">.</span><span class="token function">updateState</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span>state<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     *后台 查看订单列表
     * <span class="token keyword">@param</span> <span class="token parameter">userId</span>
     * <span class="token keyword">@param</span> <span class="token parameter">pageNum</span>
     * <span class="token keyword">@param</span> <span class="token parameter">pageSize</span>
     * <span class="token keyword">@param</span> <span class="token parameter">request</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">PageInfo</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">OrderInfo</span><span class="token punctuation">&gt;</span></span> <span class="token function">findPage</span><span class="token punctuation">(</span><span class="token class-name">Long</span> userId<span class="token punctuation">,</span> <span class="token class-name">Integer</span> pageNum<span class="token punctuation">,</span> <span class="token class-name">Integer</span> pageSize<span class="token punctuation">,</span> <span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//</span>
        <span class="token class-name">UserInfo</span> user<span class="token operator">=</span><span class="token punctuation">(</span><span class="token class-name">UserInfo</span><span class="token punctuation">)</span> request<span class="token punctuation">.</span><span class="token function">getSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token class-name">Common</span><span class="token punctuation">.</span><span class="token constant">USER_INFO</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>user <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">CustomException</span><span class="token punctuation">(</span><span class="token string">&quot;1001&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;session已失效，请重新登录&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span>
        <span class="token comment">//</span>
        <span class="token class-name">Integer</span> level<span class="token operator">=</span>user<span class="token punctuation">.</span><span class="token function">getLevel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">PageHelper</span><span class="token punctuation">.</span><span class="token function">startPage</span><span class="token punctuation">(</span>pageNum<span class="token punctuation">,</span>pageSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">OrderInfo</span><span class="token punctuation">&gt;</span></span> orderInfos<span class="token punctuation">;</span>
        <span class="token comment">//</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">==</span> level<span class="token punctuation">)</span><span class="token punctuation">{</span>
            orderInfos<span class="token operator">=</span>orderInfoMapper<span class="token punctuation">.</span><span class="token function">selectAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>userId<span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            orderInfos<span class="token operator">=</span>orderInfoMapper<span class="token punctuation">.</span><span class="token function">findByEndUserId</span><span class="token punctuation">(</span>userId<span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            orderInfos<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">OrderInfo</span> orderInfo<span class="token operator">:</span> orderInfos<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">packOrder</span><span class="token punctuation">(</span>orderInfo<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token class-name">PageInfo</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>orderInfos<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>





    <span class="token doc-comment comment">/**
     * 删除订单
     * <span class="token keyword">@param</span> <span class="token parameter">id</span>
     * Transactional
     */</span>
    <span class="token annotation punctuation">@Transactional</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token class-name">Long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        orderInfoMapper<span class="token punctuation">.</span><span class="token function">deleteById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        orderGoodsRelMapper<span class="token punctuation">.</span><span class="token function">deleteByOrderId</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>



    <span class="token doc-comment comment">/**
     * 根据id查询订单信息
     *
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">OrderInfo</span> <span class="token function">findById</span><span class="token punctuation">(</span><span class="token class-name">Long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">OrderInfo</span> orderInfo<span class="token operator">=</span> orderInfoMapper<span class="token punctuation">.</span><span class="token function">selectByPrimaryKey</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">packOrder</span><span class="token punctuation">(</span>orderInfo<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> orderInfo<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token doc-comment comment">/**
     *总交易额
     */</span>

    <span class="token keyword">public</span> <span class="token class-name">Double</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> orderInfoMapper<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 总销量
     */</span>

    <span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">totalShopping</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> orderGoodsRelMapper<span class="token punctuation">.</span><span class="token function">totalShopping</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 分类总销售
     */</span>

    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token function">getTypePrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> orderInfoMapper<span class="token punctuation">.</span><span class="token function">getTypePrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/**
     * 分类总销售
     */</span>

    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token function">getTypeCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> orderInfoMapper<span class="token punctuation">.</span><span class="token function">getTypeCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h1 id="orderinfocontroller" tabindex="-1"><a class="header-anchor" href="#orderinfocontroller" aria-hidden="true">#</a> OrderInfoController</h1><hr><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>javaclimb<span class="token punctuation">.</span>xshopping<span class="token punctuation">.</span>controller</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>github<span class="token punctuation">.</span>pagehelper<span class="token punctuation">.</span></span><span class="token class-name">PageInfo</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>javaclimb<span class="token punctuation">.</span>xshopping<span class="token punctuation">.</span>common<span class="token punctuation">.</span></span><span class="token class-name">Result</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>javaclimb<span class="token punctuation">.</span>xshopping<span class="token punctuation">.</span>common<span class="token punctuation">.</span></span><span class="token class-name">ResultCode</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>javaclimb<span class="token punctuation">.</span>xshopping<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">GoodsInfo</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>javaclimb<span class="token punctuation">.</span>xshopping<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">OrderInfo</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>javaclimb<span class="token punctuation">.</span>xshopping<span class="token punctuation">.</span>exception<span class="token punctuation">.</span></span><span class="token class-name">CustomException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>javaclimb<span class="token punctuation">.</span>xshopping<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">OrderInfoService</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Resource</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpServletRequest</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 订单控制器
 */</span>
<span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;/orderInfo&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OrderInfoController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Resource</span>
    <span class="token class-name">OrderInfoService</span> orderInfoService<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 下单
     */</span>
    <span class="token annotation punctuation">@PostMapping</span>
    <span class="token keyword">public</span> <span class="token class-name">Result</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">OrderInfo</span><span class="token punctuation">&gt;</span></span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">OrderInfo</span> orderInfo<span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token class-name">Long</span> userId<span class="token operator">=</span>orderInfo<span class="token punctuation">.</span><span class="token function">getUserid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">GoodsInfo</span><span class="token punctuation">&gt;</span></span> goodsList<span class="token operator">=</span>orderInfo<span class="token punctuation">.</span><span class="token function">getGoodsList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>userId <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> goodsList <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> goodsList<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">CustomException</span><span class="token punctuation">(</span><span class="token class-name">ResultCode</span><span class="token punctuation">.</span><span class="token constant">PARAM_ERROR</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        orderInfo<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token string">&quot;待付款&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token class-name">Result</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span>orderInfoService<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>orderInfo<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>


    <span class="token doc-comment comment">/**
     * 查询所有信息  分页
     * required = false 不是必须传值
     */</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/page&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Result</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">PageInfo</span><span class="token punctuation">&lt;</span><span class="token class-name">OrderInfo</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token function">findPage</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span>required <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> userId<span class="token punctuation">,</span>
                                                    <span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span>required <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>defaultValue <span class="token operator">=</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Integer</span> pageNum<span class="token punctuation">,</span>
                                                    <span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span>required <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>defaultValue <span class="token operator">=</span> <span class="token string">&quot;10&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Integer</span> pageSize<span class="token punctuation">,</span>
                                                    <span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Result</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span>orderInfoService<span class="token punctuation">.</span><span class="token function">findPage</span><span class="token punctuation">(</span>userId<span class="token punctuation">,</span>pageNum<span class="token punctuation">,</span>pageSize<span class="token punctuation">,</span>request<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>



    <span class="token doc-comment comment">/**
     * 查询所有信息  分页
     * required = false 不是必须传值
     */</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/page/front&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Result</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">PageInfo</span><span class="token punctuation">&lt;</span><span class="token class-name">OrderInfo</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token function">findFrontPage</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span>required <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> userId<span class="token punctuation">,</span>
                                                     <span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span>required <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token class-name">String</span> state<span class="token punctuation">,</span>
                                                     <span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span>required <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>defaultValue <span class="token operator">=</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Integer</span> pageNum<span class="token punctuation">,</span>
                                                     <span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span>required <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>defaultValue <span class="token operator">=</span> <span class="token string">&quot;10&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Integer</span> pageSize<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Result</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span>orderInfoService<span class="token punctuation">.</span><span class="token function">findFrontPages</span><span class="token punctuation">(</span>userId<span class="token punctuation">,</span>state<span class="token punctuation">,</span>pageNum<span class="token punctuation">,</span>pageSize<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     *改变订单状态
     */</span>
    <span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/state/{id}/{state}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Result</span> <span class="token function">state</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">Long</span> id<span class="token punctuation">,</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">String</span> state<span class="token punctuation">)</span><span class="token punctuation">{</span>
        orderInfoService<span class="token punctuation">.</span><span class="token function">changeState</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span>state<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token class-name">Result</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     *删除订单
     */</span>
    <span class="token annotation punctuation">@DeleteMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Result</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">Long</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
        orderInfoService<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token class-name">Result</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/**
     * 根据id查询订单信息
     *
     */</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/order/{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Result</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">OrderInfo</span><span class="token punctuation">&gt;</span></span> <span class="token function">findById</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">Long</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">OrderInfo</span> orderInfo<span class="token operator">=</span> orderInfoService<span class="token punctuation">.</span><span class="token function">findById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token class-name">Result</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span>orderInfo<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h1 id="cartinfosevice" tabindex="-1"><a class="header-anchor" href="#cartinfosevice" aria-hidden="true">#</a> CartInfoSevice</h1><hr><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>javaclimb<span class="token punctuation">.</span>xshopping<span class="token punctuation">.</span>service</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">cn<span class="token punctuation">.</span>hutool<span class="token punctuation">.</span>core<span class="token punctuation">.</span>collection<span class="token punctuation">.</span></span><span class="token class-name">CollectionUtil</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">cn<span class="token punctuation">.</span>hutool<span class="token punctuation">.</span>core<span class="token punctuation">.</span>date<span class="token punctuation">.</span></span><span class="token class-name">DateUtil</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>github<span class="token punctuation">.</span>pagehelper<span class="token punctuation">.</span></span><span class="token class-name">PageHelper</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>github<span class="token punctuation">.</span>pagehelper<span class="token punctuation">.</span></span><span class="token class-name">PageInfo</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>javaclimb<span class="token punctuation">.</span>xshopping<span class="token punctuation">.</span>common<span class="token punctuation">.</span></span><span class="token class-name">Common</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>javaclimb<span class="token punctuation">.</span>xshopping<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">CartInfo</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>javaclimb<span class="token punctuation">.</span>xshopping<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">GoodsInfo</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>javaclimb<span class="token punctuation">.</span>xshopping<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">UserInfo</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>javaclimb<span class="token punctuation">.</span>xshopping<span class="token punctuation">.</span>exception<span class="token punctuation">.</span></span><span class="token class-name">CustomException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>javaclimb<span class="token punctuation">.</span>xshopping<span class="token punctuation">.</span>mapper<span class="token punctuation">.</span></span><span class="token class-name">CartInfoMapper</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Service</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">tk<span class="token punctuation">.</span>mybatis<span class="token punctuation">.</span>mapper<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">Example</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Resource</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpServletRequest</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Date</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 购物车 方法1
 */</span>
<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CartInfoSevice</span> <span class="token punctuation">{</span>


    <span class="token annotation punctuation">@Resource</span>
    <span class="token keyword">private</span> <span class="token class-name">CartInfoMapper</span> cartInfoMapper<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Resource</span>
    <span class="token keyword">private</span> <span class="token class-name">GoodsInfoService</span> goodsInfoService<span class="token punctuation">;</span>


    <span class="token doc-comment comment">/**
     * add
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">CartInfo</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">CartInfo</span> detailInfo<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Long</span> userid<span class="token operator">=</span>detailInfo<span class="token punctuation">.</span><span class="token function">getUserid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Long</span> goodsid<span class="token operator">=</span>detailInfo<span class="token punctuation">.</span><span class="token function">getGoodsid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//查询购物车有没有数据 有更新 没有添加</span>
        <span class="token comment">//查询流</span>
        <span class="token comment">//select * from cart_info where( ( userId = userId and goodsId = goodsId ) )</span>
        <span class="token class-name">Example</span> example<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Example</span><span class="token punctuation">(</span><span class="token class-name">CartInfo</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        example<span class="token punctuation">.</span><span class="token function">createCriteria</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">andEqualTo</span><span class="token punctuation">(</span><span class="token string">&quot;userid&quot;</span><span class="token punctuation">,</span>userid<span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">andEqualTo</span><span class="token punctuation">(</span><span class="token string">&quot;goodsid&quot;</span><span class="token punctuation">,</span>goodsid<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">CartInfo</span><span class="token punctuation">&gt;</span></span> infos<span class="token operator">=</span>cartInfoMapper<span class="token punctuation">.</span><span class="token function">selectByExample</span><span class="token punctuation">(</span>example<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//CollectionUtil 封装的工具类</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">CollectionUtil</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>infos<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//没有添加</span>
            detailInfo<span class="token punctuation">.</span><span class="token function">setCreatetime</span><span class="token punctuation">(</span><span class="token class-name">DateUtil</span><span class="token punctuation">.</span><span class="token function">formatDateTime</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            cartInfoMapper<span class="token punctuation">.</span><span class="token function">insertSelective</span><span class="token punctuation">(</span>detailInfo<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">//有更新</span>
            <span class="token class-name">CartInfo</span> cartInfo<span class="token operator">=</span>infos<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            cartInfo<span class="token punctuation">.</span><span class="token function">setCount</span><span class="token punctuation">(</span>cartInfo<span class="token punctuation">.</span><span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span>detailInfo<span class="token punctuation">.</span><span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            cartInfoMapper<span class="token punctuation">.</span><span class="token function">updateByPrimaryKeySelective</span><span class="token punctuation">(</span>cartInfo<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> detailInfo<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 根据用户id 获取购物车列表 获得购物车商品的数量
     * <span class="token keyword">@param</span> <span class="token parameter">userId</span>
     * <span class="token keyword">@return</span>
     */</span>

    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">GoodsInfo</span><span class="token punctuation">&gt;</span></span> <span class="token function">findAll</span><span class="token punctuation">(</span><span class="token class-name">Long</span> userId<span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">CartInfo</span><span class="token punctuation">&gt;</span></span> cartInfoList<span class="token operator">=</span>cartInfoMapper<span class="token punctuation">.</span><span class="token function">findCartByUserId</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">GoodsInfo</span><span class="token punctuation">&gt;</span></span> goodsList<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">CartInfo</span> cartInfo<span class="token operator">:</span>cartInfoList<span class="token punctuation">)</span><span class="token punctuation">{</span>

            <span class="token keyword">long</span> goodsId<span class="token operator">=</span>cartInfo<span class="token punctuation">.</span><span class="token function">getGoodsid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">GoodsInfo</span> goodsInfo<span class="token operator">=</span>goodsInfoService<span class="token punctuation">.</span><span class="token function">findById</span><span class="token punctuation">(</span>goodsId<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>goodsInfo <span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">//注意 这里是用户加入购物车的数量</span>
                goodsInfo<span class="token punctuation">.</span><span class="token function">setCount</span><span class="token punctuation">(</span>cartInfo<span class="token punctuation">.</span><span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">//这里的id是购物车的商品id</span>
                goodsInfo<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span>cartInfo<span class="token punctuation">.</span><span class="token function">getGoodsid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                goodsList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>goodsInfo<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> goodsList<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 删除 购物车对应商品
     * <span class="token keyword">@param</span> <span class="token parameter">userId</span>
     * <span class="token keyword">@param</span> <span class="token parameter">goodsId</span>
     */</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">deleteGoods</span><span class="token punctuation">(</span><span class="token class-name">Long</span> userId<span class="token punctuation">,</span><span class="token class-name">Long</span> goodsId<span class="token punctuation">)</span><span class="token punctuation">{</span>
        cartInfoMapper<span class="token punctuation">.</span><span class="token function">deleteGoods</span><span class="token punctuation">(</span>userId<span class="token punctuation">,</span>goodsId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     *
     * <span class="token keyword">@param</span> <span class="token parameter">userId</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">empty</span><span class="token punctuation">(</span><span class="token class-name">Long</span> userId<span class="token punctuation">)</span><span class="token punctuation">{</span>
        cartInfoMapper<span class="token punctuation">.</span><span class="token function">deleteByUserId</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>



    <span class="token doc-comment comment">/**
     *
     *翻页查询购物车列表
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">PageInfo</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">CartInfo</span><span class="token punctuation">&gt;</span></span> <span class="token function">findPageDetails</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> pageNum<span class="token punctuation">,</span> <span class="token class-name">Integer</span> pageSize<span class="token punctuation">,</span> <span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">UserInfo</span> user<span class="token operator">=</span><span class="token punctuation">(</span><span class="token class-name">UserInfo</span><span class="token punctuation">)</span> request<span class="token punctuation">.</span><span class="token function">getSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token class-name">Common</span><span class="token punctuation">.</span><span class="token constant">USER_INFO</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>user <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">CustomException</span><span class="token punctuation">(</span><span class="token string">&quot;1001&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;session已失效请重新登录&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">Integer</span> level<span class="token operator">=</span>user<span class="token punctuation">.</span><span class="token function">getLevel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">PageHelper</span><span class="token punctuation">.</span><span class="token function">startPage</span><span class="token punctuation">(</span>pageNum<span class="token punctuation">,</span>pageSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">CartInfo</span><span class="token punctuation">&gt;</span></span> list<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>level <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            list<span class="token operator">=</span>cartInfoMapper<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            list<span class="token operator">=</span>cartInfoMapper<span class="token punctuation">.</span><span class="token function">findCartByUserId</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token class-name">PageInfo</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token doc-comment comment">/**
     * 根据id删除购物车
     * <span class="token keyword">@param</span> <span class="token parameter">id</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token class-name">Long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cartInfoMapper<span class="token punctuation">.</span><span class="token function">deleteByPrimaryKey</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h1 id="cartinfocontroller" tabindex="-1"><a class="header-anchor" href="#cartinfocontroller" aria-hidden="true">#</a> CartInfoController</h1><hr><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>javaclimb<span class="token punctuation">.</span>xshopping<span class="token punctuation">.</span>controller</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>github<span class="token punctuation">.</span>pagehelper<span class="token punctuation">.</span></span><span class="token class-name">PageInfo</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>javaclimb<span class="token punctuation">.</span>xshopping<span class="token punctuation">.</span>common<span class="token punctuation">.</span></span><span class="token class-name">Result</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>javaclimb<span class="token punctuation">.</span>xshopping<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">CartInfo</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>javaclimb<span class="token punctuation">.</span>xshopping<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">GoodsInfo</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>javaclimb<span class="token punctuation">.</span>xshopping<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">CartInfoSevice</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Resource</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpServletRequest</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 购物车控制
 */</span>
<span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;/cartInfo&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CartInfoController</span> <span class="token punctuation">{</span>


    <span class="token annotation punctuation">@Resource</span>
    <span class="token class-name">CartInfoSevice</span> cartInfoSevice<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 添加购物车
     */</span>
    <span class="token annotation punctuation">@PostMapping</span>
    <span class="token keyword">public</span> <span class="token class-name">Result</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">CartInfo</span><span class="token punctuation">&gt;</span></span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">CartInfo</span> cartInfo<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Result</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span>cartInfoSevice<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>cartInfo<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 查询某用户购物车（不分页）
     */</span>
    <span class="token annotation punctuation">@GetMapping</span>
    <span class="token keyword">public</span> <span class="token class-name">Result</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">GoodsInfo</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token function">findAll</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestParam</span> <span class="token class-name">Long</span> userId<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Result</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span>cartInfoSevice<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     *
     * <span class="token keyword">@param</span> <span class="token parameter">userId</span>
     * <span class="token keyword">@param</span> <span class="token parameter">goodsId</span>
     * <span class="token keyword">@return</span>
     */</span>

    <span class="token annotation punctuation">@DeleteMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/goods/{userId}/{goodsId}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Result</span> <span class="token function">deleteGoods</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">Long</span> userId<span class="token punctuation">,</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">Long</span> goodsId<span class="token punctuation">)</span><span class="token punctuation">{</span>
        cartInfoSevice<span class="token punctuation">.</span><span class="token function">deleteGoods</span><span class="token punctuation">(</span>userId<span class="token punctuation">,</span>goodsId<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token class-name">Result</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 查询购物车  分页
     * required = false 不是必须传值
     */</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/page&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Result</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">PageInfo</span><span class="token punctuation">&lt;</span><span class="token class-name">CartInfo</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token function">findPage</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span>required <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>defaultValue <span class="token operator">=</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Integer</span> pageNum<span class="token punctuation">,</span>
                                                <span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span>required <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>defaultValue <span class="token operator">=</span> <span class="token string">&quot;10&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Integer</span> pageSize<span class="token punctuation">,</span>
                                                <span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Result</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span>cartInfoSevice<span class="token punctuation">.</span><span class="token function">findPageDetails</span><span class="token punctuation">(</span>pageNum<span class="token punctuation">,</span>pageSize<span class="token punctuation">,</span>request<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 根据id删除购物车
     * <span class="token keyword">@param</span> <span class="token parameter">id</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@DeleteMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Result</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">Long</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
        cartInfoSevice<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token class-name">Result</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>购物车添加 订单关系 下单等</p><hr>`,19),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","1.html.vue"]]);export{k as default};
