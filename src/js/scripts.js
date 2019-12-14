function showType(type) {
  $('#' + type + '-button').addClass('active');
  $('#' + type + '-button').attr('aria-pressed', 'true');
  $('#' + type + '-button i').addClass('fa-check');
  $('#' + type + '-button i').removeClass('fa-times');
  $('#' + type + '-form').removeAttr('hidden');
  $('#' + type + '-form').attr('aria-hidden', 'false');
}

function hideType(type) {
  $('#' + type + '-button').removeClass('active');
  $('#' + type + '-button').attr('aria-pressed', 'false');
  $('#' + type + '-button i').addClass('fa-times');
  $('#' + type + '-button i').removeClass('fa-check');
  $('#' + type + '-form').attr('hidden', 'true');
  $('#' + type + '-form').attr('aria-hidden', 'true');
}

$('#email-button').on('click', function(){
  showType('email');
  hideType('sms');
});

$('#sms-button').on('click', function(){
  showType('sms');
  hideType('email');
});
