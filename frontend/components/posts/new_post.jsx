import React from 'react'
import {withRouter} from 'react-router-dom'

class NewPost extends React.Component {
    constructor(props){
        super(props)
            this.state = {
                body: "",
                profile_id: this.userId,
                author_id: this.props.currentUser.id
            }
            this.handleSubmit =this.handleSubmit.bind(this);
            this.handleInput = this.handleInput.bind(this)
    

    }
    handleInput(type) {
        return e => { 
            this.setState({[type]: e.currentTarget.value})
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        const post = Object.assign({}, this.state)
        this.props.createPost(post).then(this.props.closeModal)
    }
    render() {
        if(!this.props.currentUser) return null
        
        // let userId= this.props.match.params.userId
        console.log("this is my new post")
        console.log(this.props.currentUser.id)
        console.log(this.props.userId)
    
        return(
            
            
            <div className="postbox">
                <form onSubmit={this.handleSubmit}>
                    <button onClick={()=>{this.props.closeModal();}} className="close-x">X</button>
                    <h1>Create Post</h1>
                    <textarea 
                    cols="30" rows="10" 
                    value = {this.state.body}
                    onChange={this.handleInput("body")}
                    ></textarea>
                    <br />
                    <input type="hidden" 
                    value = {this.state.author_id}
                    onChange= {this.handleInput("author_id")}
                    />
                    <input type="text" 
                    value = {this.state.profile_id}
                    onChange= {this.handleInput("profile_id")}
                    />
                    <button onClick = {this.handleSubmit}>Post</button>
                </form>

            </div>
        )
    }





}

export default withRouter(NewPost)

