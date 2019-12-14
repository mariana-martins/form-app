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

function cleanForm() {
  $('.modal .modal-form form input').each(function () {
    $(this).val('');
  });
  $('.modal .modal-form form textarea').each(function () {
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

function isEmptyField(field) {
  return $(field).val() === '';
}

function isFormValid(formId) {
  var valid = true;
  $('#' + formId + ' input, #' + formId + ' textarea').each(function () {
    if (isEmptyField(this)) {
      valid = false;
    }
  });
  return valid;
}

function updateSubmitButtonState(type) {
  var formId = type + '-form';
  if (isFormValid(formId)) {
    $('#' + formId + ' button[type=submit]').removeAttr('disabled');
  } else {
    $('#' + formId + ' button[type=submit]').attr('disabled', 'true');
  }
}

function displayOnSubmit(type) {
  $('#' + type + '-form').on('submit', function (e) {
    e.preventDefault();
    var data = $('#' + type + '-form input, #' + type + '-form textarea').serializeArray();
    console.log(data);
  });
}

$('#email-button').on('click', function () {
  activateType('email');
});

$('#sms-button').on('click', function () {
  activateType('sms');
});

$('#email-form input, #email-form textarea').on('keydown', function () {
  updateSubmitButtonState('email');
});

$('#sms-form input, #sms-form textarea').on('keydown', function () {
  updateSubmitButtonState('sms');
});

displayOnSubmit('email');
displayOnSubmit('sms');
