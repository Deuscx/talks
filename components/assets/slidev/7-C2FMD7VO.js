import{A as E,B as L}from"../modules/unplugin-icons-Cppc6Wzd.js";import{d as N,t as V,aB as H,C as B,ac as M,y as b,aG as q,o as h,b as x,f as F,A as c,c as f,g as k,i as P,h as T,k as w,l as z,m as R,q as K,s as W,e as i,a6 as o}from"../modules/vue-Bgk5hsBY.js";import{v as S,ac as G,C as U,af as X,ag as J}from"../index-A9_TsZFy.js";import{u as I,f as O}from"./context-DunuvAvR.js";import{I as Q}from"./default-C0QHbcT5.js";import"../modules/shiki-B1dLx_rj.js";const Y=["title"],Z=N({__name:"CodeBlockWrapper",props:{ranges:{type:Array,default:()=>[]},finally:{type:[String,Number],default:"last"},startLine:{type:Number,default:1},lines:{type:Boolean,default:S.lineNumbers},at:{type:[String,Number],default:"+1"},maxHeight:{type:String,default:void 0}},setup(m){const s=m,{$clicksContext:r}=I(),l=V(),p=G();H(()=>{r.unregister(p)}),B(()=>{var e;(e=l.value)==null||e.classList.toggle("slidev-code-line-numbers",s.lines)}),M(()=>{var d;if(!r||!((d=s.ranges)!=null&&d.length))return;const e=r.calculateSince(s.at,s.ranges.length-1);r.register(p,e);const t=b(()=>e?Math.max(0,r.current-e.start+1):U),a=b(()=>s.finally==="last"?s.ranges.at(-1):s.finally.toString());B(()=>{if(!l.value)return;let g=s.ranges[t.value]??a.value;const _=g==="hide";l.value.classList.toggle(X,_),_&&(g=s.ranges[t.value+1]??a.value);const A=l.value.querySelector(".shiki"),C=Array.from(A.querySelectorAll("code > .line")),$=C.length;if(J(g,$,s.startLine,n=>[C[n]]),s.maxHeight){const n=Array.from(A.querySelectorAll(".line.highlighted"));n.reduce((D,j)=>j.offsetHeight+D,0)>l.value.offsetHeight?n[0].scrollIntoView({behavior:"smooth",block:"start"}):n.length>0&&n[Math.round((n.length-1)/2)].scrollIntoView({behavior:"smooth",block:"center"})}})});const{copied:y,copy:v}=q();function u(){var t,a;const e=(a=(t=l.value)==null?void 0:t.querySelector(".slidev-code"))==null?void 0:a.textContent;e&&v(e)}return(e,t)=>{const a=E,d=L;return h(),x("div",{ref_key:"el",ref:l,class:P(["slidev-code-wrapper relative group",{"slidev-code-line-numbers":s.lines}]),style:T({"max-height":s.maxHeight,"overflow-y":s.maxHeight?"scroll":void 0,"--start":s.startLine})},[F(e.$slots,"default"),c(S).codeCopy?(h(),x("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:c(y)?"Copied":"Copy",onClick:t[0]||(t[0]=g=>u())},[c(y)?(h(),f(a,{key:0,class:"p-2 w-8 h-8"})):(h(),f(d,{key:1,class:"p-2 w-8 h-8"}))],8,Y)):k("v-if",!0)],6)}}}),ii=i("h1",null,"Icons",-1),si=i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-html"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"<!-- An orange alarm from Material Design Icons -->")]),o(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"div"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," class"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"i-mdi-alarm text-orange-400"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}}," /"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")]),o(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"<!-- A large Vue logo -->")]),o(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"div"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," class"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"i-logos-vue text-3xl"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}}," /"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")]),o(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"<!-- Sun in light mode, Moon in dark mode, from Carbon -->")]),o(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"button"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," class"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"i-carbon-sun dark:i-carbon-moon"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}}," /"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")]),o(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"<!-- Twemoji of laugh, turns to tear on hovering -->")]),o(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"div"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," class"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999","--shiki-dark-font-style":"italic","--shiki-light-font-style":"italic"}}," /"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")])])],-1),ei=i("div",{class:"w-full flex items-center justify-center gap-x-4 text-4xl p-2 mt-4"},[k(" An orange alarm from Material Design Icons "),i("div",{class:"i-mdi-alarm text-orange-400"}),k(" A large Vue logo "),i("div",{class:"i-logos-vue text-3xl"}),k(" Sun in light mode, Moon in dark mode, from Carbon "),i("button",{class:"i-carbon-sun dark:i-carbon-moon"}),k(" Twemoji of laugh, turns to tear on hovering "),i("div",{class:"i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy"})],-1),ki={__name:"7",setup(m){const{$slidev:s,$nav:r,$clicksContext:l,$clicks:p,$page:y,$renderContext:v,$frontmatter:u}=I();return(e,t)=>{const a=Z;return h(),f(Q,K(W(c(O)(c(u),6))),{default:w(()=>[ii,z(a,R({},{ranges:[]}),{default:w(()=>[si]),_:1},16),ei]),_:1},16)}}};export{ki as default};
