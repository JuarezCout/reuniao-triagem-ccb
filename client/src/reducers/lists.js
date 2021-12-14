import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

// eslint-disable-next-line import/no-anonymous-default-export
export default (lists = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case LIKE:
      return lists.map((post) => (post._id === action.payload._id ? action.payload : post));
    case CREATE:
      return [...lists, action.payload];
    case UPDATE:
      return lists.map((post) => (post._id === action.payload._id ? action.payload : post));
    case DELETE:
      return lists.filter((post) => post._id !== action.payload);
    default:
      return lists;
  }
};