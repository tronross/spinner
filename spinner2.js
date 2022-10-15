// ASCII animiation using setTimeout, refactored via OOP
const spinner2 = {
  ascii: ['\r|   ', '\r/   ', '\r-   ', '\r\   ', '\r|   ', '\r*  '],
  spinner: function() {
                        for (let i = 0; i < 6; i++) {
                          let delay = ((i * 200) +100);
                          setTimeout(() => {
                            process.stdout.write(this.ascii[i]);
                            }, delay);
                            }
                          }
                        };
spinner2.spinner();


// function() {
//   for (let i = 0; i < 6; i++) {
//     let delay = ((i * 200) +100);
//     if (i === 0) {
      
//       setTimeout(() => {
//         process.stdout.write(feed.charAt(i));
//       }, delay);
//     }
//   }
// };



// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   process.stdout.write('\r\   ');
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1300);

// setTimeout(() => {
//   process.stdout.write('\r\   ');
// }, 1500);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 1700);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1900);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 2100);

// setTimeout(() => {
//   process.stdout.write('\r\   ');
// }, 2300);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 2500);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 2700);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 2900);

// setTimeout(() => {
//   process.stdout.write('\r\   ');
// }, 3100);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 3300);

// setTimeout(() => {
//   process.stdout.write('\r*  ');
// }, 3500);