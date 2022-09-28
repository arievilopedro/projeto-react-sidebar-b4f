import { formControlClasses } from "@mui/material";
import "./App.css";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import logo from "./Logo.png";

function App() {
  return (
    <div className="App">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
