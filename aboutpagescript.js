
const photoSections = document.querySelectorAll('.photo-section');
const textSections = document.querySelectorAll('.text-section');

function handleScroll() {
    const triggerPoint = window.innerHeight / 1.2; 

    photoSections.forEach((photo) => {
        const photoTop = photo.getBoundingClientRect().top;

        if (photoTop < triggerPoint) {
            photo.classList.add('active');
        } else {
            photo.classList.remove('active');
        }
    });

    textSections.forEach((text) => {
        const textTop = text.getBoundingClientRect().top;

        if (textTop < triggerPoint) {
            text.classList.add('active');
        } else {
            text.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', handleScroll);

handleScroll();
