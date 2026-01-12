const noBtn = document.getElementById("no");

/* Hàm nhảy */
function moveNo() {
    const w = noBtn.offsetWidth;
    const h = noBtn.offsetHeight;

    const x = Math.random() * (window.innerWidth - w);
    const y = Math.random() * (window.innerHeight - h);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

/* 🔥 BẮT SỰ KIỆN TỪ BODY (Safari ăn chắc) */
document.body.addEventListener("touchstart", function (e) {
    if (e.target === noBtn) {
        e.preventDefault();
        moveNo();
    }
}, { passive: false });

document.body.addEventListener("click", function (e) {
    if (e.target === noBtn) {
        e.preventDefault();
        moveNo();
    }
});
