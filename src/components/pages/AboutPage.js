import React, { Component } from 'react';
import $ from 'jquery';
// styling
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';
import posed, { PoseGroup } from 'react-pose';

// image
import ProfilePic from '../../assets/images/profile-pic.jpg';

// components
const Container = posed.div({
  enter: { staggerChildren: 50 },
  exit: { staggerChildren: 50, staggerDirection: -1 }
});

const P = posed.p({
  enter: { x: 0, opacity: 1 },
  exit: { x: 0, opacity: 0 }
});

const Img = posed.img({
  enter: { x: 0, opacity: 1 },
  exit: { x: 0, opacity: 0 }
});

const Div = posed.div({
  enter: { x: 0, opacity: 1 },
  exit: { x: 0, opacity: 0 }
});

const Hr = posed.hr({
  enter: { x: 0, opacity: 1 },
  exit: { x: 0, opacity: 0 }
})

// for the list display - each is a list, with the var name as the title
const languages = {
  title: 'Languages',
  skills: ['HTML5', 'CSS', 'Javascript', 'Python', 'MATLAB']
};
const tools = {
  title: 'Tools',
  skills: ['Github', 'npm', 'Heroku', 'AWS S3', 'Postman', 'VS Code', 'CodePen', 'Linux OS']
}
const frameworks = {
  title: 'Frameworks',
  skills: ['Bootstrap', 'React.js', 'React Native', 'Node.js', 'Express.js', 'MongoDB']
}

class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    };
    // this.hover = this.hover.bind(this);
  }

  componentDidMount() {
    // 600ms seems to be right for the pose animations between screens, so this
    // will happen when the screen is blank, eliminating choppy animation
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 600)
  }

  renderskills() {

    return (
      <Div className="" style={styles.skillsContainer}>

        {[languages, frameworks, tools].map((skill) => {
          return (

            <Div className="" style={styles.list}>
              
              <P style={styles.skillTitle}>{skill.title}</P>
              <ul>
                {
                  skill.skills.map((framework, i) =>
                    <li className="grow-text" key={i}>{framework}</li>
                  )
                }
              </ul>
            
            </Div>

          )
        })

        }

      </Div>
    )
  }

  render() {

    return (

      <Container className="" style={styles.main}>

        <Div className="row">
          <P className="col" style={styles.title}>
            About Me
          </P>
        </Div>
        <Hr />


        <Img src={ProfilePic} className="row" style={styles.image} />

        {/* <P className="text-center" style={styles.subTitle}>
          Nice to meet you!
        </P> */}

        <Div style={styles.textContainer}>
          <P className="" style={styles.paragraph}>
            For the past 8 years I have been a research biologist in the
            fields of <a target="#blank" href="https://en.wikipedia.org/wiki/Molecular_biology">molecular</a> & <a target="#blank" href="https://en.wikipedia.org/wiki/Cell_biology">cell biology</a>, <a target="#blank" href="https://en.wikipedia.org/wiki/Neuroscience">neuroscience</a>, <a target="#blank" href="https://en.wikipedia.org/wiki/Immunology">immunology</a> and <a target="#blank" href="https://en.wikipedia.org/wiki/Stem_cell">stem cell biology</a>.
            I've always enjoyed being an investigator of sorts and solving problems in creative ways.
          </P>

          {/* the animation icons */}

          <div style={styles.iconContainer}>
            <div className="" style={styles.animatedIcon}>
              <i className="fas fa-flask pour flip-on-start" style={styles.icon}></i>
            </div>
            <div className="" style={styles.animatedIcon}>
              <i className="fas fa-microscope flip-on-start grow-blue" style={styles.icon}></i>
            </div>
            <div className="" style={styles.animatedIcon}>
              <i className="fa fa-atom flip-on-start rotate" style={styles.icon}></i>
            </div>
            <div className="" style={styles.animatedIcon}>
              <i className="fa fa-dna flip-on-start flip-vertical-left" style={styles.icon}></i>
            </div>
            <div className="" style={styles.animatedIcon}>
              <i className="fas fa-chart-bar flip-on-start rotate-quarter" style={styles.icon}></i>
            </div>
          </div>

          <P style={styles.paragraph}>

            I was first introduced to the world of programming through cellular imaging analysis.
            I learned the technical computing software MATLAB as the need arose,
            and immediately became interested in other areas of computer programming. Upon exploring options
            for a potential career change, web development looked to be the most exciting and creative, and
            I think that's why I stayed with it. Since learning how to program and develop web applications,
            my interests have shifted completely to the world of web development. I truly love the never-ending puzzle
            of creating the best user experience with the highest functionality. At this point, its hard to
            imagine <i>not</i> developing on a daily basis, and I've decided to transition to development full-time.

          </P>

          <P style={styles.paragraph}>
            My skills include:
          </P>

          {this.renderskills()}

          <P style={styles.paragraph}>
            I'm always interested and motivated to learn new web technologies. It's one of the things
            I like most about development - there is always more to learn. Picking up a new language
            or framework isn't tedious, it is exciting!
          </P>

          <P className="row" style={styles.paragraph}>
            <a target="_blank"
              href="https://www.lambdatest.com/blog/top-javascript-frameworks-for-2019/"
              style={{ marginLeft: '10px' }}>
              Top front-end frameworks in 2019
            </a>
          </P>

        </Div>

      </Container>
    );
  }
}

export default AboutPage;

const styles = {
  main: {
    paddingTop: '0',
    paddingBottom: 80,
    width: '90%',
    margin: 'auto auto'
  },
  title: {
    // width: '80%',
    fontSize: 30,
    marginTop: 35,
    fontWeight: 'bold'
  },
  subTitle: {
    fontSize: 28,
    margin: 25
    // fontWeight: ''
  },

  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    margin: 30
  },
  skillsContainer: {
    width:'100%',
    // border: '1px solid',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    // margin: 30
  },
  skillTitle: {
    fontSize: 22,
    paddingLeft: 10,
    fontWeight: 'bold'
  },
  paragraph: {
    // paddingTop: 10,
    fontSize: 18,
    width: '100%'
  },
  image: {
    borderRadius: 125,
    width: 250,
    margin: '30px auto 0px auto'
  },
  iconContainer: {
    /* background-color: #CC6666; */
    display: 'flex',
    flexDirection: 'row',
    width: 250,
    margin: 'auto auto 15px auto'
  },
  animatedIcon: {
    margin: 8
  },
  icon: {
    fontSize: 40
  },

}