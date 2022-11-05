function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= -50 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

window.onload = function(){
    
    const navbar = document.getElementById("navbar");
    const footer = document.getElementById("footer");

    const faders = document.querySelectorAll(".fade-in");
    const fromleft = document.querySelectorAll(".from-left");
    const fromRight = document.querySelectorAll(".from-right");
    
    var scrolltop = true;
    var transitioning = false;

    function animateItems() {

        faders.forEach(fader => {
    
            if (isInViewport(fader)) {
                if (fader.classList.contains('appear') == false) {
                    fader.classList.add("appear");
                }
            } else {
                if (fader.classList.contains('appear') == true) {
                    fader.classList.remove("appear");
                }
            }
    
        });

        fromleft.forEach(box => {
    
            if (isInViewport(box)) {
                if (!box.classList.contains('appear')) {
                    box.classList.add("appear");
                }
            } else {
                if (box.classList.contains('appear')) {
                    box.classList.remove("appear");
                }
            }
    
        });

        fromRight.forEach(box => {
    
            if (isInViewport(box)) {
                if (!box.classList.contains('appear')) {
                    box.classList.add("appear");
                }
            } else {
                if (box.classList.contains('appear')) {
                    box.classList.remove("appear");
                }
            }
    
        });
    
    }

    setInterval(function() { 

        animateItems();

        if (window.scrollY > 100) {

            if (scrolltop == true) {

                scrolltop = false;

                navbar.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
                navbar.style.transition = "all 1s";

            }  
            
        }
        else {

            if (scrolltop == false) {

                scrolltop = true;

                navbar.style.backgroundColor = "rgba(9, 13, 23)";
                navbar.style.transition = "all 1s";

            }   
        }

     }, 500);

};