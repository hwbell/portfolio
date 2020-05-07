import React, { Component } from "react";
import $ from "jquery";
// styling
import "bootstrap/dist/css/bootstrap.css";
import "../../App.css";
import posed, { PoseGroup } from "react-pose";
import { Button } from "reactstrap";
// image
import ProfilePic from "../../assets/images/profile-pic.jpg";
import PageTitle from "../elements/PageTitle";

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
});

// for the list display - each is a list, with the var name as the title
const languages = {
  title: "Languages",
  skills: ["HTML5", "CSS", "Javascript", "PHP", "Python", "MATLAB"]
};
const tools = {
  title: "Tools",
  skills: [
    "Github",
    "npm",
    "Heroku",
    "AWS",
    "Postman",
    "VS Code",
    "CodePen",
    "Linux OS",
    "Adobe CC"
  ]
};
const frameworks = {
  title: "Frameworks",
  skills: [
    "Bootstrap",
    "React.js",
    "React Native",
    "Angular",
    "Node.js",
    "Express.js",
    "MongoDB"
  ]
};

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
    }, 600);
  }

  renderskills() {
    return (
      <Div className="" style={styles.skillsContainer}>
        {[languages, frameworks, tools].map((skill, i)=> {
          return (
            <Div key={i} style={styles.list}>
              <P style={styles.skillTitle}>{skill.title}</P>
              <ul>
                {skill.skills.map((framework, j) => (
                  <li className="grow-text" key={j}>
                    {framework}
                  </li>
                ))}
              </ul>
            </Div>
          );
        })}
      </Div>
    );
  }

  renderIcons() {
    return (
      <div style={styles.iconContainer}>
        <div className="" style={styles.animatedIcon}>
          <i
            className="fas fa-flask pour flip-on-start"
            style={styles.icon}
          ></i>
        </div>
        <div className="" style={styles.animatedIcon}>
          <i
            className="fas fa-microscope flip-on-start grow-blue"
            style={styles.icon}
          ></i>
        </div>
        {/* <div className="" style={styles.animatedIcon}>
              <i className="fa fa-atom flip-on-start rotate" style={styles.icon}></i>
            </div> */}
        <div className="" style={styles.animatedIcon}>
          <i
            className="fa fa-dna flip-on-start flip-vertical-left"
            style={styles.icon}
          ></i>
        </div>
        <div className="" style={styles.animatedIcon}>
          <i
            className="fas fa-chart-bar flip-on-start rotate-quarter"
            style={styles.icon}
          ></i>
        </div>
        <div className="" style={styles.animatedIcon}>
          <i
            className="fas fa-laptop-code shake"
            style={styles.icon}
          ></i>
        </div>
      </div>
    );
  }

  render() {
    return (
      <Container className="" style={styles.main}>
        <PageTitle title={"About Me"} subtitle={"Nice to meet you!"}/>

        <Div className="row" style={{ maxWidth: "700px" }}>
          <div className="col left-all-col">
            <Img src={ProfilePic} style={styles.image} />
            {this.renderIcons()}
          </div>

          <P className="col" style={styles.paragraph}>
            In the past, I have been a research biologist in the fields of{" "}
            <a
              target="#blank"
              href="https://en.wikipedia.org/wiki/Molecular_biology"
            >
              molecular
            </a>{" "}
            &&nbsp;
            <a
              target="#blank"
              href="https://en.wikipedia.org/wiki/Cell_biology"
            >
              cell biology
            </a>
            , &nbsp;
            <a
              target="#blank"
              href="https://en.wikipedia.org/wiki/Neuroscience"
            >
              neuroscience
            </a>
            , &nbsp;
            <a target="#blank" href="https://en.wikipedia.org/wiki/Immunology">
              immunology
            </a>{" "}
            and&nbsp;
            <a target="#blank" href="https://en.wikipedia.org/wiki/Stem_cell">
              stem cell biology
            </a>
            . I've always enjoyed being an investigator of sorts and solving
            problems in creative ways. More recently, I have shifted my focus to
            programming and web development. I hope to bring a unique
            perspective to the software industry, with a focus on productivity
            and detail-oriented design and user experience.
          </P>
        </Div>

        {/* <P className="text-center" style={styles.subTitle}>
          Nice to meet you!
        </P> */}

        <Div className="left-all-col">
          {/* the animation icons */}

          <P style={styles.paragraph}>
            I was first introduced to the world of programming through cellular
            imaging analysis. I learned the technical computing software MATLAB
            as the need arose, and immediately became interested in other areas
            of computer programming. Upon exploring options for a potential
            career change, web development looked to be the most exciting and
            creative, and I think that's why I stayed with it. Since learning
            how to program and develop web applications, my interests have
            shifted completely to the world of web development. I truly love the
            never-ending puzzle of creating the best user experience with the
            highest functionality. Since making the switch to development
            full-time, I've continued to gain experience and exposure to more
            areas of the modern developer's toolset and pursue personal
            development goals in my spare time. I love this stuff!
          </P>

          <P style={styles.paragraph}>My current skillset includes:</P>

          {this.renderskills()}

          <P style={styles.paragraph}>
            I'm always interested and motivated to learn new web technologies.
            It's one of the things I like most about development - there is
            always more to learn. Picking up a new language or framework isn't
            tedious, it is exciting!
          </P>

          <P className="row" style={styles.paragraph}>
            <a
              target="_blank"
              href="https://medium.com/javascript-in-plain-english/top-javascript-frameworks-to-learn-in-2020-7ec198d05bfa"
            >
              <Button className="home-button" style={{ margin: 0 }}>
                Top front-end frameworks for 2020
              </Button>
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
    paddingTop: "0",
    paddingBottom: 80,
    width: "90%",
    maxWidth: '700px',
    margin: "auto auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  
  skillsContainer: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start"
    // margin: 30
  },
  list: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  skillTitle: {
    fontSize: 18,
    paddingLeft: 10,
    fontWeight: "bold"
  },
  paragraph: {
    marginTop: "14px",
    display: "inline",
    alignSelf: "center",
    fontSize: 18,
    width: "100%",
    minWidth: 300
  },
  image: {
    padding: "20px",
    borderRadius: 150,
    width: "100%",
    height: "100%",
    maxWidth: 300,
    maxHeight: 300,
    margin: "0px auto"
  },
  iconContainer: {
    /* background-color: #CC6666; */
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 250,
    margin: "0 auto 15px auto"
  },
  animatedIcon: {
    margin: 8
  },
  icon: {
    fontSize: 40
  }
};
