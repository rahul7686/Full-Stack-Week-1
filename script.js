const toggler = document.getElementById("themeToggle");
const revealItems = document.querySelectorAll(".reveal");

if (toggler) {
  toggler.addEventListener("click", () => {
    document.body.classList.toggle("mood-boost");
    toggler.textContent = document.body.classList.contains("mood-boost")
      ? "Accent mood enabled"
      : "Toggle accent mood";
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.15 }
);

revealItems.forEach((item) => observer.observe(item));
