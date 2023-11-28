$(function(){
  $('#change-color').on('click', function(){
    $('#target').css('color','red');
  });
  $('#change-text').on('click', function(){
    $('#target').text('文字が変わりました！');
  });
  $('#fade-out').on('click', function(){
    $('#target').fadeOut(300);
  });
  $('#fade-in').on('click', function(){
    $('#target').fadeIn();
  });
})