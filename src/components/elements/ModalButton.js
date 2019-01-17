// taken straight from the docs and modified

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div style={styles.main}>
        <Button color="primary" 
          onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal className={this.props.className}
          style={styles.modal}
          isOpen={this.state.modal} 
          toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
          <iframe style={styles.iframe} scrolling="no" title="Chess Game" src="//codepen.io/hbellatcodepen/embed/preview/GxqmaJ/?height=749&theme-id=0&default-tab=resultundefined" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/hbellatcodepen/pen/GxqmaJ/'>Chess Game</a> by Harold Bell
  (<a href='https://codepen.io/hbellatcodepen'>@hbellatcodepen</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const styles = {
  main: {
  },
  modal: {
    width: '100%'
  },
  iframe: {
    width: '100%',
    height: 500,
  },

}
export default ModalButton;