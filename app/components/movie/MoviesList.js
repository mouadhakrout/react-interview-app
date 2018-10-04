import React , {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Slider from 'react-slick';
import * as stuffActions from '../../actions/stuffActions';
import Title from '../shared/Title';
import Card from '../shared/Card';
import MoviesFilter from './MoviesFilter'
class MoviesList extends Component{
  constructor(props) {
   super(props);
   this.state = {movies: [],  updated: false};
 }
 componentDidMount() {
    this.props.params.categoryName!==undefined?
    this.props.stuffActions.filterMoviesByCategory(this.props.params.categoryName):
    this.props.stuffActions.fetchMovies();
    this.props.stuffActions.fetchCategories();
 }
 
removeMovie(movieId) { this.props.stuffActions.removeMovie(movieId);}
pushLike(movieId) { this.props.stuffActions.pushLike(movieId);}
pushDisLike(movieId) { this.props.stuffActions.pushDisLike(movieId);}
filterMoviesByCategory(category) {this.props.stuffActions.filterMoviesByCategory(category);}
 render() {
     const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      swipeToSlide:true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
            infinite: false,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
             infinite: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
             infinite: false,
          }
        }
      ]
    };
    const {movies, categories} = this.props.moviesReducer.moviesReducer;
    const moviesList = movies.map(movie => {
      return(<div key={"movie"+ movie.id} ><Card removeMovie ={() => this.removeMovie(movie.id)} pushLike={() => this.pushLike(movie.id)} pushDisLike={() => this.pushDisLike(movie.id)}  movieId={movie.id} img={movie.img} title={movie.title} category={movie.category} likes={movie.likes} dislikes={movie.dislikes} /></div>)
    });
      return(
      <div>
       {categories.length>0 &&
      <div>
      <MoviesFilter filterMoviesByCategory={(category) => this.filterMoviesByCategory(category)} categories={categories}/> 
      {movies.length>0 &&
      <div className="container"> 
      <Title color={"#ec008c"} content={"Liste des films :"} />
      <Slider ref={c => this.slider = c} {...settings}>{moviesList}</Slider>
      </div>
      }
      </div>
      }
      </div>);
  }
}
MoviesList.propTypes = {
    stuffActions: PropTypes.object,
};
function mapStateToProps(state) {
    return {
        moviesReducer: state,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        stuffActions: bindActionCreators(stuffActions, dispatch)
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MoviesList);