import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.props.restaurants.map(r => {
          return <Restaurant key={r.id} restaurant={r} deleteR={this.props.deleteR} />
        })}
      </ul>
    );
  }
};

export default Restaurants;