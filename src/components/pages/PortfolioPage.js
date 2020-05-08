import React, { Component } from "react";

//styling
import "bootstrap/dist/css/bootstrap.css";
import "../../App.css";
import Media from "react-media";
// animation
import posed from "react-pose";

// elements
import PortfolioCard from "../elements/PortfolioCard";
import PageTitle from "../elements/PageTitle";

// portfolio entries data for each card
import {
  webApps,
  workProjects,
  codePens,
  dataApps,
} from "../../assets/portfolioEntries";

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

const cardHolderClass = "col-12";

class PortfolioPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    };
    this.displayApps = this.displayApps.bind(this);
  }

  componentDidMount() {
    // 600ms seems to be right for the pose animations between screens, so this
    // will happen when the screen is blank, eliminating choppy animation
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 600);
  }

  renderTopIcons() {
    // const icons = ['fab fa-leanpub', 'fas fa-code', 'fas fa-chalkboard-teacher'];
    const icons = [
      {
        class: "fab fa-leanpub",
        text: "Learn",
      },
      {
        class: "fas fa-code",
        text: "Code",
      },
      {
        class: "fas fa-chalkboard-teacher",
        text: "Create",
      },
    ];

    return (
      <Div style={styles.topIconHolder} className="center-all-col" >
        <Div className="right-all-row" style={{width: '90%'}}>
          {icons.map((icon, i) => {
            return (
              <Div className="center-top-all-col" style={{ margin: "0 15px" }}>
                <P className="" style={styles.skillTitle}>
                  {icon.text}
                </P>
                <i
                  className={`shimmer fab ${icon.class}`}
                  style={styles.topIcon}
                ></i>
              </Div>
            );
          })}
        </Div>
      </Div>
    );
  }

  // use this function to display each category of app when selected. types are the
  // imported vars from portfolioEntries.js
  displayApps(appType) {
    return appType.map((app, i) => {
      return (
        <Div key={i} style={styles.cardholder} className={cardHolderClass}>
          {/* <CodePenCard
              {...app}
            /> */}

          <PortfolioCard {...app} />
        </Div>
      );
    });
  }

  render() {
    return (
      <Container style={styles.main}>
        <PageTitle
          title={"My Portfolio"}
          subtitle={"Take a look at some projects I've worked on and created."}
          description={
            "Below you can see many examples of my programming and development project over the past few years. Many of the web apps you see below were built to gain experience and exposure to different toolsets. "
          }
          style={{
            width: "100%",
            margin: "0 20px",
          }}
        />

        <Media query="(min-width: 499px)">
          {(matches) => (matches ? this.renderTopIcons() : null)}
        </Media>

        <P className="" style={styles.appTitle}>
          Work Projects
        </P>

        <div className="row" style={styles.cardsContainer}>
          {/* map through apps and make a card for each, with the props from portfolioEntries.js */}
          {this.displayApps(workProjects)}
        </div>

        <Hr style={{width: '100%'}}/>
        <P className="" style={styles.appTitle}>
          Web apps I've built
        </P>

        <div className="row" style={styles.cardsContainer}>
          {/* map through apps and make a card for each, with the props from portfolioEntries.js */}
          {this.displayApps(webApps)}
          {this.displayApps(codePens)}
        </div>

        <Hr style={{width: '100%'}}/>
        <P className="" style={styles.appTitle}>
          Data Visualization
        </P>

        <Div className="row" style={styles.cardsContainer}>
          {this.displayApps(dataApps)}
        </Div>

        <Div className="" style={styles.paragraphHolder}>
          <div className="" style={styles.paragraph}>
            Check out the code for any of my projects on{" "}
            <a target="#blank" href="https://github.com/hwbell">
              github.
            </a>
          </div>

          <div className="" style={styles.paragraph}>
            You can also see more apps & projects I've built on{" "}
            <a
              target="#blank"
              href="https://codepen.io/hbellatcodepen/pens/public/"
            >
              codepen.
            </a>
          </div>
        </Div>
      </Container>
    );
  }
}

export default PortfolioPage;

const styles = {
  main: {
    marginBottom: "10vh",
  },
  cardsContainer: {
    // width: '70%',
    // margin: '2vh 4vh 2vh 4vh',
  },

  skillTitle: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 0,
  },
  topIconHolder: {
    margin: "10px 0",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
  },
  topIcon: {
    fontSize: 40,
    marginLeft: "0px",
  },
  appTitle: {
    // width: '80%',
    margin: '20px 0',
    fontFamily: "Quicksand",
    fontSize: 28,
    // margin: "15px 20px",
    fontWeight: "bold",
  },
  cardholder: {
    // minWidth: 180
    // margin: 'auto'
    // maxWidth: 300,
  },
  paragraphHolder: {
    margin: "0 3vw 14vh 0",
  },
  paragraph: {
    // paddingTop: 10,
    fontSize: "calc(12px + 1vw)",
    width: "100%",
    margin: "4vh",
    // marginBottom: '14vh'
  },
};
