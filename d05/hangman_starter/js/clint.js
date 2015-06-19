//clint_js

//wordlist array
 
wordlist = 
['happy',
 'sad',
 'tree',
 'pipe',
 'tree',
 'locust'
 ];

var word = wordList[Math.floor(Math.random() * wordList.length)];

//CHECK LETTERS

var answer = [];
for (var i = 0; i < word.length; i++) {
 answer[i] = "_";
}
var remainingLetters = word.length;




//Test AREA

// $.getJSON('quizbank.json', 

// function(data) { 
// for(i=0; i<data.wordlist.length; i++){  
// 	questionBank[i]=new Array;
// 	questionBank[i][0] = data.wordlist[i].word;
// } 
// 	7 alert(questionBank); 8 })//getJSON


// var answerArray = [];
// for (var i = 0; i < word.length; i++) {
//  answerArray[i] = "_";
// }
// var remainingLetters = word.length;