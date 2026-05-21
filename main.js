document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#ecuForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Demo mode: upload storage + Stripe/PayPal will be connected in the next backend step.');
    });
  }
});
