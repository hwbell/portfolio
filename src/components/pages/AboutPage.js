import React, { Component } from 'react';

// styling
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';
import posed, { PoseGroup } from 'react-pose';

// image
import ProfilePic from '../../assets/images/profile-pic.jpg';

// components
const Container = posed.div({
  enter: { staggerChildren: 50 },
  exit: { staggerChildren: 50, staggerDirection: -1 }
});

const P = posed.p({
  enter: { x: 0, opacity: 1 },
  exit: { x: 10, opacity: 0 }
});

const Div = posed.p({
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

        <img src={ProfilePic} className="profile-pic"/>

        <P className="" style={styles.greeting}>
          Nice to meet you!
        </P>

        <P className="" style={styles.paragraph}>
          For the past 8 years I have been a research biologist in the 
          fields of <a target="#blank" href="https://en.wikipedia.org/wiki/Molecular_biology">molecular</a> & <a target="#blank" href="https://en.wikipedia.org/wiki/Cell_biology">cell biology</a>, <a target="#blank" href="https://en.wikipedia.org/wiki/Neuroscience">neuroscience</a>, <a target="#blank" href="https://en.wikipedia.org/wiki/Immunology">immunology</a> and <a target="#blank" href="https://en.wikipedia.org/wiki/Stem_cell">stem cell biology</a>. I've always enjoyed being an investigator 
          of sorts and solving problems in creative ways. Since learning how to program and develop web 
          applications, my interests have shifted completely to the world of web 
          development. I truly love the never-ending puzzle of creating the best
          user experience with the highest functionality. 
        </P>

      </Container>
    );
  }
}

export default HomePage;

const styles = {
  greeting: {
    fontSize: 28,
    margin: 15
  },
  paragraph: {
    fontSize: 18,
    width: '100%'
  },
  
}