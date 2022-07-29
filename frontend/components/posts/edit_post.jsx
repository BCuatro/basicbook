import React from 'react'
import {withRouter} from 'react-router-dom'

class EditPost extends React.Component {
    constructor(props){
        super(props)
        this.state = this.props.post
        
        this.handleSubmit =this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this)
    }
    handleUpdate(type) {
        return e => { 
            this.setState({[type]: e.currentTarget.value})
        }
    }
    componentDidMount(){
        // this.props.fetchPost(this.state.id)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updatePost(this.state).then(this.props.closeModal)
      }

    render() {
        if(!this.props.post) return null
        
        return(
            // <div className="postbox" >
            //     <p> Hi </p>

            //     <button onClick={()=>{this.props.closeModal();}} className="close-x">X</button>
            // </div>
            <div className="postbox">
                <form onSubmit={this.handleSubmit}>
                    <button onClick={()=>{this.props.closeModal();}} className="close-x">X</button>
                    <h1>Edit Post</h1>
                    <textarea 
                    cols="30" rows="10" 
                    value = {this.state.body}
                    onChange={this.handleUpdate("body")}
                    ></textarea>
                    <br />
                    <button onClick = {this.handleSubmit}>Post</button>
                </form>

            </div>
        )
    }





}

export default withRouter(EditPost)

