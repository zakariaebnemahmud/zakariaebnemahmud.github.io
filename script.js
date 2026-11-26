// Photo preview on click
const photoBtn = document.getElementById("ph");
const fileInput = document.getElementById("file");
const photoImg = photoBtn ? photoBtn.querySelector("img") : null;

if (photoBtn && fileInput && photoImg) {
  photoBtn.addEventListener("click", () => fileInput.click());

  fileInput.addEventListener("change", () => {
    const file = fileInput.files && fileInput.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        photoImg.src = reader.result;
      }
    };
    reader.readAsDataURL(file);
  });
}

// Smooth cyber-green ripple effect on click
const prefersReducedMotion =
  window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion) {
  document.addEventListener("pointerdown", (event) => {
    if (event.button !== undefined && event.button !== 0) return;

    const ripple = document.createElement("span");
    ripple.className = "click-ripple";
    ripple.style.left = `${event.clientX}px`;
    ripple.style.top = `${event.clientY}px`;

    document.body.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
  });
}