function myFunction(x) {
  x.classList.toggle('change');
}

// approaches of alerts for the submit button
let alertMessage = document.querySelector('#submit-button');
let userName = '';

Element.addEventListener('click' function (e) {
  alert(`Hey ${userName}, thanks for your message. I will soon get in touch with you!`);
});

// option 2
alertMessage.onclick = function () {
  alert(`Hey ${userName}, thanks for your message. I will soon get in touch with you!`);
}

// sweetalert alternative
Swal.fire('Good job!', 'You clicked the button!', 'success');
