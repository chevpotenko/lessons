/*LESSON 5-6-------------------------------------------------------------------*/
//Example 1: using the object


/*
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
*/



/*LESSON 5-6----------------------------------------------------------------------------------------------*/



//Example2: using the constructor
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