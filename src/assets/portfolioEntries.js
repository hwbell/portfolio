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
  //     data, I used the nodejs puppeteer library to scrape information from several sources, as there
  //     wasn't a suitable API available. Data was stored on an Express.js back-end for the mobile app.`,
  //   modalBG: '',
  //   tools: ['html5', 'css3', 'javascript', 'react native', 'nodejs', 'expressjs', 'puppeteer.js', 'git', 'heroku'],
  // },
  {
    name: 'Flight Attendant Lung Health',
    link: 'https://play.google.com/store/apps/details?id=com.falunghealth.cu',
    image: require('../assets/images/famri.png'),
    description: 'An information & recruitment tool for a research study at CU Anschutz Medical Campus.',
    modalDescription: `I made this app for the lab I worked in at the University of Colorado. It is designed 
      as a resource for people who may be interested in participating in the study. Users 
      may read some basic information about the study itself, 
      watch educational videos, and contact the researchers to find out more about participation.
      Assets such as videos and pdfs were hosted on an AWS S3 bucket and requests handled by a 
      nodejs backend.`,
    modalBG: '',
    tools: ['html5', 'css3', 'javascript', 'react native', 'nodejs', 'expressjs', 'git', 'heroku'],
  }
]

const workProjects = [
  {
    name: 'Granicus govMeetings',
    link: 'https://granicus.com/solution/govmeetings/',
    image: require('../assets/images/granicus.png'),
    description: 'Bringing software solutions to public sector clients across the world.',
    modalDescription: `As a member of the Web Design and Technical Services team at Granicus Inc, I was able to enhance and improve
    software customizations for new and exisiting clients. I also particpated in the maintenance of websites and CMS systems to improve user experience and software reliability. I gained valuable technical experience at Granicus while working across various teams and departments to ensure customer success.`,
    modalBG: '',
    tools: ['html5', 'css3', 'javascript', 'php', 'jira'],
    message: 'You can read more about Granicus and the work they do ',
    code: false

  },
  {
    name: 'Data Analysis with MATLAB',
    link: 'https://www.mathworks.com/products/matlab.html',
    image: require('../assets/images/dataanalysis.png'),
    description: 'Transforming experimental image data to meaningful statistics and visual representations.',
    modalDescription: `In the research laboratories I've worked in, I made heavy use of the technical computing language MATLAB for many types of data analysis and representation. I developed many custom tailored scripts and GUI tools for researchers to improve the accuracy and efficiency of their analysis. This was a really useful experience in developing software tools for specific, yet flexible use cases.`,
    modalBG: '',
    tools: ['matlab'],
    message: 'Explore more about MATLAB technical computing software ',
    code: false

  },
]


