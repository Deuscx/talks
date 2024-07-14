import{_ as k}from"./CodeBlockWrapper.vue_vue_type_script_setup_true_lang-Bqu6H8yD.js";import{o as n,c as e,k as t,l as r,m as d,q as o,s as p,A as l,e as i,a6 as s}from"../modules/vue-CS_L6F0n.js";import{I as c}from"./default-CqVNU4zf.js";import{u as g,f as y}from"./context-C5y4oXkb.js";import"../modules/unplugin-icons-U3VlxlAp.js";import"../index-CdkH_DJV.js";import"../modules/shiki-DmSK81-P.js";const f=i("h1",null,"开发Node Addon工具",-1),B=i("ul",null,[i("li",null,[s("node-gyp (Generate Your Project) "),i("ul",null,[i("li",null,[s("它会识别包或者项目中的 "),i("strong",null,"binding.gyp"),s("，然后根据该配置文件生成各系统下能进行编译的项目，如 Windows 下生成 Visual Studio 项目文件（*"),i("strong",null,".sln"),s("等），Unix 下生成 Makefile。")])])]),i("li",null,"binding.gyp")],-1),D=i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-json"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"{")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#FDAEB7","--shiki-light":"#B31D28","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"  'targets'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"    {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#FDAEB7","--shiki-light":"#B31D28","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"      'target_name'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#FDAEB7","--shiki-light":"#B31D28","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}}," 'addon'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#FDAEB7","--shiki-light":"#B31D28","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"      'sources'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#FDAEB7","--shiki-light":"#B31D28","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"        'src/lib/addon.c'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#FDAEB7","--shiki-light":"#B31D28","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"        'src/lib/napi_helpers.c'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"      ],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#FDAEB7","--shiki-light":"#B31D28","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"      'conditions'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"        ["),i("span",{style:{"--shiki-dark":"#FDAEB7","--shiki-light":"#B31D28","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"'OS=="),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"win"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#FDAEB7","--shiki-light":"#B31D28","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},",{"),i("span",{style:{"--shiki-dark":"#FDAEB7","--shiki-light":"#B31D28","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"..."),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"}],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"        ["),i("span",{style:{"--shiki-dark":"#FDAEB7","--shiki-light":"#B31D28","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"'OS=="),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"linux"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#FDAEB7","--shiki-light":"#B31D28","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"        ["),i("span",{style:{"--shiki-dark":"#FDAEB7","--shiki-light":"#B31D28","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"'OS=="),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"mac"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#FDAEB7","--shiki-light":"#B31D28","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"]")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"      ]")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"    }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"  ]")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"}")])])],-1),w={__name:"19",setup(u){const{$slidev:A,$nav:m,$clicksContext:_,$clicks:C,$page:E,$renderContext:F,$frontmatter:a}=g();return(x,$)=>{const h=k;return n(),e(c,o(p(l(y)(l(a),18))),{default:t(()=>[f,B,r(h,d({},{ranges:[]}),{default:t(()=>[D]),_:1},16)]),_:1},16)}}};export{w as default};