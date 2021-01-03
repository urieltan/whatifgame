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
var whatif ={
 text: ['the predominant species on Earth developed from lizards instead of apes',
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
 'owning a cat was considered a sign of great opulence',
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
 'there was no scientific progress',
 'Hogwarts, witches and wizards existed',
 'Santa Claus is real and omnipresent',
 'there is no Heaven, but definitely a Hell',
 'everyone is a communist',
 'humans only have two fingers per hand',
 'the dog is man\'s worst enemy',
 'everyone is French',
 'everyone looks scandinavian',
 'people communicate through the medium of dance',
 'the purge was a real event',
 'German is considered the language of love',
 'fast food is a luxury only enjoyed by rich people',
 'everyone is a bodybuilder',
 'everyone is a nerd',
 'public transport is a rich man\'s mode of transport',
 'Western medicine never existed',
 'the WHO had prohibited any kind of added sugars',
 'governments really cared about climate change',
 'people put compassion first',
 'teletransportation could be learnt',
 'everybody ate five pieces of vegetables and fruit everyday',
 'extreme hunger had been eradicated',
 'everyone earns the same hourly rate',
 'women earn fve times more than men',
 'Rome was built in one day',
 'the Berlin Wall still stands',
 'Kim Jong II was born in a stable in Finland',
 'you and only you could travel in time',
 'Napoleon was immortal',
 'Abraham Lincoln was a bigoted plantation owner',
 'the Wright brothers failed and people still travel in airships',
 'Nixon was the immortal, almighty ruler and new-founder of America',
 'Martin Luther King Jr had a nightmare',
 'politicians could be trusted',
 'Karl Mark was an investment banker',
 'people age in reverse',
 'humans have necks as long as giraffes',
 'we can communicate and reason with animals',
 'humans have discovered all of the universe and we are alone',
 'Catholicism had disappeared in favour of Protestantism',
 'Mother Theresa had been Napoleon\'s wife',
 'Michael Jackson had been the first man on the moon',
 'Albert Einstein had been a member of the Beatles',
 'Genghis Khan had conquered all Europe',
 'Vladimir Putin is an American spy',
 'Walt Disney had been a millennial artisanal coffee and avocado connoisseur ',
 'humans lived underwater',
 'Pokemon existed',
 'everyone is bald',
 'China never existed',
 'China One Child policy would have been the 10-Childern policy',
 'Japan had conquered the US',
 'the Hunger Games was a real competition celebrated every year',
 'Russia had conquered Europe',
 'Russian never conquered Siberia',
 
 ],
};
var question ={
 text: ['what food is no longer available?',
 'who would rule the world?',
 'would headaches xe more, less or equally common?',
 'what is the most famous song?',
 'what would be considered the most heinous of crimes?',
 'what is considered the best fruit?',
 'what would be America\'s favourite food?',
 'can you speak more than two languages?',
 'what is considered an "indecent" sex position?',
 'what is considered an "indecent" sex position?',
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
 'what is love?',
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
 'what would be an alternative tradition to celebrating birthdays?',
 'could Brexit have been aborted?',
 'what would be a likely solution to global warming?',
 'who would be the only one existing superhero?',
 'what would be the meaning of life?',
 'what would be the meaning of life?',
 'would divorce be more, less or equally frequent?',
 'what countries would actively fight in World War 3?',
 'what would be considered a wild adventure?',
 'would Facebook collect more or less user data?',
 'would people like bankers?',
 'what is the ultimate status symbol?',
 'is the band Nickelback universally loved?',
 'is mental illness more common?',
 'what would be he most common morning routine?',
 'what is considered a rite of passage into adulthood?',
 'would the mullet be a respectable haircut?',
 'what do you think would be the best part of your reality?',
 'would we still play Wham\'s Last Christmas?',
 'why would wearing socks with sandals be cool?',
 'would there be more or less "manflu"?',
 'what do you think would be the worst part of your reality?',
 'would the machines rise against us and why?',
 'what food would no longer exist?',
 'which ancient pagan god would you likely worshp?',
 'do you think Donald Trump would have been elected president?',
 'what would be the world\'s favourte sport?',
 'what would bee the world\'s favourite cartoon movie?',
 'would porn be more, less or equally consumed?',
 'what would you find disturbing, but weirdly arousing?',
 'what would you find disturbing, but weirdly arousing?',
 'what would be a "new" acceptable reason to end a romantc relationship?',
 'what would be a guilty pleasure for you?',
 'what would be a guilty pleasure for you?',
 'you would do anything for love except for?',
 'would there be more or less "anti-vaccers"?',
 'would we live in a more or less futuristic society?',
 'would we consume more or less bottled water?',
 'would substance abuse be more or less prevalent?',
 'would human life span continue to increase?',
 'would people immigrate to your country and why?',
 'would communism work?',
 'would we exercise more or less?',
 'what would make your parents proud?',
 'would you be better or less well-off and why?',
 'would there be more or less peace?',
 'is global warming a problem?',
 'what is too serious to be joked about?',
 'is America the land of opportunity?',
 'what is the largest city?',
 'what is the most popular sport?',
 'would we have colonized other planets?',
 'would hipsters still eat too many avocados?',
 'would we have more or less facial hair?',
 'what question would you ask a fortune teller?',
 'who would be an inspirational leader?',
 'would kids friend their parents on social networks?',
 'who would you want to invite as a dinner guest?',
 'would you like to be famous and why?',
 'how would Silicon Valley become the new Detroit?',
 ' what is the most likely cause of death?',
 'what superpower would you like to have then?',
 'what country does not exist anymore?', 
],
};


 
function pullCards() {
	var ran1 = Math.floor(Math.random() * (whatif.text.length));
	document.getElementById('randomWhatIf').innerHTML = "In a timeline where " + whatif.text[ran1];

	var ran2 = Math.floor(Math.random() * (question.text.length));
	document.getElementById('randomQuestion').innerHTML = question.text[ran2];
}


window.wholeCard = function(){
	pullCards();
};


/***/ })
/******/ ]);
