process.stdout.write('hello from spinner1.js... \rheyyy\n');

let timeDelay = 100;

let spinnerAnimation = ['\r|  ', '\r/  ', '\r-  ', '\r\\  '];

for (const char of spinnerAnimation) {
  setTimeout(() => {
    process.stdout.write(char);
  }, timeDelay)

  timeDelay += 100;
}

// whenToTimeOut = spinnerAnimation.length * 150

// setTimeout(() => {
//   console.log();
// }, whenToTimeOut)

