import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import NotedApp from './components/NotedApp';
import './styles/main.scss';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <NotedApp />
  </BrowserRouter>,
);