const webApps = [
  {
    name: 'Vuejs Dashboard',
    repoName:'dash-calculator',
    link: 'https://vue-dashboard-app.herokuapp.com/',
    gitLink: 'https://github.com/hwbell/dash-calculator',
    image: require('../assets/images/vue-dashboard.png'),
    description: 'A dashboard app that makes it easy to check the news, do simple calculations, and time conversions.',
    modalDescription: `Over the last few months, I realized how many times a day I need to make simple conversions that require 
    a calculator, and often a time converter to quickly generate unix timestamps from regular time, and vice versa. I'd been meaning to build 
    something new with Vuejs, and this was a great app to build while reintroducing myself to the framework. The news you see makes use of newsapi.org's 
    free api, which is incredibly useful. The news searches are routed through a node.js server to proxy the requests.`,
    modalBG: '',
    tools: ['html5', 'css3', 'bootstrap', 'javascript', 'vuejs', 'nodejs', 'expressjs', 'git', 'heroku']
  },
  {
    name: 'PubMed Portal',
    repoName:'pub-med-app',
    link: 'https://pub-med-app.herokuapp.com/',
    gitLink: 'https://github.com/hwbell/pub-med-app',
    image: require('../assets/images/pub-med.jpg'),
    description: 'An interface built around the scientific literature that PubMed Central Europe provides to the public.',
    modalDescription: `As a scientist, I always wanted to make an interface for literature mining that allows researchers to
    gather resources quickly and connect with other researchers. This app provides a fast and efficient way for scientists to
    keep save and export a record of their literature searches, and gives researchers a public forum to discuss publications
    or other topics. Users can easily make a user account and start saving collections or posting threads! This app is fully 
    integrated with a nodejs backend using mongoDB to save and access information for each user.`,
    modalBG: '',
    tools: ['html5', 'css3', 'bootstrap', 'javascript', 'reactjs', 'nodejs', 'expressjs', 'mongoDB', 'git', 'heroku']
  },
  {
    name: 'World Weather Map',
    repoName:'weather-world-map',
    gitLink: 'https://github.com/hwbell/weather-world-map',
    link: 'https://hb-world-weather-map.herokuapp.com/',
    image: require('../assets/images/world-weather-map.jpg'),
    description: 'Explore the weather across the world using a map-based application.',
    modalDescription: `This app was made using the amazing utility of Mapbox. Click anywhere on the map
    to get the current, hourly, and daily weather forecast. Weather information was fetched from darksky.net's
    API and routed through a nodejs backend. If you are making a map-based app, try Mapbox. Their 
    javascript library mapboxgl is really powerful.`,
    modalBG: '',
    tools: ['html5', 'css3', 'bootstrap', 'javascript', 'reactjs', 'nodejs', 'expressjs', 'git', 'heroku', 'mapbox', 'darksky']
  },
  {
    name: 'Apple Music',
    repoName: 'music-app',
    link: 'https://hb-music-app.herokuapp.com/',
    gitLink: 'https://github.com/hwbell/music-app',
    image: require('../assets/images/apple-music-app.jpg'),
    description: 'Check out the Apple Music catalog & preview songs or videos.',
    modalDescription: `This music discovery app was made using the Apple Music API. You can search by anything - song, artist,
    album, whatever you like. You can find just about anything - there are over 50,000,000 songs in the catalog! You can also 
    take a look at what is currently trending on the platform.`,
    modalBG: '',
    tools: ['html5', 'css3', 'bootstrap', 'javascript', 'reactjs', 'git', 'heroku']
  },
  {
    name: 'Wiki Viewer',
    repoName: 'wiki-bubbles',
    link: 'https://wiki-bubbles.herokuapp.com/',
    gitLink: 'https://github.com/hwbell/wiki-bubbles',
    image: require('../assets/images/wiki-bubbles.jpg'),
    description: `Search the free encylopedia & see the most recent data on trending pages, 
    views by country, and the most active editors.`,
    modalDescription: `I made this wikipedia viewer for users to explore some information about the encyclopedia. Using 
    this app you can see the top results of your search, and explore how a page's popularity has changed over time. Also 
    available is data on wikipedia activity across the world and the top editors on the site.
    I used Google's API to display some popular images of searches.`,
    modalBG: '',
    tools: ['html5', 'css3', 'bootstrap', 'javascript', 'reactjs', 'nodejs', 'git', 'heroku']
  },
  {
    name: 'Tetris',
    repoName: 'react-tetris-app',
    link: 'https://stark-waters-61663.herokuapp.com/',
    gitLink: 'https://github.com/hwbell/react-tetris-app',
    image: require('../assets/images/tetris-app.jpg'),
    description: 'A full stack Tetris app built from scratch with reactjs & nodejs.',
    modalDescription: `I built this tetris game with reactjs and a nodejs backend 
      for high scores. For the game itself I used HTML canvas without any third-party
      libraries. See if you can top the leaderboard!`,
    modalBG: '',
    tools: ['html5', 'css3', 'bootstrap', 'javascript', 'reactjs', 'nodejs', 'expressjs', 'mongoDB', 'git', 'heroku']
  },
  {
    name: 'Google Library',
    repoName: 'library-app',
    link: 'https://hb-library-app.herokuapp.com/',
    gitLink: 'https://github.com/hwbell/library-app',
    image: require('../assets/images/google-library-app.jpg'),
    description: 'Create a reading list with the books made digitally available by the Google Books project.',
    modalDescription: `Browse the incredible digital repository of Google Books! You can search for books, add them to your 
    reading list, and edit the list however you like. This app was made using the public Google Books API. It was also my first 
    app built with Vue.js, a newer UI framework and an alternative to React.js. I think I still prefer React, but Vue also has its strong points
    and I would definitely use it again.`,
    modalBG: '',
    tools: ['html5', 'css3', 'bootstrap', 'javascript', 'vuejs', 'git', 'heroku']
  },
  // {
  //   name: 'Market Monitor',
  //   link: 'https://market-monitor-hb.herokuapp.com',
  //   gitLink: 'https://github.com/hwbell/stox-fox',
  //   image: require('../assets/images/market-monitor.jpg'),
  //   description: 'Get real-time stock market & currency exchange information.',
  //   modalDescription: `Using Alpha Vantage's free api, I built an app that gives real-time information
  //     for worldwide markets and currencies. Data can be visualized in the long or short term to see the 
  //     performance of an equity over time.`,
  //   modalBG: '',
  //   tools: ['html5', 'css3', 'bootstrap', 'javascript', 'reactjs', 'nodejs', 'git', 'heroku']
  // },
  {
    name: "Conway's Game of Life",
    repoName: 'conways-game-of-life',
    link: 'https://conways-game-of-life-hb.herokuapp.com/',
    gitLink: 'https://github.com/hwbell/conways-game-of-life',
    image: require('../assets/images/game-of-life-app.jpg'),
    description: 'A rite of passage for any developer & a classic in mathematics.',
    modalDescription: `This app was one of my first experiences using react, originally made on codepen. This 
      was a great introduction to managing state in react and handling game logic with an object-oriented approach.
      I took the codepen I made and transferred the code to create-react-app structure, and deployed it to 
      heroku.`,
    modalBG: '',
    tools: ['html5', 'css3', 'bootstrap', 'javascript', 'reactjs', 'nodejs', 'git', 'heroku']
  },
  // {
  //   name: 'News Now',
  //   repoName: 'news-now',
  //   link: 'https://news-now-hb.herokuapp.com/',
  //   image: require('../assets/images/news-now.jpg'),
  //   gitLink: 'https://github.com/hwbell/news-now',
  //   description: 'Get the news from around the world, searching over 30,000 sources.',
  //   modalDescription: `I made use of newsapi.org's free api to build a news app that gathers articles
  //     from thousands of sources from across the world. The api is great for this reason - you get news from
  //     sources you wouldn't normally come across in the US. Search for anything you'd like to read about.`,
  //   modalBG: '',
  //   tools: ['html5', 'css3', 'bootstrap', 'javascript', 'reactjs', 'nodejs', 'git', 'heroku']
  // },
]

