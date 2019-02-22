import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import posed, { PoseGroup } from 'react-pose';
import { truncate } from 'fs';

// this will apply a stagger to whatever animation is specified for the child
// components
const Container = posed.div({
  enter: { staggerChildren: 50 },
  exit: { staggerChildren: 50, staggerDirection: -1 }
});

const P = posed.p({
  enter: { x: 0, opacity: 1 },
  exit: { x: -100, opacity: 0 }
});

const Div = posed.div({
  enter: { x: 0, opacity: 1 },
  exit: { x: -100, opacity: 0 }
});

const initialState = {
  bioBackground: false,
  devBackground: false,
  textColor: 'black',
  fontWeight: 600,
  contentBackground: 'none',
  boxShadow: 'none'
}

const dnaHoverState = {
  bioBackground: true,
  devBackground: false,
  textColor: 'whitesmoke',
  contentBackground: 'rgba(0,0,0,0.2)',
  // boxShadow: '5px 5px 5px 15px rgba(0,0,0,0.25)'
}

const laptopHoverState = {
  bioBackground: false,
  devBackground: true,
  textColor: 'whitesmoke',
  contentBackground: 'rgba(0,0,0,0.5)',
  // boxShadow: '5px 5px 5px 15px rgba(0,0,0,0.5)'
}

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.onHoverDna = this.onHoverDna.bind(this);
    this.onHoverLaptop = this.onHoverLaptop.bind(this);
    this.onExitHover = this.onExitHover.bind(this);
  }

  onHoverDna() {
    console.log('firing on hover')
    this.setState(dnaHoverState);
    
  }

  onHoverLaptop () {
    console.log('firing on hover')
    this.setState(laptopHoverState);
  }

  onExitHover() {
    console.log('firing on exit')
    this.setState(initialState)
  }

  render() {
    let containerStyle = {
      width: '40%',
      // minHeight: '68vh',
      paddingTop: '20vh',
      paddingBottom: 80,
      minWidth: 350,
      color: this.state.textColor,
      fontWeight: this.state.fontWeight,
    }
    let contentholderStyle = {
      marginBottom: 20,
      background: this.state.contentBackground,
      borderRadius: 50,
      boxShadow: this.state.boxShadow
    }
    return (

      <Container className="container" style={containerStyle}>
        {/* This ReactCSSTransitionGroup is the backgrounds toggle */}
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {this.state.bioBackground && <div className="biologist-bg"></div>}

          {this.state.devBackground && <div className="developer-bg"></div>}

        </ReactCSSTransitionGroup>


        <div className="home-page-content container" style={contentholderStyle}
          onMouseLeave={this.onExitHover}>

          <P className="text-center" style={styles.name}>Hi, I'm Harry</P>

          <Div className="row" style={styles.iconRow}>

            <div className="col" style={styles.iconHolder}
              onMouseOver={this.onHoverDna}>
              {/* onMouseLeave={this.onExitHover} */}

              <P style={styles.icontext}>biologist</P>
              <i className="fa fa-dna fa-gradient-left grow" style={styles.image}></i>
            </div>

            <div className="col" style={styles.iconHolder}>
              <i className="fas fa-random flip-top" style={styles.icon}></i>
            </div>

            <div className="col" style={styles.iconHolder}
              onMouseOver={this.onHoverLaptop}>
              {/* onMouseLeave={this.onExitHover} */}

              <P style={styles.icontext}>developer</P>
              <i className="fa fa-laptop fa-gradient-right grow" style={styles.image}></i>
            </div>

          </Div>

          <div className="row" style={styles.description}>
            <P>I love creating and developing full stack web & mobile apps.</P>
          </div>
        </div>
      </Container>
    );
  }
}

export default HomePage;

const styles = {
  iconRow: {
    width: 250,
    margin: 'auto auto',
  },
  image: {
    fontSize: 45,
  },
  name: {
    fontSize: 25,
    marginTop: 20
  },
  iconHolder: {
    width: 40,
    margin: 'auto auto'
  },
  icontext: {
    fontSize: 20,
  },
  icon: {
    fontWeight: 'bolder',
    color: '#01a6d8',//#5C6BC0
    marginTop: 35,
    fontSize: 24
  },

  description: {
    fontSize: 18,
    margin: 10,
  },
}