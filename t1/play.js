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

console.log(unique_genres);