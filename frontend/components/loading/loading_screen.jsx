import React from 'react'
import { Hearts} from 'react-loader-spinner'


const LoadingScreen = () => {
    return (
        <div>
            <div> We</div>
            <div>
            <Hearts
                height = "80"
                width = "80"
                radius = "9"
                color = 'red'
                ariaLabel = 'three-dots-loading'     
                wrapperStyle
                wrapperClass
            />
            </div>
            <div> BasicBook</div>
            
        </div>
    )
}

export default LoadingScreen