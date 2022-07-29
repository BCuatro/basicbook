import React from 'react'
import {withRouter} from 'react-router-dom'

class NewPost extends React.Component {
    constructor(props){
        super(props)
            this.state = {
                body: "",
                // url: this.props.location.pathname.split('/'),
                profile_id: this.props.location.pathname.split("/")[this.props.location.pathname.split("/").length-1],
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
      componentWillUnmount(){
        this.props.removeErrors();
    }

    handleSubmit(e) {
        e.preventDefault()
        const post = Object.assign({}, this.state)
        this.props.createPost(post).then(this.props.closeModal)
    }
    // renderErrors() {
    //     return(
    //         <ul> 
    //             {this.props.errors.map((error, index) => (
    //             <li key={`error-${index}`}>
    //                 {error}
    //             </li>
    //             ))}
    //         </ul>
    //     );
    //   }
    render() {
        
        let buttonId
        if(!this.props.currentUser) return null
        
        if(this.state.body.replace(/ /g,'').length ===0){
           buttonId ="invalidButton"
        } else {
            buttonId= "newButton"
        }
        
        // let userId= this.props.match.params.userId
        
    
        return(
            
            
            <div className="postcontainer">
                <div className= "post">
                    <header className ="postHeader">Create Post</header>
                    {/* <div className= "errors">{this.renderErrors()} </div> */}
                    <form onSubmit={this.handleSubmit}>
                        <button onClick={()=>{this.props.closeModal();}} className="close-x">X</button>
                        
                        <textarea 
                        cols="50" rows="10" 
                        placeholder='What is on your mind?'
                        value = {this.state.body}
                        onChange={this.handleInput("body")}
                        ></textarea>
                        <br />
                        <input type="hidden" 
                        value = {this.state.author_id}
                        onChange= {this.handleInput("author_id")}
                        />
                        <input type="hidden" 
                        value = {this.state.profile_id}
                        onChange= {this.handleInput("profile_id")}
                        />
                        <br />
                        <button disabled={this.state.body.replace(/ /g,'').length ===0} onClick = {this.handleSubmit} className= "newPostButton" id= {buttonId}>Post</button>
                        
                    </form>
                </div>

            </div>
        )
    }





}

export default withRouter(NewPost)

