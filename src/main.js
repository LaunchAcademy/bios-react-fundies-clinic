import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import style from './styles/app.scss'

import BioList from './components/bio-list'

ReactDOM.render(
  (
    <BioList />
  ),
  document.getElementById('app')
);
