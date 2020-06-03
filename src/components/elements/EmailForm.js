import React from "react";
import { Button, Form, FormGroup, Label, Input, Fade } from "reactstrap";
import posed, { PoseGroup } from "react-pose";

const fetch = require("node-fetch");

const Container = posed.div({
  enter: { staggerChildren: 50 },
  exit: { staggerChildren: 50, staggerDirection: -1 },
});

const P = posed.p({
  enter: { x: 0, opacity: 1 },
  exit: { x: 0, opacity: 0 },
});

const Div = posed.div({
  enter: { x: 0, opacity: 1 },
  exit: { x: 0, opacity: 0 },
});


const baseState = {
  buttonMessage: "send message",
  serverMessage: "",
  messageBody: {},
  sendingEmail: false,
  icon: "fa-envelope",
  buttonClass: "send-button",
};

const sendingState = {
  buttonMessage: "sending ... ",
  emailSent: false,
  sendingEmail: true,
  buttonClass: "sent-button",
  icon: "fa-spinner fa-spin",
};

const successState = {
  buttonMessage: "done",
  serverMessage: `Thanks! I'll get back to you soon :)`,
  emailSent: true,
  sendingEmail: false,
  icon: "fa-check",
  buttonClass: "send-button",
};

const failState = {
  serverMessage: `It looks like something went wrong :( ... Please try again!`,
  emailSent: true,
  sendingEmail: false,
  icon: "fa-envelope",
  buttonClass: "send-button",
};

class EmailForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = baseState;
  }

  handleSubmit(e) {
    try {
      e.preventDefault();

      this.setState(sendingState);

      console.log(this.state.messageBody);
      console.log(process.env.REACT_APP_EMAIL_ROUTER);

      fetch(process.env.REACT_APP_EMAIL_ROUTER, {
        method: "POST",
        body: JSON.stringify(this.state.messageBody),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          this.setState(successState);

          setTimeout( () => {
            this.setState(baseState)
          }, 2500)
        })
        .catch((error) => {
          console.error(error);
          this.setState(failState);
          setTimeout( () => {
            this.setState(baseState)
          }, 2500)
        });
    } catch (e) {
      console.log(e);
      this.setState(failState);
      setTimeout( () => {
        this.setState(baseState)
      }, 2500)
    }

  }

  handleChange(type, value) {
    let newMessageBody = JSON.parse(JSON.stringify(this.state.messageBody));
    newMessageBody[`${type}`] = value;

    this.setState({
      messageBody: newMessageBody,
    });
  }

  render() {
    return (
      <Container style={styles.form}>
        <Div>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Input
                type="text"
                name="name"
                id="contactname"
                placeholder="name"
                onChange={(e) => this.handleChange("name", `${e.target.value}`)}
              />
            </FormGroup>

            <FormGroup>
              <Input
                type="email"
                name="email"
                id="contactemail"
                placeholder="email"
                onChange={(e) =>
                  this.handleChange("email", `${e.target.value}`)
                }
              />
            </FormGroup>

            <FormGroup>
              <Input
                style={{ height: "150px" }}
                type="textarea"
                name="text"
                id="contactmessage"
                placeholder="message"
                onChange={(e) =>
                  this.handleChange("message", `${e.target.value}`)
                }
              />
            </FormGroup>


            <Div className="left-all-row">
              <div><Button
                color="link"
                type="submit"
                style={styles.button}
                className={this.state.buttonClass}
              >
                <i className={`fas ${this.state.icon}`}></i>
              </Button>
              <p>{this.state.buttonMessage}</p>
              </div>

              <Fade style={{marginLeft: '20px'}} in={!!this.state.serverMessage}>
                {this.state.serverMessage}
              </Fade>
            </Div>
          </Form>
        </Div>
      </Container>
    );
  }
}

export default EmailForm;

const styles = {
  form: {
    width: "100%",
    // margin: 30
  },
  button: {
    border: "none",
  },
};
