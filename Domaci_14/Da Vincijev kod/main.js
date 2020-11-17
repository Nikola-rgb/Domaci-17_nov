window.addEventListener('load', domaci);

function domaci() {
    let rovche = document.getElementById('rovche');
    let title =document.getElementById('title');
    let cena = document.getElementById('cena');
    let isbn = document.getElementById('isbn');



    rovche.style.boxShadow = '1px 1px 25px'; 
    rovche.style.borderRadius = '10px';

    title.style.fontFamily = 'Charm';
    title.style.fontSize  = '3rem';

    cena.style.fontSize = '2.5rem';
    cena.style.fontFamily = 'Source Sans Pro';
    cena.style.color  = '#ff4500';

    isbn.style.fontFamily = 'Source Sans Pro';
    isbn.style.fontWeight = '700';


}

let autor = document.getElementById('author');
autor.innerText = '  Den Braun';

let zanr = document.getElementById('zanr');
zanr.innerText = '  Triler';

let cena = document.getElementById('cena');
cena.innerText = '  712.80 din';

let isbn = document.getElementById('isbn');
isbn.innerText =  ' 978867560041';
 

