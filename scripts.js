
// Run when the DOM is ready!
document.addEventListener("DOMContentLoaded", function() {

    // Gather elements
    var menuBtn = document.querySelector("#menu-btn");
    var menuIcon = document.querySelector("#menu-icon");
    var menuItemContainer = document.querySelector("#menu-items");
    
    // Listeners
    function toggleMenu() {
        menuIcon.classList.toggle("fa-angle-down");
        menuIcon.classList.toggle("fa-times");
        menuItemContainer.classList.toggle("hide");
    }

    menuItemContainer.addEventListener("click", toggleMenu);
    menuBtn.addEventListener("click", toggleMenu);

});


