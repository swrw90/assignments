$.ajax({
    url: "http://swapi.co/api/people",
    method: "GET",
    // Success handler - function to run if the data comes back successfully
    
    success: function() {
        console.log(data);
    },
    
    // provide an error handler in case something goes wrong
    error: function(error) {
        console.log(error);
    }
});


//-------------//

//anonymous func, callback func
$.get("http://swapi.co/api/people", function() {
    console.log(data);
});

function handleData(data) {
    console.log(data);
}

$.get("http://swapi.co/api/people", handleData);

console.log("Waiting...");
console.log("Waiting...");
console.log("Waiting...");
console.log("Waiting...");
console.log("Waiting...");

//Shortcut method for GETting data
$.get("http://swapi.co/api/people", handleData);

//Other available shortcut methods:
//$.post("url", {firstName: "Bob"}, function(data) {...})
//$.delete()
//$.put()