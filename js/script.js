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


function claro(){
    document.querySelector("#body_produtos").style.background = "#f0548335";
    document.querySelector("#footer_produtos").style.background = "#f0548335";
    document.querySelector("#carrinho-btn-pdt").style.color = "#f05483";
    document.querySelector("#search-btn-pdt").style.color = "#f05483";
    document.querySelector("#header-pdt").style.background = "#f4f4f4";
    document.querySelector("#home-pdt").style.color = "#13131a";
    document.querySelector("#canecas").style.color = "#13131a";
    document.querySelector("#camisetas").style.color = "#13131a";
    document.querySelector("#quadro").style.color = "#13131a";
    document.querySelector("#chaveiro").style.color = "#13131a";
    document.querySelector("#moletom").style.color = "#13131a";
    document.querySelector("#azulejo").style.color = "#13131a";
    document.querySelector("#homepdt").style.color = "#13131a";
    document.querySelector("#sobrepdt").style.color = "#13131a";
    document.querySelector("#menupdt").style.color = "#13131a";
    document.querySelector("#produtopdt").style.color = "#13131a";
    document.querySelector("#contatopdt").style.color = "#13131a";
    document.querySelector("#icone-pdt").style.color = "#13131a";
    document.querySelector("#icone-pdt").style.border = "1px solid #13131a";
    document.querySelector("#icone3-pdt").style.color = "#13131a";
    document.querySelector("#icone3-pdt").style.border = "1px solid #13131a";
    document.querySelector("#icone4-pdt").style.color = "#13131a";
    document.querySelector("#icone4-pdt").style.border = "1px solid #13131a";
    document.querySelector("#icone5-pdt").style.color = "#13131a";
    document.querySelector("#icone5-pdt").style.border = "1px solid #13131a";
    document.querySelector("#icone1-pdt").style.color = "#13131a";
    document.querySelector("#icone1-pdt").style.border = "1px solid #13131a";
    document.querySelector("#shop1").style.color = "#f05483";
    document.querySelector("#shop1").style.border = "1px solid #f05483";
    document.querySelector("#shop2").style.color = "#f05483";
    document.querySelector("#shop2").style.border = "1px solid #f05483";
    document.querySelector("#shop3").style.color = "#f05483";
    document.querySelector("#shop3").style.border = "1px solid #f05483";
    document.querySelector("#shop4").style.color = "#f05483";
    document.querySelector("#shop4").style.border = "1px solid #f05483";
    document.querySelector("#shop5").style.color = "#f05483";
    document.querySelector("#shop5").style.border = "1px solid #f05483";
    document.querySelector("#shop6").style.color = "#f05483";
    document.querySelector("#shop6").style.border = "1px solid #f05483";
    document.querySelector("#shop7").style.color = "#f05483";
    document.querySelector("#shop7").style.border = "1px solid #f05483";
    document.querySelector("#shop8").style.color = "#f05483";
    document.querySelector("#shop8").style.border = "1px solid #f05483";
    document.querySelector("#shop9").style.color = "#f05483";
    document.querySelector("#shop9").style.border = "1px solid #f05483";
    document.querySelector("#shop10").style.color = "#f05483";
    document.querySelector("#shop10").style.border = "1px solid #f05483";
    document.querySelector("#shop11").style.color = "#f05483";
    document.querySelector("#shop11").style.border = "1px solid #f05483";
    document.querySelector("#shop12").style.color = "#f05483";
    document.querySelector("#shop12").style.border = "1px solid #f05483";
    document.querySelector("#shop13").style.color = "#f05483";
    document.querySelector("#shop13").style.border = "1px solid #f05483";
    document.querySelector("#shop14").style.color = "#f05483";
    document.querySelector("#shop14").style.border = "1px solid #f05483";
    document.querySelector("#shop15").style.color = "#f05483";
    document.querySelector("#shop15").style.border = "1px solid #f05483";
    document.querySelector("#shop16").style.color = "#f05483";
    document.querySelector("#shop16").style.border = "1px solid #f05483";
    document.querySelector("#shop17").style.color = "#f05483";
    document.querySelector("#shop17").style.border = "1px solid #f05483";
    document.querySelector("#shop18").style.color = "#f05483";
    document.querySelector("#shop18").style.border = "1px solid #f05483";
    document.querySelector("#shop19").style.color = "#f05483";
    document.querySelector("#shop19").style.border = "1px solid #f05483";
    document.querySelector("#shop20").style.color = "#f05483";
    document.querySelector("#shop20").style.border = "1px solid #f05483";
    document.querySelector("#shop21").style.color = "#f05483";
    document.querySelector("#shop21").style.border = "1px solid #f05483";
    document.querySelector("#shop22").style.color = "#f05483";
    document.querySelector("#shop22").style.border = "1px solid #f05483";
    document.querySelector("#shop23").style.color = "#f05483";
    document.querySelector("#shop23").style.border = "1px solid #f05483";
    document.querySelector("#cor1").style.color = "#f05483";
    document.querySelector("#cor1").style.border = "1px solid #f05483";
    document.querySelector("#cor2").style.color = "#f05483";
    document.querySelector("#cor2").style.border = "1px solid #f05483";
    document.querySelector("#cor3").style.color = "#f05483";
    document.querySelector("#cor3").style.border = "1px solid #f05483";
    document.querySelector("#cor4").style.color = "#f05483";
    document.querySelector("#cor4").style.border = "1px solid #f05483";
    document.querySelector("#cor5").style.color = "#f05483";
    document.querySelector("#cor5").style.border = "1px solid #f05483";
    document.querySelector("#cor6").style.color = "#f05483";
    document.querySelector("#cor6").style.border = "1px solid #f05483";
    document.querySelector("#cor7").style.color = "#f05483";
    document.querySelector("#cor7").style.border = "1px solid #f05483";
    document.querySelector("#cor8").style.color = "#f05483";
    document.querySelector("#cor8").style.border = "1px solid #f05483";
    document.querySelector("#cor9").style.color = "#f05483";
    document.querySelector("#cor9").style.border = "1px solid #f05483";
    document.querySelector("#cor10").style.color = "#f05483";
    document.querySelector("#cor10").style.border = "1px solid #f05483";
    document.querySelector("#cor11").style.color = "#f05483";
    document.querySelector("#cor11").style.border = "1px solid #f05483";
    document.querySelector("#cor12").style.color = "#f05483";
    document.querySelector("#cor12").style.border = "1px solid #f05483";
    document.querySelector("#cor13").style.color = "#f05483";
    document.querySelector("#cor13").style.border = "1px solid #f05483";
    document.querySelector("#cor14").style.color = "#f05483";
    document.querySelector("#cor14").style.border = "1px solid #f05483";
    document.querySelector("#cor15").style.color = "#f05483";
    document.querySelector("#cor15").style.border = "1px solid #f05483";
    document.querySelector("#cor16").style.color = "#f05483";
    document.querySelector("#cor16").style.border = "1px solid #f05483";
    document.querySelector("#cor17").style.color = "#f05483";
    document.querySelector("#cor17").style.border = "1px solid #f05483";
    document.querySelector("#cor18").style.color = "#f05483";
    document.querySelector("#cor18").style.border = "1px solid #f05483";
    document.querySelector("#cor19").style.color = "#f05483";
    document.querySelector("#cor19").style.border = "1px solid #f05483";
    document.querySelector("#cor20").style.color = "#f05483";
    document.querySelector("#cor20").style.border = "1px solid #f05483";
    document.querySelector("#cor21").style.color = "#f05483";
    document.querySelector("#cor21").style.border = "1px solid #f05483";
    document.querySelector("#cor22").style.color = "#f05483";
    document.querySelector("#cor22").style.border = "1px solid #f05483";
    document.querySelector("#cor23").style.color = "#f05483";
    document.querySelector("#cor23").style.border = "1px solid #f05483";
    document.querySelector("#eye1").style.color = "#f05483";
    document.querySelector("#eye1").style.border = "1px solid #f05483";
    document.querySelector("#eye2").style.color = "#f05483";
    document.querySelector("#eye2").style.border = "1px solid #f05483";
    document.querySelector("#eye3").style.color = "#f05483";
    document.querySelector("#eye3").style.border = "1px solid #f05483";
    document.querySelector("#eye4").style.color = "#f05483";
    document.querySelector("#eye4").style.border = "1px solid #f05483";
    document.querySelector("#eye5").style.color = "#f05483";
    document.querySelector("#eye5").style.border = "1px solid #f05483";
    document.querySelector("#eye6").style.color = "#f05483";
    document.querySelector("#eye6").style.border = "1px solid #f05483";
    document.querySelector("#eye7").style.color = "#f05483";
    document.querySelector("#eye7").style.border = "1px solid #f05483";
    document.querySelector("#eye8").style.color = "#f05483";
    document.querySelector("#eye8").style.border = "1px solid #f05483";
    document.querySelector("#eye9").style.color = "#f05483";
    document.querySelector("#eye9").style.border = "1px solid #f05483";
    document.querySelector("#eye10").style.color = "#f05483";
    document.querySelector("#eye10").style.border = "1px solid #f05483";
    document.querySelector("#eye11").style.color = "#f05483";
    document.querySelector("#eye11").style.border = "1px solid #f05483";
    document.querySelector("#eye12").style.color = "#f05483";
    document.querySelector("#eye12").style.border = "1px solid #f05483";
    document.querySelector("#eye13").style.color = "#f05483";
    document.querySelector("#eye13").style.border = "1px solid #f05483";
    document.querySelector("#eye14").style.color = "#f05483";
    document.querySelector("#eye14").style.border = "1px solid #f05483";
    document.querySelector("#eye15").style.color = "#f05483";
    document.querySelector("#eye15").style.border = "1px solid #f05483";
    document.querySelector("#eye16").style.color = "#f05483";
    document.querySelector("#eye16").style.border = "1px solid #f05483";
    document.querySelector("#eye17").style.color = "#f05483";
    document.querySelector("#eye17").style.border = "1px solid #f05483";
    document.querySelector("#eye18").style.color = "#f05483";
    document.querySelector("#eye18").style.border = "1px solid #f05483";
    document.querySelector("#eye19").style.color = "#f05483";
    document.querySelector("#eye19").style.border = "1px solid #f05483";
    document.querySelector("#eye20").style.color = "#f05483";
    document.querySelector("#eye20").style.border = "1px solid #f05483";
    document.querySelector("#eye21").style.color = "#f05483";
    document.querySelector("#eye21").style.border = "1px solid #f05483";
    document.querySelector("#eye22").style.color = "#f05483";
    document.querySelector("#eye22").style.border = "1px solid #f05483";
    document.querySelector("#eye23").style.color = "#f05483";
    document.querySelector("#eye23").style.border = "1px solid #f05483";
    document.querySelector("#preco1").style.color = "#13131a";
    document.querySelector("#preco2").style.color = "#13131a";
    document.querySelector("#preco3").style.color = "#13131a";
    document.querySelector("#preco4").style.color = "#13131a";
    document.querySelector("#preco5").style.color = "#13131a";
    document.querySelector("#preco6").style.color = "#13131a";
    document.querySelector("#preco7").style.color = "#13131a";
    document.querySelector("#preco8").style.color = "#13131a";
    document.querySelector("#preco9").style.color = "#13131a";
    document.querySelector("#preco10").style.color = "#13131a";
    document.querySelector("#preco11").style.color = "#13131a";
    document.querySelector("#preco12").style.color = "#13131a";
    document.querySelector("#preco13").style.color = "#13131a";
    document.querySelector("#preco14").style.color = "#13131a";
    document.querySelector("#preco15").style.color = "#13131a";
    document.querySelector("#preco16").style.color = "#13131a";
    document.querySelector("#preco17").style.color = "#13131a";
    document.querySelector("#preco18").style.color = "#13131a";
    document.querySelector("#preco19").style.color = "#13131a";
    document.querySelector("#preco20").style.color = "#13131a";
    document.querySelector("#preco21").style.color = "#13131a";
    document.querySelector("#preco22").style.color = "#13131a";
    document.querySelector("#preco23").style.color = "#13131a";
}