// Skip to content
 
// Search or jump to…

// Pull requests
// Issues
// Marketplace
// Explore
 
// @TWenzel1 
// Learn Git and GitHub without any code!
// Using the Hello World guide, you’ll start a branch, write comments, and open a pull request.

 
// 0
// 0 0 EdgeTechAcademy/justJS
//  Code  Issues 0  Pull requests 0  Projects 0  Wiki  Security  Insights
// justJS/json-lab.js
// @EdgeTechAcademy EdgeTechAcademy updates
// 622808c yesterday
// 64 lines (52 sloc)  2.19 KB
    
/**
 * Created by Edge Tech Academy on 5/5/2017.
 */
let movie = require('./casablanca.json');
let title = movie.title;
console.log(title);
console.log(movie.title);
console.log(movie.writers[2]);
console.log(movie.actors[1].actorName);
//  Let's output the casablanca object.
console.log(movie.actors.length);
console.log(movie.quotes.length);
for (const item of movie.actors) {
    console.log(item);
}
 let ran=Math.floor(Math.random()*10);
// console.log(movie.actors[ran]);
console.log(movie.movieTrivia[ran]);
let actor1=movie.actors[ran];
console.log(`The actors character is ${actor1.character} and the actors ? is ${actor1.actorName}.`);

/*--------------------------------------------------------------------------------------------------------------
 *	 Less than fulfilling wasn't it. The greatest movie ever and all we get is
 *	     Object {title: "Casablanca", originalTitle: "", year: "1942", releaseDate: "19430123", directors: Array(1), …}
 *		 But what did we see?
 *	         We can see some of the individual attributes of the object
 *	         when the member contains an Object, the Object does not get 'unwound' 
 *           and 'Object' is displayed
 *	         but you can open it in debug and expand the inner layers
 *           But we have a start. If you need the title you can use the variable
 *           followed by the attribute movie.title
 *           some of the attributes are arrays
 *           movie.genres is an array of the genres War, Dramma, Romance
 *           movie.actors is an array of JSON objects each one is another set of data
 * 
 *------------------------------------------------------------------------------------------------------------*/



let releaseDate = movie.releaseDate;
console.log(releaseDate);


let simplePlot = movie.simplePlot;
console.log(simplePlot);

console.log(movie.urlPoster);
console.log('How many actors? ' + movie.actors.length);
console.log('How many quotes? ' + movie.quotes.length);
console.log('How many Trivia? ' + movie.movieTrivia.length);

for (const genre of movie.genres) {
    console.log(genre);
}

for (const actor of movie.actors) {
    console.log(actor.actorName + " played " + actor.character);
}

let rnd = getRandomNum(movie.actors.length);
let actor = movie.actors[rnd];
console.log(actor);
console.log("The actor's name is " + actor.actorName +
    "\nplayed the part of " + actor.character +
    "\nphoto " + actor.urlPhoto);

rnd = getRandomNum(movie.quotes.length);
let quote = movie.quotes[rnd];
for (const line of quote.quote) {
    console.log(line);
}

function getRandomNum(randMax) {
    return Math.floor((Math.random() * randMax));
}

//  from here on out you are on your own
// © 2019 GitHub, Inc.
// Terms
// Privacy
// Security
// Status
// Help
// Contact GitHub
// Pricing
// API
// Training
// Blog
// About
