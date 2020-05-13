
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = { restaurants: [], reviews: [] }, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const newR = {
        id: cuid(),
        text: action.text,
      }
      return {
        ...state,
        restaurants: [...state.restaurants, newR]
      };
    case 'DELETE_RESTAURANT':
      return {
        ...state,
        restaurants: state.restaurants.filter(r => r.id !== action.payload)
      }

    case 'ADD_REVIEW':
      const newReview = {
        id: cuid(),
        restaurantId: action.review.restaurantId,
        text: action.review.text,
      }
      return {
        ...state,
        reviews: [...state.reviews, newReview]
      }
    case 'DELETE_REVIEW':
      return {
        ...state,
        reviews: state.reviews.filter(r => r.id !== action.payload)
      }
    default:
      return state;
  }
}
