import React from 'react';

// elements
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import ModalButton from './ModalButton';

import backgroundImage from '../../assets/images/chess-app.jpg';

const Example = (props) => {
  return (
    <div style={styles.main}>
      <Card>
        <CardImg top src={backgroundImage} alt="Card image cap" />
        

        <CardText style={styles.cardtext}>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>


        <ModalButton buttonLabel='see the code' />
      </Card>
    </div>
  );
};

const styles = {
  main: {
    margin: 15,
  },
  card: {
    backgroundColor: 'whitesmoke',
  },
  cardtext: {
    color: '#282c34',
    
  },
}

export default Example;
