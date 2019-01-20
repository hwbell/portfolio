import React, { Component } from 'react';

//styling
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

// elements
import { FaRandom } from 'react-icons/fa';
import CodePenCard from './elements/CodePenCard';

class PortfolioPage extends Component {
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
          Portfolio
        </p>

        <p className="" style={styles.paragraph}>
          Take a look at some projects I have created
        </p>
        
        <div className="row" style={styles.cardholder}>

          <div className="col-12 col-lg-6"><CodePenCard /></div>
          <div className="col-12 col-lg-6"><CodePenCard /></div>
          <div className="col-12 col-lg-6"><CodePenCard /></div>

        </div>
        
      </div>
    );
  }
}

export default PortfolioPage;

const styles = {
  name: {
    fontSize: 28,
    margin: 40,
  },
  paragraph: {
    fontSize: 18,
    width: '60%,'
  },
  cardholder: {
    width: '80%',
    marginBottom: 80,
  },
}