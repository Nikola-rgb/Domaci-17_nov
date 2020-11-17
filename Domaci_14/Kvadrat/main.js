window.addEventListener('load', domaci);

function domaci() {
    let kvadrat = document.getElementById('kvadrat');

    kvadrat.style.border = '2px solid #000';
    kvadrat.style.minHeight = '250px';
    kvadrat.style.width = '400px';
    kvadrat.style.background = 'orangered';
    kvadrat.style.margin  = '30px';
    kvadrat.style.padding = '5%';

}


let duzina = document.getElementById('duzina');
duzina.innerText = ' 400px';

let boja =document.getElementById('boja');
boja.innerText = ' Orangered';

let pozicijaX =document.getElementById('pozicijaX');
pozicijaX.innerText = ' 400px';

let pozicijaY =document.getElementById('pozicijaY');
pozicijaY.innerText = ' 250px';



