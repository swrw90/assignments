//function (){
//
//    var windowH = $(window).height(),
//        documElem = $(document),
//        slideDownPage = $(".slide-down-page"),
//        down = $(".down"),
//        btns = $(".btn"),
//        animSpeed = 500;
//
//    slideDownPage.css({
//        height: windowH + "px",
//        top: -windowH + "px"
//    });
//
//    btns.on("click", function (event) {
//        if ($(this).hasClass("down")) {
//            slideDownPage.animate({
//                "top": 0
//            }, animSpeed);
//            .animate({
//                "margin-top": windowH + "px"
//            }, animSpeed)
//        } else {
//            slideDownPage.animate({
//                "top": -windowH + "px"
//            }, animSpeed);
//            down.animate({
//                "margin-top": 0
//            }, animSpeed)
//        }
//        event.preventDefault();
//    });
//    documElem.on("scroll", function () {
//        if ($(this).scrollTop() > slideDownPage.height() && slideDownPage.css("top") === "0px") {
//            slideDownPage.css("top", -windowH + "px");
//            down.css("margin-top": 0);
//            documElem.scrollTop(0);
//        }
//    });
//};
