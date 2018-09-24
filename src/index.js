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
        minlength: 2
      },
      phone: {
        required: true,
      },
      email: {
        required: true,
      }
    }
  });
});

