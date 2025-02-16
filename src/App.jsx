import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from "./component/Navbar";
import Home from "./component/Home"
import Register from "./component/Register";
import Login from "./component/Login";
import Footer from "./component/Footer";
import Cart from "./component/Cart";

const tabs = {
  home: <Home />,
  cart: <Cart />,
  register: <Register />,
  login: <Login />,
};

const App = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} /> 
      {tabs[activeTab]}
      <Footer />
    </>
  );
};

export default App;