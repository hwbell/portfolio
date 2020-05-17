import React from "react";

import { toolsImages } from "../../../assets/toolsImages";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Fade,
} from "reactstrap";

// color: rgb(47, 137, 255);
  // color: rgb(36, 76, 206);
  // color: rgb(46, 30, 189);
  // color: rgb(26, 8, 66);
let colors = ["rgb(47, 107, 255)", "rgb(36, 76, 206)", "rgb(36, 56, 176)", "rgb(36, 30, 149)"];


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

class CareerNode extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      showOverlay: false,
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
              style={styles.toolImage}
              src={toolsImages[tool]}
              alt="no image"
            />
          </a>
        </div>
      );
    });
  }

  showOverlay() {
    this.setState({
      showOverlay: true,
    });
  }

  hideOverlay() {
    this.setState({
      showOverlay: false,
    });
  }

  render() {
    // console.log(this.props.logo);
    const lineStyle = {
      height: "40px",
      borderLeft: "4px solid whitesmoke",
    };

    const yearBlockStyle = {
      backgroundColor: `${colors[this.props.index]}`,
    };
    const bottomLineStyle = {
      borderTop: `10px solid ${colors[this.props.index]}`,
      width: "120%",
      marginTop: "0",
      marginLeft: "-10%"
    };

    return (
      <div className="career-node-holder col">
        <div
          onMouseOver={() => {
            this.showOverlay();
          }}
          onMouseLeave={() => {
            this.hideOverlay();
          }}
          className="career-node center-all-col"
          onClick={() => {
            this.toggleModal();
          }}
        >
          {/* <p>{this.props.job}</p> */}

          <Fade
            className="career-node-overlay center-all-col"
            in={this.state.showOverlay}
          >
            <p>
              <strong>{this.props.job}</strong>
            </p>
            <p style={{ margin: 0 }}>{this.props.company}</p>
            <p style={{ margin: 0 }}>
              <em>{this.props.years}</em>
            </p>
          </Fade>

          <img style={styles.logo} src={this.props.logo} alt="no image" />
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

            <div style={{ margin: "20px 0" }} className="left-all-row row">
              {this.renderTools()}
            </div>

            {this.props.modal.description && (
              <p>{this.props.modal.description}</p>
            )}

            {this.props.modal.testimonial && (
              <div>
                <p style={{ margin: 0 }}>
                  <strong>{this.props.modal.testimonial.name}:</strong>
                </p>
                <p><em>"{this.props.modal.testimonial.text}"</em></p>
              </div>
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
    // width: "35px",
  },
  logo: {
    width: "70%",
    borderRadius: "16px",
  },
};

export default CareerNode;
