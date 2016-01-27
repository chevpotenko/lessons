$(function () {

  //pageControl

  $('.tab li').on("click", function () {
    $('.tab li').removeClass('active');
    $('.pagesBox .page').css('display','none')
    $(this).addClass('active'); 
    $('.pagesBox .page:eq(' + $(this).index() + ')').css('display', 'block');  
  })

  //tooltip
  $('form[name=form3] span[data-title]').on('mouseover', function (e) { $(this).toggleClass('titleForm'); });
  $('form[name=form3] span[data-title]').on('mouseout', function (e) { $(this).removeClass('titleForm') });

})  