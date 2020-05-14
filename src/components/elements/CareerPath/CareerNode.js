import React from "react";

import { toolsImages } from "../../../assets/toolsImages";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

let colors = ["#9C27B0", "#303F9F", "#03A9F4", "#4CAF50", "#FFEB3B", "#FF5722"];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

class CareerNode extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
    };
    this.renderTools = this.renderTools.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  }

  renderTools() {
    let imageId;
    return this.props.tools.map((tool, i) => {
      imageId = `${this.props.job.split(" ").join("")}-tool${i}`;

      return (
        <div
          id={imageId}
          className="tool-image col"
          key={i}
          style={styles.toolHolder}
        >
          <a
            target="_blank"
            href={`https://www.google.com/search?q=${tool}`}
            alt={`link to ${tool}`}
          >
            <img
              // onMouseOver={() => {
              //   this.togglePopover(tool);
              // }}
              // onMouseLeave={() => {
              //   this.togglePopover();
              // }}
              style={styles.toolImage}
              src={toolsImages[tool]}
              alt="no image"
            />
          </a>
        </div>
      );
    });
  }

  render() {
    // console.log(this.props.logo);
    const lineStyle = {
      height: "100px",
      borderLeft: "4px solid black",
    };

    const yearBlockStyle = {
      backgroundColor: `${colors[this.props.index]}`,
    };
    const bottomLineStyle = {
      borderTop: `4px solid ${colors[this.props.index]}`,
      width: "100%",
    };

    return (
      <div className="career-node-holder col">
        <div
          className="career-node center-all-col"
          onClick={() => {
            this.toggleModal();
          }}
        >
          <p>{this.props.job}</p>

          {/* <div className="left-all-row row">{this.renderTools()}</div> */}
        </div>
        <div style={lineStyle}></div>
        <div>
          <div className="year-block" style={yearBlockStyle}>
            {this.props.year}
          </div>
        </div>

        <hr style={bottomLineStyle} />

        <Modal
          isOpen={this.state.modalOpen}
          toggle={this.toggleModal}
          className={this.props.className || ""}
        >
          <ModalHeader toggle={this.toggleModal}>
            {this.props.modal.title}
          </ModalHeader>
          <ModalBody>
            {this.props.modal.bullets && (
              <ul>
                {this.props.modal.bullets.map((text, i) => (
                  <li key={i}>{text}</li>
                ))}
              </ul>
            )}

            <div style={{margin: '20px 0'}} className="left-all-row">{this.renderTools()}</div>

            {this.props.modal.description && (
              <p>{this.props.modal.description}</p>
            )}
          </ModalBody>
          <ModalFooter>
            <Button
              color="secondary"
              onClick={() => {
                this.toggleModal();
              }}
            >
              Back
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const styles = {
  toolHolder: {
    maxWidth: "50px",
    backgroundColor: "white",
  },
  toolImage: {
    height: "35px",
    width: "35px",
  },
  logo: {
    borderRadius: "10px",
    height: "100px",
  },
};

export default CareerNode;
