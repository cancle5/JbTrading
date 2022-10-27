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

    animateItems();
    
    window.onscroll = function() {

        animateItems();

        if (transitioning == false) {

            if (window.scrollY > 100) {

                if (scrolltop == true) {
    
                    scrolltop = false;
                    
                    transitioning = true;
    
                    navbar.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
                    navbar.style.transition = "all 1s";
    
                    footer.style.bottom = "-11rem";
                    footer.style.transition = "all 1s";
    
                    setTimeout(function() {
    
                        footer.style.position = "relative";
                        footer.style.bottom = "2rem";
    
                        transitioning = false;
    
                    }, 1000);
    
                }  
                
            }
            else {
    
                if (scrolltop == false) {
    
                    scrolltop = true;
    
                    transitioning = true;
    
                    navbar.style.backgroundColor = "rgba(0, 0, 0)";
                    navbar.style.transition = "all 1s";
    
                    footer.style.position = "fixed";
                    footer.style.bottom = "-11rem";
                    footer.style.transition = "all 0s";

                    setTimeout(function() {
    
                        footer.style.bottom = "2rem";
                        footer.style.position = "fixed";
                        footer.style.transition = "all 1s";

                        transitioning = false;
    
                    }, 100);

    
                }   
            }

        }

    };

};