// Mobile navigation
const menu = document.querySelector(".menu");
const nav = document.querySelector("#nav");

if (menu && nav) {
  menu.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}


// Close mobile menu after clicking a navigation link
document.querySelectorAll("#nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});


// Demo request form
const demoForm = document.querySelector("#demoForm");
const formMessage = document.querySelector("#formMessage");

if (demoForm) {
  demoForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const company = document.querySelector("#company").value.trim();
    const team = document.querySelector("#team").value;

    if (!name || !email || !company || !team) {
      formMessage.textContent = "Please complete all required fields.";
      formMessage.style.color = "#d64545";
      return;
    }

    formMessage.textContent =
      "Thanks! Your demo request has been received.";

    formMessage.style.color = "#27a36a";

    demoForm.reset();
  });
}


// Small smooth interaction for CTA buttons
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function () {
    const targetId = this.getAttribute("href");

    if (targetId && targetId !== "#") {
      const target = document.querySelector(targetId);

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }
  });
});
