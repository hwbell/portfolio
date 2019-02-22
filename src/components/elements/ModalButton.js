// taken straight from the docs and modified

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    // console.log(`card image: ${this.props.image}`)
    return (
      <div style={styles.main}>
        <Button color="primary"
          style={styles.button}
          onClick={this.toggle}>{this.props.buttonLabel}</Button>

        {/* button will toggle making this modal visible */}
        <Modal className={this.props.className}
          style={styles.modal}
          isOpen={this.state.modal}
          toggle={this.toggle}>

          <ModalHeader toggle={this.toggle}>
            <p style={styles.title}>{this.props.name}</p>
          </ModalHeader>

          {/* the body must me an actual html element, not just an image */}
          {/* if there is a modalBG it will run the codepen rather than just an image*/}
          <ModalBody> 
          {/* {
            this.props.modalBG ?
            this.props.modalBG :
            <img style={styles.image} src={this.props.image}></img>} */}
            <p style={styles.modalDescription}>{this.props.modalDescription}</p>
          </ModalBody>
            <p style={styles.modalTools}>tools employed:</p>
            
            <div className="row" style={styles.toolsHolder}>
              {this.props.tools.map((tool) => {
                return <p className="col-4 shift-text">{tool}</p>
              })}
            </div>

          <ModalBody>

          </ModalBody>

          <ModalFooter>

            <a target="#blank" 
              href={this.props.link} 
              style={styles.link}
              className="btn btn-md btn-primary">run app!</a>
            <Button color="secondary" onClick={this.toggle}>back</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const styles = {
  main: {
  },
  title: {
    fontSize: 26
  },
  button: {
    margin: 12,
  },
  modal: {
    width: '100%'
  },
  modalDescription: {
    margin: 15,
    fontSize: 18,
  },
  modalTools: {
    fontWeight: 700,
    margin: 20
  },
  toolsHolder: {
    width: '70%',
    margin: 20,
    marginTop: 0
  },
  image: {
    width: '100%',
  },
  link: {
    color: 'whitesmoke',
  }
}

export default ModalButton;