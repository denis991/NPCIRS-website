import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
/**
 * @description
 * то что подключаем или оболочки храним сдесь (redux, context)
 * хотя можно без лишней вложенности и просто в одном месте, но я так привык работать.
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
