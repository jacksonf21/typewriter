const sentence = "hello there from lighthouse labs";
let i = 0;
let y = 0;

for (const char of sentence) {

  setTimeout(() => {
    process.stdout.write(char);

    if (y === sentence.length - 1) {
      process.stdout.write('\n');
    }
    
    y++;
  }, 50 * i);
  
  i++;
}

