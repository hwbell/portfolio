import React from 'react';

// information objects for apps shown on portfolio page. information is for the modal displays

// separate by type
const mobileApps = [
  {
    name: 'Colorado Daily Info',
    link: 'https://expo.io/@hbell3xp0/colorado-daily-info',
    image: require('../assets/images/colorado-daily-info.png'),
    description: 'A useful mobile app for any enthusiastic skier living in Denver. Check the weather, recent snowfall, & traffic to the mountains.',
    modalDescription: `I made this app to gather some basic information on recent snowfall, 
      weather in the city and in the mountains, and traffic on the way to the mountains (a major 
      issue for us Denverites). I used darksky.net's API for the weather info. For snow and traffic 
      data, I used the node.js puppeteer library to scrape information from several sources, as there
      wasn't a suitable API available. Data was stored on an Express.js back-end for the mobile app.`,
    modalBG: '',
    tools: ['html', 'css', 'javascript', 'react native', 'node.js', 'puppeteer', 'git', 'heroku'],
  },
  {
    name: 'Flight Attendant Lung Health',
    link: 'https://expo.io/@hbell3xp0/snack-HJm8znJUX',
    image: require('../assets/images/famri.jpg'),
    description: 'An information & recruitment tool for a research study at CU Denver.',
    modalDescription: `I made this app for the lab I work in at CU Denver. It is designed 
      as a resource for people who may be interested in participating in the study. Users 
      may read some background information and basic information about the study itself, 
      watch educational videos, and contact the researchers to find out more about participation.
      Assets such as videos and pdfs were hosted on an AWS S3 bucket and requests handled by a 
      node.js backend.`,
    modalBG: '',
    tools: ['html', 'css', 'javascript', 'react native', 'node.js', 'git', 'heroku'],
  }
]

