import React, { Component } from "react";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "../../App.css";

// animation
import posed, { PoseGroup } from "react-pose";

// components
import PdfViewer from "../elements/PdfViewer";
import PageTitle from "../elements/PageTitle";
import CareerPath from '../elements/CareerPath/CareerPath';

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

class ResumePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showWarning: true,
      numPages: null,
      pageNumber: 1,
      showResume: false,
      buttonMessage: "See my Resume",
    };
    this.onDocumentLoadSuccess = this.onDocumentLoadSuccess.bind(this);
  }

  componentDidMount() {
    // 600ms seems to be right for the pose animations between screens, so this
    // will happen when the screen is blank, eliminating choppy animation
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 600);

    // setTimeout(() => {
    //   this.setState({
    //     showWarning: false,
    //   });
    // }, 5000);
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  renderDocument() {
    if (!this.state.showResume) {
      return (
        <CareerPath />
        // <img
        //   src={require("../../assets/images/careerpath.png")}
        //   alt="career path picture"
        //   style={{ width: "100%", borderRadius: "30px" }}
        // />
      );
    } else {
      return (
        <PdfViewer
          height={"90vh"}
          width={"100%"}
          url={
            "https://s3.amazonaws.com/hb-portfolio-assets/Harold+Bell+Resume.pdf"
          }
        />
      );
    }
  }

  toggleDocumentToShow() {
    let newMessage;
    if (this.state.buttonMessage == "See my Resume") {
      newMessage = "See my Career Path";
    } else {
      newMessage = "See my Resume";
    }
    this.setState({
      showResume: !this.state.showResume,
      buttonMessage: newMessage,
    });
  }

  render() {
    return (
      <Container className="" style={styles.main}>
        <PageTitle
          title={"My Career Path and Resume"}
          subtitle={"Check out my skills and experience"}
          description={`Below you can see my career path from science to software, as well as my current Resume. Just click the button below to switch between the two.`}
        />

        <p style={{fontSize: '14pt'}}>The path below highlights the major points in my career. I've done other things along the way, but the path from science to software is the major theme in my professional journey. Click on any node for more information!</p>

        <div className="left-all-row" style={{ width: "100%", margin: '20px 0' }}>
          <Button color="primary" onClick={() => { this.toggleDocumentToShow() }}>{this.state.buttonMessage}</Button>
        </div>

        {/* <Fade style={styles.warning} in={this.state.showWarning}>
          If you don't see a pdf below, please try refreshing the page!
        </Fade> */}
        <div className="left-all-row" style={{ width: "100%", margin: '20px 0' }}>
          {this.renderDocument()}
        </div>
      </Container>
    );
  }
}

export default ResumePage;

const styles = {
  main: {
    padding: "10vh 0",
    position: "relative",
  },

  warning: {
    margin: 0,
    padding: 0,
    color: "rgb(19, 1, 100)",
  },
  description: {
    maxWidth: "700px",
  },
};
