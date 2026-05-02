/* Macon Bacon demo site - shared interactivity */
(function () {
  'use strict';

  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('is-open');
    });
  }

  // Highlight active page
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a').forEach((link) => {
    const href = link.getAttribute('href');
    if (href === path) link.classList.add('is-active');
  });

  // Schedule filter pills
  const filterBar = document.querySelector('[data-filter-bar]');
  if (filterBar) {
    const pills = filterBar.querySelectorAll('.filter-pill');
    const games = document.querySelectorAll('[data-game]');
    pills.forEach((pill) => {
      pill.addEventListener('click', () => {
        pills.forEach((p) => p.classList.remove('is-active'));
        pill.classList.add('is-active');
        const filter = pill.dataset.filter;
        games.forEach((g) => {
          const types = (g.dataset.game || '').split(' ');
          g.style.display = (filter === 'all' || types.includes(filter)) ? '' : 'none';
        });
      });
    });
  }

  // Shop "add to cart" toast
  const toast = document.querySelector('[data-cart-toast]');
  const cartCount = document.querySelector('[data-cart-count]');
  let cart = 0;
  let toastTimer;
  document.querySelectorAll('[data-add-to-cart]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const name = btn.dataset.product || 'Item';
      cart++;
      if (cartCount) cartCount.textContent = cart;
      if (toast) {
        toast.innerHTML = `Added <strong>${name}</strong> to your cart`;
        toast.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toast.classList.remove('show'), 2400);
      }
    });
  });

  // Shop category filter
  const shopFilters = document.querySelector('[data-shop-filter]');
  if (shopFilters) {
    const products = document.querySelectorAll('[data-category]');
    shopFilters.querySelectorAll('.filter-pill').forEach((pill) => {
      pill.addEventListener('click', () => {
        shopFilters.querySelectorAll('.filter-pill').forEach((p) => p.classList.remove('is-active'));
        pill.classList.add('is-active');
        const cat = pill.dataset.cat;
        products.forEach((p) => {
          p.style.display = (cat === 'all' || p.dataset.category === cat) ? '' : 'none';
        });
      });
    });
  }

  // Generic forms (contact, newsletter)
  document.querySelectorAll('[data-demo-form]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const success = form.querySelector('.form-success');
      if (success) {
        success.classList.add('show');
        success.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      form.reset();
    });
  });

  // Ticket tier select on home tickets section
  document.querySelectorAll('[data-ticket-buy]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const tier = btn.dataset.ticketBuy;
      if (toast) {
        toast.innerHTML = `<strong>${tier}</strong> ticket added — checkout on next step`;
        toast.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
      }
    });
  });

  // Seating chart hover info
  const seatingInfo = document.querySelector('[data-seat-info]');
  document.querySelectorAll('[data-seat]').forEach((seat) => {
    seat.addEventListener('mouseenter', () => {
      if (!seatingInfo) return;
      seatingInfo.innerHTML = `<strong>${seat.dataset.seat}</strong> &middot; ${seat.dataset.price || ''}`;
    });
    seat.addEventListener('click', () => {
      if (toast) {
        toast.innerHTML = `Selected <strong>${seat.dataset.seat}</strong>`;
        toast.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toast.classList.remove('show'), 2400);
      }
    });
  });

  // Countdown to next home game
  const countdown = document.querySelector('[data-countdown]');
  if (countdown) {
    const target = new Date(countdown.dataset.countdown).getTime();
    const tick = () => {
      const now = Date.now();
      let diff = Math.max(0, target - now);
      const d = Math.floor(diff / 86400000); diff -= d * 86400000;
      const h = Math.floor(diff / 3600000); diff -= h * 3600000;
      const m = Math.floor(diff / 60000); diff -= m * 60000;
      const s = Math.floor(diff / 1000);
      countdown.querySelector('[data-cd-d]').textContent = String(d).padStart(2, '0');
      countdown.querySelector('[data-cd-h]').textContent = String(h).padStart(2, '0');
      countdown.querySelector('[data-cd-m]').textContent = String(m).padStart(2, '0');
      countdown.querySelector('[data-cd-s]').textContent = String(s).padStart(2, '0');
    };
    tick();
    setInterval(tick, 1000);
  }
})();
