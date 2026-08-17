// Placeholder signup form behavior.
// Replace this with a real endpoint (Mailchimp, ConvertKit, Substack, etc.) when ready.
document.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelector('.signup-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var input = form.querySelector('input[type="email"]');
    var button = form.querySelector('button');
    var originalText = button.textContent;

    button.textContent = 'Subscribed!';
    button.disabled = true;

    setTimeout(function () {
      button.textContent = originalText;
      button.disabled = false;
      input.value = '';
    }, 2500);
  });
});
