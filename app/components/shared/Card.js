import React , {Component} from 'react';
import PropTypes from "prop-types";
class Card extends Component{
  render() {
    const cardStyle = {
         textAlign: 'center',borderRadius: '5px',background:'lightgray', boxShadow: '0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5',
        marginLeft: '10px'
    };
    const cardBlockStyle = {
        background:'#FFF',
        boxShadow: '0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5'
    }
    const cardTitleStyle = {whiteSpace: 'nowrap' ,overflow: 'hidden' , textOverflow: 'ellipsis'}
    return(
      <div className="card" style={cardStyle} role="button">
       <img
          role="button" aria-pressed="true" className="card-img-top" ref={img => this.img = img} src={this.props.img}
          onError={() => this.img.src = '../../../assets/img/not-found.png'}style={{height: '225px', width: 'inherit'}} onClick={this.handleOnClick} alt="Hero Card image"
        />
        <div className="card-block" style={cardBlockStyle}>
          <h4 className="card-title" style={cardTitleStyle}>{this.props.title}</h4>
        </div>
        <div className="card-footer">
            <div className="d-flex justify-content-between align-items-center">
               {this.props.category}
             <span className="glyphicon glyphicon-thumbs-up"></span>
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary" onClick={this.props.pushLike}><span className="fa fa-thumbs-up"></span>{this.props.likes}</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary" onClick={this.props.pushDisLike}><span className="fa fa-thumbs-down"></span>{this.props.dislikes}</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary" onClick={this.props.removeMovie}><span className="fa fa-trash"></span></button>
                    </div>
            </div>
        </div>
      </div>
    );
  }
}
Card.propTypes = {
    movieId: PropTypes.string,
    img:PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
    likdes:PropTypes.number,
    dislikes:PropTypes.number
};
export default Card;
