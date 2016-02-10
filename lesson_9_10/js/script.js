$(function () {
  /*Carousel-------------------------------------------------------------------------------------------------------------------*/

  $('.jcarousel')
    .on('jcarousel:create jcarousel:reload', init)
    .jcarousel({ wrap: 'both' })
    .jcarouselAutoscroll({
      interval: 2000,
      target: '+=1',
      autostart: true
    });

  function init() {
    var element = $(this);
    var width = element.innerWidth();
    if (width > 475) { width = width / 3; };
    element.jcarousel('items').css('width', width + 'px');   
  }

  $('.jcarousel-prev').jcarouselControl({ target: '-=1'});
  $('.jcarousel-next').jcarouselControl({ target: '+=1' });
  
  $('.jcarousel-pagination')
    .on('jcarouselpagination:active', 'a', function () { $(this).addClass('active'); })
    .on('jcarouselpagination:inactive', 'a', function () { $(this).removeClass('active'); })
    .jcarouselPagination({ item: function (page) { return '<a href="#"></a>'; } })
    .on('click', function (e) { e.preventDefault() });

  /*accordion jQueriUI---------------------------------------------------------------------------------------------------------*/

  //$(".accordion").accordion(
  //  { activate: function () { $('.jcarousel').jcarousel('reload').jcarousel({ wrap: 'both' }).jcarousel('scroll', -3) } }
  //  );
  
  /*accordionMy---------------------------------------------------------------------------------------------------------------*/

  $('.accordion').accordionmy(
    {
      onAction: 'click',
      activeClass: 'activeSection',
      callback: function () {
        $('.jcarousel').jcarousel('reload')
      }
    }
  )

  /*Select----------------------------------------------------------------------------------------------------------------------*/

  $("#iSelect").selectBoxIt();

  /*Checkbox--------------------------------------------------------------------------------------------------------------------*/

  $('.wrapperCheckbox input').iCheck({
    checkboxClass: 'icheckbox_flat',
    checkedClass: 'checked',
    disabledClass: 'disabled',
    labelHover: false,
    cursor: true
  });

  /*menuMy---------------------------------------------------------------------------------------------------------------------*/

  $('.menu li').on('mouseover', function () {
    $(this).children('ul').addClass('activeMenu')
  });
  $('.menu li').on('mouseout', function () {
    $(this).children('ul').removeClass('activeMenu')
  });
  $('.submenu li').on('mouseover', function () {
    $(this).children('ul').addClass('activeMenu')
  });
  $('.submenu li').on('mouseout', function () {
    $(this).children('ul').removeClass('activeMenu')
  });

})