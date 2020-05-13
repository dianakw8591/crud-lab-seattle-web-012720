import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {


  render() {
    const { restaurant, deleteR } = this.props;

    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={() => deleteR(restaurant.id)}> X </button>
          <ReviewsContainer restaurant={restaurant} />
        </li>
      </div>
    );
  }
};

export default Restaurant;
