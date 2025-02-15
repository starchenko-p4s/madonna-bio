document.querySelectorAll(".slider").forEach(slider => {
    let index = 0;
    const images = slider.querySelectorAll(".img-item");
    const totalImages = images.length;

    if (totalImages > 0) {
        slider.style.transition = "transform 0.5s ease-in-out";

        function slideNext() {
            index = (index + 1) % totalImages;
            const slideWidth = images[0].clientWidth;
            slider.style.transform = `translateX(${-index * slideWidth}px)`;
        }

        setInterval(slideNext, 2500);
    }
});

document.querySelectorAll(".carousel-wrapper").forEach(wrapper => {
    const width = wrapper.getAttribute("data-width") + "px";
    const height = wrapper.getAttribute("data-height") + "px";

    const container = wrapper.querySelector(".slider-container");
    const slider = wrapper.querySelector(".slider");
    const images = wrapper.querySelectorAll(".slider img");

    container.style.width = width;
    container.style.height = height;
    images.forEach(img => {
        img.style.width = width;
        img.style.height = height;
    });
});