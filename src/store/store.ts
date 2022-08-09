import {
  combineReducers,
  configureStore,
  PreloadedState,
} from "@reduxjs/toolkit";

import counterReducer from "./reducers/counterSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export const setupStore = (
  preloadedState: PreloadedState<RootState>,
): ReturnType<typeof configureStore> => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
