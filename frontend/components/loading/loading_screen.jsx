import React from 'react'
import { Hearts} from 'react-loader-spinner'


const LoadingScreen = () => {
    return (
        <div className= "loading-container">
            <div className= "loading-text"> We</div>
            <div>
            <Hearts
                height = "240"
                width = "240"
                radius = "9"
                color = "#1876F2"
                ariaLabel = 'three-dots-loading'     
                wrapperStyle
                wrapperClass
            />
            </div>
            <div className= "loading-text"> BasicBook</div>
            
        </div>
    )
}

export default LoadingScreen