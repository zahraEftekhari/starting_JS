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
    // Display Jason format actors categorized by genre
    //console.log(jsonObject);


    var unique_actors=[];
    movies.forEach(function(movie){
        movie.cast.forEach(function(actor){
            if(unique_actors.includes(actor)===false){
                unique_actors.push(actor);
            }
        });
    });

    var actors_genres=[];
    unique_actors.forEach(function(actor){

        actors_genres[actor]=[];

        movies.forEach(function(movie){
            if(movie.cast.includes(actor)===true){
                movie.genres.forEach(function(genre){
                    if(actors_genres[actor].includes(genre)===false){
                        actors_genres[actor].push(genre);
                    }
                });
            }
        });
    });

    let json_object = Object.fromEntries(Object.entries([actors_genres]))
    // Display Jason format actors categorized by genre
    //console.log(jsonObject);