import '../lib/selectize.min.js';
import 'air-datepicker';
// import '../lib/maskedinput.js';
import modal from 'jquery-modal';


$('.purchase__form__data input').datepicker({
  position: 'bottom right',
  autoClose: true,
});

//select
$('select').selectize();

//pop-up
$('[rel="modal:open"]').on('click', function(event) {
  $(this).modal({
    fadeDuration: 200
  });
  return false;
});


$('.verify-otp__input input').on('keyup', function() {
  if($(this).val().length >= 6) {
    $(this).blur();
  }
});
