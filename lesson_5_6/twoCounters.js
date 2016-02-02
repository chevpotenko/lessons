(function () {
  function Timer() {
    this.sec = this.min = this.hour = 0;
    this.msEmu = 0;
    this.ms
    var flagSec = false;
    var self = this;
    var init = function () { document.form.timer.value = '0:0:0:000'; };

    function msEmulator() {
      if (self.msEmu < 1000) { self.msEmu += 29 };
      if (self.msEmu >= 1000) { self.msEmu = 29; if (!flagSec) { ++self.sec; } };
      self.ms = self.msEmu;
      if (self.msEmu < 100) self.ms = '0' + self.ms;
      showResult(self.ms)
      console.log(self.ms, self.sec)
    }
    function run() {
      flagSec = true;
      ++self.sec
      if (self.sec > 59) { self.sec = 0; ++self.min; };
      if (self.min > 60) { self.min = 0; ++self.hour; };
      if (self.hour > 23) { self.hour = 0; };
    }
    function showResult(ms) {
      document.form.timer.value = self.hour + ':' + self.min + ':' + self.sec + ':' + ms;
    }
    this.start = function () {
      flagSec = false
      if (document.form.start.value == 'Start') {
        document.form.start.value = 'Pause';
        //this.count = setInterval(run, 1000);
        this.countMs = setInterval(msEmulator, 30);
      } else {
        //clearInterval(this.count);
        clearInterval(this.countMs);
        document.form.start.value = 'Start'
      }
    }
    this.clear = function () {
      if (document.form.start.value != 'Start') document.form.start.value = 'Start';
      //clearInterval(this.count);
      clearInterval(this.countMs);
      this.msEmu = this.sec = this.min = this.hour = 0;
      flagSec = false;
      init();
    }
  }
  var test = new Timer();  
  document.form.start.onclick = function () { test.start() };
  document.form.clear.onclick = function () { test.clear() };
})();