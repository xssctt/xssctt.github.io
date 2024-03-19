import{d as defineAsyncComponent,r as ref,a as readonly,b as reactive,i as isString$1,c as isArray,e as dedupeHead,f as resolveLocalePath,g as defineComponent,h as isLinkHttp,j as removeLeadingSlash,o as onMounted,k as computed,l as h$3,m as inject,n as getCurrentInstance,p as isPlainObject,q as camelize,s as capitalize,t as isFunction$1,u as unref,w as watch,v as nextTick,x as getCurrentScope,y as onScopeDispose,z as shallowRef,A as watchEffect,T as Transition,B as useRouter,C as onBeforeUnmount,D as useRoute,E as isLinkMailto,F as resolveComponent,G as toRef,H as isLinkTel,R as RouterLink,I as isLinkExternal,J as ensureEndingSlash,K as provide,L as TransitionGroup,M as removeEndingSlash,N as useLink,O as createRouter,S as START_LOCATION_NORMALIZED,P as createSSRApp,Q as createWebHistory,U as RouterView}from"./framework-56e099cb.js";const scriptRel="modulepreload",assetsURL=function(u){return"/"+u},seen={},__vitePreload=function(m,b,$){if(!b||b.length===0)return m();const T=document.getElementsByTagName("link");return Promise.all(b.map(j=>{if(j=assetsURL(j),j in seen)return;seen[j]=!0;const U=j.endsWith(".css"),G=U?'[rel="stylesheet"]':"";if(!!$)for(let Y=T.length-1;Y>=0;Y--){const nn=T[Y];if(nn.href===j&&(!U||nn.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${j}"]${G}`))return;const Z=document.createElement("link");if(Z.rel=U?"stylesheet":scriptRel,U||(Z.as="script",Z.crossOrigin=""),Z.href=j,document.head.appendChild(Z),U)return new Promise((Y,nn)=>{Z.addEventListener("load",Y),Z.addEventListener("error",()=>nn(new Error(`Unable to preload CSS for ${j}`)))})})).then(()=>m())},pagesData$1={"v-184f4da6":()=>__vitePreload(()=>import("./intro.html-bb34d506.js"),[]).then(({data:u})=>u),"v-8daa1a0e":()=>__vitePreload(()=>import("./index.html-bd8e567b.js"),[]).then(({data:u})=>u),"v-2e3eac9e":()=>__vitePreload(()=>import("./slides.html-91eae00f.js"),[]).then(({data:u})=>u),"v-4e65ec78":()=>__vitePreload(()=>import("./disable.html-d991dcc6.js"),[]).then(({data:u})=>u),"v-c151bf32":()=>__vitePreload(()=>import("./encrypt.html-d4addaf5.js"),[]).then(({data:u})=>u),"v-438ffe52":()=>__vitePreload(()=>import("./markdown.html-ac8fc095.js"),[]).then(({data:u})=>u),"v-6e19edb7":()=>__vitePreload(()=>import("./page.html-5c7c0c98.js"),[]).then(({data:u})=>u),"v-1473bf53":()=>__vitePreload(()=>import("./index.html-d254e2c7.js"),[]).then(({data:u})=>u),"v-2bc6566a":()=>__vitePreload(()=>import("./cherry.html-ee5208e8.js"),[]).then(({data:u})=>u),"v-24b7c48d":()=>__vitePreload(()=>import("./dragonfruit.html-43901547.js"),[]).then(({data:u})=>u),"v-f0ec4556":()=>__vitePreload(()=>import("./strawberry.html-7fcae4a6.js"),[]).then(({data:u})=>u),"v-df8b6e0c":()=>__vitePreload(()=>import("./tomato.html-c4aceadb.js"),[]).then(({data:u})=>u),"v-6c7272c8":()=>__vitePreload(()=>import("./1.html-b6f3fcc4.js"),[]).then(({data:u})=>u),"v-6908c18a":()=>__vitePreload(()=>import("./2.html-c9ae7c85.js"),[]).then(({data:u})=>u),"v-e9ddbd06":()=>__vitePreload(()=>import("./1.html-ce45317a.js"),[]).then(({data:u})=>u),"v-ae5e1d4e":()=>__vitePreload(()=>import("./3.html-5c3117a0.js"),[]).then(({data:u})=>u),"v-aaf46c10":()=>__vitePreload(()=>import("./4.html-cf222a9d.js"),[]).then(({data:u})=>u),"v-23c9dff9":()=>__vitePreload(()=>import("./1.html-f6694eac.js"),[]).then(({data:u})=>u),"v-257eb898":()=>__vitePreload(()=>import("./2.html-e736ad93.js"),[]).then(({data:u})=>u),"v-27339137":()=>__vitePreload(()=>import("./3.html-9a1b29e9.js"),[]).then(({data:u})=>u),"v-449df5bb":()=>__vitePreload(()=>import("./1.html-be824815.js"),[]).then(({data:u})=>u),"v-4652ce5a":()=>__vitePreload(()=>import("./2.html-5aee2181.js"),[]).then(({data:u})=>u),"v-4807a6f9":()=>__vitePreload(()=>import("./3.html-86389910.js"),[]).then(({data:u})=>u),"v-49bc7f98":()=>__vitePreload(()=>import("./4.html-5bdfd862.js"),[]).then(({data:u})=>u),"v-4b715837":()=>__vitePreload(()=>import("./5.html-db5b0433.js"),[]).then(({data:u})=>u),"v-4d2630d6":()=>__vitePreload(()=>import("./6.html-32adee7b.js"),[]).then(({data:u})=>u),"v-4edb0975":()=>__vitePreload(()=>import("./7.html-32c3df90.js"),[]).then(({data:u})=>u),"v-1975ed9a":()=>__vitePreload(()=>import("./3.html-0a1d56c4.js"),[]).then(({data:u})=>u),"v-1b2ac639":()=>__vitePreload(()=>import("./4.html-080ee21f.js"),[]).then(({data:u})=>u),"v-1cdf9ed8":()=>__vitePreload(()=>import("./5.html-fba91577.js"),[]).then(({data:u})=>u),"v-1e947777":()=>__vitePreload(()=>import("./6.html-869a548e.js"),[]).then(({data:u})=>u),"v-d0058120":()=>__vitePreload(()=>import("./lua.html-bcb6edc5.js"),[]).then(({data:u})=>u),"v-67b8c712":()=>__vitePreload(()=>import("./1.html-2e327d5f.js"),[]).then(({data:u})=>u),"v-696d9fb1":()=>__vitePreload(()=>import("./2.html-df478210.js"),[]).then(({data:u})=>u),"v-6b227850":()=>__vitePreload(()=>import("./3.html-07277b50.js"),[]).then(({data:u})=>u),"v-6cd750ef":()=>__vitePreload(()=>import("./4.html-502c67e8.js"),[]).then(({data:u})=>u),"v-7a07405d":()=>__vitePreload(()=>import("./1.html-bdeb03a3.js"),[]).then(({data:u})=>u),"v-7bbc18fc":()=>__vitePreload(()=>import("./2.html-6ee78e95.js"),[]).then(({data:u})=>u),"v-7d70f19b":()=>__vitePreload(()=>import("./3.html-5f16e39f.js"),[]).then(({data:u})=>u),"v-7f25ca3a":()=>__vitePreload(()=>import("./4.html-dd788c19.js"),[]).then(({data:u})=>u),"v-29c3d532":()=>__vitePreload(()=>import("./1.html-2f20aba0.js"),[]).then(({data:u})=>u),"v-2b78add1":()=>__vitePreload(()=>import("./2.html-41285371.js"),[]).then(({data:u})=>u),"v-2d2d8670":()=>__vitePreload(()=>import("./3.html-9f848163.js"),[]).then(({data:u})=>u),"v-2ee25f0f":()=>__vitePreload(()=>import("./4.html-e5f4d4be.js"),[]).then(({data:u})=>u),"v-309737ae":()=>__vitePreload(()=>import("./5.html-8d353327.js"),[]).then(({data:u})=>u),"v-324c104d":()=>__vitePreload(()=>import("./6.html-cfdef71b.js"),[]).then(({data:u})=>u),"v-dd991ea6":()=>__vitePreload(()=>import("./1.html-e269eed0.js"),[]).then(({data:u})=>u),"v-da2f6d68":()=>__vitePreload(()=>import("./2.html-02ea2ec3.js"),[]).then(({data:u})=>u),"v-d6c5bc2a":()=>__vitePreload(()=>import("./3.html-f08193e4.js"),[]).then(({data:u})=>u),"v-3706649a":()=>__vitePreload(()=>import("./404.html-594f5d63.js"),[]).then(({data:u})=>u),"v-e1e3da16":()=>__vitePreload(()=>import("./index.html-63127f1b.js"),[]).then(({data:u})=>u),"v-e199c358":()=>__vitePreload(()=>import("./index.html-f1cafae0.js"),[]).then(({data:u})=>u),"v-e4cb1150":()=>__vitePreload(()=>import("./index.html-aea6ce29.js"),[]).then(({data:u})=>u),"v-7ae11416":()=>__vitePreload(()=>import("./index.html-92ebbfa3.js"),[]).then(({data:u})=>u),"v-65106313":()=>__vitePreload(()=>import("./index.html-c8e5f742.js"),[]).then(({data:u})=>u),"v-eb307d1e":()=>__vitePreload(()=>import("./index.html-f31b87b3.js"),[]).then(({data:u})=>u),"v-eb305e9a":()=>__vitePreload(()=>import("./index.html-4dd07785.js"),[]).then(({data:u})=>u),"v-0333e414":()=>__vitePreload(()=>import("./index.html-5346bf93.js"),[]).then(({data:u})=>u),"v-7adc32e2":()=>__vitePreload(()=>import("./index.html-1d33e339.js"),[]).then(({data:u})=>u),"v-08f42f4a":()=>__vitePreload(()=>import("./index.html-f8ac348a.js"),[]).then(({data:u})=>u),"v-30be3cd5":()=>__vitePreload(()=>import("./index.html-24e480c2.js"),[]).then(({data:u})=>u),"v-8927552c":()=>__vitePreload(()=>import("./index.html-6615e7c0.js"),[]).then(({data:u})=>u),"v-67a8e925":()=>__vitePreload(()=>import("./index.html-32253992.js"),[]).then(({data:u})=>u),"v-5bc93818":()=>__vitePreload(()=>import("./index.html-223571c2.js"),[]).then(({data:u})=>u),"v-744d024e":()=>__vitePreload(()=>import("./index.html-ba87fae4.js"),[]).then(({data:u})=>u),"v-e52c881c":()=>__vitePreload(()=>import("./index.html-8039de1b.js"),[]).then(({data:u})=>u),"v-154dc4c4":()=>__vitePreload(()=>import("./index.html-8c3331b6.js"),[]).then(({data:u})=>u),"v-01560935":()=>__vitePreload(()=>import("./index.html-cdbc646b.js"),[]).then(({data:u})=>u),"v-03d57386":()=>__vitePreload(()=>import("./index.html-6b83a438.js"),[]).then(({data:u})=>u),"v-a378ad66":()=>__vitePreload(()=>import("./index.html-2e755d47.js"),[]).then(({data:u})=>u),"v-0c75a0f8":()=>__vitePreload(()=>import("./index.html-b423562e.js"),[]).then(({data:u})=>u),"v-7b167472":()=>__vitePreload(()=>import("./index.html-d392d90e.js"),[]).then(({data:u})=>u),"v-226a68ec":()=>__vitePreload(()=>import("./index.html-136d0764.js"),[]).then(({data:u})=>u),"v-83e1f92e":()=>__vitePreload(()=>import("./index.html-8080d7ae.js"),[]).then(({data:u})=>u),"v-12590846":()=>__vitePreload(()=>import("./index.html-b92b8256.js"),[]).then(({data:u})=>u),"v-1e447d61":()=>__vitePreload(()=>import("./index.html-beff99f7.js"),[]).then(({data:u})=>u),"v-247d58ff":()=>__vitePreload(()=>import("./index.html-253ae200.js"),[]).then(({data:u})=>u),"v-484552dc":()=>__vitePreload(()=>import("./index.html-5850ee6d.js"),[]).then(({data:u})=>u),"v-76b80ea2":()=>__vitePreload(()=>import("./index.html-b67256d4.js"),[]).then(({data:u})=>u),"v-0f1d0e94":()=>__vitePreload(()=>import("./index.html-7387caf7.js"),[]).then(({data:u})=>u),"v-57ded594":()=>__vitePreload(()=>import("./index.html-a2695403.js"),[]).then(({data:u})=>u),"v-3e6b05e8":()=>__vitePreload(()=>import("./index.html-577f766d.js"),[]).then(({data:u})=>u),"v-94bff69c":()=>__vitePreload(()=>import("./index.html-044ee318.js"),[]).then(({data:u})=>u),"v-301b24f4":()=>__vitePreload(()=>import("./index.html-da618871.js"),[]).then(({data:u})=>u),"v-65efd6b5":()=>__vitePreload(()=>import("./index.html-8afb0b28.js"),[]).then(({data:u})=>u),"v-3ceeab45":()=>__vitePreload(()=>import("./index.html-a8217b62.js"),[]).then(({data:u})=>u),"v-9c48d85a":()=>__vitePreload(()=>import("./index.html-56a017de.js"),[]).then(({data:u})=>u),"v-284efd1e":()=>__vitePreload(()=>import("./index.html-6b3fbd60.js"),[]).then(({data:u})=>u),"v-4b2a5661":()=>__vitePreload(()=>import("./index.html-d26acfc0.js"),[]).then(({data:u})=>u),"v-7cfd563e":()=>__vitePreload(()=>import("./index.html-a8eac30e.js"),[]).then(({data:u})=>u),"v-5e0b61bd":()=>__vitePreload(()=>import("./index.html-096a9aee.js"),[]).then(({data:u})=>u),"v-b310d42a":()=>__vitePreload(()=>import("./index.html-883630ec.js"),[]).then(({data:u})=>u),"v-3d1857f3":()=>__vitePreload(()=>import("./index.html-043e87d8.js"),[]).then(({data:u})=>u),"v-f7c1a2ba":()=>__vitePreload(()=>import("./index.html-0844533a.js"),[]).then(({data:u})=>u),"v-34daa3d8":()=>__vitePreload(()=>import("./index.html-e191a1f5.js"),[]).then(({data:u})=>u),"v-211f44ee":()=>__vitePreload(()=>import("./index.html-9273cef8.js"),[]).then(({data:u})=>u),"v-4c4c684c":()=>__vitePreload(()=>import("./index.html-2ddc49d2.js"),[]).then(({data:u})=>u),"v-36ced019":()=>__vitePreload(()=>import("./index.html-c0b8f8a5.js"),[]).then(({data:u})=>u),"v-033172fa":()=>__vitePreload(()=>import("./index.html-6ce5bf3b.js"),[]).then(({data:u})=>u),"v-0da0cabb":()=>__vitePreload(()=>import("./index.html-1a6c71c2.js"),[]).then(({data:u})=>u),"v-538f49ae":()=>__vitePreload(()=>import("./index.html-8e1b5509.js"),[]).then(({data:u})=>u),"v-25365ef3":()=>__vitePreload(()=>import("./index.html-3a34de06.js"),[]).then(({data:u})=>u),"v-65f2474f":()=>__vitePreload(()=>import("./index.html-11a6913a.js"),[]).then(({data:u})=>u),"v-b305b122":()=>__vitePreload(()=>import("./index.html-96aca4dd.js"),[]).then(({data:u})=>u),"v-40b68770":()=>__vitePreload(()=>import("./index.html-052bdcb6.js"),[]).then(({data:u})=>u),"v-0da0d9fd":()=>__vitePreload(()=>import("./index.html-1c3e70ce.js"),[]).then(({data:u})=>u),"v-4c41ef7e":()=>__vitePreload(()=>import("./index.html-ea39b9d1.js"),[]).then(({data:u})=>u),"v-111be24a":()=>__vitePreload(()=>import("./index.html-31ffea44.js"),[]).then(({data:u})=>u),"v-08073caa":()=>__vitePreload(()=>import("./index.html-1af26993.js"),[]).then(({data:u})=>u),"v-0c9e3db5":()=>__vitePreload(()=>import("./index.html-5523b710.js"),[]).then(({data:u})=>u),"v-48cec584":()=>__vitePreload(()=>import("./index.html-cfec62d4.js"),[]).then(({data:u})=>u),"v-b30bf2f6":()=>__vitePreload(()=>import("./index.html-55f3d75b.js"),[]).then(({data:u})=>u),"v-42254370":()=>__vitePreload(()=>import("./index.html-88385ae3.js"),[]).then(({data:u})=>u),"v-3aafda76":()=>__vitePreload(()=>import("./index.html-b882fd17.js"),[]).then(({data:u})=>u),"v-624a9248":()=>__vitePreload(()=>import("./index.html-454f0094.js"),[]).then(({data:u})=>u),"v-7d0ba9b4":()=>__vitePreload(()=>import("./index.html-ccfb09d0.js"),[]).then(({data:u})=>u)},siteData$1=JSON.parse('{"base":"/","lang":"en-US","title":"","description":"","head":[],"locales":{"/":{"lang":"zh-CN","title":"博客演示","description":"vuepress-theme-hope 的博客演示"}}}'),pagesComponents={"v-184f4da6":defineAsyncComponent(()=>__vitePreload(()=>import("./intro.html-d46efe19.js"),["assets/intro.html-d46efe19.js","assets/framework-56e099cb.js"])),"v-8daa1a0e":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-ae90b228.js"),["assets/index.html-ae90b228.js","assets/framework-56e099cb.js"])),"v-2e3eac9e":defineAsyncComponent(()=>__vitePreload(()=>import("./slides.html-9ff0f488.js"),["assets/slides.html-9ff0f488.js","assets/framework-56e099cb.js"])),"v-4e65ec78":defineAsyncComponent(()=>__vitePreload(()=>import("./disable.html-5302060c.js"),["assets/disable.html-5302060c.js","assets/framework-56e099cb.js"])),"v-c151bf32":defineAsyncComponent(()=>__vitePreload(()=>import("./encrypt.html-5a62243f.js"),["assets/encrypt.html-5a62243f.js","assets/framework-56e099cb.js"])),"v-438ffe52":defineAsyncComponent(()=>__vitePreload(()=>import("./markdown.html-7524b5a8.js"),["assets/markdown.html-7524b5a8.js","assets/framework-56e099cb.js"])),"v-6e19edb7":defineAsyncComponent(()=>__vitePreload(()=>import("./page.html-d4bdbacc.js"),["assets/page.html-d4bdbacc.js","assets/framework-56e099cb.js"])),"v-1473bf53":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-3136f752.js"),["assets/index.html-3136f752.js","assets/framework-56e099cb.js"])),"v-2bc6566a":defineAsyncComponent(()=>__vitePreload(()=>import("./cherry.html-814ba7d2.js"),["assets/cherry.html-814ba7d2.js","assets/framework-56e099cb.js"])),"v-24b7c48d":defineAsyncComponent(()=>__vitePreload(()=>import("./dragonfruit.html-7e8c50c8.js"),["assets/dragonfruit.html-7e8c50c8.js","assets/framework-56e099cb.js"])),"v-f0ec4556":defineAsyncComponent(()=>__vitePreload(()=>import("./strawberry.html-2a3ba0cf.js"),["assets/strawberry.html-2a3ba0cf.js","assets/framework-56e099cb.js"])),"v-df8b6e0c":defineAsyncComponent(()=>__vitePreload(()=>import("./tomato.html-9f64990f.js"),["assets/tomato.html-9f64990f.js","assets/framework-56e099cb.js"])),"v-6c7272c8":defineAsyncComponent(()=>__vitePreload(()=>import("./1.html-7c137e39.js"),["assets/1.html-7c137e39.js","assets/framework-56e099cb.js"])),"v-6908c18a":defineAsyncComponent(()=>__vitePreload(()=>import("./2.html-4fbb532a.js"),["assets/2.html-4fbb532a.js","assets/framework-56e099cb.js"])),"v-e9ddbd06":defineAsyncComponent(()=>__vitePreload(()=>import("./1.html-5b41c3c2.js"),["assets/1.html-5b41c3c2.js","assets/framework-56e099cb.js"])),"v-ae5e1d4e":defineAsyncComponent(()=>__vitePreload(()=>import("./3.html-054222d0.js"),["assets/3.html-054222d0.js","assets/framework-56e099cb.js"])),"v-aaf46c10":defineAsyncComponent(()=>__vitePreload(()=>import("./4.html-2e0cde1c.js"),["assets/4.html-2e0cde1c.js","assets/framework-56e099cb.js"])),"v-23c9dff9":defineAsyncComponent(()=>__vitePreload(()=>import("./1.html-bd837d03.js"),["assets/1.html-bd837d03.js","assets/framework-56e099cb.js"])),"v-257eb898":defineAsyncComponent(()=>__vitePreload(()=>import("./2.html-0075e625.js"),["assets/2.html-0075e625.js","assets/framework-56e099cb.js"])),"v-27339137":defineAsyncComponent(()=>__vitePreload(()=>import("./3.html-83f6317a.js"),["assets/3.html-83f6317a.js","assets/framework-56e099cb.js"])),"v-449df5bb":defineAsyncComponent(()=>__vitePreload(()=>import("./1.html-8eda1949.js"),["assets/1.html-8eda1949.js","assets/framework-56e099cb.js"])),"v-4652ce5a":defineAsyncComponent(()=>__vitePreload(()=>import("./2.html-e8f420a5.js"),["assets/2.html-e8f420a5.js","assets/framework-56e099cb.js"])),"v-4807a6f9":defineAsyncComponent(()=>__vitePreload(()=>import("./3.html-24a29a23.js"),["assets/3.html-24a29a23.js","assets/framework-56e099cb.js"])),"v-49bc7f98":defineAsyncComponent(()=>__vitePreload(()=>import("./4.html-f030151e.js"),["assets/4.html-f030151e.js","assets/framework-56e099cb.js"])),"v-4b715837":defineAsyncComponent(()=>__vitePreload(()=>import("./5.html-71882f49.js"),["assets/5.html-71882f49.js","assets/framework-56e099cb.js"])),"v-4d2630d6":defineAsyncComponent(()=>__vitePreload(()=>import("./6.html-f050a962.js"),["assets/6.html-f050a962.js","assets/framework-56e099cb.js"])),"v-4edb0975":defineAsyncComponent(()=>__vitePreload(()=>import("./7.html-6a9875f3.js"),["assets/7.html-6a9875f3.js","assets/framework-56e099cb.js"])),"v-1975ed9a":defineAsyncComponent(()=>__vitePreload(()=>import("./3.html-dcbc8604.js"),["assets/3.html-dcbc8604.js","assets/framework-56e099cb.js"])),"v-1b2ac639":defineAsyncComponent(()=>__vitePreload(()=>import("./4.html-d18eff7d.js"),["assets/4.html-d18eff7d.js","assets/framework-56e099cb.js"])),"v-1cdf9ed8":defineAsyncComponent(()=>__vitePreload(()=>import("./5.html-228e2f1c.js"),["assets/5.html-228e2f1c.js","assets/framework-56e099cb.js"])),"v-1e947777":defineAsyncComponent(()=>__vitePreload(()=>import("./6.html-e68e0fbb.js"),["assets/6.html-e68e0fbb.js","assets/framework-56e099cb.js"])),"v-d0058120":defineAsyncComponent(()=>__vitePreload(()=>import("./lua.html-a03ee98d.js"),["assets/lua.html-a03ee98d.js","assets/framework-56e099cb.js"])),"v-67b8c712":defineAsyncComponent(()=>__vitePreload(()=>import("./1.html-eb34e197.js"),["assets/1.html-eb34e197.js","assets/framework-56e099cb.js"])),"v-696d9fb1":defineAsyncComponent(()=>__vitePreload(()=>import("./2.html-1340c28b.js"),["assets/2.html-1340c28b.js","assets/framework-56e099cb.js"])),"v-6b227850":defineAsyncComponent(()=>__vitePreload(()=>import("./3.html-ba6e2311.js"),["assets/3.html-ba6e2311.js","assets/framework-56e099cb.js"])),"v-6cd750ef":defineAsyncComponent(()=>__vitePreload(()=>import("./4.html-df171fe9.js"),["assets/4.html-df171fe9.js","assets/framework-56e099cb.js"])),"v-7a07405d":defineAsyncComponent(()=>__vitePreload(()=>import("./1.html-34571615.js"),["assets/1.html-34571615.js","assets/framework-56e099cb.js"])),"v-7bbc18fc":defineAsyncComponent(()=>__vitePreload(()=>import("./2.html-b3e831b7.js"),["assets/2.html-b3e831b7.js","assets/framework-56e099cb.js"])),"v-7d70f19b":defineAsyncComponent(()=>__vitePreload(()=>import("./3.html-053b2c52.js"),["assets/3.html-053b2c52.js","assets/framework-56e099cb.js"])),"v-7f25ca3a":defineAsyncComponent(()=>__vitePreload(()=>import("./4.html-fcf19978.js"),["assets/4.html-fcf19978.js","assets/framework-56e099cb.js"])),"v-29c3d532":defineAsyncComponent(()=>__vitePreload(()=>import("./1.html-c9ee7335.js"),["assets/1.html-c9ee7335.js","assets/framework-56e099cb.js"])),"v-2b78add1":defineAsyncComponent(()=>__vitePreload(()=>import("./2.html-d5581402.js"),["assets/2.html-d5581402.js","assets/framework-56e099cb.js"])),"v-2d2d8670":defineAsyncComponent(()=>__vitePreload(()=>import("./3.html-27955bdb.js"),["assets/3.html-27955bdb.js","assets/framework-56e099cb.js"])),"v-2ee25f0f":defineAsyncComponent(()=>__vitePreload(()=>import("./4.html-401b3ed3.js"),["assets/4.html-401b3ed3.js","assets/framework-56e099cb.js"])),"v-309737ae":defineAsyncComponent(()=>__vitePreload(()=>import("./5.html-72317d24.js"),["assets/5.html-72317d24.js","assets/framework-56e099cb.js"])),"v-324c104d":defineAsyncComponent(()=>__vitePreload(()=>import("./6.html-222372ff.js"),["assets/6.html-222372ff.js","assets/framework-56e099cb.js"])),"v-dd991ea6":defineAsyncComponent(()=>__vitePreload(()=>import("./1.html-370bc013.js"),["assets/1.html-370bc013.js","assets/framework-56e099cb.js"])),"v-da2f6d68":defineAsyncComponent(()=>__vitePreload(()=>import("./2.html-e544c3a3.js"),["assets/2.html-e544c3a3.js","assets/framework-56e099cb.js"])),"v-d6c5bc2a":defineAsyncComponent(()=>__vitePreload(()=>import("./3.html-09b5943f.js"),["assets/3.html-09b5943f.js","assets/framework-56e099cb.js"])),"v-3706649a":defineAsyncComponent(()=>__vitePreload(()=>import("./404.html-86880e56.js"),["assets/404.html-86880e56.js","assets/framework-56e099cb.js"])),"v-e1e3da16":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-909fd19f.js"),["assets/index.html-909fd19f.js","assets/framework-56e099cb.js"])),"v-e199c358":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-aa02e084.js"),["assets/index.html-aa02e084.js","assets/framework-56e099cb.js"])),"v-e4cb1150":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-c89b4649.js"),["assets/index.html-c89b4649.js","assets/framework-56e099cb.js"])),"v-7ae11416":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-d7b31a9f.js"),["assets/index.html-d7b31a9f.js","assets/framework-56e099cb.js"])),"v-65106313":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-9ee39423.js"),["assets/index.html-9ee39423.js","assets/framework-56e099cb.js"])),"v-eb307d1e":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-aef2c4d7.js"),["assets/index.html-aef2c4d7.js","assets/framework-56e099cb.js"])),"v-eb305e9a":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-c899b66d.js"),["assets/index.html-c899b66d.js","assets/framework-56e099cb.js"])),"v-0333e414":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-ae412a73.js"),["assets/index.html-ae412a73.js","assets/framework-56e099cb.js"])),"v-7adc32e2":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-6b1a6506.js"),["assets/index.html-6b1a6506.js","assets/framework-56e099cb.js"])),"v-08f42f4a":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-5c6d41ca.js"),["assets/index.html-5c6d41ca.js","assets/framework-56e099cb.js"])),"v-30be3cd5":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-8e8993c4.js"),["assets/index.html-8e8993c4.js","assets/framework-56e099cb.js"])),"v-8927552c":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-547aa497.js"),["assets/index.html-547aa497.js","assets/framework-56e099cb.js"])),"v-67a8e925":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-bf705354.js"),["assets/index.html-bf705354.js","assets/framework-56e099cb.js"])),"v-5bc93818":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-89ae4dc2.js"),["assets/index.html-89ae4dc2.js","assets/framework-56e099cb.js"])),"v-744d024e":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-83ee3e10.js"),["assets/index.html-83ee3e10.js","assets/framework-56e099cb.js"])),"v-e52c881c":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-cd52b940.js"),["assets/index.html-cd52b940.js","assets/framework-56e099cb.js"])),"v-154dc4c4":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-b1892d98.js"),["assets/index.html-b1892d98.js","assets/framework-56e099cb.js"])),"v-01560935":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-ff895244.js"),["assets/index.html-ff895244.js","assets/framework-56e099cb.js"])),"v-03d57386":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-2c60f979.js"),["assets/index.html-2c60f979.js","assets/framework-56e099cb.js"])),"v-a378ad66":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-b3d104f5.js"),["assets/index.html-b3d104f5.js","assets/framework-56e099cb.js"])),"v-0c75a0f8":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-e94510f8.js"),["assets/index.html-e94510f8.js","assets/framework-56e099cb.js"])),"v-7b167472":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-ed0e00e2.js"),["assets/index.html-ed0e00e2.js","assets/framework-56e099cb.js"])),"v-226a68ec":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-b9653855.js"),["assets/index.html-b9653855.js","assets/framework-56e099cb.js"])),"v-83e1f92e":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-659338d5.js"),["assets/index.html-659338d5.js","assets/framework-56e099cb.js"])),"v-12590846":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-cece619f.js"),["assets/index.html-cece619f.js","assets/framework-56e099cb.js"])),"v-1e447d61":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-4154a9cf.js"),["assets/index.html-4154a9cf.js","assets/framework-56e099cb.js"])),"v-247d58ff":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-e5500cc6.js"),["assets/index.html-e5500cc6.js","assets/framework-56e099cb.js"])),"v-484552dc":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-11a5542f.js"),["assets/index.html-11a5542f.js","assets/framework-56e099cb.js"])),"v-76b80ea2":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-ffe20159.js"),["assets/index.html-ffe20159.js","assets/framework-56e099cb.js"])),"v-0f1d0e94":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-8239ccca.js"),["assets/index.html-8239ccca.js","assets/framework-56e099cb.js"])),"v-57ded594":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-25d84c29.js"),["assets/index.html-25d84c29.js","assets/framework-56e099cb.js"])),"v-3e6b05e8":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-8656cfdc.js"),["assets/index.html-8656cfdc.js","assets/framework-56e099cb.js"])),"v-94bff69c":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-274602dd.js"),["assets/index.html-274602dd.js","assets/framework-56e099cb.js"])),"v-301b24f4":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-56ad4c37.js"),["assets/index.html-56ad4c37.js","assets/framework-56e099cb.js"])),"v-65efd6b5":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-bc2a07cd.js"),["assets/index.html-bc2a07cd.js","assets/framework-56e099cb.js"])),"v-3ceeab45":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-39eb48a5.js"),["assets/index.html-39eb48a5.js","assets/framework-56e099cb.js"])),"v-9c48d85a":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-64d124ec.js"),["assets/index.html-64d124ec.js","assets/framework-56e099cb.js"])),"v-284efd1e":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-fcf1ba21.js"),["assets/index.html-fcf1ba21.js","assets/framework-56e099cb.js"])),"v-4b2a5661":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-45036084.js"),["assets/index.html-45036084.js","assets/framework-56e099cb.js"])),"v-7cfd563e":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-5e5e2c88.js"),["assets/index.html-5e5e2c88.js","assets/framework-56e099cb.js"])),"v-5e0b61bd":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-bc9a2a05.js"),["assets/index.html-bc9a2a05.js","assets/framework-56e099cb.js"])),"v-b310d42a":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-a2414e8f.js"),["assets/index.html-a2414e8f.js","assets/framework-56e099cb.js"])),"v-3d1857f3":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-47a711aa.js"),["assets/index.html-47a711aa.js","assets/framework-56e099cb.js"])),"v-f7c1a2ba":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-5507e2fe.js"),["assets/index.html-5507e2fe.js","assets/framework-56e099cb.js"])),"v-34daa3d8":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-03b95d1c.js"),["assets/index.html-03b95d1c.js","assets/framework-56e099cb.js"])),"v-211f44ee":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-e0f68783.js"),["assets/index.html-e0f68783.js","assets/framework-56e099cb.js"])),"v-4c4c684c":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-77f532f3.js"),["assets/index.html-77f532f3.js","assets/framework-56e099cb.js"])),"v-36ced019":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-154c2652.js"),["assets/index.html-154c2652.js","assets/framework-56e099cb.js"])),"v-033172fa":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-00c28cc5.js"),["assets/index.html-00c28cc5.js","assets/framework-56e099cb.js"])),"v-0da0cabb":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-a0dbca5b.js"),["assets/index.html-a0dbca5b.js","assets/framework-56e099cb.js"])),"v-538f49ae":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-2369335a.js"),["assets/index.html-2369335a.js","assets/framework-56e099cb.js"])),"v-25365ef3":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-36eef8a7.js"),["assets/index.html-36eef8a7.js","assets/framework-56e099cb.js"])),"v-65f2474f":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-ae2a0170.js"),["assets/index.html-ae2a0170.js","assets/framework-56e099cb.js"])),"v-b305b122":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-722413a8.js"),["assets/index.html-722413a8.js","assets/framework-56e099cb.js"])),"v-40b68770":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-81c1e196.js"),["assets/index.html-81c1e196.js","assets/framework-56e099cb.js"])),"v-0da0d9fd":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-15fd02f5.js"),["assets/index.html-15fd02f5.js","assets/framework-56e099cb.js"])),"v-4c41ef7e":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-81b86823.js"),["assets/index.html-81b86823.js","assets/framework-56e099cb.js"])),"v-111be24a":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-0c66c52a.js"),["assets/index.html-0c66c52a.js","assets/framework-56e099cb.js"])),"v-08073caa":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-d284248d.js"),["assets/index.html-d284248d.js","assets/framework-56e099cb.js"])),"v-0c9e3db5":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-f7a380a2.js"),["assets/index.html-f7a380a2.js","assets/framework-56e099cb.js"])),"v-48cec584":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-046592f8.js"),["assets/index.html-046592f8.js","assets/framework-56e099cb.js"])),"v-b30bf2f6":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-85fd1156.js"),["assets/index.html-85fd1156.js","assets/framework-56e099cb.js"])),"v-42254370":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-2e4728b6.js"),["assets/index.html-2e4728b6.js","assets/framework-56e099cb.js"])),"v-3aafda76":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-a52c2961.js"),["assets/index.html-a52c2961.js","assets/framework-56e099cb.js"])),"v-624a9248":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-ad0e1292.js"),["assets/index.html-ad0e1292.js","assets/framework-56e099cb.js"])),"v-7d0ba9b4":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-d6efb8e5.js"),["assets/index.html-d6efb8e5.js","assets/framework-56e099cb.js"]))};var layoutsSymbol=Symbol(""),pagesData=ref(pagesData$1),pageDataEmpty=readonly({key:"",path:"",title:"",lang:"",frontmatter:{},headers:[]}),pageData=ref(pageDataEmpty),usePageData=()=>pageData,pageFrontmatterSymbol=Symbol(""),usePageFrontmatter=()=>{const u=inject(pageFrontmatterSymbol);if(!u)throw new Error("usePageFrontmatter() is called without provider.");return u},pageHeadSymbol=Symbol(""),usePageHead=()=>{const u=inject(pageHeadSymbol);if(!u)throw new Error("usePageHead() is called without provider.");return u},pageHeadTitleSymbol=Symbol(""),usePageHeadTitle=()=>{const u=inject(pageHeadTitleSymbol);if(!u)throw new Error("usePageHeadTitle() is called without provider.");return u},pageLangSymbol=Symbol(""),usePageLang=()=>{const u=inject(pageLangSymbol);if(!u)throw new Error("usePageLang() is called without provider.");return u},pageLayoutSymbol=Symbol(""),usePageLayout=()=>{const u=inject(pageLayoutSymbol);if(!u)throw new Error("usePageLayout() is called without provider.");return u},routeLocaleSymbol=Symbol(""),useRouteLocale=()=>{const u=inject(routeLocaleSymbol);if(!u)throw new Error("useRouteLocale() is called without provider.");return u},siteData=ref(siteData$1),useSiteData=()=>siteData,siteLocaleDataSymbol=Symbol(""),useSiteLocaleData=()=>{const u=inject(siteLocaleDataSymbol);if(!u)throw new Error("useSiteLocaleData() is called without provider.");return u},updateHeadSymbol=Symbol(""),LAYOUT_NAME_DEFAULT="Layout",LAYOUT_NAME_NOT_FOUND="NotFound",resolvers=reactive({resolveLayouts:u=>u.reduce((m,b)=>({...m,...b.layouts}),{}),resolvePageData:async u=>{const m=pagesData.value[u];return await(m==null?void 0:m())??pageDataEmpty},resolvePageFrontmatter:u=>u.frontmatter,resolvePageHead:(u,m,b)=>{const $=isString$1(m.description)?m.description:b.description,T=[...isArray(m.head)?m.head:[],...b.head,["title",{},u],["meta",{name:"description",content:$}]];return dedupeHead(T)},resolvePageHeadTitle:(u,m)=>[u.title,m.title].filter(b=>!!b).join(" | "),resolvePageLang:u=>u.lang||"en",resolvePageLayout:(u,m)=>{let b;if(u.path){const $=u.frontmatter.layout;isString$1($)?b=$:b=LAYOUT_NAME_DEFAULT}else b=LAYOUT_NAME_NOT_FOUND;return m[b]},resolveRouteLocale:(u,m)=>resolveLocalePath(u,m),resolveSiteLocaleData:(u,m)=>({...u,...u.locales[m]})}),ClientOnly=defineComponent({name:"ClientOnly",setup(u,m){const b=ref(!1);return onMounted(()=>{b.value=!0}),()=>{var $,T;return b.value?(T=($=m.slots).default)==null?void 0:T.call($):null}}}),Content=defineComponent({name:"Content",props:{pageKey:{type:String,required:!1,default:""}},setup(u){const m=usePageData(),b=computed(()=>pagesComponents[u.pageKey||m.value.key]);return()=>b.value?h$3(b.value):h$3("div","404 Not Found")}}),defineClientConfig=(u={})=>u,withBase=u=>isLinkHttp(u)?u:`/${removeLeadingSlash(u)}`;const hopeInject="",clientConfig0={};var u8=Uint8Array,u16=Uint16Array,u32=Uint32Array,fleb=new u8([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),fdeb=new u8([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),clim=new u8([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),freb=function(u,m){for(var b=new u16(31),$=0;$<31;++$)b[$]=m+=1<<u[$-1];for(var T=new u32(b[30]),$=1;$<30;++$)for(var j=b[$];j<b[$+1];++j)T[j]=j-b[$]<<5|$;return[b,T]},_a$1=freb(fleb,2),fl=_a$1[0],revfl=_a$1[1];fl[28]=258,revfl[258]=28;var _b=freb(fdeb,0),fd=_b[0],rev=new u16(32768);for(var i$2=0;i$2<32768;++i$2){var x$1=(i$2&43690)>>>1|(i$2&21845)<<1;x$1=(x$1&52428)>>>2|(x$1&13107)<<2,x$1=(x$1&61680)>>>4|(x$1&3855)<<4,rev[i$2]=((x$1&65280)>>>8|(x$1&255)<<8)>>>1}var hMap=function(u,m,b){for(var $=u.length,T=0,j=new u16(m);T<$;++T)u[T]&&++j[u[T]-1];var U=new u16(m);for(T=0;T<m;++T)U[T]=U[T-1]+j[T-1]<<1;var G;if(b){G=new u16(1<<m);var W=15-m;for(T=0;T<$;++T)if(u[T])for(var Z=T<<4|u[T],Y=m-u[T],nn=U[u[T]-1]++<<Y,X=nn|(1<<Y)-1;nn<=X;++nn)G[rev[nn]>>>W]=Z}else for(G=new u16($),T=0;T<$;++T)u[T]&&(G[T]=rev[U[u[T]-1]++]>>>15-u[T]);return G},flt=new u8(288);for(var i$2=0;i$2<144;++i$2)flt[i$2]=8;for(var i$2=144;i$2<256;++i$2)flt[i$2]=9;for(var i$2=256;i$2<280;++i$2)flt[i$2]=7;for(var i$2=280;i$2<288;++i$2)flt[i$2]=8;var fdt=new u8(32);for(var i$2=0;i$2<32;++i$2)fdt[i$2]=5;var flrm=hMap(flt,9,1),fdrm=hMap(fdt,5,1),max=function(u){for(var m=u[0],b=1;b<u.length;++b)u[b]>m&&(m=u[b]);return m},bits=function(u,m,b){var $=m/8|0;return(u[$]|u[$+1]<<8)>>(m&7)&b},bits16=function(u,m){var b=m/8|0;return(u[b]|u[b+1]<<8|u[b+2]<<16)>>(m&7)},shft=function(u){return(u+7)/8|0},slc=function(u,m,b){(m==null||m<0)&&(m=0),(b==null||b>u.length)&&(b=u.length);var $=new(u.BYTES_PER_ELEMENT==2?u16:u.BYTES_PER_ELEMENT==4?u32:u8)(b-m);return $.set(u.subarray(m,b)),$},ec=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],err=function(u,m,b){var $=new Error(m||ec[u]);if($.code=u,Error.captureStackTrace&&Error.captureStackTrace($,err),!b)throw $;return $},inflt=function(u,m,b){var $=u.length;if(!$||b&&b.f&&!b.l)return m||new u8(0);var T=!m||b,j=!b||b.i;b||(b={}),m||(m=new u8($*3));var U=function(xn){var Dn=m.length;if(xn>Dn){var Tn=new u8(Math.max(Dn*2,xn));Tn.set(m),m=Tn}},G=b.f||0,W=b.p||0,Z=b.b||0,Y=b.l,nn=b.d,X=b.m,en=b.n,sn=$*8;do{if(!Y){G=bits(u,W,1);var an=bits(u,W+1,3);if(W+=3,an)if(an==1)Y=flrm,nn=fdrm,X=9,en=5;else if(an==2){var gn=bits(u,W,31)+257,$n=bits(u,W+10,15)+4,yn=gn+bits(u,W+5,31)+1;W+=14;for(var wn=new u8(yn),dn=new u8(19),tn=0;tn<$n;++tn)dn[clim[tn]]=bits(u,W+tn*3,7);W+=$n*3;for(var un=max(dn),fn=(1<<un)-1,Ln=hMap(dn,un,1),tn=0;tn<yn;){var Bn=Ln[bits(u,W,fn)];W+=Bn&15;var on=Bn>>>4;if(on<16)wn[tn++]=on;else{var mn=0,pn=0;for(on==16?(pn=3+bits(u,W,3),W+=2,mn=wn[tn-1]):on==17?(pn=3+bits(u,W,7),W+=3):on==18&&(pn=11+bits(u,W,127),W+=7);pn--;)wn[tn++]=mn}}var ln=wn.subarray(0,gn),vn=wn.subarray(gn);X=max(ln),en=max(vn),Y=hMap(ln,X,1),nn=hMap(vn,en,1)}else err(1);else{var on=shft(W)+4,rn=u[on-4]|u[on-3]<<8,kn=on+rn;if(kn>$){j&&err(0);break}T&&U(Z+rn),m.set(u.subarray(on,kn),Z),b.b=Z+=rn,b.p=W=kn*8,b.f=G;continue}if(W>sn){j&&err(0);break}}T&&U(Z+131072);for(var cn=(1<<X)-1,bn=(1<<en)-1,hn=W;;hn=W){var mn=Y[bits16(u,W)&cn],_n=mn>>>4;if(W+=mn&15,W>sn){j&&err(0);break}if(mn||err(2),_n<256)m[Z++]=_n;else if(_n==256){hn=W,Y=null;break}else{var An=_n-254;if(_n>264){var tn=_n-257,En=fleb[tn];An=bits(u,W,(1<<En)-1)+fl[tn],W+=En}var Cn=nn[bits16(u,W)&bn],Pn=Cn>>>4;Cn||err(3),W+=Cn&15;var vn=fd[Pn];if(Pn>3){var En=fdeb[Pn];vn+=bits16(u,W)&(1<<En)-1,W+=En}if(W>sn){j&&err(0);break}T&&U(Z+131072);for(var In=Z+An;Z<In;Z+=4)m[Z]=m[Z-vn],m[Z+1]=m[Z+1-vn],m[Z+2]=m[Z+2-vn],m[Z+3]=m[Z+3-vn];Z=In}}b.l=Y,b.p=hn,b.b=Z,b.f=G,Y&&(G=1,b.m=X,b.d=nn,b.n=en)}while(!G);return Z==m.length?m:slc(m,0,Z)},et$1=new u8(0),zlv=function(u){((u[0]&15)!=8||u[0]>>>4>7||(u[0]<<8|u[1])%31)&&err(6,"invalid zlib data"),u[1]&32&&err(6,"invalid zlib data: preset dictionaries not supported")};function unzlibSync(u,m){return inflt((zlv(u),u.subarray(2,-4)),m)}var te$1=typeof TextEncoder<"u"&&new TextEncoder,td=typeof TextDecoder<"u"&&new TextDecoder,tds=0;try{td.decode(et$1,{stream:!0}),tds=1}catch{}var dutf8=function(u){for(var m="",b=0;;){var $=u[b++],T=($>127)+($>223)+($>239);if(b+T>u.length)return[m,slc(u,b-1)];T?T==3?($=(($&15)<<18|(u[b++]&63)<<12|(u[b++]&63)<<6|u[b++]&63)-65536,m+=String.fromCharCode(55296|$>>10,56320|$&1023)):T&1?m+=String.fromCharCode(($&31)<<6|u[b++]&63):m+=String.fromCharCode(($&15)<<12|(u[b++]&63)<<6|u[b++]&63):m+=String.fromCharCode($)}};function strToU8(u,m){if(m){for(var b=new u8(u.length),$=0;$<u.length;++$)b[$]=u.charCodeAt($);return b}if(te$1)return te$1.encode(u);for(var T=u.length,j=new u8(u.length+(u.length>>1)),U=0,G=function(Y){j[U++]=Y},$=0;$<T;++$){if(U+5>j.length){var W=new u8(U+8+(T-$<<1));W.set(j),j=W}var Z=u.charCodeAt($);Z<128||m?G(Z):Z<2048?(G(192|Z>>6),G(128|Z&63)):Z>55295&&Z<57344?(Z=65536+(Z&1023<<10)|u.charCodeAt(++$)&1023,G(240|Z>>18),G(128|Z>>12&63),G(128|Z>>6&63),G(128|Z&63)):(G(224|Z>>12),G(128|Z>>6&63),G(128|Z&63))}return slc(j,0,U)}function strFromU8(u,m){if(m){for(var b="",$=0;$<u.length;$+=16384)b+=String.fromCharCode.apply(null,u.subarray($,$+16384));return b}else{if(td)return td.decode(u);var T=dutf8(u),j=T[0],U=T[1];return U.length&&err(8),j}}const P$3=({name:u="",color:m="currentColor"},{slots:b})=>{var $;return h$3("svg",{xmlns:"http://www.w3.org/2000/svg",class:["icon",`${u}-icon`],viewBox:"0 0 1024 1024",fill:m,"aria-label":`${u} icon`},($=b.default)==null?void 0:$.call(b))};P$3.displayName="IconBase";const Ct=(u,{slots:m})=>{var b;return((b=m.default)==null?void 0:b.call(m))||null},vt=()=>h$3(P$3,{name:"github"},()=>h$3("path",{d:"M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z"}));vt.displayName="GitHubIcon";const pt=()=>h$3(P$3,{name:"gitlab"},()=>h$3("path",{d:"M229.333 78.688C223.52 62 199.895 62 193.895 78.688L87.958 406.438h247.5c-.188 0-106.125-327.75-106.125-327.75zM33.77 571.438c-4.875 15 .563 31.687 13.313 41.25l464.812 345L87.77 406.438zm301.5-165 176.813 551.25 176.812-551.25zm655.125 165-54-165-424.312 551.25 464.812-345c12.938-9.563 18.188-26.25 13.5-41.25zM830.27 78.688c-5.812-16.688-29.437-16.688-35.437 0l-106.125 327.75h247.5z"}));pt.displayName="GitlabIcon";const $t=()=>h$3(P$3,{name:"gitee"},()=>h$3("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z"}));$t.displayName="GiteeIcon";const gt=()=>h$3(P$3,{name:"bitbucket"},()=>h$3("path",{d:"M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z"}));gt.displayName="BitbucketIcon";const yt=()=>h$3(P$3,{name:"source"},()=>h$3("path",{d:"M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z"}));yt.displayName="SourceIcon";const _t=(u,m)=>{const b=m?m._instance:getCurrentInstance();return isPlainObject(b==null?void 0:b.appContext.components)&&(u in b.appContext.components||camelize(u)in b.appContext.components||capitalize(camelize(u))in b.appContext.components)},kt=u=>{const m=useRouteLocale();return computed(()=>u[m.value])},Gt=(u,m)=>{let b=1;for(let $=0;$<u.length;$++)b+=u.charCodeAt($),b+=b<<10,b^=b>>6;return b+=b<<3,b^=b>>11,b%m};class Pt{constructor(){this.messageElements={};const m="message-container",b=document.getElementById(m);b?this.containerElement=b:(this.containerElement=document.createElement("div"),this.containerElement.id=m,document.body.appendChild(this.containerElement))}pop(m,b=2e3){const $=document.createElement("div"),T=Date.now();return $.className="message move-in",$.innerHTML=m,this.containerElement.appendChild($),this.messageElements[T]=$,b>0&&setTimeout(()=>{this.close(T)},b),T}close(m){if(m){const b=this.messageElements[m];b.className=b.className.replace("move-in",""),b.className+="move-out",b.addEventListener("animationend",()=>{b.remove(),delete this.messageElements[m]})}else Object.keys(this.messageElements).forEach(b=>this.close(Number(b)))}destroy(){document.body.removeChild(this.containerElement)}}const bt=/#.*$/u,St=u=>{const m=bt.exec(u);return m?m[0]:""},et=u=>decodeURI(u).replace(bt,"").replace(/(index)?\.(md|html)$/,""),Rt=(u,m)=>{if(m===void 0)return!1;const b=et(u.path),$=et(m),T=St(m);return T?T===u.hash&&(!$||b===$):b===$},Bt=u=>{const m=atob(u);return strFromU8(unzlibSync(strToU8(m,!0)))},Ft=u=>isLinkHttp(u)?u:`https://github.com/${u}`,Jt=u=>!isLinkHttp(u)||/github\.com/.test(u)?"GitHub":/bitbucket\.org/.test(u)?"Bitbucket":/gitlab\.com/.test(u)?"GitLab":/gitee\.com/.test(u)?"Gitee":null,Dt=(u,...m)=>{const b=u.resolve(...m),$=b.matched[b.matched.length-1];if(!($!=null&&$.redirect))return b;const{redirect:T}=$,j=isFunction$1(T)?T(b):T,U=isString$1(j)?{path:j}:j;return Dt(u,{hash:b.hash,query:b.query,params:b.params,...U})};var K=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},nt={},qt={get exports(){return nt},set exports(u){nt=u}};(function(u,m){(function(b,$){u.exports=$()})(K,function(){var b=1e3,$=6e4,T=36e5,j="millisecond",U="second",G="minute",W="hour",Z="day",Y="week",nn="month",X="quarter",en="year",sn="date",an="Invalid Date",on=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,rn=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,kn={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(mn){var pn=["th","st","nd","rd"],ln=mn%100;return"["+mn+(pn[(ln-20)%10]||pn[ln]||pn[0])+"]"}},gn=function(mn,pn,ln){var vn=String(mn);return!vn||vn.length>=pn?mn:""+Array(pn+1-vn.length).join(ln)+mn},$n={s:gn,z:function(mn){var pn=-mn.utcOffset(),ln=Math.abs(pn),vn=Math.floor(ln/60),cn=ln%60;return(pn<=0?"+":"-")+gn(vn,2,"0")+":"+gn(cn,2,"0")},m:function mn(pn,ln){if(pn.date()<ln.date())return-mn(ln,pn);var vn=12*(ln.year()-pn.year())+(ln.month()-pn.month()),cn=pn.clone().add(vn,nn),bn=ln-cn<0,hn=pn.clone().add(vn+(bn?-1:1),nn);return+(-(vn+(ln-cn)/(bn?cn-hn:hn-cn))||0)},a:function(mn){return mn<0?Math.ceil(mn)||0:Math.floor(mn)},p:function(mn){return{M:nn,y:en,w:Y,d:Z,D:sn,h:W,m:G,s:U,ms:j,Q:X}[mn]||String(mn||"").toLowerCase().replace(/s$/,"")},u:function(mn){return mn===void 0}},yn="en",wn={};wn[yn]=kn;var dn=function(mn){return mn instanceof Ln},tn=function mn(pn,ln,vn){var cn;if(!pn)return yn;if(typeof pn=="string"){var bn=pn.toLowerCase();wn[bn]&&(cn=bn),ln&&(wn[bn]=ln,cn=bn);var hn=pn.split("-");if(!cn&&hn.length>1)return mn(hn[0])}else{var _n=pn.name;wn[_n]=pn,cn=_n}return!vn&&cn&&(yn=cn),cn||!vn&&yn},un=function(mn,pn){if(dn(mn))return mn.clone();var ln=typeof pn=="object"?pn:{};return ln.date=mn,ln.args=arguments,new Ln(ln)},fn=$n;fn.l=tn,fn.i=dn,fn.w=function(mn,pn){return un(mn,{locale:pn.$L,utc:pn.$u,x:pn.$x,$offset:pn.$offset})};var Ln=function(){function mn(ln){this.$L=tn(ln.locale,null,!0),this.parse(ln)}var pn=mn.prototype;return pn.parse=function(ln){this.$d=function(vn){var cn=vn.date,bn=vn.utc;if(cn===null)return new Date(NaN);if(fn.u(cn))return new Date;if(cn instanceof Date)return new Date(cn);if(typeof cn=="string"&&!/Z$/i.test(cn)){var hn=cn.match(on);if(hn){var _n=hn[2]-1||0,An=(hn[7]||"0").substring(0,3);return bn?new Date(Date.UTC(hn[1],_n,hn[3]||1,hn[4]||0,hn[5]||0,hn[6]||0,An)):new Date(hn[1],_n,hn[3]||1,hn[4]||0,hn[5]||0,hn[6]||0,An)}}return new Date(cn)}(ln),this.$x=ln.x||{},this.init()},pn.init=function(){var ln=this.$d;this.$y=ln.getFullYear(),this.$M=ln.getMonth(),this.$D=ln.getDate(),this.$W=ln.getDay(),this.$H=ln.getHours(),this.$m=ln.getMinutes(),this.$s=ln.getSeconds(),this.$ms=ln.getMilliseconds()},pn.$utils=function(){return fn},pn.isValid=function(){return this.$d.toString()!==an},pn.isSame=function(ln,vn){var cn=un(ln);return this.startOf(vn)<=cn&&cn<=this.endOf(vn)},pn.isAfter=function(ln,vn){return un(ln)<this.startOf(vn)},pn.isBefore=function(ln,vn){return this.endOf(vn)<un(ln)},pn.$g=function(ln,vn,cn){return fn.u(ln)?this[vn]:this.set(cn,ln)},pn.unix=function(){return Math.floor(this.valueOf()/1e3)},pn.valueOf=function(){return this.$d.getTime()},pn.startOf=function(ln,vn){var cn=this,bn=!!fn.u(vn)||vn,hn=fn.p(ln),_n=function(Tn,Sn){var On=fn.w(cn.$u?Date.UTC(cn.$y,Sn,Tn):new Date(cn.$y,Sn,Tn),cn);return bn?On:On.endOf(Z)},An=function(Tn,Sn){return fn.w(cn.toDate()[Tn].apply(cn.toDate("s"),(bn?[0,0,0,0]:[23,59,59,999]).slice(Sn)),cn)},En=this.$W,Cn=this.$M,Pn=this.$D,In="set"+(this.$u?"UTC":"");switch(hn){case en:return bn?_n(1,0):_n(31,11);case nn:return bn?_n(1,Cn):_n(0,Cn+1);case Y:var xn=this.$locale().weekStart||0,Dn=(En<xn?En+7:En)-xn;return _n(bn?Pn-Dn:Pn+(6-Dn),Cn);case Z:case sn:return An(In+"Hours",0);case W:return An(In+"Minutes",1);case G:return An(In+"Seconds",2);case U:return An(In+"Milliseconds",3);default:return this.clone()}},pn.endOf=function(ln){return this.startOf(ln,!1)},pn.$set=function(ln,vn){var cn,bn=fn.p(ln),hn="set"+(this.$u?"UTC":""),_n=(cn={},cn[Z]=hn+"Date",cn[sn]=hn+"Date",cn[nn]=hn+"Month",cn[en]=hn+"FullYear",cn[W]=hn+"Hours",cn[G]=hn+"Minutes",cn[U]=hn+"Seconds",cn[j]=hn+"Milliseconds",cn)[bn],An=bn===Z?this.$D+(vn-this.$W):vn;if(bn===nn||bn===en){var En=this.clone().set(sn,1);En.$d[_n](An),En.init(),this.$d=En.set(sn,Math.min(this.$D,En.daysInMonth())).$d}else _n&&this.$d[_n](An);return this.init(),this},pn.set=function(ln,vn){return this.clone().$set(ln,vn)},pn.get=function(ln){return this[fn.p(ln)]()},pn.add=function(ln,vn){var cn,bn=this;ln=Number(ln);var hn=fn.p(vn),_n=function(Cn){var Pn=un(bn);return fn.w(Pn.date(Pn.date()+Math.round(Cn*ln)),bn)};if(hn===nn)return this.set(nn,this.$M+ln);if(hn===en)return this.set(en,this.$y+ln);if(hn===Z)return _n(1);if(hn===Y)return _n(7);var An=(cn={},cn[G]=$,cn[W]=T,cn[U]=b,cn)[hn]||1,En=this.$d.getTime()+ln*An;return fn.w(En,this)},pn.subtract=function(ln,vn){return this.add(-1*ln,vn)},pn.format=function(ln){var vn=this,cn=this.$locale();if(!this.isValid())return cn.invalidDate||an;var bn=ln||"YYYY-MM-DDTHH:mm:ssZ",hn=fn.z(this),_n=this.$H,An=this.$m,En=this.$M,Cn=cn.weekdays,Pn=cn.months,In=function(Sn,On,Rn,Mn){return Sn&&(Sn[On]||Sn(vn,bn))||Rn[On].slice(0,Mn)},xn=function(Sn){return fn.s(_n%12||12,Sn,"0")},Dn=cn.meridiem||function(Sn,On,Rn){var Mn=Sn<12?"AM":"PM";return Rn?Mn.toLowerCase():Mn},Tn={YY:String(this.$y).slice(-2),YYYY:this.$y,M:En+1,MM:fn.s(En+1,2,"0"),MMM:In(cn.monthsShort,En,Pn,3),MMMM:In(Pn,En),D:this.$D,DD:fn.s(this.$D,2,"0"),d:String(this.$W),dd:In(cn.weekdaysMin,this.$W,Cn,2),ddd:In(cn.weekdaysShort,this.$W,Cn,3),dddd:Cn[this.$W],H:String(_n),HH:fn.s(_n,2,"0"),h:xn(1),hh:xn(2),a:Dn(_n,An,!0),A:Dn(_n,An,!1),m:String(An),mm:fn.s(An,2,"0"),s:String(this.$s),ss:fn.s(this.$s,2,"0"),SSS:fn.s(this.$ms,3,"0"),Z:hn};return bn.replace(rn,function(Sn,On){return On||Tn[Sn]||hn.replace(":","")})},pn.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},pn.diff=function(ln,vn,cn){var bn,hn=fn.p(vn),_n=un(ln),An=(_n.utcOffset()-this.utcOffset())*$,En=this-_n,Cn=fn.m(this,_n);return Cn=(bn={},bn[en]=Cn/12,bn[nn]=Cn,bn[X]=Cn/3,bn[Y]=(En-An)/6048e5,bn[Z]=(En-An)/864e5,bn[W]=En/T,bn[G]=En/$,bn[U]=En/b,bn)[hn]||En,cn?Cn:fn.a(Cn)},pn.daysInMonth=function(){return this.endOf(nn).$D},pn.$locale=function(){return wn[this.$L]},pn.locale=function(ln,vn){if(!ln)return this.$L;var cn=this.clone(),bn=tn(ln,vn,!0);return bn&&(cn.$L=bn),cn},pn.clone=function(){return fn.w(this.$d,this)},pn.toDate=function(){return new Date(this.valueOf())},pn.toJSON=function(){return this.isValid()?this.toISOString():null},pn.toISOString=function(){return this.$d.toISOString()},pn.toString=function(){return this.$d.toUTCString()},mn}(),Bn=Ln.prototype;return un.prototype=Bn,[["$ms",j],["$s",U],["$m",G],["$H",W],["$W",Z],["$M",nn],["$y",en],["$D",sn]].forEach(function(mn){Bn[mn[1]]=function(pn){return this.$g(pn,mn[0],mn[1])}}),un.extend=function(mn,pn){return mn.$i||(mn(pn,Ln,un),mn.$i=!0),un},un.locale=tn,un.isDayjs=dn,un.unix=function(mn){return un(1e3*mn)},un.en=wn[yn],un.Ls=wn,un.p={},un})})(qt);var R$1=nt,it={},Qt={get exports(){return it},set exports(u){it=u}};(function(u,m){(function(b,$){u.exports=$()})(K,function(){return function(b,$,T){var j=$.prototype,U=function(X){var en,sn=X.date,an=X.utc,on={};if(!((en=sn)instanceof Date||en instanceof Array||j.$utils().u(en)||en.constructor.name!=="Object")){if(!Object.keys(sn).length)return new Date;var rn=an?T.utc():T();Object.keys(sn).forEach(function(un){var fn,Ln;on[fn=un,Ln=j.$utils().p(fn),Ln==="date"?"day":Ln]=sn[un]});var kn=on.day||(on.year||on.month>=0?1:rn.date()),gn=on.year||rn.year(),$n=on.month>=0?on.month:on.year||on.day?0:rn.month(),yn=on.hour||0,wn=on.minute||0,dn=on.second||0,tn=on.millisecond||0;return an?new Date(Date.UTC(gn,$n,kn,yn,wn,dn,tn)):new Date(gn,$n,kn,yn,wn,dn,tn)}return sn},G=j.parse;j.parse=function(X){X.date=U.bind(this)(X),G.bind(this)(X)};var W=j.set,Z=j.add,Y=j.subtract,nn=function(X,en,sn,an){an===void 0&&(an=1);var on=Object.keys(en),rn=this;return on.forEach(function(kn){rn=X.bind(rn)(en[kn]*an,kn)}),rn};j.set=function(X,en){return en=en===void 0?X:en,X.constructor.name==="Object"?nn.bind(this)(function(sn,an){return W.bind(this)(an,sn)},en,X):W.bind(this)(X,en)},j.add=function(X,en){return X.constructor.name==="Object"?nn.bind(this)(Z,X,en):Z.bind(this)(X,en)},j.subtract=function(X,en){return X.constructor.name==="Object"?nn.bind(this)(Z,X,en,-1):Y.bind(this)(X,en)}}})})(Qt);var Kt=it,rt={},Xt={get exports(){return rt},set exports(u){rt=u}};(function(u,m){(function(b,$){u.exports=$()})(K,function(){var b={year:0,month:1,day:2,hour:3,minute:4,second:5},$={};return function(T,j,U){var G,W=function(X,en,sn){sn===void 0&&(sn={});var an=new Date(X),on=function(rn,kn){kn===void 0&&(kn={});var gn=kn.timeZoneName||"short",$n=rn+"|"+gn,yn=$[$n];return yn||(yn=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:rn,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:gn}),$[$n]=yn),yn}(en,sn);return on.formatToParts(an)},Z=function(X,en){for(var sn=W(X,en),an=[],on=0;on<sn.length;on+=1){var rn=sn[on],kn=rn.type,gn=rn.value,$n=b[kn];$n>=0&&(an[$n]=parseInt(gn,10))}var yn=an[3],wn=yn===24?0:yn,dn=an[0]+"-"+an[1]+"-"+an[2]+" "+wn+":"+an[4]+":"+an[5]+":000",tn=+X;return(U.utc(dn).valueOf()-(tn-=tn%1e3))/6e4},Y=j.prototype;Y.tz=function(X,en){X===void 0&&(X=G);var sn=this.utcOffset(),an=this.toDate(),on=an.toLocaleString("en-US",{timeZone:X}),rn=Math.round((an-new Date(on))/1e3/60),kn=U(on).$set("millisecond",this.$ms).utcOffset(15*-Math.round(an.getTimezoneOffset()/15)-rn,!0);if(en){var gn=kn.utcOffset();kn=kn.add(sn-gn,"minute")}return kn.$x.$timezone=X,kn},Y.offsetName=function(X){var en=this.$x.$timezone||U.tz.guess(),sn=W(this.valueOf(),en,{timeZoneName:X}).find(function(an){return an.type.toLowerCase()==="timezonename"});return sn&&sn.value};var nn=Y.startOf;Y.startOf=function(X,en){if(!this.$x||!this.$x.$timezone)return nn.call(this,X,en);var sn=U(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return nn.call(sn,X,en).tz(this.$x.$timezone,!0)},U.tz=function(X,en,sn){var an=sn&&en,on=sn||en||G,rn=Z(+U(),on);if(typeof X!="string")return U(X).tz(on);var kn=function(wn,dn,tn){var un=wn-60*dn*1e3,fn=Z(un,tn);if(dn===fn)return[un,dn];var Ln=Z(un-=60*(fn-dn)*1e3,tn);return fn===Ln?[un,fn]:[wn-60*Math.min(fn,Ln)*1e3,Math.max(fn,Ln)]}(U.utc(X,an).valueOf(),rn,on),gn=kn[0],$n=kn[1],yn=U(gn).utcOffset($n);return yn.$x.$timezone=on,yn},U.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},U.tz.setDefault=function(X){G=X}}})})(Xt);var te=rt,st={},ee={get exports(){return st},set exports(u){st=u}};(function(u,m){(function(b,$){u.exports=$()})(K,function(){var b="minute",$=/[+-]\d\d(?::?\d\d)?/g,T=/([+-]|\d\d)/g;return function(j,U,G){var W=U.prototype;G.utc=function(an){var on={date:an,utc:!0,args:arguments};return new U(on)},W.utc=function(an){var on=G(this.toDate(),{locale:this.$L,utc:!0});return an?on.add(this.utcOffset(),b):on},W.local=function(){return G(this.toDate(),{locale:this.$L,utc:!1})};var Z=W.parse;W.parse=function(an){an.utc&&(this.$u=!0),this.$utils().u(an.$offset)||(this.$offset=an.$offset),Z.call(this,an)};var Y=W.init;W.init=function(){if(this.$u){var an=this.$d;this.$y=an.getUTCFullYear(),this.$M=an.getUTCMonth(),this.$D=an.getUTCDate(),this.$W=an.getUTCDay(),this.$H=an.getUTCHours(),this.$m=an.getUTCMinutes(),this.$s=an.getUTCSeconds(),this.$ms=an.getUTCMilliseconds()}else Y.call(this)};var nn=W.utcOffset;W.utcOffset=function(an,on){var rn=this.$utils().u;if(rn(an))return this.$u?0:rn(this.$offset)?nn.call(this):this.$offset;if(typeof an=="string"&&(an=function(yn){yn===void 0&&(yn="");var wn=yn.match($);if(!wn)return null;var dn=(""+wn[0]).match(T)||["-",0,0],tn=dn[0],un=60*+dn[1]+ +dn[2];return un===0?0:tn==="+"?un:-un}(an),an===null))return this;var kn=Math.abs(an)<=16?60*an:an,gn=this;if(on)return gn.$offset=kn,gn.$u=an===0,gn;if(an!==0){var $n=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(gn=this.local().add(kn+$n,b)).$offset=kn,gn.$x.$localOffset=$n}else gn=this.utc();return gn};var X=W.format;W.format=function(an){var on=an||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return X.call(this,on)},W.valueOf=function(){var an=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*an},W.isUTC=function(){return!!this.$u},W.toISOString=function(){return this.toDate().toISOString()},W.toString=function(){return this.toDate().toUTCString()};var en=W.toDate;W.toDate=function(an){return an==="s"&&this.$offset?G(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():en.call(this)};var sn=W.diff;W.diff=function(an,on,rn){if(an&&this.$u===an.$u)return sn.call(this,an,on,rn);var kn=this.local(),gn=G(an).local();return sn.call(kn,gn,on,rn)}}})})(ee);var ne=st;R$1.extend(Kt),R$1.extend(ne),R$1.extend(te);const ot=(u,m)=>{if(u){if(R$1(u instanceof Date?u:u.trim()).isValid()){const $=m?R$1(u).tz(m):R$1(u),T=$.year(),j=$.month()+1,U=$.date(),G=$.hour(),W=$.minute(),Z=$.second(),Y=$.millisecond(),nn=G===0&&W===0&&Z===0&&Y===0;return{value:$.toDate(),info:{year:T,month:j,day:U,...nn?{}:{hour:G,minute:W,second:Z}},type:nn?"date":"full"}}const b=/(?:(\d{2,4})[/-](\d{1,2})[/-](\d{1,2}))?\s*(?:(\d{1,2}):(\d{1,2})(?::(\d{1,2}))?)?/u.exec(u.trim());if(b){const[,$,T,j,U,G,W]=b,Z=on=>typeof on>"u"?void 0:Number(on),Y=on=>on&&on<100?on+2e3:on,nn=on=>U&&G&&!W?0:on,X={year:Y(Z($)),month:Z(T),day:Z(j),hour:Z(U),minute:Z(G),second:nn(Z(W))},en=$===void 0&&T===void 0&&j===void 0,sn=U===void 0&&G===void 0&&W===void 0,an=R$1({...X,month:X.month-1}).toDate();return{value:en?void 0:an,info:sn?{year:X.year,month:X.month,day:X.day}:en?{hour:X.hour,minute:X.minute,second:X.second}:X,type:en?"time":sn?"date":"full"}}}return null},at=(u,...m)=>{if(m.length===0)return u;const b=m.shift()||null;return b&&Object.entries(b).forEach(([$,T])=>{$==="__proto__"||$==="constructor"||(isPlainObject(u[$])&&isPlainObject(T)?at(u[$],T):isArray(T)?u[$]=[...T]:isPlainObject(T)?u[$]={...T}:u[$]=b[$])}),at(u,...m)},re=(u,m=!1)=>u?isArray(u)?u.map(b=>isString$1(b)?{name:b}:b):isString$1(u)?[{name:u}]:isPlainObject(u)&&u.name?[u]:(console.error(`Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string ${m?"":"| false"} | undefined\`, but got`,u),[]):[],ut=(u,m)=>{if(u){if(isArray(u))return u;if(isString$1(u))return[u];console.error(`Expect ${m||"value"} to be \`string[] | string | undefined\`, but got`,u)}return[]},se=u=>ut(u,"category"),oe=u=>ut(u,"tag"),ue=u=>isString$1(u)&&u.startsWith("/");var _a;const isClient=typeof window<"u",isFunction=u=>typeof u=="function",isString=u=>typeof u=="string",noop=()=>{},isIOS=isClient&&((_a=window==null?void 0:window.navigator)==null?void 0:_a.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function resolveUnref(u){return typeof u=="function"?u():unref(u)}function createFilterWrapper(u,m){function b(...$){return new Promise((T,j)=>{Promise.resolve(u(()=>m.apply(this,$),{fn:m,thisArg:this,args:$})).then(T).catch(j)})}return b}const bypassFilter=u=>u();function debounceFilter(u,m={}){let b,$,T=noop;const j=G=>{clearTimeout(G),T(),T=noop};return G=>{const W=resolveUnref(u),Z=resolveUnref(m.maxWait);return b&&j(b),W<=0||Z!==void 0&&Z<=0?($&&(j($),$=null),Promise.resolve(G())):new Promise((Y,nn)=>{T=m.rejectOnCancel?nn:Y,Z&&!$&&($=setTimeout(()=>{b&&j(b),$=null,Y(G())},Z)),b=setTimeout(()=>{$&&j($),$=null,Y(G())},W)})}}function throttleFilter(u,m=!0,b=!0,$=!1){let T=0,j,U=!0,G=noop,W;const Z=()=>{j&&(clearTimeout(j),j=void 0,G(),G=noop)};return nn=>{const X=resolveUnref(u),en=Date.now()-T,sn=()=>W=nn();return Z(),X<=0?(T=Date.now(),sn()):(en>X&&(b||!U)?(T=Date.now(),sn()):m&&(W=new Promise((an,on)=>{G=$?on:an,j=setTimeout(()=>{T=Date.now(),U=!0,an(sn()),Z()},Math.max(0,X-en))})),!b&&!j&&(j=setTimeout(()=>U=!0,X)),U=!1,W)}}function pausableFilter(u=bypassFilter){const m=ref(!0);function b(){m.value=!1}function $(){m.value=!0}const T=(...j)=>{m.value&&u(...j)};return{isActive:readonly(m),pause:b,resume:$,eventFilter:T}}function identity(u){return u}function tryOnScopeDispose(u){return getCurrentScope()?(onScopeDispose(u),!0):!1}function useDebounceFn(u,m=200,b={}){return createFilterWrapper(debounceFilter(m,b),u)}function useThrottleFn(u,m=200,b=!1,$=!0,T=!1){return createFilterWrapper(throttleFilter(m,b,$,T),u)}function resolveRef(u){return typeof u=="function"?computed(u):ref(u)}function tryOnMounted(u,m=!0){getCurrentInstance()?onMounted(u):m?u():nextTick(u)}var __getOwnPropSymbols$6=Object.getOwnPropertySymbols,__hasOwnProp$6=Object.prototype.hasOwnProperty,__propIsEnum$6=Object.prototype.propertyIsEnumerable,__objRest$5=(u,m)=>{var b={};for(var $ in u)__hasOwnProp$6.call(u,$)&&m.indexOf($)<0&&(b[$]=u[$]);if(u!=null&&__getOwnPropSymbols$6)for(var $ of __getOwnPropSymbols$6(u))m.indexOf($)<0&&__propIsEnum$6.call(u,$)&&(b[$]=u[$]);return b};function watchWithFilter(u,m,b={}){const $=b,{eventFilter:T=bypassFilter}=$,j=__objRest$5($,["eventFilter"]);return watch(u,createFilterWrapper(T,m),j)}var __defProp$2=Object.defineProperty,__defProps$2=Object.defineProperties,__getOwnPropDescs$2=Object.getOwnPropertyDescriptors,__getOwnPropSymbols$2=Object.getOwnPropertySymbols,__hasOwnProp$2=Object.prototype.hasOwnProperty,__propIsEnum$2=Object.prototype.propertyIsEnumerable,__defNormalProp$2=(u,m,b)=>m in u?__defProp$2(u,m,{enumerable:!0,configurable:!0,writable:!0,value:b}):u[m]=b,__spreadValues$2=(u,m)=>{for(var b in m||(m={}))__hasOwnProp$2.call(m,b)&&__defNormalProp$2(u,b,m[b]);if(__getOwnPropSymbols$2)for(var b of __getOwnPropSymbols$2(m))__propIsEnum$2.call(m,b)&&__defNormalProp$2(u,b,m[b]);return u},__spreadProps$2=(u,m)=>__defProps$2(u,__getOwnPropDescs$2(m)),__objRest$1=(u,m)=>{var b={};for(var $ in u)__hasOwnProp$2.call(u,$)&&m.indexOf($)<0&&(b[$]=u[$]);if(u!=null&&__getOwnPropSymbols$2)for(var $ of __getOwnPropSymbols$2(u))m.indexOf($)<0&&__propIsEnum$2.call(u,$)&&(b[$]=u[$]);return b};function watchPausable(u,m,b={}){const $=b,{eventFilter:T}=$,j=__objRest$1($,["eventFilter"]),{eventFilter:U,pause:G,resume:W,isActive:Z}=pausableFilter(T);return{stop:watchWithFilter(u,m,__spreadProps$2(__spreadValues$2({},j),{eventFilter:U})),pause:G,resume:W,isActive:Z}}function unrefElement(u){var m;const b=resolveUnref(u);return(m=b==null?void 0:b.$el)!=null?m:b}const defaultWindow=isClient?window:void 0,defaultDocument=isClient?window.document:void 0;function useEventListener(...u){let m,b,$,T;if(isString(u[0])||Array.isArray(u[0])?([b,$,T]=u,m=defaultWindow):[m,b,$,T]=u,!m)return noop;Array.isArray(b)||(b=[b]),Array.isArray($)||($=[$]);const j=[],U=()=>{j.forEach(Y=>Y()),j.length=0},G=(Y,nn,X,en)=>(Y.addEventListener(nn,X,en),()=>Y.removeEventListener(nn,X,en)),W=watch(()=>[unrefElement(m),resolveUnref(T)],([Y,nn])=>{U(),Y&&j.push(...b.flatMap(X=>$.map(en=>G(Y,X,en,nn))))},{immediate:!0,flush:"post"}),Z=()=>{W(),U()};return tryOnScopeDispose(Z),Z}let _iOSWorkaround=!1;function onClickOutside(u,m,b={}){const{window:$=defaultWindow,ignore:T=[],capture:j=!0,detectIframe:U=!1}=b;if(!$)return;isIOS&&!_iOSWorkaround&&(_iOSWorkaround=!0,Array.from($.document.body.children).forEach(X=>X.addEventListener("click",noop)));let G=!0;const W=X=>T.some(en=>{if(typeof en=="string")return Array.from($.document.querySelectorAll(en)).some(sn=>sn===X.target||X.composedPath().includes(sn));{const sn=unrefElement(en);return sn&&(X.target===sn||X.composedPath().includes(sn))}}),Y=[useEventListener($,"click",X=>{const en=unrefElement(u);if(!(!en||en===X.target||X.composedPath().includes(en))){if(X.detail===0&&(G=!W(X)),!G){G=!0;return}m(X)}},{passive:!0,capture:j}),useEventListener($,"pointerdown",X=>{const en=unrefElement(u);en&&(G=!X.composedPath().includes(en)&&!W(X))},{passive:!0}),U&&useEventListener($,"blur",X=>{var en;const sn=unrefElement(u);((en=$.document.activeElement)==null?void 0:en.tagName)==="IFRAME"&&!(sn!=null&&sn.contains($.document.activeElement))&&m(X)})].filter(Boolean);return()=>Y.forEach(X=>X())}function useSupported(u,m=!1){const b=ref(),$=()=>b.value=Boolean(u());return $(),tryOnMounted($,m),b}function useMediaQuery(u,m={}){const{window:b=defaultWindow}=m,$=useSupported(()=>b&&"matchMedia"in b&&typeof b.matchMedia=="function");let T;const j=ref(!1),U=()=>{T&&("removeEventListener"in T?T.removeEventListener("change",G):T.removeListener(G))},G=()=>{$.value&&(U(),T=b.matchMedia(resolveRef(u).value),j.value=T.matches,"addEventListener"in T?T.addEventListener("change",G):T.addListener(G))};return watchEffect(G),tryOnScopeDispose(()=>U()),j}const _global=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},globalKey="__vueuse_ssr_handlers__";_global[globalKey]=_global[globalKey]||{};const handlers=_global[globalKey];function getSSRHandler(u,m){return handlers[u]||m}function guessSerializerType(u){return u==null?"any":u instanceof Set?"set":u instanceof Map?"map":u instanceof Date?"date":typeof u=="boolean"?"boolean":typeof u=="string"?"string":typeof u=="object"?"object":Number.isNaN(u)?"any":"number"}var __defProp$k=Object.defineProperty,__getOwnPropSymbols$m=Object.getOwnPropertySymbols,__hasOwnProp$m=Object.prototype.hasOwnProperty,__propIsEnum$m=Object.prototype.propertyIsEnumerable,__defNormalProp$k=(u,m,b)=>m in u?__defProp$k(u,m,{enumerable:!0,configurable:!0,writable:!0,value:b}):u[m]=b,__spreadValues$k=(u,m)=>{for(var b in m||(m={}))__hasOwnProp$m.call(m,b)&&__defNormalProp$k(u,b,m[b]);if(__getOwnPropSymbols$m)for(var b of __getOwnPropSymbols$m(m))__propIsEnum$m.call(m,b)&&__defNormalProp$k(u,b,m[b]);return u};const StorageSerializers={boolean:{read:u=>u==="true",write:u=>String(u)},object:{read:u=>JSON.parse(u),write:u=>JSON.stringify(u)},number:{read:u=>Number.parseFloat(u),write:u=>String(u)},any:{read:u=>u,write:u=>String(u)},string:{read:u=>u,write:u=>String(u)},map:{read:u=>new Map(JSON.parse(u)),write:u=>JSON.stringify(Array.from(u.entries()))},set:{read:u=>new Set(JSON.parse(u)),write:u=>JSON.stringify(Array.from(u))},date:{read:u=>new Date(u),write:u=>u.toISOString()}},customStorageEventName="vueuse-storage";function useStorage(u,m,b,$={}){var T;const{flush:j="pre",deep:U=!0,listenToStorageChanges:G=!0,writeDefaults:W=!0,mergeDefaults:Z=!1,shallow:Y,window:nn=defaultWindow,eventFilter:X,onError:en=tn=>{console.error(tn)}}=$,sn=(Y?shallowRef:ref)(m);if(!b)try{b=getSSRHandler("getDefaultStorage",()=>{var tn;return(tn=defaultWindow)==null?void 0:tn.localStorage})()}catch(tn){en(tn)}if(!b)return sn;const an=resolveUnref(m),on=guessSerializerType(an),rn=(T=$.serializer)!=null?T:StorageSerializers[on],{pause:kn,resume:gn}=watchPausable(sn,()=>$n(sn.value),{flush:j,deep:U,eventFilter:X});return nn&&G&&(useEventListener(nn,"storage",dn),useEventListener(nn,customStorageEventName,wn)),dn(),sn;function $n(tn){try{if(tn==null)b.removeItem(u);else{const un=rn.write(tn),fn=b.getItem(u);fn!==un&&(b.setItem(u,un),nn&&nn.dispatchEvent(new CustomEvent(customStorageEventName,{detail:{key:u,oldValue:fn,newValue:un,storageArea:b}})))}}catch(un){en(un)}}function yn(tn){const un=tn?tn.newValue:b.getItem(u);if(un==null)return W&&an!==null&&b.setItem(u,rn.write(an)),an;if(!tn&&Z){const fn=rn.read(un);return isFunction(Z)?Z(fn,an):on==="object"&&!Array.isArray(fn)?__spreadValues$k(__spreadValues$k({},an),fn):fn}else return typeof un!="string"?un:rn.read(un)}function wn(tn){dn(tn.detail)}function dn(tn){if(!(tn&&tn.storageArea!==b)){if(tn&&tn.key==null){sn.value=an;return}if(!(tn&&tn.key!==u)){kn();try{sn.value=yn(tn)}catch(un){en(un)}finally{tn?nextTick(gn):gn()}}}}}function usePreferredDark(u){return useMediaQuery("(prefers-color-scheme: dark)",u)}const functionsMap=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function useFullscreen(u,m={}){const{document:b=defaultDocument,autoExit:$=!1}=m,T=u||(b==null?void 0:b.querySelector("html")),j=ref(!1);let U=functionsMap[0];const G=useSupported(()=>{if(b){for(const an of functionsMap)if(an[1]in b)return U=an,!0}else return!1;return!1}),[W,Z,Y,,nn]=U;async function X(){G.value&&(b!=null&&b[Y]&&await b[Z](),j.value=!1)}async function en(){if(!G.value)return;await X();const an=unrefElement(T);an&&(await an[W](),j.value=!0)}async function sn(){j.value?await X():await en()}return b&&useEventListener(b,nn,()=>{j.value=!!(b!=null&&b[Y])},!1),$&&tryOnScopeDispose(X),{isSupported:G,isFullscreen:j,enter:en,exit:X,toggle:sn}}var SwipeDirection;(function(u){u.UP="UP",u.RIGHT="RIGHT",u.DOWN="DOWN",u.LEFT="LEFT",u.NONE="NONE"})(SwipeDirection||(SwipeDirection={}));let _id=0;function useStyleTag(u,m={}){const b=ref(!1),{document:$=defaultDocument,immediate:T=!0,manual:j=!1,id:U=`vueuse_styletag_${++_id}`}=m,G=ref(u);let W=()=>{};const Z=()=>{if(!$)return;const nn=$.getElementById(U)||$.createElement("style");nn.isConnected||(nn.type="text/css",nn.id=U,m.media&&(nn.media=m.media),$.head.appendChild(nn)),!b.value&&(W=watch(G,X=>{nn.textContent=X},{immediate:!0}),b.value=!0)},Y=()=>{!$||!b.value||(W(),$.head.removeChild($.getElementById(U)),b.value=!1)};return T&&!j&&tryOnMounted(Z),j||tryOnScopeDispose(Y),{id:U,css:G,unload:Y,load:Z,isLoaded:readonly(b)}}var __defProp=Object.defineProperty,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(u,m,b)=>m in u?__defProp(u,m,{enumerable:!0,configurable:!0,writable:!0,value:b}):u[m]=b,__spreadValues=(u,m)=>{for(var b in m||(m={}))__hasOwnProp.call(m,b)&&__defNormalProp(u,b,m[b]);if(__getOwnPropSymbols)for(var b of __getOwnPropSymbols(m))__propIsEnum.call(m,b)&&__defNormalProp(u,b,m[b]);return u};const _TransitionPresets={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};__spreadValues({linear:identity},_TransitionPresets);const badge="",t$1=({type:u="info",text:m="",vertical:b="top",color:$},{slots:T})=>{var j;return h$3("span",{class:["badge",u,{diy:$}],style:{verticalAlign:b,...$?{backgroundColor:$}:{}}},m||((j=T.default)==null?void 0:j.call(T)))};t$1.displayName="Badge";const fontIcon="";var r$3=defineComponent({name:"FontIcon",props:{icon:{type:String,default:""},color:{type:String,default:""},size:{type:[String,Number],default:""}},setup(u){const m=computed(()=>{const b={};return u.color&&(b.color=u.color),u.size&&(b["font-size"]=Number.isNaN(Number(u.size))?u.size:`${u.size}px`),Object.keys(b).length?b:null});return()=>u.icon?h$3("span",{key:u.icon,class:["font-icon icon","",u.icon.includes(" ")?u.icon:`iconfont icon-${u.icon}`],style:m.value}):null}});const backToTop="",a$3=()=>h$3(P$3,{name:"back-to-top"},()=>[h$3("path",{d:"M512 843.2c-36.2 0-66.4-13.6-85.8-21.8-10.8-4.6-22.6 3.6-21.8 15.2l7 102c.4 6.2 7.6 9.4 12.6 5.6l29-22c3.6-2.8 9-1.8 11.4 2l41 64.2c3 4.8 10.2 4.8 13.2 0l41-64.2c2.4-3.8 7.8-4.8 11.4-2l29 22c5 3.8 12.2.6 12.6-5.6l7-102c.8-11.6-11-20-21.8-15.2-19.6 8.2-49.6 21.8-85.8 21.8z"}),h$3("path",{d:"m795.4 586.2-96-98.2C699.4 172 513 32 513 32S324.8 172 324.8 488l-96 98.2c-3.6 3.6-5.2 9-4.4 14.2L261.2 824c1.8 11.4 14.2 17 23.6 10.8L419 744s41.4 40 94.2 40c52.8 0 92.2-40 92.2-40l134.2 90.8c9.2 6.2 21.6.6 23.6-10.8l37-223.8c.4-5.2-1.2-10.4-4.8-14zM513 384c-34 0-61.4-28.6-61.4-64s27.6-64 61.4-64c34 0 61.4 28.6 61.4 64S547 384 513 384z"})]);a$3.displayName="BackToTopIcon";var h$2=defineComponent({name:"BackToTop",props:{threshold:{type:Number,default:300}},setup(u){const m=usePageFrontmatter(),b=kt({"/":{backToTop:"返回顶部"}}),$=ref(0),T=computed(()=>m.value.backToTop!==!1&&$.value>u.threshold),j=()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;return onMounted(()=>{$.value=j()}),useEventListener("scroll",useDebounceFn(()=>{$.value=j()},100)),()=>h$3(Transition,{name:"fade"},()=>T.value?h$3("button",{class:"back-to-top","aria-label":b.value.backToTop,"data-balloon-pos":"left",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"}),$.value=0}},h$3(a$3)):null)}});const srOnly="",clientConfig1=defineClientConfig({enhance:({app:u})=>{_t("Badge")||u.component("Badge",t$1),_t("FontIcon")||u.component("FontIcon",r$3)},setup:()=>{useStyleTag(`      @import url("//at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css");
      `)},rootComponents:[()=>h$3(h$2,{threshold:300})]});function r$2(u,m,b){var $,T,j;m===void 0&&(m=50),b===void 0&&(b={});var U=($=b.isImmediate)!=null&&$,G=(T=b.callback)!=null&&T,W=b.maxWait,Z=Date.now(),Y=[];function nn(){if(W!==void 0){var en=Date.now()-Z;if(en+m>=W)return W-en}return m}var X=function(){var en=[].slice.call(arguments),sn=this;return new Promise(function(an,on){var rn=U&&j===void 0;if(j!==void 0&&clearTimeout(j),j=setTimeout(function(){if(j=void 0,Z=Date.now(),!U){var gn=u.apply(sn,en);G&&G(gn),Y.forEach(function($n){return(0,$n.resolve)(gn)}),Y=[]}},nn()),rn){var kn=u.apply(sn,en);return G&&G(kn),an(kn)}Y.push({resolve:an,reject:on})})};return X.cancel=function(en){j!==void 0&&clearTimeout(j),Y.forEach(function(sn){return(0,sn.reject)(en)}),Y=[]},X}const useActiveHeaderLinks=({headerLinkSelector:u,headerAnchorSelector:m,delay:b,offset:$=5})=>{const T=useRouter(),U=r$2(()=>{var an,on;const G=Math.max(window.scrollY,document.documentElement.scrollTop,document.body.scrollTop);if(Math.abs(G-0)<$){updateHash(T,"");return}const Z=window.innerHeight+G,Y=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),nn=Math.abs(Y-Z)<$,X=Array.from(document.querySelectorAll(u)),sn=Array.from(document.querySelectorAll(m)).filter(rn=>X.some(kn=>kn.hash===rn.hash));for(let rn=0;rn<sn.length;rn++){const kn=sn[rn],gn=sn[rn+1],$n=G>=(((an=kn.parentElement)==null?void 0:an.offsetTop)??0)-$,yn=!gn||G<(((on=gn.parentElement)==null?void 0:on.offsetTop)??0)-$;if(!($n&&yn))continue;const dn=decodeURIComponent(T.currentRoute.value.hash),tn=decodeURIComponent(kn.hash);if(dn===tn)return;if(nn){for(let un=rn+1;un<sn.length;un++)if(dn===decodeURIComponent(sn[un].hash))return}updateHash(T,tn);return}},b);onMounted(()=>{window.addEventListener("scroll",U)}),onBeforeUnmount(()=>{window.removeEventListener("scroll",U)})},updateHash=async(u,m)=>{const{scrollBehavior:b}=u.options;u.options.scrollBehavior=void 0,await u.replace({query:u.currentRoute.value.query,hash:m,force:!0}).finally(()=>u.options.scrollBehavior=b)},headerLinkSelector=".sidebar-link, .toc-link",headerAnchorSelector=".header-anchor",delay=200,offset=5,clientConfig2=defineClientConfig({setup(){useActiveHeaderLinks({headerLinkSelector,headerAnchorSelector,delay,offset})}});var a$2=defineClientConfig({enhance:({app:u})=>{!_t("AutoCatalog",u)&&u.component("AutoCatalog",defineAsyncComponent(()=>__vitePreload(()=>import("./Catalog-22320f60.js"),["assets/Catalog-22320f60.js","assets/framework-56e099cb.js"])))}});const vars$1="",externalLinkIcon="",svg=h$3("svg",{class:"external-link-icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},[h$3("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),h$3("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})]),ExternalLinkIcon=defineComponent({name:"ExternalLinkIcon",props:{locales:{type:Object,required:!1,default:()=>({})}},setup(u){const m=useRouteLocale(),b=computed(()=>u.locales[m.value]??{openInNewWindow:"open in new window"});return()=>h$3("span",[svg,h$3("span",{class:"external-link-icon-sr-only"},b.value.openInNewWindow)])}}),locales={},clientConfig4=defineClientConfig({enhance({app:u}){u.component("ExternalLinkIcon",h$3(ExternalLinkIcon,{locales}))}});/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */const nprogress$1={settings:{minimum:.08,easing:"ease",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,barSelector:'[role="bar"]',parent:"body",template:'<div class="bar" role="bar"></div>'},status:null,set:u=>{const m=nprogress$1.isStarted();u=clamp(u,nprogress$1.settings.minimum,1),nprogress$1.status=u===1?null:u;const b=nprogress$1.render(!m),$=b.querySelector(nprogress$1.settings.barSelector),T=nprogress$1.settings.speed,j=nprogress$1.settings.easing;return b.offsetWidth,queue(U=>{css($,{transform:"translate3d("+toBarPerc(u)+"%,0,0)",transition:"all "+T+"ms "+j}),u===1?(css(b,{transition:"none",opacity:"1"}),b.offsetWidth,setTimeout(function(){css(b,{transition:"all "+T+"ms linear",opacity:"0"}),setTimeout(function(){nprogress$1.remove(),U()},T)},T)):setTimeout(()=>U(),T)}),nprogress$1},isStarted:()=>typeof nprogress$1.status=="number",start:()=>{nprogress$1.status||nprogress$1.set(0);const u=()=>{setTimeout(()=>{nprogress$1.status&&(nprogress$1.trickle(),u())},nprogress$1.settings.trickleSpeed)};return nprogress$1.settings.trickle&&u(),nprogress$1},done:u=>!u&&!nprogress$1.status?nprogress$1:nprogress$1.inc(.3+.5*Math.random()).set(1),inc:u=>{let m=nprogress$1.status;return m?(typeof u!="number"&&(u=(1-m)*clamp(Math.random()*m,.1,.95)),m=clamp(m+u,0,.994),nprogress$1.set(m)):nprogress$1.start()},trickle:()=>nprogress$1.inc(Math.random()*nprogress$1.settings.trickleRate),render:u=>{if(nprogress$1.isRendered())return document.getElementById("nprogress");addClass(document.documentElement,"nprogress-busy");const m=document.createElement("div");m.id="nprogress",m.innerHTML=nprogress$1.settings.template;const b=m.querySelector(nprogress$1.settings.barSelector),$=u?"-100":toBarPerc(nprogress$1.status||0),T=document.querySelector(nprogress$1.settings.parent);return css(b,{transition:"all 0 linear",transform:"translate3d("+$+"%,0,0)"}),T!==document.body&&addClass(T,"nprogress-custom-parent"),T==null||T.appendChild(m),m},remove:()=>{removeClass(document.documentElement,"nprogress-busy"),removeClass(document.querySelector(nprogress$1.settings.parent),"nprogress-custom-parent");const u=document.getElementById("nprogress");u&&removeElement(u)},isRendered:()=>!!document.getElementById("nprogress")},clamp=(u,m,b)=>u<m?m:u>b?b:u,toBarPerc=u=>(-1+u)*100,queue=function(){const u=[];function m(){const b=u.shift();b&&b(m)}return function(b){u.push(b),u.length===1&&m()}}(),css=function(){const u=["Webkit","O","Moz","ms"],m={};function b(U){return U.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(G,W){return W.toUpperCase()})}function $(U){const G=document.body.style;if(U in G)return U;let W=u.length;const Z=U.charAt(0).toUpperCase()+U.slice(1);let Y;for(;W--;)if(Y=u[W]+Z,Y in G)return Y;return U}function T(U){return U=b(U),m[U]||(m[U]=$(U))}function j(U,G,W){G=T(G),U.style[G]=W}return function(U,G){for(const W in G){const Z=G[W];Z!==void 0&&Object.prototype.hasOwnProperty.call(G,W)&&j(U,W,Z)}}}(),hasClass=(u,m)=>(typeof u=="string"?u:classList(u)).indexOf(" "+m+" ")>=0,addClass=(u,m)=>{const b=classList(u),$=b+m;hasClass(b,m)||(u.className=$.substring(1))},removeClass=(u,m)=>{const b=classList(u);if(!hasClass(u,m))return;const $=b.replace(" "+m+" "," ");u.className=$.substring(1,$.length-1)},classList=u=>(" "+(u.className||"")+" ").replace(/\s+/gi," "),removeElement=u=>{u&&u.parentNode&&u.parentNode.removeChild(u)},vars="",nprogress="",useNprogress=()=>{onMounted(()=>{const u=useRouter(),m=new Set;m.add(u.currentRoute.value.path),u.beforeEach(b=>{m.has(b.path)||nprogress$1.start()}),u.afterEach(b=>{m.add(b.path),nprogress$1.done()})})},clientConfig5=defineClientConfig({setup(){useNprogress()}}),themeData$1=JSON.parse('{"encrypt":{},"blog":{"medias":{"Baidu":"https://example.com","BiliBili":"https://example.com","Bitbucket":"https://example.com","Dingding":"https://example.com","Discord":"https://example.com","Dribbble":"https://example.com","Email":"https://example.com","Evernote":"https://example.com","Facebook":"https://example.com","Flipboard":"https://example.com","Gitee":"https://example.com","GitHub":"https://example.com","Gitlab":"https://example.com","Gmail":"https://example.com","Instagram":"https://example.com","Lark":"https://example.com","Lines":"https://example.com","Linkedin":"https://example.com","Pinterest":"https://example.com","Pocket":"https://example.com","QQ":"https://example.com","Qzone":"https://example.com","Reddit":"https://example.com","Rss":"https://example.com","Steam":"https://example.com","Twitter":"https://example.com","Wechat":"https://example.com","Weibo":"https://example.com","Whatsapp":"https://example.com","Youtube":"https://example.com","Zhihu":"https://example.com","MrHope":"https://mrhope.site"}},"locales":{"/":{"lang":"zh-CN","navbarLocales":{"langName":"简体中文","selectLangAriaLabel":"选择语言"},"metaLocales":{"author":"作者","date":"写作日期","origin":"原创","views":"访问量","category":"分类","tag":"标签","readingTime":"阅读时间","words":"字数","toc":"此页内容","prev":"上一页","next":"下一页","lastUpdated":"上次编辑于","contributors":"贡献者","editLink":"在 GitHub 上编辑此页"},"blogLocales":{"article":"文章","articleList":"文章列表","category":"分类","tag":"标签","timeline":"时间轴","timelineTitle":"昨日不在","all":"全部","intro":"个人介绍","star":"收藏"},"paginationLocales":{"prev":"上一页","next":"下一页","navigate":"跳转到","action":"前往","errorText":"请输入 1 到 $page 之前的页码！"},"outlookLocales":{"themeColor":"主题色","darkmode":"外观","fullscreen":"全屏"},"encryptLocales":{"iconLabel":"文章已加密","placeholder":"输入密码","remember":"记住密码","errorHint":"请输入正确的密码"},"routeLocales":{"skipToContent":"跳至主要內容","notFoundMsg":["这里什么也没有","我们是怎么来到这儿的？","这 是 四 零 四 !","看起来你访问了一个失效的链接"],"back":"返回上一页","home":"带我回家","openInNewWindow":"Open in new window"},"author":{"name":"X.ss","url":"https://github.com/xssctt"},"logo":"/xss.svg","repo":"vuepress-theme-hope/vuepress-theme-hope","docsDir":"docs","navbar":["/",{"text":"演示","icon":"discover","link":"/demo/"},{"text":"帖子","icon":"edit","prefix":"/other/","children":[{"text":"MQ","icon":"edit","prefix":"mq/","children":[{"text":"mq1","icon":"edit","link":"1"},{"text":"mq2","icon":"edit","link":"2"},"3","4","5","6","7"]},{"text":"demo","icon":"edit","prefix":"demo/","children":[{"text":"demo1","icon":"edit","link":"1"},{"text":"demo2","icon":"edit","link":"2"}]},{"text":"git","icon":"edit","prefix":"git/","children":[{"text":"git","icon":"edit","link":"1"}]},{"text":"io","icon":"edit","prefix":"io/","children":[{"text":"io 1","icon":"edit","link":"1"},{"text":"io 2","icon":"edit","link":"2"},"3"]},{"text":"linux","icon":"edit","prefix":"linux/","children":[{"text":"linux 1","icon":"edit","link":"4"},{"text":"linux 1","icon":"edit","link":"5"}]},{"text":"lua","icon":"edit","prefix":"lua/","children":[{"text":"lua 1","icon":"edit","link":"lua"}]},{"text":"mybatis","icon":"edit","prefix":"mybatis/","children":[{"text":"mybatis 3","icon":"edit","link":"3"},{"text":"mybatis 4","icon":"edit","link":"4"},{"text":"mybatis 5","icon":"edit","link":"5"},{"text":"mybatis 6","icon":"edit","link":"6"},{"text":"mybatis 7","icon":"edit","link":"7"},{"text":"mybatis 8","icon":"edit","link":"8"}]},{"text":"mysql","icon":"edit","prefix":"mysql/","children":[{"text":"mysql 1","icon":"edit","link":"1"},{"text":"mysql 2","icon":"edit","link":"2"},"3"]},{"text":"redis","icon":"edit","prefix":"redis/","children":[{"text":"redis 1","icon":"edit","link":"1"},{"text":"redis 2","icon":"edit","link":"2"},"3"]},{"text":"spring","icon":"edit","prefix":"spring/","children":[{"text":"spring 1","icon":"edit","link":"1"},{"text":"spring 2","icon":"edit","link":"2"},"3","4","5","6"]},{"text":"樱桃","icon":"edit","link":"cherry"},{"text":"火龙果","icon":"edit","link":"dragonfruit"},"tomato","strawberry"]},{"text":"V2 文档","icon":"note","link":"https://theme-hope.vuejs.vuepress/zh/"}],"sidebar":{"/":["",{"text":"如何使用","icon":"creative","prefix":"guide/","link":"guide/","children":"structure"},{"text":"文档","icon":"note","prefix":"other/","children":"structure"},"intro","slides",{"text":"测试发疯","icon":"note","prefix":"posts/","children":"structure"}]},"footer":"默认页脚","displayFooter":true,"blog":{"description":"一个java开发者","intro":"intro.html"}}}}'),themeData=ref(themeData$1),useThemeData$1=()=>themeData,themeLocaleDataSymbol=Symbol(""),useThemeLocaleData$1=()=>{const u=inject(themeLocaleDataSymbol);if(!u)throw new Error("useThemeLocaleData() is called without provider.");return u},resolveThemeLocaleData=(u,m)=>{var b;return{...u,...(b=u.locales)==null?void 0:b[m]}},clientConfig6=defineClientConfig({enhance({app:u}){const m=useThemeData$1(),b=u._context.provides[routeLocaleSymbol],$=computed(()=>resolveThemeLocaleData(m.value,b.value));u.provide(themeLocaleDataSymbol,$),Object.defineProperties(u.config.globalProperties,{$theme:{get(){return m.value}},$themeLocale:{get(){return $.value}}})}}),giscus="",e$1={provider:"Giscus",lightTheme:"https://unpkg.com/vuepress-theme-hope@next/templates/giscus/light.css",darkTheme:"https://unpkg.com/vuepress-theme-hope@next/templates/giscus/dark.css",repo:"vuepress-theme-hope/giscus-discussions",repoId:"R_kgDOG_Pt2A",category:"Announcements",categoryId:"DIC_kwDOG_Pt2M4COD69"},k$5=Boolean(e$1.categoryId),i$1=["de","gsw","en","es","fr","id","it","ja","ko","pl","ro","ru","tr","vi","zh-CN","zh-TW"];var P$2=defineComponent({name:"GiscusComment",props:{darkmode:Boolean},setup(u){const m=usePageFrontmatter(),b=useRoute(),$=ref(!1),T=computed(()=>{const G=usePageLang().value;if(i$1.includes(G))return G;const W=G.split("-")[0];return i$1.includes(W)?W:"en"}),j=computed(()=>{if(!k$5)return!1;const G=e$1.comment!==!1,W=m.value.comment;return Boolean(W)||G!==!1&&W!==!1}),U=computed(()=>({repo:e$1.repo,repoId:e$1.repoId,category:e$1.category,categoryId:e$1.categoryId,lang:T.value,theme:u.darkmode?e$1.darkTheme:e$1.lightTheme,mapping:e$1.mapping||"pathname",term:withBase(b.path),inputPosition:e$1.inputPosition||"top",reactionsEnabled:e$1.reactionsEnabled!==!1?"1":"0",strict:e$1.strict!==!1?"1":"0",loading:e$1.lazyLoading!==!1?"lazy":"eager",emitMetadata:"0"}));return onMounted(async()=>{await __vitePreload(()=>import("./giscus-0b7adcf8.js"),[]),$.value=!0}),()=>h$3("div",{class:["giscus-wrapper",{"input-top":e$1.inputPosition!=="bottom"}],id:"comment",style:{display:j.value?"block":"none"}},$.value?h$3("giscus-widget",U.value):h$3("div",{style:"text-align:center"},"Loading..."))}});const l$1={provider:"Giscus",lightTheme:"https://unpkg.com/vuepress-theme-hope@next/templates/giscus/light.css",darkTheme:"https://unpkg.com/vuepress-theme-hope@next/templates/giscus/dark.css",repo:"vuepress-theme-hope/giscus-discussions",repoId:"R_kgDOG_Pt2A",category:"Announcements",categoryId:"DIC_kwDOG_Pt2M4COD69"}.comment!==!1;var s=defineClientConfig({enhance:({app:u})=>{const m=defineComponent({name:"CommentService",props:{darkmode:Boolean},setup(b){const $=usePageFrontmatter(),T=computed(()=>$.value.comment||l$1&&$.value.comment!==!1);return()=>h$3(P$2,{darkmode:b.darkmode,style:{display:T.value?"block":"none"}})}});u.component("CommentService",m)}});const message="",balloon="",button="",L$1=800,_$2={"/":{copy:"复制代码",copied:"已复制",hint:"复制成功"}},d$2='.theme-hope-content div[class*="language-"] pre',g$1=!1,w$2=async u=>{try{return navigator.clipboard.writeText(u)}catch{const m=document.createElement("textarea"),b=document.activeElement;m.value=u,m.setAttribute("readonly",""),m.style.contain="strict",m.style.position="absolute",m.style.left="-9999px",m.style.fontSize="12pt";const $=document.getSelection(),T=$?$.rangeCount>0&&$.getRangeAt(0):null;document.body.appendChild(m),m.select(),m.selectionStart=0,m.selectionEnd=u.length,document.execCommand("copy"),document.body.removeChild(m),T&&($.removeAllRanges(),$.addRange(T)),b&&b.focus()}},C$3=()=>navigator?/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/iu.test(navigator.userAgent):!1,p$1=new Map,D$1=()=>{const u=useRoute(),m=kt(_$2),b=j=>{if(!j.hasAttribute("copy-code-registered")){const U=document.createElement("button");U.classList.add("copy-code-button"),U.innerHTML='<div class="copy-icon" />',U.setAttribute("aria-label",m.value.copy),U.setAttribute("data-copied",m.value.copied),j.parentElement&&j.parentElement.insertBefore(U,j),j.setAttribute("copy-code-registered","")}},$=()=>{setTimeout(()=>{isString$1(d$2)?document.querySelectorAll(d$2).forEach(b):isArray(d$2)&&d$2.forEach(j=>{document.querySelectorAll(j).forEach(b)})},L$1)},T=(j,U,G)=>{let{innerText:W=""}=U;/language-(shellscript|shell|bash|sh|zsh)/.test(j.classList.toString())&&(W=W.replace(/^ *(\$|>) /gm,"")),w$2(W).then(()=>{G.classList.add("copied"),clearTimeout(p$1.get(G));const Z=setTimeout(()=>{G.classList.remove("copied"),G.blur(),p$1.delete(G)},2e3);p$1.set(G,Z)})};onMounted(()=>{new Pt,(!C$3()||g$1)&&$(),window.addEventListener("click",j=>{const U=j.target;if(U.matches('div[class*="language-"] > button.copy')){const G=U.parentElement,W=U.nextElementSibling;W&&T(G,W,U)}else if(U.matches('div[class*="language-"] div.copy-icon')){const G=U.parentElement,W=G.parentElement,Z=G.nextElementSibling;Z&&T(W,Z,G)}}),watch(()=>u.path,()=>{(!C$3()||g$1)&&$()})})};var M$2=defineClientConfig({setup:()=>{D$1()}});const chart="",LoadingIcon$1=()=>h$3(P$3,{name:"loading"},()=>["0s","-0.333s","-0.667s"].map(u=>h$3("circle",{cx:512,cy:512,r:0,fill:"none",stroke:"currentColor","stroke-width":"20"},[h$3("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;400",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:u}),h$3("animate",{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:u})]))),parseChartConfig=(config,type)=>{if(type==="json")return JSON.parse(config);const exports={},module={exports};return eval(config),module.exports};var ChartJS=defineComponent({name:"ChartJS",props:{config:{type:String,required:!0},id:{type:String,required:!0},title:{type:String,default:""},type:{type:String,default:"json"}},setup(u){const m=ref(),b=ref(),$=ref(!0);return onMounted(()=>{Promise.all([__vitePreload(()=>import("./auto-6adc87e8.js"),[]),new Promise(T=>setTimeout(T,800))]).then(([{default:T}])=>{T.defaults.maintainAspectRatio=!1;const j=parseChartConfig(Bt(u.config),u.type),U=b.value.getContext("2d");new T(U,j),$.value=!1})}),()=>[u.title?h$3("div",{class:"chart-title"},decodeURIComponent(u.title)):null,$.value?h$3("div",{class:"chart-loading-wrapper"},h$3(LoadingIcon$1)):null,h$3("div",{ref:m,class:"chart-wrapper",id:u.id,style:{display:$.value?"none":"block"}},h$3("canvas",{ref:b,height:400}))]}});const codeTabs="",o$1=useStorage("VUEPRESS_CODE_TAB_STORE",{});var S$2=defineComponent({name:"CodeTabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},id:{type:String,required:!0},tabId:{type:String,default:""}},setup(u,{slots:m}){const b=ref(u.active),$=ref([]),T=()=>{if(u.tabId){const{title:Z,id:Y=Z}=u.data[b.value];o$1.value[u.tabId]=Y}},j=(Z=b.value)=>{b.value=Z<$.value.length-1?Z+1:0,$.value[b.value].focus()},U=(Z=b.value)=>{b.value=Z>0?Z-1:$.value.length-1,$.value[b.value].focus()},G=(Z,Y)=>{if(Z.key===" "||Z.key==="Enter"?(Z.preventDefault(),b.value=Y):Z.key==="ArrowRight"?(Z.preventDefault(),j()):Z.key==="ArrowLeft"&&(Z.preventDefault(),U()),u.tabId){const{title:nn,id:X=nn}=u.data[b.value];o$1.value[u.tabId]=X}},W=()=>{if(u.tabId){const Z=u.data.findIndex(({title:Y,id:nn=Y})=>o$1.value[u.tabId]===nn);if(Z!==-1)return Z}return u.active};return onMounted(()=>{b.value=W(),watch(()=>o$1.value[u.tabId],(Z,Y)=>{if(u.tabId&&Z!==Y){const nn=u.data.findIndex(({title:X,id:en=X})=>en===Z);nn!==-1&&(b.value=nn)}})}),()=>u.data.length?h$3("div",{class:"code-tabs"},[h$3("div",{class:"code-tabs-nav",role:"tablist"},u.data.map(({title:Z},Y)=>{const nn=Y===b.value;return h$3("button",{ref:X=>{X&&($.value[Y]=X)},class:["code-tabs-nav-tab",{active:nn}],role:"tab","aria-controls":`codetab-${u.id}-${Y}`,"aria-selected":nn,onClick:()=>{b.value=Y,T()},onKeydown:X=>G(X,Y)},Z)})),u.data.map(({title:Z,id:Y=Z},nn)=>{var X;const en=nn===b.value;return h$3("div",{class:["code-tab",{active:en}],id:`codetab-${u.id}-${nn}`,role:"tabpanel","aria-expanded":en},(X=m[`tab${nn}`])==null?void 0:X.call(m,{title:Z,value:Y,isActive:en}))})]):null}});const codeGroup="",c$1=({active:u=!1},{slots:m})=>{var b;return h$3("div",{class:["code-group-item",{active:u}],"aria-selected":u},(b=m.default)==null?void 0:b.call(m))};c$1.displayName="CodeGroupItem";const y$2=defineComponent({name:"CodeGroup",setup(u,{slots:m}){const b=ref(-1),$=ref([]),T=(G=b.value)=>{b.value=G<$.value.length-1?G+1:0,$.value[b.value].focus()},j=(G=b.value)=>{b.value=G>0?G-1:$.value.length-1,$.value[b.value].focus()},U=(G,W)=>{G.key===" "||G.key==="Enter"?(G.preventDefault(),b.value=W):G.key==="ArrowRight"?(G.preventDefault(),T(W)):G.key==="ArrowLeft"&&(G.preventDefault(),j(W))};return()=>{var G;const W=(((G=m.default)==null?void 0:G.call(m))||[]).filter(Z=>Z.type.name==="CodeGroupItem").map(Z=>(Z.props===null&&(Z.props={}),Z));return W.length===0?null:(b.value<0||b.value>W.length-1?(b.value=W.findIndex(Z=>"active"in Z.props),b.value===-1&&(b.value=0)):W.forEach((Z,Y)=>{Z.props.active=Y===b.value}),h$3("div",{class:"code-group"},[h$3("div",{class:"code-group-nav"},W.map((Z,Y)=>{const nn=Y===b.value;return h$3("button",{ref:X=>{X&&($.value[Y]=X)},class:["code-group-nav-tab",{active:nn}],"aria-pressed":nn,"aria-expanded":nn,onClick:()=>{b.value=Y},onKeydown:X=>U(X,Y)},Z.props.title)})),W]))}}}),index$2="",codeDemo="",M$1=()=>h$3(P$3,{name:"loading"},()=>["0s","-0.333s","-0.667s"].map(u=>h$3("circle",{cx:512,cy:512,r:0,fill:"none",stroke:"currentColor","stroke-width":"20"},[h$3("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;400",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:u}),h$3("animate",{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:u})]))),O$1='<svg class="codepen-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path d="M123.429 668L468 897.714V692.571L277.143 565.143zM88 585.714L198.286 512 88 438.286v147.428zm468 312L900.571 668 746.857 565.143 556 692.57v205.143zM512 616l155.429-104L512 408 356.571 512zM277.143 458.857L468 331.43V126.286L123.429 356zM825.714 512L936 585.714V438.286zm-78.857-53.143L900.571 356 556 126.286v205.143zM1024 356v312q0 23.429-19.429 36.571l-468 312Q524.571 1024 512 1024t-24.571-7.429l-468-312Q0 691.43 0 668V356q0-23.429 19.429-36.571l468-312Q499.429 0 512 0t24.571 7.429l468 312Q1024 332.57 1024 356z"/></svg>',N='<svg class="jsfiddle-icon" viewBox="0 0 1170 1024" xmlns="http://www.w3.org/2000/svg" width="228.516" height="200"><path d="M1028.571 441.143q63.429 26.286 102.572 83.143t39.143 126.571q0 93.714-67.429 160.286T940 877.714q-2.286 0-6.571-.285t-6-.286H232q-97.143-5.714-164.571-71.714T0 645.143q0-62.857 31.429-116t84-84q-6.858-22.286-6.858-46.857 0-65.715 46.858-112T269.143 240q54.286 0 98.286 33.143 42.857-88 127.142-141.714t186.572-53.715q94.857 0 174.857 46t126.571 124.857 46.572 172q0 3.429-.286 10.286t-.286 10.286zm-761.142 152q0 69.714 48 110.286T434.286 744q78.285 0 137.143-56.571-9.143-11.429-27.143-32.286t-24.857-28.857q-38.286 37.143-82.286 37.143-31.429 0-53.429-19.143t-22-50q0-30.286 22-49.715T436 525.143q25.143 0 48.286 12T526 568.57t37.143 42.858 39.428 46.857 44 42.857T702 732.57t69.429 12q69.142 0 116.857-40.857T936 594.857q0-69.143-48-109.714T769.714 444.57Q688 444.571 632 500l53.143 61.714q37.714-36.571 81.143-36.571 29.714 0 52.571 18.857t22.857 48q0 32.571-21.143 52.286T766.857 664q-24.571 0-47.143-12t-41.143-31.429-37.428-42.857-39.714-46.857T557.143 488 502 456.571t-67.714-12q-69.715 0-118.286 40.286t-48.571 108.286z"/></svg>',L={useBabel:!1,jsLib:[],cssLib:[],codepenLayout:"left",codepenEditors:"101",babel:"https://unpkg.com/@babel/standalone/babel.min.js",vue:"https://unpkg.com/vue/dist/vue.global.prod.js",react:"https://unpkg.com/react/umd/react.production.min.js",reactDOM:"https://unpkg.com/react-dom/umd/react-dom.production.min.js"},C$2={html:{types:["html","slim","haml","md","markdown","vue"],map:{html:"none",vue:"none",md:"markdown"}},js:{types:["js","javascript","coffee","coffeescript","ts","typescript","ls","livescript"],map:{js:"none",javascript:"none",coffee:"coffeescript",ls:"livescript",ts:"typescript"}},css:{types:["css","less","sass","scss","stylus","styl"],map:{css:"none",styl:"stylus"}}},A$1=(u,m,b)=>{const $=document.createElement(u);return m&&Object.keys(m).forEach(T=>{if(T.indexOf("data"))$[T]=m[T];else{const j=T.replace("data","");$.dataset[j]=m[T]}}),b&&b.forEach(T=>{$.appendChild(T)}),$},w$1=u=>({...L,...u,jsLib:Array.from(new Set([...L.jsLib||[],...u.jsLib||[]])),cssLib:Array.from(new Set([...L.cssLib||[],...u.cssLib||[]]))}),v$1=(u,m)=>{if(u[m]!==void 0)return u[m];const b=new Promise($=>{var T;const j=document.createElement("script");j.src=m,(T=document.querySelector("body"))==null||T.appendChild(j),j.onload=()=>{$()}});return u[m]=b,b},k$4=(u,m)=>{if(m.css&&Array.from(u.childNodes).every(b=>b.nodeName!=="STYLE")){const b=A$1("style",{innerHTML:m.css});u.appendChild(b)}},D=(u,m,b)=>{const $=b.getScript();if($&&Array.from(m.childNodes).every(T=>T.nodeName!=="SCRIPT")){const T=document.createElement("script");T.appendChild(document.createTextNode(`{const document=window.document.querySelector('#${u} .code-demo-container').shadowRoot;
${$}}`)),m.appendChild(T)}},R=u=>{const m=Object.keys(u),b={html:[],js:[],css:[],isLegal:!1};return["html","js","css"].forEach($=>{const T=m.filter(j=>C$2[$].types.includes(j));if(T.length){const j=T[0];b[$]=[u[j].replace(/^\n|\n$/g,""),C$2[$].map[j]||j]}}),b.isLegal=(!b.html.length||b.html[1]==="none")&&(!b.js.length||b.js[1]==="none")&&(!b.css.length||b.css[1]==="none"),b},x=u=>u.replace(/<br \/>/g,"<br>").replace(/<((\S+)[^<]*?)\s+\/>/g,"<$1></$2>"),_$1=u=>`<div id="app">
${x(u)}
</div>`,B=u=>`${u.replace("export default ","const $reactApp = ").replace(/App\.__style__(\s*)=(\s*)`([\s\S]*)?`/,"")};
ReactDOM.createRoot(document.getElementById("app")).render(React.createElement($reactApp))`,V=u=>u.replace(/export\s+default\s*\{(\n*[\s\S]*)\n*\}\s*;?$/u,"Vue.createApp({$1}).mount('#app')").replace(/export\s+default\s*define(Async)?Component\s*\(\s*\{(\n*[\s\S]*)\n*\}\s*\)\s*;?$/u,"Vue.createApp({$1}).mount('#app')").trim(),q=u=>`(function(exports){var module={};module.exports=exports;${u};return module.exports.__esModule?module.exports.default:module.exports;})({})`,z=(u,m)=>{const b=w$1(m),$=u.js[0]||"";return{...b,html:x(u.html[0]||""),js:$,css:u.css[0]||"",isLegal:u.isLegal,getScript:()=>{var T;return b.useBabel?((T=window.Babel.transform($,{presets:["es2015"]}))==null?void 0:T.code)||"":$}}},P$1=(u,m)=>{const b=w$1(m),$=u.html[0]||"",T=/<template>([\s\S]+)<\/template>/u.exec($),j=/<script(\s*lang=(['"])(.*?)\2)?>([\s\S]+)<\/script>/u.exec($),U=/<style(\s*lang=(['"])(.*?)\2)?\s*(?:scoped)?>([\s\S]+)<\/style>/u.exec($),G=T?T[1].replace(/^\n|\n$/g,""):"",[W="",Z=""]=j?[j[4].replace(/^\n|\n$/g,""),j[3]]:[],[Y="",nn=""]=U?[U[4].replace(/^\n|\n$/g,""),U[3]]:[],X=Z===""&&(nn===""||nn==="css");return{...b,html:_$1(G),js:V(W),css:Y,isLegal:X,jsLib:[b.vue,...b.jsLib],getScript:()=>{var en,sn;const an=m.useBabel?((sn=(en=window.Babel)==null?void 0:en.transform(W,{presets:["es2015"]}))==null?void 0:sn.code)||"":W.replace(/export\s+default/u,"return");return`const app=window.document.createElement('div');document.firstElementChild.appendChild(app);const appOptions=${q(an)};appOptions.template=\`${G.replace("`",'\\`"')}\`;window.Vue.createApp(appOptions).mount(app);`}}},H$1=(u,m)=>{const b=w$1(m);return{...b,html:_$1(""),js:B(u.js[0]||""),css:u.css[0]||(u.js[0]?u.js[0].replace(/App\.__style__(?:\s*)=(?:\s*)`([\s\S]*)?`/,"$1").trim():""),isLegal:u.isLegal,jsLib:[b.react,b.reactDOM,...b.jsLib],jsx:!0,getScript:()=>{var $,T;const j=((T=($=window.Babel)==null?void 0:$.transform(u.js[0]||"",{presets:["es2015","react"]}))==null?void 0:T.code)||"";return`window.ReactDOM.createRoot(document.firstElementChild).render(window.React.createElement(${q(j)}))`}}},h$1={},I$1=u=>Promise.all([v$1(h$1,u.babel),v$1(h$1,u.react),v$1(h$1,u.reactDOM)]),J=u=>{const m=[v$1(h$1,u.vue)];return u.useBabel&&m.push(v$1(h$1,u.babel)),Promise.all(m)},Q=u=>u.useBabel?v$1(h$1,u.babel):Promise.resolve();var F$1=defineComponent({name:"CodeDemo",props:{id:{type:String,required:!0},type:{type:String,default:"normal"},title:{type:String,default:""},config:{type:String,default:""},code:{type:String,required:!0}},setup(u,{slots:m}){const b=ref(!1),$=ref(),T=ref(),j=ref("0"),U=ref(!1),G=computed(()=>JSON.parse(u.config?Bt(u.config):"{}")),W=computed(()=>{const en=JSON.parse(Bt(u.code));return R(en)}),Z=computed(()=>u.type==="react"?H$1(W.value,G.value):u.type==="vue"?P$1(W.value,G.value):z(W.value,G.value)),Y=computed(()=>Z.value.isLegal),nn=(en=!1)=>{const sn=$.value.attachShadow({mode:"open"}),an=document.createElement("div");an.classList.add("code-demo-app"),sn.appendChild(an),Y.value?(en&&(an.innerHTML=Z.value.html),k$4(sn,Z.value),D(u.id,sn,Z.value),j.value="0"):j.value="auto",U.value=!0},X=()=>{switch(u.type){case"react":return I$1(Z.value).then(()=>nn());case"vue":return J(Z.value).then(()=>nn());default:return Q(Z.value).then(()=>nn(!0))}};return onMounted(()=>{setTimeout(()=>{X()},800)}),()=>{var en;return h$3("div",{class:"code-demo-wrapper",id:u.id},[U.value?null:h$3("div",{class:"loading"},h$3(M$1)),h$3("div",{class:"code-demo-header"},[Z.value.isLegal?h$3("button",{class:["toggle-button",b.value?"down":"right"],onClick:()=>{j.value=b.value?"0":`${T.value.clientHeight+13.8}px`,b.value=!b.value}}):null,u.title?h$3("span",{class:"title"},decodeURIComponent(u.title)):null,Z.value.isLegal&&Z.value.jsfiddle!==!1?h$3("form",{class:"code-demo-jsfiddle",target:"_blank",action:"https://jsfiddle.net/api/post/library/pure/",method:"post"},[h$3("input",{type:"hidden",name:"html",value:Z.value.html}),h$3("input",{type:"hidden",name:"js",value:Z.value.js}),h$3("input",{type:"hidden",name:"css",value:Z.value.css}),h$3("input",{type:"hidden",name:"wrap",value:"1"}),h$3("input",{type:"hidden",name:"panel_js",value:"3"}),h$3("input",{type:"hidden",name:"resources",value:[...Z.value.cssLib,...Z.value.jsLib].join(",")}),h$3("button",{type:"submit",class:"jsfiddle-button",innerHTML:N,"aria-label":"JSFiddle","data-balloon-pos":"up"})]):null,!Z.value.isLegal||Z.value.codepen!==!1?h$3("form",{class:"code-demo-codepen",target:"_blank",action:"https://codepen.io/pen/define",method:"post"},[h$3("input",{type:"hidden",name:"data",value:JSON.stringify({html:Z.value.html,js:Z.value.js,css:Z.value.css,js_external:Z.value.jsLib.join(";"),css_external:Z.value.cssLib.join(";"),layout:Z.value.codepenLayout,html_pre_processor:W.value?W.value.html[1]:"none",js_pre_processor:W.value?W.value.js[1]:Z.value.jsx?"babel":"none",css_pre_processor:W.value?W.value.css[1]:"none",editors:Z.value.codepenEditors})}),h$3("button",{type:"submit",innerHTML:O$1,class:"codepen-button","aria-label":"Codepen","data-balloon-pos":"up"})]):null]),h$3("div",{ref:$,class:"code-demo-container",style:{display:Y.value&&U.value?"block":"none"}}),h$3("div",{class:"code-demo-code-wrapper",style:{height:j.value}},h$3("div",{ref:T,class:"code-demo-codes"},(en=m.default)==null?void 0:en.call(m)))])}}});const echarts="",LoadingIcon=()=>h$3(P$3,{name:"loading"},()=>["0s","-0.333s","-0.667s"].map(u=>h$3("circle",{cx:512,cy:512,r:0,fill:"none",stroke:"currentColor","stroke-width":"20"},[h$3("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;400",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:u}),h$3("animate",{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:u})]))),parseEChartsConfig=(config,type)=>{if(type==="js"){const exports={},module={exports};return eval(config),module.exports}return JSON.parse(config)};var ECharts=defineComponent({name:"ECharts",props:{config:{type:String,required:!0},id:{type:String,required:!0},title:{type:String,default:""},type:{type:String,default:"json"}},setup(u){const m=ref();let b;const $=ref(!0);return onMounted(()=>{Promise.all([__vitePreload(()=>import("./index-70dce5ac.js"),[]),new Promise(T=>setTimeout(T,800))]).then(([T])=>{const j=parseEChartsConfig(Bt(u.config),u.type);b=T.init(m.value),b.showLoading(),b.setOption(j),b.hideLoading(),$.value=!1}),useEventListener("resize",useDebounceFn(()=>b==null?void 0:b.resize(),100))}),onBeforeUnmount(()=>{b==null||b.dispose()}),()=>[u.title?h$3("div",{class:"echarts-title"},decodeURIComponent(u.title)):null,$.value?h$3("div",{class:"echarts-loading-wrapper"},h$3(LoadingIcon)):null,h$3("div",{ref:m,class:"echarts-wrapper",id:u.id})]}});const figure="",flowchart="",y$1=()=>h$3(P$3,{name:"loading"},()=>["0s","-0.333s","-0.667s"].map(u=>h$3("circle",{cx:512,cy:512,r:0,fill:"none",stroke:"currentColor","stroke-width":"20"},[h$3("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;400",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:u}),h$3("animate",{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:u})])));var a$1={x:0,y:0,"line-width":2,"line-length":40,"text-margin":8,"font-size":14,"font-color":"#8DA1AC","line-color":"#8DA1AC","element-color":"black",fill:"white","yes-text":"Yes","no-text":"No","arrow-end":"block",scale:1},F={...a$1,symbols:{start:{class:"start-element","font-color":"#fff",fill:"#595959","line-width":"0px"},end:{class:"end-element","font-color":"#fff",fill:"#595959","line-width":"0px"},operation:{class:"operation-element","font-color":"#fff",fill:"#1890ff","line-width":"0px"},inputoutput:{class:"inputoutput-element","font-color":"#fff",fill:"#1890ff","line-width":"0px"},subroutine:{class:"subroutine-element","font-color":"#fff",fill:"#FF485E","element-color":"#fff","line-color":"red"},condition:{class:"condition-element","font-color":"#fff",fill:"#FF485E","line-width":"0px"},parallel:{class:"parallel-element","font-color":"#fff",fill:"#1890ff","line-width":"0px"}}},C$1={...a$1,"line-width":1,symbols:{start:{class:"start-element",fill:"#ccc","line-width":"1px","line-color":"#5c6ac4","font-color":"#000"},end:{class:"end-element",fill:"#ccc","line-width":"1px","line-color":"#5c6ac4","font-color":"#000"},operation:{class:"operation-element",fill:"#f1f1f1","line-width":"1px","line-color":"#5c6ac4","font-color":"#000"},inputoutput:{class:"inputoutput-element",fill:"#f1f1f1","line-width":"1px","line-color":"#5c6ac4","font-color":"#000"},subroutine:{class:"subroutine-element",fill:"#f1f1f1","line-width":"1px","line-color":"#5c6ac4","font-color":"#000"},condition:{class:"condition-element",fill:"#f1f1f1","line-width":"1px","line-color":"#5c6ac4","font-color":"#000"},parallel:{class:"parallel-element",fill:"#f1f1f1","line-width":"1px","line-color":"#5c6ac4","font-color":"#000"}}},g={...a$1,symbols:{start:{class:"start-element","font-color":"#fff",fill:"#2F495F","line-width":"0px"},end:{class:"end-element","font-color":"#fff",fill:"#2F495F","line-width":"0px"},operation:{class:"operation-element","font-color":"#fff",fill:"#00BC7D","line-width":"0px"},inputoutput:{class:"inputoutput-element","font-color":"#fff",fill:"#EB4D5D","line-width":"0px"},subroutine:{class:"subroutine-element","font-color":"#fff",fill:"#937AC4","element-color":"#fff","line-color":"red"},condition:{class:"condition-element","font-color":"#fff",fill:"#FFB500","line-width":"0px"},parallel:{class:"parallel-element","font-color":"#fff",fill:"#2F495F","line-width":"0px"}}},p={ant:F,vue:g,pie:C$1},k$3=defineComponent({name:"FlowChart",props:{code:{type:String,required:!0},id:{type:String,required:!0},preset:{type:String,default:"vue"}},setup(u){let m;const b=ref(),$=ref(!0),T=ref(1),j=computed(()=>p[u.preset]||(console.warn(`[md-enhance:flowchart] Unknown preset: ${u.preset}`),p.vue)),U=G=>G<419?.8:G>1280?1:.9;return onMounted(()=>{Promise.all([__vitePreload(()=>import("./flowchart-d65a1d8e.js"),[]),new Promise(G=>setTimeout(G,800))]).then(([{parse:G}])=>{m=G(Bt(u.code)),T.value=U(window.innerWidth),$.value=!1,m.draw(u.id,{...j.value,scale:T.value}),useEventListener("resize",useDebounceFn(()=>{const W=U(window.innerWidth);T.value!==W&&(T.value=W,m.draw(u.id,{...j.value,scale:W}))},100))})}),()=>[$.value?h$3("div",{class:"flowchart-loading-wrapper"},h$3(y$1)):null,h$3("div",{ref:b,class:["flowchart-wrapper",u.preset],id:u.id,style:{display:$.value?"none":"block"}})]}});const footnote="",imageMark="",mermaid="",M=()=>h$3(P$3,{name:"loading"},()=>["0s","-0.333s","-0.667s"].map(u=>h$3("circle",{cx:512,cy:512,r:0,fill:"none",stroke:"currentColor","stroke-width":"20"},[h$3("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;400",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:u}),h$3("animate",{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:u})]))),k$2=u=>({dark:u,background:u?"#1e1e1e":"#fff",primaryColor:u?"#389d70":"#4abf8a",primaryBorderColor:u?"#389d70":"#4abf8a",primaryTextColor:"#fff",secondaryColor:"#ffb500",secondaryBorderColor:u?"#fff":"#000",secondaryTextColor:u?"#ddd":"#333",tertiaryColor:u?"#282828":"#efeef4",tertiaryBorderColor:u?"#bbb":"#242424",tertiaryTextColor:u?"#ddd":"#333",noteBkgColor:u?"#f6d365":"#fff5ad",noteTextColor:"#242424",noteBorderColor:u?"#f6d365":"#333",lineColor:u?"#d3d3d3":"#333",textColor:u?"#fff":"#242424",mainBkg:u?"#389d70":"#4abf8a",errorBkgColor:"#eb4d5d",errorTextColor:"#fff",nodeBorder:u?"#389d70":"#4abf8a",nodeTextColor:u?"#fff":"#242424",signalTextColor:u?"#9e9e9e":"#242424",classText:"#fff",labelColor:"#fff",fillType0:u?"#cf1322":"#f1636e",fillType1:"#f39c12",fillType2:"#2ecc71",fillType3:"#fa541c",fillType4:"#25a55b",fillType5:"#13c2c2",fillType6:"#096dd9",fillType7:"#aa6fe9"});var w=defineComponent({name:"Mermaid",props:{id:{type:String,required:!0},code:{type:String,required:!0}},setup(u){const m=ref(""),b=ref(),$=ref(!1);let T=null;return onMounted(()=>{const j=document.querySelector("html"),U=Bt(u.code),G=()=>j.classList.contains("dark")||j.getAttribute("data-theme")==="dark";$.value=G(),Promise.all([__vitePreload(()=>import("./mermaid.esm.min-67083af4.js").then(W=>W.m),[]),__vitePreload(()=>import("./mermaid-mindmap.esm.min-d62ec99d.js"),["assets/mermaid-mindmap.esm.min-d62ec99d.js","assets/framework-56e099cb.js"]),new Promise(W=>setTimeout(W,800))]).then(async([{default:W},{default:Z}])=>{try{await W.registerExternalDiagrams([Z])}catch{}const Y=async()=>{const nn=document.createElement("div");nn.style.position="relative",nn.style.top="-9999px";const X=en=>{m.value=en,document.body.removeChild(nn)};W.initialize({theme:"base",themeVariables:k$2($.value),flowchart:{useMaxWidth:!1},sequence:{useMaxWidth:!1},journey:{useMaxWidth:!1},gantt:{useMaxWidth:!1},er:{useMaxWidth:!1},pie:{useMaxWidth:!1},startOnLoad:!1}),m.value="",document.body.appendChild(nn),await nextTick(),await W.renderAsync(u.id,U,X,nn)};await Y(),T=new MutationObserver(()=>{$.value=G()}),T.observe(j,{attributeFilter:["class","data-theme"],attributes:!0}),watch($,Y)})}),onBeforeUnmount(()=>{T==null||T.disconnect()}),()=>h$3("div",{ref:b,class:["mermaid-wrapper",{loading:!m.value}]},m.value?h$3("div",{class:"content",innerHTML:m.value}):h$3(M))}});const o=()=>__vitePreload(()=>import("./highlight.esm-75b11b9d.js"),[]),t=()=>__vitePreload(()=>import("./markdown.esm-30be9ea9.js"),[]),e=()=>__vitePreload(()=>import("./math.esm-70a288c8.js"),[]),r$1=()=>__vitePreload(()=>import("./notes.esm-a106bb2c.js"),[]),a=()=>__vitePreload(()=>import("./reveal.esm-6e84c481.js"),[]),i=()=>__vitePreload(()=>import("./search.esm-7e6792e2.js"),[]),c=()=>__vitePreload(()=>import("./zoom.esm-b83b91d0.js"),[]),useReveal=()=>[a(),t(),o(),e(),i(),r$1(),c()],index$1="",leagueGothic="",sourceSansPro="",k$1=()=>h$3(P$3,{name:"loading"},()=>["0s","-0.333s","-0.667s"].map(u=>h$3("circle",{cx:512,cy:512,r:0,fill:"none",stroke:"currentColor","stroke-width":"20"},[h$3("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;400",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:u}),h$3("animate",{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:u})])));var S$1=defineComponent({name:"Presentation",props:{id:{type:String,required:!0},code:{type:String,required:!0},theme:{type:String,default:"auto"}},setup(u){const m=usePageFrontmatter(),b=ref(""),$=ref(!1),T=ref(),j=ref();let U;return onMounted(()=>{if(j.value){b.value=Bt(u.code),j.value.setAttribute("id",u.id),j.value.setAttribute("data-theme",u.theme);const G=[new Promise(W=>setTimeout(W,800)),...useReveal()];Promise.all(G).then(([,W,...Z])=>{U=new W.default(j.value,{plugins:Z.map(Y=>Y.default)}),U.initialize({backgroundTransition:"slide",hash:m.value.layout==="Slide",mouseWheel:m.value.layout==="Slide",transition:"slide",slideNumber:!0,...m.value.reveal||{},embedded:m.value.layout!=="Slide"}).then(()=>{$.value=!1,U.configure({backgroundTransition:"slide"})})})}}),onBeforeUnmount(()=>{U==null||U.destroy()}),()=>h$3("div",{ref:T,class:{"md-enhance-presentation":!0,loading:$.value}},[$.value?h$3(k$1):null,h$3("div",{ref:j,class:["reveal","reveal-viewport"]},h$3("div",{class:"slides",style:{display:$.value?"none":"block"},innerHTML:`<section data-markdown data-separator="^\\r?\\n---\\r?\\n$" data-separator-vertical="^\\r?\\n--\\r?\\n$"><script type="text/template">${b.value}<\/script></section>`}))])}});const playground="",n='<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path d="M512 74.667C270.933 74.667 74.667 270.933 74.667 512S270.933 949.333 512 949.333 949.333 753.067 949.333 512 753.067 74.667 512 74.667zm0 810.666C307.2 885.333 138.667 716.8 138.667 512S307.2 138.667 512 138.667 885.333 307.2 885.333 512 716.8 885.333 512 885.333z"/><path d="M708.267 465.067 473.6 330.667c-8.533-4.267-17.067-6.4-25.6-6.4-29.867 0-53.333 23.466-53.333 53.333v268.8c0 8.533 2.133 19.2 6.4 25.6 10.666 17.067 27.733 27.733 46.933 27.733 8.533 0 17.067-2.133 25.6-6.4l234.667-134.4c8.533-4.266 14.933-10.666 19.2-19.2 6.4-12.8 8.533-27.733 4.266-40.533-2.133-14.933-10.666-25.6-23.466-34.133zM458.667 627.2V396.8L661.333 512 458.667 627.2z"/></svg>';var r=defineComponent({name:"Playground",props:{title:{type:String,default:""},link:{type:String,required:!0}},setup(u){return()=>[h$3("div",{class:"playground-wrapper"},[h$3("div",{class:"title-wrapper"},[u.title?h$3("div",{class:"title"},decodeURIComponent(u.title)):null,h$3("div",{class:"actions"},[h$3("a",{class:"action",href:decodeURIComponent(u.link),target:"_blank",innerHTML:n})])]),h$3("div",{class:"preview-container"},h$3("iframe",{class:"iframe-preview",src:decodeURIComponent(u.link)}))])]}});const tabs="",v=useStorage("VUEPRESS_TAB_STORE",{});var S=defineComponent({name:"Tabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},id:{type:String,required:!0},tabId:{type:String,default:""}},setup(u,{slots:m}){const b=ref(u.active),$=ref([]),T=()=>{if(u.tabId){const{title:Z,id:Y=Z}=u.data[b.value];v.value[u.tabId]=Y}},j=(Z=b.value)=>{b.value=Z<$.value.length-1?Z+1:0,$.value[b.value].focus()},U=(Z=b.value)=>{b.value=Z>0?Z-1:$.value.length-1,$.value[b.value].focus()},G=(Z,Y)=>{Z.key===" "||Z.key==="Enter"?(Z.preventDefault(),b.value=Y):Z.key==="ArrowRight"?(Z.preventDefault(),j()):Z.key==="ArrowLeft"&&(Z.preventDefault(),U()),T()},W=()=>{if(u.tabId){const Z=u.data.findIndex(({title:Y,id:nn=Y})=>v.value[u.tabId]===nn);if(Z!==-1)return Z}return u.active};return onMounted(()=>{b.value=W(),watch(()=>v.value[u.tabId],(Z,Y)=>{if(u.tabId&&Z!==Y){const nn=u.data.findIndex(({title:X,id:en=X})=>en===Z);nn!==-1&&(b.value=nn)}})}),()=>u.data.length?h$3("div",{class:"tab-list"},[h$3("div",{class:"tab-list-nav",role:"tablist"},u.data.map(({title:Z},Y)=>{const nn=Y===b.value;return h$3("button",{ref:X=>{X&&($.value[Y]=X)},class:["tab-list-nav-item",{active:nn}],role:"tab","aria-controls":`tab-${u.id}-${Y}`,"aria-selected":nn,onClick:()=>{b.value=Y,T()},onKeydown:X=>G(X,Y)},Z)})),u.data.map(({title:Z,id:Y=Z},nn)=>{var X;const en=nn===b.value;return h$3("div",{class:["tab-item",{active:en}],id:`tab-${u.id}-${nn}`,role:"tabpanel","aria-expanded":en},(X=m[`tab${nn}`])==null?void 0:X.call(m,{title:Z,value:Y,isActive:en}))})]):null}});const tasklist="",katex="",clientConfig9=defineClientConfig({enhance:({app:u})=>{u.component("ChartJS",ChartJS),u.component("CodeTabs",S$2),u.component("CodeGroup",y$2),u.component("CodeGroupItem",c$1),u.component("CodeDemo",F$1),u.component("ECharts",ECharts),u.component("FlowChart",k$3),u.component("Mermaid",w),u.component("Presentation",S$1),u.component("Playground",r),u.component("Tabs",S),u.component("VuePlayground",defineAsyncComponent(()=>__vitePreload(()=>import("./VuePlayground-e1d721ef.js"),["assets/VuePlayground-e1d721ef.js","assets/framework-56e099cb.js"])))}}),photoswipe="",E=".theme-hope-content :not(a) > img",P={"/":{closeTitle:"关闭",downloadTitle:"下载图片",fullscreenTitle:"切换全屏",zoomTitle:"缩放",arrowPrevTitle:"上一个 (左箭头)",arrowNextTitle:"下一个 (右箭头)"}},O=800,H={},d$1=u=>({src:u.src,width:u.naturalWidth,height:u.naturalHeight,alt:u.alt}),I=u=>{const m=isString$1(u)?Array.from(document.querySelectorAll(u)):u.map(b=>Array.from(document.querySelectorAll(b))).flat();return Promise.all(m.map(b=>new Promise(($,T)=>{b.complete?$(d$1(b)):(b.onload=()=>$(d$1(b)),b.onerror=j=>T(j))}))).then(b=>({elements:m,infos:b}))},A=()=>{const{isSupported:u,toggle:m}=useFullscreen(),b=kt(P),$=useRoute(),T=()=>{Promise.all([__vitePreload(()=>import("./photoswipe.esm-0c95cb0f.js"),[]),new Promise(j=>setTimeout(j,O)).then(()=>I(E))]).then(([j,U])=>{U.elements.forEach((G,W)=>{const Z=()=>{const Y=new j.default({dataSource:U.infos,...b.value,...H,index:W});Y.on("uiRegister",()=>{u&&Y.ui.registerElement({name:"fullscreen",order:7,isButton:!0,html:'<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>',onClick:()=>{m()}}),Y.ui.registerElement({name:"download",order:8,isButton:!0,tagName:"a",html:{isCustomSVG:!0,inner:'<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>',outlineID:"pswp__icn-download"},onInit:(nn,X)=>{nn.setAttribute("download",""),nn.setAttribute("target","_blank"),nn.setAttribute("rel","noopener"),X.on("change",()=>{nn.href=X.currSlide.data.src})}})}),Y.init()};G.style.cursor="zoom-in",G.addEventListener("click",Z),G.addEventListener("keypress",({key:Y})=>{Y==="Enter"&&Z()})})})};onMounted(()=>{T(),watch(()=>$.path,()=>T())})};var y=defineClientConfig({setup:()=>{A()}});const useAutoLink=(u,m=!1)=>{const b=useRouter(),{fullPath:$,meta:T,name:j}=Dt(b,encodeURI(u));return{text:!m&&T.s?T.s:T.title||u,link:j==="404"?u:$,...T.i?{icon:T.i}:{}}},useThemeData=()=>useThemeData$1(),useThemeLocaleData=()=>useThemeLocaleData$1(),usePure=()=>computed(()=>Boolean(useThemeData().value.pure)),useWindowSize=()=>{const u=useThemeData(),m=ref(!1),b=ref(!1),$=()=>{m.value=window.innerWidth<=(u.value.mobileBreakPoint||719),b.value=window.innerWidth>=(u.value.wideBreakPoint||1440)};return onMounted(()=>{$(),useEventListener("resize",$,!1),useEventListener("orientationchange",$,!1)}),{isMobile:m,isWide:b}},useNavigate=()=>{const u=useRouter(),m=useRoute();return b=>{if(b)if(ue(b))m.path!==b&&u.push(b);else if(isLinkHttp(b)||isLinkMailto(b))window&&window.open(b);else{const $=m.path.slice(0,m.path.lastIndexOf("/"));u.push(`${$}/${encodeURI(b)}`)}}},usePageAuthor=()=>{const u=useThemeLocaleData(),m=usePageFrontmatter();return computed(()=>{const{author:b}=m.value;return b?re(b):b===!1?[]:re(u.value.author,!1)})},usePageCategory=()=>{const u=usePageFrontmatter();return computed(()=>se(u.value.category).map(m=>{var b,$;return{name:m,path:(($=(b=inject(Symbol.for("categoryMap")))==null?void 0:b.value.map[m])==null?void 0:$.path)||""}}))},usePageTag=()=>{const u=usePageFrontmatter();return computed(()=>oe(u.value.tag).map(m=>{var b,$;return{name:m,path:(($=(b=inject(Symbol.for("tagMap")))==null?void 0:b.value.map[m])==null?void 0:$.path)||""}}))},usePageDate=()=>{const u=usePageFrontmatter(),m=usePageData();return computed(()=>{const{date:b}=u.value;if(b)return ot(b);const{createdTime:$}=m.value.git||{};return $?ot(new Date($)):null})},usePageInfo=()=>{const u=useThemeLocaleData(),m=usePageData(),b=usePageFrontmatter(),$=usePageAuthor(),T=usePageCategory(),j=usePageTag(),U=usePageDate(),G=computed(()=>({author:$.value,category:T.value,date:U.value,localizedDate:m.value.localizedDate,tag:j.value,isOriginal:b.value.isOriginal||!1,readingTime:m.value.readingTime||null,pageview:"pageview"in b.value?b.value.pageview:!0})),W=computed(()=>"pageInfo"in b.value?b.value.pageInfo:"pageInfo"in u.value?u.value.pageInfo:null);return{info:G,items:W}};let promise=null,promiseResolve=null;const scrollPromise={wait:()=>promise,pending:()=>{promise=new Promise(u=>promiseResolve=u)},resolve:()=>{promiseResolve==null||promiseResolve(),promise=null,promiseResolve=null}},useScrollPromise=()=>scrollPromise,footer="",PageFooter=defineComponent({name:"PageFooter",setup(){const u=usePageFrontmatter(),m=useThemeLocaleData(),b=usePageAuthor(),$=computed(()=>{const{copyright:U,footer:G}=u.value;return G!==!1&&Boolean(U||G||m.value.displayFooter)}),T=computed(()=>{const{footer:U}=u.value;return U===!1?!1:isString$1(U)?U:m.value.footer||""}),j=computed(()=>"copyright"in u.value?u.value.copyright:"copyright"in m.value?m.value.copyright:b.value.length?`Copyright © ${new Date().getFullYear()} ${b.value[0].name}`:!1);return()=>$.value?h$3("footer",{class:"footer-wrapper"},[T.value?h$3("div",{class:"footer",innerHTML:T.value}):null,j.value?h$3("div",{class:"copyright",innerHTML:j.value}):null]):null}}),Icon=u=>{const{icon:m=""}=u;return isLinkHttp(m)?h$3("img",{class:"icon",src:m}):ue(m)?h$3("img",{class:"icon",src:withBase(m)}):h$3(resolveComponent("FontIcon"),u)};Icon.displayName="Icon";const AutoLink=defineComponent({name:"AutoLink",inheritAttrs:!1,props:{config:{type:Object,required:!0},exact:Boolean,noExternalLinkIcon:Boolean},emits:{focusout:()=>!0},setup(u,{attrs:m,emit:b,slots:$}){const T=useRoute(),j=useSiteData(),U=toRef(u,"config"),G=computed(()=>isLinkHttp(U.value.link)),W=computed(()=>isLinkMailto(U.value.link)||isLinkTel(U.value.link)),Z=computed(()=>W.value?void 0:U.value.target||(G.value?"_blank":void 0)),Y=computed(()=>Z.value==="_blank"),nn=computed(()=>!G.value&&!W.value&&!Y.value),X=computed(()=>W.value?void 0:U.value.rel||(Y.value?"noopener noreferrer":void 0)),en=computed(()=>U.value.ariaLabel||U.value.text),sn=computed(()=>{if(u.exact)return!1;const on=Object.keys(j.value.locales);return on.length?on.every(rn=>rn!==U.value.link):U.value.link!=="/"}),an=computed(()=>nn.value?U.value.activeMatch?new RegExp(U.value.activeMatch).test(T.path):sn.value?T.path.startsWith(U.value.link):T.path===U.value.link:!1);return()=>{var gn,$n,yn;const{text:on,icon:rn,link:kn}=U.value;return nn.value?h$3(RouterLink,{to:kn,"aria-label":en.value,...m,class:["nav-link",{active:an.value},m.class],onFocusout:()=>b("focusout")},()=>{var wn,dn,tn;return((wn=$.default)==null?void 0:wn.call($))||[((dn=$.before)==null?void 0:dn.call($))||h$3(Icon,{icon:rn}),on,(tn=$.after)==null?void 0:tn.call($)]}):h$3("a",{href:kn,rel:X.value,target:Z.value,"aria-label":en.value,...m,class:["nav-link",m.class],onFocusout:()=>b("focusout")},((gn=$.default)==null?void 0:gn.call($))||[(($n=$.before)==null?void 0:$n.call($))||h$3(Icon,{icon:rn}),on,u.noExternalLinkIcon?null:h$3(ExternalLinkIcon),(yn=$.after)==null?void 0:yn.call($)])}}}),dropdownLink="",DropdownLink=defineComponent({name:"NavbarDropdownLink",props:{config:{type:Object,required:!0}},setup(u,{slots:m}){const b=useRoute(),$=toRef(u,"config"),T=computed(()=>$.value.ariaLabel||$.value.text),j=ref(!1);watch(()=>b.path,()=>{j.value=!1});const U=G=>{G.detail===0&&(j.value=!j.value)};return()=>{var G;return h$3("div",{class:["dropdown-wrapper",{open:j.value}]},[h$3("button",{class:"dropdown-title",type:"button","aria-label":T.value,onClick:U},[((G=m.title)==null?void 0:G.call(m))||h$3("span",{class:"title"},[h$3(Icon,{icon:$.value.icon}),u.config.text]),h$3("span",{class:"arrow"}),h$3("ul",{class:"nav-dropdown"},$.value.children.map((W,Z)=>{const Y=Z===$.value.children.length-1;return h$3("li",{class:"dropdown-item"},"children"in W?[h$3("h4",{class:"dropdown-subtitle"},W.link?h$3(AutoLink,{config:W,onFocusout:()=>{W.children.length===0&&Y&&(j.value=!1)}}):h$3("span",W.text)),h$3("ul",{class:"dropdown-subitem-wrapper"},W.children.map((nn,X)=>h$3("li",{class:"dropdown-subitem"},h$3(AutoLink,{config:nn,onFocusout:()=>{X===W.children.length-1&&Y&&(j.value=!1)}}))))]:h$3(AutoLink,{config:W,onFocusout:()=>{Y&&(j.value=!1)}}))}))])])}}}),resolveNavbarItem=(u,m="")=>isString$1(u)?useAutoLink(`${m}${u}`):"children"in u?{...u,...u.link&&!isLinkExternal(u.link)?useAutoLink(`${m}${u.link}`):{},children:u.children.map(b=>resolveNavbarItem(b,`${m}${u.prefix||""}`))}:{...u,link:isLinkExternal(u.link)?u.link:useAutoLink(`${m}${u.link}`).link},useNavbarConfig=()=>computed(()=>(useThemeLocaleData().value.navbar||[]).map(u=>resolveNavbarItem(u))),useNavbarRepo=()=>{const u=useThemeLocaleData(),m=computed(()=>u.value.repo||null),b=computed(()=>m.value?Ft(m.value):null),$=computed(()=>m.value?Jt(m.value):null),T=computed(()=>b.value?u.value.repoLabel??($.value===null?"Source":$.value):null);return computed(()=>!b.value||!T.value||u.value.repoDisplay===!1?null:{type:$.value||"Source",label:T.value,link:b.value})},navbarBrand="",NavbarBrand=defineComponent({name:"NavbarBrand",setup(){const u=useRouteLocale(),m=useSiteLocaleData(),b=useThemeLocaleData(),$=computed(()=>b.value.home||u.value),T=computed(()=>m.value.title),j=computed(()=>b.value.logo?withBase(b.value.logo):null),U=computed(()=>b.value.logoDark?withBase(b.value.logoDark):null);return()=>h$3(RouterLink,{to:$.value,class:"brand"},()=>[j.value?h$3("img",{class:["logo",{light:Boolean(U.value)}],src:j.value,alt:T.value}):null,U.value?h$3("img",{class:["logo dark"],src:U.value,alt:T.value}):null,T.value?h$3("span",{class:["site-name",{"hide-in-pad":j.value&&b.value.hideSiteNameOnMobile!==!1}]},T.value):null])}}),navbarLinks="",NavbarLinks=defineComponent({name:"NavbarLinks",setup(){const u=useNavbarConfig();return()=>u.value.length?h$3("nav",{class:"nav-links"},[...u.value.map(m=>h$3("div",{class:"nav-item hide-in-mobile"},"children"in m?h$3(DropdownLink,{config:m}):h$3(AutoLink,{config:m})))]):null}});function _toConsumableArray(u){if(Array.isArray(u)){for(var m=0,b=Array(u.length);m<u.length;m++)b[m]=u[m];return b}else return Array.from(u)}var hasPassiveEvents=!1;if(typeof window<"u"){var passiveTestOptions={get passive(){hasPassiveEvents=!0}};window.addEventListener("testPassive",null,passiveTestOptions),window.removeEventListener("testPassive",null,passiveTestOptions)}var isIosDevice=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),locks=[],documentListenerAdded=!1,initialClientY=-1,previousBodyOverflowSetting=void 0,previousBodyPaddingRight=void 0,allowTouchMove=function u(m){return locks.some(function(b){return!!(b.options.allowTouchMove&&b.options.allowTouchMove(m))})},preventDefault=function u(m){var b=m||window.event;return allowTouchMove(b.target)||b.touches.length>1?!0:(b.preventDefault&&b.preventDefault(),!1)},setOverflowHidden=function u(m){if(previousBodyPaddingRight===void 0){var b=!!m&&m.reserveScrollBarGap===!0,$=window.innerWidth-document.documentElement.clientWidth;b&&$>0&&(previousBodyPaddingRight=document.body.style.paddingRight,document.body.style.paddingRight=$+"px")}previousBodyOverflowSetting===void 0&&(previousBodyOverflowSetting=document.body.style.overflow,document.body.style.overflow="hidden")},restoreOverflowSetting=function u(){previousBodyPaddingRight!==void 0&&(document.body.style.paddingRight=previousBodyPaddingRight,previousBodyPaddingRight=void 0),previousBodyOverflowSetting!==void 0&&(document.body.style.overflow=previousBodyOverflowSetting,previousBodyOverflowSetting=void 0)},isTargetElementTotallyScrolled=function u(m){return m?m.scrollHeight-m.scrollTop<=m.clientHeight:!1},handleScroll=function u(m,b){var $=m.targetTouches[0].clientY-initialClientY;return allowTouchMove(m.target)?!1:b&&b.scrollTop===0&&$>0||isTargetElementTotallyScrolled(b)&&$<0?preventDefault(m):(m.stopPropagation(),!0)},disableBodyScroll=function u(m,b){if(!m){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!locks.some(function(T){return T.targetElement===m})){var $={targetElement:m,options:b||{}};locks=[].concat(_toConsumableArray(locks),[$]),isIosDevice?(m.ontouchstart=function(T){T.targetTouches.length===1&&(initialClientY=T.targetTouches[0].clientY)},m.ontouchmove=function(T){T.targetTouches.length===1&&handleScroll(T,m)},documentListenerAdded||(document.addEventListener("touchmove",preventDefault,hasPassiveEvents?{passive:!1}:void 0),documentListenerAdded=!0)):setOverflowHidden(b)}},clearAllBodyScrollLocks=function u(){isIosDevice?(locks.forEach(function(m){m.targetElement.ontouchstart=null,m.targetElement.ontouchmove=null}),documentListenerAdded&&(document.removeEventListener("touchmove",preventDefault,hasPassiveEvents?{passive:!1}:void 0),documentListenerAdded=!1),initialClientY=-1):restoreOverflowSetting(),locks=[]};const navScreenDropdown="",NavScreenDropdown=defineComponent({name:"NavScreenDropdown",props:{config:{type:Object,required:!0}},setup(u){const m=useRoute(),b=toRef(u,"config"),$=computed(()=>b.value.ariaLabel||b.value.text),T=ref(!1);watch(()=>m.path,()=>{T.value=!1});const j=(U,G)=>G[G.length-1]===U;return()=>[h$3("button",{class:["nav-screen-dropdown-title",{active:T.value}],type:"button","aria-label":$.value,onClick:()=>{T.value=!T.value}},[h$3("span",{class:"title"},[h$3(Icon,{icon:b.value.icon}),u.config.text]),h$3("span",{class:["arrow",T.value?"down":"right"]})]),h$3("ul",{class:["nav-screen-dropdown",{hide:!T.value}]},b.value.children.map(U=>h$3("li",{class:"dropdown-item"},"children"in U?[h$3("h4",{class:"dropdown-subtitle"},U.link?h$3(AutoLink,{config:U,onFocusout:()=>{j(U,b.value.children)&&U.children.length===0&&(T.value=!1)}}):h$3("span",U.text)),h$3("ul",{class:"dropdown-subitem-wrapper"},U.children.map(G=>h$3("li",{class:"dropdown-subitem"},h$3(AutoLink,{config:G,onFocusout:()=>{j(G,U.children)&&j(U,b.value.children)&&(T.value=!1)}}))))]:h$3(AutoLink,{config:U,onFocusout:()=>{j(U,b.value.children)&&(T.value=!1)}}))))]}}),navScreenLinks="",NavScreenLinks=defineComponent({name:"NavScreenLinks",setup(){const u=useNavbarConfig();return()=>u.value.length?h$3("nav",{class:"nav-screen-links"},u.value.map(m=>h$3("div",{class:"navbar-links-item"},"children"in m?h$3(NavScreenDropdown,{config:m}):h$3(AutoLink,{config:m})))):null}}),DarkIcon=()=>h$3(P$3,{name:"dark"},()=>h$3("path",{d:"M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z"}));DarkIcon.displayName="DarkIcon";const LightIcon=()=>h$3(P$3,{name:"light"},()=>h$3("path",{d:"M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z"}));LightIcon.displayName="LightIcon";const AutoIcon=()=>h$3(P$3,{name:"auto"},()=>h$3("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z"}));AutoIcon.displayName="AutoIcon";const EnterFullScreenIcon=()=>h$3(P$3,{name:"enter-fullscreen"},()=>h$3("path",{d:"M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z"}));EnterFullScreenIcon.displayName="EnterFullScreenIcon";const CancelFullScreenIcon=()=>h$3(P$3,{name:"cancel-fullscreen"},()=>h$3("path",{d:"M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z"}));CancelFullScreenIcon.displayName="CancelFullScreenIcon";const OutlookIcon=()=>h$3(P$3,{name:"outlook"},()=>[h$3("path",{d:"M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z"})]);OutlookIcon.displayName="OutlookIcon";const darkModeSymbol=Symbol.for("darkMode"),useDarkmode=()=>{const u=inject(darkModeSymbol);if(!u)throw new Error("useDarkmode() is called without provider.");return u},injectDarkMode=u=>{const m=useThemeData(),b=usePreferredDark(),$=useStorage("vuepress-theme-hope-scheme","auto"),T=computed(()=>m.value.darkmode||"switch"),j=computed(()=>{const G=T.value;return G==="disable"?!1:G==="enable"?!0:G==="auto"?b.value:G==="toggle"?$.value==="dark":$.value==="dark"||$.value==="auto"&&b.value}),U=computed(()=>{const G=T.value;return G==="switch"||G==="toggle"});u.provide(darkModeSymbol,{canToggle:U,config:T,isDarkmode:j,status:$}),Object.defineProperties(u.config.globalProperties,{$isDarkmode:{get:()=>j.value}})},setupDarkMode=()=>{const{isDarkmode:u}=useDarkmode(),m=(b=u.value)=>{const $=window==null?void 0:window.document.querySelector("html");$==null||$.setAttribute("data-theme",b?"dark":"light")};onMounted(()=>{watch(u,m,{immediate:!0})})},appearanceSwitch="",AppearanceSwitch=defineComponent({name:"AppearanceSwitch",setup(){const{config:u,status:m}=useDarkmode(),b=()=>{u.value==="switch"?m.value={light:"dark",dark:"auto",auto:"light"}[m.value]:m.value=m.value==="light"?"dark":"light"};return()=>h$3("button",{id:"appearance-switch",onClick:()=>b()},[h$3(AutoIcon,{style:{display:m.value==="auto"?"block":"none"}}),h$3(DarkIcon,{style:{display:m.value==="dark"?"block":"none"}}),h$3(LightIcon,{style:{display:m.value==="light"?"block":"none"}})])}}),AppearanceMode=defineComponent({name:"AppearanceMode",setup(){const u=useThemeLocaleData(),{canToggle:m}=useDarkmode(),b=computed(()=>u.value.outlookLocales.darkmode);return()=>m.value?h$3("div",{class:"appearance-wrapper"},[h$3("label",{class:"appearance-title",for:"appearance-switch"},b.value),h$3(AppearanceSwitch)]):null}}),themeColorPicker="",ThemeColorPicker=defineComponent({name:"ThemeColorPicker",props:{themeColor:{type:Object,required:!0}},setup(u){const m=(b="")=>{const $=document.documentElement.classList,T=Object.keys(u.themeColor).map(j=>`theme-${j}`);if(!b){localStorage.removeItem("theme"),$.remove(...T);return}$.remove(...T.filter(j=>j!==`theme-${b}`)),$.add(`theme-${b}`),localStorage.setItem("theme",b)};return onMounted(()=>{const b=localStorage.getItem("theme");b&&m(b)}),()=>h$3("ul",{id:"theme-color-picker"},[h$3("li",h$3("span",{class:"theme-color",onClick:()=>m()})),...Object.entries(u.themeColor).map(([b,$])=>h$3("li",h$3("span",{style:{background:$},onClick:()=>m(b)})))])}}),ThemeColor=defineComponent({name:"ThemeColor",setup(){const u=useThemeData(),m=useThemeLocaleData(),b=computed(()=>m.value.outlookLocales.themeColor),$=computed(()=>{const{themeColor:T}=u.value;return T===!1?null:T});return()=>$.value?h$3("div",{class:"theme-color-wrapper"},[h$3("label",{class:"theme-color-title",for:"theme-color-picker"},b.value),h$3(ThemeColorPicker,{themeColor:$.value})]):null}}),toggleFullScreenButton="",ToggleFullScreenButton=defineComponent({name:"ToggleFullScreenButton",setup(){const u=useThemeLocaleData(),{isSupported:m,isFullscreen:b,toggle:$}=useFullscreen(),T=computed(()=>u.value.outlookLocales.fullscreen);return()=>m?h$3("div",{class:"fullscreen-wrapper"},[h$3("label",{class:"full-screen-title",for:"full-screen-switch"},T.value),h$3("button",{class:"full-screen",id:"full-screen-switch",ariaPressed:b.value,onClick:()=>$()},b.value?h$3(CancelFullScreenIcon):h$3(EnterFullScreenIcon))]):null}}),OutlookSettings=defineComponent({name:"OutlookSettings",setup(){const u=useThemeData(),m=usePure(),b=computed(()=>!m.value&&Boolean(u.value.themeColor)),$=computed(()=>!m.value&&u.value.fullscreen);return()=>h$3(ClientOnly,()=>[b.value?h$3(ThemeColor):null,h$3(AppearanceMode),$.value?h$3(ToggleFullScreenButton):null])}}),navScreen="",NavScreen=defineComponent({name:"NavScreen",props:{show:Boolean},emits:{close:()=>!0},setup(u,{emit:m,slots:b}){const $=useRoute(),{isMobile:T}=useWindowSize(),j=ref();return onMounted(()=>{watch(T,U=>{!U&&u.show&&(clearAllBodyScrollLocks(),m("close"))}),watch(()=>$.path,()=>{clearAllBodyScrollLocks(),m("close")})}),onBeforeUnmount(()=>{clearAllBodyScrollLocks()}),()=>h$3(Transition,{name:"fade",onEnter:()=>disableBodyScroll(j.value,{reserveScrollBarGap:!0}),onAfterLeave:()=>clearAllBodyScrollLocks()},()=>{var U,G;return u.show?h$3("div",{id:"nav-screen",ref:j},h$3("div",{class:"container"},[(U=b.before)==null?void 0:U.call(b),h$3(NavScreenLinks),h$3("div",{class:"outlook-wrapper"},h$3(OutlookSettings)),(G=b.after)==null?void 0:G.call(b)])):null})}}),outlookButton="",OutlookButton=defineComponent({name:"OutlookButton",setup(){const{isSupported:u}=useFullscreen(),m=useThemeData(),b=usePure(),$=useRoute(),{canToggle:T}=useDarkmode(),j=ref(!1),U=computed(()=>!b.value&&Boolean(m.value.themeColor)),G=computed(()=>!b.value&&m.value.fullscreen&&u);return watch(()=>$.path,()=>{j.value=!1}),()=>T.value||G.value||U.value?h$3("div",{class:"nav-item hide-in-mobile"},T.value&&!G.value&&!U.value?h$3(AppearanceSwitch):G.value&&!T.value&&!U.value?h$3(ToggleFullScreenButton):h$3("button",{class:["outlook-button",{open:j.value}],tabindex:"-1",ariaHidden:!0},[h$3(OutlookIcon),h$3("div",{class:"outlook-dropdown"},h$3(OutlookSettings))])):null}}),toggleNavbarButton="",ToggleNavbarButton=({active:u=!1},{emit:m})=>h$3("button",{class:["toggle-navbar-button",{"is-active":u}],"aria-label":"Toggle Navbar","aria-expanded":u,"aria-controls":"nav-screen",onClick:()=>m("toggle")},h$3("span",{class:"button-container"},[h$3("span",{class:"button-top"}),h$3("span",{class:"button-middle"}),h$3("span",{class:"button-bottom"})]));ToggleNavbarButton.displayName="ToggleNavbarButton";const toggleSidebarButton="",ToggleSidebarButton=(u,{emit:m})=>h$3("button",{class:"toggle-sidebar-button",title:"Toggle Sidebar",onClick:()=>m("toggle")},h$3("span",{class:"icon"}));ToggleSidebarButton.displayName="ToggleSidebarButton";ToggleSidebarButton.emits=["toggle"];const repoLink="",RepoLink=defineComponent({name:"RepoLink",components:{BitbucketIcon:gt,GiteeIcon:$t,GitHubIcon:vt,GitlabIcon:pt,SourceIcon:yt},setup(){const u=useNavbarRepo();return()=>u.value?h$3("div",{class:"nav-item"},h$3("a",{class:"repo-link",href:u.value.link,target:"_blank",rel:"noopener noreferrer","aria-label":u.value.label},h$3(resolveComponent(`${u.value.type}Icon`),{style:{width:"1.25rem",height:"1.25rem",verticalAlign:"middle"}}))):null}}),navbar="",Navbar=defineComponent({name:"NavBar",emits:{toggleSidebar:()=>!0},setup(u,{emit:m,slots:b}){const $=useThemeLocaleData(),{isMobile:T}=useWindowSize(),j=ref(!1),U=computed(()=>{const{navbarAutoHide:W="mobile"}=$.value;return W!=="none"&&(W==="always"||T.value)}),G=computed(()=>$.value.navbarLayout||{start:["Brand"],center:["Links"],end:["Language","Repo","Outlook","Search"]});return()=>{var Z,Y,nn,X,en,sn;const W={Brand:h$3(NavbarBrand),Language:null,Links:h$3(NavbarLinks),Repo:h$3(RepoLink),Outlook:h$3(OutlookButton),Search:_t("Docsearch")?h$3(resolveComponent("Docsearch")):_t("SearchBox")?h$3(resolveComponent("SearchBox")):_t("SearchBox")?h$3(resolveComponent("SearchBox")):null};return[h$3("header",{class:["navbar",{"auto-hide":U.value,"hide-icon":$.value.navbarIcon===!1}],id:"navbar"},[h$3("div",{class:"navbar-start"},[h$3(ToggleSidebarButton,{onToggle:()=>{j.value&&(j.value=!1),m("toggleSidebar")}}),(Z=b.startBefore)==null?void 0:Z.call(b),...(G.value.start||[]).map(an=>W[an]),(Y=b.startAfter)==null?void 0:Y.call(b)]),h$3("div",{class:"navbar-center"},[(nn=b.centerBefore)==null?void 0:nn.call(b),...(G.value.center||[]).map(an=>W[an]),(X=b.centerAfter)==null?void 0:X.call(b)]),h$3("div",{class:"navbar-end"},[(en=b.endBegin)==null?void 0:en.call(b),...(G.value.end||[]).map(an=>W[an]),(sn=b.endAfter)==null?void 0:sn.call(b),h$3(ToggleNavbarButton,{active:j.value,onToggle:()=>{j.value=!j.value}})])]),h$3(NavScreen,{show:j.value,onClose:()=>{j.value=!1}},{before:()=>{var an;return(an=b.screenTop)==null?void 0:an.call(b)},after:()=>{var an;return(an=b.screenBottom)==null?void 0:an.call(b)}})]}}}),isActiveSidebarItem=(u,m,b=!1)=>"activeMatch"in m?new RegExp(m.activeMatch).test(u.path):Rt(u,m.link)?!0:m.children&&!b?m.children.some($=>isActiveSidebarItem(u,$)):!1,isMatchedSidebarItem=(u,m)=>m.type==="group"?m.children.some(b=>b.type==="group"?isMatchedSidebarItem(u,b):b.type==="page"&&isActiveSidebarItem(u,b,!0))||"prefix"in m&&Rt(u,m.prefix):!1,renderItem=(u,m)=>u.link?h$3(AutoLink,{...m,config:u}):h$3("p",m,[h$3(Icon,{icon:u.icon}),u.text]),renderChildren$1=u=>{const m=useRoute();return u?h$3("ul",{class:"sidebar-sub-headers"},u.map(b=>{const $=isActiveSidebarItem(m,b,!0);return h$3("li",{class:"sidebar-sub-header"},[renderItem(b,{class:["sidebar-link","heading",{active:$}]}),renderChildren$1(b.children)])})):null},sidebarData={"/guide/":[],"/other/":[{text:"Demo",prefix:"demo/",collapsible:!0,children:["1.md","2.md"]},{text:"Git",prefix:"git/",collapsible:!0,children:["1.md"]},{text:"Io",prefix:"io/",collapsible:!0,children:["1.md","2.md","3.md"]},{text:"Linux",prefix:"linux/",collapsible:!0,children:["3.md","4.md"]},{text:"Lua",prefix:"lua/",collapsible:!0,children:["lua.md"]},{text:"Mq",prefix:"mq/",collapsible:!0,children:["2.md","1.md","3.md","4.md","6.md","5.md","7.md"]},{text:"Mybatis",prefix:"mybatis/",collapsible:!0,children:["4.md","6.md","5.md","3.md"]},{text:"Mysql",prefix:"mysql/",collapsible:!0,children:["1.md","2.md","3.md"]},{text:"Spring",prefix:"spring/",collapsible:!0,children:["1.md","2.md","3.md","4.md","5.md","6.md"]}],"/posts/":["strawberry.md","tomato.md","dragonfruit.md","cherry.md",{text:"Apple",prefix:"apple/",collapsible:!0,children:["1.md","2.md","3.md","4.md"]},{text:"Banana",prefix:"banana/",collapsible:!0,children:["1.md","2.md","3.md","4.md"]}]},resolvePrefix=(u="",m="")=>ue(m)?m:`${ensureEndingSlash(u)}${m}`,headerToSidebarItem=(u,m)=>{const b=usePageData();return{type:"heading",text:u.title,link:`${b.value.path}#${u.slug}`,children:headersToSidebarItemChildren(u.children,m)}},headersToSidebarItemChildren=(u,m)=>m>0?u.map(b=>headerToSidebarItem(b,m-1)):[],resolveHeadingSidebarItems=u=>{const m=usePageData();return headersToSidebarItemChildren(m.value.headers,u)},resolveArraySidebarItems=(u,m,b="")=>{const $=usePageData(),T=useRoute(),j=(U,G=b)=>{var Z;const W=isString$1(U)?useAutoLink(resolvePrefix(G,U)):U.link?{...U,...isLinkExternal(U.link)?{}:{link:useAutoLink(resolvePrefix(G,U.link)).link}}:U;if("children"in W){const Y=resolvePrefix(G,W.prefix),nn=W.children==="structure"?sidebarData[Y]:W.children;return{type:"group",...W,prefix:Y,children:nn.map(X=>j(X,Y))}}return{type:"page",...W,children:W.link===T.path?headersToSidebarItemChildren(((Z=$.value.headers[0])==null?void 0:Z.level)===1?$.value.headers[0].children:$.value.headers,m):[]}};return u.map(U=>j(U))},resolveMultiSidebarItems=(u,m)=>{const b=useRoute(),$=Object.keys(u).sort((T,j)=>j.length-T.length);for(const T of $)if(decodeURI(b.path).startsWith(T)){const j=u[T];return j?resolveArraySidebarItems(j==="structure"?sidebarData[T]:j,m,T):[]}return console.warn(`${b.path} is missing sidebar config.`),[]},resolveSidebarItems=()=>{const u=useRouteLocale(),m=usePageFrontmatter(),b=useThemeLocaleData(),$=m.value.home?!1:m.value.sidebar??b.value.sidebar??"structure",T=m.value.headerDepth??b.value.headerDepth??2;return $===!1?[]:$==="heading"?resolveHeadingSidebarItems(T):$==="structure"?resolveArraySidebarItems(sidebarData[u.value],T,u.value):isArray($)?resolveArraySidebarItems($,T):isPlainObject($)?resolveMultiSidebarItems($,T):[]},sidebarItemsSymbol=Symbol.for("sidebarItems"),setupSidebarItems=()=>{const u=computed(()=>resolveSidebarItems());provide(sidebarItemsSymbol,u)},useSidebarItems=()=>{const u=inject(sidebarItemsSymbol);if(!u)throw new Error("useSidebarItems() is called without provider.");return u},sidebarChild="",SidebarChild=defineComponent({name:"SidebarChild",props:{config:{type:Object,required:!0}},setup(u){const m=useRoute();return()=>[renderItem(u.config,{class:["sidebar-link",`sidebar-${u.config.type}`,{active:isActiveSidebarItem(m,u.config,!0)}],exact:!0}),renderChildren$1(u.config.children)]}}),sidebarGroup="",SidebarGroup=defineComponent({name:"SidebarGroup",props:{config:{type:Object,required:!0},open:{type:Boolean,required:!0}},emits:{toggle:()=>!0},setup(u,{emit:m}){const b=useRoute(),$=computed(()=>isActiveSidebarItem(b,u.config)),T=computed(()=>isActiveSidebarItem(b,u.config,!0));return()=>{const{collapsible:j,children:U=[],icon:G,prefix:W,link:Z,text:Y}=u.config;return h$3("section",{class:"sidebar-group"},[h$3(j?"button":"p",{class:["sidebar-heading",{clickable:j||Z,exact:T.value,active:$.value}],...j?{onClick:()=>m("toggle"),onKeydown:nn=>{nn.key==="Enter"&&m("toggle")}}:{}},[h$3(Icon,{icon:G}),Z?h$3(RouterLink,{to:Z,class:"title"},()=>Y):h$3("span",{class:"title"},Y),j?h$3("span",{class:["arrow",u.open?"down":"right"]}):null]),u.open||!j?h$3(SidebarLinks,{key:W,config:U}):null])}}}),sidebarLinks="",SidebarLinks=defineComponent({name:"SidebarLinks",props:{config:{type:Array,required:!0}},setup(u){const m=useRoute(),b=ref(-1),$=T=>{b.value=T===b.value?-1:T};return watch(()=>m.path,()=>{const T=u.config.findIndex(j=>isMatchedSidebarItem(m,j));b.value=T},{immediate:!0,flush:"post"}),()=>h$3("ul",{class:"sidebar-links"},u.config.map((T,j)=>h$3("li",T.type==="group"?h$3(SidebarGroup,{config:T,open:j===b.value,onToggle:()=>$(j)}):h$3(SidebarChild,{config:T}))))}}),sidebar="",Sidebar=defineComponent({name:"SideBar",setup(u,{slots:m}){const b=useRoute(),$=useThemeLocaleData(),T=useSidebarItems(),j=ref();return onMounted(()=>{watch(()=>b.hash,U=>{const G=document.querySelector(`.sidebar a.sidebar-link[href="${b.path}${U}"]`);if(!G)return;const{top:W,height:Z}=j.value.getBoundingClientRect(),{top:Y,height:nn}=G.getBoundingClientRect();Y<W?G.scrollIntoView(!0):Y+nn>W+Z&&G.scrollIntoView(!1)})}),()=>{var U,G,W;return h$3("aside",{class:["sidebar",{"hide-icon":$.value.sidebarIcon===!1}],id:"sidebar",ref:j},[(U=m.top)==null?void 0:U.call(m),((G=m.default)==null?void 0:G.call(m))||h$3(SidebarLinks,{config:T.value}),(W=m.bottom)==null?void 0:W.call(m)])}}}),common="",CommonWrapper=defineComponent({name:"CommonWrapper",props:{noNavbar:Boolean,noSidebar:Boolean},setup(u,{slots:m}){const b=useRouter(),$=usePageData(),T=usePageFrontmatter(),j=useThemeLocaleData(),{isMobile:U,isWide:G}=useWindowSize(),W=ref(!1),Z=computed(()=>u.noNavbar||T.value.navbar===!1||j.value.navbar===!1?!1:Boolean($.value.title||j.value.logo||j.value.repo||j.value.navbar)),Y=useSidebarItems(),nn=computed(()=>u.noSidebar?!1:T.value.sidebar!==!1&&Y.value.length!==0&&!T.value.home),X=ref(!1),en=ref(!1),sn=dn=>{X.value=typeof dn=="boolean"?dn:!X.value},an=dn=>{en.value=typeof dn=="boolean"?dn:!en.value},on={x:0,y:0},rn=dn=>{on.x=dn.changedTouches[0].clientX,on.y=dn.changedTouches[0].clientY},kn=dn=>{const tn=dn.changedTouches[0].clientX-on.x,un=dn.changedTouches[0].clientY-on.y;Math.abs(tn)>Math.abs(un)*1.5&&Math.abs(tn)>40&&(tn>0&&on.x<=80?sn(!0):sn(!1))},gn=computed(()=>T.value.home?!1:T.value.toc||j.value.toc!==!1&&T.value.toc!==!1),$n=()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;let yn,wn=0;return useEventListener("scroll",useThrottleFn(()=>{const dn=$n();wn<dn&&dn>58?X.value||(W.value=!0):W.value=!1,wn=dn},300,!0)),watch(U,dn=>{dn||sn(!1)}),onMounted(()=>{yn=b.afterEach(()=>{sn(!1)})}),onBeforeUnmount(()=>{yn()}),()=>h$3(_t("GlobalEncrypt")?resolveComponent("GlobalEncrypt"):Ct,()=>{var dn;return h$3("div",{class:["theme-container",{"no-navbar":!Z.value,"no-sidebar":!nn.value&&!(m.sidebar||m.sidebarTop||m.sidebarBottom),"has-toc":gn.value,"hide-navbar":W.value,"sidebar-collapsed":!U.value&&!G.value&&en.value,"sidebar-open":U.value&&X.value},T.value.containerClass||""],onTouchStart:rn,onTouchEnd:kn},[Z.value?h$3(Navbar,{onToggleSidebar:()=>sn()},{startBefore:()=>{var tn;return(tn=m.navbarStartBefore)==null?void 0:tn.call(m)},startAfter:()=>{var tn;return(tn=m.navbarStartAfter)==null?void 0:tn.call(m)},centerBefore:()=>{var tn;return(tn=m.navbarCenterBefore)==null?void 0:tn.call(m)},centerAfter:()=>{var tn;return(tn=m.navbarCenterAfter)==null?void 0:tn.call(m)},endBegin:()=>{var tn;return(tn=m.navbarEndBegin)==null?void 0:tn.call(m)},endAfter:()=>{var tn;return(tn=m.navbarEndAfter)==null?void 0:tn.call(m)},screenTop:()=>{var tn;return(tn=m.navScreenTop)==null?void 0:tn.call(m)},screenBottom:()=>{var tn;return(tn=m.navScreenBottom)==null?void 0:tn.call(m)}}):null,h$3(Transition,{name:"fade"},()=>X.value?h$3("div",{class:"sidebar-mask",onClick:()=>sn(!1)}):null),h$3(Transition,{name:"fade"},()=>U.value?null:h$3("div",{class:"toggle-sidebar-wrapper",onClick:()=>an()},h$3("span",{class:["arrow",en.value?"right":"left"]}))),h$3(Sidebar,{},{...m.sidebar?{default:()=>{var tn;return(tn=m.sidebar)==null?void 0:tn.call(m)}}:{},top:()=>{var tn;return(tn=m.sidebarTop)==null?void 0:tn.call(m)},bottom:()=>{var tn;return(tn=m.sidebarBottom)==null?void 0:tn.call(m)}}),(dn=m.default)==null?void 0:dn.call(m),h$3(PageFooter)])})}}),DropTransition=defineComponent({name:"DropTransition",props:{type:{type:String,default:"single"},delay:{type:Number,default:0},duration:{type:Number,default:.25},appear:Boolean},setup(u,{slots:m}){const b=T=>{T.style.transition=`transform ${u.duration}s ease-in-out ${u.delay}s, opacity ${u.duration}s ease-in-out ${u.delay}s`,T.style.transform="translateY(-20px)",T.style.opacity="0"},$=T=>{T.style.transform="translateY(0)",T.style.opacity="1"};return()=>h$3(u.type==="single"?Transition:TransitionGroup,{name:"drop",appear:u.appear,onAppear:b,onAfterAppear:$,onEnter:b,onAfterEnter:$,onBeforeLeave:b},()=>{var T;return(T=m.default)==null?void 0:T.call(m)})}}),featurePanel="",FeaturePanel=defineComponent({name:"FeaturePanel",props:{items:{type:Object,default:()=>[]},header:{type:String,default:""}},setup(u){return()=>h$3("div",{class:"feature-panel"},[u.header?h$3("h2",{class:"feature-header"},u.header):null,u.items.length?h$3("div",{class:"feature-wrapper"},u.items.map(m=>{const b=[h$3("h3",[h$3(Icon,{icon:m.icon}),h$3("span",{innerHTML:m.title})]),h$3("p",{innerHTML:m.details})];return m.link?isLinkExternal(m.link)?h$3("a",{class:"feature-item link",href:m.link,role:"navigation","aria-label":m.title,target:"_blank"},b):h$3(RouterLink,{class:"feature-item link",to:m.link,role:"navigation","aria-label":m.title},()=>b):h$3("div",{class:"feature-item"},b)})):null])}}),heroInfo="",HeroInfo=defineComponent({name:"HeroInfo",setup(u,{slots:m}){const b=usePageFrontmatter(),$=useSiteLocaleData(),T=computed(()=>b.value.heroText===!1?!1:b.value.heroText||$.value.title||"Hello"),j=computed(()=>b.value.tagline===!1?!1:b.value.tagline||$.value.description||"Welcome to your VuePress site"),U=computed(()=>b.value.heroImage?withBase(b.value.heroImage):null),G=computed(()=>b.value.heroImageDark?withBase(b.value.heroImageDark):null),W=computed(()=>b.value.heroAlt||T.value||"hero"),Z=computed(()=>b.value.actions??[]);return()=>{var Y,nn;return h$3("header",{class:"hero-info-wrapper"},[((Y=m.heroImage)==null?void 0:Y.call(m))||h$3(DropTransition,{appear:!0,type:"group"},()=>[U.value?h$3("img",{key:"light",class:{light:G.value},src:U.value,alt:W.value}):null,G.value?h$3("img",{key:"dark",class:"dark",src:G.value,alt:W.value}):null]),((nn=m.heroInfo)==null?void 0:nn.call(m))||h$3("div",{class:"hero-info"},[T.value?h$3(DropTransition,{appear:!0,delay:.04},()=>h$3("h1",{id:"main-title"},T.value)):null,j.value?h$3(DropTransition,{appear:!0,delay:.08},()=>h$3("p",{class:"description"},j.value)):null,Z.value.length?h$3(DropTransition,{appear:!0,delay:.12},()=>h$3("p",{class:"actions"},Z.value.map(X=>h$3(AutoLink,{class:["action-button",X.type||"default"],config:X,noExternalLinkIcon:!0})))):null])])}}}),MarkdownContent=({custom:u})=>h$3(Content,{class:["theme-hope-content",{custom:u}]});MarkdownContent.displayName="MarkdownContent";MarkdownContent.props={custom:Boolean};const homePage="",HomePage=defineComponent({name:"HopePage",setup(u,{slots:m}){const b=usePure(),$=usePageFrontmatter(),T=computed(()=>{const{features:j}=$.value;return isArray(j)?j.some(U=>!("items"in U))?[{items:j}]:j:[]});return()=>{var j,U,G;return h$3("main",{class:["home project",{pure:b.value}],id:"main-content","aria-labelledby":$.value.heroText===null?void 0:"main-title"},[(j=m.top)==null?void 0:j.call(m),h$3(HeroInfo),T.value.map(({header:W="",items:Z},Y)=>h$3(DropTransition,{appear:!0,delay:.16+Y*.08},()=>h$3(FeaturePanel,{header:W,items:Z}))),(U=m.center)==null?void 0:U.call(m),h$3(DropTransition,{appear:!0,delay:.16+T.value.length*.08},()=>h$3(MarkdownContent)),(G=m.bottom)==null?void 0:G.call(m)])}}}),getAncestorLinks=(u,m)=>{const b=u.path.replace(m,"/").split("/"),$=[];let T=removeEndingSlash(m);return b.forEach((j,U)=>{U!==b.length-1?(T+=`${j}/`,$.push(T)):j!==""&&(T+=j,$.push(T))}),$},breadcrumb="",BreadCrumb=defineComponent({name:"BreadCrumb",setup(){const u=useRouter(),m=useRoute(),b=useRouteLocale(),$=usePageFrontmatter(),T=useThemeLocaleData(),j=ref([]),U=computed(()=>($.value.breadcrumb||$.value.breadcrumb!==!1&&T.value.breadcrumb!==!1)&&j.value.length>1),G=computed(()=>$.value.breadcrumbIcon||$.value.breadcrumbIcon!==!1&&T.value.breadcrumbIcon!==!1),W=()=>{const Z=u.getRoutes(),Y=getAncestorLinks(m,b.value).map(nn=>{const X=Z.find(en=>en.path===nn);if(X){const{meta:en,path:sn}=Dt(u,X.path),an=en.s||en.title;if(an)return{title:an,icon:en.i,path:sn}}return null}).filter(nn=>nn!==null);Y.length>1&&(j.value=Y)};return onMounted(()=>{W(),watch(()=>m.path,W)}),()=>h$3("nav",{class:["breadcrumb",{disable:!U.value}]},U.value?h$3("ol",{vocab:"https://schema.org/",typeof:"BreadcrumbList"},j.value.map((Z,Y)=>h$3("li",{class:{"is-active":j.value.length-1===Y},property:"itemListElement",typeof:"ListItem"},[h$3(RouterLink,{to:Z.path,property:"item",typeof:"WebPage"},()=>[G.value?h$3(Icon,{icon:Z.icon}):null,h$3("span",{property:"name"},Z.title||"Unknown")]),h$3("meta",{property:"position",content:Y+1})]))):[])}}),pageNav="",resolveFromFrontmatterConfig=u=>u===!1?!1:isString$1(u)?useAutoLink(u,!0):isPlainObject(u)?u:null,resolveFromSidebarItems=(u,m,b)=>{const $=u.findIndex(T=>T.link===m);if($!==-1){const T=u[$+b];return T!=null&&T.link?T:null}for(const T of u)if(T.children){const j=resolveFromSidebarItems(T.children,m,b);if(j)return j}return null},PageNav=defineComponent({name:"PageNav",setup(){const u=useThemeLocaleData(),m=usePageFrontmatter(),b=useSidebarItems(),$=useRoute(),T=useNavigate(),j=computed(()=>{const G=resolveFromFrontmatterConfig(m.value.prev);return G===!1?null:G||(u.value.prevLink===!1?null:resolveFromSidebarItems(b.value,$.path,-1))}),U=computed(()=>{const G=resolveFromFrontmatterConfig(m.value.next);return G===!1?null:G||(u.value.nextLink===!1?null:resolveFromSidebarItems(b.value,$.path,1))});return useEventListener("keydown",G=>{G.altKey&&(G.key==="ArrowRight"?U.value&&(T(U.value.link),G.preventDefault()):G.key==="ArrowLeft"&&j.value&&(T(j.value.link),G.preventDefault()))}),()=>j.value||U.value?h$3("nav",{class:"page-nav"},[j.value?h$3(AutoLink,{class:"prev",config:j.value},()=>{var G,W;return[h$3("div",{class:"hint"},[h$3("span",{class:"arrow left"}),u.value.metaLocales.prev]),h$3("div",{class:"link"},[h$3(Icon,{icon:(G=j.value)==null?void 0:G.icon}),(W=j.value)==null?void 0:W.text])]}):null,U.value?h$3(AutoLink,{class:"next",config:U.value},()=>{var G,W;return[h$3("div",{class:"hint"},[u.value.metaLocales.next,h$3("span",{class:"arrow right"})]),h$3("div",{class:"link"},[(G=U.value)==null?void 0:G.text,h$3(Icon,{icon:(W=U.value)==null?void 0:W.icon})])]}):null]):null}}),AuthorIcon=()=>h$3(P$3,{name:"author"},()=>h$3("path",{d:"M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z"}));AuthorIcon.displayName="AuthorIcon";const CalendarIcon=()=>h$3(P$3,{name:"calendar"},()=>h$3("path",{d:"M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z"}));CalendarIcon.displayName="CalendarIcon";const CategoryIcon$1=()=>h$3(P$3,{name:"category"},()=>h$3("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));CategoryIcon$1.displayName="CategoryIcon";const PrintIcon=()=>h$3(P$3,{name:"print"},()=>h$3("path",{d:"M819.2 364.8h-44.8V128c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v236.8h-44.8C145.067 364.8 96 413.867 96 473.6v192c0 59.733 49.067 108.8 108.8 108.8h44.8V896c0 17.067 14.933 32 32 32h460.8c17.067 0 32-14.933 32-32V774.4h44.8c59.733 0 108.8-49.067 108.8-108.8v-192c0-59.733-49.067-108.8-108.8-108.8zM313.6 160h396.8v204.8H313.6V160zm396.8 704H313.6V620.8h396.8V864zM864 665.6c0 25.6-19.2 44.8-44.8 44.8h-44.8V588.8c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v121.6h-44.8c-25.6 0-44.8-19.2-44.8-44.8v-192c0-25.6 19.2-44.8 44.8-44.8h614.4c25.6 0 44.8 19.2 44.8 44.8v192z"}));PrintIcon.displayName="PrintIcon";const TagIcon$1=()=>h$3(P$3,{name:"tag"},()=>h$3("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));TagIcon$1.displayName="TagIcon";const TimerIcon=()=>h$3(P$3,{name:"timer"},()=>h$3("path",{d:"M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z"}));TimerIcon.displayName="TimerIcon";const WordIcon=()=>h$3(P$3,{name:"word"},()=>[h$3("path",{d:"M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z"}),h$3("path",{d:"M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z"})]);WordIcon.displayName="WordIcon";const useMetaLocale=()=>{const u=useThemeLocaleData();return computed(()=>u.value.metaLocales)},readingTimeLocales={"/":{word:"约 $word 字",less1Minute:"小于 1 分钟",time:"大约 $time 分钟"}},editLinkPatterns={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},resolveEditLink=({docsRepo:u,docsBranch:m,docsDir:b,filePathRelative:$,editLinkPattern:T})=>{if(!$)return null;const j=Jt(u);let U;return T?U=T:j!==null&&(U=editLinkPatterns[j]),U?U.replace(/:repo/,isLinkHttp(u)?u:`https://github.com/${u}`).replace(/:branch/,m).replace(/:path/,removeLeadingSlash(`${removeEndingSlash(b)}/${$}`)):null},useEditLink=()=>{const u=useThemeLocaleData(),m=usePageData(),b=usePageFrontmatter();return computed(()=>{const{repo:$,docsRepo:T=$,docsBranch:j="main",docsDir:U="",editLink:G,editLinkPattern:W=""}=u.value;if(!(b.value.editLink??G??!0)||!T)return null;const Y=resolveEditLink({docsRepo:T,docsBranch:j,docsDir:U,editLinkPattern:W,filePathRelative:m.value.filePathRelative});return Y?{text:u.value.metaLocales.editLink,link:Y}:null})},useUpdateTime=()=>{const u=useSiteLocaleData(),m=useThemeLocaleData(),b=usePageData(),$=usePageFrontmatter();return computed(()=>{var U,G;return!($.value.lastUpdated??m.value.lastUpdated??!0)||!((U=b.value.git)!=null&&U.updatedTime)?null:new Date((G=b.value.git)==null?void 0:G.updatedTime).toLocaleString(u.value.lang)})},useContributors=()=>{const u=useThemeLocaleData(),m=usePageData(),b=usePageFrontmatter();return computed(()=>{var T;return b.value.contributors??u.value.contributors??!0?((T=m.value.git)==null?void 0:T.contributors)??null:null})},authorInfo="",AuthorInfo=defineComponent({name:"AuthorInfo",inheritAttrs:!1,props:{author:{type:Array,required:!0},pure:Boolean},setup(u){const m=useMetaLocale();return()=>u.author.length?h$3("span",{class:"page-author-info","aria-label":`${m.value.author}${u.pure?"":"🖊"}`,...u.pure?{}:{"data-balloon-pos":"down"}},[h$3(AuthorIcon),h$3("span",u.author.map(b=>b.url?h$3("a",{class:"page-author-item",href:b.url,target:"_blank",rel:"noopener noreferrer"},b.name):h$3("span",{class:"page-author-item"},b.name))),h$3("span",{property:"author",content:u.author.map(b=>b.name).join(", ")})]):null}}),categoryInfo="",CategoryInfo=defineComponent({name:"CategoryInfo",inheritAttrs:!1,props:{category:{type:Array,required:!0},pure:Boolean},setup(u){const m=useRouter(),b=useRoute(),$=useMetaLocale(),T=(j,U="")=>{U&&b.path!==U&&(j.preventDefault(),m.push(U))};return()=>u.category.length?h$3("span",{class:"page-category-info","aria-label":`${$.value.category}${u.pure?"":"🌈"}`,...u.pure?{}:{"data-balloon-pos":"down"}},[h$3(CategoryIcon$1),...u.category.map(({name:j,path:U})=>h$3("span",{class:["page-category-item",{[`category${Gt(j,9)}`]:!u.pure,clickable:U}],role:U?"navigation":"",onClick:G=>T(G,U)},j)),h$3("meta",{property:"articleSection",content:u.category.map(({name:j})=>j).join(",")})]):null}}),DateInfo=defineComponent({name:"DateInfo",inheritAttrs:!1,props:{date:{type:Object,default:null},localizedDate:{type:String,default:""},pure:Boolean},setup(u){const m=usePageLang(),b=useMetaLocale();return()=>{var $,T;return u.date?h$3("span",{class:"page-date-info","aria-label":`${b.value.date}${u.pure?"":"📅"}`,...u.pure?{}:{"data-balloon-pos":"down"}},[h$3(CalendarIcon),h$3("span",h$3(ClientOnly,()=>{var j;return u.localizedDate||((j=u.date.value)==null?void 0:j.toLocaleDateString(m.value))})),h$3("meta",{property:"datePublished",content:((T=($=u.date)==null?void 0:$.value)==null?void 0:T.toISOString())||""})]):null}}}),ReadingTimeInfo=defineComponent({name:"ReadingTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},pure:Boolean},setup(u){const m=useMetaLocale(),b=kt(readingTimeLocales),$=computed(()=>{if(!u.readingTime)return null;const{minutes:T}=u.readingTime;return T<1?{text:b.value.less1Minute,time:"PT1M"}:{text:b.value.time.replace("$time",Math.round(T).toString()),time:`PT${Math.round(T)}M`}});return()=>$.value?h$3("span",{class:"page-reading-time-info","aria-label":`${m.value.readingTime}${u.pure?"":"⌛"}`,...u.pure?{}:{"data-balloon-pos":"down"}},[h$3(TimerIcon),h$3("span",$.value.text),h$3("meta",{property:"timeRequired",content:$.value.time})]):null}}),tagInfo="",TagInfo=defineComponent({name:"TagInfo",inheritAttrs:!1,props:{tag:{type:Array,default:()=>[]},pure:Boolean},setup(u){const m=useRouter(),b=useRoute(),$=useMetaLocale(),T=(j,U="")=>{U&&b.path!==U&&(j.preventDefault(),m.push(U))};return()=>u.tag.length?h$3("span",{class:"page-tag-info","aria-label":`${$.value.tag}${u.pure?"":"🏷"}`,...u.pure?{}:{"data-balloon-pos":"down"}},[h$3(TagIcon$1),...u.tag.map(({name:j,path:U})=>h$3("span",{class:["page-tag-item",{[`tag${Gt(j,9)}`]:!u.pure,clickable:U}],role:U?"navigation":"",onClick:G=>T(G,U)},j)),h$3("meta",{property:"keywords",content:u.tag.map(({name:j})=>j).join(",")})]):null}}),originalInfo="",OriginalInfo=defineComponent({name:"OriginalInfo",inheritAttrs:!1,props:{isOriginal:Boolean},setup(u){const m=useMetaLocale();return()=>u.isOriginal?h$3("span",{class:"page-original-info"},m.value.origin):null}}),WordInfo=defineComponent({name:"ReadTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},pure:Boolean},setup(u){const m=useMetaLocale(),b=kt(readingTimeLocales),$=computed(()=>{var j;return(j=u.readingTime)==null?void 0:j.words.toString()}),T=computed(()=>b.value.word.replace("$word",$.value||""));return()=>$.value?h$3("span",{class:"page-word-info","aria-label":`${m.value.words}${u.pure?"":"🔠"}`,...u.pure?{}:{"data-balloon-pos":"down"}},[h$3(WordIcon),h$3("span",T.value),h$3("meta",{property:"wordCount",content:$.value})]):null}}),pageInfo="",PageInfo=defineComponent({name:"PageInfo",components:{AuthorInfo,CategoryInfo,DateInfo,OriginalInfo,PageViewInfo:()=>null,ReadingTimeInfo,TagInfo,WordInfo},props:{items:{type:[Array,Boolean],default:()=>["Author","Original","Date","PageView","ReadingTime","Category","Tag"]},info:{type:Object,required:!0}},setup(u){const m=usePure();return()=>u.items?h$3("div",{class:"page-info"},u.items.map(b=>h$3(resolveComponent(`${b}Info`),{...u.info,pure:m.value}))):null}}),pageTitle="",PageTitle=defineComponent({name:"PageTitle",setup(){const u=usePageData(),m=usePageFrontmatter(),b=useThemeLocaleData(),{info:$,items:T}=usePageInfo();return()=>h$3("div",{class:"page-title"},[h$3("h1",[b.value.titleIcon===!1?null:h$3(Icon,{icon:m.value.icon}),u.value.title]),h$3(PageInfo,{info:$.value,...T.value===null?{}:{items:T.value}}),h$3("hr")])}}),EditIcon=()=>h$3(P$3,{name:"edit"},()=>[h$3("path",{d:"M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"}),h$3("path",{d:"M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"})]);EditIcon.displayName="EditIcon";const NotFoundIcon=()=>h$3("svg",{xmlns:"http://www.w3.org/2000/svg",class:"not-found-icon",viewBox:"0 0 178 130",innerHTML:'<defs><linearGradient id="b" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#e9e9e9"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="c" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#dcdcdc"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="d" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#f1f1f1"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="e" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#dedede"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="f" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#e8e8e8"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="g" x1=".213" y1="1.265" x2=".846" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#f5f5f5"/></linearGradient><linearGradient id="h" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#c5c5c5"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="i" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#acacac"/><stop offset="1" stop-color="#f2f2f2" stop-opacity=".388"/></linearGradient><clipPath id="a"><path transform="translate(744 1111)" fill="none" d="M0 0h178v130H0z"/></clipPath></defs><g transform="translate(-744 -1111)" clip-path="url(#a)"><path d="M0 10.795 36.6 0v93.779L0 104.574z" transform="translate(772.466 1122.142)" fill="url(#b)"/><path d="M-8.492 10.642-26.361-.469v93.78l17.868 11.111z" transform="translate(780.958 1122.293)" fill="url(#c)"/><path d="M-8.5 5.55 28.106-5.3 10.228-16.437l-36.6 10.845z" transform="translate(780.963 1127.438)" fill="url(#d)"/><path d="M0 10.539 35.741 0v91.56L0 102.1z" transform="translate(870.158 1123.617)" fill="url(#d)"/><path d="M-8.913 10.38-26.361-.469v91.562l17.448 10.848z" transform="translate(879.071 1123.775)" fill="url(#e)"/><path d="m-8.918 5.032 35.741-10.59L9.366-16.437-26.375-5.848z" transform="translate(879.076 1129.175)" fill="url(#d)"/><path d="M0 9.137 30.839 0v79.381L0 88.519z" transform="translate(799.678 1151.579)" fill="url(#f)"/><path d="m-11.306 8.936-15.054-9.4v79.377l15.054 9.4z" transform="translate(810.985 1151.78)" fill="url(#c)"/><path d="M-11.313 2.087 19.526-7.05 4.464-16.437-26.375-7.3z" transform="translate(810.991 1158.63)" fill="url(#g)"/><path d="M178 53H0a51.361 51.361 0 0 1 10.453-20.952 74.532 74.532 0 0 1 19.742-16.811A103.3 103.3 0 0 1 57.089 4.058a127.515 127.515 0 0 1 63.823 0 103.3 103.3 0 0 1 26.894 11.179 74.532 74.532 0 0 1 19.741 16.811A51.363 51.363 0 0 1 178 53z" transform="translate(744 1187.549)" fill="url(#h)"/><path d="m814.529 1199.586-1.272 1.212h2.3l1.2-1.212zM816.725 1194.909l-1.272 1.212h2.3l1.263-1.212zM863.284 1199.585l-1.272 1.212h2.3l1.2-1.212zM865.519 1194.9l-1.272 1.212h2.3l1.263-1.212z" fill="#cbcbcb"/><path d="m799.527 1191.21 10.182-21.97h4.381l-9.931 21.719h14.876v3.941h-19.508zm13.081-9.493h4.152v17.859h-4.152zm20.728 18.151q-4.256 0-6.457-2.274a8.74 8.74 0 0 1-2.2-6.343v-13.791a8.708 8.708 0 0 1 2.21-6.353q2.212-2.264 6.447-2.264 4.256 0 6.457 2.253a8.726 8.726 0 0 1 2.2 6.363v13.792a8.708 8.708 0 0 1-2.21 6.349q-2.211 2.268-6.447 2.268zm0-4.048a4.29 4.29 0 0 0 3.328-1.178 4.862 4.862 0 0 0 1.074-3.39v-13.792a4.893 4.893 0 0 0-1.064-3.39 4.285 4.285 0 0 0-3.338-1.179 4.285 4.285 0 0 0-3.338 1.179 4.893 4.893 0 0 0-1.064 3.39v13.791a4.862 4.862 0 0 0 1.075 3.391 4.29 4.29 0 0 0 3.327 1.178zm14.928-4.61 10.181-21.97h4.381l-9.931 21.719h14.876v3.941h-19.507zm13.081-9.493h4.152v17.859h-4.152z" fill="#c6c6c6"/><path d="m798.306 1192.431 10.182-21.97h4.381l-9.931 21.719h14.876v3.941h-19.508zm13.081-9.493h4.152v17.859h-4.152zm20.728 18.151q-4.256 0-6.457-2.274a8.74 8.74 0 0 1-2.2-6.343v-13.791a8.708 8.708 0 0 1 2.21-6.353q2.212-2.264 6.447-2.264 4.256 0 6.457 2.253a8.726 8.726 0 0 1 2.2 6.363v13.792a8.708 8.708 0 0 1-2.21 6.349q-2.211 2.268-6.447 2.268zm0-4.048a4.29 4.29 0 0 0 3.328-1.178 4.862 4.862 0 0 0 1.074-3.39v-13.792a4.893 4.893 0 0 0-1.064-3.39 4.285 4.285 0 0 0-3.338-1.179 4.285 4.285 0 0 0-3.338 1.179 4.893 4.893 0 0 0-1.064 3.39v13.791a4.862 4.862 0 0 0 1.075 3.391 4.29 4.29 0 0 0 3.327 1.178zm14.928-4.61 10.181-21.97h4.381l-9.931 21.719h14.876v3.941h-19.507zm13.081-9.493h4.152v17.859h-4.152z" fill="#b2b2b2"/><path d="m-27.694-19.435 10.182 14.517h4.381l-9.931-14.352h14.876v-2.606h-19.508zm13.081 6.273h4.152v-11.8h-4.152zM6.115-25.156q-4.256 0-6.457 1.5a4.8 4.8 0 0 0-2.2 4.191v9.113a4.784 4.784 0 0 0 2.212 4.2 11.511 11.511 0 0 0 6.447 1.5q4.256 0 6.457-1.489a4.786 4.786 0 0 0 2.2-4.2v-9.113a4.784 4.784 0 0 0-2.212-4.2 11.511 11.511 0 0 0-6.447-1.502zm0 2.675a5.705 5.705 0 0 1 3.328.779 2.6 2.6 0 0 1 1.074 2.24v9.113a2.607 2.607 0 0 1-1.064 2.24 5.7 5.7 0 0 1-3.338.779 5.7 5.7 0 0 1-3.338-.779 2.607 2.607 0 0 1-1.064-2.24v-9.113A2.6 2.6 0 0 1 2.788-21.7a5.705 5.705 0 0 1 3.327-.782zm14.927 3.047L31.224-4.918h4.381l-9.931-14.351H40.55v-2.606H21.043zm13.081 6.273h4.152v-11.8h-4.151z" transform="translate(826 1226.245)" opacity=".32" fill="url(#i)"/><g fill="#e6e6e6"><path d="m858.428 1169.23-1.2 1.259h4.388l1.178-1.259zM802.944 1192.187l1.288-1.375h7.143v1.375zm8.415-9.25 1.273-1.234h4.15l-1.235 1.234zm-2.855-12.469 1.198-1.259h4.367l-1.178 1.259zM861.362 1181.678l-1.27 1.3h4.188l1.236-1.3zM865.519 1190.9l-1.27 1.3h2.3l1.162-1.3zM852.838 1190.791l-1.207 1.508h8.447v-1.508z"/></g></g>'}),pageMeta="",PageMeta=defineComponent({name:"PageMeta",setup(){const u=useThemeLocaleData(),m=useEditLink(),b=useUpdateTime(),$=useContributors();return()=>{const{metaLocales:T}=u.value;return h$3("footer",{class:"page-meta"},[m.value?h$3("div",{class:"meta-item edit-link"},h$3(AutoLink,{class:"label",config:m.value},{before:()=>h$3(EditIcon)})):null,h$3("div",{class:"meta-item git-info"},[b.value?h$3("div",{class:"update-time"},[h$3("span",{class:"label"},`${T.lastUpdated}: `),h$3(ClientOnly,()=>h$3("span",{class:"info"},b.value))]):null,$.value&&$.value.length?h$3("div",{class:"contributors"},[h$3("span",{class:"label"},`${T.contributors}: `),$.value.map(({email:j,name:U},G)=>[h$3("span",{class:"contributor",title:`email: ${j}`},U),G!==$.value.length-1?",":""])]):null])])}}}),toc="",renderHeader=({title:u,level:m,slug:b})=>h$3(RouterLink,{to:`#${b}`,class:["toc-link",`level${m}`]},()=>u),renderChildren=(u,m)=>{const b=useRoute();return u.length&&m>0?h$3("ul",{class:"toc-list"},u.map($=>[h$3("li",{class:["toc-item",{active:Rt(b,`#${$.slug}`)}]},renderHeader($)),renderChildren($.children,m-1)])):null},TOC=defineComponent({name:"TOC",props:{items:{type:Array,default:()=>[]},headerDepth:{type:Number,default:2}},setup(u){const m=useRoute(),b=usePageData(),$=useMetaLocale(),T=useThemeData(),j=ref(),U=G=>{var W;(W=j.value)==null||W.scrollTo({top:G,behavior:"smooth"})};return onMounted(()=>{watch(()=>m.hash,G=>{if(j.value){const W=document.querySelector(`#toc a.toc-link[href$="${G}"]`);if(!W)return;const{top:Z,height:Y}=j.value.getBoundingClientRect(),{top:nn,height:X}=W.getBoundingClientRect();nn<Z?U(j.value.scrollTop+nn-Z):nn+X>Z+Y&&U(j.value.scrollTop+nn+X-Z-Y)}})}),()=>{const G=u.items.length?renderChildren(u.items,u.headerDepth):b.value.headers?renderChildren(b.value.headers,u.headerDepth):null;return G?h$3("div",{class:"toc-place-holder"},[h$3("aside",{id:"toc"},[h$3("div",{class:"toc-header"},[$.value.toc,T.value.print===!1?null:h$3("button",{class:"print-button",title:"print",onClick:()=>{window.print()}},h$3(PrintIcon))]),h$3("div",{class:"toc-wrapper",ref:j},[G])])]):null}}}),page$1="",NormalPage=defineComponent({name:"NormalPage",setup(u,{slots:m}){const b=usePageFrontmatter(),{isDarkmode:$}=useDarkmode(),T=useThemeLocaleData(),j=computed(()=>b.value.toc||b.value.toc!==!1&&T.value.toc!==!1);return()=>h$3("main",{class:"page",id:"main-content"},h$3(_t("LocalEncrypt")?resolveComponent("LocalEncrypt"):Ct,()=>{var U,G,W,Z;return[(U=m.top)==null?void 0:U.call(m),h$3(BreadCrumb),h$3(PageTitle),j.value?h$3(TOC,{headerDepth:b.value.headerDepth??T.value.headerDepth??2}):null,(G=m.contentBefore)==null?void 0:G.call(m),h$3(MarkdownContent),(W=m.contentAfter)==null?void 0:W.call(m),h$3(PageMeta),h$3(PageNav),_t("CommentService")?h$3(resolveComponent("CommentService"),{darkmode:$.value}):null,(Z=m.bottom)==null?void 0:Z.call(m)]}))}}),fadeSlideY="",FadeSlideY=defineComponent({name:"FadeSlideY",setup(u,{slots:m}){const b=useScrollPromise(),$=b.resolve,T=b.pending;return()=>h$3(Transition,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:$,onBeforeLeave:T},()=>{var j;return(j=m.default)==null?void 0:j.call(m)})}}),skipLink="",SkipLink=defineComponent({name:"SkipLink",props:{content:{type:String,default:"main-content"}},setup(u){const m=useRoute(),b=useThemeLocaleData(),$=ref(),T=({target:j})=>{const U=document.querySelector(j.hash);if(U){const G=()=>{U.removeAttribute("tabindex"),U.removeEventListener("blur",G)};U.setAttribute("tabindex","-1"),U.addEventListener("blur",G),U.focus(),window.scrollTo(0,0)}};return onMounted(()=>{watch(()=>m.path,()=>$.value.focus())}),()=>[h$3("span",{ref:$,tabindex:"-1"}),h$3("a",{href:`#${u.content}`,class:"skip-link sr-only",onClick:T},b.value.routeLocales.skipToContent)]}}),Layout=defineComponent({name:"Layout",setup(){const u=useThemeData(),m=useThemeLocaleData(),b=usePageData(),$=usePageFrontmatter(),{isMobile:T}=useWindowSize(),j=computed(()=>{var U,G;return((U=m.value.blog)==null?void 0:U.sidebarDisplay)||((G=u.value.blog)==null?void 0:G.sidebarDisplay)||"mobile"});return()=>[h$3(SkipLink),h$3(CommonWrapper,{},{default:()=>$.value.home?h$3(HomePage):h$3(FadeSlideY,()=>h$3(NormalPage,{key:b.value.path})),...j.value!=="none"?{navScreenBottom:()=>h$3(resolveComponent("BloggerInfo"))}:{},...!T.value&&j.value==="always"?{sidebar:()=>h$3(resolveComponent("BloggerInfo"))}:{}})]}}),notFound="",NotFound=defineComponent({name:"NotFound",setup(){const u=useRouteLocale(),m=useThemeLocaleData(),b=()=>{const T=m.value.routeLocales.notFoundMsg;return T[Math.floor(Math.random()*T.length)]},{navigate:$}=useLink({to:m.value.home??u.value});return()=>[h$3(SkipLink),h$3(CommonWrapper,{noSidebar:!0},()=>h$3("main",{class:"page not-found",id:"main-content"},[h$3(NotFoundIcon),h$3("blockquote",b()),h$3("div",{class:"actions"},[h$3("button",{class:"action-button",onClick:()=>{window.history.go(-1)}},m.value.routeLocales.back),h$3("button",{class:"action-button",onClick:()=>$()},m.value.routeLocales.home)])]))]}}),index="",icons={Baidu:'<svg xmlns="http://www.w3.org/2000/svg" class="icon baidu-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#1D2FE3"/><path d="M239.022 704.978c.098-4.865-.314-9.772.162-14.591 5.178-52.464 197.571-253.377 249.641-259.233 42.996-4.833 75.768 16.545 99.824 49.144 37.893 51.351 82.81 95.455 131.292 136.237 52.903 44.503 56.525 99.801 32.6 158.592-23.425 57.56-75.34 69.833-127.771 58.804-84.971-17.874-168.158-13.744-253.37-4.536-86.35 9.333-133.788-39.4-132.378-124.417zM352.464 412.86c-3.58 50.707-17.93 96.128-75.9 98.12-58.053 1.995-80.093-41.432-79.275-91.71.81-49.705 13.416-104.053 76.851-102.136 53.84 1.625 74.74 45.8 78.324 95.726zm386.053 142.168c-68.494-1.735-84.188-43.331-82.635-93.812 1.46-47.519 10.082-97.628 73.299-96.65 61.395.95 81.6 43.207 81.553 98.668-.047 53.156-19.818 89.398-72.217 91.794zm-45.235-278.345c-10.464 42.665-24.513 91.761-85.919 94.502-52.74 2.354-71.705-34.482-72.805-81.242-1.233-52.42 48.08-112.965 87.582-110.373 33.943 2.226 71.146 49.541 71.142 97.113zm-195.147-14.097c-7.005 46.274-13.63 100.025-71.562 101.351-57.077 1.306-73.567-47.922-73.638-97.109-.068-48.054 12.128-99.024 69.345-101.426 59.45-2.493 67.11 51.093 75.855 97.184z" fill="#fff"/><path d="M479.52 663.165c.006 12.194 1.498 24.61-.284 36.537-4.707 31.503 18.862 78.749-45.326 77.534-54.226-1.027-103.338-3.31-113.231-73.536-7.164-50.852 7.78-85.674 57.687-102.668 17.67-6.016 39.618 5.058 54.096-14.548 10.84-14.679-2.901-54.592 33.418-41.47 24.075 8.7 11.477 38.922 13.278 59.652 1.68 19.366.359 38.99.363 58.5zm175.45 41.902c4.291 39.657 5.093 78.047-64.709 73.503-60.097-3.912-95.56-20.794-86.293-85.624 4.287-29.991-21.148-83.238 22.19-84.867 42.71-1.606 13.57 50.41 20.825 77.622 5.276 19.794-3.984 46.774 29.753 48.193 41.337 1.738 28.383-30.022 31.099-51.604 1.209-9.61-.85-19.65.528-29.215 2.516-17.474-8.928-44.716 19.554-47.191 36.044-3.133 24.155 28.376 26.678 47.523 1.896 14.387.375 29.225.375 51.66z" fill="#1D2FE3"/><path d="M435.669 685.038c-2.255 24.07 5.605 53.68-33.623 52.136-34.594-1.362-35.274-31.818-38.513-53.078-4.028-26.448 11.38-48.18 40.785-50.023 40.967-2.564 27.097 30.764 31.35 50.965z" fill="#fff"/></svg>',BiliBili:'<svg class="icon bilibili-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="512" fill="#1296db"/><path d="M745.363 177.725a46.875 46.875 0 0 1 0 66.3L702.5 286.85h43.875A140.625 140.625 0 0 1 887 427.512v281.25a140.625 140.625 0 0 1-140.625 140.626h-468.75A140.625 140.625 0 0 1 137 708.763v-281.25a140.625 140.625 0 0 1 140.625-140.625h43.725l-42.788-42.825a46.875 46.875 0 1 1 66.263-66.3l99.45 99.45c2.963 2.962 5.438 6.187 7.425 9.637h120.487c1.988-3.45 4.5-6.75 7.463-9.675l99.413-99.45a46.875 46.875 0 0 1 66.3 0zm1.012 203.25h-468.75a46.875 46.875 0 0 0-46.763 43.388l-.112 3.525v281.25c0 24.712 19.125 44.962 43.387 46.724l3.488.15h468.75a46.875 46.875 0 0 0 46.763-43.387l.112-3.487v-281.25c0-25.875-21-46.875-46.875-46.876zm-375 93.75c25.875 0 46.875 21 46.875 46.875v46.875a46.875 46.875 0 1 1-93.75 0V521.6c0-25.875 21-46.875 46.875-46.875zm281.25 0c25.875 0 46.875 21 46.875 46.875v46.875a46.875 46.875 0 1 1-93.75 0V521.6c0-25.875 21-46.875 46.875-46.875z" fill="#fff"/></svg>',Bitbucket:'<svg xmlns="http://www.w3.org/2000/svg" class="icon bitbucket-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#205081"/><path fill="#fff" d="M512 191.32v.01-.01c-152.76 0-277.805 41.114-277.805 92.166 0 13.443 33.353 206.247 46.577 282.708 5.932 34.285 94.508 84.563 231.126 84.563l.102-.407v.407c137.484 0 225.26-50.278 231.192-84.578 13.23-76.457 46.592-269.255 46.592-282.698.005-51.047-125.024-92.165-277.784-92.165zm0 397.493c-48.771 0-88.31-39.545-88.31-88.31 0-48.772 39.539-88.306 88.31-88.306s88.31 39.534 88.31 88.31c0 48.766-39.539 88.306-88.31 88.306zm-.05-276.842c-98.256-.153-177.885-17.232-177.855-38.14.036-20.912 79.72-37.731 177.976-37.568 98.256.153 177.884 17.22 177.849 38.139-.026 20.908-79.705 37.716-177.966 37.564z"/><path fill="#fff" d="M711.668 642.814c-4.227 0-7.608 2.994-7.608 2.994S635.65 699.987 512 699.987s-192.06-54.18-192.06-54.18-3.386-2.988-7.608-2.988c-5.04 0-9.827 3.391-9.827 10.871 0 .79.076 1.579.224 2.353 10.617 56.826 18.382 97.206 19.736 103.347 9.268 41.805 91.045 73.411 189.525 73.411h.01c98.49 0 180.267-31.606 189.535-73.411 1.364-6.136 9.114-46.49 19.736-103.317.143-.779.224-1.578.224-2.368 0-7.485-4.786-10.881-9.827-10.881zM467.659 500.477a44.255 44.255 0 1 0 88.51 0 44.255 44.255 0 1 0-88.51 0z"/></svg>',Dingding:'<svg xmlns="http://www.w3.org/2000/svg" class="icon dingding-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#1C9DF7"/><path fill="#fff" d="M760.551 442.095c0 5.178-5.178 12.945-7.767 20.713-23.302 49.192-82.85 144.988-82.85 144.988l-18.124 31.069h85.44L576.727 853.758l36.247-144.988h-67.316l23.302-95.796c-18.124 5.178-41.426 10.356-67.316 18.124 0 0-36.247 20.712-100.974-38.837 0 0-44.015-38.836-18.124-49.192 10.356-5.178 54.37-10.356 88.029-12.945 44.014-5.179 72.494-10.357 72.494-10.357s-139.81 2.59-173.468-2.589c-33.658-5.178-75.083-59.549-82.85-108.741 0 0-12.946-25.89 28.48-12.945 44.013 12.945 222.66 49.192 222.66 49.192s-235.606-72.494-251.14-90.618c-15.535-18.123-46.604-95.796-41.426-144.988 0 0 2.59-12.945 12.945-7.767 0 0 173.469 80.261 292.566 121.686 119.098 41.426 222.66 64.727 209.715 119.098z"/></svg>',Discord:'<svg xmlns="http://www.w3.org/2000/svg" class="icon discord-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#2DAAE1"/><path fill="#fff" d="m422.935 240.147 5.851 8.052c-113.039 34.253-165.649 84.585-165.649 84.585s13.645-8.052 37.024-18.123c66.28-30.215 118.865-38.267 142.244-40.286 3.91 0 7.819-1.994 9.76-1.994 38.966-6.058 81.816-6.058 126.658-2.02 58.462 8.053 122.749 24.157 187.061 62.423 0 0-48.7-48.338-155.862-82.566l7.767-10.071h1.968c13.308.233 91.757 4.246 173.416 68.481 0 0 89.634 169.144 89.634 376.555 1.942-2.02-50.668 92.637-189.003 96.65 0 0-23.405-28.194-40.933-52.35 81.84-24.157 113.013-76.534 113.013-76.534a313.796 313.796 0 0 1-72.106 38.267c-31.172 14.11-60.403 22.162-89.633 28.22-60.404 12.066-114.955 8.027-161.74 0a636.81 636.81 0 0 1-91.576-28.22c-13.644-6.033-29.23-12.065-44.817-22.137-1.941-2.02-3.883-2.02-5.85-4.039-1.943 0-1.943-2.02-1.943-2.02-11.702-6.032-17.528-10.07-17.528-10.07s29.23 52.376 109.104 76.532c-19.47 24.157-40.907 54.371-40.907 54.371-138.36-4.039-190.97-98.67-190.97-98.67 0-207.41 89.633-376.555 89.633-376.555 89.634-70.5 175.384-68.481 175.384-68.481zm213.961 233.017c-35.315 0-64.727 34.512-64.727 77.672s29.412 77.672 64.727 77.672 64.727-34.512 64.727-77.672-29.412-77.672-64.727-77.672zm-233.016 0c-35.315 0-64.727 34.512-64.727 77.672s29.412 77.672 64.727 77.672 64.726-34.512 64.726-77.672-29.411-77.672-64.726-77.672z"/></svg>',Dribbble:'<svg xmlns="http://www.w3.org/2000/svg" class="icon dribbble-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#DC4373"/><path fill="#C13366" d="M716.668 302.752c-13.332 5.154-28.61 3.676-35.726-1.068-86.196-48.27-179.286-62.06-265.482-37.926C292.074 300.212 241.674 437.028 242 564.746c22.622 42.136 52.558 105.234 61.854 153.104l298.24 298.246c210.532-37.376 376.584-203.408 413.986-413.928L716.668 302.752z"/><path fill="#F0F1F1" d="M511.994 219.308c-161.592 0-293.058 131.31-293.058 292.696s131.466 292.684 293.058 292.684c161.598 0 293.07-131.292 293.07-292.684 0-161.386-131.472-292.696-293.07-292.696zm192.842 138.148c33.43 41.432 53.744 93.756 54.682 150.772-11.122-2.282-58.23-11.068-114.526-11.068-18.164 0-37.282.91-56.448 3.278a822.854 822.854 0 0 0-4.938-11.812c-4.972-11.692-10.326-23.29-15.874-34.72 86.642-35.696 128.436-85.238 137.104-96.45zm-192.842-92.33c62.446 0 119.528 23.2 163.126 61.412-6.902 9.416-44.332 56.202-127.876 87.768-38.67-70.688-80.996-129.22-91.07-142.812a247.13 247.13 0 0 1 55.82-6.368zm-106.352 23.99c8.536 11.758 50.928 70.918 90.592 141.036-106.448 27.982-200.976 29.806-223.79 29.806h-2.424c16.39-75.534 67.424-138.298 135.622-170.842zM264.402 512.39c0-2.038.034-4.076.1-6.102 1.48.018 3.666.018 6.5.018 30.726 0 137.382-2.538 247.288-35.154a828.402 828.402 0 0 1 18.928 39.526 232.24 232.24 0 0 0-8.234 2.482C405.236 553.126 337.216 658.936 326.75 676.232c-38.778-43.696-62.348-101.058-62.348-163.842zm247.592 247.246c-56.786 0-109.192-19.232-151.01-51.48 7.074-13.868 58.412-106.3 194.026-153.5a1.806 1.806 0 0 1 .272-.09c34.006 88.53 48.408 162.834 52.358 185.862-29.432 12.374-61.752 19.208-95.646 19.208zm140.236-43.584c-3.32-19.052-16.66-88.688-47.452-173.618 17.27-2.686 34.072-3.748 49.828-3.748 51.748 0 92.23 11.33 101.634 14.204-11.182 67.444-49.794 125.808-104.01 163.162z"/><path fill="#D1D1D1" d="M511.994 219.308c-.382 0-.758.028-1.142.028v45.804c.38 0 .758-.018 1.142-.018 62.446 0 119.528 23.2 163.126 61.412-6.902 9.416-44.332 56.202-127.876 87.768-12.14-22.194-24.642-43.188-36.392-61.968V473.29c2.476-.706 4.954-1.41 7.434-2.144a828.402 828.402 0 0 1 18.928 39.526c-2.776.796-5.514 1.592-8.234 2.478a323.314 323.314 0 0 0-18.128 6.52v53.228a418.976 418.976 0 0 1 44.428-18.332c34.006 88.53 48.408 162.834 52.358 185.862-29.428 12.374-61.746 19.208-95.646 19.208-.382 0-.758-.024-1.142-.024v45.05c.382 0 .758.028 1.142.028 161.598 0 293.07-131.292 293.07-292.684.002-161.388-131.47-292.698-293.068-292.698zm71.614 269.316c-4.972-11.692-10.326-23.29-15.874-34.72 86.64-35.696 128.434-85.236 137.102-96.45 33.43 41.432 53.748 93.756 54.682 150.77-11.122-2.282-58.23-11.068-114.522-11.068-18.164 0-37.282.914-56.448 3.278-1.624-3.932-3.24-7.852-4.94-11.81zm68.622 227.428c-3.32-19.052-16.66-88.688-47.452-173.618 17.27-2.686 34.072-3.748 49.828-3.748 51.748 0 92.23 11.33 101.634 14.204-11.182 67.444-49.794 125.808-104.01 163.162z"/></svg>',Email:'<svg xmlns="http://www.w3.org/2000/svg" class="icon email-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#1384FF"/><path fill="#fff" d="M299.372 313.572H722.93c28.945 0 52.61 21.845 52.975 48.787L511.333 500.35 246.76 362.481c.182-27.003 23.666-48.97 52.611-48.97zm-52.671 101.702-.243 244.121c0 27.186 23.848 49.395 52.914 49.395H722.93c29.127 0 52.975-22.21 52.975-49.395V415.152L517.522 546.71a13.957 13.957 0 0 1-12.682 0L246.7 415.274z"/></svg>',Evernote:'<svg xmlns="http://www.w3.org/2000/svg" class="icon evernote-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#36D613"/><path fill="#595757" d="M347.671 193.259v87.51h-87.51z"/><path fill="#595757" d="M788.047 323.645s3.65-77.491-73.84-103.02c0 0-89.479-12.867-151.41-11.91 0 0-8.595-53.23-103.33-53.23 0 0-89.556-1.244-89.892 70.526v61.671s2.848 14.991-27.833 14.991h-81.581s-34.28 5.282-34.28 72.934c0 0 3.133 120.082 41.322 200.24 0 0 9.398 34.667 58.228 46.577 0 0 95.822 25.477 123.991 21.722 0 0 58.228 22.137 62.008-111.874 0 0 3.755-19.935 6.266 11.392 0 0-1.89 68.948 57.607 72.702 0 0 45.723 12.557 73.892 10.045 0 0 37.568 2.15 37.568 64.158 0 0 13.152 71.665-34.435 71.665h-65.763s-18.149 4.428-18.149-21.877c0 0-4.997-21.878 26.305-21.878h15.534v-43.756h-43.082s-66.332-6.317-66.332 50.047v75.135s9.347 49.866 66.332 49.866h121.273s48.441.44 76.61-90.359c0-.078 48.52-182.323 22.991-435.767zM625.272 486.523c0-21.877 18.02-51.16 39.432-51.16s36.48 36.118 36.48 58.022c-28.79-7.897-45.827-9.606-75.912-6.862z"/></svg>',Facebook:'<svg xmlns="http://www.w3.org/2000/svg" class="icon facebook-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#3C599B"/><path fill="#fff" d="M372.568 413.895h59.898V355.68c0-25.67.647-65.257 19.294-89.774 19.642-25.965 46.605-43.613 92.983-43.613 75.565 0 107.384 10.778 107.384 10.778l-14.971 88.74s-24.967-7.217-48.254-7.217c-23.302 0-44.16 8.35-44.16 31.635v67.666h95.526l-6.67 86.678h-88.855V801.69H432.466V500.574h-59.898v-86.68z"/></svg>',Flipboard:'<svg xmlns="http://www.w3.org/2000/svg" class="icon flipboard-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#E12828"/><path fill="#fff" d="M293.58 292.18h160.343v481.003H293.58V292.18z"/><path fill="#FCE9E9" d="M453.922 292.18h320.662v160.343H453.922V292.18z"/><path fill="#F6BEBE" d="M453.922 452.523h160.343v160.343H453.922V452.523z"/></svg>',Gitee:'<svg xmlns="http://www.w3.org/2000/svg" class="icon gitee-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#C71D23"/><path fill="#fff" d="M772.953 454.723H480.17v.006a25.46 25.46 0 0 0-25.46 25.453l-.025 63.649a25.46 25.46 0 0 0 25.46 25.466l178.242-.007a25.46 25.46 0 0 1 25.459 25.46v12.73c0 42.18-34.198 76.378-76.378 76.378H365.583a25.46 25.46 0 0 1-25.46-25.46V416.533h-.006c0-42.18 34.192-76.378 76.378-76.378h356.388v-.013a25.46 25.46 0 0 0 25.46-25.446l.057-63.65h.013a25.46 25.46 0 0 0-25.46-25.471l-356.432.012c-105.453 0-190.946 85.493-190.946 190.946v356.433a25.46 25.46 0 0 0 25.46 25.46H626.56c94.913 0 171.852-76.94 171.852-171.852V480.182a25.46 25.46 0 0 0-25.46-25.46z"/></svg>',GitHub:'<svg xmlns="http://www.w3.org/2000/svg" class="icon github-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#171515"/><path fill="#fff" d="M509.423 146.442c-200.317 0-362.756 162.42-362.756 362.8 0 160.266 103.936 296.24 248.109 344.217 18.139 3.327 24.76-7.872 24.76-17.486 0-8.613-.313-31.427-.49-61.702-100.912 21.923-122.205-48.63-122.205-48.63-16.495-41.91-40.28-53.067-40.28-53.067-32.937-22.51 2.492-22.053 2.492-22.053 36.407 2.566 55.568 37.386 55.568 37.386 32.362 55.438 84.907 39.43 105.58 30.143 3.296-23.444 12.667-39.43 23.032-48.498-80.557-9.156-165.246-40.28-165.246-179.297 0-39.604 14.135-71.988 37.342-97.348-3.731-9.178-16.18-46.063 3.556-96.009 0 0 30.46-9.754 99.76 37.19 28.937-8.048 59.97-12.071 90.823-12.211 30.807.14 61.843 4.165 90.822 12.21 69.26-46.944 99.663-37.189 99.663-37.189 19.792 49.946 7.34 86.831 3.61 96.01 23.25 25.359 37.29 57.742 37.29 97.347 0 139.366-84.82 170.033-165.637 179.013 13.026 11.2 24.628 33.342 24.628 67.182 0 48.498-.445 87.627-.445 99.521 0 9.702 6.535 20.988 24.945 17.444 144.03-48.067 247.881-183.95 247.881-344.175 0-200.378-162.442-362.798-362.802-362.798z"/></svg>',Gitlab:'<svg xmlns="http://www.w3.org/2000/svg" class="icon gitlab-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#E8F0FF"/><path fill="#E24329" d="m512 848.182 134.473-413.8H377.527L512 848.182z"/><path fill="#FC6D26" d="m512 848.182-134.473-413.8h-188.36L512 848.182z"/><path fill="#E24329" d="M189.167 434.382h188.36l-80.832-249.17c-4.202-12.854-22.247-12.854-26.45 0l-81.078 249.17z"/><path fill="#FC6D26" d="m512 848.182 134.473-413.8h188.36L512 848.182z"/><path fill="#FCA326" d="m834.833 434.382 40.787 125.82a27.8 27.8 0 0 1-10.135 31.147L512 848.182l322.833-413.8z"/><path fill="#E24329" d="M834.833 434.382h-188.36l81.079-249.17c4.202-12.854 22.247-12.854 26.45 0l80.831 249.17z"/></svg>',Gmail:'<svg xmlns="http://www.w3.org/2000/svg" class="icon gmail-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#DB4437"/><path fill="#E67C73" d="M277.48 285.567h465.767v441.362H277.48V285.567z"/><path fill="#FFF" d="M282.543 285.567h-10.645c-25.962 0-47.122 21.808-47.122 48.705v343.952c0 26.897 21.08 48.705 47.122 48.705h24.976V407.954l213.49 169.95 213.489-169.95V726.93h24.975c26.04 0 47.123-21.809 47.123-48.705V334.272c0-26.897-21.134-48.705-47.123-48.705h-10.644L510.364 480.44 282.542 285.567z"/></svg>',Instagram:'<svg xmlns="http://www.w3.org/2000/svg" class="icon instagram-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#181818"/><path fill="#fff" d="M512 348.16c-88.222 0-163.84 71.417-163.84 163.84 0 88.222 71.417 163.84 163.84 163.84 88.222 0 163.84-71.417 163.84-163.84 0-88.222-75.618-163.84-163.84-163.84zm0 268.866c-58.814 0-105.026-46.212-105.026-105.026S453.186 406.974 512 406.974 617.026 453.186 617.026 512 570.814 617.026 512 617.026zM680.041 306.15c-21.005 0-37.81 16.804-37.81 37.809s16.805 37.81 37.81 37.81 37.81-16.805 37.81-37.81-16.805-37.81-37.81-37.81z"/><path fill="#FFF" d="M659.036 196.923h-16.804c-50.413-4.2-210.051-4.2-260.464 0-96.623-4.2-180.644 71.418-184.845 168.041v16.804c-4.2 50.413-4.2 210.051 0 260.464-4.2 96.623 71.418 180.644 168.041 184.845h16.804c50.413 4.2 210.051 4.2 260.464 0 96.623 4.2 180.644-71.418 184.845-168.041V381.768c4.2-96.623-71.418-180.644-168.041-184.845zM759.86 696.845c-12.604 29.407-33.609 50.412-58.815 58.814-121.83 16.805-247.86 16.805-373.891 0-29.407-12.603-50.412-33.608-58.814-58.814-12.604-63.015-16.805-126.03-12.604-184.845-4.2-63.015 0-126.03 12.604-184.845 12.603-29.407 33.608-50.412 58.814-58.814 121.83-16.805 247.86-16.805 373.891 0 29.407 12.603 50.412 33.608 58.815 58.814 12.603 63.015 16.804 126.03 12.603 184.845 4.2 63.015 0 126.03-12.603 184.845z"/></svg>',Lark:'<svg class="icon lark-icon" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg"><path d="M0 350C0 156.7 156.7 0 350 0s350 156.7 350 350-156.7 350-350 350S0 543.3 0 350Z" fill="#fdfdfd"/><path d="M94.683 255.472c-1.188.99-3.547 1.424-3.565 2.971-.892 77.877-1.647 155.803.853 233.645.135 4.185 3.811 7.709 6.987 10.437 8.041 6.906 16.845 13.026 26.179 18.048 15.915 8.564 32.118 16.959 49.299 22.567 22.582 7.37 45.902 12.712 69.402 16.176 16.45 2.425 33.243 1.892 49.863 1.404 85.699-2.518 170.495-42.242 226.974-107.047 13.128-15.062 24.349-31.701 35.801-48.072.482-.689-.29-1.655-.435-2.483-11.645 12.501-23.322 25.66-38.015 34.376-38.027 22.561-80.103 18.178-120.414 4.963-24.658-8.083-49.594-15.711-73.208-26.468-32.043-14.597-63.264-31.14-93.363-49.411-50.119-30.424-92.859-71.794-136.358-111.106Z" fill="#326ffd"/><path d="M373.34 355.289c22.389-21.264 43.857-43.542 67.167-63.793 15.84-13.761 40.614-23.584 58.792-32.162-13.932-44.24-30.142-84.389-60.513-120.46-3.54-4.204-7.91-9.366-13.399-9.603-81.245-3.519-162.641-2.296-243.958-1.541-1.72.016-3.262 2.127-3.451 3.836-.209 1.893 1.026 3.902 2.457 5.159 21.134 18.566 43.735 35.416 64.865 53.985 52.859 46.45 91.839 105.023 128.04 164.579Z" fill="#00d5b8"/><path d="M302.636 406.089c63.531 28.909 161.471 77.441 225.923 24.345 10.473-8.628 22.415-16.393 29.694-27.844 19.077-30.011 31.761-63.645 48.432-95.056 8.019-15.112 17.249-23.738 28.765-36.905-17.982-10.513-43.141-16.899-63.455-18.431-44.467-3.354-94.982 6.952-129.899 36.91-29.717 25.495-55.957 54.804-84.849 81.23-16.051 14.681-36.135 24.874-54.611 35.751Z" fill="#133c99"/></svg>',Lines:'<svg xmlns="http://www.w3.org/2000/svg" class="icon lines-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#00C300"/><path fill="#fff" d="M861.44 469.76C861.44 313.28 704 186.08 512 186.08s-349.44 127.2-349.44 283.68C162.56 608 286.88 727.52 454.88 752c11.52 2.4 26.88 7.68 30.72 17.28a71.04 71.04 0 0 1 0 31.68l-5.28 29.76c0 8.64-7.2 34.56 30.24 18.72a1104 1104 0 0 0 274.56-202.56A251.52 251.52 0 0 0 860 472.16zM375.2 562.88h-69.12a17.76 17.76 0 0 1-18.24-18.24v-139.2a17.76 17.76 0 0 1 18.24-18.24 18.24 18.24 0 0 1 18.24 18.24v120.48h50.88a18.72 18.72 0 0 1 18.24 18.72 18.24 18.24 0 0 1-18.24 18.24zm72-18.24a18.24 18.24 0 1 1-36.48 0v-139.2a18.24 18.24 0 0 1 36.48 0zm167.04 0a18.24 18.24 0 0 1-12.48 17.28H596a18.24 18.24 0 0 1-14.4-7.2l-69.6-96v85.92a18.24 18.24 0 1 1-36.48 0v-139.2A18.24 18.24 0 0 1 488 388.16h5.76a18.24 18.24 0 0 1 14.4 7.2l71.52 96v-85.92a18.24 18.24 0 1 1 36.48 0zm112.32-87.84a18.24 18.24 0 0 1 18.24 18.24 17.76 17.76 0 0 1-18.24 18.24h-50.88v32.64h50.88a18.72 18.72 0 0 1 18.24 18.72 18.24 18.24 0 0 1-18.24 18.24H656a18.24 18.24 0 0 1-18.24-18.24v-139.2A18.24 18.24 0 0 1 656 387.2h69.12a18.24 18.24 0 0 1 18.24 18.24 18.24 18.24 0 0 1-18.24 18.72h-49.44v32.64zm0 0"/></svg>',Linkedin:'<svg xmlns="http://www.w3.org/2000/svg" class="icon linkedin-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#4376B1"/><path fill="#F1F2F2" d="M838.301 555.94v225.157h-130.54V571.03c0-52.746-18.847-88.766-66.112-88.766-36.069 0-57.496 24.25-66.959 47.732-3.436 8.391-4.322 20.045-4.322 31.814v219.277h-130.55s1.752-355.784 0-392.613h130.56v55.637c-.263.438-.633.867-.867 1.285h.866v-1.285c17.349-26.694 48.287-64.856 117.651-64.856 85.884 0 150.273 56.114 150.273 176.685zm-535.05-356.72c-44.655 0-73.87 29.314-73.87 67.826 0 37.695 28.368 67.855 72.157 67.855h.847c45.532 0 73.842-30.16 73.842-67.855-.866-38.512-28.31-67.825-72.975-67.825zM237.14 781.098h130.5V388.474h-130.5v392.623z"/></svg>',Pinterest:'<svg xmlns="http://www.w3.org/2000/svg" class="icon pinterest-icon" viewBox="0 0 1024 1024"><path fill="#fff" d="M512 1023.147c282.773 0 512-228.288 512-509.888 0-281.622-229.227-509.91-512-509.91S0 231.637 0 513.26c0 281.6 229.227 509.888 512 509.888z"/><path fill="#CA242D" d="M512 3.35C229.248 3.35 0 231.658 0 513.258c0 216.128 134.848 400.789 325.312 475.05-4.63-40.277-8.427-102.378 1.685-146.453 9.28-39.872 59.84-253.483 59.84-253.483s-15.168-30.634-15.168-75.541c0-70.933 41.302-123.797 92.715-123.797 43.819 0 64.896 32.725 64.896 71.765 0 43.627-27.819 109.099-42.56 169.963-12.224 50.773 25.707 92.33 75.84 92.33 91.03 0 160.981-95.68 160.981-233.344 0-122.133-88.064-207.317-214.058-207.317-145.814 0-231.36 108.693-231.36 221.163 0 43.648 16.853 90.645 37.93 116.245a15.19 15.19 0 0 1 3.371 14.699c-3.797 15.936-12.65 50.773-14.336 57.92-2.09 9.216-7.573 11.328-17.28 6.698-64.043-29.781-104.085-122.538-104.085-197.653 0-160.747 117.162-308.459 338.389-308.459 177.408 0 315.627 125.888 315.627 294.614 0 175.829-111.254 317.269-265.472 317.269-51.84 0-100.715-26.859-117.163-58.752l-32.021 121.28c-11.371 44.48-42.56 99.883-63.638 133.867A516.01 516.01 0 0 0 511.168 1024c282.752 0 512-228.31 512-509.91C1024 231.66 794.752 3.35 512 3.35z"/></svg>',Pocket:'<svg xmlns="http://www.w3.org/2000/svg" class="icon pocket-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#EE4056"/><path fill="#fff" d="M716.52 309.066c12.549 0 23.172 4.394 31.87 13.182 8.697 8.788 13.023 19.48 13.023 32.006v150.4c0 33.975-6.568 66.41-19.705 97.307-13.138 30.918-30.76 57.487-52.89 79.685-22.106 22.197-48.562 39.864-79.367 52.888-30.804 13.024-63.081 19.547-96.876 19.547a246.897 246.897 0 0 1-97.215-19.547c-30.805-13.046-57.306-30.668-79.504-52.888-22.198-22.198-39.865-48.767-53.003-79.663a246.311 246.311 0 0 1-19.728-97.33V354.255c0-12.321 4.44-22.945 13.319-31.847a43.489 43.489 0 0 1 31.87-13.341H716.52zM512.574 617.339c9.06 0 16.989-3.216 23.738-9.581l117.103-112.415a32.622 32.622 0 0 0 10.691-24.62c0-9.469-3.33-17.533-9.966-24.191a32.958 32.958 0 0 0-24.237-10.012c-9.06 0-16.988 3.171-23.737 9.56l-93.547 89.808-93.614-89.809a33.185 33.185 0 0 0-23.443-9.559c-9.468 0-17.532 3.33-24.19 9.967-6.66 6.682-9.967 14.722-9.967 24.236 0 9.83 3.443 18.03 10.419 24.599l117.33 112.413c6.342 6.342 14.179 9.56 23.466 9.56l-.046.044z"/></svg>',QQ:'<svg xmlns="http://www.w3.org/2000/svg" class="icon qq-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#5EAADE"/><path fill="#fff" d="M729.46 627.3c-3.157-39.628-24.045-83.747-32.624-105.91l-22.084-57.047c-.702-23.73 6.312-78.322-30.511-146.61s-110.82-74.446-124.497-75.147c-13.677-.701-99.248-1.403-141.331 72.945-42.084 74.347-30.745 148.812-30.745 148.812l-23.523 57.478c-.001.002-10.962 26.223-20.43 58.135-9.469 31.914-18.938 82.064-9.469 92.234 9.47 10.17 43.837-46.643 46.993-51.903 0 0 2.456 27.18 8.943 41.383l.81 1.776.33.723.38.826.3.652.444.96.203.436a281.465 281.465 0 0 0 1.917 4.025l.189.386c.231.473.468.953.711 1.442l.146.292c6.886 13.807 18.61 33.823 37.443 50.42l.018.016-1.184.387c-10.667 3.516-31.694 11.21-40.625 19.82-1.717 1.655-2.987 3.344-3.65 5.045-5.376 13.794 4.208 15.43 20.575 16.366 16.366.934 94.923 3.04 132.564-2.221.407-.056.787-.114 1.17-.171 2.711.094 5.324.142 7.83.16l.151.002c.836.005 1.663.008 2.475.008.496 0 1.015-.002 1.542-.006l.21-.001a222.593 222.593 0 0 0 5.462-.107c.26.038.508.076.778.114 37.642 5.26 116.198 3.156 132.564 2.22 16.366-.934 25.951-2.571 20.574-16.365-4.302-11.037-34.175-21.62-45.956-25.413a141.388 141.388 0 0 0 7.958-7.645l.237-.245a142.494 142.494 0 0 0 2.53-2.702c42.435-46.643 38.928-76.101 40.682-92.935 0 0 35.775 51.553 43.488 53.306 7.713 1.754 10.169-6.31 7.012-45.94z"/></svg>',Qzone:'<svg xmlns="http://www.w3.org/2000/svg" class="icon qzone-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#0985DD"/><path fill="#fff" d="M722.38 595.24c22.486-4.056 11.345-12.424 2.156-11.346-16.685 1.72-40.43 1.925-66.562 1.284l3.029 17.79a656.641 656.641 0 0 0 61.402-7.702l-.025-.026zm68.95-174.915a5.287 5.287 0 0 0-4.493-3.645L598.42 389.29l-84.326-170.628c-1.925-3.594-7.958-3.594-9.857 0L419.885 389.29l-188.417 27.39a5.338 5.338 0 0 0-4.466 3.645 5.493 5.493 0 0 0 1.488 5.57l136.36 132.92-32.088 187.519a5.263 5.263 0 0 0 2.13 5.39c1.695 1.284 3.851 1.463 5.776.385l168.651-88.407 168.524 88.638 2.567.642 3.209-1.079c1.72-1.283 2.566-3.208 2.13-5.34l-24.591-143.648c-27.21 2.156-54.37 3.183-76.42 3.183-77.267 0-135.075-3.645-135.948-3.645a16.48 16.48 0 0 1-14.785-11.757 16.247 16.247 0 0 1 5.981-17.764l155.431-113.05c-99.959-7.906-183.873-6.418-184.721-6.418-13.502.642-25.67-3.645.642-14.375 4.518-1.694 109.2-23.72 230.362-7.445 6.673.847 12.013 5.75 13.733 12.194a16.61 16.61 0 0 1-6.263 17.302L497.204 571.598c27.826 5.802 100.37 12.014 160.745 13.502l-4.519-26.312 136.308-132.97a5.338 5.338 0 0 0 1.54-5.544l.051.051z"/></svg>',Reddit:'<svg xmlns="http://www.w3.org/2000/svg" class="icon reddit-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#EB5528"/><path fill="#fff" d="M617.199 680.55c5.666 5.974 5.666 11.742 0 17.34-21.845 23.143-56.9 34.714-105.199 34.714s-83.354-11.571-105.199-34.714c-5.666-5.598-5.666-11.366 0-17.34a10.445 10.445 0 0 1 7.919-3.379c3.174 0 5.803 1.127 7.919 3.38 16.93 18.295 46.728 27.408 89.361 27.408 42.325 0 72.09-9.113 89.361-27.409a10.445 10.445 0 0 1 7.919-3.379c3.174 0 5.803 1.127 7.919 3.38zm-176.06-136.635c9.182 9.694 13.756 21.47 13.756 35.294 0 13.79-4.574 25.565-13.756 35.26a44.134 44.134 0 0 1-33.28 14.54c-13.073 0-24.234-4.847-33.587-14.54a49.015 49.015 0 0 1-13.995-35.26c0-14.2 4.642-26.147 13.995-35.84 9.353-9.728 20.514-14.575 33.587-14.575 13.04 0 24.132 5.051 33.28 15.12zm222.584 35.294c0 13.79-4.642 25.565-13.995 35.26a44.954 44.954 0 0 1-33.587 14.54c-13.04 0-24.132-4.847-33.28-14.54a49.493 49.493 0 0 1-13.756-35.26c0-13.824 4.574-25.669 13.756-35.567 9.148-9.9 20.24-14.848 33.28-14.848 13.073 0 24.234 4.847 33.587 14.575 9.353 9.693 13.995 21.64 13.995 35.84zM796.433 512c0-18.295-6.144-33.963-18.5-47.036a59.494 59.494 0 0 0-44.92-19.592c-17.647 0-32.768 6.724-45.465 20.138-45.841-33.587-100.66-51.507-164.455-53.725l33.314-158.482 105.746 25.19c0 13.825 4.573 25.6 13.755 35.295 9.148 9.694 20.241 14.54 33.314 14.54 13.04 0 24.235-4.915 33.553-14.813 9.353-9.899 13.995-21.743 13.995-35.567s-4.642-25.669-13.995-35.567a44.578 44.578 0 0 0-33.553-14.814c-19.046 0-33.143 9.318-42.325 27.99L550.06 228.112c-6.69-1.877-11.094 1.126-13.21 8.977l-36.488 174.695c-63.454 2.594-117.897 20.718-163.363 54.272a59.187 59.187 0 0 0-46.011-20.685c-17.613 0-32.598 6.52-44.92 19.592a66.082 66.082 0 0 0-18.5 47.036c0 13.073 3.243 25.02 9.762 35.84 6.52 10.82 15.258 19.046 26.18 24.644a152.303 152.303 0 0 0-3.174 31.335c0 53.009 24.678 98.372 74.035 136.09 49.323 37.682 108.715 56.524 178.176 56.524 69.769 0 129.365-18.842 178.688-56.525 49.357-37.717 74.001-83.08 74.001-136.09 0-11.946-1.229-22.561-3.686-31.914 10.581-5.598 19.046-13.722 25.395-24.337 6.315-10.65 9.49-22.528 9.49-35.567z"/></svg>',Rss:'<svg xmlns="http://www.w3.org/2000/svg" class="icon rss-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#FD9B00"/><path fill="#fff" d="M687.981 740.39c0-225.92-183.617-409.777-409.21-409.777v-97.205c279.353 0 506.617 227.506 506.617 506.98H687.98zm-74.841 0h-97.538c0-63.567-24.688-123.245-69.43-167.993-44.762-44.856-104.24-69.556-167.54-69.556v-97.176c184.44 0 334.508 150.046 334.508 334.725zM346.038 605.166c37.35 0 67.514 30.357 67.514 67.39 0 37.146-30.163 67.177-67.514 67.177-37.219 0-67.458-30.03-67.458-67.176 0-37.034 30.24-67.391 67.458-67.391z"/></svg>',Steam:'<svg xmlns="http://www.w3.org/2000/svg" class="icon steam-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="488" fill="#fff"/><path fill="#13227a" d="M1008 512c0 274-222.4 496-496.8 496-227.6 0-419.2-152.6-478-360.8l190.4 78.6c12.8 64.2 69.8 112.8 137.8 112.8 78.4 0 143.8-64.8 140.4-147l169-120.4c104.2 2.6 191.6-81.8 191.6-187 0-103.2-84-187-187.4-187s-187.4 84-187.4 187v2.4L369.2 558c-31-1.8-61.4 6.8-87 24.2L16 472.2C36.4 216.8 250.2 16 511.2 16 785.6 16 1008 238 1008 512zM327.4 768.6l-61-25.2a105.58 105.58 0 0 0 54.4 51.6c53.8 22.4 115.6-3.2 138-56.8 10.8-26 11-54.6.2-80.6-10.8-26-31-46.4-57-57.2-25.8-10.8-53.4-10.4-77.8-1.2l63 26c39.6 16.4 58.4 61.8 41.8 101.4-16.6 39.8-62 58.4-101.6 42zM675 508.8c-68.8 0-124.8-56-124.8-124.6s56-124.6 124.8-124.6 124.8 56 124.8 124.6S744 508.8 675 508.8zm.2-31.2c51.8 0 93.8-42 93.8-93.6 0-51.8-42-93.6-93.8-93.6s-93.8 42-93.8 93.6c.2 51.6 42.2 93.6 93.8 93.6z"/></svg>',Twitter:'<svg xmlns="http://www.w3.org/2000/svg" class="icon twitter-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#5EAADE"/><path fill="#fff" d="M749.737 364.631c-17.594 7.805-36.513 13.088-56.371 15.459 20.269-12.148 35.836-31.387 43.156-54.312A196.233 196.233 0 0 1 674.2 349.6c-17.894-19.083-43.406-30.997-71.636-30.997-54.2 0-98.137 43.944-98.137 98.157 0 7.695.861 15.19 2.544 22.373-81.57-4.092-153.876-43.174-202.284-102.558-8.443 14.498-13.285 31.356-13.285 49.348 0 34.05 17.326 64.096 43.656 81.697a97.69 97.69 0 0 1-44.447-12.277c-.01.41-.01.82-.01 1.24 0 47.558 33.822 87.23 78.72 96.249a98.285 98.285 0 0 1-25.852 3.448 97.491 97.491 0 0 1-18.465-1.768c12.483 39.002 48.725 67.38 91.672 68.17-33.582 26.334-75.897 42.024-121.884 42.024-7.924 0-15.736-.46-23.408-1.37 43.434 27.844 95.014 44.104 150.443 44.104 180.505 0 279.221-149.576 279.221-279.294 0-4.263-.09-8.494-.278-12.708 19.178-13.835 35.813-31.115 48.967-50.807z"/></svg>',Wechat:'<svg xmlns="http://www.w3.org/2000/svg" class="icon wechat-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#1AC88E"/><path fill="#fff" d="M827.551 578.742a176.583 176.583 0 0 0-185.685-158.379 172.942 172.942 0 0 0-186.3 158.379 172.942 172.942 0 0 0 185.686 158.379 282.169 282.169 0 0 0 65.536-10.923l60.689 32.768-16.384-54.613a166.275 166.275 0 0 0 76.458-125.611zm-245.76-27.307a21.845 21.845 0 1 1 0-43.69 24.872 24.872 0 0 1 27.307 21.845 24.872 24.872 0 0 1-27.921 21.845h.614zm121.356 0a21.845 21.845 0 1 1 0-43.69 24.872 24.872 0 0 1 27.306 21.845 24.872 24.872 0 0 1-28.512 21.845h1.206z"/><path fill="#fff" d="M623.662 400.953h21.23A222.709 222.709 0 0 0 419.772 245.6a208.145 208.145 0 0 0-223.323 189.94 182.044 182.044 0 0 0 89.201 150.483l-22.436 67.356 78.279-39.435a389.575 389.575 0 0 0 78.279 10.923h20.616a163.226 163.226 0 0 1-6.667-46.718 182.044 182.044 0 0 1 189.94-177.197zm-121.379-60.69a27.921 27.921 0 1 1 0 55.843 31.562 31.562 0 0 1-33.36-27.921 31.562 31.562 0 0 1 34.59-27.921h-1.23zM346.34 396.107a31.562 31.562 0 0 1-33.383-27.921 31.562 31.562 0 0 1 33.383-27.921 27.921 27.921 0 1 1 0 55.842z"/></svg>',Weibo:'<svg xmlns="http://www.w3.org/2000/svg" class="icon weibo-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#E6162D"/><path fill="#fff" d="M745.314 454.802c9.652 0 17.869-7.258 19.239-16.728a8.39 8.39 0 0 0 .261-2.12C779.445 302.233 657.02 325.25 657.02 325.25c-10.869 0-19.567 8.94-19.567 20.089 0 10.97 8.698 19.907 19.567 19.907 87.95-19.732 68.54 69.649 68.54 69.649-.004 11.06 8.842 19.908 19.754 19.908z"/><path fill="#fff" d="M731.054 221.409c-42.342-10.077-85.862-1.393-98.055.981-.938.09-1.829.994-2.697 1.17-.415.088-.673.532-.673.532-12.045 3.457-20.828 14.77-20.828 28.14 0 15.932 12.694 29.034 28.564 29.034 0 0 15.39-2.097 25.846-6.252 10.364-4.246 98.012-3.16 141.576 71.17 23.734 54.247 10.428 90.553 8.778 96.387 0 0-5.653 14.095-5.653 27.973 0 16.024 12.694 26.083 28.433 26.083 13.169 0 24.211-1.821 27.452-24.447h.172c46.768-158.386-57.183-232.81-132.915-250.771zm-44.083 282.78c-28.28-5.579-14.519-21.062-14.519-21.062s27.67-46.38-5.482-80.099c-41.104-41.761-140.966 5.314-140.966 5.314-38.144 12.032-28.02-5.49-22.629-35.31 0-35.13-11.844-94.596-113.445-59.47-101.49 35.309-188.654 159.03-188.654 159.03-60.603 82.207-52.56 145.747-52.56 145.747 15.128 140.268 161.749 178.772 275.782 187.89 119.967 9.564 281.905-42.045 330.988-148.064 49.105-106.193-40.126-148.22-68.515-153.975zM433.387 766.675c-119.124 5.658-215.394-55.053-215.394-135.851 0-80.887 96.27-145.748 215.394-151.328 119.162-5.58 215.634 44.333 215.634 125.052.002 80.79-96.475 156.626-215.634 162.127z"/><path fill="#fff" d="M409.603 532.773c-119.77 14.249-105.943 128.31-105.943 128.31s-1.22 36.117 32.126 54.513c70.084 38.593 142.248 15.224 178.723-32.634 36.474-47.888 15.086-164.346-104.906-150.189zM379.39 692.856c-22.343 2.665-40.385-10.437-40.385-29.463 0-18.94 16.02-38.768 38.387-41.143 25.694-2.485 42.431 12.56 42.431 31.588-.003 18.936-18.128 36.449-40.433 39.018zm70.626-61.146c-7.59 5.754-16.893 4.958-20.892-1.948-4.175-6.726-2.607-17.52 5.046-23.19 8.863-6.714 18.105-4.779 22.106 1.958 4.02 6.893 1.153 17.246-6.26 23.18z"/></svg>',Whatsapp:'<svg xmlns="http://www.w3.org/2000/svg" class="icon whatsapp-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#31B84C"/><path fill="#fff" d="m192.021 832 45.227-164.33a315.413 315.413 0 0 1-42.539-158.529C194.731 334.251 337.707 192 513.344 192c84.587-.213 165.76 33.28 225.387 93.013A314.453 314.453 0 0 1 832 509.376c-.085 174.848-143.04 317.141-318.656 317.141h-.15a319.61 319.61 0 0 1-152.277-38.613L192 832h.021zm241.686-455.467c-6.443-15.445-13.014-13.354-17.92-13.61-4.63-.214-9.942-.256-15.254-.256a29.227 29.227 0 0 0-21.226 9.898c-7.296 7.958-27.84 27.136-27.84 66.134s28.501 76.672 32.49 81.962c3.968 5.291 56.15 85.334 136 119.638 19.008 8.17 33.814 13.056 45.398 16.704 19.072 6.037 36.437 5.184 50.133 3.157 15.296-2.283 47.125-19.2 53.76-37.675 6.613-18.56 6.613-34.389 4.65-37.717-1.983-3.264-7.295-5.27-15.274-9.237-7.957-3.947-47.125-23.126-54.4-25.771-7.296-2.667-12.587-3.968-17.92 3.947-5.312 7.936-20.565 25.792-25.195 31.061-4.65 5.312-9.301 5.973-17.258 2.005-7.979-3.968-33.622-12.33-64-39.338-23.68-20.992-39.68-46.955-44.331-54.912-4.65-7.915-.47-12.203 3.52-16.15 3.563-3.541 7.936-9.258 11.904-13.866 3.99-4.651 5.333-7.958 7.979-13.227 2.645-5.29 1.322-9.92-.64-13.888-2.006-3.968-17.92-42.987-24.555-58.859h-.021z"/></svg>',Youtube:'<svg xmlns="http://www.w3.org/2000/svg" class="icon youtube-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#DD1829"/><path d="M800.305 372.2c-12.805-42.429-22.873-65.942-65.303-71.064 0 0-113.644-5.761-226.64-5.761-111.716 0-222.797 5.761-222.797 5.761-44.992 5.122-55.7 29.915-67.223 71.065 0 0-11.524 65.527-11.524 131.886 0 68.066 11.524 137.008 11.524 137.008 8.963 39.87 27.354 65.943 67.223 71.065 0 0 123.292 7.682 240.724 7.682 106.78 0 208.714-7.682 208.714-7.682 39.87-7.682 53.78-28.635 65.303-71.065 0 0 11.523-63.022 11.523-128.045 0-69.288-11.524-140.85-11.524-140.85zM448.82 619.97V393.33l174.781 113.32L448.82 619.97z" fill="#fff"/></svg>',Zhihu:'<svg xmlns="http://www.w3.org/2000/svg" class="icon zhihu-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#006CE2"/><path fill="#fff" d="M513.65 491.261H411.551c1.615-16.154 5.815-60.095 5.815-84.973 0-24.88-.323-60.742-.323-60.742h102.744V329.39c0-21.647-9.37-31.34-17.124-31.34h-178.67s5.169-17.77 10.015-36.186c4.846-18.417 15.832-44.264 15.832-44.264-63.003 4.2-67.958 50.941-81.743 92.729-13.787 41.785-24.556 62.356-44.586 107.912 27.786 0 55.249-13.57 66.879-32.309 11.631-18.74 16.908-40.71 16.908-40.71h62.035v59.019c0 21.107-3.878 87.45-3.878 87.45H254.742c-19.386 0-29.724 48.894-29.724 48.894h133.76c-8.4 75.82-26.493 106.191-51.91 152.716-25.418 46.525-92.728 99.406-92.728 99.406 41.033 11.63 86.589-3.555 105.974-21.972 19.386-18.417 35.863-49.756 47.817-72.838 11.954-23.081 21.972-65.124 21.972-65.124L498.462 766.86s4.846-24.233 6.461-39.418c1.616-15.186-.755-26.385-4.63-35.433-3.878-9.046-15.509-21.54-31.018-39.634-15.507-18.094-48.034-52.879-48.034-52.879s-15.832 11.63-28.108 21.001c9.046-21.97 16.262-79.695 16.262-79.695h122.343v-20.249c.003-17.66-7.319-29.29-18.089-29.29zm287.337-200.747h-234.35a4.308 4.308 0 0 0-4.309 4.308v435.099a4.308 4.308 0 0 0 4.308 4.308h40.226l14.7 50.402 81.096-50.402h98.328a4.308 4.308 0 0 0 4.308-4.308v-435.1a4.308 4.308 0 0 0-4.308-4.308zM755.97 684.47h-52.343l-61.548 39.095-10.823-39.095h-18.738V338.116H755.97v346.355z"/></svg>',MrHope:'<svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient gradientTransform="matrix(.2478 .78133 -2.54797 .63622 910.35 281.58)" gradientUnits="userSpaceOnUse" id="a" x1="37.827" x2="159.988" y1="272.916" y2="274.63"><stop offset=".75" stop-color="#e33939"/><stop offset=".998" stop-color="#fff"/></linearGradient><linearGradient gradientTransform="matrix(.13814 .80797 2.55599 -.6032 34.087 494.369)" gradientUnits="userSpaceOnUse" id="b" x1="37.827" x2="159.988" y1="272.916" y2="274.63"><stop offset=".815" stop-color="#e33939"/><stop offset="1" stop-color="#fff"/></linearGradient></defs><path d="M135.637 588.067c-48.891-201.334 74.605-404.162 275.837-453.028 201.233-48.866 403.998 74.734 452.889 276.068 48.892 201.335-74.606 404.162-275.838 453.029-201.233 48.866-403.997-74.734-452.888-276.069Z" fill="#fde68a" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/><path d="M596.076 197.044c-3.342-56.09 56.897-77.831 89.017-51.361m-410.65 128.819c-22.753-51.377-86.256-43.07-102.659-4.816" fill="none" stroke="#6d5e56" stroke-linecap="round" stroke-linejoin="round" stroke-width="11"/><path d="M833.568 288.02c.05 18.046-12.584 30.699-21.346 32.211-8.762 1.512-17.031-1.099-18.584-1.341 0 0-61.363-6.103-105.627 6.921-44.265 13.026-87.04 47.387-94.637 51.892-6.627 3.928-29.112 7.697-44.462-12.938-15.351-20.636.024-41.526.024-41.526s12.685-18.279 40.771-35.123c28.088-16.844 24.624-13.226 52.326-25.696 15.247-6.865 43.319-14.186 67.429-17.069 25.193-3.011 46.348-1.384 57.673.769 22.165 4.212 28.632 5.93 39.169 9.229 12.451 3.898 27.214 14.516 27.264 32.671Z" fill="#fff" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M558.351 345.632c-3.458-14.237 5.214-28.566 19.367-32.003 14.154-3.437 28.43 5.32 31.887 19.557 3.458 14.238-5.212 28.567-19.367 32.004-14.152 3.437-28.43-5.319-31.887-19.558Z" fill="#6d5e56" fill-rule="evenodd" stroke="#6d5e56" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.268"/><path d="M220.249 483.416c46.81-11.689 91.323-.467 99.42 25.064 8.098 25.532-23.286 55.706-70.097 67.393-46.811 11.689-91.323.467-99.42-25.064-8.097-25.532 23.286-55.706 70.097-67.393Z" fill="url(#a)" fill-rule="evenodd" opacity=".261"/><path d="M739.9 357.226c-46.959 11.082-81.367 41.469-76.853 67.871 4.514 26.402 46.241 38.821 93.198 27.738 46.958-11.081 81.366-41.467 76.853-67.869-4.514-26.403-46.241-38.821-93.198-27.74Z" fill="url(#b)" fill-rule="evenodd" opacity=".261"/><path d="M400.934 398.917c-.599 18.034-13.681 30.218-22.494 31.409-8.812 1.192-16.982-1.716-18.526-2.014 0 0-61.109-8.334-105.819 3.07-44.709 11.404-88.696 44.181-96.452 48.406-6.763 3.683-29.372 6.632-43.972-14.546-14.6-21.18 1.519-41.494 1.519-41.494s13.335-17.803 42.013-33.612c28.677-15.809 25.085-12.319 53.222-23.772 15.484-6.304 43.803-12.598 68.005-14.6 25.288-2.093 46.373.305 57.616 2.867 22 5.016 28.401 6.968 38.813 10.649 12.304 4.348 26.677 15.496 26.075 33.637Z" fill="#fff" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M129.05 445.546c-3.458-14.239 5.213-28.566 19.367-32.003 14.153-3.437 28.429 5.318 31.887 19.557 3.458 14.238-5.213 28.566-19.367 32.003-14.153 3.437-28.43-5.318-31.887-19.557Z" fill="#6d5e56" fill-rule="evenodd" stroke="#6d5e56" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.268"/><path d="M424.381 696.386s64.427 13.646 101.996 5.757C640.653 678.146 690.8 521.894 690.8 521.894" fill="none" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="11"/><path d="M796.04 666.774s-10.734-44.165-41.405-11.348c-9.681 10.359-10.438 40.604-28.217 81.89-15.942 37.02-39.564 60.728-42.938 76.063-3.374 15.335.451 35.992 26.352 41.537 25.902 5.545 41.967-23.381 41.967-23.381l44.241-164.761Z" fill="#fde68a" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/><path d="M793.337 664.734c-37.075 160.045-51.73 163.145-40.343 184.845 11.387 21.701 51.417 33.716 71.876-7.313 6.734-13.505-1.31-43.317-1.511-78.077-.307-53.06 16.865-86.111 10.403-98.1-15.332-28.452-39.377-5.875-40.425-1.355Z" fill="#fde68a" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/></svg>'},categoryMap={category:{"/":{path:"/category/",map:{使用指南:{path:"/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/",keys:["v-184f4da6","v-6e19edb7","v-4e65ec78","v-c151bf32","v-438ffe52","v-1473bf53"]},樱桃:{path:"/category/%E6%A8%B1%E6%A1%83/",keys:["v-2bc6566a"]},火龙果:{path:"/category/%E7%81%AB%E9%BE%99%E6%9E%9C/",keys:["v-24b7c48d"]},水果:{path:"/category/%E6%B0%B4%E6%9E%9C/",keys:["v-f0ec4556","v-24b7c48d","v-7bbc18fc","v-7a07405d","v-6cd750ef","v-6b227850"]},草莓:{path:"/category/%E8%8D%89%E8%8E%93/",keys:["v-f0ec4556"]},蔬菜:{path:"/category/%E8%94%AC%E8%8F%9C/",keys:["v-df8b6e0c"]},demo:{path:"/category/demo/",keys:["v-6c7272c8","v-257eb898"]},学习文档:{path:"/category/%E5%AD%A6%E4%B9%A0%E6%96%87%E6%A1%A3/",keys:["v-6908c18a"]},git:{path:"/category/git/",keys:["v-e9ddbd06"]},linux:{path:"/category/linux/",keys:["v-ae5e1d4e","v-aaf46c10"]},文件IO流:{path:"/category/%E6%96%87%E4%BB%B6io%E6%B5%81/",keys:["v-23c9dff9"]},数据库:{path:"/category/%E6%95%B0%E6%8D%AE%E5%BA%93/",keys:["v-27339137","v-1975ed9a","v-dd991ea6","v-da2f6d68","v-d6c5bc2a"]},MQ:{path:"/category/mq/",keys:["v-449df5bb","v-4652ce5a","v-4807a6f9","v-49bc7f98","v-4b715837","v-4d2630d6","v-4edb0975"]},wrapper:{path:"/category/wrapper/",keys:["v-1b2ac639","v-1cdf9ed8"]},使用:{path:"/category/%E4%BD%BF%E7%94%A8/",keys:["v-1b2ac639"]},pageInfo:{path:"/category/pageinfo/",keys:["v-1e947777"]},分页:{path:"/category/%E5%88%86%E9%A1%B5/",keys:["v-1e947777"]},lua:{path:"/category/lua/",keys:["v-d0058120"]},苹果:{path:"/category/%E8%8B%B9%E6%9E%9C/",keys:["v-6cd750ef","v-6b227850","v-696d9fb1","v-67b8c712"]},香蕉:{path:"/category/%E9%A6%99%E8%95%89/",keys:["v-7f25ca3a","v-7d70f19b","v-7bbc18fc","v-7a07405d"]},spring:{path:"/category/spring/",keys:["v-29c3d532","v-2b78add1","v-2d2d8670","v-2ee25f0f","v-309737ae","v-324c104d"]}}}},tag:{"/":{path:"/tag/",map:{页面配置:{path:"/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/",keys:["v-184f4da6","v-6e19edb7"]},使用指南:{path:"/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/",keys:["v-184f4da6","v-6e19edb7"]},禁用:{path:"/tag/%E7%A6%81%E7%94%A8/",keys:["v-4e65ec78"]},文章加密:{path:"/tag/%E6%96%87%E7%AB%A0%E5%8A%A0%E5%AF%86/",keys:["v-c151bf32"]},Markdown:{path:"/tag/markdown/",keys:["v-438ffe52"]},红:{path:"/tag/%E7%BA%A2/",keys:["v-df8b6e0c","v-f0ec4556","v-24b7c48d","v-2bc6566a","v-6cd750ef","v-6b227850","v-696d9fb1","v-67b8c712"]},小:{path:"/tag/%E5%B0%8F/",keys:["v-f0ec4556","v-2bc6566a"]},圆:{path:"/tag/%E5%9C%86/",keys:["v-df8b6e0c","v-2bc6566a","v-6cd750ef","v-6b227850","v-696d9fb1","v-67b8c712"]},大:{path:"/tag/%E5%A4%A7/",keys:["v-24b7c48d","v-6cd750ef","v-6b227850","v-696d9fb1","v-67b8c712"]},demo:{path:"/tag/demo/",keys:["v-6c7272c8","v-257eb898"]},文档:{path:"/tag/%E6%96%87%E6%A1%A3/",keys:["v-6908c18a"]},git:{path:"/tag/git/",keys:["v-e9ddbd06"]},git命令:{path:"/tag/git%E5%91%BD%E4%BB%A4/",keys:["v-e9ddbd06"]},linux:{path:"/tag/linux/",keys:["v-ae5e1d4e","v-aaf46c10"]},问题:{path:"/tag/%E9%97%AE%E9%A2%98/",keys:["v-ae5e1d4e","v-aaf46c10"]},IO:{path:"/tag/io/",keys:["v-23c9dff9"]},数据库:{path:"/tag/%E6%95%B0%E6%8D%AE%E5%BA%93/",keys:["v-27339137","v-1975ed9a","v-dd991ea6","v-da2f6d68","v-d6c5bc2a"]},sql:{path:"/tag/sql/",keys:["v-27339137","v-1975ed9a","v-dd991ea6","v-da2f6d68","v-d6c5bc2a"]},MQ:{path:"/tag/mq/",keys:["v-449df5bb","v-4652ce5a","v-4807a6f9","v-49bc7f98","v-4b715837","v-4d2630d6","v-4edb0975"]},wrapper:{path:"/tag/wrapper/",keys:["v-1b2ac639","v-1cdf9ed8"]},操作流:{path:"/tag/%E6%93%8D%E4%BD%9C%E6%B5%81/",keys:["v-1b2ac639"]},pageInfo:{path:"/tag/pageinfo/",keys:["v-1e947777"]},lua:{path:"/tag/lua/",keys:["v-d0058120"]},黄:{path:"/tag/%E9%BB%84/",keys:["v-7f25ca3a","v-7d70f19b","v-7bbc18fc","v-7a07405d"]},弯曲的:{path:"/tag/%E5%BC%AF%E6%9B%B2%E7%9A%84/",keys:["v-7f25ca3a","v-7d70f19b","v-7bbc18fc","v-7a07405d"]},长:{path:"/tag/%E9%95%BF/",keys:["v-7f25ca3a","v-7d70f19b","v-7bbc18fc","v-7a07405d"]},spring:{path:"/tag/spring/",keys:["v-29c3d532","v-2b78add1","v-2d2d8670","v-2ee25f0f","v-309737ae","v-324c104d"]}}}}},typeMap={article:{"/":{path:"/article/",keys:["v-184f4da6","v-23c9dff9","v-df8b6e0c","v-6e19edb7","v-6c7272c8","v-6908c18a","v-e9ddbd06","v-ae5e1d4e","v-aaf46c10","v-257eb898","v-27339137","v-449df5bb","v-4652ce5a","v-4807a6f9","v-49bc7f98","v-4b715837","v-4d2630d6","v-4edb0975","v-1975ed9a","v-1b2ac639","v-1cdf9ed8","v-1e947777","v-d0058120","v-29c3d532","v-2b78add1","v-2d2d8670","v-2ee25f0f","v-309737ae","v-324c104d","v-dd991ea6","v-da2f6d68","v-d6c5bc2a","v-f0ec4556","v-24b7c48d","v-2bc6566a","v-7f25ca3a","v-7d70f19b","v-7bbc18fc","v-7a07405d","v-6cd750ef","v-6b227850","v-696d9fb1","v-67b8c712","v-2e3eac9e","v-4e65ec78","v-c151bf32","v-438ffe52","v-1473bf53"]}},star:{"/":{path:"/star/",keys:["v-7bbc18fc","v-184f4da6","v-23c9dff9","v-df8b6e0c","v-696d9fb1","v-6e19edb7"]}},timeline:{"/":{path:"/timeline/",keys:["v-184f4da6","v-6c7272c8","v-6908c18a","v-e9ddbd06","v-ae5e1d4e","v-aaf46c10","v-23c9dff9","v-257eb898","v-27339137","v-449df5bb","v-4652ce5a","v-4807a6f9","v-49bc7f98","v-4b715837","v-4d2630d6","v-4edb0975","v-1975ed9a","v-1b2ac639","v-1cdf9ed8","v-1e947777","v-d0058120","v-29c3d532","v-2b78add1","v-2d2d8670","v-2ee25f0f","v-309737ae","v-324c104d","v-dd991ea6","v-da2f6d68","v-d6c5bc2a","v-df8b6e0c","v-f0ec4556","v-24b7c48d","v-2bc6566a","v-7f25ca3a","v-7d70f19b","v-7bbc18fc","v-7a07405d","v-6cd750ef","v-6b227850","v-696d9fb1","v-67b8c712","v-6e19edb7"]}}},l=ref(categoryMap),k=(u="")=>{const m=useRouter(),b=useRoute(),$=useRouteLocale();return computed(()=>{var T;const j=u||((T=usePageFrontmatter().value.blog)==null?void 0:T.key)||"";if(!j)return console.warn("useBlogCategory: key not found"),{path:"/",map:{}};const U=m.getRoutes();if(!l.value[j])throw new Error(`useBlogCategory: key ${j} is invalid`);const G=l.value[j][$.value],W={path:G.path,map:{}};for(const Z in G.map){const Y=G.map[Z];W.map[Z]={path:Y.path,items:[]};for(const nn of Y.keys){const X=U.find(({name:en})=>en===nn);if(X){const en=Dt(m,X.path);W.map[Z].items.push({path:en.path,info:en.meta})}}b.path===Y.path&&(W.currentItems=W.map[Z].items)}return W})},_=ref(typeMap),C=(u="")=>{const m=useRouter(),b=useRouteLocale();return computed(()=>{var $;const T=u||(($=usePageFrontmatter().value.blog)==null?void 0:$.key)||"";if(!T)return console.warn("useBlogType: key not found"),{path:"/",items:[]};if(!_.value[T])throw new Error(`useBlogType: key ${u} is invalid`);const j=m.getRoutes(),U=_.value[T][b.value],G={path:U.path,items:[]};for(const W of U.keys){const Z=j.find(({name:Y})=>Y===W);if(Z){const Y=Dt(m,Z.path);G.items.push({path:Y.path,info:Y.meta})}}return G})},categoryMapSymbol=Symbol.for("categoryMap"),useCategoryMap=()=>{const u=inject(categoryMapSymbol);if(!u)throw new Error("useCategoryMap() is called without provider.");return u},setupCategoryMap=()=>{const u=k("category");provide(categoryMapSymbol,u)},useBlogOptions=()=>{const u=useThemeData(),m=useThemeLocaleData();return computed(()=>({...u.value.blog,...m.value.blog}))},tagMapSymbol=Symbol.for("tagMap"),useTagMap=()=>{const u=inject(tagMapSymbol);if(!u)throw new Error("useTagMap() is called without provider.");return u},setupTagMap=()=>{const u=k("tag");provide(tagMapSymbol,u)},useArticleAuthor=u=>{const m=useThemeLocaleData();return computed(()=>{const{["a"]:b}=u.value;return b?re(b):b===!1?[]:re(m.value.author,!1)})},useArticleCategory=u=>{const m=useCategoryMap();return computed(()=>se(u.value.c).map(b=>({name:b,path:m.value.map[b].path})))},useArticleTag=u=>{const m=useTagMap();return computed(()=>oe(u.value.g).map(b=>({name:b,path:m.value.map[b].path})))},useArticleDate=u=>computed(()=>{const{["d"]:m}=u.value;return m?ot(m):null}),useArticleInfo=u=>{const m=toRef(u,"info"),b=useBlogOptions(),$=useArticleAuthor(m),T=useArticleCategory(m),j=useArticleTag(m),U=useArticleDate(m),G=computed(()=>({author:$.value,category:T.value,date:U.value,localizedDate:m.value.l||"",tag:j.value,isOriginal:m.value.o||!1,readingTime:m.value.r||null,pageview:u.path})),W=computed(()=>b.value.articleInfo);return{info:G,items:W}},articlesSymbol=Symbol.for("articles"),useArticles=()=>{const u=inject(articlesSymbol);if(!u)throw new Error("useArticles() is called without provider.");return u},setupArticles=()=>{const u=C("article");provide(articlesSymbol,u)},starsSymbol=Symbol.for("stars"),useStars=()=>{const u=inject(starsSymbol);if(!u)throw new Error("useStars() is called without provider.");return u},setupStars=()=>{const u=C("star");provide(starsSymbol,u)},timelinesSymbol=Symbol.for("timelines"),useTimelines=()=>{const u=inject(timelinesSymbol);if(!u)throw new Error("useTimelines() is called without provider.");return u},setupTimelines=()=>{const u=C("timeline"),m=computed(()=>{const b=[];return u.value.items.forEach(({info:$,path:T})=>{var W;const{year:j,month:U,day:G}=((W=ot($.d))==null?void 0:W.info)||{};j&&U&&G&&((!b[0]||b[0].year!==j)&&b.unshift({year:j,items:[]}),b[0].items.push({date:`${U}/${G}`,info:$,path:T}))}),{...u.value,config:b.reverse()}});provide(timelinesSymbol,m)},setupBlog=()=>{setupArticles(),setupCategoryMap(),setupStars(),setupTagMap(),setupTimelines()},socialMedia="",SocialMedia=defineComponent({name:"SocialMedia",setup(){const u=useBlogOptions(),m=usePure(),b=computed(()=>{const $=u.value.medias;return $?Object.entries($).map(([T,j])=>({name:T,icon:icons[T],url:j})):[]});return()=>b.value.length?h$3("div",{class:"social-media-wrapper"},b.value.map(({name:$,icon:T,url:j})=>h$3("a",{class:"social-media",href:j,rel:"noopener noreferrer",target:"_blank","aria-label":$,...m.value?{}:{"data-balloon-pos":"up"},innerHTML:T}))):null}}),bloggerInfo="",BloggerInfo=defineComponent({name:"BloggerInfo",setup(){const u=useBlogOptions(),m=useSiteLocaleData(),b=useThemeLocaleData(),$=useArticles(),T=useCategoryMap(),j=useTagMap(),U=useTimelines(),G=useNavigate(),W=computed(()=>{var X;return u.value.name||((X=re(b.value.author)[0])==null?void 0:X.name)||m.value.title}),Z=computed(()=>u.value.avatar||b.value.logo),Y=computed(()=>b.value.blogLocales),nn=computed(()=>u.value.intro);return()=>h$3("div",{class:"blogger-info",vocab:"https://schema.org/",typeof:"Person"},[h$3("div",{class:"blogger",...nn.value?{style:{cursor:"pointer"},"aria-label":Y.value.intro,"data-balloon-pos":"down",role:"navigation",onClick:()=>G(nn.value)}:{}},[Z.value?h$3("img",{class:["blogger-avatar",{round:u.value.roundAvatar}],src:withBase(Z.value),property:"image",alt:"Blogger Avatar"}):null,W.value?h$3("div",{class:"blogger-name",property:"name"},W.value):null,u.value.description?h$3("div",{class:"blogger-description",innerHTML:u.value.description}):null,nn.value?h$3("meta",{property:"url",content:withBase(nn.value)}):null]),h$3("div",{class:"num-wrapper"},[h$3("div",{onClick:()=>G($.value.path)},[h$3("div",{class:"num"},$.value.items.length),h$3("div",Y.value.article)]),h$3("div",{onClick:()=>G(T.value.path)},[h$3("div",{class:"num"},Object.keys(T.value.map).length),h$3("div",Y.value.category)]),h$3("div",{onClick:()=>G(j.value.path)},[h$3("div",{class:"num"},Object.keys(j.value.map).length),h$3("div",Y.value.tag)]),h$3("div",{onClick:()=>G(U.value.path)},[h$3("div",{class:"num"},U.value.items.length),h$3("div",Y.value.timeline)])]),h$3(SocialMedia)])}}),CategoryIcon=()=>h$3(P$3,{name:"category"},()=>h$3("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));CategoryIcon.displayName="CategoryIcon";const TagIcon=()=>h$3(P$3,{name:"tag"},()=>h$3("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));TagIcon.displayName="TagIcon";const TimelineIcon=()=>h$3(P$3,{name:"timeline"},()=>h$3("path",{d:"M511.997 70.568c-243.797 0-441.429 197.633-441.429 441.435 0 243.797 197.632 441.429 441.43 441.429S953.431 755.8 953.431 512.002c0-243.796-197.637-441.434-441.435-441.434zm150.158 609.093-15.605 15.61c-8.621 8.615-22.596 8.615-31.215 0L472.197 552.126c-4.95-4.944-4.34-14.888-4.34-24.677V247.14c0-12.19 9.882-22.07 22.07-22.07h22.07c12.19 0 22.07 9.882 22.07 22.07v273.218l128.088 128.088c8.62 8.62 8.62 22.595 0 31.215zm0 0"}));TimelineIcon.displayName="TimelineIcon";const SlideIcon=()=>h$3(P$3,{name:"slides"},()=>h$3("path",{d:"M896 170.667v426.666a85.333 85.333 0 0 1-85.333 85.334h-256v61.184l192.597 115.584-43.861 73.13-148.736-89.173v95.275h-85.334v-95.318l-148.736 89.216-43.861-73.13 192.597-115.627v-61.141h-256A85.333 85.333 0 0 1 128 597.333V170.667H85.333V85.333h853.334v85.334H896zm-682.667 0v426.666h597.334V170.667H213.333zM426.667 512h-85.334V341.333h85.334V512zm128 0h-85.334V256h85.334v256zm128 0h-85.334V384h85.334v128z"}));SlideIcon.displayName="SlideIcon";const StickyIcon=()=>h$3(P$3,{name:"sticky"},()=>[h$3("path",{d:"m381.3 733.8l-161.9 118c-5.9 4.5-13.2 6.6-20.1 6.6-8.7 0-17.7-3.4-24.3-10-12.2-12.2-13.9-31.3-3.5-45.2l144.5-195.5-113.6-112.9c-11.1-11.1-13.2-28.4-5.5-42 5.5-8.7 52.1-76.4 155.5-51 1.8 0.3 3.5 0.3 5.6 0.7 4.2 0.3 9 0.7 14.2 1.7 21.9 3.5 60.8-13.9 94.5-42.7 32.3-27.5 53.1-59.4 53.1-81.6 0-5.2 0-10.8-0.3-16-0.7-20.8-2.1-52.8 21.5-76.4 28.1-28.1 72.9-30.6 103.9-5.2 0.6 0.3 1 1 1.7 1.7 16.7 16.3 187.5 187.2 189.3 188.9 14.5 14.6 22.9 34.4 22.9 55.3 0 20.8-8 40.2-22.9 54.8-23.7 23.6-56 22.6-77.1 21.6-4.9 0-10.5-0.4-15.7-0.4-20.8 0-45.8 14.6-70.5 41.3-34.3 37.5-55.5 85.8-53.8 107.7 0.7 6.9 2.1 19.1 2.4 20.8 25 101.4-42.7 147.6-50.7 152.8-13.9 8.4-31.6 6.3-42.7-4.8l-112.1-112.2z"})]);StickyIcon.displayName="StickyIcon";const ArticleIcon=()=>h$3(P$3,{name:"article"},()=>h$3("path",{d:"M853.333 938.667H170.667A42.667 42.667 0 0 1 128 896V128a42.667 42.667 0 0 1 42.667-42.667h682.666A42.667 42.667 0 0 1 896 128v768a42.667 42.667 0 0 1-42.667 42.667zm-42.666-85.334V170.667H213.333v682.666h597.334zM298.667 256h170.666v170.667H298.667V256zm0 256h426.666v85.333H298.667V512zm0 170.667h426.666V768H298.667v-85.333zm256-384h170.666V384H554.667v-85.333z"}));ArticleIcon.displayName="ArticleIcon";const BookIcon=()=>h$3(P$3,{name:"book"},()=>h$3("path",{d:"M256 853.333h426.667A85.333 85.333 0 0 0 768 768V256a85.333 85.333 0 0 0-85.333-85.333H469.333a42.667 42.667 0 0 1 0-85.334h213.334A170.667 170.667 0 0 1 853.333 256v512a170.667 170.667 0 0 1-170.666 170.667H213.333A42.667 42.667 0 0 1 170.667 896V128a42.667 42.667 0 0 1 42.666-42.667h128A42.667 42.667 0 0 1 384 128v304.256l61.653-41.088a42.667 42.667 0 0 1 47.36 0l61.654 41.045V256A42.667 42.667 0 0 1 640 256v256a42.667 42.667 0 0 1-66.347 35.499l-104.32-69.547-104.32 69.547A42.667 42.667 0 0 1 298.667 512V170.667H256v682.666z"}));BookIcon.displayName="BookIcon";const LinkIcon=()=>h$3(P$3,{name:"link"},()=>h$3("path",{d:"M460.8 584.533c17.067 17.067 17.067 42.667 0 59.734-17.067 17.066-42.667 17.066-59.733 0-85.334-85.334-85.334-217.6 0-302.934L554.667 192C640 110.933 776.533 110.933 857.6 196.267c81.067 81.066 81.067 213.333 0 294.4l-68.267 64c0-34.134-4.266-68.267-17.066-102.4l21.333-21.334c51.2-46.933 55.467-128 4.267-179.2s-128-55.466-179.2-4.266c-4.267 0-4.267 4.266-4.267 4.266L465.067 401.067c-51.2 51.2-51.2 132.266-4.267 183.466m123.733-183.466C601.6 384 627.2 384 644.267 401.067c85.333 85.333 85.333 217.6 0 302.933l-153.6 149.333C405.333 934.4 268.8 934.4 187.733 849.067c-81.066-81.067-81.066-213.334 0-294.4l68.267-64c0 34.133 4.267 72.533 17.067 102.4L251.733 614.4C204.8 665.6 204.8 746.667 256 793.6c51.2 46.933 123.733 46.933 174.933 0l149.334-149.333c51.2-51.2 51.2-128 0-179.2-12.8-17.067-17.067-46.934 4.266-64z"}));LinkIcon.displayName="LinkIcon";const ProjectIcon=()=>h$3(P$3,{name:"project"},()=>h$3("path",{d:"M987.456 425.152H864V295.296a36.48 36.48 0 0 0-36.544-36.544h-360l-134.08-128.256A9.344 9.344 0 0 0 327.04 128H36.48A36.48 36.48 0 0 0 0 164.544v676.608a36.48 36.48 0 0 0 36.544 36.544h797.76a36.672 36.672 0 0 0 33.92-22.848L1021.44 475.52a36.48 36.48 0 0 0-33.92-50.304zM82.304 210.304h215.424l136.64 130.752h347.328v84.096H198.848A36.672 36.672 0 0 0 164.928 448L82.304 652.8V210.304zM808.32 795.456H108.544l118.08-292.608h699.904L808.32 795.52z"}));ProjectIcon.displayName="ProjectIcon";const FriendIcon=()=>h$3(P$3,{name:"friend"},()=>h$3("path",{d:"M860.16 213.333A268.373 268.373 0 0 0 512 186.027a267.52 267.52 0 0 0-348.16 404.48L428.8 855.893a118.613 118.613 0 0 0 166.4 0l264.96-265.386a267.52 267.52 0 0 0 0-377.174zM800 531.627l-264.96 264.96a32.427 32.427 0 0 1-46.08 0L224 530.347a183.04 183.04 0 0 1 0-256 182.187 182.187 0 0 1 256 0 42.667 42.667 0 0 0 60.587 0 182.187 182.187 0 0 1 256 0 183.04 183.04 0 0 1 3.413 256z"}));FriendIcon.displayName="FriendIcon";const SlideDownIcon=()=>h$3(P$3,{name:"slide-down"},()=>h$3("path",{d:"M108.775 312.23c13.553 0 27.106 3.734 39.153 11.806l375.205 250.338 363.641-252.808c32.587-21.624 76.499-12.83 98.123 19.757 21.685 32.467 12.95 76.56-19.576 98.184l-402.854 278.89c-23.733 15.901-54.694 15.962-78.547.12L69.501 442.097c-32.647-21.685-41.441-65.777-19.817-98.304 13.734-20.54 36.201-31.563 59.09-31.563Z"}));SlideDownIcon.displayName="SlideDownIcon";const emptyIcon="",EmptyIcon=()=>h$3("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",class:"empty-icon",viewBox:"0 0 1024 1024",innerHTML:'<defs><linearGradient id="f" x1="512.342" y1="2266.13" x2="512.342" y2="666.063" gradientUnits="userSpaceOnUse"><stop offset=".919" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="g" x1="528.912" y1="774" x2="388.088" y2="612" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#e6e6e6" stop-opacity="0"/></linearGradient><linearGradient id="h" x1="213.219" y1="721.704" x2="251.313" y2="683.61" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d7d7d7"/><stop offset=".485" stop-color="#fafafa"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="i" x1="724.813" y1="821.718" x2="768.656" y2="777.876" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="a" x1="513.493" y1="714.594" x2="471.007" y2="544.188" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#999"/><stop offset="1" stop-color="#ccc"/></linearGradient><linearGradient id="b" x1="440.156" y1="564.031" x2="508.594" y2="495.594" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="l" x1="660.988" y1="754.156" x2="608.637" y2="544.188" xlink:href="#a"/><linearGradient id="m" x1="479.188" y1="774.219" x2="649.782" y2="603.625" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b3b3b3"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="n" x1="447.121" y1="774.219" x2="394.661" y2="563.813" xlink:href="#a"/><linearGradient id="o" x1="494" y1="597" x2="628" y2="463" xlink:href="#b"/><linearGradient id="d" x1="610.485" y1="604.938" x2="697.298" y2="518.125" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="p" x1="457.438" y1="619.25" x2="353.469" y2="619.25" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="q" x1="542.734" y1="674.25" x2="615.672" y2="601.313" xlink:href="#b"/><linearGradient id="c" x1="627.933" y1="358.938" x2="685.192" y2="422.531" gradientUnits="userSpaceOnUse"><stop offset=".4" stop-color="#e6e6e6" stop-opacity=".4"/><stop offset=".443" stop-color="#fff"/><stop offset=".6" stop-color="#ccc"/></linearGradient><linearGradient id="r" x1="618.547" y1="422.531" x2="681.547" y2="359.531" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="s" x1="625" y1="441.5" x2="697" y2="369.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="t" x1="627.681" y1="361.438" x2="692.257" y2="433.156" xlink:href="#c"/><linearGradient id="u" x1="561.414" y1="735.438" x2="573.149" y2="688.375" xlink:href="#d"/><linearGradient id="v" x1="405" y1="485.875" x2="440" y2="450.875" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".702"/></linearGradient><linearGradient id="w" x1="404.61" y1="486.906" x2="441.86" y2="449.656" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".495" stop-color="#ccc" stop-opacity=".702"/><stop offset=".498" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".302"/></linearGradient><radialGradient id="e" cx="329.297" cy="647.578" r="8.172" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fafafa"/><stop offset="1.2" stop-color="#e6e6e6"/></radialGradient><radialGradient id="j" cx="802.297" cy="673.578" r="8.172" xlink:href="#e"/><radialGradient id="k" cx="774.844" cy="642.75" r="5.531" xlink:href="#e"/></defs><path d="M512.33 666.07c441.828 0 800 358.18 800 800.03s-358.172 800.02-800 800.02-800-358.18-800-800.02 358.17-800.03 800-800.03z" style="fill:url(#f);fill-rule:evenodd"/><path d="m272 694 242-82 131 119-188 43z" style="fill:url(#g);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M232.391 723.534a2.4 2.4 0 0 1 2.4 2.4v17.725a2.4 2.4 0 0 1-4.8 0v-17.725a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M232.255 676.559c10.33 0 17.067 15.408 18.7 28.493 1.619 12.942-2.372 23.694-18.7 23.694-16.878 0-20.213-10.733-18.7-23.694 1.633-14.061 8.37-28.493 18.7-28.493z" style="fill:url(#h);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M745.853 826h.938a2.4 2.4 0 0 1 2.4 2.4v22.238a2.4 2.4 0 0 1-2.4 2.4h-.938a2.4 2.4 0 0 1-2.4-2.4V828.4a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M746.727 830.3c-19.438 0-23.278-9.326-21.541-20.59a34.467 34.467 0 0 1 3.289-10.369 16.628 16.628 0 0 1 0-9.112c2.889-12.327 12.059-20.911 18.356-20.911 6.56 0 15.468 9.1 18.356 20.911a14.589 14.589 0 0 1-.335 9.217 34.36 34.36 0 0 1 3.419 10.264c1.861 11.243-2.735 20.59-21.544 20.59z" style="fill:url(#i);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M328.841 654.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.109.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M328.383 653.73a6.567 6.567 0 0 0-5.2-5.027q-4.109-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#e);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M801.841 680.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.108.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M801.383 679.73a6.567 6.567 0 0 0-5.2-5.027q-4.108-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#j);fill-rule:evenodd"/><path d="M774.21 646.9a4.446 4.446 0 0 0-3.517-3.4q-2.778-.643-.023-1.383a4.443 4.443 0 0 0 3.4-3.517q.645-2.778 1.383-.023a4.443 4.443 0 0 0 3.517 3.4q2.778.645.023 1.383a4.446 4.446 0 0 0-3.4 3.517q-.645 2.78-1.383.023z" style="fill:url(#k);fill-rule:evenodd"/><path d="m385.6 714.6.158-150.658L598.9 544.174l-.158 150.658z" style="fill:url(#a);fill-rule:evenodd"/><path d="m385.474 564.031 214.763-19.383-36.171-49.067-215.559 17.634z" style="fill:url(#b);fill-rule:evenodd"/><path d="m598.744 694.832.156-150.658 71.975 59.319-.158 150.658z" style="fill:url(#l);fill-rule:evenodd"/><path d="m457.064 774.209.158-150.658 214.691-19.914-.158 150.663z" style="fill:url(#m);fill-rule:evenodd"/><path d="m384.566 714.459.158-150.659 72.5 59.75-.158 150.658z" style="fill:url(#n);fill-rule:evenodd"/><path d="M494 640s75.357-58.4 42-83-38.887 1.663-37 14 53.847 12.465 54-26c.2-49.979 75-125 75-125" style="fill:none;stroke-width:3px;stroke-dasharray:12 6;stroke:url(#o);fill-rule:evenodd"/><path d="m670.275 604.939-72.041-59.9 38.476-26.909 72.86 58.159z" style="fill:url(#d);fill-rule:evenodd"/><path d="m425.5 674.383-72.042-59.9 31.109-50.347 72.86 58.16z" style="fill:url(#p);fill-rule:evenodd"/><path d="m487.918 674.235 214.482-22.57-31.1-50.346-215.309 20.833z" style="fill:url(#q);fill-rule:evenodd"/><path style="fill:#fff;fill-rule:evenodd" d="m697.363 358.927-69.58 62.511-12.035 1.082z"/><path d="m697.363 358.927-69.58 62.511-12.035 1.082z" style="fill:url(#c);fill-rule:evenodd"/><path d="M615.748 422.52 604 413l92.089-53.46" style="fill:url(#r);fill-rule:evenodd"/><path d="m625 432 12 18 60-89" style="fill:url(#s);fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:#fff;fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:url(#t);fill-rule:evenodd"/><path d="m494.814 735.44 21.293-2.1v-6.613l-13.4 1.319v-6.965l10.977-1.08v-6.613l-10.977 1.08v-6.084l12.917-1.27v-6.525l-20.808 2.047v32.8zM521 732.863l7.054-.694v-11.241a106.361 106.361 0 0 0-1.014-11.274l.176-.017 2.645 7.586 4.453 11.553 4.32-.425 4.408-12.424 2.733-8.116.177-.018a111.811 111.811 0 0 0-1.014 11.474v11.241l7.185-.707V697l-8.552.841-5.025 14.646c-.618 1.956-1.147 4.08-1.808 6.173l-.22.022c-.617-1.968-1.146-3.987-1.808-5.818l-5.2-13.639-8.508.837v32.8zm37.213-3.661 7.891-.776v-10.889l3.835-.377c6.922-.681 12.961-4.714 12.961-12.517 0-8.111-5.951-10.082-13.181-9.371l-11.504 1.128v32.8zm7.891-17.881v-9.478l3.218-.316c3.792-.373 5.908.565 5.908 3.871 0 3.218-1.852 5.208-5.687 5.585zM594 725.682l7.891-.777v-26.274l8.905-.876v-6.524l-25.657 2.524v6.524l8.861-.871v26.274zm27.991-2.754 7.847-.772v-11.594l9.919-22.18-8.244.811-2.733 7.542c-.925 2.56-1.807 4.939-2.733 7.587l-.176.018c-.926-2.466-1.764-4.676-2.645-7.058l-2.734-7-8.375.824 9.874 20.233v11.594z" style="fill:url(#u);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M408.938 457.309a17.5 17.5 0 0 0 21.374 26.725 17.5 17.5 0 1 1-16.306-30.955 17.442 17.442 0 0 0-5.068 4.23z"/><circle cx="422.5" cy="468.375" r="17.5" style="fill:url(#v)"/><path fill="#ccc" fill-rule="evenodd" d="M391.76 451.5c-2.358 4.419 9.827 15.52 27.215 24.8 15.131 8.071 29.212 12.1 34.166 10.093-4.191 2.772-18.943-1.24-34.86-9.73-17.388-9.275-29.573-20.376-27.215-24.8a2.96 2.96 0 0 1 1.585-1.3 2.606 2.606 0 0 0-.891.937z"/><path d="M418.975 476.29c-17.388-9.275-29.573-20.376-27.215-24.8s18.363-.484 35.751 8.791 29.572 20.376 27.215 24.8-18.364.483-35.751-8.791zm31.634 5.732c1.824-3.42-8.789-12.642-23.7-20.6s-28.486-11.633-30.31-8.213 8.789 12.642 23.7 20.6 28.486 11.633 30.31 8.213zm-36.645-29.008-2.775 1.452.032 1.751 28.637 14.183.266-4.559z" style="fill:url(#w);fill-rule:evenodd"/><g class="people"><path style="fill:#f8cfad;fill-rule:evenodd" d="m612.131 676.5 1.362 3.532 3.255-2.324-1.361-3.532zM629.131 665.5l1.362 3.532 3.255-2.324-1.361-3.532z"/><path style="fill:#141a33;fill-rule:evenodd" d="m617.764 678.184-3.162-.078a11.028 11.028 0 0 0-1.034 3.454c-.258 2.006-1.177 5-.449 5.367 1.5 2.659 4.118-.215 4.118-.215s2.187-2.848 1.925-5.265c-.106-.973-1.181-1.869-1.398-3.263zM633.781 665.855l3.019.945a11.008 11.008 0 0 1-.137 3.6c-.4 1.981-.179 4.166-.986 4.277-2.283 2.03-3.827-1.533-3.827-1.533s-1.473-2.456-.444-4.659c.412-.88 1.718-1.385 2.375-2.63z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M599.935 592.534s10.293 9.761 11.95 7.564 3.536-3.463-6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M611.3 596.361c1.674-1.105 11.5 7.048 14.5 11.774s-12.705-4.36-14.632-6.776-1.54-3.893.132-4.998z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M621.815 607.988s1.809 2.549 2.433 1.756 2.475-1.064 2.449-1.138.1-.819 1.288-2.331-3.8-3.632-5.81-.494a2.556 2.556 0 0 0-.36 2.207z"/><path fill="#232c57" fill-rule="evenodd" d="M598 617s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s12.666 11.836 16 19c0 0-4.753-1.629-4 2 0 0-18.132-14.647-19-19s-9.148-18.716-12-31z"/><path d="M589 622s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s4.666 17.836 8 25c0 0-4.753-1.629-4 2 0 0-10.132-20.647-11-25s-9.148-18.716-12-31z" style="fill:#292966;fill-rule:evenodd"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M585.626 597.7s-10.292 9.761-11.95 7.563-3.536-3.463 6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M574.259 601.529c-1.675-1.105-11.5 7.049-14.5 11.774s12.7-4.36 14.631-6.775 1.543-3.894-.131-4.999z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M591.715 577.752s-.606 1.681 1.48 3.716-3.615 5.307-4.645 2.85-.48-2.716-.48-2.716z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M583.527 574.123c-.839 1.043.491 3.873 1.453 5.449s2.749 2.833 3.364 2.428 4.088-2.657 4-4-.228-3.4-.228-3.4 2.562-1.641 2.154-2.916-2.916-.154-2.916-.154a15.853 15.853 0 0 0-.227-2.224c-.189-.929-6.887-1.445-7.827 2.6s.558 1.805.227 2.217z"/><path fill="#232c57" fill-rule="evenodd" d="M584.227 567.758c2.1-.885 7.2-3.684 10.125.318s.842 4.385.989 5.294-1.894 5.69-1.341 6.63-3.865.8-4.657-1.179-2.844-.539-2.227-1.224-1.3-4.456-2.916-2.154a9.252 9.252 0 0 0 .309-1.38c-.115.192.259-3.257-.673-1.32s-2.1 1.037-3.069.762-1.8-1.118-1.071-1.689c.023-.016 2.436-3.172 4.531-4.058z"/><path d="M589 585c-2.584-.47-10.055.362-13 13 0 0 1.9 3.349 5 4s6 21 6 21 24.016 11.06 27-3c-.07-13.826-8-21-8-21s5.829-3.2 5-6-8.016-10.153-11-10-6 0-6 0-2.416 2.47-5 2z" style="fill:#f6bb07;fill-rule:evenodd"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M563.284 612.581s-.986 2.965-1.814 2.389-2.678-.3-2.675-.374-.333-.755-1.912-1.854 2.577-4.583 5.414-2.167a2.551 2.551 0 0 1 .987 2.006z"/></g>'});EmptyIcon.displayName="EmptyIcon";const LockIcon=()=>h$3(P$3,{name:"lock"},()=>h$3("path",{d:"M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z"}));LockIcon.displayName="LockIcon";const articleItem="",ArticleItem=defineComponent({name:"ArticleItem",props:{info:{type:Object,required:!0},path:{type:String,required:!0}},setup(u){const m=toRef(u,"info"),{info:b,items:$}=useArticleInfo(u);return()=>h$3("div",{class:"article-item"},h$3("article",{class:"article",vocab:"https://schema.org/",typeof:"Article"},[m.value.u?h$3(StickyIcon):null,h$3(RouterLink,{to:u.path},()=>[h$3("header",{class:"title"},[m.value.n?h$3(LockIcon):null,m.value.y==="s"?h$3(SlideIcon):null,h$3("span",{property:"headline"},m.value.title),m.value.v?h$3("meta",{property:"image",content:withBase(m.value.v)}):null])]),m.value.e?h$3("div",{class:"article-excerpt",innerHTML:m.value.e}):null,h$3("hr",{class:"hr"}),h$3(PageInfo,{info:b.value,...$.value?{items:$.value}:{}})]))}}),pagination="",Pagination=defineComponent({name:"Pagination",props:{total:{type:Number,default:10},perPage:{type:Number,default:10},current:{type:Number,default:1}},emits:{updateCurrentPage:u=>!0},setup(u,{emit:m}){let b;const $=useThemeLocaleData(),T=ref(""),j=computed(()=>$.value.paginationLocales),U=computed(()=>Math.ceil(u.total/u.perPage)),G=computed(()=>Boolean(U.value)&&U.value!==1),W=computed(()=>U.value<7?!1:u.current>4),Z=computed(()=>U.value<7?!1:u.current<U.value-3),Y=computed(()=>{const{current:en}=u;let sn=1,an=U.value;const on=[];U.value>=7&&(en<=4&&en<U.value-3?(sn=1,an=5):en>4&&en>=U.value-3?(an=U.value,sn=U.value-4):U.value>7&&(sn=en-2,an=en+2));for(let rn=sn;rn<=an;rn++)on.push(rn);return on}),nn=en=>m("updateCurrentPage",en),X=en=>{const sn=parseInt(en);sn<=U.value&&sn>0?nn(sn):b.pop(`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M64 512a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#FA5151"/><path d="m557.3 512 113.1-113.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L512 466.7 398.9 353.6c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 512 353.6 625.1c-12.5 12.5-12.5 32.8 0 45.3 6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L512 557.3l113.1 113.1c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L557.3 512z" fill="#FFF"/></svg>${j.value.errorText.replace(/\$page/g,U.value.toString())}`)};return onMounted(()=>{b=new Pt}),()=>h$3("div",{class:"pagination-wrapper"},G.value?h$3("div",{class:"pagination-list"},[h$3("div",{class:"page-number"},[u.current>1?h$3("div",{class:"prev",role:"navigation",unselectable:"on",onClick:()=>nn(u.current-1)},j.value.prev):null,...W.value?[h$3("div",{role:"navigation",onClick:()=>nn(1)},1),h$3("div",{class:"ellipsis"},"...")]:[],...Y.value.map(en=>h$3("div",{key:en,class:{active:u.current===en},role:"navigation",onClick:()=>nn(en)},en)),...Z.value?[h$3("div",{class:"ellipsis"},"..."),h$3("div",{role:"navigation",onClick:()=>nn(U.value)},U.value)]:[],u.current<U.value?h$3("div",{class:"next",role:"navigation",unselectable:"on",onClick:()=>nn(u.current+1)},j.value.next):null]),h$3("div",{class:"navigate-wrapper"},[h$3("label",{for:"navigation-text"},`${j.value.navigate}: `),h$3("input",{id:"navigation-text",value:T.value,onInput:({target:en})=>{T.value=en.value},onKeydown:en=>{en.key==="Enter"&&(en.preventDefault(),X(T.value))}}),h$3("button",{class:"navigate",role:"navigation",title:j.value.action,onClick:()=>X(T.value)},j.value.action)])]):[])}}),articleList="",ArticleList=defineComponent({name:"ArticleList",props:{items:{type:Array,default:()=>[]}},setup(u){const m=useRoute(),b=useRouter(),$=useBlogOptions(),T=ref(1),j=computed(()=>$.value.articlePerPage||10),U=computed(()=>u.items.slice((T.value-1)*j.value,T.value*j.value)),G=W=>{T.value=W;const Z={...m.query};Z.page===W.toString()||W===1&&!Z.page||(W===1?delete Z.page:Z.page=W.toString(),b.push({path:m.path,query:Z}))};return onMounted(()=>{const{page:W}=m.query;G(W?Number(W):1),watch(T,()=>{const Z=document.querySelector("#article-list").getBoundingClientRect().top+window.scrollY;setTimeout(()=>{window.scrollTo(0,Z)},100)})}),()=>h$3("div",{id:"article-list",class:"article-wrapper"},U.value.length?[...U.value.map(({info:W,path:Z},Y)=>h$3(DropTransition,{appear:!0,delay:Y*.04},()=>h$3(ArticleItem,{key:Z,info:W,path:Z}))),h$3(Pagination,{current:T.value,perPage:j.value,total:u.items.length,onUpdateCurrentPage:G})]:h$3(EmptyIcon))}}),categoryList="",CategoryList=defineComponent({name:"CategoryList",setup(){const u=useRoute(),m=useCategoryMap();return()=>h$3("ul",{class:"category-list-wrapper"},Object.entries(m.value.map).map(([b,{path:$,items:T}])=>h$3("li",{class:["category",`category${Gt(b,9)}`,{active:$===u.path}]},h$3(RouterLink,{to:$},()=>[b,h$3("span",{class:"category-num"},T.length)]))))}}),tagList="",TagList=defineComponent({name:"TagList",setup(){const u=usePageFrontmatter(),m=useTagMap(),b=$=>{var T;return $===((T=u.value.blog)==null?void 0:T.name)};return()=>h$3("ul",{class:"tag-list-wrapper"},Object.entries(m.value.map).map(([$,{path:T,items:j}])=>h$3("li",{class:["tag",`tag${Gt($,9)}`,{active:b($)}]},h$3(RouterLink,{to:T},()=>[$,h$3("span",{class:"tag-num"},j.length)]))))}}),timelineList="",TimelineList=defineComponent({name:"TimelineList",setup(){const u=useThemeLocaleData(),m=useTimelines(),b=useNavigate(),$=computed(()=>u.value.blogLocales.timeline);return()=>h$3("div",{class:"timeline-list-wrapper"},[h$3("div",{class:"timeline-list-title",onClick:()=>b(m.value.path)},[h$3(TimelineIcon),h$3("span",{class:"num"},m.value.items.length),$.value]),h$3("hr"),h$3("div",{class:"timeline-content"},h$3("ul",{class:"timeline-list"},m.value.config.map(({year:T,items:j},U)=>h$3(DropTransition,{appear:!0,delay:.08*(U+1)},()=>h$3("li",[h$3("h3",{class:"timeline-year"},T),h$3("ul",{class:"timeline-year-wrapper"},j.map(({date:G,info:W,path:Z})=>h$3("li",{class:"timeline-item"},[h$3("span",{class:"timeline-date"},G),h$3(RouterLink,{class:"timeline-title",to:Z},()=>W.title)])))])))))])}}),infoList="",InfoList=defineComponent({name:"InfoList",setup(){const u=useThemeLocaleData(),m=useArticles(),b=useCategoryMap(),$=computed(()=>Object.keys(b.value.map).length),T=useStars(),j=useTagMap(),U=computed(()=>Object.keys(j.value.map).length),G=useNavigate(),W=ref("article"),Z=computed(()=>u.value.blogLocales),Y=[["article",ArticleIcon],["category",CategoryIcon],["tag",TagIcon],["timeline",TimelineIcon]];return()=>h$3("div",{class:"blog-info-list"},[h$3("div",{class:"blog-type-wrapper"},Y.map(([nn,X])=>h$3("button",{class:"blog-type-button",onClick:()=>{W.value=nn}},h$3("div",{class:["icon-wrapper",{active:W.value===nn}],"aria-label":Z.value[nn],"data-balloon-pos":"up"},h$3(X))))),h$3(DropTransition,()=>W.value==="article"?h$3("div",{class:"sticky-article-wrapper"},[h$3("div",{class:"title",onClick:()=>G(m.value.path)},[h$3(ArticleIcon),h$3("span",{class:"num"},m.value.items.length),Z.value.article]),h$3("hr"),h$3("ul",{class:"sticky-article-list"},T.value.items.map(({info:nn,path:X},en)=>h$3(DropTransition,{appear:!0,delay:.08*(en+1)},()=>h$3("li",{class:"sticky-article"},h$3(RouterLink,{to:X},()=>nn.title)))))]):W.value==="category"?h$3("div",{class:"category-wrapper"},[$.value?h$3("div",{class:"title",onClick:()=>G(b.value.path)},[h$3(CategoryIcon),h$3("span",{class:"num"},$.value),Z.value.category]):null,h$3("hr"),h$3(DropTransition,{delay:.04},()=>h$3(CategoryList))]):W.value==="tag"?h$3("div",{class:"tag-wrapper"},[U.value?h$3("div",{class:"title",onClick:()=>G(j.value.path)},[h$3(TagIcon),h$3("span",{class:"num"},U.value),Z.value.tag]):null,h$3("hr"),h$3(DropTransition,{delay:.04},()=>h$3(TagList))]):h$3(DropTransition,()=>h$3(TimelineList)))])}}),page="",BlogWrapper=defineComponent({name:"BlogWrapper",setup(u,{slots:m}){const{isMobile:b}=useWindowSize();return()=>[h$3(SkipLink),h$3(CommonWrapper,{noSidebar:!0},{default:()=>{var $;return($=m.default)==null?void 0:$.call(m)},navScreenBottom:()=>h$3(BloggerInfo),...b.value?{sidebar:()=>h$3(InfoList)}:{}})]}}),infoPanel="",InfoPanel=()=>h$3("aside",{class:"blog-info-wrapper"},[h$3(DropTransition,()=>h$3(BloggerInfo)),h$3(DropTransition,{delay:.04},()=>h$3(InfoList))]);InfoPanel.displayName="InfoPanel";const BlogCategory=defineComponent({name:"BlogPage",components:{CategoryList,TagList},setup(){const u=usePageFrontmatter(),m=useRoute(),b=useCategoryMap(),$=useTagMap(),T=computed(()=>u.value.blog||{}),j=computed(()=>{const{key:G=""}=T.value;return G==="category"?"CategoryList":G==="tag"?"TagList":null}),U=computed(()=>{const{name:G="",key:W=""}=T.value;return W==="category"?G?b.value.map[G].items:[]:W==="tag"?G?$.value.map[G].items:[]:[]});return()=>h$3(BlogWrapper,()=>h$3("div",{class:"page blog"},h$3("div",{class:"blog-page-wrapper"},[h$3("main",{class:"blog-main",id:"main-content"},[h$3(DropTransition,()=>j.value?h$3(resolveComponent(j.value)):null),T.value.name?h$3(DropTransition,{appear:!0,delay:.24},()=>h$3(ArticleList,{key:m.path,items:U.value})):null]),h$3(DropTransition,{delay:.16},()=>h$3(InfoPanel))])))}}),defaultHeroBgImagePath="/assets/hero-197a9d2d.jpg",blogHero="",BlogHero=defineComponent({name:"BlogHero",setup(){const u=usePageHeadTitle(),m=usePageFrontmatter(),b=ref(),$=computed(()=>m.value.heroImage||null),T=computed(()=>m.value.heroFullScreen||!1),j=computed(()=>({...{maxHeight:"180px",margin:m.value.heroText===!1?"6rem auto 1.5rem":"1rem auto"},...m.value.heroImageStyle})),U=computed(()=>m.value.bgImage?withBase(m.value.bgImage):m.value.bgImage??defaultHeroBgImagePath),G=computed(()=>({...{height:"350px",textAlign:"center",overflow:"hidden"},...m.value.bgImageStyle}));return()=>m.value.hero===!1?null:h$3("div",{ref:b,class:["blog-hero",{fullscreen:T.value}],style:G.value},[U.value?h$3("div",{class:"mask",style:{background:`url(${U.value}) center/cover no-repeat`}}):null,h$3(DropTransition,{appear:!0,delay:.04},()=>$.value?h$3("img",{class:"hero-image",style:j.value,src:withBase($.value),alt:m.value.heroAlt||"hero image"}):null),h$3(DropTransition,{appear:!0,delay:.08},()=>m.value.heroText===!1?null:h$3("h1",m.value.heroText||u.value)),h$3(DropTransition,{appear:!0,delay:.12},()=>m.value.tagline?h$3("p",{class:"description",innerHTML:m.value.tagline}):null),T.value?h$3("button",{class:"slide-down-button",onClick:()=>{window.scrollTo({top:b.value.clientHeight,behavior:"smooth"})}},[h$3(SlideDownIcon),h$3(SlideDownIcon)]):null])}}),projectPanel="",AVAILABLE_PROJECT_TYPES=["link","article","book","project","friend"],ProjectPanel=defineComponent({name:"ProjectPanel",components:{ArticleIcon,BookIcon,FriendIcon,LinkIcon,ProjectIcon},setup(){const u=usePageFrontmatter(),m=usePure(),b=useNavigate(),$=(T="",j="icon")=>AVAILABLE_PROJECT_TYPES.includes(T)?h$3(resolveComponent(`${T}-icon`)):isLinkHttp(T)?h$3("img",{src:T,alt:j,class:"image"}):ue(T)?h$3("img",{src:withBase(T),alt:j,class:"image"}):h$3(Icon,{icon:T});return()=>{var T;return(T=u.value.projects)!=null&&T.length?h$3("div",{class:"project-panel"},u.value.projects.map(({icon:j,link:U,name:G,desc:W},Z)=>h$3("div",{class:["project",{[`project${Z%9}`]:!m.value}],onClick:()=>b(U)},[$(j,G),h$3("div",{class:"name"},G),h$3("div",{class:"desc"},W)]))):null}}}),home="",BlogHome$1=defineComponent({name:"BlogHome",setup(){const u=useArticles();return()=>h$3("div",{class:"page blog"},[h$3(BlogHero),h$3("div",{class:"blog-page-wrapper"},[h$3("main",{class:"blog-home",id:"main-content"},[h$3(DropTransition,{appear:!0,delay:.16},()=>h$3(ProjectPanel)),h$3(DropTransition,{appear:!0,delay:.24},()=>h$3(ArticleList,{items:u.value.items}))]),h$3(DropTransition,{appear:!0,delay:.16},()=>h$3(InfoPanel))]),h$3(DropTransition,{appear:!0,delay:.28},()=>h$3(MarkdownContent))])}}),BlogHome=defineComponent({name:"BlogHome",setup(){return()=>h$3(BlogWrapper,()=>h$3(BlogHome$1))}}),articleType="",ArticleType=defineComponent({name:"ArticleType",setup(){const u=useRouteLocale(),m=useThemeLocaleData(),b=useRoute(),$=useArticles(),T=useStars(),j=computed(()=>{const U=m.value.blogLocales;return[{text:U.all,path:$.value.path},{text:U.star,path:T.value.path},...[].map(({key:G,path:W})=>({text:U[G],path:W.replace(/^\//,u.value)}))]});return()=>h$3("ul",{class:"article-type-wrapper"},j.value.map(U=>h$3("li",{class:["article-type",{active:U.path===b.path}]},h$3(RouterLink,{to:U.path},()=>U.text))))}}),BlogType=defineComponent({name:"BlogPage",setup(){const u=C(),m=usePageFrontmatter(),b=useRoute(),$=useArticles(),T=useStars(),j=computed(()=>{const{key:U="",type:G}=m.value.blog||{};return U==="star"?T.value.items:G==="type"&&U?u.value.items:$.value.items});return()=>h$3(BlogWrapper,()=>h$3("div",{class:"page blog"},h$3("div",{class:"blog-page-wrapper"},[h$3("main",{class:"blog-main",id:"main-content"},[h$3(DropTransition,()=>h$3(ArticleType)),h$3(DropTransition,{appear:!0,delay:.24},()=>h$3(ArticleList,{key:b.path,items:j.value}))]),h$3(DropTransition,{delay:.16},()=>h$3(InfoPanel))])))}}),timelineItems="",TimelineItems=defineComponent({name:"TimelineItems",setup(){const u=useBlogOptions(),m=useThemeLocaleData(),b=useTimelines(),$=computed(()=>u.value.timeline||m.value.blogLocales.timelineTitle),T=computed(()=>b.value.config.map(({year:j})=>({title:j.toString(),level:2,slug:j.toString(),children:[]})));return()=>h$3("div",{class:"timeline-wrapper"},h$3("ul",{class:"timeline-content"},[h$3(DropTransition,()=>h$3("li",{class:"motto"},$.value)),h$3(TOC,{items:T.value}),...b.value.config.map(({year:j,items:U},G)=>h$3(DropTransition,{appear:!0,delay:.08*(G+1),type:"group"},()=>[h$3("h3",{key:"title",id:j,class:"timeline-year-title"},h$3("span",j)),h$3("li",{key:"content",class:"timeline-year-list"},[h$3("ul",{class:"timeline-year-wrapper"},U.map(({date:W,info:Z,path:Y})=>h$3("li",{class:"timeline-item"},[h$3("span",{class:"timeline-date"},W),h$3(RouterLink,{class:"timeline-title",to:Y},()=>Z.title)])))])]))]))}}),Timeline=defineComponent({name:"Timeline",components:{ArticleType,CategoryList,TagList},setup(){return()=>h$3(BlogWrapper,()=>h$3("div",{class:"page blog"},h$3("div",{class:"blog-page-wrapper"},[h$3("main",{class:"blog-main",id:"main-content"},[h$3(DropTransition,{appear:!0,delay:.24},()=>h$3(TimelineItems))]),h$3(DropTransition,{delay:.16},()=>h$3(InfoPanel))])))}}),layout="",slidePage="",d=()=>h$3(P$3,{name:"back"},()=>h$3("path",{d:"M1014.749 449.156v125.688H260.626l345.64 345.64-89.239 89.237L19.307 512l497.72-497.721 89.238 89.238-345.64 345.64h754.124z"})),h=()=>h$3(P$3,{name:"home"},()=>h$3("path",{d:"M780.106 420.978L506.994 147.866 233.882 420.978h.045v455.11H780.06v-455.11h.046zm90.977 90.976V876.09a91.022 91.022 0 01-91.023 91.022H233.927a91.022 91.022 0 01-91.022-91.022V511.954l-67.22 67.175-64.307-64.307 431.309-431.31c35.498-35.498 93.115-35.498 128.614 0l431.309 431.31-64.307 64.307L871.083 512z"}));var f=defineComponent({name:"SlidePage",setup(){const u=useRouter(),m=ref(!1),b=ref(),$=()=>{m.value=!m.value},T=()=>{m.value=!1},j=()=>{T(),window.history.go(-1)},U=()=>{T(),u.push("/")};return onClickOutside(b,T),()=>h$3("div",{class:"presentation"},[h$3(Content),h$3("div",{ref:b,class:["menu",{active:m.value}]},[h$3("button",{class:"menu-button",onClick:()=>$()},h$3("span",{class:"icon"})),h$3("button",{class:"back-button",onClick:()=>j()},h$3(d)),h$3("button",{class:"home-button",onClick:()=>U()},h$3(h))])])}});const clientConfig11=defineClientConfig({enhance:({app:u,router:m})=>{const{scrollBehavior:b}=m.options;m.options.scrollBehavior=async(...$)=>(await useScrollPromise().wait(),b(...$)),injectDarkMode(u),u.component("BloggerInfo",BloggerInfo)},setup:()=>{setupDarkMode(),setupSidebarItems(),setupBlog()},layouts:{Layout,NotFound,BlogCategory,BlogHome,BlogType,Timeline,Slide:f}}),clientConfigs=[clientConfig0,clientConfig1,clientConfig2,a$2,clientConfig4,clientConfig5,clientConfig6,s,M$2,clientConfig9,y,clientConfig11],pagesRoutes=[["v-184f4da6","/intro.html",{a:"Xss",d:"2023-12-11T00:00:00.000Z",l:"2023年12月11日",c:["使用指南"],g:["页面配置","使用指南"],u:!0,e:`<h1> 介绍页</h1>
<h1> 个人信息</h1>
<p>👋 <strong>姓名：</strong> xss | <strong>性别：</strong> 男 | <strong>出生日期：</strong> 2001年07月29日 | <strong>国籍：</strong> 中国</p>
<h2> 联系方式</h2>
<p>📧 <strong>电子邮件：</strong> <a href="mailto:xud0687@gmail.com">xud0687@gmail.com</a> | 🌐 <strong>GitHub：</strong> <a href="https://github.com/xssctt" target="_blank" rel="noopener noreferrer">github.com/xssctt</a> | 💼 <strong>LinkedIn：</strong> <a href="https://linkedin.com/in/xssctt" target="_blank" rel="noopener noreferrer">linkedin.com/in/xssctt</a>| 📱 <strong>iPhone：</strong> 13523773853</p>`,r:{minutes:1.75,words:526},y:"a",title:"个人信息",i:"info"},["/intro","/intro.md"]],["v-8daa1a0e","/",{y:"h",title:"博客主页",i:"home"},["/index.html","/README.md"]],["v-2e3eac9e","/slides.html",{e:`<!-- markdownlint-disable MD024 MD033 MD051 -->
`,r:{minutes:4.51,words:1352},y:"s",title:"幻灯片页",i:"slides"},["/slides","/slides.md"]],["v-4e65ec78","/demo/disable.html",{c:["使用指南"],g:["禁用"],e:`<p>你可以通过设置页面的 Frontmatter，在页面禁用功能与布局。</p>
`,r:{minutes:.42,words:127},y:"a",title:"布局与功能禁用",i:"config"},["/demo/disable","/demo/disable.md"]],["v-c151bf32","/demo/encrypt.html",{c:["使用指南"],g:["文章加密"],e:`<h1> 密码加密的文章</h1>
<p>实际的文章内容。</p>
<p>段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字。</p>
<p>段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字。</p>
`,r:{minutes:.52,words:156},y:"a",title:"密码加密的文章",i:"lock"},["/demo/encrypt","/demo/encrypt.md"]],["v-438ffe52","/demo/markdown.html",{c:["使用指南"],g:["Markdown"],e:`<p>VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。</p>
<p>你应该创建和编写 Markdown 文件，以便 VuePress 可以根据文件结构将它们转换为不同的页面。</p>
`,r:{minutes:3.7,words:1109},y:"a",title:"Markdown 展示",i:"markdown"},["/demo/markdown","/demo/markdown.md"]],["v-6e19edb7","/demo/page.html",{a:"Ms.Hope",d:"2020-01-01T00:00:00.000Z",l:"2020年1月1日",c:["使用指南"],g:["页面配置","使用指南"],u:!0,e:`<p><code>more</code> 注释之前的内容被视为文章摘要。</p>
`,r:{minutes:1.53,words:459},y:"a",title:"页面配置",i:"page"},["/demo/page","/demo/page.md"]],["v-1473bf53","/demo/",{c:["使用指南"],e:`<h2> 目录</h2>
<ul>
<li>
<p><a href="/demo/markdown.html" target="blank">Markdown 展示</a></p>
</li>
<li>
<p><a href="/demo/page.html" target="blank">页面展示</a></p>
</li>
<li>
<p><a href="/demo/disable.html" target="blank">禁用展示</a></p>
</li>
<li>
<p><a href="/demo/encrypt.html" target="blank">加密展示</a></p>
</li>
</ul>`,r:{minutes:.13,words:40},y:"a",title:"主要功能与配置演示",i:"discover"},["/demo/index.html","/demo/README.md"]],["v-2bc6566a","/posts/cherry.html",{d:"2022-01-09T00:00:00.000Z",l:"2022年1月9日",c:["樱桃"],g:["红","小","圆"],e:`<h1> 樱桃</h1>
<h2> 标题 2</h2>
<p>这里是内容。</p>
<h3> 标题 3</h3>
<p>这里是内容。</p>
`,r:{minutes:.1,words:31},y:"a",title:"樱桃",i:"edit"},["/posts/cherry","/posts/cherry.md"]],["v-24b7c48d","/posts/dragonfruit.html",{d:"2022-01-10T00:00:00.000Z",l:"2022年1月10日",c:["火龙果","水果"],g:["红","大"],e:`<h1> 火龙果</h1>
<h2> 标题 2</h2>
<p>这里是内容。</p>
<h3> 标题 3</h3>
<p>这里是内容。</p>
`,r:{minutes:.11,words:34},y:"a",title:"火龙果",i:"edit"},["/posts/dragonfruit","/posts/dragonfruit.md"]],["v-f0ec4556","/posts/strawberry.html",{d:"2022-01-11T00:00:00.000Z",l:"2022年1月11日",c:["水果","草莓"],g:["红","小"],e:`<h1> 草莓</h1>
<h2> 标题 2</h2>
<p>这里是内容。</p>
<h3> 标题 3</h3>
<p>这里是内容。</p>
`,r:{minutes:.11,words:32},y:"a",title:"草莓",i:"edit"},["/posts/strawberry","/posts/strawberry.md"]],["v-df8b6e0c","/posts/tomato.html",{d:"2022-01-12T00:00:00.000Z",l:"2022年1月12日",c:["蔬菜"],g:["红","圆"],u:!0,e:`<h1> 番茄</h1>
<h2> 标题 2</h2>
<p>这里是内容。</p>
<h3> 标题 3</h3>
<p>这里是内容。</p>
`,r:{minutes:.11,words:34},y:"a",title:"番茄",i:"edit"},["/posts/tomato","/posts/tomato.md"]],["v-6c7272c8","/other/demo/1.html",{a:"xss",d:"2023-12-11T00:00:00.000Z",l:"2023年12月11日",c:["demo"],g:["demo"],e:`<hr>
<h1> OrderInfoService</h1>
<hr>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>javaclimb<span class="token punctuation">.</span>xshopping<span class="token punctuation">.</span>service</span><span class="token punctuation">;</span>


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
        <span class="token class-name">String</span> orderId<span class="token operator">=</span>userId<span class="token operator">+</span> <span class="token class-name">DateUtil</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">"yyyyMMddHHmm"</span><span class="token punctuation">)</span><span class="token operator">+</span> <span class="token class-name">RandomUtil</span><span class="token punctuation">.</span><span class="token function">randomNumbers</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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

        <span class="token keyword">if</span> <span class="token punctuation">(</span>state<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">"待发货"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//校验余额</span>
            <span class="token class-name">Double</span> account<span class="token operator">=</span>user<span class="token punctuation">.</span><span class="token function">getAccount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Double</span> totalPrice<span class="token operator">=</span>order<span class="token punctuation">.</span><span class="token function">getTotalprice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>account <span class="token operator">&lt;</span> totalPrice<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">CustomException</span><span class="token punctuation">(</span><span class="token string">"-1"</span><span class="token punctuation">,</span><span class="token string">"账户余额不足"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            user<span class="token punctuation">.</span><span class="token function">setAccount</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span><span class="token function">getAccount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> order<span class="token punctuation">.</span><span class="token function">getTotalprice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//修改用户余额</span>
            userInfoService<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>state<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">"已退货"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
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
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">CustomException</span><span class="token punctuation">(</span><span class="token string">"1001"</span><span class="token punctuation">,</span><span class="token string">"session已失效，请重新登录"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:5.75,words:1725},y:"a",title:"demo",i:"page"},["/other/demo/1","/other/demo/1.md"]],["v-6908c18a","/other/demo/2.html",{a:"xss",d:"2023-12-11T00:00:00.000Z",l:"2023年12月11日",c:["学习文档"],g:["文档"],e:`<h1> SpringBoot其他框架</h1>
<p>通过了解其他的SpringBoot框架，我们就可以在我们自己的Web服务器上实现更多更高级的功能。</p>
<h2> 邮件发送：Mail</h2>
<p>我们在注册很多的网站时，都会遇到邮件或是手机号验证，也就是通过你的邮箱或是手机短信去接受网站发给你的注册验证信息，填写验证码之后，就可以完成注册了，同时，网站也会绑定你的手机号或是邮箱。</p>
<p>那么，像这样的功能，我们如何实现呢？SpringBoot已经给我们提供了封装好的邮件模块使用：</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-mail<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:30.05,words:9015},y:"a",title:"JPA and SWAGGER",i:"page"},["/other/demo/2","/other/demo/2.md"]],["v-e9ddbd06","/other/git/1.html",{a:"xss",d:"2023-12-11T00:00:00.000Z",l:"2023年12月11日",c:["git"],g:["git","git命令"],e:`<div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code>
git init
git add README.md
git commit -m <span class="token string">"first commit"</span>
git branch -M main
git remote add origin https://github.com/xssctt/--
git push -u origin main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:17.46,words:5238},y:"a",title:"git文档",i:"page"},["/other/git/1","/other/git/1.md"]],["v-ae5e1d4e","/other/linux/3.html",{a:"xss",d:"2023-12-11T00:00:00.000Z",l:"2023年12月11日",c:["linux"],g:["linux","问题"],e:`<p>已经进行了批改:</p>
<ol>
<li>
<p>Linux系统的内核是() c</p>
<p>A. Windows B. Unix C. Linux D. MacOS</p>
</li>
<li>
<p>Linux系统的缺省Shell是()a</p>
<p>A. bash B. dash C. ksh D. tcsh</p>
</li>
<li>
<p>用来查看Linux系统版本的命令是()d</p>
<p>A. uname B. uname -a C. uname -r D. uname -v</p>
</li>
<li>
<p>用来查看Linux系统上运行的进程的命令是() a</p>
<p>A. ps B. top C. htop D. atop</p>
</li>
<li>
<p>用来查看Linux系统上安装的软件包信息的命令是()d
A. rpm -qa B. dpkg -l C. yum list installed D. apt list --installed</p>
</li>
<li>
<p>用来搜索文件内容的命令是() D</p>
<p>A. find B. locate C. which D. grep</p>
</li>
<li>
<p>用来查看文件或目录权限的命令是()a</p>
<p>A. ls -l B. ls -a C. ls -al D. ls -la</p>
</li>
<li>
<p>用来切换用户的命令是() A</p>
<p>A. su B. sudo C. switch D. login</p>
</li>
<li>
<p>用来查看磁盘使用情况的命令是()a</p>
<p>A. df -h B. du -h C. free -h D. diskusage</p>
</li>
<li>
<p>用来查看内存使用情况的命令是()c</p>
<p>A. top B. htop C. free -m D. vmstat</p>
</li>
<li>
<p>用来查看网络接口信息的命令是()b</p>
<p>A. ip addr B. ifconfig C. ip link D. iwconfig</p>
</li>
<li>
<p>用来查看当前登录用户的命令是()b</p>
<p>A. id B. whoami C. users D. who</p>
</li>
<li>
<p>用来查看系统运行时间的命令是() a</p>
<p>A. uptime B. runtime C. sysinfo D. time</p>
</li>
<li>
<p>用来查看CPU信息的命令是() C</p>
<p>A. cpuinfo B. procinfo C. lscpu D. cpudetails</p>
</li>
<li>
<p>用来查看系统内核版本的命令是() b</p>
<p>A. kernel -v B. uname -r C. kernel -r D. lsb_release -a</p>
</li>
<li>
<p>用来重启系统的命令是()a</p>
<p>A. reboot B. restart C. reload D. shutdown -r now</p>
</li>
<li>
<p>用来关闭系统的命令是() b</p>
<p>A. poweroff B. shutdown C. halt D. turnoff</p>
</li>
<li>
<p>用来终止进程的命令是() a</p>
<p>A. kill B. end C. terminate D. stop</p>
</li>
<li>
<p>用来查看端口使用情况的命令是() B</p>
<p>A. ss -tplun B. netstat -plunt C. ports D. netstat -anp</p>
</li>
<li>
<p>用来设置系统时间的命令是() B</p>
<p>A. time B. date C. clock D. timestamp</p>
</li>
<li>
<p>查看网络连接状态的命令是() b</p>
<p>A. netstat B. ping C. traceroute D. dig</p>
</li>
<li>
<p>查看网络服务监听端口的命令是()b
A. ss B. netstat C. lsof D. nmap</p>
</li>
<li>
<p>查看进程详细信息的命令是()a</p>
<p>A. ps B. pidof C. pstree D. pgrep</p>
</li>
<li>
<p>kill进程的语法是() c</p>
<p>A. kill -9 pid B. kill -15 pid C. kill pid D. pkill process_name</p>
</li>
<li>
<p>定义环境变量的命令是() a</p>
<p>A. export B. env C. set D. source</p>
</li>
<li>
<p>查看环境变量的命令是()A</p>
<p>A. env B. set C. export D. echo</p>
</li>
<li>
<p>查看系统引导日志的命令是()C</p>
<p>A. dmesg B. bootlog C. journalctl D. syslog</p>
</li>
<li>
<p>查看系统登录日志的命令是()</p>
<p>查看系统登录日志的命令是 journalctl 或 cat /var/log/secure。</p>
</li>
<li>
<p>查看磁盘分区信息的命令是()b</p>
<p>A. fdisk B. df C. du D. partprobe</p>
</li>
<li>
<p>统计文件行数的命令是()a
A. wc -l B. count C. numlines D. rows</p>
</li>
<li>
<p>查找文件和目录的命令是()a</p>
<p>A. find B. which C. whereis D. locate</p>
</li>
<li>
<p>解压gzip文件的参数是() b</p>
<p>A. -z B. -x C. -d D. -u</p>
</li>
<li>
<p>创建软链接的命令是()A
A. ln -s B. link C. symlink D. softlink</p>
</li>
<li>
<p>显示日历的命令是() c</p>
<p>A. calendar B. date C. cal D. time</p>
</li>
<li>
<p>创建用户的命令是() A</p>
<p>A. useradd B. adduser
C. usercreate D. addnewuser</p>
</li>
<li>
<p>删除用户的命令是()A</p>
<p>A. userdel B. deluser C. rmuser D. userremove</p>
</li>
<li>
<p>显示登录用户的命令是()a</p>
<p>A. who B. users C. logins D. loggedin</p>
</li>
<li>
<p>查看文件内容的命令是()c</p>
<p>A. more B. less C. cat D. head</p>
</li>
<li>
<p>移动文件和目录的命令是()a
A. mv B. move C. cut D. changes</p>
</li>
<li>
<p>删除文件和目录的命令是()a</p>
<p>A. rm B. del C. remove D. erase</p>
</li>
<li>
<p>用来查看文件或目录占用空间的命令是() A</p>
<p>A. du B. df C. ls D. dir</p>
</li>
<li>
<p>用来比较两个文件的不同的命令是()b</p>
<p>A. diff B. cmp C. comm D. patch</p>
</li>
<li>
<p>用来打包文件或目录的命令是()c</p>
<p>A. zip B. gzip C. tar D. compress</p>
</li>
<li>
<p>用来复制文件或目录的命令是()a
A. cp B. copy C. replicate D. duplicate</p>
</li>
<li>
<p>用来删除文件或目录的命令是() a</p>
<p>A. rm B. del C. remove D. erase</p>
</li>
<li>
<p>用来终止进程的信号是() a</p>
<p>A. SIGTERM B. SIGKILL C. SIGSTOP D. SIGQUIT</p>
</li>
<li>
<p>用来查看进程信号的命令是() d</p>
<p>A. kill B. pkill C. pgrep D. ps</p>
</li>
<li>
<p>用来创建用户组的命令是() a</p>
<p>A. groupadd B. addgroup C. newgroup D. usergroup</p>
</li>
<li>
<p>用来查看系统运行级别的命令是()D
A. runlevel B. init C. telinit D. systemctl get-default</p>
</li>
<li>
<p>用来挂载文件系统的命令是() a</p>
<p>A. mount B. mnt C. fstab D. mountdev</p>
</li>
<li>
<p><strong>用来</strong>写入数据到文件末尾的命令是() a</p>
<p><strong>A. echo &gt;&gt; B. append C. tail -f D. sync</strong></p>
</li>
<li>
<p>用来查找命令的手册页的命令是() c</p>
<p>A. whatis B. help C. man D. info</p>
</li>
<li>
<p>用来显示文件最后几行的命令是()a
A. tail B. head C. last D. final</p>
</li>
<li>
<p>用来展开缩写的命令是() b</p>
<p>A. expand B. unabbreviate C. echo D. print</p>
</li>
<li>
<p>用来打印文件的命令是()a</p>
<p>A. cat B. print C. echo D. less</p>
</li>
<li>
<p>用来对文件进行排序的命令是()a</p>
<p>A. sort B. order C. arrange D. sorted</p>
</li>
<li>
<p>用来展示文件内容的分页工具是() b</p>
<p>A. more B. less C. pager D. page</p>
</li>
<li>
<p>用来切换目录的命令是() a</p>
<p>A. cd B. chdir C. switchdir D. pushd</p>
</li>
<li>
<p>用来查看网卡的物理地址的命令是()a</p>
<p>A. ifconfig B. hwinfo --netcard C. lspci D. lshw -class network</p>
</li>
<li>
<p>用来修改文件权限的命令是()a
A. chmod B. permission C. acl D. chown</p>
</li>
<li>
<p>用来查看网关地址的命令是() b</p>
<p>A. route -n B. ip route C. netstat -nr D. traceroute</p>
</li>
<li>
<p>用来查看进程启动时间的命令是()a</p>
<p>A. ps B. pstime C. psr D. top</p>
</li>
<li>
<p>用来远程登录的命令是()a
A. ssh B. telnet C. rlogin D. remote</p>
</li>
<li>
<p>用来下载文件的命令是()b</p>
<p>A. curl B. wget C. fetch D. download</p>
</li>
<li>
<p>用来创建链接文件的命令是() a</p>
<p>A. ln B. link C. symlink D. hardlink</p>
</li>
<li>
<p>用来查看当前工作目录的命令是()a
A. pwd B. cwd C. pwdd D. currentdir</p>
</li>
<li>
<p>用来查看存储设备的使用信息的是() c</p>
<p>A. lsblk B. fdisk C. df D. du</p>
</li>
<li>
<p>用来编辑文本文件的命令是()a</p>
<p>A. vim B. vi C. nano D. pico</p>
</li>
<li>
<p>用来解压文件的是()c
A. unzip B. gunzip C. tar D. uncompress</p>
</li>
<li>
<p>用来显示当前日期和时间的命令是()a</p>
<p>A. date B. cal C. time D. clock</p>
</li>
<li>
<p>用来查看内存使用情况的命令是() a</p>
<p>A. free B. vmstat C. top D. /proc/meminfo</p>
</li>
<li>
<p>查看当前登录用户的UID是()b
A. id -u B. whoami C. echo $UID D. uid</p>
</li>
<li>
<p>查看当前登录用户的组ID是()</p>
<p>A. id -g B. groups C. echo $GID D. gid</p>
</li>
<li>
<p>查看本机IP地址的命令是()
A. ip addr B. ifconfig C. hostname -i D. dig +short <a href="http://myip.opendns.com" target="_blank" rel="noopener noreferrer">myip.opendns.com</a> @resolver1.opendns.com</p>
</li>
<li>
<p>查看网络连接状态的命令是()</p>
<p>A. ping B. netstat C. traceroute D. route</p>
</li>
<li>
<p>查看网络接口流量统计的命令是()</p>
<p>A. ifconfig B. netstat -i C. ip -s link D. iwconfig</p>
</li>
<li>
<p>给文件加密码的命令是()c
A. passwd B. encrypt C. gpg D. chpasswd</p>
</li>
<li>
<p>查看代理设置的命令是()</p>
<p>A. env | grep -i proxy B. proxychains C. settings D. connections</p>
</li>
<li>
<p>查看端口使用的命令组合是()b</p>
<p>A. lsof -i B. netstat -an C. ss -tpl D. nmap -sT</p>
</li>
<li>
<p>优雅关闭系统的命令是()</p>
<p>A. shutdown -h now B. halt C. poweroff D. init 0</p>
</li>
<li>
<p>强制关闭系统的命令是()</p>
<p>A. poweroff -f B. reboot -f C. shutdown -h 0 D. init 6</p>
</li>
<li>
<p>临时禁用网络接口的命令是()
A. ifdown B. ifconfig down C. ip link set down D. nmcli con down</p>
</li>
<li>
<p>查看防火墙规则的命令是()</p>
<p>A. iptables -L B. firewall-cmd --list-all C. ufw status D. pfctl -s rules</p>
</li>
<li>
<p>查看进程树的命令是()</p>
<p>A. pstree B. pgrep -a C. ps auxf D. top -H</p>
</li>
<li>
<p>解压zip文件的参数是()</p>
<p>A. -z B. -x
C. -d D. -u</p>
</li>
<li>
<p>重复执行命令的参数是()</p>
<p>A. -r B. --repeat C. -n D. -l</p>
</li>
<li>
<p>查看文本文件的前几行的参数是()</p>
<p>A. head -n 10 B. tail -n 10 C. less -N 10 D. cat -n 10</p>
</li>
<li>
<p>创建隐藏文件的参数是()</p>
<p>A. --hide B. -a C. .filename D. filename.</p>
</li>
<li>
<p>递归创建目录的参数是()
A. -r B. -p C. --recursive D. --parents</p>
</li>
<li>
<p>按大小排序的命令参数是()</p>
<p>A. sort -k B. sort -S C. sort -n D. sort -s</p>
</li>
<li>
<p>查找文件修改时间的命令参数是()</p>
<p>A. find -mmin B. find -mtime C. locate -t D. whereis -m</p>
</li>
<li>
<p>查找文件类型的参数是()</p>
<p>A. -type B. -name C. -exec
D. -ok</p>
</li>
<li>
<p>统计字符数的参数是()</p>
<p>A. wc -m B. wc -l C. wc -c
D. wc -w</p>
</li>
<li>
<p>搜索命令历史的参数是()</p>
<p>A. history | grep B. ctrl+r C. ~/.bash_history D. ~/.history</p>
</li>
<li>
<p>强制删除目录的参数是()
A. rm -rf B. rmdir C. deltree D. rm -f</p>
</li>
<li>
<p>允许所有主机访问的防火墙规则是()</p>
<p>A. -A INPUT -s 0/0 -j ACCEPT B. -I INPUT -s 0/0 -j ACCEPT
C. -A OUTPUT -d 0/0 -j ACCEPT D. -A FORWARD -d 0/0 -j ACCEPT</p>
</li>
<li>
<p>设置环境变量的命令是()</p>
<p>A. export B. setenv C. env D. ~/.bashrc</p>
</li>
<li>
<p>显示行号的命令参数是()</p>
<p>A. nl file B. cat -n file C. more -N file D. less -N file</p>
</li>
<li>
<p>比较目录的命令是()
A. diff B. comm C. cmp D. vimdiff</p>
</li>
<li>
<p>统计网络连接的命令是()</p>
<p>A. netstat -an | wc -l B. ip s | wc -l C. ss -s | wc -l D. ifconfig -s | wc -l</p>
</li>
<li>
<p>查看内核日志的命令是()</p>
<p>A. cat /var/log/messages B. dmesg C. journalctl
D. syslog</p>
</li>
<li>
<p>查找文件名的命令是()</p>
<p>A. locate B. find C. which D. whereis</p>
</li>
<li>
<p>显示10行的命令是()</p>
<p>A. head -n 10 B. head -10 C. top 10 D. top -n 10</p>
</li>
<li>
<p>显示文件类型的命令是() A. type B. file C. whatis D. info</p>
</li>
<li>
<p>监视日志文件的命令是() A. watch -d -n 0.5 tail /var/log/syslog B. tail -f /var/log/syslog C. more /var/log/syslog D. cat /var/log/syslog</p>
</li>
<li>
<p>归档日志文件的命令是()
A. gzip /var/log/messages B. bzip2 /var/log/syslog C. xz /var/log/syslog D. tar -cvzf logs.tar.gz /var/log/*.log</p>
</li>
<li>
<p>查看网络统计的命令是()
A. netstat -s B. ip -s link C. ifconfig -s D. iw dev</p>
</li>
<li>
<p>批量杀死进程的命令是() A. pkill process B. killall process C. kill -9 -1 D. xkill</p>
</li>
<li>
<p>查看文本文件的命令是() A. more B. less C. head D. cat</p>
</li>
<li>
<p>搜索文件内容的命令是() A. grep pattern files B. find . -name files C. locate files D. whereis files</p>
</li>
<li>
<p>查看配置文件的命令是()
A. cat config B. more config C. head config D. less config</p>
</li>
<li>
<p>统计文件个数的命令是()
A. ls /dir | wc -l B. find /dir -type f | wc -l C. count /dir/* D. du -a /dir | wc -l</p>
</li>
<li>
<p>下载文件的命令是() A. curl -O url B. wget url C. fetch url D. scp user@host:file .</p>
</li>
<li>
<p>复制文件或目录的命令是() A. cp B. copy C. duplicate D. clone</p>
</li>
<li>
<p>复制时保留属性的命令参数是()a
A. -p B. -a C. -r D. -R</p>
</li>
<li>
<p>追加输出的命令是()a</p>
<p>A. &gt;&gt; B. tee C. append D. out -a</p>
</li>
<li>
<p>强制删除文件的参数是()a
A. -f B. -r C. -d D. -q</p>
</li>
<li>
<p>安全删除文件的命令是() A. shred B. rm
C. del D. wipe</p>
</li>
</ol>`,r:{minutes:9.47,words:2841},y:"a",title:"linux问题",i:"page"},["/other/linux/3","/other/linux/3.md"]],["v-aaf46c10","/other/linux/4.html",{a:"xss",d:"2023-12-11T00:00:00.000Z",l:"2023年12月11日",c:["linux"],g:["linux","问题"],e:`<figure><img src="https://raw.githubusercontent.com/xssctt/typora_image/main/img/202310191452054.png" alt="image-20231019141823021" tabindex="0" loading="lazy"><figcaption>image-20231019141823021</figcaption></figure>
<figure><img src="https://raw.githubusercontent.com/xssctt/typora_image/main/img/202310191518588.png" alt="屏幕截图 2023-10-19 145539" tabindex="0" loading="lazy"><figcaption>屏幕截图 2023-10-19 145539</figcaption></figure>`,r:{minutes:11.15,words:3345},y:"a",title:"linux问题",i:"page"},["/other/linux/4","/other/linux/4.md"]],["v-23c9dff9","/other/io/1.html",{a:"xss",d:"2023-12-11T00:00:00.000Z",l:"2023年12月11日",c:["文件IO流"],g:["IO"],u:!0,e:`<h1> Java I/O</h1>
<p><strong>注意：<strong>这块会涉及到</strong>操作系统</strong>和<strong>计算机组成原理</strong>相关内容。</p>
<p>I/O简而言之，就是输入输出，那么为什么会有I/O呢？其实I/O无时无刻都在我们的身边，比如读取硬盘上的文件，网络文件传输，鼠标键盘输入，也可以是接受单片机发回的数据，而能够支持这些操作的设备就是I/O设备。</p>
<p>我们可以大致看一下整个计算机的总线结构：</p>
<figure><img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg2020.cnblogs.com%2Fblog%2F1896043%2F202005%2F1896043-20200507143508957-1866569205.jpg&amp;refer=http%3A%2F%2Fimg2020.cnblogs.com&amp;app=2002&amp;size=f9999,10000&amp;q=a80&amp;n=0&amp;g=0n&amp;fmt=jpeg?sec=1637387700&amp;t=e6a5ade66f8e4af2ac64d12e6dd77dec" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>`,r:{minutes:19.05,words:5714},y:"a",title:"数据IO",i:"page"},["/other/io/1","/other/io/1.md"]],["v-257eb898","/other/io/2.html",{a:"xss",d:"2023-12-11T00:00:00.000Z",l:"2023年12月11日",c:["demo"],g:["demo"],e:`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">free300<span class="token punctuation">.</span>demo<span class="token punctuation">.</span></span><span class="token class-name">Stream</span><span class="token punctuation">;</span>



<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FileStream</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>

        <span class="token class-name">String</span> <span class="token constant">PATH</span><span class="token operator">=</span><span class="token string">"src/main/java/free300/demo/Stream/"</span><span class="token punctuation">;</span>


        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token constant">PATH</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">listRoots</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token class-name">File</span> file<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token constant">PATH</span><span class="token operator">+</span><span class="token string">"demo.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

       <span class="token comment">// file.renameTo(new File(PATH+"demo1.txt"));</span>



        <span class="token keyword">if</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"存在"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">canRead</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"可读"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">canWrite</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"可写"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

<span class="token comment">//        File file1=new File(PATH+"delete/deletedemo.txt");</span>
<span class="token comment">//</span>
<span class="token comment">//        if(file1.delete()){</span>
<span class="token comment">//            System.out.println("删除成功");</span>
<span class="token comment">//        }else {</span>
<span class="token comment">//            System.out.println("删除失败");</span>
<span class="token comment">//        }</span>

        <span class="token class-name">File</span> file2<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token constant">PATH</span><span class="token operator">+</span><span class="token string">"delete"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span>file2<span class="token punctuation">.</span><span class="token function">isDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"文件夹"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"不是文件夹"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>


        <span class="token class-name">File</span> file3<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token constant">PATH</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"长度"</span><span class="token operator">+</span>file3<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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



        <span class="token class-name">FileOutputStream</span> outputStream<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token constant">PATH</span><span class="token operator">+</span><span class="token string">"dt.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">String</span> demo<span class="token operator">=</span><span class="token string">"aweiyijingsiloigvb哦苹果v抵抗"</span><span class="token punctuation">;</span>
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


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.58,words:474},y:"a",title:"IOdemo",i:"page"},["/other/io/2","/other/io/2.md"]],["v-27339137","/other/io/3.html",{a:"xss",d:"2023-12-11T00:00:00.000Z",l:"2023年12月11日",c:["数据库"],g:["数据库","sql"],e:`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">free300<span class="token punctuation">.</span>demo<span class="token punctuation">.</span></span><span class="token class-name">Stream</span><span class="token punctuation">;</span>



<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FileStream</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>

        <span class="token class-name">String</span> <span class="token constant">PATH</span><span class="token operator">=</span><span class="token string">"src/main/java/free300/demo/Stream/"</span><span class="token punctuation">;</span>


        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token constant">PATH</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">listRoots</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token class-name">File</span> file<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token constant">PATH</span><span class="token operator">+</span><span class="token string">"demo.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

       <span class="token comment">// file.renameTo(new File(PATH+"demo1.txt"));</span>



        <span class="token keyword">if</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"存在"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">canRead</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"可读"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">canWrite</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"可写"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

<span class="token comment">//        File file1=new File(PATH+"delete/deletedemo.txt");</span>
<span class="token comment">//</span>
<span class="token comment">//        if(file1.delete()){</span>
<span class="token comment">//            System.out.println("删除成功");</span>
<span class="token comment">//        }else {</span>
<span class="token comment">//            System.out.println("删除失败");</span>
<span class="token comment">//        }</span>

        <span class="token class-name">File</span> file2<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token constant">PATH</span><span class="token operator">+</span><span class="token string">"delete"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span>file2<span class="token punctuation">.</span><span class="token function">isDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"文件夹"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"不是文件夹"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>


        <span class="token class-name">File</span> file3<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token constant">PATH</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"长度"</span><span class="token operator">+</span>file3<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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



        <span class="token class-name">FileOutputStream</span> outputStream<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token constant">PATH</span><span class="token operator">+</span><span class="token string">"dt.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">String</span> demo<span class="token operator">=</span><span class="token string">"aweiyijingsiloigvb哦苹果v抵抗"</span><span class="token punctuation">;</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.54,words:461},y:"a",title:"数据库",i:"page"},["/other/io/3","/other/io/3.md"]],["v-449df5bb","/other/mq/1.html",{a:"xss",d:"2023-12-11T00:00:00.000Z",l:"2023年12月11日",c:["MQ"],g:["MQ"],e:`<p>消息队列MQ</p>
<p>常见的消息队列有：</p>
<ul>
<li>ActiveMQ</li>
<li>RabbitMQ</li>
<li>Kafka</li>
<li>RocketMQ</li>
</ul>
<p>接下来，我们主要掌握 RabbitMQ，官方文档 <a href="https://www.rabbitmq.com/" target="_blank" rel="noopener noreferrer">https://www.rabbitmq.com/</a></p>
<p>安装方式，可以选择 Docker 安装，或 二进制包安装</p>
<p>如果用 Docker 安装：</p>`,r:{minutes:3.53,words:1060},y:"a",title:"MQ",i:"page"},["/other/mq/1","/other/mq/1.md"]],["v-4652ce5a","/other/mq/2.html",{a:"xss",d:"2023-12-11T00:00:00.000Z",l:"2023年12月11日",c:["MQ"],g:["MQ"],e:`<p>public class demo {
public static void main(String[] args) throws IOException, TimeoutException {</p>
<pre><code>    publish1();
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
</code></pre>`,r:{minutes:2.6,words:780},y:"a",title:"MQ",i:"page"},["/other/mq/2","/other/mq/2.md"]],["v-4807a6f9","/other/mq/3.html",{a:"xss",d:"2023-12-11T00:00:00.000Z",l:"2023年12月11日",c:["MQ"],g:["MQ"],e:`<figure><img src="https://s2.loli.net/2023/03/08/9a2q4ZBuWxJs861.jpg" alt="image-20220415163559986" tabindex="0" loading="lazy"><figcaption>image-20220415163559986</figcaption></figure>
<h1> 消息队列</h1>
<p>经过前面的学习，我们已经了解了我们之前的技术在分布式环境下的应用，接着我们来看最后一章的内容。</p>
<p>那么，什么是消息队列呢？</p>
<p>我们之前如果需要进行远程调用，那么一般可以通过发送HTTP请求来完成，而现在，我们可以使用第二种方式，就是消息队列，它能够将发送方发送的信息放入队列中，当新的消息入队时，会通知接收方进行处理，一般消息发送方称为生产者，接收方称为消费者。</p>`,r:{minutes:38.52,words:11555},y:"a",title:"MQ",i:"page"},["/other/mq/3","/other/mq/3.md"]],["v-49bc7f98","/other/mq/4.html",{a:"xss",d:"2023-12-11T00:00:00.000Z",l:"2023年12月11日",c:["MQ"],g:["MQ"],e:`<p>欢迎使用Rabbittemplate
Rabbittemplate介绍
RabbitTemplate是Spring AMQP中的核心组件之一。它提供了一组方法来与RabbitMQ进行交互。以下是RabbitTemplate的所有方法的详细描述：</p>
<p>send：将消息发送到指定的交换机和路由键中。</p>
<p>convertAndSend：将Java对象转换为消息，然后将其发送到指定的交换机和路由键中。</p>
<p>sendAndReceive：发送一个请求消息并接收一个响应消息。</p>
<p>convertSendAndReceive：将Java对象转换为请求消息，发送请求消息，并接收响应消息。</p>`,r:{minutes:3.82,words:1147},y:"a",title:"MQ",i:"page"},["/other/mq/4","/other/mq/4.md"]],["v-4b715837","/other/mq/5.html",{a:"xss",d:"2023-12-11T00:00:00.000Z",l:"2023年12月11日",c:["MQ"],g:["MQ"],e:`<pre><code>@SpringBootTest
class Springboot3ApplicationTests {
@Resource
DataSource dataSource;

@Resource
IUserService userService;

@Resource
RedisTemplate&lt;String,Object&gt; redisTemplate;

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
</code></pre>`,r:{minutes:2.56,words:767},y:"a",title:"MQ",i:"page"},["/other/mq/5","/other/mq/5.md"]],["v-4d2630d6","/other/mq/6.html",{a:"xss",d:"2023-12-11T00:00:00.000Z",l:"2023年12月11日",c:["MQ"],g:["MQ"],e:`<pre><code>@Configuration
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
</code></pre>`,r:{minutes:2.37,words:712},y:"a",title:"MQ",i:"page"},["/other/mq/6","/other/mq/6.md"]],["v-4edb0975","/other/mq/7.html",{a:"xss",d:"2023-12-11T00:00:00.000Z",l:"2023年12月11日",c:["MQ"],g:["MQ"],e:`<pre><code>@Component  //注册为Bean
public class TestListener {
//---------------------------------------------------------------------------------

@RabbitListener(queues = "hq")   //定义此方法为队列yyds的监听器，一旦监听到新的消息，就会接受并处理
public void test(Message message){
    System.out.println("test: "+new String(message.getBody()));
}


//---------------------------------------------------------------------------------
</code></pre>`,r:{minutes:1.76,words:527},y:"a",title:"MQ",i:"page"},["/other/mq/7","/other/mq/7.md"]],["v-1975ed9a","/other/mybatis/3.html",{a:"xss",d:"2023-12-11T00:00:00.000Z",l:"2023年12月11日",c:["数据库"],g:["数据库","sql"],e:`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token namespace">mysql<span class="token punctuation">.</span>connector</span>

# 连接数据库
cnx <span class="token operator">=</span> mysql<span class="token punctuation">.</span>connector<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span>user<span class="token operator">=</span><span class="token char">'root'</span><span class="token punctuation">,</span> password<span class="token operator">=</span>'password'<span class="token punctuation">,</span>
                              host<span class="token operator">=</span>'<span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span>'<span class="token punctuation">,</span>
                              database<span class="token operator">=</span>'article_db'<span class="token punctuation">)</span>
cursor <span class="token operator">=</span> cnx<span class="token punctuation">.</span><span class="token function">cursor</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

# 获取总记录数  
query <span class="token operator">=</span> <span class="token string">"SELECT COUNT(*) FROM articles"</span>
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
query <span class="token operator">=</span> <span class="token string">"SELECT id, title, content, userid FROM articles LIMIT %s OFFSET %s"</span>
cursor<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span>query<span class="token punctuation">,</span> <span class="token punctuation">(</span>page_size<span class="token punctuation">,</span> offset<span class="token punctuation">)</span><span class="token punctuation">)</span>
current_page_data <span class="token operator">=</span> cursor<span class="token punctuation">.</span><span class="token function">fetchall</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

# 页面切换逻辑
<span class="token keyword">while</span> <span class="token class-name">True</span><span class="token operator">:</span>
    # 显示当前页数据
    <span class="token function">display_page</span><span class="token punctuation">(</span>current_page_data<span class="token punctuation">)</span>
    
    # 获取用户输入的页码
    page_num <span class="token operator">=</span> <span class="token function">input</span><span class="token punctuation">(</span><span class="token string">"请输入要跳转的页码(1-%d):"</span> <span class="token operator">%</span> total_pages<span class="token punctuation">)</span>
    page_num <span class="token operator">=</span> <span class="token keyword">int</span><span class="token punctuation">(</span>page_num<span class="token punctuation">)</span>
    <span class="token keyword">if</span> page_num <span class="token generics"><span class="token punctuation">&lt;</span> 1 or page_num <span class="token punctuation">&gt;</span></span> total_pages<span class="token operator">:</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"页码越界,请重新输入"</span><span class="token punctuation">)</span>
        <span class="token keyword">continue</span>

    # 计算偏移量
    offset <span class="token operator">=</span> <span class="token punctuation">(</span>page_num <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> page_size
    
    # 获取新一页数据
    cursor<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span>query<span class="token punctuation">,</span> <span class="token punctuation">(</span>page_size<span class="token punctuation">,</span> offset<span class="token punctuation">)</span><span class="token punctuation">)</span> 
    current_page_data <span class="token operator">=</span> cursor<span class="token punctuation">.</span><span class="token function">fetchall</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

# 关闭连接
cnx<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.08,words:323},y:"a",title:"数据库",i:"page"},["/other/mybatis/3","/other/mybatis/3.md"]],["v-1b2ac639","/other/mybatis/4.html",{a:"xss",d:"2023-12-11T00:00:00.000Z",l:"2023年12月11日",c:["wrapper","使用"],g:["wrapper","操作流"],e:`<h2> 前言：</h2>
<hr>
<p>通过<strong>调用构造方法</strong>返回一个LambdaQueryWrapper对象，在对象上使用<a href="https://www.cnblogs.com/salt-baked-universe/articles/17330628.html" target="_blank" rel="noopener noreferrer">链式编程</a>
、Lambda表达式和链式调用的方式，灵活地<strong>实现了SQL查询条件构造</strong>和简化了SQL查询代码的编写。</p>
<h2> 一个流程看懂</h2>
<p><strong>创建</strong>一个LambdaQueryWrapper对象 -&gt; 使用Lambda表达式或方法引用<strong>构造</strong>查询条件 -&gt; <strong>调用</strong>MyBatis-Plus提供的方法获取查询结果。</p>`,r:{minutes:10.64,words:3193},y:"a",title:"wrapper",i:"page"},["/other/mybatis/4","/other/mybatis/4.md"]],["v-1cdf9ed8","/other/mybatis/5.html",{a:"xss",d:"2023-12-11T00:00:00.000Z",l:"2023年12月11日",c:["wrapper"],g:["wrapper"],e:`<h1> 条件构造器</h1>
<figure><img src="/assets/icon/image-20231206173505662.png" alt="image-20231206173505662" tabindex="0" loading="lazy"><figcaption>image-20231206173505662</figcaption></figure>
<p>说明:</p>
<ul>
<li>以下出现的第一个入参<code>boolean condition</code>表示该条件<strong>是否</strong>加入最后生成的sql中，例如：query.like(StringUtils.isNotBlank(name), Entity::getName, name) .eq(age!=null &amp;&amp; age &gt;= 0, Entity::getAge, age)</li>
<li>以下代码块内的多个方法均为从上往下补全个别<code>boolean</code>类型的入参,默认为<code>true</code></li>
<li>以下出现的泛型<code>Param</code>均为<code>Wrapper</code>的子类实例(均具有<code>AbstractWrapper</code>的所有方法)</li>
<li>以下方法在入参中出现的<code>R</code>为泛型,在普通wrapper中是<code>String</code>,在<code>LambdaWrapper</code>中是<strong>函数</strong>(例:<code>Entity::getId</code>,<code>Entity</code>为实体类,<code>getId</code>为字段<code>id</code>的<strong>getter Method</strong>)</li>
<li>以下方法入参中的<code>R column</code>均表示数据库字段,当<code>R</code>具体类型为<code>String</code>时则为数据库字段名(<strong>字段名是数据库关键字的自己用转义符包裹!</strong>)而不是实体类数据字段名!!!</li>
<li>以下举例均为使用普通wrapper,入参为<code>Map</code>和<code>List</code>的均以<code>json</code>形式表现!</li>
<li>使用中如果入参的<code>Map</code>或者<code>List</code>为<strong>空</strong>,则不会加入最后生成的sql中!!!</li>
<li>有任何疑问就点开源码看,看不懂<strong>函数</strong>的<a href="https://www.jianshu.com/p/613a6118e2e0" target="_blank" rel="noopener noreferrer">点击我学习新知识(opens new window)</a></li>
</ul>`,r:{minutes:10.06,words:3017},y:"a",title:"条件构造wrapper详细使用",i:"page"},["/other/mybatis/5","/other/mybatis/5.md"]],["v-1e947777","/other/mybatis/6.html",{a:"xss",d:"2023-12-11T00:00:00.000Z",l:"2023年12月11日",c:["pageInfo","分页"],g:["pageInfo"],e:`<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pagination<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--                              preActive true 没有上一页         --&gt;</span>
                                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>page-item<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">v-bind:</span>class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{disabled:preActive}<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
                                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>page-link<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>javascript:void(0)<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">v-on:</span>click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>loadTable(pageInfo.pageNum-1)<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>上一页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
                                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>

                                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>page-item <span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
                                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>page-link<span class="token punctuation">"</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pageInfo.pageNum &gt;1 <span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>javascript:void(0)<span class="token punctuation">"</span></span>
                                    <span class="token attr-name"><span class="token namespace">v-on:</span>click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>loadTable(pageInfo.pageNum - 1)<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>{{pageInfo.pageNum - 1}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
                                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>

                                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>page-item disabled<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
                                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>page-link<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>javascript:void(0)<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>{{pageInfo.pageNum}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
                                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>

                                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>page-item <span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
                                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>page-link<span class="token punctuation">"</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pageInfo.hasNextPage<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>javascript:void(0)<span class="token punctuation">"</span></span>
                                       <span class="token attr-name"><span class="token namespace">v-on:</span>click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>loadTable(pageInfo.pageNum + 1)<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>{{pageInfo.pageNum + 1}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
                                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>

                                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>page-item<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">v-bind:</span>class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{disabled:nextActive}<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
                                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>page-link<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>javascript:void(0)<span class="token punctuation">"</span></span>
                                       <span class="token attr-name"><span class="token namespace">v-on:</span>click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>loadTable( pageInfo.hasNextPage ? (pageInfo.pageNum+1) :pageInfo.pageNum)<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>下一页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
                                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>

                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.51,words:454},y:"a",title:"分页插件pageInfo",i:"page"},["/other/mybatis/6","/other/mybatis/6.md"]],["v-d0058120","/other/lua/lua.html",{a:"xss",d:"2023-12-11T00:00:00.000Z",l:"2023年12月11日",c:["lua"],g:["lua"],e:`<figure><img src="/assets/icon/image-20231201101923859.png" alt="image-20231201101923859" tabindex="0" loading="lazy"><figcaption>image-20231201101923859</figcaption></figure>
<p>xss@ubuntu:~$ vim ~/.bashrc
xss@ubuntu:~$ source ~/.bashrc</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-- 获取当前脚本所在路径
local script_path = debug.getinfo(1, 'S').source:match[[^@?(.*[\\/])[^\\/]-$]]

-- 将当前路径添加到 package.path 中
package.path = script_path .. "?.lua;" .. package.
-- 获取当前脚本所在路径
local script_path = debug.getinfo(1, 'S').source:match[[^@?(.*[\\/])[^\\/]-$]]

-- 将当前路径添加到 package.path 中
package.path = script_path .. "?.lua;" .. package.path

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.52,words:756},y:"a",title:"lua脚本碰到的问题",i:"page"},["/other/lua/lua","/other/lua/lua.md"]],["v-67b8c712","/posts/apple/1.html",{d:"2022-01-01T00:00:00.000Z",l:"2022年1月1日",c:["苹果"],g:["红","大","圆"],e:`<h1> 苹果 1</h1>
<h2> 标题 2</h2>
<p>这里是内容。</p>
<h3> 标题 3</h3>
<p>这里是内容。</p>
`,r:{minutes:.11,words:32},y:"a",title:"苹果 1",i:"edit"},["/posts/apple/1","/posts/apple/1.md"]],["v-696d9fb1","/posts/apple/2.html",{d:"2022-01-02T00:00:00.000Z",l:"2022年1月2日",c:["苹果"],g:["红","大","圆"],e:`<h1> 苹果 2</h1>
<p>一个被星标了的苹果文章。</p>
`,r:{minutes:.15,words:46},y:"a",title:"苹果 2",i:"edit"},["/posts/apple/2","/posts/apple/2.md"]],["v-6b227850","/posts/apple/3.html",{d:"2022-01-03T00:00:00.000Z",l:"2022年1月3日",c:["苹果","水果"],g:["红","大","圆"],e:`<h1> 苹果 3</h1>
<h2> 标题 2</h2>
<p>这里是内容。</p>
<h3> 标题 3</h3>
<p>这里是内容。</p>
`,r:{minutes:.11,words:34},y:"a",title:"苹果 3",i:"edit"},["/posts/apple/3","/posts/apple/3.md"]],["v-6cd750ef","/posts/apple/4.html",{d:"2022-01-04T00:00:00.000Z",l:"2022年1月4日",c:["苹果","水果"],g:["红","大","圆"],e:`<h1> 苹果 4</h1>
<h2> 标题 2</h2>
<p>这里是内容。</p>
<h3> 标题 3</h3>
<p>这里是内容。</p>
`,r:{minutes:.11,words:34},y:"a",title:"苹果 4",i:"edit"},["/posts/apple/4","/posts/apple/4.md"]],["v-7a07405d","/posts/banana/1.html",{d:"2022-01-05T00:00:00.000Z",l:"2022年1月5日",c:["香蕉","水果"],g:["黄","弯曲的","长"],e:`<h1> 香蕉 1</h1>
<h2> 标题 2</h2>
<p>这里是内容。</p>
<h3> 标题 3</h3>
<p>这里是内容。</p>
`,r:{minutes:.12,words:36},y:"a",title:"香蕉 1",i:"edit"},["/posts/banana/1","/posts/banana/1.md"]],["v-7bbc18fc","/posts/banana/2.html",{d:"2022-01-06T00:00:00.000Z",l:"2022年1月6日",c:["香蕉","水果"],g:["黄","弯曲的","长"],e:`<h1> 香蕉 2</h1>
<p>一个被数字 <code>10</code> 星标了的香蕉文章。</p>
`,r:{minutes:.18,words:53},y:"a",title:"香蕉 2",i:"edit"},["/posts/banana/2","/posts/banana/2.md"]],["v-7d70f19b","/posts/banana/3.html",{d:"2022-01-07T00:00:00.000Z",l:"2022年1月7日",c:["香蕉"],g:["黄","弯曲的","长"],e:`<h1> 香蕉 3</h1>
<h2> 标题 2</h2>
<p>这里是内容。</p>
<h3> 标题 3</h3>
<p>这里是内容。</p>
`,r:{minutes:.11,words:34},y:"a",title:"香蕉 3",i:"edit"},["/posts/banana/3","/posts/banana/3.md"]],["v-7f25ca3a","/posts/banana/4.html",{d:"2022-01-08T00:00:00.000Z",l:"2022年1月8日",c:["香蕉"],g:["黄","弯曲的","长"],e:`<h1> 香蕉 4</h1>
<h2> 标题 2</h2>
<p>这里是内容。</p>
<h3> 标题 3</h3>
<p>这里是内容。</p>
`,r:{minutes:.11,words:34},y:"a",title:"香蕉 4",i:"edit"},["/posts/banana/4","/posts/banana/4.md"]],["v-29c3d532","/other/spring/1.html",{a:"xss",d:"2023-12-11T00:00:00.000Z",l:"2023年12月11日",c:["spring"],g:["spring"],e:`<hr>
<hr>
<hr>
<p>如果在使用 <code>@Controller</code> 标注的控制器中出现404错误而在使用 <code>@RestController</code> 中正常工作，可能是由于以下原因：</p>
<ol>
<li><strong>返回类型不同：</strong>
<ul>
<li><code>@RestController</code> 注解的控制器方法返回的是数据，而不是视图。它会将返回的数据直接写入HTTP响应体中，通常是JSON格式。</li>
<li><code>@Controller</code> 注解的控制器方法通常返回视图名称，而不是数据。如果没有配置正确的视图解析器，可能会导致404错误。</li>
</ul>
</li>
<li><strong>视图解析器配置：</strong>
<ul>
<li>确保在使用 <code>@Controller</code> 时配置了正确的视图解析器，以将逻辑视图名称解析为实际的视图。例如，通过配置 <code>InternalResourceViewResolver</code> 或 <code>ThymeleafViewResolver</code>，具体取决于你使用的视图技术。</li>
</ul>
</li>
<li><strong>路径映射和视图名称：</strong>
<ul>
<li>确保 <code>@Controller</code> 中的 <code>@RequestMapping</code> 或 <code>@GetMapping</code> 注解中指定的路径映射和视图名称的返回与你的项目结构和配置相匹配。</li>
</ul>
</li>
</ol>`,r:{minutes:5.7,words:1711},y:"a",title:"spring",i:"page"},["/other/spring/1","/other/spring/1.md"]],["v-2b78add1","/other/spring/2.html",{a:"xss",d:"2023-12-11T00:00:00.000Z",l:"2023年12月11日",c:["spring"],g:["spring"],e:`<p>当你创建一个Spring应用程序时，可以使用XML配置文件定义和配置Spring容器中的bean。以下是你提供的XML配置文件的详细解释，并进行了一些纠正：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>xmlCopy code&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd"&gt;

    &lt;!-- 定义名为 "Foo" 的 bean --&gt;
    &lt;bean name="Foo" class="com.example.Foo"&gt;
        &lt;!-- 设置 "name" 属性，这里填入具体的值 --&gt;
        &lt;property name="name"&gt;
            &lt;value&gt;John Doe&lt;/value&gt;
        &lt;/property&gt;
        &lt;!-- 设置 "bookService" 属性，引用 id 为 "bookService" 的另一个 bean --&gt;
        &lt;property name="bookService" ref="bookService"&gt;&lt;/property&gt;
    &lt;/bean&gt;

    &lt;!-- 定义名为 "bookService" 的 bean --&gt;
    &lt;bean id="bookService" class="com.example.BookServiceImpl"&gt;&lt;/bean&gt;

&lt;/beans&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:8.63,words:2588},y:"a",title:"spring",i:"page"},["/other/spring/2","/other/spring/2.md"]],["v-2d2d8670","/other/spring/3.html",{a:"xss",d:"2023-12-11T00:00:00.000Z",l:"2023年12月11日",c:["spring"],g:["spring"],e:`<figure><img src="https://s2.loli.net/2023/07/10/VBkHuWr83jzpnXe.png" alt="image-20230710170222399" tabindex="0" loading="lazy"><figcaption>image-20230710170222399</figcaption></figure>
<h1> 走进SpringBoot一站式开发</h1>
<p><strong>前置课程：</strong>《Spring6核心内容》《SpringMvc6》《SpringSecurity6》《Java-9-17新特性篇》</p>`,r:{minutes:66.87,words:20060},y:"a",title:"spring",i:"page"},["/other/spring/3","/other/spring/3.md"]],["v-2ee25f0f","/other/spring/4.html",{a:"xss",d:"2023-12-11T00:00:00.000Z",l:"2023年12月11日",c:["spring"],g:["spring"],e:`<hr>
<hr>
<hr>
<figure><img src="/assets/icon/image-20231128091010745.png" alt="image-20231128091010745" tabindex="0" loading="lazy"><figcaption>image-20231128091010745</figcaption></figure>
<figure><img src="/assets/icon/image-20231128092237004.png" alt="image-20231128092237004" tabindex="0" loading="lazy"><figcaption>image-20231128092237004</figcaption></figure>`,r:{minutes:.56,words:169},y:"a",title:"spring",i:"page"},["/other/spring/4","/other/spring/4.md"]],["v-309737ae","/other/spring/5.html",{a:"xss",d:"2023-12-11T00:00:00.000Z",l:"2023年12月11日",c:["spring"],g:["spring"],e:`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Tokeninterceptor</span> <span class="token keyword">implements</span> <span class="token class-name">HandlerInterceptor</span> <span class="token punctuation">{</span>


    <span class="token annotation punctuation">@Resource</span>
    <span class="token class-name">UserService</span> userService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">preHandle</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">Object</span> handler<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>

        <span class="token class-name">String</span> token<span class="token operator">=</span>request<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">"token"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//token  userid</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>token <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">"token null"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> urll<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"http://1"</span><span class="token punctuation">,</span><span class="token string">"http://2"</span><span class="token punctuation">,</span><span class="token string">"http://3"</span><span class="token punctuation">,</span><span class="token string">"http://4"</span><span class="token punctuation">,</span><span class="token string">"http://5"</span><span class="token punctuation">,</span><span class="token string">"http://6"</span><span class="token punctuation">,</span><span class="token string">"http://7"</span><span class="token punctuation">,</span><span class="token string">"http://8"</span><span class="token punctuation">,</span><span class="token string">"http://9"</span><span class="token punctuation">,</span><span class="token string">"http://0"</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> a<span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Tokenuser</span> tokenuser<span class="token operator">=</span>userService<span class="token punctuation">.</span><span class="token function">getUserIdByToken</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">User</span> user<span class="token operator">=</span> userService<span class="token punctuation">.</span><span class="token function">getUserByid</span><span class="token punctuation">(</span>tokenuser<span class="token punctuation">.</span><span class="token function">getUserid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        user<span class="token punctuation">.</span><span class="token function">setAvatarUrl</span><span class="token punctuation">(</span>urll<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">UserContext</span><span class="token punctuation">.</span><span class="token function">setCruuser</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>







<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WebConfig</span> <span class="token keyword">implements</span> <span class="token class-name">WebMvcConfigurer</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Resource</span>
    <span class="token class-name">Tokeninterceptor</span> tokeninterceptor<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addInterceptors</span><span class="token punctuation">(</span><span class="token class-name">InterceptorRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token class-name">InterceptorRegistration</span> interceptor<span class="token operator">=</span>registry<span class="token punctuation">.</span><span class="token function">addInterceptor</span><span class="token punctuation">(</span>tokeninterceptor<span class="token punctuation">)</span><span class="token punctuation">;</span>

         <span class="token comment">//"/api/user/createuser",</span>
        <span class="token comment">// "/api/user/create",  login</span>
        <span class="token comment">// "/api/user/createuserp",  zhuce</span>
        <span class="token comment">// "/api/token/createtoken",</span>
        <span class="token comment">// "/api/sms/createsms"   duanxin</span>

         interceptor<span class="token punctuation">.</span><span class="token function">addPathPatterns</span><span class="token punctuation">(</span><span class="token string">"/api/**"</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">excludePathPatterns</span><span class="token punctuation">(</span><span class="token string">"/error"</span><span class="token punctuation">,</span><span class="token string">"/api/user/create"</span><span class="token punctuation">,</span><span class="token string">"/api/user/createuserp"</span><span class="token punctuation">,</span><span class="token string">"/api/sms/createsms"</span><span class="token punctuation">,</span><span class="token string">"/upload/file/**"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:5.23,words:1568},y:"a",title:"spring",i:"page"},["/other/spring/5","/other/spring/5.md"]],["v-324c104d","/other/spring/6.html",{a:"xss",d:"2023-12-11T00:00:00.000Z",l:"2023年12月11日",c:["spring"],g:["spring"],e:`<figure><img src="/assets/icon/image-20231127165246233.png" alt="image-20231127165246233" tabindex="0" loading="lazy"><figcaption>image-20231127165246233</figcaption></figure>
<figure><img src="/assets/icon/image-20231127165119090.png" alt="image-20231127165119090" tabindex="0" loading="lazy"><figcaption>image-20231127165119090</figcaption></figure>`,r:{minutes:.42,words:126},y:"a",title:"spring",i:"page"},["/other/spring/6","/other/spring/6.md"]],["v-dd991ea6","/other/mysql/1.html",{a:"xss",d:"2023-12-11T00:00:00.000Z",l:"2023年12月11日",c:["数据库"],g:["数据库","sql"],e:`<hr>
<hr>
<ol>
<li>
<p>关系型数据库的主要特点有哪些?</p>
<p>me:</p>
<p>数据关系 连表查询</p>
<p>ai:</p>
<ol>
<li><strong>数据以表格的形式存储</strong>,每行记录代表一个数据实体,每列属性代表数据实体的一个特征。</li>
<li>强调数据之间的关系,数据可以通过定义<strong>主键和外键</strong>进行关联。</li>
<li>数据操作通过关系代数和关系演算等关系模型进行。</li>
<li>提供<strong>结构化查询语言(SQL)</strong>,方便对数据的查询、插入、删除和更新。</li>
<li>具有**事务处理(**ACID)的功能,可以保证数据的完整性和一致性。</li>
<li>提供视图、存储过程、触发器等<strong>数据库对象</strong>,扩展了关系模型的建模能力。</li>
<li>支持数据库规范化,有助于减少数据冗余,提高存储效率。</li>
<li>提供用户权限管理、备份恢复等管理功能。</li>
<li>支持客户端/服务器架构,易于在分布式环境下部署。</li>
<li>成熟可靠,有完善的安全机制。</li>
</ol>
</li>
<li>
<p>数据库中的数据冗余是指什么?有哪些缺点?</p>
<p>me:</p>
<p>存储空间利用不当，存在小碎片的存储空间不能充分利用/空间占用大</p>
<p>ai:</p>
<p>数据冗余指的是在数据库中的表中出现<strong>重复或多余的数据</strong>。主要有以下两个方面的缺点:</p>
<ol>
<li>数据存储<strong>空间的浪费</strong></li>
</ol>
<p>数据冗余会导致重复或无用的数据被存储多次,占用了大量额外的存储空间。特别是在大数据库中,冗余数据会明显增加数据库的体积,增加存储成本。</p>
<ol>
<li><strong>数据异常的风险</strong></li>
</ol>
<p>存在冗余数据时,当某一处数据被修改后,相关数据不一定会同步更新,导致数据之间出现不一致的情况。这会降低数据的可靠性和完整性。</p>
<p>此外,数据冗余还可能导致其他问题,比如<strong>插入和删除异常、程序设计和操作复杂化</strong>等。</p>
<p>为了避免数据冗余,数据库的设计者通常会采用<strong>数据库规范化的方法来减少冗余</strong>,主要包括第一范式(1NF)、第二范式(2NF)、第三范式(3NF)等规范要求。合理的数据库规范化可以有效减少数据冗余,提高数据的完整性和一致性。</p>
</li>
<li>
<p>什么是数据库的完整性?有哪几种完整性?</p>
<p>me:</p>
<p>null</p>
<p>ai:</p>
<ol>
<li><strong>实体完整性</strong>:每张表的每一行(即每一个<strong>实体)都应该是唯一</strong>的,通常通过主键约束来保证。</li>
<li><strong>域完整性</strong>: 数据表中的每一列(<strong>属性)只允许出现合理的值</strong>,每个属性值的范围应该事先定义好。</li>
<li><strong>引用完整性</strong>:维护表与表之间的关系,例如外键约束来保证主表中不存在的外键值不能在从表中出现。</li>
<li><strong>用户定义完整性</strong>:允许用户根据需要定义或指定需要保证的完整性约束条件。</li>
<li><strong>业务完整性</strong>:按业务规则设定数据需要满足的一致性或准确性。</li>
</ol>
</li>
<li>
<p>如何理解数据库的三大范式?请简要说明每一范式的含义。</p>
<p>me:</p>
<p>第一范式  去除与主键</p>
<p>第二范式</p>
<p>第三范式</p>
<p>ai:</p>
<p>第一范式(1NF):</p>
<p><strong>属性不可再分</strong> 满足1NF的关系Mode中,每个属性值都必须是不可再分的基本值,不允许有重复的属性或多个值在一个属性中。</p>
<p>第二范式(2NF):</p>
<p><strong>完全依赖主键</strong> 满足2NF的关系模式中,非主属性必须完全依赖主键,消除1NF基础上产生的部分依赖。</p>
<p>第三范式(3NF):</p>
<p><strong>消除传递依赖</strong> 满足3NF的关系模式中,任何非主属性不依赖于其它非主属性,消除2NF基础上产生的传递依赖。</p>
<p>简单来说:</p>
<p>1NF 消除属性的重复组合;</p>
<p>2NF 消除部分依赖;</p>
<p>3NF 消除传递依赖。</p>
</li>
<li>
<p>数据库索引的作用是什么?哪些字段应该创建索引?</p>
<p>me;</p>
<p>在数据量比较大时可以加快对数据的查询   主键  唯一的识别的值</p>
<p>ai;</p>
<ol>
<li><strong>加速查询和检索速度</strong></li>
</ol>
<p>索引可以大大减少数据库需要扫描的数据量,使得查询和检索速度能够大幅提升。</p>
<p>2.<strong>加速表与表之间的连接</strong></p>
<p>通过在连接字段上进行索引,可以减少连接需要的时间。</p>
<p>3**.加速排序操作**</p>
<p>可以通过索引直接提取排序数据,加快排序速度。</p>
<p>4.加速聚集函数的操作</p>
<p>聚集函数如sum()、max()、min()等在索引列上进行计算时速度会更快。</p>
<p>通常以下字段应该创建索引:</p>
<ol>
<li>表中<strong>经常需要搜索的</strong>字段。</li>
<li><strong>经常出现在WHERE子句中的字段</strong>。</li>
<li>经常需要<strong>排序的字段</strong>。</li>
<li><strong>表主键</strong>。</li>
<li>频繁被连接的字段。</li>
<li>在查询中与其他索引列组合使用的字段。</li>
</ol>
</li>
<li>
<p>什么是数据库事务?事务的四个特征是什么?</p>
<p>me:</p>
<p>对多个数据库的操作，执行的方法，  /隔离性 原子性 一致性 持久性</p>
<p>ai:</p>
<p>数据库事务(Transaction)是指作为<strong>一个单独执行单元的一系列操作,这些操作要么全部成功执行,要么全部不执行</strong>。</p>
<p>数据库事务通常具有四个关键特徵,称为 ACID:</p>
<ol>
<li>**原子性(Atomicity)😗*事务是一个不可分割的工作单位,事务中的所有操作要么全部执行成功,要么全部失败回滚。</li>
<li><strong>一致性(Consistency)</strong>:事务执行前后,数据库都保持一致性状态。事务执行不会破坏数据库数据的完整性和业务逻辑约束。</li>
<li><strong>隔离性(Isolation)</strong>:多个事务并发执行时,一个事务的执行不应影响其他事务的执行。</li>
<li><strong>持久性(Durability)</strong>:已提交的事务对数据库的修改应该永久保存在数据库中,不会被回滚。</li>
</ol>
</li>
<li>
<p>什么是数据库的锁机制?有哪几种锁?</p>
<p>me:</p>
<p>对数据查询访问的限制操作 / 悲观锁 乐观锁</p>
<p>ai:
数据库锁机制是为了<strong>保证数据库并发访问的一致性而设计</strong>的,它通过对数据加锁来<strong>实现多用户对数据库的并发访问</strong>控制。</p>
<p>常见的数据库锁主要有以下两种:</p>
<ol>
<li>**共享锁(S锁)😗*允许多个事务对同一数据进行读取操作,防止资源被修改。</li>
<li><strong>排他锁(X锁)</strong>:只允许一个事务占有数据的排他访问权,防止多个事务同时修改数据。</li>
</ol>
<p>除此之外,数据库锁可以分为以下几种:</p>
<ul>
<li>行级锁:对关系表中的某一行加锁。</li>
<li>表级锁:对整张表加锁。</li>
<li>页级锁:对数据表的某个页面加锁。</li>
<li>表空间锁:对表空间中的所有对象加锁。</li>
<li>数据库锁:对整个数据库加锁。</li>
</ul>
</li>
<li>
<p>什么是数据库的并发控制?常见的并发控制方法有哪些?</p>
<p>me:</p>
<p>null</p>
<p>ai:</p>
<p>数据库的并发控制是为了保证在<strong>多个事务并发执行</strong>时<strong>不破坏数据库的完整性和一致性而设计的机制</strong>。常见的并发控制方法有以下几种:</p>
<ol>
<li>锁机制:通过在数据上加锁来实现并发控制,如共享锁、排它锁等。</li>
<li>多版本并发控制(MVCC):每次读取都从一个快照读,不加锁。通过在修改时生成新版本的数据行副本来实现。</li>
<li>时间戳序方法:为每一个事务赋予一个唯一的时间戳,事务只能读取时间戳小于自己的时间戳的数据。</li>
<li>乐观并发控制:假设冲突较少,允许事务先执行,但在提交时检查是否违反一致性。</li>
<li>悲观并发控制:假设冲突很多,在操作数据前先加锁,确保操作的一致性。</li>
<li>基于多粒度的锁机制:采用多种粒度的锁来获得更好的并发性。</li>
</ol>
</li>
<li>
<p>什么是数据库的故障恢复技术? checkpoint、redo log、undo log之间的关系是?</p>
<p>me:</p>
<p>通过对数据库日志，对数据库故障的恢复 /</p>
<p>ai:</p>
<p>数据库的故障恢复技术主要包括<strong>备份恢复技术、日志恢复技术</strong>等。</p>
<p>checkpoint、redo log、undo log三者之间的关系如下:</p>
<ol>
<li>checkpoint:<strong>检查点</strong>,数据库会定期将缓冲池中的脏页(修改过的数据页)刷新到磁盘上,生成一个检查点。</li>
<li>redo log:<strong>重做日志</strong>,记录数据库操作引起的数据修改。用于重做或回滚未提交的事务。</li>
<li>undo log:<strong>回滚日志</strong>,记录数据修改前的旧值。用于事务回滚时撤销对数据库的修改。</li>
</ol>
<p>当数据库发生故障后,利用checkpoint信息将数据页恢复到故障发生时的最后known good状态。然后利用redo log重做故障后新提交的事务对数据的修改。最后再根据undo log进行未提交事务的回滚操作,直到恢复到故障发生前的状态。</p>
</li>
<li>
<p>数据库优化的常见手段有哪些?</p>
<p>me:</p>
<p>数据库规范化 索引</p>
<p>ai:</p>
<ol>
<li>**SQL语句优化:**通过参数绑定、去除不必要的查询等方式优化查询语句。</li>
<li><strong>数据库结构优化</strong>:合理设计表结构,避免冗余,建立索引。</li>
<li>数据库服务器优化:调整数据库内存、并发数等服务器参数。</li>
<li><strong>查询计划优化</strong>:选择最优查询路径,如利用<strong>索引查询</strong>。</li>
<li>数据访问优化:减少客户端与服务器之间交互,使用连接池。</li>
<li>磁盘I/O优化:SEPARATE表空间,RAID技术。</li>
<li>**数据库分区:**通过垂直拆分或水平拆分 way 提高可扩展性。</li>
<li>采用读写<strong>分离机制</strong>:降低数据库访问压力。</li>
<li>数据库<strong>并行处理</strong>:如并行查询。</li>
<li>采用数据库缓存:缓存热点数据,减少磁盘I/O。</li>
</ol>
</li>
<li>
<p>数据库中的视图有什么作用?视图可以更新数据吗?</p>
<p>me:</p>
<p>视图狗都不用</p>
<p>ai:</p>
<ol>
<li><strong>简化复杂的SQL查询</strong></li>
</ol>
<p>通过在视图上执行查询,可以将复杂的查询封装和隐藏,使用更简单的查询语法。</p>
<p>​	2<strong>保护数据</strong></p>
<p>可以在视图上隐藏表中的部分敏感字段,对用户只开放必要的列。</p>
<p>​	3<strong>提高查询性能</strong></p>
<p>视图可以只查询必要的数据列,并且可以利用索引提升性能。</p>
<p>​	4<strong>保持数据的一致性</strong></p>
<p>可以在视图上定义计算字段,从而在不同的表中实现一致的数据显示。</p>
<p>​	5<strong>实现数据独立</strong></p>
<p>当表结构变更时,只修改视图定义,对访问视图的查询语句无须改动。</p>
<p><strong>对于可更新的视图</strong>,可以通过视图实现对基表数据的修改、插入和删除操作。但<strong>有些视图由于存在聚合函数等是不可更新的。</strong></p>
</li>
<li>
<p>什么是数据库的范式设计?为什么需要范式设计?</p>
<p>me:</p>
<p>对数据库的属性进行规范化设计  /  减少数据库的冗余  提高数据库查询  优化数据库</p>
<p>ai:</p>
<p>数据库需要范式设计主要有以下原因:</p>
<ol>
<li><strong>减少数据冗余</strong></li>
</ol>
<p>范式设计可以识别出不合规范的设计,消除数据冗余,节省存储空间。</p>
<ol>
<li>避免插入异常</li>
</ol>
<p>消除非主属性对主属性的部分函数依赖可以避免插入异常。</p>
<ol>
<li>避免删除异常</li>
</ol>
<p>消除非主属性对主属性的传递函数依赖可以避免删除异常。</p>
<ol>
<li>避免更新异常</li>
</ol>
<p>符合范式的关系模式,非主属性不依赖于其他非主属性,可以避免更新异常。</p>
<ol>
<li>提高查询性能</li>
</ol>
<p>减少数据冗余可以提高查询和搜索的性能。</p>
<ol>
<li><strong>保持数据一致性</strong></li>
</ol>
<p>符合范式的设计可以保证数据一致性,避免数据操作引起的数据不一致。</p>
<ol>
<li>方便数据库应用设计</li>
</ol>
<p>降低数据库复杂度,使数据库结构更清晰简洁,便于开发人员设计和使用。</p>
</li>
<li>
<p>数据库的主键和唯一键有什么区别?</p>
<p>me:</p>
<p>主键 必须唯一性唯一标志 可以作为其他表的外键 唯一键 属性唯一</p>
<p>ai:</p>
<ol>
<li>主键是<strong>一行数据的唯一标识,可以唯一定位一行数据</strong>,每张表只能有一个主键。唯一键不是主键,一张表可以有多个唯一键。</li>
<li>主键<strong>不允许为空值</strong>,唯一键列可以为空值。</li>
<li>主键直接定义在表中。唯一键可以定义在表中,也可以通过唯一索引实现唯一键约束。</li>
<li>主键默认会建立<strong>主键索引</strong>,数据库系统会自动为主键创建索引。唯一键可以建立唯一索引,也可以不创建。</li>
<li>**主键不允许修改,**除非重建表。<strong>唯一键可以修改,但不能重复</strong>。</li>
<li>每张表<strong>必须定义主键</strong>,以标识唯一一行记录。<strong>唯一键不是必需的</strong>。</li>
<li><strong>一个表可以有多个唯一键,但最多只能有一个主键。</strong></li>
</ol>
</li>
<li>
<p>什么是数据库的<strong>参照完整性?<strong>如何通过</strong>外键</strong>约束实现参照完整性?</p>
<p>me:</p>
<p>忘了</p>
<p>ai:</p>
<p>数据库的参照完整性是指存在<strong>外键关系的表之间的数据一致性</strong>。它通过外键约束来实现。</p>
<p>外键约束的作用是保证子表数据外键列的值必须来自主表的主键列的值。这样就建立了主表和子表数据之间的链接,保证了主 子 表数据的一致性。</p>
<p>具体实现参照完整性的方法:</p>
<ol>
<li>在子表添加外键列,其数据类型和主表的主键列一致。</li>
<li>在子表外键列上添加外键约束,约束引用主表的主键列。</li>
<li>指定外键更新和删除时的操作,如级联更新/删除或设置为无动作。</li>
<li>可以设置外键值为null,也可以设置为不允许为空。</li>
</ol>
</li>
<li>
<p>数据库的三大设计范式之间有什么关系?为什么要遵守高级范式的设计?</p>
<p>me:</p>
<p>三个范式 互相递进  第三范式在第二范式基础上更加要求  /   遵循高级范式可以减少数据冗余 数据操作异常 数据一致性</p>
<p>ai:</p>
<p>数据库的三大范式之间是逐步规范化的关系:</p>
<ol>
<li>第一范式(1NF)是关系数据库的基础,表的每一列都是不可分割的基本数据项。</li>
<li>第二范式(2NF)在1NF的基础上,非码属性必须完全依赖于候选码,消除非主属性对主码的部分函数依赖。</li>
<li>第三范式(3NF)在2NF基础上,任何非主属性不依赖于其它非主属性,消除传递依赖。</li>
</ol>
<p>高级范式都是在第三范式的基础上建立的,如BCNF范式等。</p>
<p>遵守高级范式设计数据库的主要理由:</p>
<ol>
<li>可以避免数据冗余,节省数据存储空间。</li>
<li>将数据结构分解成合理的形式,有利于数据库维护。</li>
<li>减少插入、更新、删除异常的发生。</li>
<li>提高数据查询和访问的效率。</li>
<li>提高程序对数据库的设计和操作的简单性。</li>
<li>方便对数据库的扩展和修改。</li>
<li>提高数据的一致性和完整性。</li>
</ol>
</li>
<li>
<p>什么是数据库的**冗余设计?**冗余设计的利与弊是什么?</p>
<p>me：</p>
<p>不知道</p>
<p>ai:</p>
<p>数据库冗余设计指在<strong>数据库设计中存在一定数据冗余或重复的设计</strong>。</p>
<p>冗余设计的利与弊:</p>
<p>利:</p>
<ol>
<li>提高了数据的完整性和一致性。<strong>系统容错能力增强</strong>。</li>
<li>提高数据读取效率。多表查询时,冗余数据可以<strong>减少连接操作。</strong></li>
<li>提高数据写入效率。允许在少数表中进行冗余存储,以<strong>提高写效率。</strong></li>
<li><strong>简化数据库设计</strong>,可以利用冗余数据减少复杂的查询。</li>
</ol>
<p>弊:</p>
<ol>
<li>数据冗余<strong>增加了数据维护的难度。</strong></li>
<li>提高了数据<strong>存储空间的需求</strong>。</li>
<li>提高了<strong>系统设计和开发的难度</strong>。需考虑数据同步问题。</li>
<li>增加了<strong>数据库插入和更新的问题</strong>。</li>
<li>出现<strong>数据不一致</strong>的可能。</li>
</ol>
</li>
<li>
<p>数据库连接的分类有哪些?各有什么特点?</p>
<p>me:</p>
<p>使用数据库引擎  使用数据池链接 /  1，    2，数据池连接减少操作次数</p>
<p>ai：</p>
<ol>
<li><strong>短连接</strong>:每次数据库操作后就关闭连接。</li>
</ol>
<ul>
<li>特点:连接创建和关闭频繁,资源消耗大,性能较差。</li>
</ul>
<ol>
<li><strong>长连接</strong>:重复使用同一个数据库连接,对多次数据库操作优化。</li>
</ol>
<ul>
<li>特点:减少连接创建和关闭次数,性能较好。但如果长时间不关闭,会占用连接资源。</li>
</ul>
<p>另外,数据库连接还可以分为:</p>
<ol>
<li>**直接连接:**应用程序直接连接数据库。</li>
</ol>
<ul>
<li>特点:简单,无中间层,但不利于管理和拓展。</li>
</ul>
<ol>
<li><strong>连接池连接</strong>:使用连接池存放数据库连接,应用程序从池中获取连接。</li>
</ol>
<ul>
<li>特点:可以重用连接,提高效率。但需要注意池容量控制。</li>
</ul>
</li>
<li>
<p>什么是数据库事务的ACID特性?缺少某一特性会造成什么问题?</p>
<p>me:</p>
<p>隔离性 一致性 原子性 持久性 /  缺少会造成数据不一致 事务失效</p>
<p>ai:</p>
<p>原子性(Atomicity):事务是一个不可分割的工作单位,事务中的操作要么都成功,要么都失败。</p>
<p>一致性(Consistency):事务执行前后,数据库都保持一致性状态。</p>
<p>隔离性(Isolation):事务并发执行时,一个事务的执行不应影响其他事务。</p>
<p>持久性(Durability):已提交事务对数据库修改是持久的,即使系统故障也不会丢失。</p>
<p>如果缺少某一特性:</p>
<ul>
<li><strong>缺少原子性:事务执行可能只部分成功,使数据处于不一致状态。</strong></li>
<li><strong>缺少一致性:事务执行使数据库从一个一致状态变成不一致状态。</strong></li>
<li><strong>缺少隔离性:事务并发执行相互影响,数据错误。</strong></li>
<li><strong>缺少持久性:系统故障后,已提交事务的修改可能丢失</strong></li>
</ul>
</li>
<li>
<p>选择使用何种数据库索引类型的判断标准有哪些?</p>
<p>me：</p>
<p>不知道</p>
<p>ai:</p>
<ol>
<li>查询方式 - 根据查询中条件列的判断,选择合适的索引,如唯一索引、普通索引、前缀索引等。</li>
<li>查询性能 - 根据查询的性能要求,如查询范围的大小,选择聚簇索引或非聚簇索引。</li>
<li>数据量 - 数据量小可以考虑使用唯一索引;数据量大则应优先考虑普通索引。</li>
<li>数据变更频率 - 变更频繁的数据字段不太适合创建索引。静态数据字段可优先考虑。</li>
<li>索引维护成本 - 索引能够带来查询性能提升需要与维护索引的成本作比较。</li>
<li>索引限制 - 一些数据库对索引的 key 长度、数量都有限制,在设计时需要注意。</li>
<li>数据关系 - 与查询条件 columnist 相关联的数据字段优先考虑建立索引。</li>
<li>实际执行查询计划 - 可以比较真实的执行计划来决定创建哪些索引。</li>
</ol>
</li>
<li>
<p>数据库的性能优化手段中,哪些属于SQL优化,哪些属于硬件优化?</p>
<p>me;</p>
<p>索引优化 分页 属于sql  //硬件优化</p>
<p>ai:</p>
<p>SQL优化主要包括:</p>
<ol>
<li><strong>SQL语句优化</strong> - 使用EXPLAIN检查执行计划,优化查询方式,避免全表扫描等。</li>
<li><strong>索引优化</strong> - 加入适当的索引,减少查询需要扫描的数据。</li>
<li><strong>数据库结构优化</strong> - 规范设计表和库,避免冗余索引和查询。</li>
<li>参数优化 - 配置合理的缓存,连接数等数据库参数。</li>
</ol>
<p>硬件优化主要包括:</p>
<ol>
<li><strong>升级CP</strong>U、内存 - 提高数据库服务器的处理能力。</li>
<li>使用SSD - 减少I/O等待时间。</li>
<li><strong>分库分表</strong> - 减少单库单表数据量,提高查询效率。</li>
<li>采用更高效的磁盘IO方式 - 如RAID 10。</li>
<li>选择合适的<strong>存储引擎</strong> - 如InnoDB, MyISAM等。</li>
<li>客户端连接优化 - 连接池,本地缓存等。</li>
</ol>
</li>
<li>
<p>数据库三范式有什么作用?不符合三范式会带来哪些问题?</p>
<p>me:</p>
<p>规范化数据库结构    减少数据冗余</p>
<p>不符合 可能造成数据冗余 数据异常 数据库操作异常</p>
<p>ai:</p>
<p>数据库三范式的主要作用是:</p>
<ol>
<li>避免数据冗余和异常 - 三范式要求数据表中的每个列都和主键直接相关,从而避免重复和多余的数据。</li>
<li>提高查询效率 - 三范式将数据划分为多张功能独立的表,而非塞进一个大表,提高查询速度。</li>
<li>降低更新异常 - 更新时只需要更新一处,不会出现数据不一致的情况。</li>
<li>提高系统扩展性 - 三范式使表的结构合理独立,易于扩展。</li>
</ol>
<p>不符合三范式主要会带来以下问题:</p>
<ol>
<li>数据冗余和数据不一致 - 同样的数据出现在多个表中,数据重复,容易出现不一致。</li>
<li>插入异常 - 在一个表中插入数据,需要同步插入其他表,否则产生数据不一致。</li>
<li>删除异常 - 删除操作可能会删掉其他表还在使用的数据。</li>
<li>更新异常 - 同一数据不同表的更新可能不一致。</li>
<li>系统维护困难 - 字段增删改都会影响多张表,维护复杂。</li>
</ol>
</li>
<li>
<p>数据库事务的四个特征是:原子性、一致性、隔离性和持久性。请解释这四个特征的意义。</p>
<p>原子性(Atomicity):事务是一个不可分割的工作单位,事务中的操作要么都成功,要么都失败。</p>
<p>一致性(Consistency):事务执行前后,数据库都保持一致性状态。</p>
<p>隔离性(Isolation):事务并发执行时,一个事务的执行不应影响其他事务。</p>
<p>持久性(Durability):已提交事务对数据库修改是持久的,即使系统故障也不会丢失。</p>
</li>
<li>
<p>数据库的并发控制有哪几种常见方法?各自的优缺点是什么?</p>
<p>me:</p>
<p>加锁{表锁 行锁 }    事务   /   加锁可以并发数据安全  效率慢  不加锁可能不安全但效率快</p>
<p>ai:</p>
<ol>
<li><strong>锁机制</strong></li>
</ol>
<ul>
<li>优点:并发冲突控制能力强,保证数据一致性。</li>
<li>缺点:锁的获取和释放有较大开销,会降低并发性能。锁模式不当还可能导致死锁。</li>
</ul>
<ol>
<li><strong>多版本并发控制(MVCC)</strong></li>
</ol>
<ul>
<li>优点:不会阻塞读操作,提高了读性能和并发性。</li>
<li>缺点:需要额外空间存储多版本数据,写操作开销也较大。</li>
</ul>
<ol>
<li><strong>时间戳 ordering</strong></li>
</ol>
<ul>
<li>优点:无需锁及多版本,并发控制简单。</li>
<li>缺点:只适用于读多写少的场景,可扩展性较差。</li>
</ul>
<ol>
<li><strong>乐观锁</strong></li>
</ol>
<ul>
<li>优点:不阻塞读操作,无死锁问题。</li>
<li>缺点:写冲突时会重试和回滚,成功率不高。</li>
</ul>
<ol>
<li><strong>分布式事务</strong></li>
</ol>
<ul>
<li>优点:支持分布式场景的并发控制。</li>
<li>缺点:实现复杂,资源开销大,不支持高并发。</li>
</ul>
</li>
<li>
<p>数据库的锁有共享锁和排它锁,这两种锁的区别是什么?各自使用场景?</p>
<p>me:</p>
<p>共享锁指进程运行所需要资源可以被其他进程所共享使用</p>
<p>排他锁指进程所需资源仅可自己使用其他进程无法请求已使用的资源</p>
<p>ai:</p>
<ol>
<li><strong>兼容性不同</strong>：
<ul>
<li>S锁与S锁兼容，可以多个事务同时加S锁。</li>
<li>X锁与X锁和S锁都不兼容，加X锁时其他事务不能再加任何锁。</li>
</ul>
</li>
<li><strong>加锁读写能力不同</strong>：
<ul>
<li>S锁只允许读取数据，不允许修改。</li>
<li>X锁既可以读取也可以修改数据。</li>
</ul>
</li>
<li><strong>加锁粒度不同</strong>：
<ul>
<li>S锁通常是行级锁，只锁定查找到的行。</li>
<li>X锁一般是表级锁，会锁定整张表。</li>
</ul>
</li>
</ol>
<p>根据这些特性，可以将它们用于不同的事务场景：</p>
<ul>
<li>
<p><strong>S锁的使用场景</strong>： S锁适用于只读事务，因为它们可以并发地加锁，从而提高并发度，允许多个事务同时读取相同的数据。这对于读取频繁、但修改较少的场景非常有用，例如报表查询等。</p>
</li>
<li>
<p><strong>X锁的使用场景</strong>： X锁适用于写事务，因为它提供了互斥访问，确保在一个事务修改数据时，其他事务无法访问或修改相同的数据。这对于需要保证数据一致性和避免冲突的写操作非常重要，例如更新、删除等操作。</p>
</li>
<li>
<p><strong>读写混合事务的处理</strong>： 在某些情况下，可能需要同时进行读取和写入操作。在这种情况下，可以先加X锁，以确保数据的独占访问权。然后，在需要读取的行上加S锁，以便在读取过程中保持一致性。最后，在完成操作后，释放所有锁。</p>
</li>
<li>
<p><strong>共享锁（Shared Lock）</strong>：</p>
<ul>
<li>共享锁允许多个事务同时获取同一个数据项的锁，以进行读操作。多个事务可以同时持有共享锁，但不能与排他锁同时存在。</li>
<li>共享锁之间是兼容的，这意味着一个事务可以在另一个事务持有共享锁的同时获取相同数据项的共享锁。</li>
<li>共享锁用于读取操作，可以并发地读取数据，从而提高并发性能。</li>
<li>适用场景：当多个事务需要读取相同的数据项时，可以使用共享锁，以避免冲突并允许并发读取操作。</li>
</ul>
<p><strong>排他锁（Exclusive Lock）</strong>：</p>
<ul>
<li>排他锁在事务需要进行写操作时获取，确保数据在写操作期间不会被其他事务读取或写入。</li>
<li>排他锁与其他任何锁（包括共享锁和排他锁）都不兼容，这意味着当一个事务持有排他锁时，其他事务不能获取相同数据项的任何锁。</li>
<li>排他锁用于写操作，保证数据的独占性，避免并发写入冲突，从而维护数据的一致性。</li>
<li>适用场景：当事务需要对数据进行写操作（修改、删除等）时，应该获取排他锁，以确保数据的一致性和完整性。</li>
</ul>
<p>在实际应用中，根据事务的需求和操作类型，可以选择适当的锁策略。有时候，也会出现读写混合的场景，这时可能需要在读操作时获取共享锁，在写操作时获取排他锁，以实现合适的并发控制和数据保护。</p>
</li>
</ul>
</li>
<li>
<p>为什么需要数据库的事务处理?事务能够保证数据库的一致性吗?</p>
<p>me:</p>
<p>对数据库需要并行操作 /事务可以保持一致性</p>
<p>ai:</p>
<ol>
<li>将多条相关SQL作为一个不可分割的工作单元执行,以保证数据的完整性。</li>
<li>提供将数据库从一致性状态变换到另一致性状态的机制。</li>
<li>在并发访问时,保证事务之间的隔离性。</li>
<li>在系统故障后,恢复数据库状态以保持数据一致性。</li>
</ol>
<p>但是,事务<strong>不能完全保证数据库的一致性</strong>。原因如下:</p>
<ol>
<li>事务只能保证数据库从一个一致状态转变到另一个一致状态,不能防止一开始数据库状态就不一致。</li>
<li>长时间事务会降低并发性,也无法完全隔离事务之间的影响。</li>
<li>硬件故障也可能导致事务处理失败,无法恢复数据库一致状态。</li>
<li>错误或不合理的事务处理逻辑同样可能破坏数据一致性。</li>
</ol>
</li>
<li>
<p>数据库的冗余对性能有什么影响?如何在冗余与性能间做平衡?</p>
<p>me:</p>
<p>数据库冗余导致数据异常 性能读写降低，数据库操作异常数据不安全不一致   /  合理规划数据库设计  结合实际使用不同的范式</p>
<p>ai:</p>
<ol>
<li><strong>写入性能</strong> - 冗余会导致每个写操作需要更新多个副本,降低写入速度。</li>
<li><strong>读取性能</strong> - 适当冗余可以提高读取速度,因为读取可以分散在多个副本上。但冗余过高会导致缓存浪费和磁盘空间浪费,降低效率。</li>
<li><strong>内存占用</strong> - 数据冗余会增加内存占用。</li>
<li><strong>数据不一致</strong> - 多个副本存在数据不一致的可能,需要额外的完整性检查。</li>
</ol>
<p>平衡冗余和性能可以从以下几个方面进行:</p>
<ol>
<li>只对**最常读取和最重要的数据建立冗余,**不要对全部数据均创建冗余。</li>
<li>控制冗余副本的数量,一般2-3个副本就足够提供读取性能优势。<strong>过多冗余反而降低效率</strong>。</li>
<li>采用异步或延迟的冗余策略,减小冗余对写入的影响。</li>
<li><strong>对冗余数据进行分区</strong>,避免单点热点问题。</li>
<li><strong>利用缓存来提高读取速度</strong>,而不是单纯依赖冗余。</li>
<li>对冗余数据进行压缩,减少存储和内存开销。</li>
<li>加强系统间数据一致性检测与同步机制,降低冗余带来的不一致风险。</li>
<li>配合业务特点采用适当的冗余策略,如主从式、份额式等。</li>
</ol>
</li>
<li>
<p>数据库优化中,对查询语句优化和对数据库表优化有何不同?应优先考虑哪些方面?</p>
<p>me:</p>
<p>查询语句优化 --&gt; 在查询过程中更快或准确查询  通过索引 条件 连表等操作</p>
<p>数据库表优化 --&gt; 在数据表建立 对数据进行规范化 分表 分页</p>
<p>优先考虑语句优化 比较直接  对数据库表优化 可能比较麻烦</p>
<p>ai:</p>
<ol>
<li>查询语句优化</li>
</ol>
<ul>
<li>重点优化SQL查询逻辑,使查询更高效</li>
<li>如添加索引、SQL优化、查询重写等</li>
<li>目的是消除不必要的查询,减少扫描行数</li>
</ul>
<ol>
<li>数据库表优化</li>
</ol>
<ul>
<li>
<p>重点优化表结构与设计,减少存储冗余</p>
</li>
<li>
<p>如正规化、拆分表、垂直拆分等</p>
</li>
<li>
<p>目的是减少储存空间,提高CRUD效率</p>
<p>优先考虑的方面:</p>
<ul>
<li>对重要且频繁的查询语句进行优化</li>
<li>对大表、重要业务表的结构设计优化</li>
<li>先从查询语句入手,对症下药</li>
<li>查询无法优化时再考虑表结构调整</li>
</ul>
</li>
</ul>
</li>
<li>
<p>选择使用<strong>物理外键</strong>与<strong>逻辑外键</strong>,应该考量哪些因素?两者的优缺点?</p>
<p>me:</p>
<p>null</p>
<p>ai:</p>
<ol>
<li>数据完整性需求</li>
</ol>
<ul>
<li>物理外键通过约束可以保证引用完整性,删除/更新主表数据时限制外键变化。</li>
<li>逻辑外键不能自动保证引用完整性,需要通过应用程序来维护。</li>
</ul>
<ol>
<li>查询性能需求</li>
</ol>
<ul>
<li>物理外键会对主表创建索引,可提高联表查询速度。</li>
<li>逻辑外键没有索引,联表查询需要全表扫描,较慢。</li>
</ul>
<ol>
<li>数据变更需求</li>
</ol>
<ul>
<li>物理外键的约束会限制主表数据的删除与更新。</li>
<li>逻辑外键没有这个限制,主表变更更灵活。</li>
</ul>
<ol>
<li>系统性能限制</li>
</ol>
<ul>
<li>物理外键的约束会增加插入/更新时的开销。</li>
<li>逻辑外键的开销较小。</li>
</ul>
<p><strong>物理外键的优点是保证数据一致性,提高查询速度,但会限制主表变更。</strong></p>
<p><strong>逻辑外键的优点是变更灵活性高,系统开销较小,但无法自动保证引用完整性。</strong></p>
</li>
<li>
<p>数据库索引在提高查询速度的同时,会带来哪些问题?该如何权衡?</p>
<p>me:</p>
<p>额外内存开销</p>
<p>ai:</p>
<ol>
<li>写入开销增加</li>
</ol>
<ul>
<li>索引会增加数据库写入数据时的开销。所有索引字段的值都需要同步更新。</li>
</ul>
<ol>
<li>额外存储空间占用</li>
</ol>
<ul>
<li>索引需要额外的存储空间来保存索引结构和索引值。</li>
</ul>
<ol>
<li>索引维护成本</li>
</ol>
<ul>
<li>修改表结构时需要重新建立索引,也需要定期维护索引。</li>
</ul>
<ol>
<li>可能导致查询优化器依赖索引</li>
</ol>
<ul>
<li>存在索引并不一定被查询优化器使用,可能导致非预期的查询计划。</li>
</ul>
<ol>
<li><strong>降低部分写操作的性能</strong></li>
</ol>
<ul>
<li>索引可以加速查询,但会降低部分INSERT,UPDATE和DELETE的性能。</li>
</ul>
<p>因此,建立索引需要权衡其带来的收益和成本。一般的考虑原则是:</p>
<ul>
<li>仅对常用字段建立索引,不要对很少使用或不作为查询条件的字段建立索引。</li>
<li>删除不再使用或很少使用的索引,不定期评估索引的使用效果。</li>
<li>对高并发的读写操作要谨慎建立索引。</li>
<li>对TEXT、BLOB等大字段尽量不要创建索引。</li>
<li>在建立复合索引时考虑列的顺序对性能的影响。</li>
<li>对于大表要建立部分索引而不是全表索引。</li>
</ul>
</li>
<li>
<p>数据库视图的作用有哪些?使用视图可能带来的问题是什么?应如何应对?</p>
<p>me:</p>
<p>视图狗都不用</p>
<p>ai:</p>
</li>
<li>
<p>数据库范式设计的目标是什么?为什么需要遵循范式化设计?</p>
<p>me:</p>
<p>数据库性能 维护 变好</p>
<p>ai；</p>
<ol>
<li>避免数据冗余和异常,提高数据的完整性和一致性。</li>
<li>降低数据维护和存储成本。</li>
<li>提高查询性能。</li>
<li>确保数据库结构灵活扩展,便于应用程序开发。</li>
</ol>
<p>遵循范式化设计主要有以下原因:</p>
<ol>
<li>减少数据冗余,避免同样的数据出现在多个表中,占用大量存储空间。</li>
<li>避免插入、更新异常,如无法正常删除的数据。这些异常会导致数据库结构混乱。</li>
<li>降低维护成本,不需要在多个表中同步修改冗余数据。</li>
<li>提高查询效率,不需要在多表中查询同样的数据。</li>
<li>提高可扩展性,系统变更不会影响数据库整体结构。</li>
<li>有利于未来优化,如拆分表等。</li>
<li>便于程序开发,不同模块访问不同表,业务清晰。</li>
</ol>
</li>
<li>
<p>解释SQL语句的优化原则,有哪些需要注意的点?</p>
<p>ai:</p>
<ol>
<li>尽量减少查询的数据行数,使用WHERE条件进行过滤。</li>
<li>尽量减少JOIN表的数量,避免不必要的连接查询。</li>
<li>对经常查询的字段建立索引,提高查询效率。</li>
<li>避免在WHERE子句中使用NOT IN和&lt;&gt;操作符,它们难以优化。</li>
<li>使用白名单限制查询范围,避免全表扫描。</li>
<li>对文本字段应加引号限制前缀wildcard查询。</li>
<li>对统计类查询使用GROUP BY而不是DISTINCT去重。</li>
<li>避免数据类型的隐式转换,这会降低查询效率。</li>
<li>对多表JOIN查询,保证ON和WHERE条件列有索引。</li>
<li>编写存储过程提高重复查询的效率。</li>
<li>对批量插入数据操作使用事务提高效率。</li>
<li>对动态SQL参数使用绑定变量提高稳定性。</li>
<li>避免使用游标或联合查询,它们执行效率较低。</li>
<li>对复杂查询分步进行,逐步优化。</li>
</ol>
</li>
<li>
<p>数据库连接池的作用是什么?使用连接池可能带来哪些问题?</p>
<p>me:</p>
<p>对数据库操作时，避免多次链接数据库，避免每次数据操作需要重新链接数据库</p>
<p>AI:</p>
<p>数据库连接池的主要作用是提高数据库连接的使用效率。</p>
<ol>
<li>**重用存在的连接,**避免频繁创建和关闭连接的开销。</li>
<li>管理连接对象数目,避免过多连接耗尽资源。</li>
<li>实现连接的线程安全共享。</li>
<li><strong>提供连接的待命池,加快获取连接的速度。</strong></li>
</ol>
<p>使用连接池可能带来以下问题:</p>
<ol>
<li><strong>配置不当可能造成连接池溢出、泄漏</strong>等。</li>
<li><strong>多线程环境下需要实现连接管理的同步机制</strong>。</li>
<li>连接长时间闲置导致连接超时。</li>
<li><strong>大量连接创建可能带来内存压力。</strong></li>
<li><strong>连接没有按需释放,浪费资源。</strong></li>
<li>连接长时间占用,出现瓶颈。</li>
</ol>
</li>
<li>
<p>选择使用联合索引与组合索引的考虑因素有哪些?各自的优缺点?</p>
</li>
<li>
<p>如何判断一个数据库是否需要进行分库分表?分库分表的方案有哪些?</p>
</li>
<li>
<p>讲解数据库故障转移与负载均衡的工作原理,两者有何不同?</p>
</li>
<li>
<p>数据库主备服务器架构的工作原理是什么?主备服务器之间如何同步数据?</p>
</li>
<li>
<p>讲解行锁、表锁、意向锁的使用场景和实现机制。</p>
</li>
<li>
<p>数据库数据如何设计维度建模与事实建模?二者有何优势?</p>
</li>
<li>
<p>什么是数据库的无损调整?如何实现数据库结构的无损调整?</p>
</li>
<li>
<p>数据库事务隔离级别有哪些?各个隔离级别的区别是什么?</p>
</li>
<li>
<p>讲解InnoDB和MyISAM存储引擎的区别与应用场景。</p>
</li>
<li>
<p>数据库空间数据型如何设计合理的空间索引提高查询效率?</p>
</li>
<li>
<p>什么是数据库的慢查询?如何定位和优化慢查询?</p>
</li>
<li>
<p>什么是数据库死锁?如何避免数据库死锁的发生?</p>
</li>
<li>
<p>讲解关系型数据库与NoSQL数据库的区别,两者各自的应用场景。</p>
</li>
<li>
<p>讲解SQL注入攻击的原理,如何通过参数化查询防止SQL注入。</p>
</li>
<li>
<p>数据库服务器内存不足时应该如何调优?有哪些可优化方向?</p>
</li>
<li>
<p>设计一个支持百万级流量的数据库架构,需要考虑哪些方面?</p>
</li>
<li>
<p>关系型数据库与文档型数据库的区别在哪里?各自的典型产品和应用场景?</p>
</li>
<li>
<p>数据库的存储引擎有哪些?各有什么特点?</p>
</li>
<li>
<p>数据库索引的底层实现原理是什么?B+树与B树的区别在哪里?</p>
</li>
<li>
<p>讲解数据库事务的隔离机制,包括脏读、不可重复读、幻读的概念。</p>
</li>
<li>
<p>什么是数据库范式?解释第一范式、第二范式、第三范式的定义。</p>
</li>
<li>
<p>数据库优化中,业务层优化和SQL语句优化的focal区别是什么?</p>
</li>
<li>
<p>选择增量备份与完全备份应考虑哪些因素?两者分别适用于哪些场景?</p>
</li>
<li>
<p>解释数据库连接的集中式与分布式部署方式,讲述两种方案的利弊。</p>
</li>
<li>
<p>数据库查询优化中,应该优先考虑查询缓存还是索引?理由是什么?</p>
</li>
<li>
<p>讲解数据库主键和唯一索引的区别,各自的使用场景。</p>
</li>
<li>
<p>为什么需要数据库事务?事务如何保证数据库的ACID特性?</p>
</li>
<li>
<p>选择MySQL存储引擎时,应考虑哪些因素?各存储引擎的应用场景?</p>
</li>
<li>
<p>解析SQL语句的优化原则,有哪些需要注意的点?</p>
</li>
<li>
<p>设计支持大量并发的数据库架构需要考虑哪些方面?</p>
</li>
<li>
<p>什么是数据库连接池?使用连接池带来哪些好处?</p>
</li>
<li>
<p>讲解三种数据库连接方案:长连接、短连接、连接池。</p>
</li>
<li>
<p>数据库的水平拆分与垂直拆分有何区别?各自的使用场景是?</p>
</li>
<li>
<p>设计一个支持百万级流量的数据库架构,需要考虑哪些方面?</p>
</li>
<li>
<p>选择使用物理外键与逻辑外键,应该考量哪些因素?两者的优缺点?</p>
</li>
<li>
<p>如何判断一个数据库是否需要进行分库分表?分库分表的方案有哪些?</p>
</li>
<li>
<p>数据库事务有哪几种隔离级别?各自的优缺点是什么?</p>
</li>
<li>
<p>讲解数据库三大范式的意义,以及如何实现范式设计。</p>
</li>
<li>
<p>什么是数据库的FILESTREAM技术?有什么优点和使用场景?</p>
</li>
<li>
<p>解析主从复制和主主复制的工作原理、优缺点和适用场景。</p>
</li>
<li>
<p>数据库优化中,SQL语句优化和索引优化的重要程度如何区分?</p>
</li>
<li>
<p>讲解行锁和表锁的使用场景、加锁机制、优缺点。</p>
</li>
<li>
<p>如何查看和分析MySQL的慢查询日志?</p>
</li>
<li>
<p>什么是MVCC机制?InnoDB如何通过MVCC实现事务隔离?</p>
</li>
<li>
<p>选择使用联合索引与组合索引的考虑因素有哪些?各自的优缺点?</p>
</li>
<li>
<p>什么是数据库范式?为什么要进行范式化设计?</p>
</li>
<li>
<p>讲解NoSQL数据库的特点,列举几种常见的NoSQL数据库。</p>
</li>
<li>
<p>解析数据库故障转移和负载均衡的工作机制、区别和应用场景。</p>
</li>
<li>
<p>MongoDB和Redis的区别在哪里?各自的应用场景有哪些?</p>
</li>
<li>
<p>数据库连接池的工作原理是什么?使用连接池的优缺点?</p>
</li>
<li>
<p>如何 diagnoase 和优化一个慢SQL查询?需要注意哪些方面?</p>
</li>
<li>
<p>设计一个支持百万用户同时在线的数据库架构,需要考虑哪些方面?</p>
</li>
<li>
<p>解析SQL和NoSQL数据库的区别,以及各自的应用场景。</p>
</li>
<li>
<p>讲解InnoDB和MyISAM这两种存储引擎的特点和区别。</p>
</li>
<li>
<p>什么是数据库范式?为什么需要进行范式化设计?</p>
</li>
<li>
<p>解析行锁、表锁、意向锁的加锁机制、使用场景和优缺点。</p>
</li>
<li>
<p>讲解事务的ACID特性,以及事务的隔离级别和实现。</p>
</li>
<li>
<p>解析B+树和B树的区别,以及为什么索引通常选择B+树。</p>
</li>
<li>
<p>讲解三种常见的数据库拆分方案:垂直拆分、水平拆分、分库分表。</p>
</li>
<li>
<p>数据仓库与数据库有哪些区别?数据仓库的优点是什么?</p>
</li>
<li>
<p>如何设计一个支持地理位置查询的数据库架构方案?</p>
</li>
<li>
<p>什么是数据库的无损扩容?应该如何实现?</p>
</li>
<li>
<p>解析大型数据库系统的容灾技术,需要考虑哪些方面?</p>
</li>
<li>
<p>如何防止和解决数据库中的死锁问题?</p>
</li>
<li>
<p>什么是数据库的主从复制?如何实现 MySQL 的多源复制?</p>
</li>
<li>
<p>解析OLTP系统和OLAP系统的特点和区别。</p>
</li>
<li>
<p>如何为数据库服务器优化内存配置?需要关注哪些参数?</p>
</li>
</ol>`,r:{minutes:38.29,words:11486},y:"a",title:"数据库",i:"page"},["/other/mysql/1","/other/mysql/1.md"]],["v-da2f6d68","/other/mysql/2.html",{a:"xss",d:"2023-12-11T00:00:00.000Z",l:"2023年12月11日",c:["数据库"],g:["数据库","sql"],e:`<hr>
<hr>
<hr>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>使用事务
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
<span class="token keyword">UPDATE</span> <span class="token keyword">user</span> <span class="token keyword">SET</span> balance <span class="token operator">=</span> balance <span class="token operator">-</span> <span class="token number">500</span> <span class="token keyword">WHERE</span> name <span class="token operator">=</span> <span class="token string">'小明'</span><span class="token punctuation">;</span>
<span class="token keyword">UPDATE</span> <span class="token keyword">user</span> <span class="token keyword">SET</span> balance <span class="token operator">=</span> balance <span class="token operator">+</span> <span class="token number">500</span> <span class="token keyword">WHERE</span> name <span class="token operator">=</span> <span class="token string">'小红'</span><span class="token punctuation">;</span>
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
<span class="token keyword">UPDATE</span> <span class="token keyword">user</span> <span class="token keyword">SET</span> balance <span class="token operator">=</span> balance <span class="token operator">-</span> <span class="token number">300</span> <span class="token keyword">WHERE</span> name <span class="token operator">=</span> <span class="token string">'小蓝'</span><span class="token punctuation">;</span>
<span class="token keyword">UPDATE</span> <span class="token keyword">user</span> <span class="token keyword">SET</span> balance <span class="token operator">=</span> balance <span class="token operator">+</span> <span class="token number">300</span> <span class="token keyword">WHERE</span> name <span class="token operator">=</span> <span class="token string">'小红'</span><span class="token punctuation">;</span>
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
<span class="token keyword">UPDATE</span> <span class="token keyword">user</span> <span class="token keyword">SET</span> balance <span class="token operator">=</span> balance <span class="token operator">-</span> <span class="token number">300</span> <span class="token keyword">WHERE</span> name <span class="token operator">=</span> <span class="token string">'小蓝'</span><span class="token punctuation">;</span>
<span class="token keyword">UPDATE</span> <span class="token keyword">user</span> <span class="token keyword">SET</span> balance <span class="token operator">=</span> balance <span class="token operator">+</span> <span class="token number">300</span> <span class="token keyword">WHERE</span> name <span class="token operator">=</span> <span class="token string">'小红'</span><span class="token punctuation">;</span>
<span class="token comment">#设置保存点</span>
<span class="token keyword">SAVEPOINT</span> my_point<span class="token punctuation">;</span>
<span class="token comment">#删除小蓝的数据</span>
<span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> <span class="token keyword">user</span> <span class="token keyword">WHERE</span> name <span class="token operator">=</span> <span class="token string">'小蓝'</span><span class="token punctuation">;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:18.88,words:5664},y:"a",title:"数据库",i:"page"},["/other/mysql/2","/other/mysql/2.md"]],["v-d6c5bc2a","/other/mysql/3.html",{a:"xss",d:"2023-12-11T00:00:00.000Z",l:"2023年12月11日",c:["数据库"],g:["数据库","sql"],e:`<hr>
<hr>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code># 连接到本机的 MySQL，默认 <span class="token number">3306</span> 端口，回车后按提示输入密码，进入 MySQL 控制台
<span class="token constant">C</span><span class="token operator">:</span>\\<span class="token operator">&gt;</span> mysql <span class="token operator">-</span>uroot <span class="token operator">-</span>p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:11.33,words:3399},y:"a",title:"数据库",i:"page"},["/other/mysql/3","/other/mysql/3.md"]],["v-3706649a","/404.html",{y:"p",title:""},["/404"]],["v-e1e3da16","/posts/",{y:"p",title:"Posts"},["/posts/index.html"]],["v-e199c358","/other/demo/",{y:"p",title:"Demo"},["/other/demo/index.html"]],["v-e4cb1150","/other/",{y:"p",title:"Other"},["/other/index.html"]],["v-7ae11416","/other/git/",{y:"p",title:"Git"},["/other/git/index.html"]],["v-65106313","/other/linux/",{y:"p",title:"Linux"},["/other/linux/index.html"]],["v-eb307d1e","/other/io/",{y:"p",title:"Io"},["/other/io/index.html"]],["v-eb305e9a","/other/mq/",{y:"p",title:"Mq"},["/other/mq/index.html"]],["v-0333e414","/other/mybatis/",{y:"p",title:"Mybatis"},["/other/mybatis/index.html"]],["v-7adc32e2","/other/lua/",{y:"p",title:"Lua"},["/other/lua/index.html"]],["v-08f42f4a","/posts/apple/",{y:"p",title:"Apple"},["/posts/apple/index.html"]],["v-30be3cd5","/posts/banana/",{y:"p",title:"Banana"},["/posts/banana/index.html"]],["v-8927552c","/other/spring/",{y:"p",title:"Spring"},["/other/spring/index.html"]],["v-67a8e925","/other/mysql/",{y:"p",title:"Mysql"},["/other/mysql/index.html"]],["v-5bc93818","/category/",{y:"p",title:"分类"},["/category/index.html"]],["v-744d024e","/tag/",{y:"p",title:"标签"},["/tag/index.html"]],["v-e52c881c","/article/",{y:"p",title:"文章"},["/article/index.html"]],["v-154dc4c4","/star/",{y:"p",title:"收藏"},["/star/index.html"]],["v-01560935","/timeline/",{y:"p",title:"时间轴"},["/timeline/index.html"]],["v-03d57386","/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/",{y:"p",title:"使用指南 分类"},["/category/使用指南/","/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/index.html"]],["v-a378ad66","/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/",{y:"p",title:"页面配置 标签"},["/tag/页面配置/","/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/index.html"]],["v-0c75a0f8","/category/%E6%A8%B1%E6%A1%83/",{y:"p",title:"樱桃 分类"},["/category/樱桃/","/category/%E6%A8%B1%E6%A1%83/index.html"]],["v-7b167472","/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/",{y:"p",title:"使用指南 标签"},["/tag/使用指南/","/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/index.html"]],["v-226a68ec","/category/%E7%81%AB%E9%BE%99%E6%9E%9C/",{y:"p",title:"火龙果 分类"},["/category/火龙果/","/category/%E7%81%AB%E9%BE%99%E6%9E%9C/index.html"]],["v-83e1f92e","/tag/%E7%A6%81%E7%94%A8/",{y:"p",title:"禁用 标签"},["/tag/禁用/","/tag/%E7%A6%81%E7%94%A8/index.html"]],["v-12590846","/category/%E6%B0%B4%E6%9E%9C/",{y:"p",title:"水果 分类"},["/category/水果/","/category/%E6%B0%B4%E6%9E%9C/index.html"]],["v-1e447d61","/tag/%E6%96%87%E7%AB%A0%E5%8A%A0%E5%AF%86/",{y:"p",title:"文章加密 标签"},["/tag/文章加密/","/tag/%E6%96%87%E7%AB%A0%E5%8A%A0%E5%AF%86/index.html"]],["v-247d58ff","/category/%E8%8D%89%E8%8E%93/",{y:"p",title:"草莓 分类"},["/category/草莓/","/category/%E8%8D%89%E8%8E%93/index.html"]],["v-484552dc","/tag/markdown/",{y:"p",title:"Markdown 标签"},["/tag/markdown/index.html"]],["v-76b80ea2","/category/%E8%94%AC%E8%8F%9C/",{y:"p",title:"蔬菜 分类"},["/category/蔬菜/","/category/%E8%94%AC%E8%8F%9C/index.html"]],["v-0f1d0e94","/tag/%E7%BA%A2/",{y:"p",title:"红 标签"},["/tag/红/","/tag/%E7%BA%A2/index.html"]],["v-57ded594","/category/demo/",{y:"p",title:"demo 分类"},["/category/demo/index.html"]],["v-3e6b05e8","/tag/%E5%B0%8F/",{y:"p",title:"小 标签"},["/tag/小/","/tag/%E5%B0%8F/index.html"]],["v-94bff69c","/category/%E5%AD%A6%E4%B9%A0%E6%96%87%E6%A1%A3/",{y:"p",title:"学习文档 分类"},["/category/学习文档/","/category/%E5%AD%A6%E4%B9%A0%E6%96%87%E6%A1%A3/index.html"]],["v-301b24f4","/tag/%E5%9C%86/",{y:"p",title:"圆 标签"},["/tag/圆/","/tag/%E5%9C%86/index.html"]],["v-65efd6b5","/category/git/",{y:"p",title:"git 分类"},["/category/git/index.html"]],["v-3ceeab45","/tag/%E5%A4%A7/",{y:"p",title:"大 标签"},["/tag/大/","/tag/%E5%A4%A7/index.html"]],["v-9c48d85a","/category/linux/",{y:"p",title:"linux 分类"},["/category/linux/index.html"]],["v-284efd1e","/tag/demo/",{y:"p",title:"demo 标签"},["/tag/demo/index.html"]],["v-4b2a5661","/category/%E6%96%87%E4%BB%B6io%E6%B5%81/",{y:"p",title:"文件IO流 分类"},["/category/文件io流/","/category/%E6%96%87%E4%BB%B6io%E6%B5%81/index.html"]],["v-7cfd563e","/tag/%E6%96%87%E6%A1%A3/",{y:"p",title:"文档 标签"},["/tag/文档/","/tag/%E6%96%87%E6%A1%A3/index.html"]],["v-5e0b61bd","/category/%E6%95%B0%E6%8D%AE%E5%BA%93/",{y:"p",title:"数据库 分类"},["/category/数据库/","/category/%E6%95%B0%E6%8D%AE%E5%BA%93/index.html"]],["v-b310d42a","/tag/git/",{y:"p",title:"git 标签"},["/tag/git/index.html"]],["v-3d1857f3","/category/mq/",{y:"p",title:"MQ 分类"},["/category/mq/index.html"]],["v-f7c1a2ba","/tag/git%E5%91%BD%E4%BB%A4/",{y:"p",title:"git命令 标签"},["/tag/git命令/","/tag/git%E5%91%BD%E4%BB%A4/index.html"]],["v-34daa3d8","/category/wrapper/",{y:"p",title:"wrapper 分类"},["/category/wrapper/index.html"]],["v-211f44ee","/tag/linux/",{y:"p",title:"linux 标签"},["/tag/linux/index.html"]],["v-4c4c684c","/category/%E4%BD%BF%E7%94%A8/",{y:"p",title:"使用 分类"},["/category/使用/","/category/%E4%BD%BF%E7%94%A8/index.html"]],["v-36ced019","/tag/%E9%97%AE%E9%A2%98/",{y:"p",title:"问题 标签"},["/tag/问题/","/tag/%E9%97%AE%E9%A2%98/index.html"]],["v-033172fa","/category/pageinfo/",{y:"p",title:"pageInfo 分类"},["/category/pageinfo/index.html"]],["v-0da0cabb","/tag/io/",{y:"p",title:"IO 标签"},["/tag/io/index.html"]],["v-538f49ae","/category/%E5%88%86%E9%A1%B5/",{y:"p",title:"分页 分类"},["/category/分页/","/category/%E5%88%86%E9%A1%B5/index.html"]],["v-25365ef3","/tag/%E6%95%B0%E6%8D%AE%E5%BA%93/",{y:"p",title:"数据库 标签"},["/tag/数据库/","/tag/%E6%95%B0%E6%8D%AE%E5%BA%93/index.html"]],["v-65f2474f","/category/lua/",{y:"p",title:"lua 分类"},["/category/lua/index.html"]],["v-b305b122","/tag/sql/",{y:"p",title:"sql 标签"},["/tag/sql/index.html"]],["v-40b68770","/category/%E8%8B%B9%E6%9E%9C/",{y:"p",title:"苹果 分类"},["/category/苹果/","/category/%E8%8B%B9%E6%9E%9C/index.html"]],["v-0da0d9fd","/tag/mq/",{y:"p",title:"MQ 标签"},["/tag/mq/index.html"]],["v-4c41ef7e","/category/%E9%A6%99%E8%95%89/",{y:"p",title:"香蕉 分类"},["/category/香蕉/","/category/%E9%A6%99%E8%95%89/index.html"]],["v-111be24a","/tag/wrapper/",{y:"p",title:"wrapper 标签"},["/tag/wrapper/index.html"]],["v-08073caa","/category/spring/",{y:"p",title:"spring 分类"},["/category/spring/index.html"]],["v-0c9e3db5","/tag/%E6%93%8D%E4%BD%9C%E6%B5%81/",{y:"p",title:"操作流 标签"},["/tag/操作流/","/tag/%E6%93%8D%E4%BD%9C%E6%B5%81/index.html"]],["v-48cec584","/tag/pageinfo/",{y:"p",title:"pageInfo 标签"},["/tag/pageinfo/index.html"]],["v-b30bf2f6","/tag/lua/",{y:"p",title:"lua 标签"},["/tag/lua/index.html"]],["v-42254370","/tag/%E9%BB%84/",{y:"p",title:"黄 标签"},["/tag/黄/","/tag/%E9%BB%84/index.html"]],["v-3aafda76","/tag/%E5%BC%AF%E6%9B%B2%E7%9A%84/",{y:"p",title:"弯曲的 标签"},["/tag/弯曲的/","/tag/%E5%BC%AF%E6%9B%B2%E7%9A%84/index.html"]],["v-624a9248","/tag/%E9%95%BF/",{y:"p",title:"长 标签"},["/tag/长/","/tag/%E9%95%BF/index.html"]],["v-7d0ba9b4","/tag/spring/",{y:"p",title:"spring 标签"},["/tag/spring/index.html"]]];var Vuepress=defineComponent({name:"Vuepress",setup(){const u=usePageLayout();return()=>h$3(u.value)}}),createRoutes=()=>pagesRoutes.reduce((u,[m,b,$,T])=>(u.push({name:m,path:b,component:Vuepress,meta:$},...T.map(j=>({path:j,redirect:b}))),u),[{name:"404",path:"/:catchAll(.*)",component:Vuepress}]),historyCreator=createWebHistory,createVueRouter=()=>{const u=createRouter({history:historyCreator(removeEndingSlash("/")),routes:createRoutes(),scrollBehavior:(m,b,$)=>$||(m.hash?{el:m.hash}:{top:0})});return u.beforeResolve(async(m,b)=>{var $;(m.path!==b.path||b===START_LOCATION_NORMALIZED)&&([pageData.value]=await Promise.all([resolvers.resolvePageData(m.name),($=pagesComponents[m.name])==null?void 0:$.__asyncLoader()]))}),u},setupGlobalComponents=u=>{u.component("ClientOnly",ClientOnly),u.component("Content",Content)},setupGlobalComputed=(u,m,b)=>{const $=computed(()=>resolvers.resolveLayouts(b)),T=computed(()=>resolvers.resolveRouteLocale(siteData.value.locales,m.currentRoute.value.path)),j=computed(()=>resolvers.resolveSiteLocaleData(siteData.value,T.value)),U=computed(()=>resolvers.resolvePageFrontmatter(pageData.value)),G=computed(()=>resolvers.resolvePageHeadTitle(pageData.value,j.value)),W=computed(()=>resolvers.resolvePageHead(G.value,U.value,j.value)),Z=computed(()=>resolvers.resolvePageLang(pageData.value)),Y=computed(()=>resolvers.resolvePageLayout(pageData.value,$.value));return u.provide(layoutsSymbol,$),u.provide(pageFrontmatterSymbol,U),u.provide(pageHeadTitleSymbol,G),u.provide(pageHeadSymbol,W),u.provide(pageLangSymbol,Z),u.provide(pageLayoutSymbol,Y),u.provide(routeLocaleSymbol,T),u.provide(siteLocaleDataSymbol,j),Object.defineProperties(u.config.globalProperties,{$frontmatter:{get:()=>U.value},$head:{get:()=>W.value},$headTitle:{get:()=>G.value},$lang:{get:()=>Z.value},$page:{get:()=>pageData.value},$routeLocale:{get:()=>T.value},$site:{get:()=>siteData.value},$siteLocale:{get:()=>j.value},$withBase:{get:()=>withBase}}),{layouts:$,pageData,pageFrontmatter:U,pageHead:W,pageHeadTitle:G,pageLang:Z,pageLayout:Y,routeLocale:T,siteData,siteLocaleData:j}},setupUpdateHead=()=>{const u=useRoute(),m=usePageHead(),b=usePageLang(),$=ref([]),T=()=>{m.value.forEach(U=>{const G=queryHeadTag(U);G&&$.value.push(G)})},j=()=>{document.documentElement.lang=b.value,$.value.forEach(U=>{U.parentNode===document.head&&document.head.removeChild(U)}),$.value.splice(0,$.value.length),m.value.forEach(U=>{const G=createHeadTag(U);G!==null&&(document.head.appendChild(G),$.value.push(G))})};provide(updateHeadSymbol,j),onMounted(()=>{T(),j(),watch(()=>u.path,()=>j())})},queryHeadTag=([u,m,b=""])=>{const $=Object.entries(m).map(([G,W])=>isString$1(W)?`[${G}=${JSON.stringify(W)}]`:W===!0?`[${G}]`:"").join(""),T=`head > ${u}${$}`;return Array.from(document.querySelectorAll(T)).find(G=>G.innerText===b)||null},createHeadTag=([u,m,b])=>{if(!isString$1(u))return null;const $=document.createElement(u);return isPlainObject(m)&&Object.entries(m).forEach(([T,j])=>{isString$1(j)?$.setAttribute(T,j):j===!0&&$.setAttribute(T,"")}),isString$1(b)&&$.appendChild(document.createTextNode(b)),$},appCreator=createSSRApp,createVueApp=async()=>{var b;const u=appCreator({name:"VuepressApp",setup(){var $;setupUpdateHead();for(const T of clientConfigs)($=T.setup)==null||$.call(T);return()=>[h$3(RouterView),...clientConfigs.flatMap(({rootComponents:T=[]})=>T.map(j=>h$3(j)))]}}),m=createVueRouter();setupGlobalComponents(u),setupGlobalComputed(u,m,clientConfigs);for(const $ of clientConfigs)await((b=$.enhance)==null?void 0:b.call($,{app:u,router:m,siteData}));return u.use(m),{app:u,router:m}};createVueApp().then(({app:u,router:m})=>{m.isReady().then(()=>{u.mount("#app")})});export{P$3 as P,__vitePreload as _,at as a,createVueApp,kt as k,useSiteData as u};
