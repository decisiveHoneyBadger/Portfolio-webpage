const { default: Swal } = require('sweetalert2');

function myFunction(x) {
  x.classList.toggle('change');
}

// approaches of alerts for the submit button
let alertMessage = document.querySelector('#submit-button');
let userName = '';

// option 2
alertMessage.onclick = function () {
  alert(
    `Hey ${userName}, thanks for your message. I will soon get in touch with you!`,
  );
};

// sweetalert alternative

document
  .querySelector('#submit-button')
  .addEventListener('click', function (e) {
    e.preventDefault();
    Swal.fire(
      'Thanks for your message!',
      'I will soon reach out to you',
      'success',
    );
  });
