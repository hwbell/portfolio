import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class EmailForm extends React.Component {
  render() {
    return (
      <div style={styles.form}>
        <p className="" style={styles.name}>
          Get in touch with me to discuss anything at all
        </p>
        <Form>
          <FormGroup>
            <Input type="email" name="name" id="contactname" placeholder="name" />
          </FormGroup>
          <FormGroup>
            <Input type="email" name="email" id="contactemail" placeholder="email" />
          </FormGroup>

          <FormGroup>
            <Input style={{height: '150px'}}type="textarea" name="text" id="contactmessage" placeholder="message" />
          </FormGroup>
          <Button outline color="secondary" style={styles.button}
            className="send-button">
            <i className="fa fa-envelope fa-gradient-right" style={styles.image}></i>
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