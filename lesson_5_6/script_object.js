(function () {
  var timer = {
    msec: 0,
    sec: 0,
    min: 0,
    hour: 0,

    init: function () {
      document.form2.timer.value = '00:00:00:00';
    },

    run: function () {
      ++timer.msec;
      if (timer.msec > 999) { timer.msec = 0; ++timer.sec; };
      if (timer.sec > 59) { timer.sec = 0; ++timer.min; };
      if (timer.min > 60) { timer.min = 0; ++timer.hour; };
      if (timer.hour > 23) { };
      document.form2.timer.value = timer.hour + ':' + timer.min + ':' + timer.sec + ':' + timer.msec;
    },

    start: function () {
      if (document.form2.stop.value == 'Start') {
        timer.count = setInterval(timer.run, 1);
        document.form2.stop.value = 'Pause'
      } else {
        clearInterval(timer.count);
        document.form2.stop.value = 'Start'
      }
    },

    stop: function () {
      clearInterval(timer.count);
      timer.msec = timer.sec = timer.min = timer.hour = 0;
      timer.init();
    }
  };

  timer.init();
  document.form2.stop.onclick = timer.start;
  document.form2.clear.onclick = timer.stop;
})();