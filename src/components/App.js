import React from 'react'
import routes from '../Routes'
import { Router } from 'react-router-dom'
import history from '../History'

const App = () => {
    return (
        <Router history = {history} >
            <div>
                {routes}
            </div>
        </Router>
    )
}

export default App