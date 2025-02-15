document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in-out");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                entry.target.classList.remove("hidden");
            } else {
                entry.target.classList.add("hidden");
                entry.target.classList.remove("visible");
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
});