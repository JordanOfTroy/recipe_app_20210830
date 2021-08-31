import React from 'react'
import routes from '../Routes'
import { Router } from 'react-router-dom'
import history from '../History'

import Header from '../components/Header'

const App = () => {
    return (
        <div className = 'ui container' >
            <Router history = {history} >
                <Header />
                <div>
                    {routes}
                </div>
            </Router>
        </div>
    )
}


export default App