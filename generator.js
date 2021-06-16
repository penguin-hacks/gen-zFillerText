// Code that generates the random lorem ipsum text

// Create a new object called loremIpsum by invoking the GenerateNewText constructor function
const loremIpsum = new GenerateNewText();

// Constructor function that creates an object with the sentences property
function GenerateNewText() {
  // Add property to the object
  this.sentences =
    [
      "dogwater",
      "wtf bro",
      "btw I",
      "srsly man cmon",
      "omg no way",
      "bruh",
      "that was cringe",
      "really? cring",
      "sheesh mann",
      "that was bussin bussin",
      "yoloooo",
      "yuh",
      "lol",
      "lmao",
      "lmfao",
      "ez",
      "get gud n00b",
      "l33t",
      "that was fire",
      "yikes bro",
      "he's live",
      "that hits different",
      "he's basic",
      "bet bro bet",
      "twitter cancelled",
      "no cap",
      "you wanna catch these hands?",
      "you getting dragged",
      "I got the drip",
      "hey fam",
      "what's poppin",
      "man just got finessed",
      "ghosted this guy",
      "high key those shoes looking fresh",
      "low key I like that hat",
      "that was so funny I'm dead",
      "hey sis and bro",
      "this song slaps",
      "she a bts stan",
      "you kinda sus",
      "amogus sus haha",
      "this is such a vibe",
      "yeet",
      "he's such an e-boy",
      "she's such an e-girl",
      "uwu",
      "owo",
      "uwo",
      "owu",
      "vsco oop oop skskskks",
      "yas queen",
      "she fly af",
      "af",
      "on fleek",
      "I'm legit baby here",
      "W",
      "L",
      "he woke",
      "tfw I",
      "POV: you",
      "dam u a snack",
      "he salty",
      "that's my lewk",
      "she a boujee",
      "that's dank",
      "those people are hypebeasts",
      "take several seats my guy",
      "I'm driving my whip",
      "u got steez",
      "probs",
      "totes",
      "defs",
      "#hashtag",
      "ay yo",
      "bromance",
      "cray cray omgosh",
      "@_@",
      "faiL",
      "waddup g",
      "k go",
      "u a qt",
      "weed eater",
      "unfollowed",
      "smh my head",
      "yeah v",
      "xoxox",
      "mood",
      "she throwing shade",
      "flex",
      "he the g.o.a.t",
      "smol bean",
      "oooooh roasted",
      "gucci flip flops",
      "#shipped",
      "oof",
      "savage",
      "tryna be so lit",
      "that ain't it",
      "sheet man that sucks",
      "lesgo get this bread",
      "he was being extra",
      "I have fomo so imma go",
      "this is it chief",
      "she's clout chasing",
      "he just got a clapback",
      "that doggo is cute",
      "that pupper is cute",
      "that guy is an fboy",
      "I'm so hangry rn",
      "that guy's new post was headass",
      "she looking hella fine",
      "just got left on read",
      "wanna netflix and chill tmrw",
      "he secured the bag yesterday",
      "bro I'm so shook",
      "that's so sick",
      "skrrt",
      "I'm so done xd",
      "XD",
    //   "😀",
    //   "🥶",
    //   "😩",
    //   "😈",
    //   "☝",
    //   "🤖",
    //   "👄",
    //   "🤪",
    //   "🤑",
    //   "😵",
    //   "🙄",
    //   "😔",
    //   "🤩",
    //   "🥺",
    //   "😉",
    //   "🤨",
    //   "😕",
    //   "😏",
    //   "🧐",
    //   "😛",
    //   "😜",
    //   "🙂",
    //   "😇",
    //   "😎",
    //   "💩",
    //   "👻",

   ];
}

// Method to the GenerateNewText constructor function that generates a random sentence
GenerateNewText.prototype.getRandomSentence = function() {
  let randomSentence = this.sentences[Math.floor(Math.random() * this.sentences.length)]
	return randomSentence;
}

// Method to the GenerateNewText constructor function that generates a paragraph from random sentences
GenerateNewText.prototype.getParagraph = function() {
  let paragraph = "";
  // Set the minimum number of words
  let minimumCharacterLength = 500 + parseInt(200 * Math.random());
  let firstSentence = true;
  while (paragraph.length < minimumCharacterLength) {
    if (firstSentence) {
      paragraph = paragraph.concat(this.getRandomSentence());
      firstSentence = false;
    } else {
      paragraph = paragraph.concat(" " + this.getRandomSentence());
    }
  }
  return paragraph;
}


GenerateNewText.prototype.getPhrase = function() {
    let phrase = "";
    // Set the minimum number of words
    let minimumCharacterLength2 = 100 + parseInt(50 * Math.random());
    let firstSentence2 = true;
    while (phrase.length < minimumCharacterLength2) {
      if (firstSentence2) {
        phrase = phrase.concat(this.getRandomSentence());
        firstSentence2 = false;
      } else {
        phrase = phrase.concat(" " + this.getRandomSentence());
      }
    }
    return paragraph;
  }

// Method to the GenerateNewText constructor function that gerates multiple paragraphs from paragraphs
GenerateNewText.prototype.getAllParagraphs = function(numberOfParagraphs) {
  let allParagraphs = [];
  // Generate the number of paragraphs as specified by the user
  while (allParagraphs.length < numberOfParagraphs) {
    allParagraphs.push(this.getParagraph());
  }
  // Convert array into HTML string
  let paragraphHTML = "";
  allParagraphs.forEach(function (paragraph) {
    paragraphHTML += paragraph;
  });
  return paragraphHTML;
}

module.exports = loremIpsum;