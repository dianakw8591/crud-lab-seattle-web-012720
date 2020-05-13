import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  selectReviews = () => {
    return this.props.reviews.filter(review => {
      return review.restaurantId === this.props.restaurantId
    })
  }

  render() {
    return (
      <ul>
        {this.selectReviews().map(review => {
          return <Review key={review.id} review={review} deleteReview={this.props.deleteReview} />
        })}
      </ul>
    );
  }
};

export default Reviews;