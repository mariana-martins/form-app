// Activate toggle button as active and display a form based on type
function activateStatus(type) {
    $('#' + type + '-button').addClass('active');
    $('#' + type + '-button').attr('aria-pressed', 'true');
    $('#' + type + '-button i').addClass('fa-check');
    $('#' + type + '-button i').removeClass('fa-times');
    $('#' + type + '-form').removeAttr('hidden');
    $('#' + type + '-form').attr('aria-hidden', 'false');
}

// Deactivate toggle button as not active and hide the form based on type
function deactivateStatus(type) {
    $('#' + type + '-button').removeClass('active');
    $('#' + type + '-button').attr('aria-pressed', 'false');
    $('#' + type + '-button i').addClass('fa-times');
    $('#' + type + '-button i').removeClass('fa-check');
    $('#' + type + '-form').attr('hidden', 'true');
    $('#' + type + '-form').attr('aria-hidden', 'true');
}

// Clean all form fields
function cleanForm() {
    $('.modal .modal-form form input, .modal .modal-form form textarea')
        .each(function () {
            $(this).val('');
        });
}

// Activate on type and deactivate the opposite type
function activateType(type) {
    var ariaPressedValue = $('#' + type + '-button').attr('aria-pressed');
    // Check if the type is not active, if is not, then activate it
    // It avoid to apply unnecessary changes on the element
    if (ariaPressedValue === 'false') {
        var hideType = type === 'email' ? 'sms' : 'email';
        activateStatus(type);
        deactivateStatus(hideType);
        cleanForm();
        // update submit button after cleaning current form
        updateSubmitButtonState(type);
    }
}

// Validate if all fields from a form are valid
function isFormValid(formId) {
    var selector = '#' + formId + ' input:invalid, #' + formId + ' textarea:invalid';
    return document.querySelectorAll(selector).length === 0
}

// Activate or deactivate the submit button based on the state of the form.
// If it's unfilled, it's deactivate. If totally filled, the button is
// activated.
function updateSubmitButtonState(type) {
    var formId = type + '-form';
    var selector = '#' + formId + ' button[type=submit]';
    if (isFormValid(formId)) {
        $(selector).removeAttr('disabled');
    } else {
        $(selector).attr('disabled', 'true');
    }
}

// Display the data from the form on browser console when the form is submitted
function displayOnSubmit(type) {
    $('#' + type + '-form').on('submit', function (e) {
        // it prevents propagation as we only want to print form data on console
        e.preventDefault();
        var data = $(
            '#' + type + '-form input, #' + type + '-form textarea'
        ).serializeArray();
        console.log(data);
    });
}

// init form
// - add click event to #email-button
$('#email-button').on('click', function () {
    activateType('email');
});
// - add click event to #sms-button
$('#sms-button').on('click', function () {
    activateType('sms');
});
// - add keydown event to #email-form fields
//   enable/disable submit button based on form
$('#email-form input, #email-form textarea').on('keyup', function () {
    updateSubmitButtonState('email');
});
// - add keydown event to #sms-form fields
//   enable/disable submit button based on form
$('#sms-form input, #sms-form textarea').on('keyup', function () {
    updateSubmitButtonState('sms');
});
// - ensure it print on console form data on submit event
displayOnSubmit('email');
displayOnSubmit('sms');
