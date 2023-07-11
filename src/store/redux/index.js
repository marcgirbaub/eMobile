import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { mobilesReducer } from "./mobilesSlice";

const rootReducer = combineReducers({
  mobiles: mobilesReducer,
});

export const setupStore = (preloadedState) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
  });

export const store = setupStore();

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
