(function ($) {
  $.fn.accordionmy = function (options) {
   
    var onAct = options.onAction || 'click';
    var activeCl = options.activeClass || 'none';
    var header = $(this).children(':header');
    var content = $(this).children(':odd');
    var amount = header.length;    

    content.hide();
    header.on(onAct, handler);

    function handler() {
      var el = header.index($(this));
      for (var i = 0; i < amount; i++) {
        if (header.eq(i).hasClass(activeCl) && (i != el)) {
          $(header).eq(i).removeClass(activeCl);
          $(content).eq(i).slideUp(500);
        }
      }
      if (!($(this).hasClass(options.activeCl))) {
        $(this).next().slideDown(500);
        $(this).addClass(activeCl);
        if (options.callback) { options.callback() };
      }
    }
  }
})(jQuery);
