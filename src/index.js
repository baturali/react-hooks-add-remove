import React , { useContext, useReducer, useEffect } from 'react';
import ReactDOM from 'react-dom';
import TestContext from './Context'
import TestReducer from './Reducer'
import './style.scss';
import * as serviceWorker from './serviceWorker';
import TestForm from './components/forms'
import Capabilities from './components/capable'

const App = () => {
    const initialState = useContext(TestContext);
    const [state, dispatch] = useReducer(TestReducer, initialState);

    useEffect(
        () => {
          dispatch({
            type: "GET_LIST",
            payload: initialState
          });
        },
        [initialState]
    );

    return (
        <TestContext.Provider value={{ state, dispatch }}>
            <TestForm />
            <Capabilities />
        </TestContext.Provider>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
