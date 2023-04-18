import{d as _,i as d,a as h,u as p,b as u,c as m,e as f,f as n,g as t,t as s,h as a,F as g,r as v,n as x,j as b,o as r,k,l as y,m as N,p as w,q as P,_ as V}from"./index-87e1ca27.js";import{N as S}from"./NoteViewer-3387c653.js";const j={class:"m-4"},L={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},B={class:"opacity-50"},C={class:"text-lg"},H={class:"font-bold flex gap-2"},z={class:"opacity-50"},D=t("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-gray-400/50 mb-8"},M=_({__name:"PresenterPrint",setup(q){d(h),p(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),u({title:`Notes - ${m.title}`});const i=f(()=>b.slice(0,-1).map(o=>{var l;return(l=o.meta)==null?void 0:l.slide}).filter(o=>o!==void 0&&o.notesHTML!==""));return(o,l)=>(r(),n("div",{id:"page-root",style:x(a(P))},[t("div",j,[t("div",L,[t("h1",T,s(a(m).title),1),t("div",B,s(new Date().toLocaleString()),1)]),(r(!0),n(g,null,v(a(i),(e,c)=>(r(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",C,[t("div",H,[t("div",z,s(e==null?void 0:e.no)+"/"+s(a(k)),1),y(" "+s(e==null?void 0:e.title)+" ",1),D])]),N(S,{"note-html":e.notesHTML,class:"max-w-full"},null,8,["note-html"])]),c<a(i).length-1?(r(),n("hr",F)):w("v-if",!0)]))),128))])],4))}}),R=V(M,[["__file","/home/runner/work/talks/talks/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{R as default};
