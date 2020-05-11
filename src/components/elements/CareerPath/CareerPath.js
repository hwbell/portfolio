import React from "react";

// data
import { CareerPathText } from "./CareerPathText";

// elements
import CareerNode from "./CareerNode";

class CareerPath extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderNodes() {
    return (
      <div className="career-nodes-container center-all-row row">
        {CareerPathText.map((obj) => {
          return (
            <CareerNode {...obj}/>
          )
        })}
      </div>
    );
  }

  render() {
    return (
      <div id="career-path-container" style={styles.main}>
        {CareerPathText && this.renderNodes()}
      </div>
    );
  }
}

const styles = {
  main: {},
};

export default CareerPath;
