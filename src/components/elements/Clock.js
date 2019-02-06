import React from 'react';

// elements

// styling
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// elements

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: '',
      displayTime: ''

    };
  }

  componentDidMount() {
    // get the new time and put in in readable form
    let newTime = new Date();
    let displayTime = this.renderTime(newTime);

    // apply to state
    this.setState({
      time: newTime,
      display: displayTime
    });
  }

  // to get a simple 01-01-2019 style date and 12:00:00 style time 
  renderTime=(time) => {
    let hour = time.getHours() > 12 ?
      time.getHours() - 12 :
      time.getHours();

    let min = time.getMinutes();
    let sec = time.getSeconds();

    let month = time.getMonth();
    let day = time.getDate();
    let year = time.getFullYear().toString().slice(1, 3);

    return {
      date: `${month}-${day}-${year}`,
      time: `${hour}:${min}:${sec}`
    }
  }

  render() {
    return (
      <div className="container" style={styles.main}>
        <div className='row'>
          <p className="col">{this.state.displayTime.date}</p>
          <p className="col">{this.state.displayTime.time}</p>
        </div>
      </div>
    );
  }
}

const styles = {
  main: {

  }
}

export default Clock;
