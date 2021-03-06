import React from 'react';

// elements
import { Card, CardImg, CardText, CardImgOverlay, CardTitle } from 'reactstrap';
import ModalButton from './ModalButton';

// styling
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class CodePenCard extends React.Component {
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

  onHover() {
    this.setState({
      overlay: true
    })
  }

  onExit() {
    this.setState({
      overlay: false
    })
  }

  render() {
    return (
      <div className="shadow-card" style={styles.main}>
        <Card inverse
          style={{border: 'none'}}
          onMouseOver={this.onHover}
          onMouseLeave={this.onExit}>
          <CardImg
            style={styles.image}
            src={this.props.image}
            alt="Card image cap" />

          <ReactCSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            {this.state.overlay ?
              <CardImgOverlay style={styles.overlay}>
                <CardTitle style={styles.cardTitle}>{this.props.name}</CardTitle>
                <CardText style={styles.cardtext}>{this.props.description}</CardText>
                <ModalButton buttonLabel="read more" 
                  link={this.props.link}
                  gitLink={this.props.gitLink}
                  image={this.props.image}
                  modalDescription={this.props.modalDescription}
                  tools={this.props.tools}
                  name={this.props.name}
                  modalBG={this.props.modalBG}
                />
              </CardImgOverlay>

              : null}
          </ReactCSSTransitionGroup>
          
        </Card>
      </div>
    );
  }
}

const styles = {
  main: {
    margin: '4px',
    // minHeight: '220px',
    // minWidth: '220px',
  },
  overlay: {
    width: '100%',
    background: 'rgba(0,0,0,0.75)',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bolder',
  },
  cardtext: {
    margin: 0,
    color: 'whitesmoke',
    // fontWeight: 'bolder',
    fontSize: 14
  },
}

export default CodePenCard;
