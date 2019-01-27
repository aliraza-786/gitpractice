

function myfun(){
var fname = document.getElementById('fname').value;
var lname = document.getElementById('lname').value;
localStorage.setItem("FirstName", fname);
localStorage.setItem("LastName", lname);

var getfname = localStorage.getItem("FirstName");
var getlname = localStorage.getItem("LastName");
alert("First Name is " + getfname);
alert("Last Name is " + getlname);
// console.log(getfname);
// console.log(getlname);
}