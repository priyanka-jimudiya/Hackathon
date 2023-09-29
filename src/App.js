import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import Signup from './components/Signup'
import Template from './components/Template'


export default function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/about" element={<About />}></Route>
                    <Route exact path="/contact" element={<Contact />}></Route>
                    <Route exact path="/login" element={<Login />}></Route>
                    <Route exact path="/register" element={<Signup />}></Route>
                    <Route exact path="/template" element={<Template />}></Route>

                    <Route path="/" element={<Home />}></Route>
                </Routes>
            </Router>
        </>
    )
}
