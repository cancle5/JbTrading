function handleCredentialResponse(response) {

    const responsePayload = decodeJwtResponse(response.credential);

    var Navbar_Login_Text = document.getElementById('navbar-textbutton');

    Navbar_Login_Text.innerText = responsePayload.name;

}

window.onload = function () {
    
    if (localStorage["AccountInformation"]) {

    }
    
}