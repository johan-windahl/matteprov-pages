const w="sv";function y(a){const[,r]=a.pathname.split("/");return r==="en"?"en":w}function b(a){return function(i){return f[a][i]||i}}const f={en:{"nav.home":"Home","nav.addition":"Addition","nav.subtraction":"Subtraction","nav.multiplication":"Multiplication","nav.division":"Division","nav.mathgames":"Math Games","nav.practicetogether":"Practice together","page.addition.title":"Addition Worksheets","page.addition.description":"Create and print customized addition worksheets.","page.subtraction.title":"Subtraction Worksheets","page.subtraction.description":"Create and print customized subtraction worksheets.","page.multiplication.title":"Multiplication Worksheets","page.multiplication.description":"Create and print customized multiplication worksheets.","page.division.title":"Division Worksheets","page.division.description":"Create and print customized division worksheets.","page.mathgames.title":"Math Games","page.mathgames.description":"Fun and educational math games to practice the four basic operations.","page.home.title":"Math Worksheets and Games","page.home.description":"Create custom math worksheets and play educational math games.","page.home.heading":"Welcome to Math Worksheets","generateTestForm.startTable":"Start Table","generateTestForm.endTable":"End Table","generateTestForm.includeAnswers":"Include Answers","generateTestForm.createTest":"Create Test","generateTestForm.printTest":"Print Test","generateTestForm.numQuestions":"Number of Questions","printResults.heading":"Math Test - Good Luck!","printResults.answerKey":"Answers","footer.privacy":"Privacy Policy"},sv:{"nav.home":"Hem","nav.addition":"Addition","nav.subtraction":"Subtraktion","nav.multiplication":"Multiplikation","nav.division":"Division","nav.mathgames":"Mattespel","nav.practicetogether":"Öva tillsammans","page.addition.title":"Addition Worksheets","page.addition.description":"Create and print customized addition worksheets.","page.subtraction.title":"Subtraction Worksheets","page.subtraction.description":"Create and print customized subtraction worksheets.","page.multiplication.title":"Multiplication Worksheets","page.multiplication.description":"Create and print customized multiplication worksheets.","page.division.title":"Division Worksheets","page.division.description":"Create and print customized division worksheets.","page.mathgames.title":"Math Games","page.mathgames.description":"Fun and educational math games to practice the four basic operations.","page.home.title":"Matteprov och Mattespel","page.home.description":"Skapa anpassade matteprov och spela lärorika mattespel.","page.home.heading":"Välkommen till Matteprov","generateTestForm.startTable":"Start Tabell","generateTestForm.endTable":"Slut Tabell","generateTestForm.includeAnswers":"Inkludera Svar","generateTestForm.createTest":"Skapa Prov","generateTestForm.printTest":"Skriv ut Prov","generateTestForm.numQuestions":"Antal uppgifter","printResults.heading":"Matteprov - Lycka till!","printResults.answerKey":"Facit","footer.privacy":"Integritetspolicy"}};function E(){const a=y(new URL(window.location.href)),r=b(a);var i=document.getElementById("results").cloneNode(!0),d=document.getElementById("includeAnswerKey").checked;i.id="";var t=window.open("","_blank");if(t.document.write(`<html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"> 
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
    </head><body>`),t.document.write(`<h1 class='text-4xl pb-4 text-center'>${r("printResults.heading")}</h1>`),t.document.write('<div class="grid">'),t.document.write(i.innerHTML),t.document.write("</div>"),d){var m=document.getElementById("answerKeyElement").cloneNode(!0);m.classList.remove("is-hidden"),t.document.write('<div class="new-page"></div>'),t.document.write(`<h1 class="text-4xl pb-4 text-center">${r("printResults.answerKey")}</h1>`),t.document.write('<div class="grid">'),t.document.write(m.innerHTML),t.document.write("</div>")}t.document.write("</body></html>"),t.document.close(),setTimeout(function(){t.print()},200)}function B(){var a=parseInt(document.getElementById("startNumber").value),r=parseInt(document.getElementById("endNumber").value),i=parseInt(document.getElementById("numQuestions").value),d=document.getElementById("includeAnswerKey").checked;document.getElementById("printButton").disabled=!1,window.innerWidth<=768&&(document.getElementById("instruction").hidden=!0);var t=document.getElementById("results");t.innerHTML="";var m=document.getElementById("answerKeyElement");m.innerHTML="";for(var e=[],s=a;s<=r;s++)for(var o=1;o<=10;o++)e.push({num1:s,num2:o});c(e);for(var n=0;n<i;n++){var u=e[n].num1+" * "+e[n].num2+" = ",l=e[n].num1*e[n].num2;t.innerHTML+=`
    <div class="w-full sm:w-1/2 md:w-1/3 p-2">
        <div class="bg-gray-100 p-4 rounded-lg shadow">${u}</div>
    </div>
`,d&&(m.innerHTML+=`
        <div class="w-full sm:w-1/2 md:w-1/3 p-2">
            <div class="bg-gray-100 p-4 rounded-lg shadow">${u} ${l}</div>
        </div>
    `)}}function M(){var a=parseInt(document.getElementById("startNumber").value),r=parseInt(document.getElementById("endNumber").value),i=parseInt(document.getElementById("numQuestions").value),d=document.getElementById("includeAnswerKey").checked;document.getElementById("printButton").disabled=!1,document.getElementById("printButton").ref,window.innerWidth<=768&&(document.getElementById("instruction").hidden=!0);var t=document.getElementById("results");t.innerHTML="";var m=document.getElementById("answerKeyElement");m.innerHTML="";for(var e=[],s=a;s<=r;s++)for(var o=1;o<=10;o++)e.push({num1:s,num2:o});c(e);for(var n=0;n<i;n++){var u=e[n].num1+" + "+e[n].num2+" = ",l=e[n].num1+e[n].num2;t.innerHTML+=`
    <div class="w-full sm:w-1/2 md:w-1/3 p-2">
        <div class="bg-gray-100 p-4 rounded-lg shadow">${u}</div>
    </div>
`,d&&(m.innerHTML+=`
        <div class="w-full sm:w-1/2 md:w-1/3 p-2">
            <div class="bg-gray-100 p-4 rounded-lg shadow">${u} ${l}</div>
        </div>
    `)}}function L(){var a=parseInt(document.getElementById("startNumber").value),r=parseInt(document.getElementById("endNumber").value),i=parseInt(document.getElementById("numQuestions").value),d=document.getElementById("includeAnswerKey").checked;document.getElementById("printButton").disabled=!1,window.innerWidth<=768&&(document.getElementById("instruction").hidden=!0);var t=document.getElementById("results");t.innerHTML="";var m=document.getElementById("answerKeyElement");m.innerHTML="";for(var e=[],s=a;s<=r;s++)for(var o=1;o<=10;o++)s>=o&&e.push({num1:s,num2:o});c(e);for(var n=0;n<i;n++){var u=e[n].num1+" - "+e[n].num2+" = ",l=e[n].num1-e[n].num2;t.innerHTML+=`
    <div class="w-full sm:w-1/2 md:w-1/3 p-2">
        <div class="bg-gray-100 p-4 rounded-lg shadow">${u}</div>
    </div>
`,d&&(m.innerHTML+=`
        <div class="w-full sm:w-1/2 md:w-1/3 p-2">
            <div class="bg-gray-100 p-4 rounded-lg shadow">${u} ${l}</div>
        </div>
    `)}}function A(){var a=parseInt(document.getElementById("startNumber").value),r=parseInt(document.getElementById("endNumber").value),i=parseInt(document.getElementById("numQuestions").value),d=document.getElementById("includeAnswerKey").checked;document.getElementById("printButton").disabled=!1,window.innerWidth<=768&&(document.getElementById("instruction").hidden=!0);var t=document.getElementById("results");t.innerHTML="";var m=document.getElementById("answerKeyElement");m.innerHTML="";for(var e=[],s=a;s<=r;s++)for(var o=2;o<=10;o++)s%o===0&&s!==o&&e.push({num1:s,num2:o});for(;e.length<i;){var n=Math.floor(Math.random()*(r-a+1))+a,u=Math.floor(Math.random()*9)+2;n%u===0&&n!==u&&e.push({num1:n,num2:u})}c(e);for(var l=0;l<i;l++){var p=e[l].num1+" / "+e[l].num2+" = ",h=e[l].num1/e[l].num2;t.innerHTML+=`
    <div class="w-full sm:w-1/2 md:w-1/3 p-2">
        <div class="bg-gray-100 p-4 rounded-lg shadow">${p}</div>
    </div>
`,d&&(m.innerHTML+=`
        <div class="w-full sm:w-1/2 md:w-1/3 p-2">
            <div class="bg-gray-100 p-4 rounded-lg shadow">${p} ${h}</div>
        </div>
    `)}}function c(a){for(var r=a.length-1;r>0;r--){var i=Math.floor(Math.random()*(r+1)),d=a[r];a[r]=a[i],a[i]=d}}const g=document.getElementById("createTestButton"),v=document.getElementById("printButton");g&&v&&g.addEventListener("click",()=>{v.removeAttribute("disabled")});const I=new URLSearchParams(window.location.search),T={start:"startNumber",end:"endNumber",antal:"numQuestions"};for(const[a,r]of Object.entries(T)){const i=I.get(a),d=document.getElementById(r);i&&d&&/^\d+$/.test(i)&&(d.value=i)}export{A as a,B as b,L as c,M as g,E as p};
