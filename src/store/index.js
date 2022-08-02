import { createStore } from "redux";
import authReducers from "./reducers";

import LocalStorage from "./resources/localstorage";

const localStorage = new LocalStorage("chad");

const store = createStore(authReducers, localStorage.loadState());

store.subscribe(() => {
  localStorage.saveState(store.getState());
});

export default store;
