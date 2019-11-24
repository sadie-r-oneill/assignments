// NPM === Node Package Manager

// npm init -y === creates a package.json (node product manifest)
// nmp install <package-name> (npm i <package-name>>)
    //  npm install readline-sync
    //  require === imports a file/folder/module

// CLI === Command Line Interface

// greet them   
// learn their name
// collect other info


// what's your favorite movie?
// make them select a movie from Stanley Kubrick Filmography

var readLine = require ("readline-sync")

var userName = readline.question ("what is your name?")

console.log ("hello" + userName)

// keyInSelect(movie, which movie) first argument is the question, second is the answer

var films = ['The Shining' '2001 Space Odyssey' 'Full Metal Jacket' 'Dr. Strange Love' 'Lolita' 'Eyes Wide Shut']

var usersFavFilmIndex = readline.keyInSelect (films, "What's your favorite film?")

var usersFavFilm = films [filmIndex]

console.log (usersFavFilm)

console.log(films[usersFavFilm])