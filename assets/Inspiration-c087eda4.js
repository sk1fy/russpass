import{c as d,r as c,o as e,g as l,w as u,b as s,n as k,u as f,t as v,a as _,F as I,f as h}from"./index-2260ff24.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";const b={class:"inspiration-block__travels__item"},S={class:"inspiration-block__travels__item__pic d-flex"},$={class:"inspiration-block__travels__item__title"},y={__name:"InspirationItem",props:{name:String,imgSrc:String},setup(t){const n=t,i=d(()=>n.imgSrc);return(m,a)=>{const o=c("router-link");return e(),l(o,{to:"#"},{default:u(()=>[s("div",b,[s("div",S,[s("div",{class:"pic-image",style:k({"background-image":`url(${f(i)})`})},null,4)]),s("div",$,v(n.name),1)])]),_:1})}}};const B={components:{InspirationItem:y},data(){return{inspirations:[{name:"Пешком по Москве",image:"/src/assets/img/ellipse_17.png"},{name:"Мосты Санкт-Петербурга",image:"/src/assets/img/ellipse_18.png"},{name:"Разносторонний Сочи",image:"/src/assets/img/ellipse_19.png"},{name:"Удивительная Казань",image:"/src/assets/img/ellipse_20.png"}]}}},w={class:"inspiration-block"},C=s("h2",{class:"inspiration-block__title d-flex"},"Вдохновение для путешествия",-1),F={class:"inspiration-block__travels d-flex"};function L(t,n,i,m,a,o){const p=c("InspirationItem");return e(),_("div",w,[C,s("div",F,[(e(!0),_(I,null,h(a.inspirations,(r,g)=>(e(),l(p,{key:g,name:r.name,imgSrc:r.image},null,8,["name","imgSrc"]))),128))])])}const E=x(B,[["render",L]]);export{E as I};