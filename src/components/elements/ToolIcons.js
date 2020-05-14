import React from "react";

// element data
import {toolsImages} from '../../assets/toolsImages';

class ToolIcons extends React.Component {
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
    let imageId;

    return (
      <div className="tool-icons">
        {this.props.tools.map((tool, i) => {
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
        })}
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
};

export default ToolIcons;
