import { GET_DECKS, ADD_DECK, DELETE_DECK, DECKS_LOADING } from '../actions/types';
// import { Decks } from '../db/decks'

const initialState = {
  decks: [],
  loading: false
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_DECKS:
      console.log(action.payload);
      return {
        ...state,
        decks: action.payload,
        loading: false
      }
    case ADD_DECK:
      return {
        ...state,
        decks: [...state.items, action.payload]
      }
    case DELETE_DECK:
      return {
        ...state,
        decks: state.decks.filter(deck => deck._id !== action.payload)
      }
    case DECKS_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}