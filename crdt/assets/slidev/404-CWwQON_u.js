import{d as f,M as m,y as h,r as x,o as n,b as v,e,a6 as a,x as r,A as g,c as p,k as u,g as d,p as k,a as S}from"../modules/vue-DJcEiztt.js";import{a as y,_ as N}from"../index-0Gy_dhNt.js";import"../modules/shiki-B18_m8lD.js";const w=o=>(k("data-v-646714fc"),o=o(),S(),o),B={class:"grid justify-center text-center pt-15% gap-5"},C=w(()=>e("h1",{class:"text-9xl font-light"}," 404 ",-1)),I={class:"text-2xl"},R={class:"op-60"},V={class:"mt-3 flex flex-col gap-2 max-w-xs mx-auto w-full"},G=f({__name:"404",setup(o){const{currentRoute:l}=m(),{total:i}=y(),s=h(()=>{const c=l.value.path.match(/\d+/);if(c){const t=+c[0];if(t>0&&t<=i.value)return t}return null});return(_,c)=>{const t=x("RouterLink");return n(),v("div",B,[e("div",null,[C,e("p",I,[a(" Page "),e("code",R,r(g(l).path),1),a(" not found ")])]),e("div",V,[s.value!==1?(n(),p(t,{key:0,to:"/",class:"page-link"},{default:u(()=>[a(" Go Home ")]),_:1})):d("v-if",!0),s.value?(n(),p(t,{key:1,to:`/${s.value}`,class:"page-link"},{default:u(()=>[a(" Go to Slide "+r(s.value),1)]),_:1},8,["to"])):d("v-if",!0)])])}}}),A=N(G,[["__scopeId","data-v-646714fc"]]);export{A as default};
