import React from 'react';

// elements

// styling
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// element data
const icons = [
  {
    class: 'fab fa-github blink blink-grey',
    linkTo: 'https://github.com/hwbell'
  },
  {
    class: 'fab fa-codepen blink blink-orange',
    linkTo: 'https://codepen.io/hbellatcodepen/'
  },
  {
    class: 'fab fa-linkedin blink blink-blue',
    linkTo: 'https://www.linkedin.com/in/harold-bell-291926180/'
  },
  {
    class: 'fab fa-facebook-square blink blink-dark-blue',
    linkTo: 'https://www.facebook.com/profile.php?id=100010514613107'
  },
  {
    class: 'fab fa-instagram blink blink-purple',
    linkTo: 'https://www.instagram.com/harrywbell/'
  }
]

class SocialIcons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    return (
      <div style={styles.iconContainer} className="social-icons">
        {icons.map((icon, i) => {
          return (
            <div key={i} className="animated-icon" style={styles.animatedIcon}>
              <a
                href={icon.linkTo}
                target="_blank"
                className=""
                style={styles.link}
              >
                <i
                  className={icon.class}
                  style={styles.icon}
                ></i>
              </a>
            </div>
          )
        })}
      </div>
    );
  }
}

const styles = {
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    // width: "80%",  
    margin: "25px auto",
  },
  animatedIcon: {
    margin: 8,
  },
  link: {
    color: "whitesmoke",
  },
  icon: {
    fontSize: 40,
    // color: 'black',
  }
}

export default SocialIcons;
