function initInput() {
  console.log('Input init');

  $('body').on('keydown', '.console-input', function() {
    console.log($(this).val());
  });
}