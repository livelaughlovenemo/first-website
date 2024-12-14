document.addEventListener("DOMContentLoaded", function () {
    const loadingPage = document.getElementById("loading-page");
    const floatingHub = document.getElementById("floating-hub");

    let count = 0;
    const totalSteps = 100;

    const finishTransition = setInterval(() => {
        if (count >= totalSteps) {
            clearInterval(finishTransition);

            setTimeout(() => {
                loadingPage.style.opacity = "0";
                loadingPage.style.display = "none";
                if (floatingHub) {
                    floatingHub.style.display = "flex"; 
                }
            }, 2000); 
        }
    });

    setInterval(() => {
        if (count < totalSteps) {
            count++;
        }
    }, 50);
});
