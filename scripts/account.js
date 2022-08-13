function handleCredentialResponse(response) {

    const responsePayload = decodeJwtResponse(response.credential);

    var Navbar_Login_Text = document.getElementById('navbar-textbutton');

    Navbar_Login_Text.innerText = responsePayload.name;

};

window.onload = function () {

    var Information = JSON.parse(localStorage["AccountInformation"]);
    
    if (Information) {
        if (Information.email) {
            if (Information.sub) {
                if (Information.given_name) {

                    handleCredentialResponse(Information);

                };
            };
        };
    };
    
};