import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';

// animation
import posed, { PoseGroup } from 'react-pose';

// components
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Container = posed.div({
  enter: { staggerChildren: 50 },
  exit: { staggerChildren: 50, staggerDirection: -1 }
});

const P = posed.p({
  enter: { x: 0, opacity: 1 },
  exit: { x: 10, opacity: 0 }
});

const Div = posed.div({
  enter: { x: 0, opacity: 1 },
  exit: { x: 10, opacity: 0 }
});

const Hr = posed.hr({
  enter: { x: 0, opacity: 1 },
  exit: { x: 10, opacity: 0 }
})

class ResumePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numPages: null,
      pageNumber: 1,
    }
    this.onDocumentLoadSuccess = this.onDocumentLoadSuccess.bind(this);
  }

  componentDidMount() {
    // 600ms seems to be right for the pose animations between screens, so this
    // will happen when the screen is blank, eliminating choppy animation
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 600)
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {

    return (
      <Container className="container" style={styles.main}>
        <embed src="https://drive.google.com/viewerng/
viewer?embedded=true&url=https://s3.amazonaws.com/hb-portfolio-assets/Harold+Bell+Resume.pdf" width="100%" height="600px"></embed>


      </Container>
    );
  }
}

export default ResumePage;

const styles = {
  main: {
    // paddingTop: 50,
    paddingBottom: 80,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    // width: '80%',
    fontSize: 30,
    marginTop: 35,
    fontWeight: 'bold'
  },
  subTitle: {
    width: '80%',
    textAlign: 'left',
    fontSize: 'calc(18px + 1vw)',

  },
  textContainer: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  paragraph: {
    fontSize: 18,
    // width: '60%,'
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: 250,
    margin: '25px auto'
  },
  animatedIcon: {
    margin: 8
  },
  link: {
    color: 'black'
  },
  icon: {
    fontSize: 40,
    // color: 'black',
  },
  footer: {
    fontSize: 18,
    fontWeight: 600
  },

}