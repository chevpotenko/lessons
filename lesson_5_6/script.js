function Timer(inpShow, btnStart, btnClear) {
  this.msEmu = this.sec = this.min = this.hour = 0;
  var display = document.getElementById(inpShow);
  var start = document.getElementById(btnStart);
  var countMs;
  var self = this;

  start.onclick = function () {
    if (this.value == 'Start') {
      this.value = 'Pause';
      countMs = setInterval(msEmulator, 30);
    }
    else {
      clearInterval(countMs);
      this.value = 'Start'
    }
  }
  document.getElementById(btnClear).onclick = function () {
    if (start.value != 'Start') start.value = 'Start';
    clearInterval(countMs);
    self.msEmu = self.sec = self.min = self.hour = 0;
    display.value = '0:0:0:000';
  }
  function msEmulator() {
    if (self.msEmu < 1000) { self.msEmu += 29 };
    if (self.msEmu >= 1000) { self.msEmu = 29; ++self.sec; run() };
    var ms = self.msEmu;
    if (self.msEmu < 100) { ms = '0' + ms };
    display.value = self.hour + ':' + self.min + ':' + self.sec + ':' + ms;
  }
  function run() {
    if (self.sec > 59) { self.sec = 0; ++self.min; };
    if (self.min > 59) { self.min = 0; ++self.hour; };
    if (self.hour > 23) { self.hour = 0; };
  }
}