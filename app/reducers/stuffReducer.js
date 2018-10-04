import initialState from './initialState';
import {FETCH_MOVIES,FETCH_MOVIES_BY_CATEGORIE, RECEIVE_MOVIES, FETCH_CATEGORIES, RECEIVE_CATEGORIES} from '../actions/actionTypes';

const moviesReducer = function MoviesRequest(state = initialState, action) {
    let newState;
    switch (action.type) {
        case FETCH_MOVIES:
            console.log('FETCH_MOVIES Action')
            return action;
        case FETCH_MOVIES_BY_CATEGORIE:
            console.log('FETCH_MOVIES_BY_CATEGORIE Action')
            return action;
        case RECEIVE_MOVIES:
            newState = action.movies;
            console.log('RECEIVE_MOVIES Action')
            return Object.assign({}, state, {
                movies: action.movies
              })

        case FETCH_CATEGORIES:
            console.log('FETCH_CATEGORIES Action')
            return action;
        case RECEIVE_CATEGORIES:
            newState = action.categories;
            console.log('RECEIVE_CATEGORIES Action')
            return Object.assign({}, state, {
                categories: action.categories
            })
        default:
            return state;
    }
}
export {moviesReducer};