import{d as u,o as c,b as d,e as t,f as r,i as o,c as m,k as l,q as _,s as f,A as n,a6 as h}from"../modules/vue-DJcEiztt.js";import{u as g,f as $}from"./context-DU5YJk2D.js";import"../index-0Gy_dhNt.js";import"../modules/shiki-B18_m8lD.js";const C=u({__name:"two-cols",props:{class:{type:String},layoutClass:{type:String}},setup(a){const s=a;return(e,i)=>(c(),d("div",{class:o(["slidev-layout two-columns w-full h-full grid grid-cols-2",s.layoutClass])},[t("div",{class:o(["col-left",s.class])},[r(e.$slots,"default")],2),t("div",{class:o(["col-right",s.class])},[r(e.$slots,"right")],2)],2))}}),k=t("p",null,"A 和 B 的操作都需要经过中心化的服务去做 OT 转换, 经过OT转换 Insert(3,L) 转换成了 Insert(2,L)",-1),v=t("p",null,"OT 转换 可以自己去实现具体的转换算法，也可以利用社区成熟的 ot.js, sharedb 库来实现",-1),x=t("ul",null,[t("li",null,[h("可视化工具来观察操作的转换变化: "),t("a",{href:"https://operational-transformation.github.io/",target:"_blank"},"https://operational-transformation.github.io/")])],-1),b=t("img",{src:"https://raw.githubusercontent.com/Deuscx/pic/master/20230624171242.png"},null,-1),L={__name:"13",setup(a){const{$slidev:s,$nav:e,$clicksContext:i,$clicks:w,$page:y,$renderContext:B,$frontmatter:p}=g();return(T,P)=>(c(),m(C,_(f(n($)(n(p),12))),{right:l(S=>[b]),default:l(()=>[k,v,x]),_:1},16))}};export{L as default};