import React from 'react'
import {withRouter} from 'react-router-dom'

class EditComment extends React.Component {
    constructor(props){
        super(props)
            this.state = this.props.comment
            this.handleSubmit =this.handleSubmit.bind(this);
            this.handleUpdate = this.handleUpdate.bind(this)
    

    }
    
    handleUpdate(type) {
        return e => { 
            this.setState({[type]: e.currentTarget.value})
        }
    }
    //   componentWillUnmount(){
    //     this.props.removeErrors();
    // }

    handleSubmit(e) {
        e.preventDefault()
        this.props.updateComment(this.state).then(this.props.closeModal)
    }
    
    render() {
        // console.log(this.props.post)
       
        // const {post, currentUser, users, user, userId, errors}= this.props
        let buttonId
        // if(!this.props.currentUser) return null
        
        if(this.state.body.replace(/ /g,'').length ===0){
           buttonId= "invalidButton"
        } else {
            buttonId= "newButton"
        }
        
        // let userId= this.props.match.params.userId
        // console.log("this is my new post")
        // console.log(currentUser.id)
        // console.log(post.id)
        
        return(
            
            <div className="edit-comment-form">
                {/* <div className= "comment">
                    <header className ="postHeader">Create Post</header> */}
                    
                <form onSubmit={this.handleSubmit}>
                    <div className ="edit-comment-header">
                        <h2 className= "edit-form-title">Edit Comment</h2>
                        <div
                        onClick={()=>{
                            this.props.closeModal();
                        }}className="close-x"><i className="fa fa-lg fa-x"></i></div>
                    </div>
                    <div className="edit-comment-container">
                        <input
                            type = "text"
                            id='commentInputField'
                            cols="50" rows="1"
                            value={this.state?.body}
                            onChange={this.handleUpdate("body")}
                        ></input>
                        
                        <button
                            
                            className="newCButton"
                            type= "submit"
                            id={buttonId}
                            disabled={this.state.body.replace(/ /g, '').length === 0}
                            onClick={this.handleSubmit}> Submit
                        </button>
                    </div>
                </form>

            </div>
        )
    }





}

export default withRouter(EditComment)

