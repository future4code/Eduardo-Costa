import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import trips from './trips'
import login from './login'

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    trips,
    login
    // Outros reducers aqui
  });
