const squareCode = message => {
  let result = "";
  noSpaces = message.split(" ").join("");
  //Find the length of our individual "words"
  const wordLength = Math.ceil(Math.sqrt(message.length)); 
  for (let i = 0; i < wordLength; i++) {
    for (let j = i; j < noSpaces.length; j += wordLength) {
      result += noSpaces[j];
    }
    result += " ";
  }
  return result;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));