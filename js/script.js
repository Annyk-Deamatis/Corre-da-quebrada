let navbar = document.querySelector('.navbar'); // menu header

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form'); // pesquisa

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container'); // carrinho

document.querySelector('#carrinho-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}



function preto(){
    document.getElementById("body").style.background = "#f4f4f4";
    document.querySelector("#header").style.background = "#f4f4f4";
    document.querySelector("#carrinho-btn").style.color = "#f05483";
    document.querySelector("#search-btn").style.color = "#f05483";
    document.querySelector("#header").style.border = "2px solid #d0d0d0";
    document.querySelector("#hoome").style.color = "#13131a";
    document.querySelector("#Sobre").style.color = "#13131a";
    document.querySelector("#meNu").style.color = "#13131a";
    document.querySelector("#pdto").style.color = "#13131a";
    document.querySelector("#reviiew").style.color = "#13131a";
    document.querySelector("#contatto").style.color = "#13131a";
    document.querySelector(".footer").style.background = "#f0548350";
    document.querySelector("#icone").style.color = "#13131a";
    document.querySelector("#icone").style.border = "1px solid #13131a";
    document.querySelector("#icone3").style.color = "#13131a";
    document.querySelector("#icone3").style.border = "1px solid #13131a";
    document.querySelector("#icone4").style.color = "#13131a";
    document.querySelector("#icone4").style.border = "1px solid #13131a";
    document.querySelector("#icone5").style.color = "#13131a";
    document.querySelector("#icone5").style.border = "1px solid #13131a";
    document.querySelector("#icone1").style.color = "#13131a";
    document.querySelector("#icone1").style.border = "1px solid #13131a";
    document.querySelector("#homee").style.color = "#13131a";
    document.querySelector("#sobree").style.color = "#13131a";
    document.querySelector("#menuu").style.color = "#13131a";
    document.querySelector("#produtos").style.color = "#13131a";
    document.querySelector("#revieww").style.color = "#13131a";
    document.querySelector("#contatoo").style.color = "#13131a";
    document.querySelector("#boxcaneca").style.background = "#f0548350";
    document.querySelector("#boxcamiseta").style.background = "#f0548350";
    document.querySelector("#boxquadro").style.background = "#f0548350";
    document.querySelector("#boxchaveiro").style.background = "#f0548350";
    document.querySelector("#boxmoletom").style.background = "#f0548350";
    document.querySelector("#boxazulejo").style.background = "#f0548350";
    document.querySelector("#boxpessoa1").style.background = "#f0548350";
    document.querySelector("#boxpessoa2").style.background = "#f0548350";
    document.querySelector("#boxpessoa3").style.background = "#f0548350";
    document.querySelector("#boxpessoa4").style.background = "#f0548350";
    document.querySelector("#p1").style.color = "#000";
    document.querySelector("#p2").style.color = "#000";
    document.querySelector("#p3").style.color = "#000";
    document.querySelector("#p4").style.color = "#000";
}
