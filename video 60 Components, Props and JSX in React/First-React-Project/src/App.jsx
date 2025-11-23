import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Card from "./components/card";

function App() {
  return (
    <>
      <Navbar />
      <div className="cards">
        <Card title="Card 1" description="Card 2 desc"/>
        <Card title="Card 2" description="Card 2 desc"/>
        <Card title="Card 3" description="Card 3 desc"/>
        <Card title="Card 4" description="Card 4 desc"/>
      </div>
     
      <Footer />
    </>
  );
}

export default App;
