import{q as h,v as B,e as d,j as V,x as g,r,o as u,a as i,d as l,b as s,F as C,f as w,u as m,k as M,t as T}from"./index-cb2d9244.js";import{M as I}from"./MyTravelHeader-d3996035.js";import"./_plugin-vue_export-helper-c27b6911.js";const F={class:"my-travel-book-view"},L={key:0},N={class:"travel-book d-flex flex-column"},R=["for"],$={class:"travel-navs d-flex space-between"},A={class:"d-flex flex-column"},U={class:"btns d-flex flex-column align-center"},H={__name:"MyTravelBook",setup(j){const v=h(),c=B();c.params.id;const p=d([{name:"Отель “Звезда” 03.08.2023 - 05.08.2023 ",key:"A"},{name:"Ресторан “Достоевский” 01.08.2023",key:"M"},{name:"Театр МОСТ 02.08.2023",key:"P"},{name:"Кафе “Нижний” 02.08.2023",key:"R"}]),t=d([]),a=d(!1);V(a,f=>{a.value?t.value=[...p.value.map(e=>e.name)]:a.value||(t.value=[])});const _=g(()=>!!c.path.includes("finish"));return(f,e)=>{const k=r("ToggleButton"),b=r("Checkbox"),n=r("Button"),y=r("router-view");return u(),i("div",F,[l(I),_.value?M("",!0):(u(),i("div",L,[s("div",null,[l(k,{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=o=>a.value=o),onLabel:"Убрать все",offLabel:"Выбрать все",onIcon:"pi pi-times",offIcon:"pi pi-check"},null,8,["modelValue"])]),s("div",N,[(u(!0),i(C,null,w(p.value,o=>(u(),i("div",{key:o.key,class:"travel-book__item d-flex align-center"},[l(b,{modelValue:t.value,"onUpdate:modelValue":e[1]||(e[1]=x=>t.value=x),inputId:o.key,name:"category",value:o.name},null,8,["modelValue","inputId","value"]),s("label",{for:o.key},T(o.name),9,R)]))),128))]),s("div",$,[s("div",A,[l(n,{class:"secondary",label:"Назад",onClick:e[2]||(e[2]=o=>m(v).back())}),l(n,{class:"secondary",label:"Забронировать",onClick:e[3]||(e[3]=o=>m(v).push(`/book/${m(c).params.id}/finish`))})]),s("div",U,[l(n,{class:"primary pulse",label:"Рекомендации нейросети"}),l(n,{class:"primary pulse",label:"Рекомендации по характеру"})])])])),l(y,{else:""})])}}};export{H as default};
