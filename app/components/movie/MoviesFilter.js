import React , {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as stuffActions from '../../actions/stuffActions';
class MoviesFilter extends Component{
  constructor(props) {
   super(props);
 }

 render() {
  const categoriesList = this.props.categories.map(category => {
      return(
       <li  key={category} className="nav-item">
          <a  className="nav-link" onClick={()=>this.props.stuffActions.filterMoviesByCategory(category)}>{category}</a>
       </li>
          )
    });
 
      return(
      <div>
        <ul className="nav justify-content-center">
            {categoriesList}
        </ul>
    </div>
      );
  }
}
MoviesFilter.propTypes = {
    stuffActions: PropTypes.object,
};
function mapDispatchToProps(dispatch) {
    return {
        stuffActions: bindActionCreators(stuffActions, dispatch)
    };
}
export default connect(
    null,
    mapDispatchToProps
)(MoviesFilter);