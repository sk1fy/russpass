import{c as u,r as s,o as t,a,b as r,t as p,n as f,u as g,d as c,w as h,e as v,F as x,f as b,g as y}from"./index-cb2d9244.js";import{I as $}from"./Inspiration-1088c111.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";const H={class:"home-recommendation__item d-flex flex-column"},N={class:"home-recommendation__item__title"},k={__name:"HomeRecommendationItem",props:{title:String,id:Number,btnName:String},setup(n){const e=n,m=`/src/assets/icons/arrow_${e.id}.svg`,_=u(()=>{switch(e.id){case 0:return"346";case 1:return"12";case 2:return"310"}});return(o,i)=>{const l=s("Button"),d=s("router-link");return t(),a("div",H,[r("div",N,p(n.title),1),r("img",{src:m,alt:"arrow",style:f([{"max-width":"150px","align-self":"center"},{transform:`rotate(${g(_)}deg)`}])},null,4),c(d,{to:"/route"},{default:h(()=>[c(l,{class:"primary pulse",label:e.btnName},null,8,["label"])]),_:1})])}}};const I={class:"home-recommendation d-flex flex-row"},R={__name:"HomeRecommendation",setup(n){const e=v([{title:"Чтобы понять,какой отдых станет для тебя идеальным,пройди тест",btnName:"Рекомендации по характеру"},{title:"Пользуешься рекомендациями поисковых запросов? Тебе сюда",btnName:"Рекомендации нейросети"},{title:"Знаешь,куда хочешь поехать? Поможем спланировать новое путешествие в 2 клика",btnName:"Спалнировать"}]);return(m,_)=>(t(),a("div",I,[(t(!0),a(x,null,b(e.value,(o,i)=>(t(),y(k,{title:o.title,"btn-name":o.btnName,id:i},null,8,["title","btn-name","id"]))),256))]))}},B="/russpass/assets/traveling_back_to_home-35f4bfc3.png";const S={components:{HomeRecommendation:R,Inspiration:$}},C={class:"home-view d-flex flex-column"},D=r("div",{class:"traveling-to-home"},[r("img",{src:B,alt:"traveling_back_to_home",style:{"align-self":"center"}})],-1);function F(n,e,m,_,o,i){const l=s("HomeRecommendation"),d=s("Inspiration");return t(),a("div",C,[c(l),D,c(d)])}const L=w(S,[["render",F]]);export{L as default};
