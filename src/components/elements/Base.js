import React from 'react';

// elements

// styling
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// elements

class Base extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }


  render() {
    return (
      <div className="container" style={styles.main}>
      </div>
    );
  }
}

const styles = {
  main: {

  }
}

export default Base;
