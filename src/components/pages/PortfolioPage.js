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


const cardHolderClass = "col-12 col-sm-6 col-lg-4 px-0";


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
      <Container className="Center container">

          <P className="row" style={styles.title}>
            Portfolio
          </P>

          <P className="row" style={styles.paragraph}>
            Take a look at some projects I have created.
          </P>

        <P className="" style={styles.subtitle}>
          Web
        </P>
        <div className="row" style={styles.cardsContainer}>
          {/* map through apps and make a card for each, with the props from portfolioEntries.js */}
          {this.displayApps(webApps)}
          {this.displayApps(codePens)}
        </div>

        <P className="" style={styles.subtitle}>
          Mobile
        </P>
        <div className="row" style={styles.cardsContainer}>
          {this.displayApps(mobileApps)}
        </div>

      </Container>
    );
  }
}

export default PortfolioPage;

const styles = {
  cardsContainer: {
    // width: '70%',
    margin: '2vh 8vh 10vh 8vh',
  },
  title: {
    fontSize: 28,
    marginTop: 15,
    fontWeight: 'bold'
  },
  subtitle: {
    textAlign: 'left',
    fontSize: 24,
    fontWeight: 'bold'
  },
  paragraph: {
    fontSize: 20,
    marginBottom: 40
    // width: '60%,'
  },
  cardholder: {
    // minWidth: 180
    // margin: 'auto'
    // maxWidth: 300,
  }
}