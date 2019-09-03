import React from 'react';

// information objects for apps shown on portfolio page. information is for the modal displays

// separate by type
const mobileApps = [
  // {
  //   name: 'Denver Mountain Daily',
  //   link: 'https://expo.io/@hbell3xp0/colorado-daily-info',
  //   image: require('../assets/images/colorado-daily-info.png'),
  //   description: 'A useful mobile app for any enthusiastic skier living in Denver. Check the weather, recent snowfall, & traffic to the mountains.',
  //   modalDescription: `I made this app to gather some basic information on recent snowfall, 
  //     weather in the city and in the mountains, and traffic on the way to the mountains (a major 
  //     issue for us Denverites). I used darksky.net's API for the weather info. For snow and traffic 
  //     data, I used the node.js puppeteer library to scrape information from several sources, as there
  //     wasn't a suitable API available. Data was stored on an Express.js back-end for the mobile app.`,
  //   modalBG: '',
  //   tools: ['html', 'css', 'javascript', 'react native', 'node.js', 'express.js', 'puppeteer.js', 'git', 'heroku'],
  // },
  {
    name: 'Flight Attendant Lung Health',
    link: 'https://play.google.com/store/apps/details?id=com.falunghealth.cu',
    image: require('../assets/images/famri.jpg'),
    description: 'An information & recruitment tool for a research study at CU Anschutz Medical Campus.',
    modalDescription: `I made this app for the lab I worked in at the University of Colorado. It is designed 
      as a resource for people who may be interested in participating in the study. Users 
      may read some basic information about the study itself, 
      watch educational videos, and contact the researchers to find out more about participation.
      Assets such as videos and pdfs were hosted on an AWS S3 bucket and requests handled by a 
      node.js backend.`,
    modalBG: '',
    tools: ['html', 'css', 'javascript', 'react native', 'node.js', 'express.js', 'git', 'heroku'],
  }
]

