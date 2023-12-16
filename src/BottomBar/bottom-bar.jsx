import { useState } from "react";
import PropTypes from "prop-types";
import "./bottom-bar.scss";

const NAV = [
  {
    key: "home",
    icon: "home-outline",
    label: "Home"
  },
  {
    key: "profile",
    icon: "person-outline",
    label: "Profile"
  },
  {
    key: "settings",
    icon: "settings-outline",
    label: "Settings"
  },
  {
    key: "chat",
    icon: "chatbubbles-outline",
    label: "Messages"
  },
  {
    key: "calendar",
    icon: "calendar-outline",
    label: "Schedule"
  }
];

export default function BottomBar(props) {
  const [activeKey, setActiveKey] = useState(NAV[0].key);


  const { variant = "floating" } = props;


  const setKey = (key) => () => {
    setActiveKey(key);
  };

  return (
    <nav className="navigation-container">
      <ul className={`navbar navbar-${variant}`}>
        {NAV.map((nav) => (
          <li
            className={`navbar__item${activeKey === nav.key ? " active" : ""}`}
            key={nav.key}
            onClick={setKey(nav.key)}
          >
            <a href="#" className="link">
              <span className="link__icon">
                <ion-icon name={nav.icon}></ion-icon>
              </span>
              <span className="link__text">{nav.label}</span>
            </a>
          </li>
        ))}
        <div className="indicator" />
      </ul>
    </nav>
  );
}


BottomBar.propTypes = {
  variant: PropTypes.oneOf('floating', 'underline')
};
