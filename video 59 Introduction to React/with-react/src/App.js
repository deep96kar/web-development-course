import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  // const [count, setCount] = useState(0);
  const [value, setvalue] = useState(0);
  return (
    <div className="App">
      <Navbar logotext="Deep kumar"/>
      <div className="value">{value}</div>
      <button onClick={() => {setvalue(value + 1)}}>click me</button>
      <Footer/>
    </div>
  );
}

export default App;
