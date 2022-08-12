fetch("/sections/navbar.html")
.then((response) => response.text())
.then((html) => {

    document.getElementById("navbar").innerHTML = html;

})
.catch((error) => {
    console.warn(error);
});