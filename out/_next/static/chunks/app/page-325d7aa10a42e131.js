(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{531:e=>{e.exports={footer:"Footer_footer__OYoYH",footer__about:"Footer_footer__about__btGeB",footer__contacts:"Footer_footer__contacts__hxf7z",scroll_button:"Footer_scroll_button__Luvsu",show:"Footer_show__cTG4A"}},631:e=>{e.exports={header:"Header_header__MwWvM"}},4889:(e,s,r)=>{"use strict";r.d(s,{default:()=>_});var t=r(430),o=r(3438),l=r(3587),i=r(1167);r(1648),r(9916),r(7966);var a=r(8439),n=r(8413),d=r(8809),c=r.n(d);function _(e){let[s,r]=(0,o.useState)(!1),d=(0,o.useRef)(null),_=(0,o.useRef)(null),h=(0,o.useRef)(null);return(0,o.useEffect)(()=>{let s=new globalThis.Image;s.src=e.slides[0].img,s.onload=()=>{r(!0)}},[e.slides]),(0,t.jsxs)("section",{className:c().slides,children:[(0,t.jsxs)("div",{className:c().slide,children:[(0,t.jsx)(l.RC,{modules:[i.Vx,i.Ij,i.dK],spaceBetween:0,slidesPerView:1,loop:!0,autoplay:{delay:4e3,pauseOnMouseEnter:!0},navigation:{prevEl:_.current,nextEl:h.current},onBeforeInit:e=>{"boolean"!=typeof e.params.navigation&&(e.params.navigation.prevEl=_.current,e.params.navigation.nextEl=h.current)},pagination:{clickable:!0},children:e.slides.map(r=>(0,t.jsx)(l.qr,{children:s?(0,t.jsx)(a.default,{ref:d,src:r.img,alt:e.description,className:c().slide__image,width:1600,height:900,loading:"lazy"}):(0,t.jsx)(n.A,{height:900,width:"100%",style:{borderRadius:5}})},r.id))}),(0,t.jsx)("button",{ref:_,className:c().slide__leftArrow,"aria-label":"Previous slide"}),(0,t.jsx)("button",{ref:h,className:c().slide__rightArrow,"aria-label":"Next slide"})]}),(0,t.jsx)("p",{children:e.description})]})}},5795:(e,s,r)=>{"use strict";r.d(s,{default:()=>n});var t=r(430),o=r(3438),l=r(531),i=r.n(l),a=r(8563);function n(){let[e,s]=(0,o.useState)(!1),[r,l]=(0,o.useState)(!1),n=(0,o.useRef)(null);return((0,o.useEffect)(()=>{l(!0);let e=()=>{s(window.innerHeight+window.scrollY>=document.body.offsetHeight-5)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),r)?(0,t.jsxs)("footer",{className:i().footer,children:[(0,t.jsx)("hr",{}),(0,t.jsxs)("div",{className:i().footer__about,children:[(0,t.jsx)("h4",{children:"Катерина"}),(0,t.jsxs)("article",{children:["Графический дизайнер с\xa06-летним опытом. На\xa0данный момент занимаюсь разработкой и\xa0поддержкой фирменных стилей, навигации, созданием key visual, POS\xa0-\xa0материалов, полиграфической продукции для\xa0отелей, бизнес-центров и\xa0торговых\xa0центров.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"В 2017\xa0году получила высшее образование в\xa0Национальном Институте Дизайна по\xa0направлению \xabГрафический дизайн\xbb.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"Участвовала в\xa0улучшении функционала инструмента Поиск для\xa0приложения Иви в\xa0процессе прохождения годового курса \xabUX/UI: дизайн цифровых продуктов\xbb. Ознакомиться с\xa0проектом можно на\xa0",(0,t.jsx)("a",{href:"https://www.behance.net/gallery/182271937/Search-Online-cinema-IVI",children:"Behance"}),"."]})]}),(0,t.jsx)("hr",{}),(0,t.jsxs)("div",{className:i().footer__contacts,ref:n,children:[(0,t.jsx)("h4",{children:"Контакты"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:(0,t.jsx)("a",{href:"tel:+79055386075",children:"8 905 538 60 75"})}),(0,t.jsx)("p",{children:(0,t.jsx)("a",{href:"mailto:KaterinaSemenovaV@ya.ru",children:"KaterinaSemenovaV@ya.ru"})}),(0,t.jsx)("p",{children:(0,t.jsx)("a",{href:"https://t.me/KateSemenovaV",children:"KateSemenovaV"})}),(0,t.jsx)("p",{children:(0,t.jsx)("a",{href:"https://www.behance.net/KateMojojo",children:"Behance/KateSemenova"})})]}),(0,t.jsx)("button",{onClick:()=>(0,a.A)("top"),className:"".concat(i().scroll_button," ").concat(e?i().show:""),children:"↑"})]})]}):null}},8563:(e,s,r)=>{"use strict";function t(e){switch(e){case"top":window.scrollTo({top:0,behavior:"smooth"});break;case"bottom":window.scrollTo({top:document.body.scrollHeight+600,behavior:"smooth"})}}r.d(s,{A:()=>t})},8809:e=>{e.exports={slides:"Slides_slides__akL1Z",slide:"Slides_slide__2YiBG",slide__image:"Slides_slide__image__pDVYe",slide__leftArrow:"Slides_slide__leftArrow___OKjr",slide__rightArrow:"Slides_slide__rightArrow__zEg_5"}},9462:(e,s,r)=>{Promise.resolve().then(r.bind(r,5795)),Promise.resolve().then(r.bind(r,9571)),Promise.resolve().then(r.bind(r,4889))},9571:(e,s,r)=>{"use strict";r.d(s,{default:()=>a});var t=r(430);r(3438);var o=r(631),l=r.n(o),i=r(8563);function a(){return(0,t.jsx)("header",{className:l().header,children:(0,t.jsx)("a",{onClick:()=>(0,i.A)("bottom"),children:"Катерина Семёнова"})})}}},e=>{var s=s=>e(e.s=s);e.O(0,[660,46,633,661,358],()=>s(9462)),_N_E=e.O()}]);