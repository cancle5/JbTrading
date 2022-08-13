function handleCredentialResponse(response) {

    var Navbar_Login_Text = document.getElementById('navbar-textbutton');

    Navbar_Login_Text.innerText = response.name;

};

window.onload = function () {

    var Information = JSON.parse(localStorage["AccountInformation"]);
    
    if (Information === null || Information === undefined) {

        console.log("ERROR | No login data found.")

    } else {

        handleCredentialResponse(Information);

    }
    
};