const y="sv";function b(a){const[,i]=a.pathname.split("/");return i==="en"?"en":y}function f(a){return function(e){return I[a][e]||e}}const I={en:{"nav.home":"Home","nav.addition":"Addition","nav.subtraction":"Subtraction","nav.multiplication":"Multiplication","nav.division":"Division","nav.mathgames":"Math Games","nav.practicetogether":"Practice together","page.addition.title":"Addition Worksheets","page.addition.description":"Create and print customized addition worksheets.","page.subtraction.title":"Subtraction Worksheets","page.subtraction.description":"Create and print customized subtraction worksheets.","page.multiplication.title":"Multiplication Worksheets","page.multiplication.description":"Create and print customized multiplication worksheets.","page.division.title":"Division Worksheets","page.division.description":"Create and print customized division worksheets.","page.mathgames.title":"Math Games","page.mathgames.description":"Fun and educational math games to practice the four basic operations.","page.home.title":"Math Worksheets and Games","page.home.description":"Create custom math worksheets and play educational math games.","page.home.heading":"Welcome to Math Worksheets","generateTestForm.startTable":"Start Table","generateTestForm.endTable":"End Table","generateTestForm.includeAnswers":"Include Answers","generateTestForm.createTest":"Create Test","generateTestForm.printTest":"Print Test","generateTestForm.numQuestions":"Number of Questions","printResults.heading":"Math Test - Good Luck!","printResults.answerKey":"Answers","footer.privacy":"Privacy Policy"},sv:{"nav.home":"Hem","nav.addition":"Addition","nav.subtraction":"Subtraktion","nav.multiplication":"Multiplikation","nav.division":"Division","nav.mathgames":"Mattespel","nav.practicetogether":"Öva tillsammans","page.addition.title":"Addition Worksheets","page.addition.description":"Create and print customized addition worksheets.","page.subtraction.title":"Subtraction Worksheets","page.subtraction.description":"Create and print customized subtraction worksheets.","page.multiplication.title":"Multiplication Worksheets","page.multiplication.description":"Create and print customized multiplication worksheets.","page.division.title":"Division Worksheets","page.division.description":"Create and print customized division worksheets.","page.mathgames.title":"Math Games","page.mathgames.description":"Fun and educational math games to practice the four basic operations.","page.home.title":"Matteprov och Mattespel","page.home.description":"Skapa anpassade matteprov och spela lärorika mattespel.","page.home.heading":"Välkommen till Matteprov","generateTestForm.startTable":"Start Tabell","generateTestForm.endTable":"Slut Tabell","generateTestForm.includeAnswers":"Inkludera Svar","generateTestForm.createTest":"Skapa Prov","generateTestForm.printTest":"Skriv ut Prov","generateTestForm.numQuestions":"Antal uppgifter","printResults.heading":"Matteprov - Lycka till!","printResults.answerKey":"Facit","footer.privacy":"Integritetspolicy"}};function B(){const a=b(new URL(window.location.href)),i=f(a);var e=document.getElementById("results").cloneNode(!0),o=document.getElementById("includeAnswerKey").checked;e.id="";var n=window.open("","_blank");if(n.document.write(`<html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"> 
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
    </head><body>`),n.document.write(`<h1 class='text-4xl pb-4 text-center'>${i("printResults.heading")}</h1>`),n.document.write('<div class="grid">'),n.document.write(e.innerHTML),n.document.write("</div>"),o){var m=document.getElementById("answerKeyElement").cloneNode(!0);m.classList.remove("is-hidden"),n.document.write('<div class="new-page"></div>'),n.document.write(`<h1 class="text-4xl pb-4 text-center">${i("printResults.answerKey")}</h1>`),n.document.write('<div class="grid">'),n.document.write(m.innerHTML),n.document.write("</div>")}n.document.write("</body></html>"),n.document.close(),setTimeout(function(){n.print()},200)}function M(){var a=parseInt(document.getElementById("startNumber").value),i=parseInt(document.getElementById("endNumber").value),e=parseInt(document.getElementById("numQuestions").value),o=document.getElementById("includeAnswerKey").checked;document.getElementById("printButton").disabled=!1,window.innerWidth<=768&&(document.getElementById("instruction").hidden=!0);var n=document.getElementById("results");n.innerHTML="";var m=document.getElementById("answerKeyElement");m.innerHTML="";for(var u=[],s=a;s<=i;s++)for(var d=1;d<=10;d++)u.push({num1:s,num2:d});for(var r=p(u,e),t=0;t<r.length;t++){var l=r[t].num1+" * "+r[t].num2+" = ",c=r[t].num1*r[t].num2;n.innerHTML+=`
    <div class="w-full sm:w-1/2 md:w-1/3 p-2">
        <div class="bg-gray-100 p-4 rounded-lg shadow">${l}</div>
    </div>
`,o&&(m.innerHTML+=`
        <div class="w-full sm:w-1/2 md:w-1/3 p-2">
            <div class="bg-gray-100 p-4 rounded-lg shadow">${l} ${c}</div>
        </div>
    `)}}function L(){var a=parseInt(document.getElementById("startNumber").value),i=parseInt(document.getElementById("endNumber").value),e=parseInt(document.getElementById("numQuestions").value),o=document.getElementById("includeAnswerKey").checked;document.getElementById("printButton").disabled=!1,document.getElementById("printButton").ref,window.innerWidth<=768&&(document.getElementById("instruction").hidden=!0);var n=document.getElementById("results");n.innerHTML="";var m=document.getElementById("answerKeyElement");m.innerHTML="";for(var u=[],s=a;s<=i;s++)for(var d=1;d<=10;d++)u.push({num1:s,num2:d});for(var r=p(u,e),t=0;t<r.length;t++){var l=r[t].num1+" + "+r[t].num2+" = ",c=r[t].num1+r[t].num2;n.innerHTML+=`
    <div class="w-full sm:w-1/2 md:w-1/3 p-2">
        <div class="bg-gray-100 p-4 rounded-lg shadow">${l}</div>
    </div>
`,o&&(m.innerHTML+=`
        <div class="w-full sm:w-1/2 md:w-1/3 p-2">
            <div class="bg-gray-100 p-4 rounded-lg shadow">${l} ${c}</div>
        </div>
    `)}}function A(){var a=parseInt(document.getElementById("startNumber").value),i=parseInt(document.getElementById("endNumber").value),e=parseInt(document.getElementById("numQuestions").value),o=document.getElementById("includeAnswerKey").checked;document.getElementById("printButton").disabled=!1,window.innerWidth<=768&&(document.getElementById("instruction").hidden=!0);var n=document.getElementById("results");n.innerHTML="";var m=document.getElementById("answerKeyElement");m.innerHTML="";for(var u=[],s=a;s<=i;s++)for(var d=1;d<=10;d++)s>=d&&u.push({num1:s,num2:d});for(var r=p(u,e),t=0;t<r.length;t++){var l=r[t].num1+" - "+r[t].num2+" = ",c=r[t].num1-r[t].num2;n.innerHTML+=`
    <div class="w-full sm:w-1/2 md:w-1/3 p-2">
        <div class="bg-gray-100 p-4 rounded-lg shadow">${l}</div>
    </div>
`,o&&(m.innerHTML+=`
        <div class="w-full sm:w-1/2 md:w-1/3 p-2">
            <div class="bg-gray-100 p-4 rounded-lg shadow">${l} ${c}</div>
        </div>
    `)}}function K(){var a=parseInt(document.getElementById("startNumber").value),i=parseInt(document.getElementById("endNumber").value),e=parseInt(document.getElementById("numQuestions").value),o=document.getElementById("includeAnswerKey").checked;document.getElementById("printButton").disabled=!1,window.innerWidth<=768&&(document.getElementById("instruction").hidden=!0);var n=document.getElementById("results");n.innerHTML="";var m=document.getElementById("answerKeyElement");m.innerHTML="";for(var u=[],s=a;s<=i;s++)for(var d=2;d<=10;d++)s%d===0&&s!==d&&u.push({num1:s,num2:d});for(var r=p(u,e),t=0;t<r.length;t++){var l=r[t].num1+" / "+r[t].num2+" = ",c=r[t].num1/r[t].num2;n.innerHTML+=`
    <div class="w-full sm:w-1/2 md:w-1/3 p-2">
        <div class="bg-gray-100 p-4 rounded-lg shadow">${l}</div>
    </div>
`,o&&(m.innerHTML+=`
        <div class="w-full sm:w-1/2 md:w-1/3 p-2">
            <div class="bg-gray-100 p-4 rounded-lg shadow">${l} ${c}</div>
        </div>
    `)}}function p(a,i){var e=[];if(a.length===0)return e;for(;e.length<i;){var o=a.slice();T(o),e=e.concat(o.slice(0,i-e.length))}return e}function T(a){for(var i=a.length-1;i>0;i--){var e=Math.floor(Math.random()*(i+1)),o=a[i];a[i]=a[e],a[e]=o}}const g=document.getElementById("createTestButton"),v=document.getElementById("printButton");g&&v&&g.addEventListener("click",()=>{v.removeAttribute("disabled")});const w=new URLSearchParams(window.location.search),E={start:"startNumber",end:"endNumber",antal:"numQuestions"};for(const[a,i]of Object.entries(E)){const e=w.get(a),o=document.getElementById(i);e&&o&&/^\d+$/.test(e)&&(o.value=e)}const h=document.getElementById("includeAnswerKey");w.get("facit")==="1"&&h&&(h.checked=!0);export{K as a,M as b,A as c,L as g,B as p};
