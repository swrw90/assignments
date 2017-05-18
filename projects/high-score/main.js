const trash = ["You Suck!", "I'm The Best", "If you ain't first, you're last"];
const ENTRIES = "entries"

function submitClick() {
    if (isValid()) {
        gatherData();
    }
}

function gatherData() {
    var data = {
        name: document.getElementById("text").value,
        game: document.getElementById("game").value,
        date: document.getElementById("date").value,
        highScore: document.getElementById("high-score").value,
        trashBox: validCheckbox()
    }

    storeData(data);
}

function storeData(data) {
    var entries = JSON.parse(localStorage.getItem(ENTRIES)) || [];
    entries.push(data);
    localStorage.setItem(ENTRIES, JSON.stringify(entries));
    console.log(entries);
    //    localStorage.setItem("name", name);
    //    localStorage.setItem("game", game);
    //    localStorage.setItem("date", date);
    //    localStorage.setItem("highScore", highScore);
}

//function threadLoaded() {
//    retrieveData();
//}

function retrieveData() {
    var entries = JSON.parse(localStorage.getItem(ENTRIES));
    //    var name = localStorage.getItem("name");
    //    var game = localStorage.getItem("game");
    //    var date = localStorage.getItem("date");
    //    var highScore = localStorage.getItem("highScore");
    //    var trashBox = localStorage.getItem("trash");
    displayData(entries);
}

function displayData(entries) {
    /$("#name").text(name); Why doesn't this work? Also tried .html/
    var html = "";
    for (var i = 0; i < entries.length; i++) {
        html += `
        <tr>
                <td id="name">${entries[i].name}</td>
                <td id="game">${entries[i].game}</td>
                <td id="date">${entries[i].date}</td>
                <td id="high-score">${entries[i].highScore}</td>
                <td id="trash-talk">${entries[i].trashBox}</td>
         </tr>
`
        //        console.log(html);
    }

    $('#table').append(html);
};

function isValid() {
    var fullName = $("#text").val();
    var gameName = $("#game").val();
    var date = $("#date").val();
    var validScore = $("#high-score").val();

    if (fullName === "" || gameName === "" || date === "" || validScore === "") {
        alert("Please fill out required fields");
        return false;
    }
    if (validScore < 1) {
        alert("Invalid Input: Provide a valid high score");
        return false;
    }
    return true;
};

function validCheckbox() {

    var trashTalk1 = document.getElementById("trash-talk").checked;

    if (trashTalk1 === true) {
        var trashNum = Math.floor((Math.random() * 3) + 0);
        return trash[trashNum];
    } else {
        return "";
    }
};


//
//
// $ = document
// ('#text') = .getElementById('text');
// ('.text') = .getElementsByClass('text');
// ('div') = .getElementsByTagName('div');
// ('input[placeholder = First Name]') = get element by attribute (look this up cause the syntax may be a little off)
//
// .val() = .value
// .append(appendThis) = this adds whatever to the end of whatever you select
// $('#text').click(function(){})
// $('#text').on('click , hover, mousedown' function(){})
