import * as types from './actionTypes';
import {movies$} from '../resources/movies';
export function receiveCategories(data) {
    return {type: types.RECEIVE_CATEGORIES, categories: data};
}
export function receiveMovies(data) {
    return {type: types.RECEIVE_MOVIES, movies: data};
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
    };
}