const webApps = [
  {
    name: 'PubMed Portal',
    link: 'https://pub-med-app.herokuapp.com/',
    image: require('../assets/images/pub-med.jpg'),
    description: 'An interface built around the scientific literature that PubMed Central Europe provides to the public.',
    modalDescription: `As a scientist, I always wanted to make an interface for literature mining that allows researchers to
    gather resources quickly and connect with other researchers. This app provides a fast and efficient way for scientists to
    keep save and export a record of their literature searches, and gives researchers a public forum to discuss publications
    or other topics. Users can easily make a user account and start saving collections or posting threads! This app is fully 
    integrated with a node.js backend using mongoDB to save and access information for each user.`,
    modalBG: '',
    tools: ['html', 'css', 'sass', 'bootstrap', 'javascript', 'react.js', 'node.js', 'express.js', 'mongoDB', 'git', 'heroku']
  },
  {
    name: 'World Weather Map',
    link: 'https://hb-world-weather-map.herokuapp.com/',
    image: require('../assets/images/world-weather-map.jpg'),
    description: 'Explore the weather across the world using a map-based application.',
    modalDescription: `This app was made using the amazing utility of Mapbox. Click anywhere on the map
    to get the current, hourly, and daily weather forecast. Weather information was fetched from darksky.net's
    API and routed through a node.js backend. If you are making a map-based app, try Mapbox. Their 
    javascript library mapboxgl is really powerful.`,
    modalBG: '',
    tools: ['html', 'css', 'bootstrap', 'javascript', 'react.js', 'node.js', 'express.js', 'git', 'heroku', 'mapbox', 'darksky']
  },
  {
    name: 'Apple Music',
    link: 'https://hb-music-app.herokuapp.com/',
    image: require('../assets/images/apple-music-app.jpg'),
    description: 'Check out the Apple Music catalog & preview songs or videos.',
    modalDescription: `This music discovery app was made using the Apple Music API. You can search by anything - song, artist,
    album, whatever you like. You can find just about anything - there are over 50,000,000 songs in the catalog! You can also 
    take a look at what is currently trending on the platform.`,
    modalBG: '',
    tools: ['html', 'css', 'bootstrap', 'javascript', 'react.js', 'git', 'heroku']
  },
  {
    name: 'Wiki Viewer',
    link: 'https://wiki-bubbles.herokuapp.com/',
    image: require('../assets/images/wiki-bubbles.jpg'),
    description: `Search the free encylopedia & see the most recent data on trending pages, 
    views by country, and the most active editors.`,
    modalDescription: `I made this wikipedia viewer for users to explore some information about the encyclopedia. Using 
    this app you can see the top results of your search, and explore how a page's popularity has changed over time. Also 
    available is data on wikipedia activity across the world and the top editors on the site.
    I used Google's API to display some popular images of searches.`,
    modalBG: '',
    tools: ['html', 'css', 'bootstrap', 'javascript', 'react.js', 'node.js', 'git', 'heroku']
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
    name: 'Google Library',
    link: 'https://hb-library-app.herokuapp.com/',
    image: require('../assets/images/google-library-app.jpg'),
    description: 'Create a reading list with the books made digitally available by the Google Books project.',
    modalDescription: `Browse the incredible digital repository of Google Books! You can search for books, add them to your 
    reading list, and edit the list however you like. This app was made using the public Google Books API. It was also my first 
    app built with Vue.js, a newer UI framework and an alternative to React.js. I think I still prefer React, but Vue also has its strong points
    and I would definitely use it again.`,
    modalBG: '',
    tools: ['html', 'css', 'bootstrap', 'javascript', 'vue.js', 'git', 'heroku']
  },
  {
    name: 'Market Monitor',
    link: 'https://market-monitor-hb.herokuapp.com',
    image: require('../assets/images/market-monitor.jpg'),
    description: 'Get real-time stock market & currency exchange information.',
    modalDescription: `Using Alpha Vantage's free api, I built an app that gives real-time information
      for worldwide markets and currencies. Data can be visualized in the long or short term to see the 
      performance of an equity over time.`,
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
      Camp. See if you can slay the dragon! Tip: collect lots of hearts.`,
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
    description: `Play a game of reversi, known to many as "Othello". I loved this game as a kid, and it was 
    fun to recreate with code.`,
    modalDescription: `Building this game was good practice for eventually making more complex apps. The rules 
      for capture are very simple compared to Go or Chess, and the board is very small. Even so, there is plenty 
      of logic to take into account.`,
    modalApp: (
      <div>
        {reversiEmbedded}
      </div>
    ),
    tools: ['html', 'css', 'bootstrap', 'javascript', 'jQuery'],
  },
  // {
  //   name: 'Go',
  //   link: 'https://codepen.io/hbellatcodepen/pen/OajrmP',
  //   image: require('../assets/images/baduk-app.jpg'),
  //   description: 'Play a game of Go, the oldest strategy game there is & a frontier in artificial intelligence.',
  //   modalDescription: `I am obsessed with this game. It has been a passion of mine for quite some time. There are 
  //     many useful apps for Go in existence, but I wanted to build one for myself with complete logic for legal 
  //     moves and captures. If you've never played, try it out! Read more about the rules on the CodePen.`,
  //   modalApp: (
  //     <div>
  //       {reversiEmbedded}
  //     </div>
  //   ),
  //   tools: ['html', 'css', 'bootstrap', 'javascript', 'jQuery'],
  // },
  
  // {
  //   name: 'Chess',
  //   link: 'https://codepen.io/hbellatcodepen/pen/GxqmaJ',
  //   image: require('../assets/images/chess-app.jpg'),
  //   description: 'Play a game of chess, the "Royal Game".',
  //   modalDescription: `I am a chess enthusiast, and thought this would be a decent challenge. The basic layout 
  //     of chess is a bit more complex than reversi. Programming all the rules for piece movement, check, etc. 
  //     was a lot of fun.`,
  //   modalApp: (
  //     <div>
  //       {chessEmbedded}
  //     </div>
  //   ),
  //   tools: ['html', 'css', 'bootstrap', 'javascript',],
  // },
  // {
  //   name: 'News Now',
  //   link: 'https://news-now-hb.herokuapp.com/',
  //   image: require('../assets/images/news-now.jpg'),
  //   description: 'Get the news from around the world, searching over 30,000 sources.',
  //   modalDescription: `I made use of newsapi.org's free api to build a news app that gathers articles
  //     from thousands of sources from across the world. The api is great for this reason - you get news from
  //     sources you wouldn't normally come across in the US. Search for anything you'd like to read about.`,
  //   modalBG: '',
  //   tools: ['html', 'css', 'bootstrap', 'javascript', 'react.js', 'react router', 'node.js', 'git', 'heroku']
  // },

  {
    name: 'Simon',
    link: 'https://codepen.io/hbellatcodepen/pen/EWqPWb',
    image: require('../assets/images/simon-app.jpg'),
    description: 'Play Simon. You know, from the 80s?',
    modalDescription: `This was also a Free Code Camp assignment, one of my early front-end projects. It was a quick 
    build and good practice for handling user input. I think small games like these are a great stepping stone in 
    becoming a developer.`,
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