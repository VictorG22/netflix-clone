import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMagnifyingGlass,
  faBell,
  faCaretDown,
  faPlay,
  faInfoCircle,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  faYoutube,
  faXTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { BrowserRouter as Router } from "react-router-dom";

library.add(
  faMagnifyingGlass,
  faBell,
  faCaretDown,
  faPlay,
  faInfoCircle,
  faArrowLeft,
  faYoutube,
  faXTwitter,
  faInstagram,
  faFacebook
);

createRoot(document.getElementById("root")).render(
  <Router>
    <StrictMode>
      <App />
    </StrictMode>
    ,
  </Router>
);
