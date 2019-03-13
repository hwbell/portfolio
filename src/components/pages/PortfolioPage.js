import React, { Component } from 'react';

//styling
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';

// animation
import posed from 'react-pose';

// elements
import { FaRandom } from 'react-icons/fa';
import CodePenCard from '../elements/CodePenCard';

// portfolio entries data for each card
import {
  webApps,
  mobileApps,
  codePens
} from '../../assets/portfolioEntries';

const Container = posed.div({
  enter: { staggerChildren: 50 },
  exit: { staggerChildren: 50, staggerDirection: -1 }
});

const P = posed.p({
  enter: { x: 0, opacity: 1 },
  exit: { x: 10, opacity: 0 }
});

const Div = posed.div({
  enter: { x: 0, opacity: 1 },
  exit: { x: 10, opacity: 0 }
});


const cardHolderClass = "col-12 col-md-6 col-lg-4 px-0";


class PortfolioPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    };
    this.displayApps = this.displayApps.bind(this);
  }

  // use this function to display each category of app when selected. types are the
  // imported vars from portfolioEntries.js

  displayApps(appType) {

    return (
      appType.map((app, i) => {
        return (
          <Div key={i} style={styles.cardholder}
            className={cardHolderClass}>
            <CodePenCard
              {...app}
            />
          </Div>
        )
      })
    )
  }

  render() {

    return (
      <Container className="container">
        <Div className="row">
          <P className="col" style={styles.title}>
            My portfolio
          </P>
        </Div>
        <hr />

        <P className="text-center" style={styles.subTitle}>
          Take a look at some projects I have created.
        </P>

        <Div className="row" style={styles.topIconHolder}>
          <Div className="col">
            <P className="row" style={styles.skillTitle}>Learn</P>
            <i className="row shimmer fab fa-leanpub flip-on-start" style={styles.topIcon}></i>
          </Div>
          <Div className="col">
            <P className="row" style={styles.skillTitle}>Code</P>
            <i className="row shimmer fas fa-code flip-on-start" style={styles.topIcon}></i>
          </Div>
          <Div className="col">
            <P className="row" style={styles.skillTitle}>Create</P>
            <i className="row shimmer fas fa-chalkboard-teacher flip-on-start" style={styles.topIcon}></i>
          </Div>

        </Div>

        <hr />
        <P className="" style={styles.appTitle}>
          Web
        </P>

        <div className="row" style={styles.cardsContainer}>
          {/* map through apps and make a card for each, with the props from portfolioEntries.js */}
          {this.displayApps(webApps)}
          {this.displayApps(codePens)}
        </div>

        <hr />
        <P className="" style={styles.appTitle}>
          Mobile
        </P>

        <div className="row" style={styles.cardsContainer}>
          {this.displayApps(mobileApps)}
        </div>

        <div className="" style={styles.paragraphHolder}>
          <div className="" style={styles.paragraph}>
            Check out the code for any of my projects on <a target="#blank" href="https://github.com/hwbell">github.</a>
          </div>

          <div className="" style={styles.paragraph}>
            You can also see more apps & projects I've built on <a target="#blank" href="https://codepen.io/hbellatcodepen/pens/public/2/">codepen.</a>
          </div>
        </div>
      </Container >
    );
  }
}

export default PortfolioPage;

const styles = {
  cardsContainer: {
    // width: '70%',
    margin: '2vh 4vh 2vh 4vh',
  },
  title: {
    // width: '80%',
    fontSize: 30,
    marginTop: 35,
    fontWeight: 'bold'
  },
  subTitle: {
    fontSize: 24,
    margin: 25
  },
  skillTitle: {
    fontSize: 18,
    paddingLeft: 10,
    fontWeight: 'bold'
  },
  topIconHolder: {
    margin: '3vh 0vw'
  },
  topIcon: {
    fontSize: 40,
    marginLeft: '0px'
  },
  appTitle: {
    // width: '80%',
    margin: 30,
    fontSize: 28,
    marginTop: 15,
    fontWeight: 'bold'
  },
  cardholder: {
    // minWidth: 180
    // margin: 'auto'
    // maxWidth: 300,
  },
  paragraphHolder: {
    marginBottom: '14vh'
  },
  paragraph: {
    // paddingTop: 10,
    fontSize: 22,
    width: '100%',
    margin: '4vh',
    // marginBottom: '14vh'
  },
}