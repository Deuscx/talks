import{d as C,ac as M,aB as F,o as _,c as $,F as H,aC as I,v as k,aD as u,aE as L,l as V,aa as w,aF as G,k as E,e as s,g as N,b as P,q as R,s as W,A as b,a6 as l}from"../modules/vue-Bgk5hsBY.js";import{ac as j,ad as q,ae as K,C as O}from"../index-A9_TsZFy.js";import{u as z,f as U}from"./context-DunuvAvR.js";import{I as X}from"./default-C0QHbcT5.js";import"../modules/shiki-B1dLx_rj.js";const J=C({__name:"VClickGap",props:{size:{type:[String,Number],default:1}},setup(h){const a=h,{$clicksContext:r}=z(),o=j();let p=+a.size;return Number.isNaN(p)&&(console.warn(`[slidev] Invalid size for VClickGap: ${a.size}`),p=1),M(()=>{const d=r.currentOffset+p-1;r.register(o,{max:d,delta:p})}),F(()=>{r.unregister(o)}),(d,t)=>(_(),$(H))}}),S=["ul","ol"],Q=C({props:{depth:{type:[Number,String],default:1},every:{type:[Number,String],default:1},at:{type:[Number,String],default:"+1"},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},handleSpecialElements:{type:Boolean,default:!0}},render(){var v,x;const h=+this.every,a=q(this.at),r=typeof a=="string";if(!a){console.warn("[slidev] Invalid at prop for v-clicks component:",a);return}const o=I("click"),p=(n,i)=>w(n,[[o,i,"",{hide:this.hide,fade:this.fade}]]),d=n=>n.flatMap(i=>u(i)&&typeof i.type=="symbol"&&Array.isArray(i.children)?d(i.children):[i]);let t=(x=(v=this.$slots).default)==null?void 0:x.call(v);if(!t)return;t=d(K(t));const A=(n,i=1)=>d(n).map(e=>{if(!u(e))return e;if(S.includes(e.type)&&Array.isArray(e.children)){const B=c(e.children,i+1);return k(e,{},B)}return k(e)});let D=1,g=0;const c=(n,i=1)=>d(n).map(e=>{if(!u(e)||e.type===L)return e;const B=+a+Math.ceil(D++/h)-1;let f;i<+this.depth&&Array.isArray(e.children)?f=k(e,{},A(e.children,i)):f=k(e);const m=B-g;return g=B,p(f,r?m>=0?`+${m}`:`${m}`:B)}),y=()=>V(J,{size:+a+Math.ceil((D-1)/h)-1-g});if(this.handleSpecialElements){if(t.length===1&&S.includes(t[0].type)&&Array.isArray(t[0].children))return k(t[0],{},[...c(t[0].children),y()]);if(t.length===1&&t[0].type==="table"){const n=t[0];if(Array.isArray(n.children))return k(n,{},n.children.map(i=>u(i)?i.type==="tbody"&&Array.isArray(i.children)?k(i,{},[...c(i.children),y()]):k(i):i))}}return[...c(t),y()]}}),Y=C({props:{at:{type:[Number,String],default:"+1"},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},wrapText:{type:Function,default:h=>k("span",h)}},render(){return k(Q,{every:O,at:this.at,hide:this.hide,fade:this.fade,handleSpecialElements:!1},{default:()=>{var h,a;return(a=(h=this.$slots).default)==null?void 0:a.call(h).map(r=>r.type===G?this.wrapText(r):r)}})}}),Z=s("h1",null,"动画",-1),ss={class:"grid grid-cols-2"},is=s("p",null,"Hello World",-1),es={class:"text-xl p-2"},ts=s("p",null,"Hey!",-1),as=[ts],ls=s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-typescript"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," <"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"!--"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," 组件用法"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"："),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"在你按下"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," “"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"下一步"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"” "),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"之前"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"，"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"这是不可见的"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," --"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," <"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"v"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"-"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"click"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," Hello"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," World")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," <"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"/"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"v"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"-"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"click"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," <"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"!--"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," 指令用法"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"："),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"在你第二次按下"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," “"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"下一步"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"” "),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"之前"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"，"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"这是不可见的"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," --"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," <"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"div"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," v"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"-"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"click"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," class"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"text-xl p-2"),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," Hey"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"!")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," <"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"/"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"div"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")])])],-1),ps={__name:"4",setup(h){const{$slidev:a,$nav:r,$clicksContext:o,$clicks:p,$page:d,$renderContext:t,$frontmatter:A}=z();return(D,g)=>{const c=Y,y=I("click");return _(),$(X,R(W(b(U)(b(A),3))),{default:E(()=>[Z,s("div",ss,[N(" 组件用法：在你按下 “下一步” 之前，这是不可见的 "),V(c,null,{default:E(()=>[is]),_:1}),N(" 指令用法：在你第二次按下 “下一步” 之前，这是不可见的 "),w((_(),P("div",es,as)),[[y]])]),ls]),_:1},16)}}};export{ps as default};
