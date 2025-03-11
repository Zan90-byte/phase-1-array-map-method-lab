const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


const titleCased = () => tutorials.map(words => {
  //split words
  //Slice word's 0 char and modify it to be upper cased.
  //Slice words from char 1 and beyond keeping it the same way it was before being sliced for the first time.
  //Join everything back together resulting in words that have char 0 upper cased.
  const titleCasedWords = words.split(" ").map(word => word.slice(0, 1).toUpperCase() + word.slice(1)).join(" ");
  return titleCasedWords;
});

//console.log(titleCased(tutorials));
