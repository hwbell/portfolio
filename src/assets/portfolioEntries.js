import React from 'react';

const mobileApps = [
  {
    name: 'Colorado Daily Info',
    link: '',
    image: '',
    description: '',
  },
  {
    name: 'Flight Attendant Lung Health',
    link: 'https://expo.io/@hbell3xp0/snack-HJm8znJUX',
    image: require('../assets/images/famri-app.jpg'),
    description: '',
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
    tools: ['html', 'css', 'javascript', 'react', 'react-router', 'nodejs', 'heroku',]
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

const codePens = [
  {
    name: 'Reversi',
    image: require('../assets/images/reversi-app.jpg'),
    description: 'Play a game of reversi.',
    modalDescription: 'Building this simple game was good practice for eventually making more complex apps.',
    modalBG: (
      <div>
        <p class="codepen" data-height="935" data-theme-id="0" data-default-tab="result" data-user="hbellatcodepen" data-slug-hash="XVrZLB" style="height: 935px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Simple Reversi Game">
          <span>See the Pen <a href="https://codepen.io/hbellatcodepen/pen/XVrZLB/">
            Simple Reversi Game</a> by Harold Bell (<a href="https://codepen.io/hbellatcodepen">@hbellatcodepen</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
        </p>
        <script async src="https://static.codepen.io/assets/embed/ei.js"></script>
      </div>
    ),
    tools: '',
  },
  {
    name: 'Chess',
    image: require('../assets/images/chess-app.jpg'),
    description: 'Play a game of chess.',
    modalDescription: 'A bit more complex than reversi. Programming all the rules for piece movement, check, etc. was a lot of fun.',
    modalBG: (
      <div>
        <p class="codepen" data-height="719" data-theme-id="0" data-default-tab="result" data-user="hbellatcodepen" data-slug-hash="GxqmaJ" style="height: 719px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Chess Game">
          <span>See the Pen <a href="https://codepen.io/hbellatcodepen/pen/GxqmaJ/">
            Chess Game</a> by Harold Bell (<a href="https://codepen.io/hbellatcodepen">@hbellatcodepen</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
        </p>
        <script async src="https://static.codepen.io/assets/embed/ei.js"></script>
      </div>
    ),
    tools: '',
  },
]

export {
  webApps,
  mobileApps,
  codePens
}