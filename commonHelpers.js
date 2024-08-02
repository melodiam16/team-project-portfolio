import{A as v,S as f,N as b,K as y,M as L}from"./assets/vendor-a11ec886.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=t(e);fetch(e.href,n)}})();new v(".about-accordion",{duration:600,showMultiple:!0,openOnInit:[0]});new f(".about-swiper",{slidesPerView:2,spaceBetween:1,speed:500,allowSlidePrev:!1,loop:!0,modules:[b,y,L],navigation:{nextEl:".button-next"},keyboard:{enabled:!1,onlyInViewport:!1},mousewheel:!0,breakpoints:{768:{slidesPerView:3,width:600,loop:!0},1440:{slidesPerView:6,width:1200,loop:!0}}});const h=document.querySelectorAll(".about-swiper-slide");let p=0;function w(){h.forEach((a,o)=>{a.classList.toggle("accent-color",o===p)})}document.querySelector(".button-next").addEventListener("click",()=>{p=(p+1)%h.length,w()});w();new v(".faq-accordion",{duration:600,showMultiple:!1});document.addEventListener("DOMContentLoaded",()=>{const a=document.querySelector(".hero-btn-mob"),o=document.querySelector(".header-close-btn"),t=document.querySelector(".mob-nav"),s=document.querySelector(".header-menu-wrap span");a.addEventListener("click",()=>{t.classList.add("active")}),o.addEventListener("click",()=>{t.classList.remove("active")}),document.querySelectorAll(".header-menu-link, .header-order-btn").forEach(e=>{e.addEventListener("click",function(){t.classList.remove("active")})}),document.querySelectorAll(".header-menu-link, .header-order-btn").forEach(e=>{e.addEventListener("click",function(){t.classList.remove("active"),s.closest(".header-menu-wrap").classList.remove("active")})}),s.addEventListener("click",function(){const e=this.closest(".header-menu-wrap");e&&e.classList.toggle("active")})});document.addEventListener("DOMContentLoaded",()=>{const a=document.getElementById("reviews-list"),o=document.getElementById("not-found"),t=document.querySelector(".left-btn"),s=document.querySelector(".right-btn");let e;function n(){e&&(e.isBeginning?(t.classList.add("swiper-button-disabled"),t.disabled=!0):(t.classList.remove("swiper-button-disabled"),t.disabled=!1),e.isEnd?(s.classList.add("swiper-button-disabled"),s.disabled=!0):(s.classList.remove("swiper-button-disabled"),s.disabled=!1))}fetch("https://portfolio-js.b.goit.study/api/reviews").then(i=>i.json()).then(i=>{if(!i||i.length===0){o.style.display="block";return}i.forEach(l=>{const r=document.createElement("li");r.classList.add("swiper-slide");const c=document.createElement("div");c.classList.add("review-card");const u=document.createElement("img");u.src=l.avatar_url,u.alt=`${l.author}'s avatar`;const d=document.createElement("h3");d.textContent=l.author;const m=document.createElement("p");m.classList.add("review-text"),m.textContent=l.review,c.appendChild(u),c.appendChild(d),c.appendChild(m),r.appendChild(c),a.appendChild(r)}),e=new f(".swiper-container",{navigation:{nextEl:".right-btn",prevEl:".left-btn"},keyboard:{enabled:!0,onlyInViewport:!1},slidesPerView:1,spaceBetween:16,speed:1500,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}},on:{slideChange:n,init:n}}),t.addEventListener("click",()=>{t.classList.contains("swiper-button-disabled")||e.slidePrev()}),s.addEventListener("click",()=>{s.classList.contains("swiper-button-disabled")||e.slideNext()})}).catch(i=>{alert("Error loading reviews"),o.style.display="block"})});document.addEventListener("DOMContentLoaded",function(){const a=document.getElementById("email");a.addEventListener("input",function(){o(a)});function o(t){const s=t.clientWidth,e=t.value,n=window.getComputedStyle(t).font,i="...",r=document.createElement("canvas").getContext("2d");r.font=n;let c=e;if(r.measureText(e).width>s){for(;r.measureText(c+i).width>s;)c=c.slice(0,-1);c+=i}t.value=c}});document.addEventListener("DOMContentLoaded",function(){const a=document.querySelector(".footer-form"),o=document.querySelector(".modal-overlay"),t=document.querySelector("[data-menu-close]"),s=document.querySelector(".backdrop");function e(){o.classList.remove("is-open"),t.removeEventListener("click",n),document.removeEventListener("keydown",i),o.removeEventListener("click",l)}function n(r){e()}function i(r){r.key==="Escape"&&e()}function l(r){(r.target===o||r.target===s)&&e()}a.addEventListener("submit",function(r){r.preventDefault();const c=r.target.email.value,u=r.target.comment.value;fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:c,comment:u})}).then(d=>d.ok?d.json():d.json().then(m=>{throw new Error("Please try again.")})).then(d=>{a.reset(),o.classList.add("is-open"),t.addEventListener("click",n),document.addEventListener("keydown",i),o.addEventListener("click",l)}).catch(d=>{window.alert(d.message)})}),t.addEventListener("click",n)});new f(".swiper",{slidesPerView:3,spaceBetween:30,loop:!1,navigation:{nextEl:".right-btn-next",prevEl:".left-btn-prev"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{320:{slidesPerView:1},4400:{slidesPerView:3}}});
//# sourceMappingURL=commonHelpers.js.map
