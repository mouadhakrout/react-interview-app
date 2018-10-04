import * as types from './actionTypes';
import {movies$} from '../resources/movies';
let likedMovies = [];
let dislikedMovies = [];
export function receiveCategories(data) {
    return {type: types.RECEIVE_CATEGORIES, categories: data};
}
export function receiveMovies(data) {
    return {type: types.RECEIVE_MOVIES, movies: data};
}

export function receiveLikedMovie(data) {
    return {type: types.RECEIVE_LIKED_MOVIE, likedMovie: data};
}
export function fetchMovies() {
    return dispatch => {
        movies$.then(function(value) {
           dispatch(receiveMovies(value))
        })
        .catch(function(error) {
          console.log(error);
        });
    };
}
export function filterMoviesByCategory(category) {
    return dispatch => {
        movies$.then(function(value) {
            dispatch(receiveMovies(value.filter(film => film.category.toUpperCase() == category.toUpperCase())))
        })

        .catch(function(error) {
          console.log(error);
        });
    };
}
export function fetchCategories() {
    return dispatch => {
              movies$.then(function(data) {
                    let categories = [];
                    data.forEach(function(value){
                      if (categories.indexOf(value.category)==-1) categories.push(value.category);
                    });
                    dispatch(receiveCategories(categories))
              }) 
              .catch(function(error) {
                 console.log(error);
              });

    };
}
export function removeMovie(movieId) {
    return dispatch => {
              movies$.then(function(data) {
                    data.forEach(function(value,index){
                      if (value.id == movieId){
                              data.splice(index,1);
                      } 
                    });
                    dispatch(receiveMovies(data))
              })
               .catch(function(error) {
                 console.log(error);
              });
    };
}
export function pushLike(movieId) {
    return dispatch => {
              movies$.then(function(data) {
                    data.forEach(function(value){
                       const likedIndex = likedMovies.indexOf(movieId);
                       const dislikedIndex = dislikedMovies.indexOf(movieId);
                           if(value.id == movieId){
                             if(likedIndex!==-1){ 
                                likedMovies=likedMovies.filter(item =>item!==movieId);
                                value.likes--
                             }else{
                                likedMovies.push(movieId)
                                value.likes++
                             }
                           
                           }

                    });
                dispatch(receiveMovies(data))    
              })

               .catch(function(error) {
                 console.log(error);
              });
    };
}
export function pushDisLike(movieId) {
           
    return dispatch => {
              movies$.then(function(data) {
                    data.forEach(function(value){
                     const likedIndex = likedMovies.indexOf(movieId);
                     const dislikedIndex = dislikedMovies.indexOf(movieId);
                       if(value.id == movieId){
                         if(dislikedIndex!==-1){
                            dislikedMovies=dislikedMovies.filter(item =>item!==movieId);
                            value.dislikes--
                         }else{
                            dislikedMovies.push(movieId)
                            value.dislikes++
                         }
                          
                       }
                    
                    });
                                 dispatch(receiveMovies(data))
              })
               .catch(function(error) {
                 console.log(error);
              });
    };
}