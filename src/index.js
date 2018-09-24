import $ from 'jquery';
import 'bootstrap';
import jqueryValidation from 'jquery-validation';

$(document).ready(function() {
  $('#buttonModal').click(function() {
    setTimeout(function() {
      $('#modal').modal('show');
      }, 2000);
  });

  /* validation */
  $('#formModal').validate({
    rules: {
      name: {
        required: true,
        minlength: 3
      },
      phone: {
        required: true,
      },
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      name: {
        required: 'Please specify your name',
        minlength: "The length of the name can't be less than 3 letters"
      },
      phone: {
        required: 'Please specify your phone number'
      },
      email: {
        required: 'Please specify your email',
        email: 'Please enter a valid e-mail, example: name@example.com'
      }
    }
  });
});

