import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';
import { FaRandom } from 'react-icons/fa';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    };
    this.hover = this.hover.bind(this);
  }

  hover () {
    //
  }

  render() {
    return (
      <div className="Center container">

        <p className="" style={styles.name}>
          About Page
        </p>

        <p className="" style={styles.paragraph}>
          Here is some text that tells an interesting story ...
        </p>

      </div>
    );
  }
}

export default HomePage;

const styles = {
  image: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
  },
  name: {
    fontSize: 28,
    margin: 40,
  },
  paragraph: {
    fontSize: 18,
    width: '60%,'
  },
  icon: {
    width: 100,
    height: 100
  },

  circleArrow: {
    color: '#48C9B0',
    width: 68,
    height: 68,
  },
  middleDisplayCol: {
    fontSize: 22,
    margin: 10,
  },
}