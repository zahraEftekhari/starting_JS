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

    var genres_actors=[];

    unique_genres.forEach(function(genre){

        genres_actors[genre]=[];
        
        movies.forEach(function(movie){
            if(movie.genres.includes(genre)===true){
                movie.cast.forEach(function(actor){
          if(genres_actors[genre].includes(actor)===false){
                        genres_actors[genre].push(actor);
          }
        });
      }
        });
  });

  let jsonObject = Object.fromEntries(Object.entries([genres_actors]))
    
    console.log(jsonObject);

