import React, { Component } from 'react';

// styling
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';
import posed, { PoseGroup } from 'react-pose';

// image
import ProfilePic from '../../assets/images/profile-pic.jpg';

// reactstrap Media
import { Media } from 'reactstrap';

// components
const Container = posed.div({
  enter: { staggerChildren: 50 },
  exit: { staggerChildren: 50, staggerDirection: -1 }
});

const P = posed.p({
  enter: { x: 0, opacity: 1 },
  exit: { x: 10, opacity: 0 }
});

const Img = posed.img({
  enter: { x: 0, opacity: 1 },
  exit: { x: 10, opacity: 0 }
});

const Div = posed.div({
  enter: { x: 0, opacity: 1 },
  exit: { x: 10, opacity: 0 }
});

// for the list display - each is a list, with the var name as the title
const languages = ['HTML5', 'CSS', 'javascript', 'python', 'MATLAB'];
const tools = ['npm', 'github', 'heroku', 'AWS S3', 'postman', 'VS Code', 'Linux OS'];
const frameworks = ['Reactjs', 'Node.js', 'Express.js', 'MongoDB'];

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    };
    this.hover = this.hover.bind(this);
  }

  hover() {
    //
  }

  render() {

    const languageSkills = languages.map((language) =>
      <li>{language}</li>
    );
    const toolsSkills = tools.map((tool) =>
      <li>{tool}</li>
    );
    const frameworksSkills = frameworks.map((framework) =>
      <li>{framework}</li>
    );

    return (

      <Container className="container" style={styles.main}>

        <Div style={styles.pictureContainer}>
          <Img src={ProfilePic} className="" style={styles.image} />

          <Div>
            <P className="" style={styles.greeting}>
              Nice to meet you!
            </P>
            <P>
              Functionality
            </P>
          </Div>

        </Div>

        <Div style={styles.textContainer}>
          <P className="" style={styles.paragraph}>
            For the past 8 years I have been a research biologist in the
            fields of <a target="#blank" href="https://en.wikipedia.org/wiki/Molecular_biology">molecular</a> & <a target="#blank" href="https://en.wikipedia.org/wiki/Cell_biology">cell biology</a>, <a target="#blank" href="https://en.wikipedia.org/wiki/Neuroscience">neuroscience</a>, <a target="#blank" href="https://en.wikipedia.org/wiki/Immunology">immunology</a> and <a target="#blank" href="https://en.wikipedia.org/wiki/Stem_cell">stem cell biology</a>.
            I've always enjoyed being an investigator of sorts and solving problems in creative ways.
            Since learning how to program and develop web applications, my interests have shifted
            completely to the world of web development. I truly love the never-ending puzzle of
            creating the best user experience with the highest functionality.
          </P>
          <P style={styles.paragraph}>
            I was first introduced to the world of programming through cellular imaging experiments
            and image analysis. I learned the technical computing software MATLAB as the need arose,
            and immediately became interested in other kinds of programming. After exploring options
            for a potential career change, web development seemed the most exciting and creative, and
            I think that's why I stayed with it. After learning as much as I could for the past couple
            years, its now hard to imagine <i>not</i> developing on a daily basis, and I've decided to transition
            to develpment full-time.

          </P>

          <P style={styles.paragraph}>
            My skills include:
          </P>

          <Div className="row" >

            <Div className="col-8 col-sm-4" style={styles.list}>
              <P>Languages</P>
              <ul>{languageSkills}</ul>
            </Div>

            <Div className="col-8 col-sm-4" style={styles.list}>
              <P>Frameworks</P>
              <ul>{frameworksSkills}</ul>
            </Div>

            <Div className="col-8 col-sm-4" style={styles.list}>
              <P>Tools</P>
              <ul>{toolsSkills}</ul>
            </Div>

          </Div>

        </Div>

      </Container>
    );
  }
}

export default HomePage;

const styles = {
  main: {
    marginBottom: 80,
  },
  pictureContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 30
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    margin: 30
  },
  skillsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: 30
  },
  greeting: {
    textAlign: 'center',
    fontSize: 28,
    marginTop: 15
  },
  paragraph: {
    marginTop: 20,
    fontSize: 18,
    width: '100%'
  },
  image: {
    width: '30%',
    margin: 20,
    minWidth: 200,
    // height: 300,
    // width: 300
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  }

}