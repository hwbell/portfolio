// taken straight from the docs and modified

import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

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
        <Button color="primary" style={styles.button} onClick={this.toggle}>
          {this.props.buttonLabel}
        </Button>

        {/* button will toggle making this modal visible */}
        <Modal
          className="modal-xl"
          centered={true}
          style={styles.modal}
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <ModalBody className="left-all-col">
            <div className="space-all-row" style={{ width: "100%" }}>
              <p toggle={this.toggle}>
                <p style={styles.title}>{this.props.name}</p>
              </p>

              <i className="fas fa-times" onClick={this.toggle}></i>
            </div>

            <div className="row" style={{width: "100%"}}>
              <img
                className="shadow-card col"
                style={styles.image}
                src={this.props.image}
              ></img>

              <p style={styles.modalDescription} className="col">
                {this.props.modalDescription}
              </p>
            </div>
            <p style={styles.toolsTitle}>tools employed:</p>

            <div className="row" style={styles.toolsHolder}>
              {this.props.tools.map((tool, i) => {
                return (
                  <div className="col-4" style={{textAlign: "left"}}>
                    <p key={i} className="shift-text">
                      {tool}
                    </p>
                  </div>
                );
              })}
            </div>
          </ModalBody>

          <ModalFooter>
            {this.props.link && (
              <a target="#blank" href={this.props.link} style={styles.link}>
                <Button color="primary">run app!</Button>
              </a>
            )}

            {this.props.gitLink && (
              <a target="#blank" href={this.props.gitLink} style={styles.link}>
                <Button color="primary">see code</Button>
              </a>
            )}

            <Button color="secondary" onClick={this.toggle}>
              back
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const styles = {
  main: {},
  title: {
    fontWeight: "bolder",
    fontSize: 20
  },
  button: {
    margin: 12
  },
  modal: {
    width: "80%",
    margin: "auto auto"
  },
  modalDescription: {
    width: "100%",
    margin: 15,
    fontSize: 16
  },
  toolsTitle: {
    fontWeight: 700,
  },
  toolsHolder: {
    width: "100%",
    margin: "14px",
  },
  image: {
    width: "100%",
    height: "100%",
    // maxWidth: "300px",
    maxHeight: "300px",
    padding: 0,
    marginLeft: "14px"
  },
  link: {
    color: "whitesmoke"
  }
};

export default ModalButton;
