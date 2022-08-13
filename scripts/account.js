function handleCredentialResponse(response) {

    const responsePayload = decodeJwtResponse(response.credential);

    var Navbar_Login_Text = document.getElementById('navbar-textbutton');

    Navbar_Login_Text.innerText = responsePayload.name;

}

window.onload = function () {
    
    google.accounts.id.initialize({
        client_id: "505525286631-ikfvhpi1up7abec6vbd97mb840qgc43e.apps.googleusercontent.com",
        callback: handleCredentialResponse,
        auto_select: true,
    });
    
    google.accounts.id.prompt(); 
    
}

function decodeJwtResponse(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
}