import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';

// animation
import posed, { PoseGroup } from 'react-pose';

// components
import PdfViewer from '../elements/PdfViewer';

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

const Hr = posed.hr({
  enter: { x: 0, opacity: 1 },
  exit: { x: 0, opacity: 0 }
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
      <Container className="" style={styles.main}>

        <P className="" style={styles.title}>
          My Resume
        </P>

        <Hr />

        <P className="" style={styles.subTitle}>
          Check out my skills and experience.
        </P>

        <PdfViewer
          height={'600px'}
          width={'100%'}
          url={'https://s3.amazonaws.com/hb-portfolio-assets/Harold+Bell+Resume.pdf'}
        />


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
    
    fontSize: 30,
    marginTop: 35,
    fontWeight: 'bold'
  },
  subTitle: {
    fontSize: 'calc(16px + 1vw)',
    margin: 25
  },

}