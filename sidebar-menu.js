// Відкриття/закриття меню
document.getElementById("menu-toggle").addEventListener("click", function() {
    document.body.classList.add("sidebar-open");
});

document.getElementById("close-btn").addEventListener("click", function() {
    document.body.classList.remove("sidebar-open");
});

// Логіка підменю
document.querySelectorAll(".submenu-toggle").forEach(item => {
    item.addEventListener("click", function(e) {
        e.preventDefault();
        let parent = this.parentElement;
        parent.classList.toggle("closed");
    });
});