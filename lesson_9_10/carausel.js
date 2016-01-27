$(function () {

  $('.jcarousel').on('jcarousel:lastin', 'li', function (event, carousel) {
    //$('.jcarousel').jcarousel('scroll',0);
  })
    .jcarousel({}).jcarouselAutoscroll({
      interval: 2000,
      target: '+=3',
      autostart: true
    });

  $('.jcarousel-pagination')
  .on('jcarouselpagination:active', 'a', function () {
    $(this).addClass('active');
  })
  .on('jcarouselpagination:inactive', 'a', function () {
    $(this).removeClass('active');
  })
  .on('click', function (e) {
    e.preventDefault()
  })
  .jcarouselPagination({
    item: function (page) {
      return '<a href="#' + page + '"></a>';
    }
  });

  $('.jcarousel-prev').jcarouselControl({ target: '-=3' });
  $('.jcarousel-next').jcarouselControl({ target: '+=3' });

  $('.jcarousel').on('jcarousel:create jcarousel:reload', function () {
    var element = $(this);
    width = element.innerWidth();

    // This shows 1 item at a time.
    // Divide `width` to the number of items you want to display,
    // eg. `width = width / 3` to display 3 items at a time.

    element.jcarousel('items').css('width', (width / 3) + 'px');
  }).jcarousel({
    // Your configurations options
  });
})