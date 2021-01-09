const toggleBTn = document.getElementById("toggle-btn");
const sideBar = document.getElementById("side-bar");
const body = document.querySelector("body");
const navBar = document.getElementById("navbar");
const svBanner =  document.getElementById("sv-banner");

let open;
let prevY = window.scrollY, currY;

//On load of page make the display of sidebar to none
window.addEventListener("load", () => {
    sideBar.style.display = "none";
});

//Scroll event
window.addEventListener("scroll", () => {

    //Get current Y scroll of page
    currY = window.scrollY;

    //Don't do anything but update prevY scroll if less than 500px from top of page
    if (currY < 500){
        prevY = currY;
        return;
    }

    //If the currY is greater than prevY (scrolled further down), then add scrolled class to navbar
    if (currY > prevY){
        navBar.classList.add("scrolled");
    }

    //If not then we scrolled upward so remove scrolled class
    else {
        navBar.classList.remove("scrolled");
    }

    //Update prevY before returning
    prevY = currY;

    
});

//Toggle Button event
toggleBTn.addEventListener("click", () => {

    //If the button has the open class (sidebar is visible), toggle it (sidebar will close)
    if (toggleBTn.classList.contains("open")){
        open = false;
        toggleBTn.classList.toggle("open");
    }

    //Else if it does not toggle class so the sidebar can become visible
    else {
        open = true
        toggleBTn.classList.toggle("open");
    }

    //If open is true add the active class so sidebar can slide out, disable page scrolling
    if (open){
        sideBar.classList.add("active");
        sideBar.style.display = "";
        body.classList.add("stop-scroll");
        sideBar.scrollIntoView({behavior: "smooth", block: "start"});
    }

    //Remove active class to hide the sidebar, re-enable scrolling
    else {
        sideBar.classList.remove("active");
        body.classList.remove("stop-scroll");
        setTimeout(() => {
            sideBar.style.display = "none";
        }, 100);
    }
});

//Resize event (bug helper)
window.addEventListener("resize", () => {
   
    //Only care if width is > 768px
    if (screen.width > 768){
        
        //Remove class from sidebar to make hidden, enable scrolling again, take off open class from toggle button
        sideBar.classList.remove("active");
        body.classList.remove("stop-scroll");
        open = false;
        toggleBTn.classList.remove("open");
        setTimeout(() => {
            sideBar.style.display = "none";
        }, 100);
    }
}); 




