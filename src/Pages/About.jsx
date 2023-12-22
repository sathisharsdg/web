import React from 'react'
import { Helmet } from 'react-helmet'
function About() {
    return (
        <div>
            <Helmet>
                <title>About Page</title>
            </Helmet>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1>Welcome</h1>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About
