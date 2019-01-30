import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';

import posed, { PoseGroup } from 'react-pose';

const Container = posed.div({
  enter: { staggerChildren: 50 },
  exit: { staggerChildren: 50, staggerDirection: -1 }
});

const P = posed.p({
  enter: { x: 0, opacity: 1 },
  exit: { x: 10, opacity: 0 }
});

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    };
    this.hover = this.hover.bind(this);
  }

  hover () {
    //
  }

  render() {
    return (
      <Container className="Center container">

        <P className="" style={styles.name}>
          Nice to meet you!
        </P>

        <P className="" style={styles.paragraph}>
          Since graduating from college, I have been a research biologist in the 
          fields of molecular & cell biology, neuroscience, immunology and stem
          cell biology. I've always enjoyed being an investigator of sorts and solving 
          problems in creative ways. After learing how to program and develop web 
          applications, my interests have shifted completely to the world of web 
          development. I truly love the never-ending puzzle of how to create the best
          user experience with the highest functionality. 
        </P>

      </Container>
    );
  }
}

export default HomePage;

const styles = {
  image: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
  },
  name: {
    fontSize: 28,
    margin: 40,
  },
  paragraph: {
    fontSize: 18,
    width: '70%'
  },
  icon: {
    width: 100,
    height: 100
  },

  circleArrow: {
    color: '#48C9B0',
    width: 68,
    height: 68,
  },
  middleDisplayCol: {
    fontSize: 22,
    margin: 10,
  },
}