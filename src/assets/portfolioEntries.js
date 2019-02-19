import React from 'react';

// information objects for apps shown on portfolio page. information is for the modal displays

// separate by type
const mobileApps = [
  {
    name: 'Colorado Daily Info',
    link: '',
    image: require('../assets/images/colorado-daily-info.jpg'),
    description: 'A useful mobile app for any enthusiastic skier living in Denver.',
    modalDescription: 'I made this app to gather some basic information on recent snowfall, weather in the city and in the mountains, and traffic on the way to the mountains (a major issue for us Denverites).',
    modalBG: '',
    tools: ['html', 'css', 'javascript', 'react', 'react-router', 'nodejs', 'heroku'],
  },
  {
    name: 'Flight Attendant Lung Health',
    link: 'https://expo.io/@hbell3xp0/snack-HJm8znJUX',
    image: require('../assets/images/famri.jpg'),
    description: 'An information and recruitment tool for a research study at CU Denver',
    modalDescription: 'I made this app for the lab I work in at CU Denver. It is designed as a resource for people who may be interested in participating in the study. Users may read some basic information on the study, watch educational videos, and contact the researchers.',
    modalBG: '',
    tools: ['html', 'css', 'javascript', 'react', 'react-router', 'nodejs', 'heroku'],
  }
]

const webApps = [
  {
    name: 'Tetris',
    link: 'https://stark-waters-61663.herokuapp.com/',
    image: require('../assets/images/tetris-app.jpg'),
    description: 'A full stack Tetris app built with react and nodejs.',
    modalDescription: 'I made this tetris game with create-react-app and a nodejs backend for high scores. This game was really fun to make.',
    modalBG: '',
    tools: ['html', 'css', 'javascript', 'react', 'react-router', 'nodejs', 'heroku']
  },
  {
    name: "Conway's Game of Life",
    link: 'https://conways-game-of-life-hb.herokuapp.com/',
    image: require('../assets/images/game-of-life-app.jpg'),
    description: 'A rite of passage for any developer & a classic in mathematics.',
    modalDescription: `This app was one of my first experiences using react, originally made on codepen. I took the codepen I made and transferred the code to create-react-app structure, and deployed it to heroku.`,
    modalBG: '',
    tools: ['html', 'css', 'javascript', 'react', 'react-router', 'nodejs', 'heroku',],
  },
]

// codepens have embedded pen html taken from the site's embed tool

// define just the embedded pens first
const reversiEmbedded = (
  <iframe height="400" style={{width: '100%'}} scrolling="no" title="Simple Reversi Game" src="//codepen.io/hbellatcodepen/embed/XVrZLB/?height=913&theme-id=0&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/hbellatcodepen/pen/XVrZLB/'>Simple Reversi Game</a> by Harold Bell
  (<a href='https://codepen.io/hbellatcodepen'>@hbellatcodepen</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
);

const chessEmbedded = (
  <iframe height="400" style={{width: '100%'}} scrolling="no" title="Chess Game" src="//codepen.io/hbellatcodepen/embed/GxqmaJ/?height=734&theme-id=0&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/hbellatcodepen/pen/GxqmaJ/'>Chess Game</a> by Harold Bell
  (<a href='https://codepen.io/hbellatcodepen'>@hbellatcodepen</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
);

// then the actual objects
// codePens will have a modalApp property, but apps not on codepen will not. 
// So a non-codepen app will just have the image as the modal, enlarged
const codePens = [
  {
    name: 'Reversi',
    link: 'https://codepen.io/hbellatcodepen/pen/XVrZLB',
    image: require('../assets/images/reversi-app.jpg'),
    description: 'Play a game of reversi.',
    modalDescription: 'Building this simple game was good practice for eventually making more complex apps.',
    modalApp: (
      <div>
        {reversiEmbedded}
      </div>
    ),
    tools: ['html', 'css', 'javascript', 'react', 'react-router', 'nodejs', 'heroku'],
  },
  {
    name: 'Chess',
    link: 'https://codepen.io/hbellatcodepen/pen/GxqmaJ',
    image: require('../assets/images/chess-app.jpg'),
    description: 'Play a game of chess.',
    modalDescription: 'A bit more complex than reversi. Programming all the rules for piece movement, check, etc. was a lot of fun.',
    modalApp: (
      <div>
        {chessEmbedded}
      </div>
    ),
    tools: ['html', 'css', 'javascript', 'react', 'react-router', 'nodejs', 'heroku'],
  },
]

export {
  webApps,
  mobileApps,
  codePens
}