// ===== HEADER SCROLL EFFECT =====
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ===== DRAGGABLE ROWS =====
const rows = document.querySelectorAll('.row-posters');

rows.forEach(row => {
  let isDown = false;
  let startX;
  let scrollLeft;

  // Mouse Events
  row.addEventListener('mousedown', (e) => {
    isDown = true;
    row.classList.add('active');
    startX = e.pageX - row.offsetLeft;
    scrollLeft = row.scrollLeft;
  });

  row.addEventListener('mouseleave', () => {
    isDown = false;
    row.classList.remove('active');
  });

  row.addEventListener('mouseup', () => {
    isDown = false;
    row.classList.remove('active');
  });

  row.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - row.offsetLeft;
    const walk = (x - startX) * 2; // scroll speed
    row.scrollLeft = scrollLeft - walk;
  });

  // Touch Events for Mobile
  row.addEventListener('touchstart', (e) => {
    startX = e.touches[0].pageX - row.offsetLeft;
    scrollLeft = row.scrollLeft;
  });

  row.addEventListener('touchmove', (e) => {
    const x = e.touches[0].pageX - row.offsetLeft;
    const walk = (x - startX) * 2; // scroll speed
    row.scrollLeft = scrollLeft - walk;
  });
});

// ===== FAQ ACCORDION =====
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  item.querySelector('h3').addEventListener('click', () => {
    item.classList.toggle('active');

    // Close other items
    faqItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('active');
      }
    });
  });
});