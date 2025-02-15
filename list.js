document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".dropdown");
    let timeout;

    dropdown.addEventListener("mouseenter", function () {
        clearTimeout(timeout); // Скидає таймер, якщо курсор знову навели
        dropdown.classList.add("show");
    });

    dropdown.addEventListener("mouseleave", function () {
        timeout = setTimeout(() => {
            dropdown.classList.remove("show");
        }, 500); // Меню залишатиметься відкритим ще 0,5 секунди
    });

    document.addEventListener("click", function (event) {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove("show");
        }
    });
});