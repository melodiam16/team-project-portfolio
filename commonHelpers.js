import{A as m,S as f,N as y}from"./assets/vendor-6b63676a.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();new m(".accordion-container-first",{duration:600,showMultiple:!0});new f(".mySwiper",{modules:[y],speed:500,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});document.addEventListener("DOMContentLoaded",()=>{new m(".accordion-container-second",{duration:400,showMultiple:!1})});document.addEventListener("DOMContentLoaded",()=>{const i=document.getElementById("reviews-list"),s=document.getElementById("not-found"),r=document.querySelector(".left-btn"),t=document.querySelector(".right-btn");let e;function o(){e&&(e.isBeginning?(r.classList.add("swiper-button-disabled"),r.disabled=!0):(r.classList.remove("swiper-button-disabled"),r.disabled=!1),e.isEnd?(t.classList.add("swiper-button-disabled"),t.disabled=!0):(t.classList.remove("swiper-button-disabled"),t.disabled=!1))}fetch("https://portfolio-js.b.goit.study/api/reviews").then(n=>n.json()).then(n=>{if(!n||n.length===0){s.style.display="block";return}n.forEach(d=>{const c=document.createElement("li");c.classList.add("swiper-slide");const a=document.createElement("div");a.classList.add("review-card");const l=document.createElement("img");l.src=d.avatar_url,l.alt=`${d.author}'s avatar`;const p=document.createElement("h3");p.textContent=d.author;const u=document.createElement("p");u.classList.add("review-text"),u.textContent=d.review,a.appendChild(l),a.appendChild(p),a.appendChild(u),c.appendChild(a),i.appendChild(c)}),e=new f(".swiper-container",{navigation:{nextEl:".right-btn",prevEl:".left-btn"},keyboard:{enabled:!0,onlyInViewport:!1},slidesPerView:1,spaceBetween:16,speed:1e3,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}},on:{slideChange:o,init:o}}),r.addEventListener("click",()=>{r.classList.contains("swiper-button-disabled")||e.slidePrev()}),t.addEventListener("click",()=>{t.classList.contains("swiper-button-disabled")||e.slideNext()})}).catch(n=>{alert("Error loading reviews"),s.style.display="block"})});document.addEventListener("DOMContentLoaded",function(){const i=document.querySelector(".modal-overlay"),s=document.querySelector("[data-menu-close]"),r=document.querySelector(".backdrop");function t(){i.classList.remove("is-open")}s.addEventListener("click",t),i.addEventListener("click",function(e){(e.target===i||e.target===r)&&t()}),document.addEventListener("keydown",function(e){e.key==="Escape"&&t()})});document.addEventListener("DOMContentLoaded",function(){const i=document.querySelector(".footer-form"),s=document.querySelector(".modal-overlay"),r=document.querySelector("[data-menu-close]");i.addEventListener("submit",function(t){t.preventDefault();const e=t.target.email.value,o=t.target.comment.value;fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,comment:o})}).then(n=>n.ok?n.json():n.json().then(d=>{throw new Error("Please try again.")})).then(n=>{i.reset(),s.classList.add("is-open"),r.addEventListener("click",function(){s.classList.remove("is-open")})}).catch(n=>{window.alert(n.message)})})});
//# sourceMappingURL=commonHelpers.js.map
