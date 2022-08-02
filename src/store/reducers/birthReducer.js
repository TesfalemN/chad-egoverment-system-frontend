import { actionTypes } from "../actions";

const birthReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SET_BIRTH_DATA:
      return { ...action.payload };
    default:
      return state;
  }
};

export { birthReducer };
