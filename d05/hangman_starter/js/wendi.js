var randomWords = ["Aggregate", "Ajax", "API", "Bandwidth", "Beta", "Bleeding edge", "Convergence", "Design pattern", "Disruptive", "DRM", "Enterprise", "Facilitate", "Folksonomy", "Framework", "Impact", "Innovate", "Longtail", "Mashup", "Microformats", "Mobile", "Monetize", "Open social", "Paradigm", "Podcast", "Proactive", "Rails", "Scalable", "Social bookmarks", "Social graph", "Social software", "Spam", "Synergy", "Tagging", "Tipping point", "Truthiness", "User-generated", "Vlog", "Webinar", "Wiki", "Workflow"];

// Returns a random number between 0 (inclusive) and 1 (exclusive)// function getRandom() {//   return Math.random();

randomWords[Math.floor(Math.random() *randomWords.length];)]

var pickRandomWord = function = (words) {
	return words[Math.floor(Math.randon() * words.length)];
};