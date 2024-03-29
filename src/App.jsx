import React from 'react'
import Header from './Pages/Header'
import Home from './Pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PowerBI from './Pages/PowerBI'
import Selenium from './Pages/Selenium'
import Aws from './Pages/Aws'
import Python from './Pages/Python'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Footer from './Pages/Footer'
import SoftwareTraining from './Pages/SoftwareTraining'
import FullstackDeveloperCourse from './Pages/FullstackDeveloperCourse'
import Pagenotfound from './Pages/Pagenotfound'
function App() {
    return (
        <div>

            <Router basename='/'>
                <Header />
                <div>
                    <Routes>
                        <Route exact path='/' element={<Home />}></Route>
                        <Route path='/about-us' element={<About />}></Route>
                        <Route path='/contact-us' element={<Contact />}></Route>
                        <Route path='/power-bi-training-in-chennai/' element={<PowerBI />}></Route>                      
                        <Route path='/selenium-training-in-chennai/' element={<Selenium />}></Route>
                        <Route path='/aws-training-in-chennai/' element={<Aws />}></Route>
                        <Route path='/python-training-in-chennai/' element={<Python />}></Route>
                        <Route path='/best-software-training-institute-in-chennai/' element={<SoftwareTraining />}></Route>
                        <Route path='/full-stack-developer-course-in-chennai/' element={<FullstackDeveloperCourse />}></Route>
                        <Route path="*" element={<Pagenotfound />}
                        />
                    </Routes>
                </div>
                <Footer />
            </Router>



        </div>
    )
}

export default App
