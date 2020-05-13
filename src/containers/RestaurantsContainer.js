import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addR={this.props.addR}/>
        <Restaurants restaurants={this.props.restaurants} deleteR={this.props.deleteR} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addR: formData => dispatch({ type: 'ADD_RESTAURANT', text: formData}),
    deleteR: id => dispatch({type: 'DELETE_RESTAURANT', payload: id}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
