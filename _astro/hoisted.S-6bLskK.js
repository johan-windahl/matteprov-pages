document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".mobile-menu-button"),t=document.querySelector(".close-menu-button"),n=document.querySelector(".mobile-menu");function o(){if(n&&e&&t){n.classList.toggle("hidden"),document.body.classList.toggle("overflow-hidden");const s=(!n.classList.contains("hidden")).toString();e.setAttribute("aria-expanded",s),t.setAttribute("aria-expanded",s)}}e&&t&&n&&(e.addEventListener("click",o),t.addEventListener("click",o)),document.querySelectorAll(".pulse-link").forEach(d=>{setTimeout(()=>{d.classList.add("animation-done")},5e3)})});
