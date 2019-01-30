import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './HomePage.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import posed, { PoseGroup } from 'react-pose';

// this will apply a stagger to whatever animation is specified for the child
// components
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
      backgroundImage: 'none'
    };
    this.onHoverDna = this.onHoverDna.bind(this);
    this.onHoverLaptop = this.onHoverLaptop.bind(this);
    this.onExitHover = this.onExitHover.bind(this);
  }

  onHoverDna() {
    console.log('firing on hover')
    this.setState({
      bioBackground: true
    })
  }

  onHoverLaptop() {
    this.setState({
      devBackground: true
    })
  }

  onExitHover() {
    console.log('firing on exit')
    this.setState({
      bioBackground: false,
      devBackground: false
    })
  }

  render() {
    let containerStyle = {
      minWidth: 400,
      backgroundImage: `url(${this.state.backgroundImage})`
    }
    return (

      <Container className="Center container" style={containerStyle}>
        {/* This ReactCSSTransitionGroup is the backgrounds toggle */}
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {this.state.bioBackground && <div className="biologist-bg"></div>}

          {this.state.devBackground && <div className="developer-bg"></div>}

        </ReactCSSTransitionGroup>

        <P className="" style={styles.name}>
          Hi, I'm Harry
        </P>

        <div className="row" style={styles.contentholder}>

          <div className="col"
            onMouseOver={this.onHoverDna}
            onMouseLeave={this.onExitHover}>

            <P style={styles.icontext}>biologist</P>
            <i className="fa fa-dna fa-gradient-left" style={styles.image}></i>
          </div>

          <div className="col" >
            <i class="fas fa-random" style={styles.icon}></i>
          </div>

          <div className="col"
            onMouseOver={this.onHoverLaptop}
            onMouseLeave={this.onExitHover}>

            <P style={styles.icontext}>developer</P>
            <i className="fa fa-laptop fa-gradient-right" style={styles.image}></i>
          </div>

        </div>

        <div className="row" style={styles.description}>
          <P>I love creating and developing full stack web & mobile apps.</P>
        </div>

      </Container>
    );
  }
}

export default HomePage;

const styles = {
  container: {
    minWidth: 400,

  },
  name: {
    fontSize: 28,
    margin: 40,
  },
  contentholder: {
    marginBottom: 20,
  },
  image: {
    fontSize: 60,
  },
  icon: {
    fontWeight: 'bolder',
    color: '#039BE5',//#5C6BC0
    marginTop: 35,
    width: 20,
    height: 20
  },
  icontext: {
    fontSize: 22
  },
  description: {

    fontSize: 20,
    margin: 10,
  },
}