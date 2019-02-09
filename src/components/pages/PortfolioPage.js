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

const image = require('../../assets/images/chess-app.jpg');


class PortfolioPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    };
    this.hover = this.hover.bind(this);
  }

  hover() {
    //
  }

  render() {
    let cardHolderClass = "col-12 col-sm-6 col-lg-4 px-0";
    return (
      <Container className="Center container">

        <P className="" style={styles.name}>
          Portfolio
        </P>

        <P className="" style={styles.paragraph}>
          Take a look at some projects I have created
        </P>

        <div className="row" style={styles.cardscontainer}>

          {/* map through apps and make a card for each, with the props from portfolioEntries.js */}
          {webApps.map((app, i) => {
            return (
              <div key={i} style={styles.cardholder}
                className={cardHolderClass}>
                <CodePenCard 
                  {...app}
                />
              </div>
            )
          })}
        </div>

      </Container>
    );
  }
}

export default PortfolioPage;

const styles = {
  name: {
    fontSize: 28,
    margin: 40,
  },
  paragraph: {
    fontSize: 18,
    width: '60%,'
  },
  cardscontainer: {
    width: '100%',
    marginBottom: 80,
  },
  cardholder: {
    // margin: 'auto'
    // maxWidth: 300,
  }
}