import React from "react";
import { Fade, Button } from "reactstrap";
import { toolsImages } from "../../assets/toolsImages";
import CalendarHeatmap from "react-calendar-heatmap";
import getRepoInfo from "../../tools/functions/pingGitRepo";

function shiftDate(date, numDays) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}

class PortfolioCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popoverOpen: false,
      popoverMessage: null,
      heatMapValues: null,
    };

    this.togglePopover = this.togglePopover.bind(this);
    this.pingRepo = this.pingRepo.bind(this);
    this.renderHeatMap = this.renderHeatMap.bind(this);
  }

  componentDidMount() {
    if (this.props.repoName) {
      this.pingRepo(this.props.repoName);
    }
  }

  pingRepo(repoName) {
    getRepoInfo(repoName)
      .then((data) => {
        this.setState({
          heatMapValues: data,
        });
      })
      .catch((e) => console.log(e));
  }

  togglePopover(tool) {
    if (tool) {
      this.setState({
        popoverMessage: tool,
      });
    } else {
      this.setState({
        popoverMessage: null,
      });
    }
    // this.setState({
    //   popoverOpen: !this.state.popoverOpen,
    // });
  }

  renderHeatMap() {
    const endDate = new Date(this.state.heatMapValues[0].date);
    const startDate = new Date(
      this.state.heatMapValues[this.state.heatMapValues.length - 1].date
    );

    console.log(this.state.heatMapValues);
    console.log("rendering heatmap");
    console.log(startDate);
    console.log(endDate);
    return (
      <CalendarHeatmap
        startDate={shiftDate(startDate, -30)}
        endDate={shiftDate(endDate, 30)}
        values={this.state.heatMapValues}
        classForValue={(value) => {
          if (!value) {
            return "color-empty";
          }
          return `color-github-${value.count}`;
        }}
        showWeekdayLabels={true}
        onClick={(value) =>
          value &&
          alert(
            `There were ${value.count} commits to this app on ${value.date}`
          )
        }
      />
    );
  }

  renderMessage() {
    return (
      <span style={{ alignSelf: "flex-start" }}>
        {this.props.message}
        <a target="_blank" href={this.props.link} alt="link to app">
          here!
        </a>
      </span>
    );
  }

  renderImageWithButtons() {


    let runAppMessage = this.props.gitLink ? "run app!" : "run app / see code";

    return (
      <div className="col space-all-col" style={styles.imageHolder}>
        <img style={styles.image} src={this.props.image} alt="" />
        {this.props.code != false && <div
          className="left-all-row"
          style={{ margin: "20px 0", alignSelf: "flex-end" }}
        >
          <a target="_blank" href={this.props.link} alt="link to app">
            <Button color="outline-primary">{runAppMessage}</Button>
          </a>

          {this.props.gitLink && (
            <a target="_blank" href={this.props.gitLink} alt="link to repo">
              <Button color="outline-info">see the code</Button>
            </a>
          )}
        </div>}
      </div>
    );
  }

  render() {
    let imageId;

    return (
      <div className="center-all-row row project-card">
        <div className="col left-all-col" style={styles.textHolder}>
          <h3 style={{ alignSelf: "flex-start" }}>{this.props.name}</h3>
          <p>{this.props.modalDescription}</p>

          <div style={{ alignSelf: "flex-start" }}>
            Tools & technologies employed: <strong>{this.state.popoverMessage}</strong>
          </div>
          <div className="row left-all-row" style={styles.toolsHolder}>
            {this.props.tools.map((tool, i) => {
              imageId = `${this.props.name.split(" ").join("")}-tool${i}`;

              return (
                <div className="tool-image" key={i}>
                  <a
                    target="_blank"
                    href={`https://www.google.com/search?q=${tool}`}
                    alt={`link to ${tool}`}
                  >
                    <img
                      onMouseOver={() => {
                        this.togglePopover(tool);
                      }}
                      onMouseLeave={() => {
                        this.togglePopover();
                      }}
                      id={imageId}
                      style={styles.toolImage}
                      src={toolsImages[tool]}
                      alt="no image"
                    />
                  </a>
                </div>
              );
            })}
          </div>

          {this.state.heatMapValues && this.renderHeatMap()}

          {this.props.message && this.renderMessage()}
        </div>

        {this.renderImageWithButtons()}
      </div>
    );
  }
}

const styles = {
  card: {
    // width: '50%'
  },
  imageHolder: {
    height: "100%",
    padding: "25px",
    minWidth: "300px",
    maxWidth: "450px",
  },
  image: {
    // minWidth: "350px",
    maxWidth: "450px",
    width: "100%",
  },
  textHolder: {
    textAlign: "left",
    minWidth: "300px",
    maxWidth: "600px",
    padding: "20px",
  },
  toolsHolder: {
    padding: "10px",
    alignSelf: "flex-start",
  },
  toolImage: {
    height: "40px",
    margin: "4px",
  },
  fade: {
    margin: "0px 20px 20px 20px",
  },
};
export default PortfolioCard;
