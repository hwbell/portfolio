import React from 'react';
import { Button, Form, FormGroup, Label, Input, Spinner } from 'reactstrap';
const fetch = require('node-fetch');

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
      icon: 'fa-spinner fa spin'
    });

    fetch('http://localhost:8080/email', {
      method: 'post',
      body: JSON.stringify(self.state.messageBody),
      headers: { 'Content-Type': 'application/json' },
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
        <p className="" style={styles.name}>
          Get in touch with me to discuss anything at all
        </p>
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
            <i className={`fa ${this.state.icon} fa-gradient-right`} style={styles.image}></i>
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