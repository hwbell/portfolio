import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
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

  componentDidMount () {
    // 600ms seems to be right for the pose animations between screens, so this
    // will happen when the screen is blank, eliminating choppy animation
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 600 )
  }

  onHoverDna() {
    console.log('firing on hover')
    this.setState(dnaHoverState);

  }

  onHoverLaptop() {
    console.log('firing on hover')
    this.setState(laptopHoverState);
  }

  onExitHover() {
    console.log('firing on exit')
    this.setState(initialState)
  }

  render() {
    let containerStyle = {
      // maxWidth: '350px',
      // minWidth: '220px',
      // minHeight: '68vh',
      paddingTop: '20vh',
      paddingBottom: 80,
      color: this.state.textColor,
      fontWeight: this.state.fontWeight,
    }

    return (

      <Container className="container home-page-content" style={containerStyle}>
        {/* This ReactCSSTransitionGroup is the backgrounds toggle */}
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {this.state.bioBackground && <div className="biologist-bg"></div>}

          {this.state.devBackground && <div className="developer-bg"></div>}

          {/* maybe add background animation? */}
          {/* <div className="animation-bg"></div> */} 

        </ReactCSSTransitionGroup>


        <Div className="" style={styles.contentholder}
          onMouseLeave={this.onExitHover}>

          <P className="text-center" style={styles.name}>Hi, I'm Harry</P>

          <Div className="text-center row" style={styles.iconRow}>

            <div className="col padding-0" style={styles.iconHolder}
              onMouseOver={this.onHoverDna}>
              {/* onMouseLeave={this.onExitHover} */}

              <P className="" style={styles.icontext}>biologist</P>
              <i className="fa fa-dna fa-gradient-left grow" style={styles.largeIcon}></i>
            </div>

            <div className="col padding-0" style={styles.iconHolder}>
              <i className="fas fa-random flip-top" style={styles.icon}></i>
            </div>

            <div className="col padding-0" style={styles.iconHolder}
              onMouseOver={this.onHoverLaptop}>
              {/* onMouseLeave={this.onExitHover} */}

              <P className="" style={styles.icontext}>developer</P>
              <i className="fa fa-laptop fa-gradient-right grow" style={styles.largeIcon}></i>
            </div>

          </Div>

          <Div className="row" style={styles.description}>
            <P className="col">I love creating & developing full stack web & mobile apps.</P>
          </Div>
        </Div>

      </Container>
    );
  }
}

export default HomePage;

const styles = {
  contentholder: {
    margin: 20,
  },
  iconRow: {
    width: '50%',
    minWidth: 280,
    margin: 'auto auto',
  },
  name: {
    fontSize: 30,
    margin: '4vh 0vh'
  },
  iconHolder: {
    // width: '30%',
    // margin: 'auto auto'
  },
  icontext: {
    fontSize: 18,
    fontWeight: 'lighter'
  },
  icon: {
    fontWeight: 'bolder',
    color: '#01a6d8',//#5C6BC0
    marginTop: '35px',
    fontSize: 25
  },
  largeIcon: {
    fontSize: 55,
    margin: '5px 0px 5px 0px',
  },
  description: {
    // textAlign: 'left',
    margin: 'auto auto',
    fontSize: 20,
    fontWeight: 'lighter',
    marginTop: '4vh',
    textAlign: 'left'
  },
}