// ===== HEADER SCROLL EFFECT =====
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


// ===== DRAG SCROLL FOR TRENDING =====
const rows = document.querySelectorAll(".row-posters");

rows.forEach(row => {
  let isDown = false;
  let startX;
  let scrollLeft;

  row.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - row.offsetLeft;
    scrollLeft = row.scrollLeft;
    row.style.cursor = "grabbing";
  });

  row.addEventListener("mouseleave", () => {
    isDown = false;
    row.style.cursor = "grab";
  });

  row.addEventListener("mouseup", () => {
    isDown = false;
    row.style.cursor = "grab";
  });

  row.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - row.offsetLeft;
    const walk = (x - startX) * 2;
    row.scrollLeft = scrollLeft - walk;
  });

  // Touch Support (Mobile)
  row.addEventListener("touchstart", (e) => {
    startX = e.touches[0].pageX - row.offsetLeft;
    scrollLeft = row.scrollLeft;
  });

  row.addEventListener("touchmove", (e) => {
    const x = e.touches[0].pageX - row.offsetLeft;
    const walk = (x - startX) * 2;
    row.scrollLeft = scrollLeft - walk;
  });
});


// ===== FAQ ACCORDION =====
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const question = item.querySelector("h3");

  question.addEventListener("click", () => {

    // Close others
    faqItems.forEach(other => {
      if (other !== item) {
        other.classList.remove("active");
      }
    });

    // Toggle current
    item.classList.toggle("active");
  });
});


// ===== EMAIL BUTTON CLICK =====
const buttons = document.querySelectorAll(".email-box button");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Welcome to Netflix Clone 🔥");
  });
});