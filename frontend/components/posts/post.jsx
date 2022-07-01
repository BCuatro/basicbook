import React from 'react'
import PostIndexContainer from './post_index_container';


class Post extends React.Component {
    constructor(props){
        super(props)
        this.handleOpenModal = this.handleOpenModal.bind(this);
           
    }

    handleOpenModal(e){
        e.preventDefault();
        this.props.openModal();
    }

    render() {
        console.log("this is my post form")
        console.log(this.props.userId)
        return(
            <div className="postbox"> 
            {/* //div1 */}
                <button id="postButtonModal" onClick = {this.handleOpenModal}>What is on your mind?</button>
                <PostIndexContainer />
               

            </div>
        )
    }


}

export default Post