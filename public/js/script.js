(() => {
  'use strict'
  const forms = document.querySelectorAll('.needs-validation');
  console.log("hello");
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})();