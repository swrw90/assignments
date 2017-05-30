var xhr = new XMLHttpRequest();
var pokeSrc = [];
var pokeName = [];

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        var pokeArray = data.objects[0].pokemon;
        for (var i = 0; i < pokeArray.length; i++) {
            $("#pokeList").append("<li>" + pokeArray[i].name + "</li>")
        }
    }
}

xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true);
xhr.send();
