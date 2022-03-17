

window.onload = ('DOMContentLoaded',function() {

    // location_menu
    let subMenu_1 = document.querySelector(".submenu_1");
    let subMenu_2 = document.querySelector(".submenu_2");


    // top 버튼
    let topBtn = document.querySelector(".top_btn");


    console.log(subMenu_2);
    
    // location_menu
    subMenu_1.addEventListener('click', function() {
        subMenu_1.classList.toggle('active');
    });
    subMenu_2.addEventListener('click', function() {
        subMenu_2.classList.toggle('active');
    });

    // top 버튼
    topBtn.addEventListener('click', function(e){
        e.preventDefault();
        window.scrollTo({ top:0, behavior: 'smooth'});
    })


    // ----------------------------------------------------
    // scroll event

    // 윈도우 높이
    let winH = window.innerHeight;

    // 스크롤 값
    let scrollY = window.screenY;

    // .cont_tit_text top 값
    // let scrollEvent_1 = document.querySelector("scrollEvent");
    let scrollEvent = document.getElementsByClassName("scrollEvent");
        console.log(scrollEvent);

    var initModule = function () {
        items = document.querySelectorAll(".text");
        winH = window.innerHeight;
        _addEventHandlers();
    }


    var _addEventHandlers = function () {
        window.addEventListener("scroll", _checkPosition);
        window.addEventListener("load", _checkPosition);
        window.addEventListener("resize", initModule);
    };

    let _checkPosition = function(){
        for( var i=0; i<scrollEvent.length; i++){
            let scrollTopLen = scrollEvent[i];
            let scrollTop = scrollEvent[i].getBoundingClientRect().top;
    
            console.log(scrollTop);
    
            if (winH > scrollTop){
                scrollTopLen.classList.add("active");
            }
        }
    }
    

    
});