// codepens have embedded pen html5 taken from the site's embed tool

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
    ever changing information is a great example of why react's state management is so useful. See if you can slay the dragon!`,
    modalApp: (
      <div>
        {reversiEmbedded}
      </div>
    ),
    tools: ['html5', 'css3', 'bootstrap', 'javascript', 'reactjs'],
    message: 'This app was developed on CodePen. You can see it in action '
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
    tools: ['html5', 'css3', 'bootstrap', 'javascript', 'jQuery'],
    message: 'This app was developed on CodePen. You can see it in action '
  },
  {
    name: 'Go',
    link: 'https://codepen.io/hbellatcodepen/pen/OajrmP',
    image: require('../assets/images/baduk-app.jpg'),
    description: 'Play a game of Go, the oldest strategy game there is & a frontier in artificial intelligence.',
    modalDescription: `I am obsessed with this game. It has been a passion of mine for quite some time. There are 
      many useful apps for Go in existence, but I wanted to build one for myself with complete logic for legal 
      moves and captures. If you've never played, try it out! Read more about the rules on the CodePen.`,
    modalApp: (
      <div>
        {reversiEmbedded}
      </div>
    ),
    tools: ['html5', 'css3', 'bootstrap', 'javascript', 'jQuery'],
    message: 'This app was developed on CodePen. You can see it in action '
  },
  
  {
    name: 'Chess',
    link: 'https://codepen.io/hbellatcodepen/pen/GxqmaJ',
    image: require('../assets/images/chess-app.jpg'),
    description: 'Play a game of chess, the "Royal Game".',
    modalDescription: `I am a chess enthusiast, and thought this would be a decent challenge. The basic layout 
      of chess is a bit more complex than reversi. Programming all the rules for piece movement, check, etc. 
      was a lot of fun.`,
    modalApp: (
      <div>
        {chessEmbedded}
      </div>
    ),
    tools: ['html5', 'css3', 'bootstrap', 'javascript',],
    message: 'This app was developed on CodePen. You can see it in action '
  },

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
    tools: ['html5', 'css3', 'bootstrap', 'javascript', 'jQuery'],
    message: 'This app was developed on CodePen. You can see it in action '
  },
]

const dataApps = [
  {
    name: "D3 Scatterplot",
    link: 'https://codepen.io/hbellatcodepen/pen/BdmbPr',
    image: require('../assets/images/scatter-plot.jpg'),
    description: `A visualization of doping in the Tour de France.`,
    modalDescription: `This scatter plot was made with the D3.js library as a project for Free Code Camp. It is easy to
    see the influence doping has had on record times in the race. Hopefully in another ten years a graph like this will contain
    more blue than red.`,
    modalBG: '',
    tools: ['html5', 'css3', 'javascript', 'D3js'],
    message: 'This app was developed on CodePen. You can see it in action '
  },
  {
    name: "D3 Heat Map",
    link: 'https://codepen.io/hbellatcodepen/pen/WEgNge',
    image: require('../assets/images/bar-chart.jpg'),
    description: 'A visualization of earth surface temperature anomalies.',
    modalDescription: `This heat map was made with the D3.js library as a project for Free Code Camp. Heat maps are a great way
    of showing data such as this. The graph shows an obvious trend visualized by warm and cool colors - the earth has been warming
    over the past 200+ years.`,
    modalBG: '',
    tools: ['html5', 'css3', 'javascript', 'D3js'],
    message: 'This app was developed on CodePen. You can see it in action '
  },
  {
    name: "D3 Map of Asteroid Strikes",
    link: 'https://codepen.io/hbellatcodepen/pen/JOPxeW',
    image: require('../assets/images/world-map.jpg'),
    description: 'A visualization of asteroid strikes on earth.',
    modalDescription: `This world map was made with the D3.js library as a project for Free Code Camp.  It is a little scary to 
    look at, but also pretty interesting! The differences in strikes are represented by color and size on the chart, according to 
    their estimated mass.`,
    modalBG: '',
    tools: ['html5', 'css3', 'javascript', 'D3js'],
    message: 'This app was developed on CodePen. You can see it in action '
  }
]

export {
  workProjects,
  webApps,
  mobileApps,
  codePens,
  dataApps
}