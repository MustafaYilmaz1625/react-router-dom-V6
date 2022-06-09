import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
// pages
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import User from "./components/User";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
