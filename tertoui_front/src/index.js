import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { NewsForm } from './pages/CreateNews';
import Index from './pages/index';
import { ListNews } from './pages/ListNews';
import { CreateAccount } from './pages/Register';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Account from './pages/Account';
import Login from './pages/Login';
import AuthenticatedRoute from './components/AuthenticatedRoute';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route exact path='/' element={<Index />} />
        <Route exact path='/news' element={<ListNews />} />
        <Route exact path='/account' element={<AuthenticatedRoute Component={Account}/>}/>
        <Route exact path='/news_form' element={<AuthenticatedRoute Component={NewsForm}/>}/>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
