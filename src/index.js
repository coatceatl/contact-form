import $ from 'jquery';
import 'bootstrap';

$(document).ready(function() {
  $('#buttonModal').click(function() {
    setTimeout(function() {
      $('#modal').modal('show');
      }, 2000);
  });
});

