(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{265:e=>{e.exports={slides:"Slides_slides__akL1Z",slide:"Slides_slide__2YiBG",slide__image_wrapper:"Slides_slide__image_wrapper__7AxPK",slide__image:"Slides_slide__image__pDVYe"}},479:(e,t,s)=>{"use strict";s.d(t,{default:()=>o});var l=s(7462),r=s(1766),n=s(1987),a=s.n(n),i=s(2703);function o(){let[e,t]=(0,r.useState)(!1),[s,n]=(0,r.useState)(!1),o=(0,r.useRef)(null);return((0,r.useEffect)(()=>{n(!0);let e=()=>{t(window.innerHeight+window.scrollY>=document.body.offsetHeight-5)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),s)?(0,l.jsxs)("footer",{className:a().footer,children:[(0,l.jsx)("hr",{}),(0,l.jsxs)("div",{className:a().footer__about,children:[(0,l.jsx)("h4",{children:"Катерина"}),(0,l.jsxs)("article",{children:["Графический дизайнер с\xa06-летним опытом. На\xa0данный момент занимаюсь разработкой и\xa0поддержкой фирменных стилей, навигации, созданием key visual, POS\xa0-\xa0материалов, полиграфической продукции для\xa0отелей, бизнес-центров и\xa0торговых\xa0центров.",(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),"В 2017\xa0году получила высшее образование в\xa0Национальном Институте Дизайна по\xa0направлению \xabГрафический дизайн\xbb.",(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),"Участвовала в\xa0улучшении функционала инструмента Поиск для\xa0приложения Иви в\xa0процессе прохождения годового курса \xabUX/UI: дизайн цифровых продуктов\xbb. Ознакомиться с\xa0проектом можно на\xa0",(0,l.jsx)("a",{href:"https://www.behance.net/gallery/182271937/Search-Online-cinema-IVI",children:"Behance"}),"."]})]}),(0,l.jsx)("hr",{}),(0,l.jsxs)("div",{className:a().footer__contacts,ref:o,children:[(0,l.jsx)("h4",{children:"Контакты"}),(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{children:(0,l.jsx)("a",{href:"tel:+79055386075",children:"8 905 538 60 75"})}),(0,l.jsx)("p",{children:(0,l.jsx)("a",{href:"mailto:KaterinaSemenovaV@ya.ru",children:"KaterinaSemenovaV@ya.ru"})}),(0,l.jsx)("p",{children:(0,l.jsx)("a",{href:"https://t.me/KateSemenovaV",children:"KateSemenovaV"})}),(0,l.jsx)("p",{children:(0,l.jsx)("a",{href:"https://www.behance.net/KateMojojo",children:"Behance/KateSemenova"})})]}),(0,l.jsx)("button",{onClick:()=>(0,i.A)("top"),className:"".concat(a().scroll_button," ").concat(e?a().show:""),children:"↑"})]})]}):null}},1220:(e,t,s)=>{"use strict";s.d(t,{default:()=>h});var l=s(7462),r=s(1766);s(5746),s(2142);var n=s(265),a=s.n(n),i=s(7167);s(479),s(5503);var o=s(9553),c=s.n(o);function d(e){let{onClick:t}=e;return(0,l.jsx)("button",{onClick:t,className:c().button__prev,"aria-label":"Previous slide"})}function u(e){let{onClick:t}=e;return(0,l.jsx)("button",{onClick:t,className:c().button__next,"aria-label":"Next slide"})}var _=s(8631);function h(e){let t=(0,r.useRef)(null),n=(0,r.useRef)(null),[o,c]=(0,r.useState)(0),h=(0,r.useCallback)(()=>{var e;null===(e=n.current)||void 0===e||e.go(">")},[]),v=(0,r.useCallback)(()=>{var e;null===(e=n.current)||void 0===e||e.go("<")},[]),x=(0,r.useCallback)(e=>{var t;null===(t=n.current)||void 0===t||t.go("=".concat(e))},[]);return(0,r.useEffect)(()=>{t.current&&(async()=>(n.current=new(await s.e(66).then(s.bind(s,3066))).default(t.current,{type:"carousel",startAt:0,perView:1,gap:10,autoplay:!1,hoverpause:!0,animationDuration:500}),n.current.on("run",()=>{c(n.current.index)}),n.current.mount(),()=>{var e;return null===(e=n.current)||void 0===e?void 0:e.destroy()}))()},[]),(0,l.jsxs)("section",{className:a().slides,children:[(0,l.jsxs)("div",{className:"glide",ref:t,children:[(0,l.jsx)("div",{className:"glide__track","data-glide-el":"track",children:(0,l.jsx)("ul",{className:"glide__slides",children:e.slides.map((t,s)=>(0,l.jsx)("li",{className:"glide__slide ".concat(a().slide),children:(0,l.jsx)("div",{className:a().slide__image_wrapper,children:(0,l.jsx)(i.default,{src:t.img,alt:e.description,width:1600,height:900,className:a().slide__image,priority:0===s})})},t.id))})}),(0,l.jsxs)("div",{className:a().navigation,children:[(0,l.jsx)(d,{onClick:v}),(0,l.jsx)(u,{onClick:h})]})]}),(0,l.jsx)("p",{className:a().slide__description,children:e.description}),(0,l.jsx)(_.default,{slides:e.slides,activeIndex:o,onBulletClick:x})]})}},1987:e=>{e.exports={footer:"Footer_footer__OYoYH",footer__about:"Footer_footer__about__btGeB",footer__contacts:"Footer_footer__contacts__hxf7z",scroll_button:"Footer_scroll_button__Luvsu",show:"Footer_show__cTG4A"}},2087:e=>{e.exports={header:"Header_header__MwWvM"}},2703:(e,t,s)=>{"use strict";function l(e){switch(e){case"top":window.scrollTo({top:0,behavior:"smooth"});break;case"bottom":window.scrollTo({top:document.body.scrollHeight+600,behavior:"smooth"})}}s.d(t,{A:()=>l})},4216:(e,t,s)=>{Promise.resolve().then(s.bind(s,8631)),Promise.resolve().then(s.t.bind(s,9553,23)),Promise.resolve().then(s.bind(s,479)),Promise.resolve().then(s.bind(s,5503)),Promise.resolve().then(s.bind(s,1220))},5503:(e,t,s)=>{"use strict";s.d(t,{default:()=>i});var l=s(7462);s(1766);var r=s(2087),n=s.n(r),a=s(2703);function i(){return(0,l.jsx)("header",{className:n().header,children:(0,l.jsx)("a",{onClick:()=>(0,a.A)("bottom"),children:"Катерина Семёнова"})})}},7151:e=>{e.exports={bullets:"Bullets_bullets___lelG",bullet:"Bullets_bullet__yTDhL",active:"Bullets_active__5L_Is"}},8631:(e,t,s)=>{"use strict";s.d(t,{default:()=>a});var l=s(7462),r=s(7151),n=s.n(r);function a(e){let{slides:t,activeIndex:s,onBulletClick:r}=e;return(0,l.jsx)("div",{className:n().bullets,children:t.map((e,t)=>(0,l.jsx)("button",{className:"".concat(n().bullet," ").concat(t===s?n().active:""),onClick:()=>r(t),"aria-label":"Slide ".concat(t+1),"aria-current":t===s},"bullet-".concat(t)))})}},9553:e=>{e.exports={button__prev:"Button_button__prev__LVOxt",button__next:"Button_button__next__LO8vr"}}},e=>{var t=t=>e(e.s=t);e.O(0,[922,699,887,597,358],()=>t(4216)),_N_E=e.O()}]);