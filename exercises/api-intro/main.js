var xhr = new XMLHttpRequest();
var pokeSrc = [];
var pokeName = [];

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        var pokeArray = data.objects[0].pokemon;
        for (var i = 0; i < pokeArray.length; i++) {
            pokeName.push((pokeArray[i].name));
            pokeSrc.push((pokeArray[i].resource_uri));
        }

        document.getElementById("results").innerHTML = pokeName;
        document.getElementById("results1").innerHTML = pokeSrc;
    }
}

xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true);
xhr.send();


//    for (var pokeInfo in data){
//        console.log(pokeInfo[0]);
//    }





//
//if (xhr.readyState === 4 && xhr.status === 200) {
////    console.log(JSON.parse(xhr.responseText));
//console.log(data);
//var resultsText = "";
//for (var prop in data) {
//resultsText += "<h3>" + prop + ": " + data[prop] + "</h3>
//}
//    var data = JSON.parse(xhr.responseText);
//    document.getElementById("results").innerHTML = resultsText;
//    
//     document.getElementById("results").innerHTML = "<h1>" 
//     
//     
//     
//     
//     if (xhr.readyState === 4 && xhr.status === 200) {
//        var data = JSON.parse(xhr.responseText);
//        console.log(data);
//        var resultsText = "";
//        for (var prop in data) {
//            resultsText += "<h3>" + prop + ": " + data[prop] + "</h3>"
//        }
//        document.getElementById("results").innerHTML = resultsText;
//    }
