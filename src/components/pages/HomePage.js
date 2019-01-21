import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './HomePage.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRandom } from '@fortawesome/free-solid-svg-icons';
import { faDna } from '@fortawesome/free-solid-svg-icons';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';


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
            <i className="fa fa-dna fa-gradient-left" style={styles.image}></i>
          </div>

          <div className="col" style={styles.middleDisplayCol}>
            <FontAwesomeIcon
              icon={faRandom}
              style={styles.icon}
            />
          </div>

          <div className="col" style={styles.middleDisplayCol}>
            <p>developer</p>
            <i className="fa fa-laptop fa-gradient-right" style={styles.image}></i>
          </div>

        </div>
      </div>
    );
  }
}

export default HomePage;

const styles = {
  name: {
    fontSize: 28,
    margin: 40,
  },
  image: {
    fontSize: 60,
  },
  icon: {
    fontWeight: 'bolder',
    color: '#1E88E5',
    marginTop: 20,
    width: 20,
    height: 20
  },
  middleDisplayCol: {
    fontSize: 22,
    margin: 10,
  },
}