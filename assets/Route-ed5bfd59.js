import{I as g}from"./Inspiration-c087eda4.js";import{e as u,i as C,h as y,j as b,r as l,o as f,a as v,k as I,b as e,d as s,t as h,u as k,w as _}from"./index-2260ff24.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";const R={getData(){return[{name:"Москва"},{name:"Санкт-Петербург"},{name:"Нижний-Новгород"},{name:"Калининград"},{name:"Владивосток"}]},getCities(){return Promise.resolve(this.getData())}};const $={class:"route-allocation d-flex flex-column"},V={class:"d-flex"},B=e("span",{class:"route-allocation-addroute"},"Добавить точку машрута +",-1),j={__name:"InputRoute",setup(p){u("");const n=u([]),i=u(),c=u(),r=C("cities");y(()=>{R.getCities().then(t=>n.value=t)});const m=t=>{setTimeout(()=>{t.query.trim().length?c.value=n.value.filter(o=>o.name.toLowerCase().startsWith(t.query.toLowerCase())):c.value=[...n.value]},550)};return b(i,t=>{typeof t=="object"&&r.push(t),console.log(t)}),(t,o)=>{l("InputText");const a=l("AutoComplete");return f(),v("div",$,[I("",!0),e("div",V,[s(a,{class:"route-allocation-input flex-1",modelValue:i.value,"onUpdate:modelValue":o[1]||(o[1]=d=>i.value=d),suggestions:c.value,optionLabel:"name",onComplete:m,placeholder:"Пункт отправления"},null,8,["modelValue","suggestions"])]),B,e("span",null,h(k(r)),1)])}}},D="/assets/image365-adec5fbf.png";const L={components:{Inspiration:g,InputRoute:j},data(){return{cities:[]}},provide(){return{cities:this.cities}}},N={class:"route-view d-flex flex-column"},q={class:"route-view-main d-flex space-between"},A={class:"d-flex flex-column flex-1"},T=e("h2",{class:"title"},"Маршрут",-1),E={class:"route-view-nav d-flex space-between"},M={class:"d-flex flex-column flex-1 align-center"},P={class:"map"},U={class:"btns d-flex flex-column align-center"};function W(p,n,i,c,r,m){const t=l("InputRoute"),o=l("Button"),a=l("router-link"),d=l("Inspiration");return f(),v("div",N,[e("div",q,[e("div",A,[T,s(t),e("div",null,h(r.cities),1),e("div",E,[s(a,{to:"/"},{default:_(()=>[s(o,{class:"primary",label:"Назад"})]),_:1}),s(a,{to:"/travel_route"},{default:_(()=>[s(o,{class:"secondary",label:"Программа путешествия"})]),_:1})])]),e("div",M,[e("div",P,[e("img",{src:D,alt:"map",onClick:n[0]||(n[0]=(...x)=>p.check&&p.check(...x))})]),e("div",U,[s(a,{to:"/chat"},{default:_(()=>[s(o,{class:"primary pulse",label:"Рекомендации нейросети"})]),_:1}),s(a,{to:"/test"},{default:_(()=>[s(o,{class:"primary pulse",label:"Рекомендации по характеру"})]),_:1})])])]),s(d)])}const H=w(L,[["render",W]]);export{H as default};
