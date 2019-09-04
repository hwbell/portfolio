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

          <ModalBody className="left-all-col">
            <div className="space-all-row" style={{width: '100%'}}>
              <p toggle={this.toggle}>
                <p style={styles.title}>{this.props.name}</p>
              </p>

              <i className="fas fa-times" onClick={this.toggle}></i>
            </div>

            <img className="shadow-card" style={styles.image} src={this.props.image}></img>

            <p style={styles.modalDescription}>{this.props.modalDescription}</p>
            <p style={styles.modalTools}>tools employed:</p>

            <div className="row" style={styles.toolsHolder}>
              {this.props.tools.map((tool, i) => {
                return (
                  <div className="col-6">
                    <p key={i} className="shift-text">{tool}</p>
                  </div>
                )
              })}
            </div>
          </ModalBody>

          <ModalFooter>

            <a target="#blank"
              href={this.props.link}
              style={styles.link}>
              <Button color="primary">run app!</Button>
            </a>

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
    fontWeight: 'bolder',
    fontSize: 20
  },
  button: {
    margin: 12,
  },
  modal: {
    width: '80%',
    margin: 'auto auto'
  },
  modalDescription: {
    margin: 15,
    fontSize: 14,
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
    height: '300px',
    alignSelf: 'center',
    // maxHeight: '600px'
  },
  link: {
    color: 'whitesmoke',
  }
}

export default ModalButton;