import React from "react";

// styling
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

// pose elements
import posed, { PoseGroup } from "react-pose";

const P = posed.p({
  enter: { x: 0, opacity: 1 },
  exit: { x: 0, opacity: 0 },
});

const Img = posed.img({
  enter: { x: 0, opacity: 1 },
  exit: { x: 0, opacity: 0 },
});

const Div = posed.div({
  enter: { x: 0, opacity: 1 },
  exit: { x: 0, opacity: 0 },
});

const Hr = posed.hr({
  enter: { x: 0, opacity: 1 },
  exit: { x: 0, opacity: 0 },
});

class PageTitle extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="subtitle-container" style={styles.main}>
        <Div>
          <P style={styles.title}>{this.props.title}</P>
        </Div>
        <Hr style={{ width: "100%" }} />

        {this.props.subtitle && (
          <P style={styles.subtitle}>{this.props.subtitle}</P>
        )}

        {this.props.description && (
          <Div style={styles.description}>
            <P>{this.props.description}</P>
          </Div>
        )}
      </div>
    );
  }
}

const styles = {
  main: {
    width: "100%",
  }, 
  title: {
    // width: '80%',
    fontSize: 30,
    marginTop: 35,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 28,
    // margin: 25
    // fontWeight: ''
  },
};

export default PageTitle;
