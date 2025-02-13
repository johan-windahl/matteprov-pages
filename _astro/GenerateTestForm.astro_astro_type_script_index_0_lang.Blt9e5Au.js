const w="sv";function b(a){const[,i]=a.pathname.split("/");return i==="en"?"en":w}function y(a){return function(d){return f[a][d]||d}}const f={en:{"nav.home":"Home","nav.addition":"Addition","nav.subtraction":"Subtraction","nav.multiplication":"Multiplication","nav.division":"Division","nav.mathgames":"Math Games","nav.practicetogether":"Practice together","page.addition.title":"Addition Worksheets","page.addition.description":"Create and print customized addition worksheets.","page.subtraction.title":"Subtraction Worksheets","page.subtraction.description":"Create and print customized subtraction worksheets.","page.multiplication.title":"Multiplication Worksheets","page.multiplication.description":"Create and print customized multiplication worksheets.","page.division.title":"Division Worksheets","page.division.description":"Create and print customized division worksheets.","page.mathgames.title":"Math Games","page.mathgames.description":"Fun and educational math games to practice the four basic operations.","page.home.title":"Math Worksheets and Games","page.home.description":"Create custom math worksheets and play educational math games.","page.home.heading":"Welcome to Math Worksheets","generateTestForm.startTable":"Start Table","generateTestForm.endTable":"End Table","generateTestForm.includeAnswers":"Include Answers","generateTestForm.createTest":"Create Test","generateTestForm.printTest":"Print Test","generateTestForm.numQuestions":"Number of Questions","printResults.heading":"Math Test - Good Luck!","printResults.answerKey":"Answers"},sv:{"nav.home":"Hem","nav.addition":"Addition","nav.subtraction":"Subtraktion","nav.multiplication":"Multiplikation","nav.division":"Division","nav.mathgames":"Mattespel","nav.practicetogether":"Öva tillsammans","page.addition.title":"Addition Worksheets","page.addition.description":"Create and print customized addition worksheets.","page.subtraction.title":"Subtraction Worksheets","page.subtraction.description":"Create and print customized subtraction worksheets.","page.multiplication.title":"Multiplication Worksheets","page.multiplication.description":"Create and print customized multiplication worksheets.","page.division.title":"Division Worksheets","page.division.description":"Create and print customized division worksheets.","page.mathgames.title":"Math Games","page.mathgames.description":"Fun and educational math games to practice the four basic operations.","page.home.title":"Matteprov och Mattespel","page.home.description":"Skapa anpassade matteprov och spela lärorika mattespel.","page.home.heading":"Välkommen till Matteprov","generateTestForm.startTable":"Start Tabell","generateTestForm.endTable":"Slut Tabell","generateTestForm.includeAnswers":"Inkludera Svar","generateTestForm.createTest":"Skapa Prov","generateTestForm.printTest":"Skriv ut Prov","generateTestForm.numQuestions":"Antal uppgifter","printResults.heading":"Matteprov - Lycka till!","printResults.answerKey":"Facit"}};function I(){const a=b(new URL(window.location.href)),i=y(a);var d=document.getElementById("results").cloneNode(!0),l=document.getElementById("includeAnswerKey").checked;d.id="";var t=window.open("","_blank");if(t.document.write(`<html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"> 
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
    </head><body>`),t.document.write(`<h1 class='text-4xl pb-4 text-center'>${i("printResults.heading")}</h1>`),t.document.write('<div class="grid">'),t.document.write(d.innerHTML),t.document.write("</div>"),l){var o=document.getElementById("answerKeyElement").cloneNode(!0);o.classList.remove("is-hidden"),t.document.write('<div class="new-page"></div>'),t.document.write(`<h1 class="text-4xl pb-4 text-center">${i("printResults.answerKey")}</h1>`),t.document.write('<div class="grid">'),t.document.write(o.innerHTML),t.document.write("</div>")}t.document.write("</body></html>"),t.document.close(),setTimeout(function(){t.print()},200)}function T(){var a=parseInt(document.getElementById("startNumber").value),i=parseInt(document.getElementById("endNumber").value),d=parseInt(document.getElementById("numQuestions").value),l=document.getElementById("includeAnswerKey").checked;document.getElementById("printButton").disabled=!1,window.innerWidth<=768&&(document.getElementById("instruction").hidden=!0);var t=document.getElementById("results");t.innerHTML="";var o=document.getElementById("answerKeyElement");o.innerHTML="";for(var e=[],r=a;r<=i;r++)for(var s=1;s<=10;s++)e.push({num1:r,num2:s});c(e);for(var n=0;n<d;n++){var m=e[n].num1+" * "+e[n].num2+" = ",u=e[n].num1*e[n].num2;t.innerHTML+=`
    <div class="w-full sm:w-1/2 md:w-1/3 p-2">
        <div class="bg-gray-100 p-4 rounded-lg shadow">${m}</div>
    </div>
`,l&&(o.innerHTML+=`
        <div class="w-full sm:w-1/2 md:w-1/3 p-2">
            <div class="bg-gray-100 p-4 rounded-lg shadow">${m} ${u}</div>
        </div>
    `)}}function E(){var a=parseInt(document.getElementById("startNumber").value),i=parseInt(document.getElementById("endNumber").value),d=parseInt(document.getElementById("numQuestions").value),l=document.getElementById("includeAnswerKey").checked;document.getElementById("printButton").disabled=!1,document.getElementById("printButton").ref,window.innerWidth<=768&&(document.getElementById("instruction").hidden=!0);var t=document.getElementById("results");t.innerHTML="";var o=document.getElementById("answerKeyElement");o.innerHTML="";for(var e=[],r=a;r<=i;r++)for(var s=1;s<=10;s++)e.push({num1:r,num2:s});c(e);for(var n=0;n<d;n++){var m=e[n].num1+" + "+e[n].num2+" = ",u=e[n].num1+e[n].num2;t.innerHTML+=`
    <div class="w-full sm:w-1/2 md:w-1/3 p-2">
        <div class="bg-gray-100 p-4 rounded-lg shadow">${m}</div>
    </div>
`,l&&(o.innerHTML+=`
        <div class="w-full sm:w-1/2 md:w-1/3 p-2">
            <div class="bg-gray-100 p-4 rounded-lg shadow">${m} ${u}</div>
        </div>
    `)}}function B(){var a=parseInt(document.getElementById("startNumber").value),i=parseInt(document.getElementById("endNumber").value),d=parseInt(document.getElementById("numQuestions").value),l=document.getElementById("includeAnswerKey").checked;document.getElementById("printButton").disabled=!1,window.innerWidth<=768&&(document.getElementById("instruction").hidden=!0);var t=document.getElementById("results");t.innerHTML="";var o=document.getElementById("answerKeyElement");o.innerHTML="";for(var e=[],r=a;r<=i;r++)for(var s=1;s<=10;s++)r>=s&&e.push({num1:r,num2:s});c(e);for(var n=0;n<d;n++){var m=e[n].num1+" - "+e[n].num2+" = ",u=e[n].num1-e[n].num2;t.innerHTML+=`
    <div class="w-full sm:w-1/2 md:w-1/3 p-2">
        <div class="bg-gray-100 p-4 rounded-lg shadow">${m}</div>
    </div>
`,l&&(o.innerHTML+=`
        <div class="w-full sm:w-1/2 md:w-1/3 p-2">
            <div class="bg-gray-100 p-4 rounded-lg shadow">${m} ${u}</div>
        </div>
    `)}}function M(){var a=parseInt(document.getElementById("startNumber").value),i=parseInt(document.getElementById("endNumber").value),d=parseInt(document.getElementById("numQuestions").value),l=document.getElementById("includeAnswerKey").checked;document.getElementById("printButton").disabled=!1,window.innerWidth<=768&&(document.getElementById("instruction").hidden=!0);var t=document.getElementById("results");t.innerHTML="";var o=document.getElementById("answerKeyElement");o.innerHTML="";for(var e=[],r=a;r<=i;r++)for(var s=2;s<=10;s++)r%s===0&&r!==s&&e.push({num1:r,num2:s});for(;e.length<d;){var n=Math.floor(Math.random()*(i-a+1))+a,m=Math.floor(Math.random()*9)+2;n%m===0&&n!==m&&e.push({num1:n,num2:m})}c(e);for(var u=0;u<d;u++){var p=e[u].num1+" / "+e[u].num2+" = ",h=e[u].num1/e[u].num2;t.innerHTML+=`
    <div class="w-full sm:w-1/2 md:w-1/3 p-2">
        <div class="bg-gray-100 p-4 rounded-lg shadow">${p}</div>
    </div>
`,l&&(o.innerHTML+=`
        <div class="w-full sm:w-1/2 md:w-1/3 p-2">
            <div class="bg-gray-100 p-4 rounded-lg shadow">${p} ${h}</div>
        </div>
    `)}}function c(a){for(var i=a.length-1;i>0;i--){var d=Math.floor(Math.random()*(i+1)),l=a[i];a[i]=a[d],a[d]=l}}const g=document.getElementById("createTestButton"),v=document.getElementById("printButton");g&&v&&g.addEventListener("click",()=>{v.removeAttribute("disabled")});export{M as a,T as b,B as c,E as g,I as p};
