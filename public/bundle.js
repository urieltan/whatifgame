/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var suits, numbers, suitsBottom, i; 
var card ={
 numbers: ['Fork(In a timeline where)',
 'the predominant species on Earth developed from lizards instead of apes',
 'Germany won World War 2',
 'eating animals is prohibited',
 'humankind is ruled by a giant penguin',
 'Norse mythology was the only religion',
 'dinosaurs became the pets for the 0.5% of the mightiest humans',
 'art was more important than maths',
 'women were on average twice as tall as men',
 'the Roman Empire was still thriving',
 'left-handed people were adored like gods',
 'there was an additional tax on labour earnings of 20% for red-heads',
 'gravity worked in such a way, we floated around one meter above the earth surface',
 'the Russians had been the first nation to send a human being to the moon',
 'nuclear tragedy had occurred and we lived in a Mad Max-like post-apocalytic world',
 'Astrology was a well-respected science',
 'humans had become the pets of a superior alien species',
 'humans were legally obligated to exercise for one hour every day',
 'dolphins and dogs  were able to communicate with one another ',
 'we got a one year advance notice before we die',
 'aliens are watching us (and we know it)',
 'suddenly humans become agoraphobic',
 'coffee did not exist',
 '5% of the Earth\'s atmosphere was made of cocaine',
 'humans had discovered an advanced form of civilization living on the dark side of the moon',
 'Americans had "found" Europe first instead of the other way around',
 'videogames were part of the high school cirrcula for all students worldwide',
 'owning a cat was considered a sign of great opulence',
 ' -',
 'electricity became free for all world citizens',
 'oil price per barrel increases tenfold',
 'Spain had never lost control over the lands of current California and Baja California',
 'one in ten humans are unaware cyborgs',
 'humans were gaseaous instead of solid',
 'nobody lived beyonnd 40',
 'every human got one card to get out of jail "free", regardless the crime committed ',
 'Hitler had been a farmer in Nebraska',
 'Einstein had never come up with the theoretical basis for nuclear power',
 'everybody tried to be Kim Kardashian',
 'Africa had colonized Europe',
 'the Earth is flat',
 'were-wolves existed',
 'incompetence is a vital skill',
 'the Pope is the supreme leader of the Western  World',
 'Russian roulette is a family game',
 ],
};
var card2 ={
 numbers: ['what food is no longer available?',
 'who would rule the world?',
 'would headaches xe more, less or equally common?',
 'what is the most famous song?',
 'what would be considered the most heinous of crimes?',
 'what is considered the best fruit?',
 'what would be America\'s favourite food?',
 'can you speak more than two languages?',
 'what is considered an "indecent" sex position?',
 '-',
 'would people generally like the French?',
 'what country has won more football (soccer) World Cups?',
 'would there still be sexual tension between Batman and Robin?',
 'what beverage would be more popular in Europe: wine or beer?',
 'what would be the most popular career choice in your country?',
 'what would be the most common means of transportation?',
 ' what sound would be forbidden?',
 'what would be the best thing of not having the sense of smell?',
 'how would people salute each other?',
 'what would be the main use of social media?',
 'what is love?',
 ' -',
 'would the government be left or right leaning?',
 'how would you destroy the government?',
 'who would be the main economic power of the world?',
 'how would the world end?',
 'what would be the most precious mineral?',
 'what would people be nostalgic fore?',
 'what is something that is okay to do occasionally, but definitely not okay to do everyday?',
 'what is something that is okay to do occasionally, but definitely not okay to do everyday?',
 'what secret conspiracy or cult would you like to start?',
 'what social or scientific experiment would you run if money and ethics weren\'t an issue?',
 'what would be the world\'s predominannt religion?',
 'what would be a new acceptable pet?',
 'would you  have the same job?',
 'would clothing be optional?',
 'what would be an alternative tradition to celebrating birthdays?',
 '-',
 'could Brexit have been aborted?',
 'what would be a likely solution to global warming?',
 'who would be the only one existing superhero?',
 'what would be the meaning of life?',
 ' -',
 'would divorce be more, less or equally frequent?',
 'what food is no longer available?',
'who would rule the world?',
'would headaches xe more, less or equally common?',
'what is the most famous song?',
'what would be considered the most heinous of crimes?',
'what is considered the best fruit?',
'what would be America\'s favourite food?',
'can you speak more than two languages?',
'what is considered an "indecent" sex position?',
'-',
'would people generally like the French?',
'what country has won more football (soccer) World Cups?',
'would there still be sexual tension between Batman and Robin?',
'what beverage would be more popular in Europe: wine or beer?',
'what would be the most popular career choice in your country?',
'what would be the most common means of transportation?',
' what sound would be forbidden?',
'what would be the best thing of not having the sense of smell?',
'how would people salute each other?',
'what would be the main use of social media?',
'what is love?',
' -',
'would the government be left or right leaning?',
'how would you destroy the government?',
'who would be the main economic power of the world?',
'how would the world end?',
'what would be the most precious mineral?',
'what would people be nostalgic fore?',
'what is something that is okay to do occasionally, but definitely not okay to do everyday?',
'what is something that is okay to do occasionally, but definitely not okay to do everyday?',
'what secret conspiracy or cult would you like to start?',
'what social or scientific experiment would you run if money and ethics weren\'t an issue?',
'what would be the world\'s predominannt religion?',
'what would be a new acceptable pet?',
'would you  have the same job?',
'would clothing be optional?',
'what would be an alternative tradition to celebrating birthdays?',
'-',
'could Brexit have been aborted?',
'what would be a likely solution to global warming?',
'who would be the only one existing superhero?',
'what would be the meaning of life?',
' -',
'would divorce be more, less or equally frequent?',
],
};


 
function pullNumber() {
	var theNumber = Math.floor(Math.random() * (card.numbers.length));
	document.getElementById('randomNumber').innerHTML = "In a timeline where " + card.numbers[theNumber];

	var theNumber2 = Math.floor(Math.random() * (card2.numbers.length));
	document.getElementById('randomNumber2').innerHTML = card2.numbers[theNumber2];
}


window.wholeCard = function(){
	pullNumber();
};


/***/ })
/******/ ]);