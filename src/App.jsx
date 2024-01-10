import React from 'react'
import Header from './Pages/Header'
import Home from './Pages/Home'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import PowerBI from './Pages/PowerBI'
import Snowflake from './Pages/Snowflake'
import Selenium from './Pages/Selenium'
import Aws from './Pages/Aws'
import Python from './Pages/Python'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Footer from './Pages/Footer'
import SoftwareTraining from './Pages/SoftwareTraining'
function App() {
    return (
        <div>
                
            <Router>
            <Header/>
          <div>
         
          <Routes>
           
                    
                    <Route  exact path='/' element={<Home/>}></Route>
                    <Route  path='/about-us' element={<About/>}></Route>
                    <Route  path='/contact-us' element={<Contact/>}></Route>
                    <Route  path='/power-bi-training-in-chennai/' element={<PowerBI/>}></Route>
                    <Route  path='/snowflake-training-in-chennai/' element={<Snowflake/>}></Route>
                    <Route  path='/selenium-training-in-chennai/' element={<Selenium/>}></Route>
                    <Route  path='/aws-training-in-chennai/' element={<Aws/>}></Route>
                    <Route  path='/python-training-in-chennai/' element={<Python/>}></Route>
                    <Route  path='/best-software-training-in-chennai/' element={<SoftwareTraining/>}></Route>
                    


                </Routes>
          </div>
               <Footer/>
            </Router>
            

             
        </div>
    )
}

export default App
