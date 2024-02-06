// Task3: Maximum Number of Words Found in Sentences

// Input: sentences = ["please wait", "continue to fight", "continue to win"]
// Output: 3
// Explanation: It is possible that multiple sentences contain the same number of words. 
// In this example, the second and third sentences (underlined) have the same number of words.

// ****************************************

var mostWordsFound = function (sentences) {
  for (let i = 0; i < sentences.length; i++) {
    let len = sentences[i].split(" ").length;
    sentences[i] = len;
  }
  return Math.max(...sentences);
};
console.log(
  mostWordsFound([
    "alice and bob love leetcode",
    "i think so too",
    "this is great thanks very much",
  ])
);
