(function ($) {

  $.fn.googleQuery = function (options) {
    var textQuery;
    var response;
    var key = 'ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg';
    var root = $(this);
    var intervalNetwork;

    root.find('form').on('focusin', function () { $(this).addClass(options.classInput) })
    .on('focusout', function () { $(this).removeClass(options.classInput) });
    root.find('[type=submit]').on('click', sendQuery);

    function sendQuery(e) {
      textQuery = root.find('[type=text]').val();
      setQuery();
      if ($(root.find('.' + options.boxResult).hasClass(options.classHide))) {
        root.find('.' + options.boxForm).addClass(options.classReplace);
        root.find('.' + options.boxMenu).removeClass(options.classHide);
        root.find('.' + options.boxResult).removeClass(options.classHide)
        root.find('[type=submit]').val('');
      }
      root.find('.' + options.boxResult).find('li').remove();
      e.preventDefault();
    }

    function setQuery() {
      response = $.ajax({
        // beforeSend: checkNetwork,
        url: 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0'
        + '&key=' + key
        + '&q=' + textQuery
        + '&rsz=8&callback=GoogleCallback&context=?',
        dataType: 'jsonp',
        success: doAnswer,
        // error: warning
      })
    }

    function doAnswer() {
      var arrResponse = response.responseJSON.results;
      var html = root.find('#' + options.boxTemplate).html();
      var content = tmpl(html, { data: arrResponse });
      root.find('.' + options.boxResult + ' ul').append(content);
      if (options.idAmountResults) { root.find('#' + options.idAmountResults).html(arrResponse.length) };
      if (options.idTextQuery) { root.find('#' + options.idTextQuery).html(textQuery) };
      // if (intervalNetwork) { clearInterval(intervalNetwork) };
    };

    function warning(XMLHttpRequest, textStatus, thrownError) {
      alert("Communication with the server is lost!");
      if (options.idAmountResults) { root.find('#' + options.idAmountResults).html('-') };
      if (options.idTextQuery) { root.find('#' + options.idTextQuery).html('-') };
    }

    function checkNetwork(jqXHR, settings) {     
      if (!navigator.onLine) {
        intervalNetwork = setInterval(jqXHR.abort, 200);
      }
    }
  }

})(jQuery)
  
function GoogleCallback(func, data) {
  window[func](data);
};