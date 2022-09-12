import Register from "./pages/Register";
import Login from "./pages/Login";
import "./App.scss";
import Home from "./pages/Home";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Register />
    </div>
  );
}

export default App;
