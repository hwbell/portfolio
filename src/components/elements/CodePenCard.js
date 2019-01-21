import React from 'react';

// elements
import { Card, CardImg, CardText, CardImgOverlay, CardTitle } from 'reactstrap';
import ModalButton from './ModalButton';

import backgroundImage from '../../assets/images/chess-app.jpg';

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.onHover = this.onHover.bind(this);
    this.onExit = this.onExit.bind(this);
    this.state = {
      overlay: false
    };
  }

  componentDidMount() {
    //console.log("mounted");
  }

  onHover () {
    this.setState({
      overlay: true
    })
  }

  onExit () {
    this.setState({
      overlay: false
    })
  }

  render() {
    return (
      <div style={styles.main}>
        <Card inverse 
          onMouseOver={this.onHover}
          onMouseLeave={this.onExit}>
          <CardImg 
            style={styles.image} 
            src={require('../../assets/images/chess-app.jpg')} 
            alt="Card image cap" />
          {this.state.overlay ?
            <CardImgOverlay style={styles.overlay}>
              <CardTitle>Card Title</CardTitle>
              <CardText style={styles.cardtext}>A simple app that ... </CardText>
              {/* <CardText style={styles.cardtext}>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText> */}
            </CardImgOverlay> : null}
        </Card>
      </div>
    );
  }
}

const styles = {
  main: {
    minHeight: 280,
    minWidth: 280,
    marginBottom: 20,
  },
  image: {
    height: '100%',
  },
  overlay: {
    background: 'rgba(0,0,0,0.65)',
  },
  cardtext: {
    margin: '0 20px',
    color: 'whitesmoke',
    fontSize: 20
  },
}

export default Example;
