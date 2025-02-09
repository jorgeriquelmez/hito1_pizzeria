import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from "./component/Navbar";
import Home from "./component/Home"
import Register from "./component/Register";
import Login from "./component/Login";
import Footer from "./component/Footer";

const App = () => {
    const [activeTab, setActiveTab] = useState('register');

    return (
        <>
            <Navbar activeTab={activeTab} setActiveTab={setActiveTab} /> 
            {activeTab === 'home' ? <Home /> : activeTab === 'register' ? <Register /> : <Login />}
            <Footer />
        </>
    );
};

export default App;