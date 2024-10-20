import{d as y,r as L,B as c,o as a,c as m,k as _,f as k,b as u,z as h,F as P,ae as I,i as T,l as v,g as $,h as g,e as N,q as b,s as D}from"../modules/vue-vbDzGiox.js";import{a as B,ac as C}from"../index-wGLfva-1.js";import{_ as M}from"./title-renderer.md_vue_type_script_setup_true_lang-CqafI04H.js";import{u as S,f as z}from"./context-BLJ0yKX1.js";import{I as A}from"./default-B5bgXYT-.js";import"../modules/shiki-DRdx_UCq.js";const H=["href","innerHTML"],V=["href"],F=y({__name:"Link",props:{to:{},title:{}},setup(d){const{isPrintMode:r}=B();return(s,o)=>{const l=L("RouterLink");return!c(r)&&s.title?(a(),m(l,{key:0,to:String(s.to),onClick:o[0]||(o[0]=i=>i.target.blur()),innerHTML:s.title},null,8,["to","innerHTML"])):!c(r)&&!s.title?(a(),m(l,{key:1,to:String(s.to),onClick:o[1]||(o[1]=i=>i.target.blur())},{default:_(()=>[k(s.$slots,"default")]),_:3},8,["to"])):c(r)&&s.title?(a(),u("a",{key:2,href:`#${s.to}`,innerHTML:s.title},null,8,H)):(a(),u("a",{key:3,href:`#${s.to}`},[k(s.$slots,"default")],8,V))}}}),O=["start"],R=y({__name:"TocList",props:{level:{default:1},start:{},listStyle:{},list:{},listClass:{}},setup(d){const r=d,s=h(()=>[...C(r.listClass||[]),"slidev-toc-list",`slidev-toc-list-level-${r.level}`]),o=h(()=>[...C(r.listStyle||[])]);return(l,i)=>{const f=F,e=L("TocList",!0);return l.list&&l.list.length>0?(a(),u("ol",{key:0,class:T(s.value),start:l.level===1?l.start:void 0,style:g(o.value.length>=l.level?`list-style:${o.value[l.level-1]}`:void 0)},[(a(!0),u(P,null,I(l.list,t=>(a(),u("li",{key:t.path,class:T(["slidev-toc-item",[{"slidev-toc-item-active":t.active},{"slidev-toc-item-parent-active":t.activeParent}]])},[v(f,{to:t.path},{default:_(()=>[v(c(M),{no:t.no},null,8,["no"])]),_:2},1032,["to"]),t.children.length>0?(a(),m(e,{key:0,level:l.level+1,"list-style":l.listStyle,list:t.children,"list-class":l.listClass},null,8,["level","list-style","list","list-class"])):$("v-if",!0)],2))),128))],14,O)):$("v-if",!0)}}}),E=y({__name:"Toc",props:{columns:{default:1},listClass:{default:""},start:{default:1},listStyle:{default:""},maxDepth:{default:Number.POSITIVE_INFINITY},minDepth:{default:1},mode:{default:"all"}},setup(d){const r=d,{$slidev:s}=S();function o(e,t=1){if(t>Number(r.maxDepth))return[];if(t<Number(r.minDepth)){const n=e.find(p=>p.active||p.activeParent);return n?o(n.children,t+1):[]}return e.map(n=>({...n,children:o(n.children,t+1)}))}function l(e){return e.filter(t=>t.active||t.activeParent||t.hasActiveParent).map(t=>({...t,children:l(t.children)}))}function i(e){const t=e.some(n=>n.active||n.activeParent||n.hasActiveParent);return e.filter(()=>t).map(n=>({...n,children:i(n.children)}))}const f=h(()=>{const e=s==null?void 0:s.nav.tocTree;if(!e)return[];let t=o(e);return r.mode==="onlyCurrentTree"?t=l(t):r.mode==="onlySiblings"&&(t=i(t)),t});return(e,t)=>{const n=R;return a(),u("div",{class:"slidev-toc",style:g(`column-count:${e.columns}`)},[v(n,{level:1,start:e.start,"list-style":e.listStyle,list:f.value,"list-class":e.listClass},null,8,["start","list-style","list","list-class"])],4)}}}),K={__name:"2",setup(d){const{$slidev:r,$nav:s,$clicksContext:o,$clicks:l,$page:i,$renderContext:f,$frontmatter:e}=S();return(t,n)=>{const p=E;return a(),m(A,b(D(c(z)(c(e),1))),{default:_(()=>[n[0]||(n[0]=N("h2",null,"目录",-1)),v(p,{maxDepth:1})]),_:1},16)}}};export{K as default};
