(function () {
  function Timer() {
    this.sec = this.min = this.hour = 0;
    this.msEmu = 80;
    var self = this;
    this.init = function () { document.form.timer.value = '0:0:0:000'; };
    this.run = function () {
      ++self.sec;
      if (self.sec > 59) { self.sec = 0; ++self.min; };
      if (self.min > 60) { self.min = 0; ++self.hour; };
      if (self.hour > 23) { self.hour = 0; };
    };
    this.msEmulator = function () {
      if (self.msEmu < 970) self.msEmu += 29;
      if (self.msEmu >= 950) self.msEmu = 100;
      document.form.timer.value = self.hour + ':' + self.min + ':' + self.sec + ':' + self.msEmu;
    };
    this.start = function () {
      if (document.form.stop.value == 'Start') {
        document.form.stop.value = 'Pause';
        this.count = setInterval(this.run, 1000);
        this.countMs = setInterval(this.msEmulator, 33);
      } else {
        clearInterval(this.count);
        clearInterval(this.countMs);
        document.form.stop.value = 'Start'
      };
    };
    this.stop = function () {
      if (document.form.stop.value != 'Start') document.form.stop.value = 'Start';
      clearInterval(this.count);
      clearInterval(this.countMs);
      this.sec = this.min = this.hour = 0;
      this.init();
    };
  };

  var test = new Timer();
  document.form.stop.onclick = function () { test.start() };
  document.form.clear.onclick = function () { test.stop() };
})();