import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.css";
import "../../App.css";

import EmailForm from "../elements/EmailForm";

import posed, { PoseGroup } from "react-pose";
import PageTitle from '../elements/PageTitle';

const Container = posed.div({
  enter: { staggerChildren: 50 },
  exit: { staggerChildren: 50, staggerDirection: -1 },
});

const P = posed.p({
  enter: { x: 0, opacity: 1 },
  exit: { x: 0, opacity: 0 },
});

const Div = posed.div({
  enter: { x: 0, opacity: 1 },
  exit: { x: 0, opacity: 0 },
});

const Hr = posed.hr({
  enter: { x: 0, opacity: 1 },
  exit: { x: 0, opacity: 0 },
});

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    };
  }

  componentDidMount() {
    // 600ms seems to be right for the pose animations between screens, so this
    // will happen when the screen is blank, eliminating choppy animation
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 600);
  }

  render() {
    return (
      <Container className="container" style={styles.main}>

        <PageTitle title={"Contact Me"} subtitle={"Get in touch with me to discuss anything at all."} description={`Feel free to contact me with any questions, or maybe a game of chess. 
            Send me a message, or just give me a call. 
            I’m open to discussing any and all ideas for new projects!`}/>
        
       
        <EmailForm />

        <Div style={styles.iconContainer}>
          <div className="animatedIcon" style={styles.animatedIcon}>
            <a
              href="https://github.com/hwbell"
              target="_blank"
              className=""
              style={styles.link}
            >
              <i
                className="fab fa-github blink blink-grey"
                style={styles.icon}
              ></i>
            </a>
          </div>
          <div className="animatedIcon" style={styles.animatedIcon}>
            <a
              href="https://codepen.io/hbellatcodepen/"
              target="_blank"
              className=""
              style={styles.link}
            >
              <i
                className="fab fa-codepen blink blink-orange"
                style={styles.icon}
              ></i>
            </a>
          </div>
          <div className="animatedIcon" style={styles.animatedIcon}>
            <a
              href="https://www.linkedin.com/in/harold-bell-291926180/"
              target="_blank"
              className=""
              style={styles.link}
            >
              <i
                className="fab fa-linkedin blink blink-blue"
                style={styles.icon}
              ></i>
            </a>
          </div>
          <div className="animatedIcon" style={styles.animatedIcon}>
            <a
              href="https://www.facebook.com/profile.php?id=100010514613107"
              target="_blank"
              className=""
              style={styles.link}
            >
              <i
                className="fab fa-facebook-square blink blink-blue"
                style={styles.icon}
              ></i>
            </a>
          </div>
          <div className="animatedIcon" style={styles.animatedIcon}>
            <a
              href="https://www.instagram.com/harrywbell/"
              target="_blank"
              className=""
              style={styles.link}
            >
              <i
                className="fab fa-instagram blink blink-purple"
                style={styles.icon}
              ></i>
            </a>
          </div>
        </Div>

        <Div style={styles.textContainer}>
          <P style={styles.footer}>(978) 810 2236</P>
          <P style={styles.footer}>harold.william.bell@gmail.com</P>
        </Div>
      </Container>
    );
  }
}

export default ContactPage;

const styles = {
  main: {
    // paddingTop: 50,
    paddingBottom: 80,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  
  textContainer: {
    // width: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  paragraph: {
    fontSize: 18,
    // width: '60%,'
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    // width: "80%",
    margin: "25px auto",
  },
  animatedIcon: {
    margin: 8,
  },
  link: {
    color: "black",
  },
  icon: {
    fontSize: 40,
    // color: 'black',
  },
  footer: {
    fontSize: 18,
    fontWeight: 600,
  },
};
