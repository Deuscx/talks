import{d as a,i as c,a as m,o as s,f as i,z as l,t as u,_ as d}from"./index-81f3109d.js";const k=["innerHTML"],f=["textContent"],p=a({__name:"NoteViewer",props:{class:{type:String,required:!1},noteHtml:{type:String,required:!1},note:{type:String,required:!1}},emits:["click"],setup(e){const n=e;return c(m),(o,t)=>e.noteHtml?(s(),i("div",{key:0,class:l(["prose overflow-auto outline-none",n.class]),onClick:t[0]||(t[0]=r=>o.$emit("click")),innerHTML:e.noteHtml},null,10,k)):(s(),i("div",{key:1,class:l(["prose overflow-auto outline-none",n.class]),onClick:t[1]||(t[1]=r=>o.$emit("click")),textContent:u(e.note)},null,10,f))}}),C=d(p,[["__file","/home/runner/work/talks/talks/node_modules/@slidev/client/internals/NoteViewer.vue"]]);export{C as N};
