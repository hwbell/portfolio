import React, { Component } from 'react';
import $ from 'jquery';
// styling
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';
import posed, { PoseGroup } from 'react-pose';

// image
import ProfilePic from '../../assets/images/profile-pic.jpg';

// reactstrap Media
import { Media } from 'reactstrap';

const runIconAnimation = () => {
  // for the animation of the icons
  // get all the divs holding the icons
  var circles = document.querySelectorAll(".animatedIcon");
  circles.forEach((circle) => {
    $(this).css('animation-fill-mode', 'forwards')
  })
  for (var i = 0; i < 5; i++) {
    var circle = circles[i];

    circle.keyframes = [{
      opacity: 0,
      transform: "translate3d(" + 10 * i + "px, 0px, 0px)"
    }, {
      opacity: 1,
      transform: "translate3d(" + 20 * i + "px, 5px, 0px)"
    }, {
      opacity: 0.5,
      transform: "translate3d(" + 10 * i + "px, 10px, 0px)"
    }, {
      opacity: 1,
      transform: "translate3d(" + 0 * i + "px, 0px, 0px)"
    }];


    circle.animProps = {
      duration: 2000 + 500 * i,
      easing: "ease-out",
      iterations: 1,
      animationFillMode: 'forwards'
    }

    var animationPlayer = circle.animate(circle.keyframes, circle.animProps);
  }

}
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
const tools = ['npm', 'github', 'heroku', 'aws S3', 'postman', 'VS Code', 'Linux OS'];
const frameworks = ['React.js', 'React Native', 'Node.js', 'Express.js', 'MongoDB'];

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    };
    this.hover = this.hover.bind(this);
  }

  componentDidMount() {
    runIconAnimation();
  }

  hover() {
    //
  }

  render() {

    const languageSkills = languages.map((language, i) =>
      <li className="grow-text" key={i}>{language}</li>
    );
    const toolsSkills = tools.map((tool, i) =>
      <li className="grow-text" key={i}>{tool}</li>
    );
    const frameworksSkills = frameworks.map((framework, i) =>
      <li className="grow-text" key={i}>{framework}</li>
    );

    return (

      <Container className="container" style={styles.main}>

        <P className="text-center" style={styles.title}>
          Nice to meet you!
        </P>

        <Img src={ProfilePic} className="row" style={styles.image} />

        <Div style={styles.textContainer}>
          <P className="" style={styles.paragraph}>
            For the past 8 years I have been a research biologist in the
            fields of <a target="#blank" href="https://en.wikipedia.org/wiki/Molecular_biology">molecular</a> & <a target="#blank" href="https://en.wikipedia.org/wiki/Cell_biology">cell biology</a>, <a target="#blank" href="https://en.wikipedia.org/wiki/Neuroscience">neuroscience</a>, <a target="#blank" href="https://en.wikipedia.org/wiki/Immunology">immunology</a> and <a target="#blank" href="https://en.wikipedia.org/wiki/Stem_cell">stem cell biology</a>.
            I've always enjoyed being an investigator of sorts and solving problems in creative ways.
            Since learning how to program and develop web applications, my interests have shifted
            completely to the world of web development. I truly love the never-ending puzzle of
            creating the best user experience with the highest functionality.
          </P>

          {/* the animation icons */}

          <div style={styles.iconContainer}>
            <div className="animatedIcon" style={styles.animatedIcon}>
              <i className="fas fa-flask flip-vertical-left" style={styles.icon}></i>
            </div>
            <div className="animatedIcon" style={styles.animatedIcon}>
              <i className="fas fa-microscope flip-vertical-left" style={styles.icon}></i>
            </div>
            <div className="animatedIcon" style={styles.animatedIcon}>
              <i className="fa fa-atom flip-vertical-left" style={styles.icon}></i>
            </div>
            <div className="animatedIcon" style={styles.animatedIcon}>
              <i className="fa fa-dna flip-vertical-left" style={styles.icon}></i>
            </div>
            <div className="animatedIcon" style={styles.animatedIcon}>
              <i className="fas fa-chart-bar flip-vertical-left" style={styles.icon}></i>
            </div>
          </div>

          <P style={styles.paragraph}>
            I was first introduced to the world of programming through cellular imaging analysis. I learned the technical computing software MATLAB as the need arose,
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
              <P style={styles.skillTitle}>Languages</P>
              <ul>{languageSkills}</ul>
            </Div>

            <Div className="col-8 col-sm-4" style={styles.list}>
              <P style={styles.skillTitle}>Frameworks</P>
              <ul>{frameworksSkills}</ul>
            </Div>

            <Div className="col-8 col-sm-4" style={styles.list}>
              <P style={styles.skillTitle}>Tools</P>
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
  title: {
    fontSize: 28,
    margin: 25
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
  skillTitle: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  paragraph: {
    marginTop: 20,
    fontSize: 18,
    width: '100%'
  },
  image: {
    borderRadius: 100,
    width: 200,
    margin: 'auto auto'
  },
  iconContainer: {
    /* background-color: #CC6666; */
    display: 'flex',
    flexDirection: 'row',
    width: 250,
    margin: 'auto auto'
  },
  animatedIcon: {
    margin: 8
  },
  icon: {
    fontSize: 40
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  }

}