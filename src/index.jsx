/* eslint-disable react/no-render-return-value */
import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import App from './Containers/App';
import reducer from './Reducers';

let enhancer;
// eslint-disable-next-line no-underscore-dangle
if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  // eslint-disable-next-line no-underscore-dangle
  enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
    applyMiddleware(thunk),
  );
} else {
  enhancer = compose(applyMiddleware(thunk));
}

const store = createStore(reducer, enhancer);

const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.querySelector('.app'),
  );

render(App);

if (module.hot) module.hot.accept('./Components/App', () => render(App));
