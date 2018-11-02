import {
  GET_DECKS,
  ADD_DECK,
  DELETE_DECK,
  DECKS_LOADING,
  GET_DECK,
  SEARCH_DECKS,
  SET_SORT_OPTIONS
} from "../actions/types";
import _ from "lodash";

const initialState = {
  decks: [],
  loading: false,
  deck: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_DECKS:
      console.log(action.payload);
      return {
        ...state,
        decks: action.payload,
        loading: false
      };
    case SEARCH_DECKS:
      console.log(action.payload);
      return {
        ...state,
        decks: action.payload,
        loading: false
      };
    case GET_DECK:
      console.log(action.payload);
      return {
        ...state,
        deck: action.payload,
        loading: false
      };
    case ADD_DECK:
      return {
        ...state,
        decks: [...state.items, action.payload],
        loading: false
      };
    case DELETE_DECK:
      return {
        ...state,
        decks: state.decks.filter(deck => deck._id !== action.payload)
      };
    case DECKS_LOADING:
      return {
        ...state,
        loading: true
      };
    case SET_SORT_OPTIONS:
      const sortedDecks = _.orderBy(
        state.decks,
        [action.payload.selection, "deckName"],
        [action.payload.order, action.payload.order]
      );
      console.log(sortedDecks);
      return {
        ...state,
        decks: sortedDecks
      };
    default:
      return state;
  }
}
