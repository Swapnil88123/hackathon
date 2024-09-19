// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import SlackBtn from "./components/SlackBtn";
import GitHubBtn from "./components/GithubBtn";
import Integrations from "./components/pages/Integrations";
import Navbar from "./components/Navbar";

const App: React.FC = () => (
  <Router>
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <div style={{ marginLeft: "250px", padding: "1rem" }}>
          <Routes>
            <Route path="/" element={<Integrations />} />
            <Route path="/slack" element={<SlackBtn />} />
            <Route path="/github" element={<GitHubBtn />} />
          </Routes>
        </div>
      </div>
    </div>
  </Router>
);
export default App;
