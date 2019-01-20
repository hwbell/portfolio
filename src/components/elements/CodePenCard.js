import React from 'react';

// elements
import { Card, CardImg, CardText, Container, Row, Col } from 'reactstrap';
import ModalButton from './ModalButton';

import backgroundImage from '../../assets/images/chess-app.jpg';

const Example = (props) => {
  return (
    
      <Card>
        <CardImg src={backgroundImage} alt="Card image cap" />

        <CardText style={styles.cardtext}>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>

        <ModalButton buttonLabel='run app' />
      </Card>

  );
};

const styles = {
  main: {
    margin: 10,
  },
  card: {
    borderColor: 'whitesmoke',
    backgroundColor: 'whitesmoke',
  },
  cardtext: {
    margin: '0 20px',
    color: '#282c34',
    fontSize: 20
  },
}

export default Example;
