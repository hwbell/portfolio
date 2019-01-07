import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import { FaRandom } from 'react-icons/fa';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    };
  }

  render() {
    return (

      <div className="Center container">

        <p className="" style={styles.name}>
          Hi, I'm Harry
        </p>

        <div className="row">

          <div className="col" style={styles.middleDisplayCol}>
            <p>scientist</p>
            <img
              src={require('../public/icons/dna.png')}
              style={styles.icon}
              alt="dna"></img>
          </div>

          <div className="col" style={styles.middleDisplayCol}>
            <FaRandom color="#E0F2F1" />
          </div>

          <div className="col" style={styles.middleDisplayCol}>
            <p>developer</p>
            <img
              src={require('../public/icons/computer.png')}
              style={styles.icon}
              alt="computer"></img>
          </div>

        </div>
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