//var dropdowns = document.getElementsByClassName("dropdown-content");
//
//
function controlDropdowns(id) {

    var dropdowns = document.getElementById("categoriesDropdown");
    if (dropdowns.addEventListener("mouseover", revealDropdowns(id))) {} else if (dropdowns.addEventListener("mouseout", hideDropdowns(id))) {};


    function hideDropdowns(id) {
        id.classList.toggle("hide");
    }

    function revealDropdowns(id) {
      id.classList.toggle("display");
    }


}




//
//dropdowns.addEventListener("mouseout", hideDropdowns);
//dropdowns.addEventListener("mouseover", revealDropdowns);
//
//




//
//element.addEventListener("click", mySecondFunction);
//
//
//
//
//
//
//
//
//catMenu.addEventListener(onmouseover).classList.toggle("display");
//
//




//
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}


window.onmouseover = function hideCategories(mouse) {
//    if (mouse.target.matches('.categoriesDropdown') && mouse.target.matches('.dropdown-content')) {
//
//        var dropdowns = document.getElementsByClassName("dropdown-content");
//      
//        for (i = 0; i < dropdowns.length; i++) {
//            var openDropdown = dropdowns[i];
//            if (openDropdown.classList.contains('display')) {
//                openDropdown.classList.remove('display');
//            }
//        }
//    }
//}
