

	//Select a random word from the word bank
	var pickWord = function () {
		var words = ["Aggregate", "Ajax", "API", "Bandwidth", "Beta", "Bleeding edge", "Convergence", "Design pattern", "Disruptive", "DRM", "Enterprise", "Facilitate", "Folksonomy", "Framework", "Impact", "Innovate", "Longtail", "Mashup", "Microformats", "Mobile", "Monetize", "Open social", "Paradigm", "Podcast", "Proactive", "Rails", "Scalable", "Social bookmarks", "Social graph", "Social software", "Spam", "Synergy", "Tagging", "Tipping point", "Truthiness", "User-generated", "Vlog", "Webinar", "Wiki", "Workflow"]
		return words[Math.floor(Math.random() * words.length)];
	};

	//Set the answer array to _ the length of the chosen word

	var setupAnswerArray = function (word) {
		var answerArray = [];
		for (var i = 0; i < word.length; i++) {
			answerArray[i] = "_";
		}
		return answerArray;
	}

	var showPlayerProgress = function (answerArray) {
      alert(answerArray.join(" "));
    };

    var getGuess = function () {
      return prompt("Guess a letter, or click Cancel to stop playing.");
    };

    var updateGameState = function (guess, word, answerArray) {
      var appearances = 0;
      for (var j = 0; j < word.length; j++) {
        if (word[j] === guess) {
          answerArray[j] = guess;
          appearances++;
        }
      }

      return appearances;
    };

    var showAnswerAndCongratulatePlayer = function (answerArray) {
      showPlayerProgress(answerArray);
      alert("Good job! The answer was " + answerArray.join(""));
    };

    var word = pickWord();
    var answerArray = setupAnswerArray(word);
    var remainingLetters = word.length;

    while (remainingLetters > 0) { showPlayerProgress(answerArray); var guess = getGuess();
      if (guess === null) {
        break;
      } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
      } else {
        var correctGuesses = updateGameState(guess, word, answerArray);
        remainingLetters -= correctGuesses;
      }
    }

    showAnswerAndCongratulatePlayer(answerArray);

	// checkLetters:function(){

	// };

	// isLetter:function(){

	// 	makeGuess:function(){

	// 	};
	// 	checkWin:function(){

	// 	};
	// 	checkLose:function(){

	// 	};

	// };

	// giveUp:function (){

	// };

	// resetGame:function() {

	// };



