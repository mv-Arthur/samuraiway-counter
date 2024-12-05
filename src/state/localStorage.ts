import { Settings } from "./reducers/counter/counterReducer";

export function saveToLocalStorage(state: Settings) {
     const serialisedState = JSON.stringify({ global: state });

     localStorage.setItem("global", serialisedState);
     return state;
}

export function loadFromLocalStorage() {
     const serialisedState = localStorage.getItem("global");
     if (serialisedState === null) return undefined;
     return JSON.parse(serialisedState);
}
