const chronometer = new Chronometer();

const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function getArrayFromNumber(number) {
  let myFunc = (num) => Number(num);
  var intArr = Array.from(String(number), myFunc);
  return intArr;
}
function printTime() {

  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  const min = getArrayFromNumber(chronometer.getMinutes());

  if (min.length === 2) {
    minDecElement.innerHTML = min[0];
    minUniElement.innerHTML = min[1];
  } else {
    minDecElement.innerHTML = 0;
    minUniElement.innerHTML = min[0];
  }
}

function printSeconds() {
  const sec = getArrayFromNumber(chronometer.getSeconds());
  if (sec.length === 2) {
    secDecElement.innerHTML = sec[0];
    secUniElement.innerHTML = sec[1];
  } else {
    secDecElement.innerHTML = 0;
    secUniElement.innerHTML = sec[0];
  }
}

function printMilliseconds() {
  console.log(chronometer.getMilliseconds());

}

function printSplit() {
  let split = chronometer.split();
  splitsElement.innerHTML += `<br/>${split}`;
}

function clearSplits() {
  splitsElement.innerHTML = '';
}
function toggleClasses() {
  btnLeftElement.classList.toggle('start');
  btnLeftElement.classList.toggle('stop');
  btnRightElement.classList.toggle('reset');
  btnRightElement.classList.toggle('split');
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  let btnState = btnLeftElement.classList.contains('start');

  switch (btnState) {
    case false:
      chronometer.stop();
      btnLeftElement.innerHTML = 'START';
      btnRightElement.innerHTML = 'RESET';
      break;
    case true:
      chronometer.start(printTime);
      btnLeftElement.innerHTML = 'STOP';
      btnRightElement.innerHTML = 'SPLIT';
      break;
  }
  toggleClasses();
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  let btnState = btnRightElement.classList.contains('split');
  console.log(btnRightElement.classList);
  console.log('button state:', btnState);
  switch (btnState) {
    case false:
      clearSplits();
      chronometer.reset();
      printTime();
      break;
    case true:
      printSplit();
      break;
  }})