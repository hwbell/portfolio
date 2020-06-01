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

const Div = posed.div({
  enter: { x: 0, opacity: 1 },
  exit: { x: 0, opacity: 0 }
});

class EmailForm extends React.Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      messageBody: {},
      sendingEmail: false,
      icon: 'fa-envelope',
      buttonClass: 'send-button'
    }

  }

  handleSubmit(e) {
    try {
      e.preventDefault();

      this.setState({
        emailSent: false,
        sendingEmail: true,
        buttonClass: 'sent-button',
        icon: 'fa-spinner fa-spin'
      });

      console.log(this.state.messageBody);

      fetch(process.env.REACT_APP_EMAIL_ROUTER, {
        method: 'POST',
        body: JSON.stringify(this.state.messageBody),
        headers: {
          "Content-type": "application/json"
        }
      })
        .then(res => res.json())
        .then((json) => {
          console.log(json);
          setTimeout(() => {
            this.setState({
              emailSent: true,
              sendingEmail: false,
              icon: 'fa-check',
              buttonClass: 'send-button',
            }, () => {
              setTimeout(() => {
                this.setState({
                  emailSent: false,
                  icon: 'fa-envelope'
                })
              }, 1000)
            });
          }, 1000);
        })
        .catch((error) => {
          console.error(error);
          this.setState({
            sendingEmail: false,
            icon: 'fa-envelope',
            buttonClass: 'send-button'

          })
        });
    } catch (e) {
      console.log(e)
      this.setState({
        sendingEmail: false,
        icon: 'fa-envelope',
        buttonClass: 'send-button'

      })
    }
  }

  handleChange(type, value) {

    let newMessageBody = JSON.parse(JSON.stringify(this.state.messageBody));
    newMessageBody[`${type}`] = value;

    this.setState({
      messageBody: newMessageBody
    });

  }

  render() {

    return (
      <Container style={styles.form}>

        <Div>
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
            <Button color="link"
              type="submit"
              style={styles.button}
              className={this.state.buttonClass}>
              <i className={`fas ${this.state.icon}`}></i>
            </Button>
          </Form>
        </Div>

      </Container>
    );
  }
}

export default EmailForm;

const styles = {

  form: {
    width: '100%',
    // margin: 30
  },
  button: {
    border: 'none'
  }
}