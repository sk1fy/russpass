import{q as h,v as C,e as d,j as V,x as g,r,o as u,a as i,d as l,b as t,F as B,f as w,u as m,k as M,t as T}from"./index-cb2d9244.js";import{M as I}from"./MyTravelHeader-d3996035.js";import"./_plugin-vue_export-helper-c27b6911.js";const F={class:"my-travel-cart-view"},L={key:0},N={class:"travel-cart d-flex flex-column"},R=["for"],$={class:"travel-navs d-flex space-between"},A={class:"d-flex flex-column"},U={class:"btns d-flex flex-column align-center"},H={__name:"MyTravelCart",setup(j){const v=h(),c=C();c.params.id;const p=d([{name:"Отель “Звезда” 03.08.2023 - 05.08.2023 ",key:"A"},{name:"Ресторан “Достоевский” 01.08.2023",key:"M"},{name:"Театр МОСТ 02.08.2023",key:"P"},{name:"Кафе “Нижний” 02.08.2023",key:"R"}]),n=d([]),s=d(!1);V(s,f=>{s.value?n.value=[...p.value.map(e=>e.name)]:s.value||(n.value=[])});const _=g(()=>!!c.path.includes("finish"));return(f,e)=>{const k=r("ToggleButton"),y=r("Checkbox"),o=r("Button"),x=r("router-view");return u(),i("div",F,[l(I),_.value?M("",!0):(u(),i("div",L,[t("div",null,[l(k,{modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=a=>s.value=a),onLabel:"Убрать все",offLabel:"Выбрать все",onIcon:"pi pi-times",offIcon:"pi pi-check"},null,8,["modelValue"])]),t("div",N,[(u(!0),i(B,null,w(p.value,a=>(u(),i("div",{key:a.key,class:"travel-cart__item d-flex align-center"},[l(y,{modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=b=>n.value=b),inputId:a.key,name:"category",value:a.name},null,8,["modelValue","inputId","value"]),t("label",{for:a.key},T(a.name),9,R)]))),128))]),t("div",$,[t("div",A,[l(o,{class:"secondary",label:"Назад",onClick:e[2]||(e[2]=a=>m(v).back())}),l(o,{class:"secondary",label:"Оплатить",onClick:e[3]||(e[3]=a=>m(v).push(`/cart/${m(c).params.id}/finish`))})]),t("div",U,[l(o,{class:"primary pulse",label:"Рекомендации нейросети"}),l(o,{class:"primary pulse",label:"Рекомендации по характеру"})])])])),l(x,{else:""})])}}};export{H as default};
