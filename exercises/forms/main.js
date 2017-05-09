var fullName;
var phoneNumber;
var date;
var gender1;
var gender2;

function submitClick() {
    fullName = document.getElementById("text").value;

    phoneNumber = document.getElementById("phoneNumber").value;

    date = document.getElementById("date").value;
    
function maleBox() {
    gender1 = document.getElementById("gender1").value;
    
}
function FemaleBox() {
    gender1 = document.getElementById("gender2").value;
    
}
    
    var submittedInfo = (`Name: ${fullName}\nPhone: ${phoneNumber}\nDate:${date}\Gender:${genderBox}`);

    document.getElementById("submitBtn").value = `Submited Info:${submittedInfo}`;
    alert(submittedInfo);
}

//var form = document.getElementById("myForm");
//
//function submit() {
//    var name = form.elements["gullname"].value;
//    var gender = form.elements["gender"].value;
//    
//    alert(name + " is " + gender)
//}

