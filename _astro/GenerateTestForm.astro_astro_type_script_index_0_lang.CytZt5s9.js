function y(){var r=document.getElementById("results").cloneNode(!0),i=document.getElementById("includeAnswerKey").checked;r.id="";var n=window.open("","_blank");if(n.document.write(`<html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    <style> 
    .text-4xl {
      font-size: 2.25rem;
    }
    .text-center {
      text-align: center;
    }
    .pb-4 {
      padding-bottom: 1rem;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 1rem;
    }
    .p-2 {
      padding: 0.5rem;
    }
    .p-4 {
      padding: 1rem;
    }
    .bg-gray-100 {
      background-color: #f3f4f6;
    }
    .rounded-lg {
      border-radius: 0.5rem;
    }
    .shadow {
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    }
    body {
      font-family: BlinkMacSystemFont,-apple-system,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
    }

    @media print { 
      @page { 
        margin: 0.5cm; 
      }    
      .new-page { 
        page-break-before: always; 
      } 
      body::before { 
        content: normal !important; 
      } 
      body { 
        margin: 0.5cm; 
      } 
      .grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1rem;
      }
    }</style> 
    </head><body>`),n.document.write("<h1 class='text-4xl pb-4 text-center'>Matte Prov - Lycka till!</h1>"),n.document.write('<div class="grid">'),n.document.write(r.innerHTML),n.document.write("</div>"),i){var u=document.getElementById("answerKeyElement").cloneNode(!0);u.classList.remove("is-hidden"),n.document.write('<div class="new-page"></div>'),n.document.write('<h1 class="text-4xl pb-4 text-center">Facit</h1>'),n.document.write('<div class="grid">'),n.document.write(u.innerHTML),n.document.write("</div>")}n.document.write("</body></html>"),n.document.close(),setTimeout(function(){n.print()},200)}function f(){var r=parseInt(document.getElementById("startNumber").value),i=parseInt(document.getElementById("endNumber").value),n=parseInt(document.getElementById("numQuestions").value),u=document.getElementById("includeAnswerKey").checked;document.getElementById("printButton").disabled=!1,window.innerWidth<=768&&(document.getElementById("instruction").hidden=!0);var l=document.getElementById("results");l.innerHTML="";var o=document.getElementById("answerKeyElement");o.innerHTML="";for(var e=[],d=r;d<=i;d++)for(var a=1;a<=10;a++)e.push({num1:d,num2:a});c(e);for(var t=0;t<n;t++){var m=e[t].num1+" * "+e[t].num2+" = ",s=e[t].num1*e[t].num2;l.innerHTML+=`
    <div class="w-full sm:w-1/2 md:w-1/3 p-2">
        <div class="bg-gray-100 p-4 rounded-lg shadow">${m}</div>
    </div>
`,u&&(o.innerHTML+=`
        <div class="w-full sm:w-1/2 md:w-1/3 p-2">
            <div class="bg-gray-100 p-4 rounded-lg shadow">${m} ${s}</div>
        </div>
    `)}}function b(){var r=parseInt(document.getElementById("startNumber").value),i=parseInt(document.getElementById("endNumber").value),n=parseInt(document.getElementById("numQuestions").value),u=document.getElementById("includeAnswerKey").checked;document.getElementById("printButton").disabled=!1,document.getElementById("printButton").ref,window.innerWidth<=768&&(document.getElementById("instruction").hidden=!0);var l=document.getElementById("results");l.innerHTML="";var o=document.getElementById("answerKeyElement");o.innerHTML="";for(var e=[],d=r;d<=i;d++)for(var a=1;a<=10;a++)e.push({num1:d,num2:a});c(e);for(var t=0;t<n;t++){var m=e[t].num1+" + "+e[t].num2+" = ",s=e[t].num1+e[t].num2;l.innerHTML+=`
    <div class="w-full sm:w-1/2 md:w-1/3 p-2">
        <div class="bg-gray-100 p-4 rounded-lg shadow">${m}</div>
    </div>
`,u&&(o.innerHTML+=`
        <div class="w-full sm:w-1/2 md:w-1/3 p-2">
            <div class="bg-gray-100 p-4 rounded-lg shadow">${m} ${s}</div>
        </div>
    `)}}function I(){var r=parseInt(document.getElementById("startNumber").value),i=parseInt(document.getElementById("endNumber").value),n=parseInt(document.getElementById("numQuestions").value),u=document.getElementById("includeAnswerKey").checked;document.getElementById("printButton").disabled=!1,window.innerWidth<=768&&(document.getElementById("instruction").hidden=!0);var l=document.getElementById("results");l.innerHTML="";var o=document.getElementById("answerKeyElement");o.innerHTML="";for(var e=[],d=r;d<=i;d++)for(var a=1;a<=10;a++)d>=a&&e.push({num1:d,num2:a});c(e);for(var t=0;t<n;t++){var m=e[t].num1+" - "+e[t].num2+" = ",s=e[t].num1-e[t].num2;l.innerHTML+=`
    <div class="w-full sm:w-1/2 md:w-1/3 p-2">
        <div class="bg-gray-100 p-4 rounded-lg shadow">${m}</div>
    </div>
`,u&&(o.innerHTML+=`
        <div class="w-full sm:w-1/2 md:w-1/3 p-2">
            <div class="bg-gray-100 p-4 rounded-lg shadow">${m} ${s}</div>
        </div>
    `)}}function h(){var r=parseInt(document.getElementById("startNumber").value),i=parseInt(document.getElementById("endNumber").value),n=parseInt(document.getElementById("numQuestions").value),u=document.getElementById("includeAnswerKey").checked;document.getElementById("printButton").disabled=!1,window.innerWidth<=768&&(document.getElementById("instruction").hidden=!0);var l=document.getElementById("results");l.innerHTML="";var o=document.getElementById("answerKeyElement");o.innerHTML="";for(var e=[],d=r;d<=i;d++)for(var a=2;a<=10;a++)d%a===0&&d!==a&&e.push({num1:d,num2:a});for(;e.length<n;){var t=Math.floor(Math.random()*(i-r+1))+r,m=Math.floor(Math.random()*9)+2;t%m===0&&t!==m&&e.push({num1:t,num2:m})}c(e);for(var s=0;s<n;s++){var v=e[s].num1+" / "+e[s].num2+" = ",p=e[s].num1/e[s].num2;l.innerHTML+=`
    <div class="w-full sm:w-1/2 md:w-1/3 p-2">
        <div class="bg-gray-100 p-4 rounded-lg shadow">${v}</div>
    </div>
`,u&&(o.innerHTML+=`
        <div class="w-full sm:w-1/2 md:w-1/3 p-2">
            <div class="bg-gray-100 p-4 rounded-lg shadow">${v} ${p}</div>
        </div>
    `)}}function c(r){for(var i=r.length-1;i>0;i--){var n=Math.floor(Math.random()*(i+1)),u=r[i];r[i]=r[n],r[n]=u}}const g=document.getElementById("createTestButton"),w=document.getElementById("printButton");g&&w&&g.addEventListener("click",()=>{w.removeAttribute("disabled")});export{h as a,f as b,I as c,b as g,y as p};
