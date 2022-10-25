//Spinner animation in terminal 

const array = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|']
let time = 100;

for (let char of array){
  setTimeout(() => {
    process.stdout.write(`\r${char}   `)
  }, time);
  time += 200;
};
