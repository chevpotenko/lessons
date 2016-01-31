$(function () {

  //pageControl
  $('.tab li').on("click", function () {
    $('.tab li').removeClass('active');
    $(this).addClass('active');
    $('.pagesBox .page').hide();
    $('.pagesBox .page:eq(' + $(this).index() + ')').show();  
  })

  //tooltip
  $('form[name=form3] span[data-title]').on('mouseover', function (e) { $(this).toggleClass('titleForm'); });
  $('form[name=form3] span[data-title]').on('mouseout', function (e) { $(this).removeClass('titleForm') });

})  