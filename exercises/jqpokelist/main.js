var xhr = new XMLHttpRequest();
var pokeSrc = [];
var pokeName = [];

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        var pokeArray = data.objects[0].pokemon;
        for (var i = 0; i < pokeArray.length; i++) {
            pokeName.push((pokeArray[i].name));
//            pokeSrc.push((pokeArray[i].resource_uri));
        }

        document.getElementById("results").innerHTML = pokeName;
//        document.getElementById("results1").innerHTML = pokeSrc;
    }
}

xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true);
xhr.send();