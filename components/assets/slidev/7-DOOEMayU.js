import{A as E,B as L}from"../modules/unplugin-icons-DLqKP4x2.js";import{d as N,t as V,aB as H,D as _,ad as M,z as b,aG as q,o as h,b as x,f as z,B as c,c as f,g as k,i as F,h as P,k as w,e as i,l as T,m as R,a7 as o,q as K,s as W}from"../modules/vue-BN0LjGHi.js";import{v as S,ac as G,C as U,af as X,ag as J}from"../index-j7mVdA80.js";import{u as I,f as O}from"./context-BfHhhU-n.js";import{I as Q}from"./default-578w31jX.js";import"../modules/shiki-BzK2kcEU.js";const Y=["title"],Z=N({__name:"CodeBlockWrapper",props:{ranges:{type:Array,default:()=>[]},finally:{type:[String,Number],default:"last"},startLine:{type:Number,default:1},lines:{type:Boolean,default:S.lineNumbers},at:{type:[String,Number],default:"+1"},maxHeight:{type:String,default:void 0}},setup(m){const s=m,{$clicksContext:r}=I(),l=V(),p=G();H(()=>{r.unregister(p)}),_(()=>{var t;(t=l.value)==null||t.classList.toggle("slidev-code-line-numbers",s.lines)}),M(()=>{var d;if(!r||!((d=s.ranges)!=null&&d.length))return;const t=r.calculateSince(s.at,s.ranges.length-1);r.register(p,t);const e=b(()=>t?Math.max(0,r.current-t.start+1):U),a=b(()=>s.finally==="last"?s.ranges.at(-1):s.finally.toString());_(()=>{if(!l.value)return;let g=s.ranges[e.value]??a.value;const D=g==="hide";l.value.classList.toggle(X,D),D&&(g=s.ranges[e.value+1]??a.value);const A=l.value.querySelector(".shiki"),C=Array.from(A.querySelectorAll("code > .line")),$=C.length;if(J(g,$,s.startLine,n=>[C[n]]),s.maxHeight){const n=Array.from(A.querySelectorAll(".line.highlighted"));n.reduce((B,j)=>j.offsetHeight+B,0)>l.value.offsetHeight?n[0].scrollIntoView({behavior:"smooth",block:"start"}):n.length>0&&n[Math.round((n.length-1)/2)].scrollIntoView({behavior:"smooth",block:"center"})}})});const{copied:y,copy:v}=q();function u(){var e,a;const t=(a=(e=l.value)==null?void 0:e.querySelector(".slidev-code"))==null?void 0:a.textContent;t&&v(t)}return(t,e)=>{const a=E,d=L;return h(),x("div",{ref_key:"el",ref:l,class:F(["slidev-code-wrapper relative group",{"slidev-code-line-numbers":s.lines}]),style:P({"max-height":s.maxHeight,"overflow-y":s.maxHeight?"scroll":void 0,"--start":s.startLine})},[z(t.$slots,"default"),c(S).codeCopy?(h(),x("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:c(y)?"Copied":"Copy",onClick:e[0]||(e[0]=g=>u())},[c(y)?(h(),f(a,{key:0,class:"p-2 w-8 h-8"})):(h(),f(d,{key:1,class:"p-2 w-8 h-8"}))],8,Y)):k("v-if",!0)],6)}}}),oi={__name:"7",setup(m){const{$slidev:s,$nav:r,$clicksContext:l,$clicks:p,$page:y,$renderContext:v,$frontmatter:u}=I();return(t,e)=>{const a=Z;return h(),f(Q,K(W(c(O)(c(u),6))),{default:w(()=>[e[1]||(e[1]=i("h1",null,"Icons",-1)),T(a,R({},{ranges:[]}),{default:w(()=>e[0]||(e[0]=[i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-html"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"<!-- An orange alarm from Material Design Icons -->")]),o(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"div"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," class"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"i-mdi-alarm text-orange-400"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),i("span",{style:{"--shiki-dark":"#666666","--shiki-dark-font-style":"italic","--shiki-light":"#999999","--shiki-light-font-style":"italic"}}," /"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")]),o(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"<!-- A large Vue logo -->")]),o(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"div"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," class"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"i-logos-vue text-3xl"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),i("span",{style:{"--shiki-dark":"#666666","--shiki-dark-font-style":"italic","--shiki-light":"#999999","--shiki-light-font-style":"italic"}}," /"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")]),o(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"<!-- Sun in light mode, Moon in dark mode, from Carbon -->")]),o(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"button"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," class"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"i-carbon-sun dark:i-carbon-moon"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),i("span",{style:{"--shiki-dark":"#666666","--shiki-dark-font-style":"italic","--shiki-light":"#999999","--shiki-light-font-style":"italic"}}," /"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")]),o(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"<!-- Twemoji of laugh, turns to tear on hovering -->")]),o(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"div"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," class"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),i("span",{style:{"--shiki-dark":"#666666","--shiki-dark-font-style":"italic","--shiki-light":"#999999","--shiki-light-font-style":"italic"}}," /"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")])])],-1)])),_:1},16),e[2]||(e[2]=i("div",{class:"w-full flex items-center justify-center gap-x-4 text-4xl p-2 mt-4"},[k(" An orange alarm from Material Design Icons "),i("div",{class:"i-mdi-alarm text-orange-400"}),k(" A large Vue logo "),i("div",{class:"i-logos-vue text-3xl"}),k(" Sun in light mode, Moon in dark mode, from Carbon "),i("button",{class:"i-carbon-sun dark:i-carbon-moon"}),k(" Twemoji of laugh, turns to tear on hovering "),i("div",{class:"i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy"})],-1))]),_:1},16)}}};export{oi as default};
