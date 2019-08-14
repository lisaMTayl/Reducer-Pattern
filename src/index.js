import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';

import {
  reducer,
  initialState,
  ADD_ITEM,
  TOGGLE_ITEM,
  CLEAR_PURCHASED
} from './reducer';

import GroceryList from './components/GroceryList';
import ListForm from './components/ListForm';
import './styles.css';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem = (e, item) => {
    e.preventDefault();
    dispatch({ type: ADD_ITEM, payload: item });
  };

  const toggleItem = itemId => {
    dispatch({ type: TOGGLE_ITEM, payload: itemId });
  };

  const clearPurchased = e => {
    e.preventDefault();
    dispatch({ type: CLEAR_PURCHASED });
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Shopping List</h1>
        <ListForm addItem={addItem} />
      </div>
      <GroceryList
        groceries={state.groceries}
        toggleItem={toggleItem}
        clearPurchased={clearPurchased}
      />
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
