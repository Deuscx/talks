import{_ as l}from"./CodeBlockWrapper.vue_vue_type_script_setup_true_lang-D3UoTxyF.js";import{o as e,c as n,k as h,l as p,m as d,q as r,s as g,A as k,e as i,a6 as s}from"../modules/vue-DJcEiztt.js";import{I as y}from"./default-Cu-rJO8A.js";import{u as A,f as D}from"./context-DU5YJk2D.js";import"../modules/unplugin-icons-BdNrKeCQ.js";import"../index-0Gy_dhNt.js";import"../modules/shiki-B18_m8lD.js";const o=i("p",null,"共享数据类型提供 和原生类型相同的API，但对上层而言，并发更新时潜在的状态冲突已经被 Yjs 自动解决了：",-1),B=i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-jsx"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// 可以用 2 份独立的 YDoc 实例来模拟 2 个客户端")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," doc1"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," new"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," Y"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"Doc"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"()")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," doc2"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," new"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," Y"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"Doc"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"()")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," yText1"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," doc1"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"getText"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"()")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," yText2"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," doc2"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"getText"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"()")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// 在某份 YDoc 更新时，应用二进制的 update 数据到另一份 YDoc 上")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"doc1"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"on"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},"'"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"update"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ("),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"update"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," =>"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," Y"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"applyUpdate"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"doc2"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," update"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"))")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"doc2"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"on"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},"'"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"update"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ("),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"update"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," =>"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," Y"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"applyUpdate"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"doc1"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," update"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"))")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// 制造两次存在潜在冲突的更新")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"yText1"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"insert"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}},"0"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}}," '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"Edwards"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"yText2"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"insert"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}},"0"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}}," '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"Wilson"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// CRDT 算法可保证两份客户端中的状态始终一致")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"yText1"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"toJSON"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"()"),i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," // WilsonEdwards")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"yText2"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"toJSON"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"()"),i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," // WilsonEdwards")])])],-1),c=i("p",null,"在代码示例中，首先创建了两个 Doc 实例 (doc1 和 doc2)，两者都挂载了一个 Y.Text实例。然后分别向 doc1 和 doc2 的 Y.Text 实例中插入元素，监听doc的update事件，使用applyUpdate同步数据。模拟 Yjs 中的并发更新。",-1),E={__name:"25",setup(C){const{$slidev:u,$nav:m,$clicksContext:_,$clicks:f,$page:x,$renderContext:T,$frontmatter:a}=A();return(Y,$)=>{const t=l;return e(),n(y,r(g(k(D)(k(a),24))),{default:h(()=>[o,p(t,d({},{ranges:[]}),{default:h(()=>[B]),_:1},16),c]),_:1},16)}}};export{E as default};
