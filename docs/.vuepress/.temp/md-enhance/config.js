import { defineClientConfig } from "@vuepress/client";
import ChartJS from "D:/peixun/vuepress-starter/my-notes/node_modules/vuepress-plugin-md-enhance/lib/client/components/ChartJS.js";
import CodeTabs from "D:/peixun/vuepress-starter/my-notes/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { CodeGroup, CodeGroupItem } from "D:/peixun/vuepress-starter/my-notes/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import "D:/peixun/vuepress-starter/my-notes/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import CodeDemo from "D:/peixun/vuepress-starter/my-notes/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import ECharts from "D:/peixun/vuepress-starter/my-notes/node_modules/vuepress-plugin-md-enhance/lib/client/components/ECharts.js";
import "D:/peixun/vuepress-starter/my-notes/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import FlowChart from "D:/peixun/vuepress-starter/my-notes/node_modules/vuepress-plugin-md-enhance/lib/client/components/FlowChart.js";
import "D:/peixun/vuepress-starter/my-notes/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import "D:/peixun/vuepress-starter/my-notes/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss";
import Mermaid from "D:/peixun/vuepress-starter/my-notes/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";
import Presentation from "D:/peixun/vuepress-starter/my-notes/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation.js";
import Playground from "D:/peixun/vuepress-starter/my-notes/node_modules/vuepress-plugin-md-enhance/lib/client/components/Playground.js";
import Tabs from "D:/peixun/vuepress-starter/my-notes/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "D:/peixun/vuepress-starter/my-notes/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";
import "D:/peixun/vuepress-starter/my-notes/node_modules/vuepress-plugin-md-enhance/lib/client/styles/katex.scss";
import { defineAsyncComponent } from "vue";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS);
    app.component("CodeTabs", CodeTabs);
    app.component("CodeGroup", CodeGroup);
    app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("ECharts", ECharts);
    app.component("FlowChart", FlowChart);
    app.component("Mermaid", Mermaid);
    app.component("Presentation", Presentation);
    app.component("Playground", Playground);
    app.component("Tabs", Tabs);
    app.component("VuePlayground", defineAsyncComponent(() => import("D:/peixun/vuepress-starter/my-notes/node_modules/vuepress-plugin-md-enhance/lib/client/components/VuePlayground.js")));
        
  },
});
