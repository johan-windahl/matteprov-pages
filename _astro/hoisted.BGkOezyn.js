import"./hoisted.Cd30aNfc.js";let u=!1,i,s=6e3,d=!1,m;function f(e){const t=document.getElementById("spelaButton"),n=document.querySelectorAll(".levelButton");t&&(t.disabled=!e),n.forEach(o=>{o instanceof HTMLButtonElement&&(o.disabled=!e)})}function g(){if(u)return;const e=document.getElementById("gameContainer");if(!e)return;const t=document.createElement("div");t.className="tile absolute bg-green-500 text-white p-2 rounded text-lg font-bold";let n=Math.floor(Math.random()*12)+1,o=Math.floor(Math.random()*12)+1;t.textContent=`${n} * ${o}`,t.dataset.answer=(n*o).toString(),t.style.left="50%",t.style.transform="translateX(-50%)",t.style.animation=`fall ${s}ms linear forwards`,e.appendChild(t),setTimeout(()=>{!u&&t.parentNode===e&&(t.remove(),h())},s)}function E(){if(!d)return;const e=document.getElementById("answerInput");if(!e)return;const t=parseInt(e.value),n=document.querySelectorAll(".tile");if(n.length===0){e.value="",e.focus();return}const o=n[0],l=parseInt(o.dataset.answer||"0");!isNaN(t)&&t.toString().length===l.toString().length&&(l===t&&(o.remove(),I()),e.value="",e.focus())}function I(){const e=document.getElementById("score");if(e){const t=parseInt(e.textContent||"0");e.textContent=(t+1).toString()}}function h(){u=!0,d=!1,i&&clearInterval(i),m&&clearInterval(m),document.querySelectorAll(".tile").forEach(o=>{if(o instanceof HTMLElement){const l=window.getComputedStyle(o),a=parseFloat(l.top);o.style.animation="none",o.style.top=`${a}px`}});const e=document.createElement("div");e.id="gameOverOverlay",e.className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center flex-col z-50";const t=document.createElement("h1");t.textContent="Game Over!",t.className="text-3xl font-bold text-white mb-4";const n=document.createElement("button");n.textContent="OK",n.className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",n.addEventListener("click",v),e.appendChild(t),e.appendChild(n),document.body.appendChild(e),f(!0),n.focus(),document.addEventListener("keydown",w)}function w(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),v())}function v(){const e=document.getElementById("gameOverOverlay");e&&e.remove(),u=!1,f(!1),location.reload()}function B(){const e=document.getElementById("answerInput");e&&d&&e.focus()}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("answerInput");function t(){u=!1,d=!0;const a=document.getElementById("gameContainer");a&&(a.innerHTML=""),g(),n(),m=setInterval(B,100),f(!0)}function n(){i&&clearInterval(i),i=setInterval(g,s),console.log("Game runner updated with speed:",s)}function o(a){s=a,console.log("Speed set to:",s),d&&(n(),document.querySelectorAll(".tile").forEach(r=>{if(r instanceof HTMLElement){const c=r.offsetTop,p=r.parentElement.offsetHeight,y=(p-c)/p*s;r.style.animation=`fall ${y}ms linear forwards`}}))}const l=document.getElementById("spelaButton");l&&l.addEventListener("click",t),document.querySelectorAll(".levelButton").forEach(a=>{a instanceof HTMLButtonElement&&a.addEventListener("click",()=>{document.querySelectorAll(".levelButton").forEach(c=>{c.classList.remove("selected")}),a.classList.add("selected");const r=a.dataset.speed;r&&o(parseInt(r)),setTimeout(()=>{const c=document.getElementById("answerInput");c&&c.focus()},0)})}),e&&e.addEventListener("keyup",E)});
