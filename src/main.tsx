import { createRoot } from "react-dom/client";
import App from "./app/App";
import { PrivacyPolicy } from "./app/components/PrivacyPolicy";
import "./styles/index.css";

const page = window.location.pathname;

const root = createRoot(document.getElementById("root")!);

if (page === "/politica-de-privacidade" || page === "/politica-de-privacidade/") {
  root.render(<PrivacyPolicy />);
} else {
  root.render(<App />);
}
