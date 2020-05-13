import React, { Component } from 'react';
// import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: '',
  }

  handleSubmit = e => {
    e.preventDefault();
    const review = {
      restaurantId: this.props.restaurantId,
      text: this.state.text
    }
    this.props.addReview(review);
    this.setState({
      text: '',
    })
  }

  handleChange = e => {
    this.setState({
      text: e.target.value,
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <label>Add a Review</label>
          <input
            type='text'
            value={this.state.text}
            onChange={this.handleChange} />
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
