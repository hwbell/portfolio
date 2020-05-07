import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.css";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import posed, { PoseGroup } from "react-pose";

import { Button } from "reactstrap";
import { NavLink } from "react-router-dom";

// this will apply a stagger to whatever animation is specified for the child
// components
const Container = posed.div({
  enter: { staggerChildren: 50 },
  exit: { staggerChildren: 50, staggerDirection: -1 }
});

const P = posed.p({
  enter: { x: 0, opacity: 1 },
  exit: { x: 0, opacity: 0 }
});

const Div = posed.div({
  enter: { x: 0, opacity: 1 },
  exit: { x: 0, opacity: 0 }
});

const initialState = {
  bioBackground: false,
  devBackground: false,
  textColor: "black",
  contentBackground: "none",
  boxShadow: "none"
};

const dnaHoverState = {
  bioBackground: true,
  devBackground: false,
  textColor: "whitesmoke",
  contentBackground: "rgba(0,0,0,0.2)"
  // boxShadow: '5px 5px 5px 15px rgba(0,0,0,0.25)'
};

const laptopHoverState = {
  bioBackground: false,
  devBackground: true,
  textColor: "whitesmoke",
  contentBackground: "rgba(0,0,0,0.5)"
  // boxShadow: '5px 5px 5px 15px rgba(0,0,0,0.5)'
};

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.onHoverDna = this.onHoverDna.bind(this);
    this.onHoverLaptop = this.onHoverLaptop.bind(this);
    this.onExitHover = this.onExitHover.bind(this);
  }

  componentDidMount() {
    // 600ms seems to be right for the pose animations between screens, so this
    // will happen when the screen is blank, eliminating choppy animation
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 600);
  }

  onHoverDna() {
    console.log("firing on hover");
    this.setState(dnaHoverState);
  }

  onHoverLaptop() {
    console.log("firing on hover");
    this.setState(laptopHoverState);
  }

  onExitHover() {
    console.log("firing on exit");
    this.setState(initialState);
  }

  render() {
    let containerStyle = {
      // maxWidth: '350px',
      // minWidth: '220px',
      // minHeight: '68vh',
      // width: '100%',
      paddingTop: "10vh",
      paddingBottom: 80,
      // color: this.state.textColor,

      fontWeight: this.state.fontWeight
    };

    return (
      <Container
        className="home-page-container home-page-content"
        style={containerStyle}
      >
        {/* This ReactCSSTransitionGroup is the backgrounds toggle */}
        {/* <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {this.state.bioBackground && <div className="biologist-bg"></div>}

          {this.state.devBackground && <div className="developer-bg"></div>} */}

        {/* maybe add background animation? */}
        {/* <div className="animation-bg"></div> */}

        {/* </ReactCSSTransitionGroup> */}

        <Div
          className="content"
          style={styles.contentholder}
          onMouseLeave={this.onExitHover}
        >
          <Div className="row" style={styles.textHolder}>
            <P style={styles.name}>Hi, I'm Harry</P>

            <Div className="left-all-col col" style={styles.iconRow}>
              <Div className="space-between-row" style={styles.iconRowContent}>
                <div className="center-all-col">
                  <P className="" style={styles.icontext}>
                    biologist
                  </P>
                  <i className="fas fa-dna animation-dna"></i>
                </div>

                <i className="fas fa-random flip-top"></i>

                <div className="center-all-col">
                  <P className="" style={styles.icontext}>
                    developer
                  </P>
                  <i className="fas fa-laptop-code animation-comp"></i>
                </div>
              </Div>
            </Div>
          </Div>

          <Div style={styles.description}>
            <P>{`I'm a scientist who recently made the transition to programming and web development. 
            I love creating web apps that excite and engage users. Creating something entirely 
            new with code is what I enjoy most.`}</P>
            <P>{`Have a look around to see more about me and the work I've done!`}</P>
          </Div>

          <Div>
            <NavLink className="left-all-col" to="about">
              <Button className="home-button">let's go!</Button>
            </NavLink>
          </Div>
        </Div>
      </Container>
    );
  }
}

export default HomePage;

const styles = {
  contentholder: {
    margin: "20px"
  },
  textHolder: {
    textAlign: "left"
  },
  iconRow: {
    // width: "100%",
    // backgroundColor: 'silver',
    height: "100px",
    minWidth: 280,
    margin: "auto auto",
    position: "relative"
  },
  iconRowContent: {
    width: "100%",
    maxWidth: "300px",
    marginTop: "60px"
  },
  name: {
    fontSize: 44,
    padding: "0px", 
    margin: "22px",
    minWidth: "250px",
  },
  iconHolder: {
    // width: '30%',
    // margin: 'auto auto'
  },
  icontext: {
    margin: "10px",
    fontSize: 20
  },
  icon: {
    margin: "10px",
    fontWeight: "bolder"
  },
  largeIcon: {
    fontSize: 55,
    margin: "5px 0px 5px 0px"
  },
  description: {
    margin: "60px 10px 10px 10px",
    fontSize: "18px",
  },
  keyWords: {
    margin: "40px"
  }
};
