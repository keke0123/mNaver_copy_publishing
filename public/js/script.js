


(function(){
    console.log("script start");
    $("#aside_menu_popup_btn").on('click', function(){
        console.log("aside_menu_popup_btn clicked");
        $("#aside").css("left","0%");
    });
    $("#add__menu__block").on('click', function(){
        console.log("add__menu__block clicked");
        $("#menu__add__box").before("<div class='test2 aside__menu__box__menubox'></div>")
    });
    $("#close__menu__btn").on('click', function(){
        console.log("close__menu__btn clickedd");
        $("#aside").css("left", "-100%");
    });

    let checked = 0;
    
    $(".article__07__box__subtitle--letter").on('click', function(){
        checked = $(".article__07__box__subtitle--letter").index(this);
        console.log(checked);
        $(".article__07__box__subtitle--letter").removeClass("article__07__box__subtitle--letter--focus");
        $(this).addClass("article__07__box__subtitle--letter--focus");
        //console.log($(".article__07__box__content").get(0));
        $(".article__07__box__content").removeClass("article__07__box__content--show");
        //console.log($(".article__07__box__content").get(checked));
        //console.log($(".article__07__box__content").eq(checked));
        $(".article__07__box__content").eq(checked).addClass("article__07__box__content--show");
    });

    $(window).scroll(function(){
        //console.log($(this).scrollTop());
        if($(this).scrollTop() > 100){
            $("#scroll-top-btn").show();
        } else{
            $("#scroll-top-btn").hide();
        }
    });

    $("#scroll-top-btn").on('click', function(){
        console.log("scroll-btn clicked");
        $(window).scrollTop(0);
    });
})();