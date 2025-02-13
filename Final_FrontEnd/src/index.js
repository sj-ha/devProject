import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import axios from 'axios';

let defaultUser = {
  id : 0,
  nickname : 'test',
  name : '',
  password : '',
  birth : '',
  phoneNum : '',
  zipCode : '',
  basicAddress : '',
  detailAddress : '',
  image : ''
}

const userReducer = (state = defaultUser, action) => {
  if(action.type == '로그인유저'){
    state = axios.get("http://localhost:8080/user/1");
  } else 
  return state;
}

const loginReducer = (state = false, action) => {
  if(action.type == '로그인'){
    return true;
  } else if(action.type == '로그아웃') {
    return false;
  } else
  return state;
}

let store = createStore(combineReducers({userReducer, loginReducer}));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
