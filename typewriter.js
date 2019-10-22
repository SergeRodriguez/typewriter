const sentence = "hello there from lighthouse labs";


let typewriterAnimation = (aSentence) => {
  let count = 0;
  for (const char of aSentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, 50 * count);
    count++
  }
  setTimeout(() => {
    console.log()
  }, 50 * count);
}


typewriterAnimation(sentence);
