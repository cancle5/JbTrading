let Data = [];

var popup = document.getElementById('popup');
var itemList = document.getElementById('itempopuplist');

var selected = null;

var Information = JSON.parse(localStorage["AccountInformation"]);
    
if (Information === null || Information === undefined) {

    console.log("ERROR | No login data found.");

} else {

    fetch("/sections/create-ad.html")
    .then((response) => response.text())
    .then((html) => {

        document.getElementById("box-create-ad-7p979z8r").innerHTML = html;

        document.getElementById("pfp-create-ad").style.backgroundImage = Information.picture;

    })

};