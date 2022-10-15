// ASCII animiation using setTimeout, refactored via OOP
const spinner2 = {
  ascii:        ['\r|   ', '\r/   ', '\r-   ', '\r\   ', '\r|   ', '\r*  '],
  
  spinner:      function() {
                              for (let i = 0; i < 6; i++) {
                                let delay = ((i * 200) + 100);
                                setTimeout(() => {
                                process.stdout.write(this.ascii[i]);
                                }, delay);
                              }
                            }
};

spinner2.spinner();