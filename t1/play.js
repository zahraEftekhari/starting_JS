import { movies } from './data.js'

//const myMovies = movies.filter(movie => movie.genres == "movie title")

var unique_genres=[];

movies.forEach(function(movie){
   movie.genres.forEach(function(genre){
        if(unique_genres.includes(genre)===false){
            unique_genres.push(genre);
        }
   });
});

//console.log(unique_genres);

var unique_cast=[];

movies.forEach(function(movie){
   movie.cast.forEach(function(cast){
        if(unique_cast.includes(cast)===false){
            unique_cast.push(cast);
        }
   });
});

console.log(unique_cast);