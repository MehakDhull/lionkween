// FIxed header

// window.onscroll= function(){scrollover()};


var header= document.getElementById("msc-header")
var sticky = header.offsetHeight;


function scrollover(){
    if ($(window).scrollTop() > sticky) {
        header.classList.add("sticky"); 
        $("body,html").css({"margin-top": "0px"})
    } else {
        header.classList.remove("sticky"); 
        $("body,html").css({"margin-top": "0px"})
    }
   
}

$(document).on('click','.msc-menu-burger',function(e){
    e.preventDefault();
    $(".msc-navbar").toggleClass("my-menu");
})

$(document).on('click,','.msc-menu-burger',function(e){
    e.preventDefault();
    $(".msc-navbar").toggleClass(".msc-resp-socials")
})



// to top button
let mybutton = document.getElementById("msc-scroll-to-top");
window.onscroll=function(){
    scrollFunction();
    scrollover();
};

function scrollFunction(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop >20) {
         mybutton.style.display="block";        
    } else {
        mybutton.style.display="none";
    }
}


function goToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// to top button