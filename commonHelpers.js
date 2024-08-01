import{A as f,S as m,N as v,K as w,M as b}from"./assets/vendor-a11ec886.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();new f(".about-accordion",{duration:600,showMultiple:!0,openOnInit:[0]});new m(".about-swiper",{slidesPerView:2,spaceBetween:1,speed:500,allowSlidePrev:!1,loop:!0,modules:[v,w,b],navigation:{nextEl:".button-next"},keyboard:{enabled:!1,onlyInViewport:!1},mousewheel:!0,breakpoints:{768:{slidesPerView:3,width:600,loop:!0},1440:{slidesPerView:6,width:1200,loop:!0}}});new f(".faq-accordion",{duration:600,showMultiple:!1});document.addEventListener("DOMContentLoaded",()=>{const d=document.querySelector(".hero-btn-mob"),o=document.querySelector(".header-close-btn"),n=document.querySelector(".mob-nav"),r=document.querySelector(".header-menu-wrap span");d.addEventListener("click",()=>{n.classList.add("active")}),o.addEventListener("click",()=>{n.classList.remove("active")}),document.querySelectorAll(".header-menu-link, .header-order-btn").forEach(e=>{e.addEventListener("click",function(){n.classList.remove("active")})}),r.addEventListener("click",function(){const e=this.closest(".header-menu-wrap");e&&e.classList.toggle("active")})});document.addEventListener("DOMContentLoaded",()=>{const d=document.getElementById("reviews-list"),o=document.getElementById("not-found"),n=document.querySelector(".left-btn"),r=document.querySelector(".right-btn");let e;function t(){e&&(e.isBeginning?(n.classList.add("swiper-button-disabled"),n.disabled=!0):(n.classList.remove("swiper-button-disabled"),n.disabled=!1),e.isEnd?(r.classList.add("swiper-button-disabled"),r.disabled=!0):(r.classList.remove("swiper-button-disabled"),r.disabled=!1))}fetch("https://portfolio-js.b.goit.study/api/reviews").then(s=>s.json()).then(s=>{if(!s||s.length===0){o.style.display="block";return}s.forEach(l=>{const i=document.createElement("li");i.classList.add("swiper-slide");const c=document.createElement("div");c.classList.add("review-card");const u=document.createElement("img");u.src=l.avatar_url,u.alt=`${l.author}'s avatar`;const a=document.createElement("h3");a.textContent=l.author;const p=document.createElement("p");p.classList.add("review-text"),p.textContent=l.review,c.appendChild(u),c.appendChild(a),c.appendChild(p),i.appendChild(c),d.appendChild(i)}),e=new m(".swiper-container",{navigation:{nextEl:".right-btn",prevEl:".left-btn"},keyboard:{enabled:!0,onlyInViewport:!1},slidesPerView:1,spaceBetween:16,speed:1e3,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}},on:{slideChange:t,init:t}}),n.addEventListener("click",()=>{n.classList.contains("swiper-button-disabled")||e.slidePrev()}),r.addEventListener("click",()=>{r.classList.contains("swiper-button-disabled")||e.slideNext()})}).catch(s=>{alert("Error loading reviews"),o.style.display="block"})});document.addEventListener("DOMContentLoaded",function(){const d=document.querySelector(".footer-form"),o=document.querySelector(".modal-overlay"),n=document.querySelector("[data-menu-close]"),r=document.querySelector(".backdrop");function e(){o.classList.remove("is-open"),n.removeEventListener("click",t),document.removeEventListener("keydown",s),o.removeEventListener("click",l)}function t(i){e()}function s(i){i.key==="Escape"&&e()}function l(i){(i.target===o||i.target===r)&&e()}d.addEventListener("submit",function(i){i.preventDefault();const c=i.target.email.value,u=i.target.comment.value;fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:c,comment:u})}).then(a=>a.ok?a.json():a.json().then(p=>{throw new Error("Please try again.")})).then(a=>{d.reset(),o.classList.add("is-open"),n.addEventListener("click",t),document.addEventListener("keydown",s),o.addEventListener("click",l)}).catch(a=>{window.alert(a.message)})}),n.addEventListener("click",t)});new m(".swiper",{slidesPerView:3,spaceBetween:30,loop:!1,navigation:{nextEl:".right-btn-next",prevEl:".left-btn-prev"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{320:{slidesPerView:1},4400:{slidesPerView:3}}});
//# sourceMappingURL=commonHelpers.js.map
