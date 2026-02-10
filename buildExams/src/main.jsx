import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <img
      className="bottom-right-corner-img"
      src="assets/images/bottom-right.png"
    />
    <img className="top-left-corner-img" src="assets/images/top-left.png" />
    <img className="top-right-corner-img" src="assets/images/top-right.png" />
    <img className="top-left logo" src="assets/images/logo.png" />
    <div className="footer-disclaimer">
      <p>© 2025 Simplex Tuition | www.simplextuition.com.au</p>
      <p>For Educational Use Only</p>
    </div>
    <App />
  </StrictMode>
);