const webApps = [
  {
    name: 'Wiki Viewer',
    link: 'https://wiki-bubbles.herokuapp.com/',
    image: require('../assets/images/wiki-bubbles.jpg'),
    description: 'Search Wikipedia & see page view data & the trending pages of the day.',
    modalDescription: `I made this wikipedia viewer to make the free encyclopedia more user-friendly. I've
    always thought it was frustrating to be brought straight to the top search result when searching a keyword 
    on the Wikipedia website. Using this app you can see the top results of your search by relevance, and explore how a
    page's popularity has changed over time. I've also made use of Google's API to display some popular images of the 
    search.`,
    modalBG: '',
    tools: ['html', 'css', 'bootstrap', 'javascript', 'react.js', 'node.js', 'git', 'heroku']
  },
  {
    name: 'StoxFox',
    link: 'https://stox-fox.herokuapp.com',
    image: require('../assets/images/stox-fox.jpg'),
    description: 'Get real-time stock market & currency exchange information.',
    modalDescription: `Using Alpha Vantage's free api, I built an app that gives real-time information
      for worlwide markets and currencies. Data can be visualized in the long or short term to see the 
      performance of an equity over time.`,
    modalBG: '',
    tools: ['html', 'css', 'bootstrap', 'javascript', 'react.js', 'react router', 'node.js', 'git', 'heroku']
  },
  {
    name: 'News Now',
    link: 'https://news-now-hb.herokuapp.com/',
    image: require('../assets/images/news-now.jpg'),
    description: 'Get the news from around the world, searching over 30,000 sources.',
    modalDescription: `I made use of newsapi.org's free api to build a news app that gathers articles
      from thousands of sources from across the world. The api is great for this reason - you get news from
      sources you wouldn't normally come across in the US. Search for anything you'd like to read about.`,
    modalBG: '',
    tools: ['html', 'css', 'bootstrap', 'javascript', 'react.js', 'react router', 'node.js', 'git', 'heroku']
  },
  {
    name: 'Tetris',
    link: 'https://stark-waters-61663.herokuapp.com/',
    image: require('../assets/images/tetris-app.jpg'),
    description: 'A full stack Tetris app built from scratch with react.js & node.js.',
    modalDescription: `I built this tetris game with react.js and a node.js backend 
      for high scores. For the game itself I used HTML canvas without any third-party
      libraries. See if you can top the leaderboard!`,
    modalBG: '',
    tools: ['html', 'css', 'bootstrap', 'javascript', 'react.js', 'react router', 'node.js', 'git', 'heroku']
  },
  {
    name: "Conway's Game of Life",
    link: 'https://conways-game-of-life-hb.herokuapp.com/',
    image: require('../assets/images/game-of-life-app.jpg'),
    description: 'A rite of passage for any developer & a classic in mathematics.',
    modalDescription: `This app was one of my first experiences using react, originally made on codepen. This 
      was a great introduction to managing state in react and handling game logic with an object-oriented approach.
      I took the codepen I made and transferred the code to create-react-app structure, and deployed it to 
      heroku.`,
    modalBG: '',
    tools: ['html', 'css', 'bootstrap', 'javascript', 'react.js', 'node.js', 'git', 'heroku']
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
    name: 'Rogue-like Dungeon Crawler',
    link: 'https://codepen.io/hbellatcodepen/pen/PjRdrG',
    image: require('../assets/images/dungeon-crawler-app.jpg'),
    description: `I made a dungeon crawler game for an assignment through Free Code 
      Camp.`,
    modalDescription: `This was one of my initial experiences using react, and it made a lasting impression.
    React is what I primarily use for front-end development now. A game that holds different types of 
    ever changing information is a great example of why react's state management is so useful.`,
    modalApp: (
      <div>
        {reversiEmbedded}
      </div>
    ),
    tools: ['html', 'css', 'bootstrap', 'javascript', 'react.js'],
  },
  {
    name: 'Reversi',
    link: 'https://codepen.io/hbellatcodepen/pen/XVrZLB',
    image: require('../assets/images/reversi-app.jpg'),
    description: 'Play a game of reversi, known to many as "Othello".',
    modalDescription: `Building this game was good practice for eventually making
      more complex apps. The rules for capture are very simple compared to Go or Chess.`,
    modalApp: (
      <div>
        {reversiEmbedded}
      </div>
    ),
    tools: ['html', 'css', 'bootstrap', 'javascript', 'jQuery'],
  },
  {
    name: 'Go',
    link: 'https://codepen.io/hbellatcodepen/pen/OajrmP',
    image: require('../assets/images/baduk-app.jpg'),
    description: 'Play a game of Go, the oldest strategy game there is & a frontier in artificial intelligence.',
    modalDescription: `I am obsessed with this game. It has been a passion of mine 
      for quite some time. There are many useful apps for Go in existence, but I 
      thought I would try and just build a board with complete logic for legal 
      moves and captures. Read more about the rules on the CodePen.`,
    modalApp: (
      <div>
        {reversiEmbedded}
      </div>
    ),
    tools: ['html', 'css', 'bootstrap', 'javascript', 'jQuery'],
  },
  
  {
    name: 'Chess',
    link: 'https://codepen.io/hbellatcodepen/pen/GxqmaJ',
    image: require('../assets/images/chess-app.jpg'),
    description: 'Play a game of chess, the "Royal Game".',
    modalDescription: `A bit more complex than reversi or Go. Programming all the rules for 
      piece movement, check, etc. was a lot of fun. I am a chess enthusiast, and thought this
      would be a decent challenge.`,
    modalApp: (
      <div>
        {chessEmbedded}
      </div>
    ),
    tools: ['html', 'css', 'bootstrap', 'javascript',],
  },

  {
    name: 'Simon',
    link: 'https://codepen.io/hbellatcodepen/pen/EWqPWb',
    image: require('../assets/images/simon-app.jpg'),
    description: 'Play Simon. You know, from the 80s?',
    modalDescription: `This was also a Free Code Camp assignment, one of my early 
      front-end projects. It was a quick build and good practice for handling user input.`,
    modalApp: (
      <div>
        {chessEmbedded}
      </div>
    ),
    tools: ['html', 'css', 'bootstrap', 'javascript', 'jQuery'],
  },
]

export {
  webApps,
  mobileApps,
  codePens
}