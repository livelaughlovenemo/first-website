document.addEventListener("DOMContentLoaded", function () {
    const loadingNumberContainer = document.getElementById("loading-number");
    const currentNumber = document.getElementById("current-number");
    const nextNumber = document.getElementById("next-number");
    const loadingPage = document.getElementById("loading-page");
    const portfolioSection = document.getElementById("portfolio-section");

    let count = 0; 
    const totalSteps = 100; 
    const slowerUpdateTime = 300; 
    const add10IntervalTime = 1000; 

    const counterWidth = loadingNumberContainer.offsetWidth; 
    const maxRight = window.innerWidth - counterWidth - 30;

    function replaceNumber(nextValue) {
        nextNumber.textContent = String(nextValue).padStart(3, '0'); 
        nextNumber.style.animation = "slide-up 0.8s ease-in-out forwards"; 

        setTimeout(() => {
            currentNumber.textContent = nextNumber.textContent; 
            nextNumber.style.animation = ""; 
        }, 800); 
    }
    function moveHorizontally(progress) { 
        const leftPosition = Math.min((maxRight / totalSteps) * progress, maxRight); 
        loadingNumberContainer.style.transform = `translateX(${leftPosition}px)`; 
    }

    const incrementByOne = setInterval(() => {
        if (count < totalSteps) {
            count++;
            replaceNumber(count);
            moveHorizontally(count);
        } else {
            clearInterval(incrementByOne);
        }
    }, slowerUpdateTime);

    const addTen = setInterval(() => {
        if (count + 10 <= totalSteps) {
            count += 10;
            replaceNumber(count);
            moveHorizontally(count);
        } else {
            clearInterval(addTen);
        }
    }, add10IntervalTime);

    const finishTransition = setInterval(() => {
        if (count >= totalSteps) {
            clearInterval(finishTransition);

            setTimeout(() => {
                loadingPage.style.opacity = "0";
                loadingPage.style.display = "none";
                portfolioSection.style.display = "block"; 
            }, 2000); 
        }
    });
});
