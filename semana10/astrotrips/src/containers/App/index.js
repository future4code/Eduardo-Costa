import React from "react";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import theme from "../../style/theme";
import Router from "../Router";
import { createBrowserHistory } from "history";
import { createStore, applyMiddleware, compose } from "redux";
import { generateReducers } from "../../reducers";
import { routerMiddleware } from "connected-react-router";
import AppBar from "../../components/AppBar/index"
import {Wrapper} from './styled'
export const history = createBrowserHistory();

const middlewares = [
  applyMiddleware(routerMiddleware(history), thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
];

const store = createStore(generateReducers(history), compose(...middlewares));

export const App = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Wrapper style={{background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)'}}>
        <AppBar  />
        <Router history={history} />
      </Wrapper>
    </MuiThemeProvider>
  </Provider>
);

export default App;
