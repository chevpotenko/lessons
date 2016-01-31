function Timer() {
  this.msec = 0;
  this.sec = 0;
  this.min = 0;
  this.hour = 0;
  var self = this;

  this.init = function () { document.form2.timer.value = '00:00:00:00'; };

  this.run = function () {
    ++self.msec;
    if (self.msec > 999) { self.msec = 0; ++self.sec; };
    if (self.sec > 59) { self.sec = 0; ++self.min; };
    if (self.min > 60) { self.min = 0; ++self.hour; };
    if (self.hour > 23) { self.hour = 0; };
    document.form2.timer.value = self.hour + ':' + self.min + ':' + self.sec + ':' + self.msec;
  };

  this.start = function () {
    if (document.form2.stop.value == 'Start') {
      document.form2.stop.value = 'Pause';
      this.count = setInterval(this.run, 1);
    } else {
      clearInterval(this.count);
      document.form2.stop.value = 'Start'
    };
  };

  this.stop = function () {
    clearInterval(this.count);
    this.msec = this.sec = this.min = this.hour = 0;
    this.init();
  };
};

var timer1 = new Timer();
timer1.init();
document.form2.stop.onclick = function () { timer1.start() };
document.form2.clear.onclick = function () { timer1.stop() };