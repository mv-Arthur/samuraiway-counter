import { combineReducers, legacy_createStore } from "redux";
import { counterReducer } from "./reducers/counter/counterReducer";
import { loadFromLocalStorage, saveToLocalStorage } from "./localStorage";
import { initialState } from "./reducers/counter/initalState";

const rootState = combineReducers({ counters: counterReducer });

export type RootState = ReturnType<typeof rootState>;

export const store = legacy_createStore(rootState, { counters: { ...initialState, ...loadFromLocalStorage() } });

store.subscribe(() => saveToLocalStorage(store.getState().counters.global));
console.log(store.getState());
//@ts-ignore
window.store = store;
