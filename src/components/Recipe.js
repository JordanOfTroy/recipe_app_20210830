import React from 'react'
// import {Link} from 'react-router-dom'

const Recipe = (props) => {
    const {recipes} = props

    return (
        <div>
            Recipe component
            <h4>{recipes}</h4>
        </div>
        
        // Will map over al users recipes and return a Link to the specific recipe

    )
}

export default Recipe