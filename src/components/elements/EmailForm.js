import React from 'react';
import { Button, Form, FormGroup, Label, Input, Spinner } from 'reactstrap';
import posed, { PoseGroup } from 'react-pose';

const fetch = require('node-fetch');

const Container = posed.div({
  enter: { staggerChildren: 50 },
  exit: { staggerChildren: 50, staggerDirection: -1 }
});

const P = posed.p({
  enter: { x: 0, opacity: 1 },
  exit: { x: 0, opacity: 0 }
});

class EmailForm extends React.Component {

  constructor (props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      messageBody: {},
      sendingEmail: false,
      icon: 'fa-envelope'
    }
    
  }

  handleSubmit (e) {
    e.preventDefault();
    const self = this;
    
    self.setState({
      emailSent: false,
      sendingEmail: true,
      icon: 'fa-spinner fa-spin'
    });

    fetch('https://portfolio-server-hb.herokuapp.com/email', {
      method: 'POST',
      body: JSON.stringify(self.state.messageBody),
      headers: {
        "Content-type": "application/json"
      }
    })
      .then(res => res.json())
      .then((json) => {
        console.log(json);
        setTimeout ( () => {
          self.setState({
            emailSent: true,
            sendingEmail: false,
            icon: 'fa-check'
          }, () => {
            setTimeout( () => {
              self.setState({
                emailSent: false,
                icon: 'fa-envelope'
              })
            }, 1000)
          });
        }, 1000);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  handleChange (type, value) {
    
    let newMessageBody = JSON.parse(JSON.stringify(this.state.messageBody));
    newMessageBody[`${type}`] = value;

    this.setState({
      messageBody: newMessageBody
    }, () => {
      console.log(newMessageBody)
    });

  }

  render() {
    
    return (
      <div style={styles.form}>
        <P className="" style={styles.name}>
          Get in touch with me to discuss anything at all
        </P>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Input type="text" name="name" id="contactname" placeholder="name" 
              onChange={(e) => this.handleChange('name', `${e.target.value}`)}
            />
          </FormGroup>

          <FormGroup>
            <Input type="email" name="email" id="contactemail" placeholder="email" 
              onChange={(e) => this.handleChange('email', `${e.target.value}`)}
            />
          </FormGroup>

          <FormGroup>
            <Input style={{ height: '150px' }} type="textarea" name="text" id="contactmessage" placeholder="message" 
              onChange={(e) => this.handleChange('message', `${e.target.value}`)}
            />
          </FormGroup>
          <Button outline color="secondary" 
            type="submit" 
            style={styles.button}
            className="send-button">
            <i className={`fas ${this.state.icon} fa-gradient-right`} style={styles.image}></i>
          </Button>
        </Form>
      </div>
    );
  }
}

export default EmailForm;

const styles = {
  name: {
    fontSize: 28,
    margin: 40,
  },
  form: {
    width: '80%'
  },
  image: {
    fontSize: 45,
    padding: 0,
  },
  button: {
    border: 'none'
  }
}