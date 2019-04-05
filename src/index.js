import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const fetch = require('node-fetch');

// all the apps on free dynos to ping and wake up
const apps = [
  'https://conways-game-of-life-hb.herokuapp.com/',
  'https://stark-waters-61663.herokuapp.com/',
  'https://react-recipe-box.herokuapp.com/',
  'https://harold-bell-portfolio-server.herokuapp.com/',
  'https://lit-ridge-56288.herokuapp.com/',
  'https://agile-plateau-65674.herokuapp.com/',
  'https://lit-falls-35438.herokuapp.com/',
  'https://stox-fox.herokuapp.com/',
  'https://news-now-hb.herokuapp.com/',
  'https://wiki-bubbles.herokuapp.com/'
]

// wake 'em up! should take like 7-10 sec, and will do so 
// async so should be up and ready by the time it is clicked on
// paying for dynos is way lame.
apps.forEach((app) => {
  fetch(app)
    .then((res) => {
      console.log(`${app} pinged! `)
      console.log(res)
    })
    .catch((error) => {
      console.log(error);
    });
})




ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
