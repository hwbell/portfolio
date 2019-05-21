import React from 'react';

// styling
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';

// animation
import posed from 'react-pose';

const Div = posed.div({
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  }
});

class PdfViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 
    };
  }

  componentDidMount() {
    //console.log("mounted");
  }

  render() {

    let embedStyle = {
      width: this.props.width,
      height: this.props.height,
    };

    return (
      <Div className="container" style={styles.main}>
        <embed src={`https://drive.google.com/viewerng/viewer?embedded=true&url=${this.props.url}`}
        style={embedStyle}></embed>
      </Div>
    );
  }
}

const styles = {
  main: {
    marginTop: '3vh',
    width: '100%',
    maxWidth: `800px`
  },
  
}

export default PdfViewer;
