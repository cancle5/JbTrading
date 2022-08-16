function handleCredentialResponse(response) {

    let Navbar_Login_Text = document.getElementById('navbar-textbutton');

    Navbar_Login_Text.innerText = response.given_name;

};

window.onload = function () {

    let Information = JSON.parse(localStorage["AccountInformation"]);
    
    if (Information === null || Information === undefined) {

        console.log("ERROR | No login data found.")

    } else {

        setTimeout(() => {  handleCredentialResponse(Information) }, 500);

    }
    
};