import { useState } from "react";
import "./App.css";
import "../src/assets/css/bootstrap.css";
import "../src/assets/css/styles.css";
import Header from "./components/Header/Header";
import Alert from "./components/Alert/Alert";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section";
import Section3 from "./components/Section3/Section3";
import Section4 from "./components/Section4/Section4";
import Section5 from "./components/Section5/Section5";
import Footer from "./components/Footer/Footer";
import Section6 from "./components/Section6/Section6";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Alert />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </>
  );
}

export default App;
