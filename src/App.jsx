import { useState } from 'react'
import "./CommonResources/js/custom.js";
import "../src/CommonResources/js/bootstrap.js";
import "../src/CommonResources/css/bootstrap.css";
import "../src/CommonResources/css/styles.css";
import "./CommonResources/js/jquery-3.7.1.js";
import "../src/CommonResources/js/custom.js";


import Header from './Component/Header/Header';
import Alert from "./Component/Alert/Alert";
import Section1 from "./Component/Section/Section1/Section1.jsx";
import Section2 from "./Component/Section/Section2/Section2.jsx";
import Section3 from "./Component/Section/Section3/Section3.jsx";
import Section4 from "./Component/Section/Section4/Section4.jsx";
import Section5 from "./Component/Section/Section5/Section5.jsx";
import Section6 from "./Component/Section/Section6/Section6.jsx";
import Footer from "./Component/Footer/Footer.jsx";



function App() {
  const [count, setCount] = useState(0)

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

export default App
