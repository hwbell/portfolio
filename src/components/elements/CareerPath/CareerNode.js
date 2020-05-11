import React from "react";

import { toolsImages } from "../../../assets/toolsImages";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class CareerNode extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
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
    console.log(this.props.logo);
    const lineStyle = {
      height: "100px",
      borderLeft: "4px solid black",
    };
    return (
      <div className="career-node-holder col">
        <div className="career-node center-all-col">
          <p>{this.props.job}</p>

          {/* <div className="left-all-row row">{this.renderTools()}</div> */}
        </div>
        <div style={lineStyle}></div>
        <div className="left-all-row">
          <div className="year-block">{this.props.year}</div>
        </div>
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
