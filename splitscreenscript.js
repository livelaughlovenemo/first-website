document.addEventListener("DOMContentLoaded", function () {
    const topSplit = document.querySelector(".split.top");
    const bottomSplit = document.querySelector(".split.bottom");
    const logo = document.querySelector(".logo");
    const mainContent = document.getElementById("main-content");
    const splitScreen = document.getElementById("split-screen");
    const floatingHub = document.getElementById("floating-hub");
    let isAtHome = true; 

    floatingHub.style.display = "none";

    let scrollDirection = 0;
    window.addEventListener("wheel", (event) => {
        scrollDirection = event.deltaY > 0 ? 1 : -1;

        if (scrollDirection === 1 && isAtHome) {
            openWebsite();
        } else if (scrollDirection === -1 && !isAtHome) {
            closeWebsite();
        }
    });

    const openWebsite = () => {
        isAtHome = false;

        topSplit.style.transform = "translateY(-100%)";
        bottomSplit.style.transform = "translateY(100%)";
        logo.style.opacity = "0";

        setTimeout(() => {
            splitScreen.style.display = "none"; 
            mainContent.style.display = "block"; 
            floatingHub.style.display = "flex"; 
            document.body.style.overflow = "auto"; 
        }, 1000); 
    };

    const closeWebsite = () => {
        isAtHome = true;

        mainContent.style.display = "none";
        floatingHub.style.display = "flex"; 
        document.body.style.overflow = "hidden"; 

        splitScreen.style.display = "flex";
        setTimeout(() => {
            topSplit.style.transform = "translateY(0)";
            bottomSplit.style.transform = "translateY(0)";
            logo.style.opacity = "1";
        }, 10); 
    };
});
