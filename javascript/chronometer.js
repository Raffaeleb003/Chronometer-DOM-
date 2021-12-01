class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    this.timerId = null;
  }
  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if(callback) callback();
    }, 1000);

  }

  getMinutes() {
    if (this.currentTime && this.intervalId) {
      return Math.floor(this.currentTime / 60);
    }
    return 0;
  }
  getSeconds() {
    if (this.currentTime && this.intervalId) {
      return this.currentTime % 60;
    }
    return 0;
  }
  computeTwoDigitNumber(value) {
    let str = value.toString();
    return str.length < 2 ? `0${str}` : str;
  }
  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  reset() {
    this.currentTime = 0;
  }
  split() {
    let minuts = this.computeTwoDigitNumber(this.getMinutes());
    let second = this.computeTwoDigitNumber(this.getSeconds());
    return `${minuts}:${second}`;
  }
  getMilliseconds() {
    console.log(this.getSeconds().toString()).split('.')
    let ms = (this.getSeconds().toString()).split('.')[1].slice(0, 2);
    return ms;
  }
  splitWithMiliSecond() {
    const min = computeTwoDigitNumber(
      this.computeTwoDigitNumber(this.getMinutes())
    );
    const second = computeTwoDigitNumber(
      this.computeTwoDigitNumber(this.getSeconds())
    );
    const mili = computeTwoDigitNumber(this.getMilliseconds());
    return `${min}:${sec}:${mili}`;
  }
}