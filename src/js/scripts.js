function activateStatus(type) {
  $('#' + type + '-button').addClass('active');
  $('#' + type + '-button').attr('aria-pressed', 'true');
  $('#' + type + '-button i').addClass('fa-check');
  $('#' + type + '-button i').removeClass('fa-times');
  $('#' + type + '-form').removeAttr('hidden');
  $('#' + type + '-form').attr('aria-hidden', 'false');
}

function deactivateStatus(type) {
  $('#' + type + '-button').removeClass('active');
  $('#' + type + '-button').attr('aria-pressed', 'false');
  $('#' + type + '-button i').addClass('fa-times');
  $('#' + type + '-button i').removeClass('fa-check');
  $('#' + type + '-form').attr('hidden', 'true');
  $('#' + type + '-form').attr('aria-hidden', 'true');
}

function cleanForm(){
  $('.modal .modal-form form input').each(function(){
    $(this).val('');
  });
  $('.modal .modal-form form textarea').each(function(){
    $(this).val('');
  });
}

function activateType(type) {
  var ariaPressedValue = $('#' + type + '-button').attr('aria-pressed');
  if (ariaPressedValue === 'false') {
    var hideType = type === 'email' ? 'sms' : 'email';
    activateStatus(type);
    deactivateStatus(hideType);
    cleanForm();
  }
}

$('#email-button').on('click', function(){
  activateType('email');
});

$('#sms-button').on('click', function(){
  activateType('sms');
});
