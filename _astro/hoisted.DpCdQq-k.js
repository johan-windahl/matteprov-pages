import"./hoisted.S-6bLskK.js";document.getElementById("unlimitedCheckbox")?.addEventListener("change",r=>{const e=r.target,t=document.getElementById("numberOfProblems"),s=document.getElementById("showAnswersContainer"),n=document.getElementById("showAnswers");e.checked?(t.disabled=!0,t.classList.add("opacity-50","bg-gray-100"),s?.classList.add("opacity-50"),n.disabled=!0,n.checked=!1):(t.disabled=!1,t.classList.remove("opacity-50","bg-gray-100"),s?.classList.remove("opacity-50"),n.disabled=!1)});class c{problems=[];displayTimeMs;showAnswers;unlimited;constructor(e){const t=e.get("operation"),s=e.getAll("tables").map(Number);if(s.length===0)throw alert("Du måste välja minst en tabell!"),new Error("No tables selected");this.unlimited=e.get("unlimited")==="on";const n=this.unlimited?1:Number(e.get("numberOfProblems"));this.displayTimeMs=Number(e.get("displayTime"))*1e3,this.showAnswers=!this.unlimited&&e.get("showAnswers")==="on",this.generateProblems(t,s,n)}generateProblems(e,t,s){if(this.unlimited)this.generateOneProblem(e,t);else for(;this.problems.length<s;)this.generateOneProblem(e,t)}generateOneProblem(e,t){const s=t[Math.floor(Math.random()*t.length)],n=Math.floor(Math.random()*10)+1;let o,i;switch(e){case"addition":o=`${s} + ${n}`,i=s+n;break;case"subtraction":o=`${s+n} - ${s}`,i=n;break;case"multiplication":o=`${s} × ${n}`,i=s*n;break;case"division":o=`${s*n} ÷ ${s}`,i=n;break;default:return}this.problems.push({expression:o,answer:i})}async start(){const e=document.getElementById("exerciseContainer"),t=document.getElementById("problem");e.classList.remove("hidden");const s=document.getElementById("cancelExercise"),n=()=>{e.classList.add("hidden");const o=document.getElementById("exerciseForm");o&&o.scrollIntoView({behavior:"smooth"}),s.removeEventListener("click",n)};if(s.addEventListener("click",n),await new Promise(o=>setTimeout(o,3e3)),this.unlimited)for(;;){const o=this.problems[0];t.textContent=o.expression,await new Promise(l=>setTimeout(l,this.displayTimeMs)),t.textContent="",await new Promise(l=>setTimeout(l,500)),this.problems=[];const i=document.querySelector('select[name="operation"]');this.generateOneProblem(i?.value,Array.from(document.querySelectorAll('input[name="tables"]:checked')).map(l=>Number(l.value)))}else{for(const o of this.problems)t.textContent=o.expression,await new Promise(i=>setTimeout(i,this.displayTimeMs)),t.textContent="",await new Promise(i=>setTimeout(i,500));this.showAnswers?this.showResults():e.classList.add("hidden")}}showResults(){const e=document.getElementById("results"),t=e.querySelector(".grid"),s=this.problems.length;let n=1;s>6&&(n=Math.ceil(s/6),t.style.gridTemplateColumns=`repeat(${n}, minmax(0, 1fr))`),t.innerHTML=this.problems.map(o=>`<div class="text-center">${o.expression} = ${o.answer}</div>`).join(""),e.classList.remove("hidden"),document.getElementById("closeResults")?.addEventListener("click",()=>{document.getElementById("exerciseContainer").classList.add("hidden"),e.classList.add("hidden");const i=document.getElementById("exerciseForm");i&&i.scrollIntoView({behavior:"smooth"})})}}document.getElementById("exerciseForm")?.addEventListener("submit",r=>{r.preventDefault();const e=new FormData(r.target);try{new c(e).start()}catch{return}});
