import React from 'react';
import { connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';
import { removeErrors } from '../../actions/posts_actions';
import { fetchPosts } from '../../actions/posts_actions';
import Post from './post';





const mapStateToProps= (state, ownProps) =>{
    return{
        currentUser: state.entities.users[state.session.id],
        user: state.entities.users[ownProps.match.params.userId],
        userId: ownProps.match.params.userId,
        errors: state.errors.posts,
        users: state.entities.users,
        posts: Object.keys(state.entities.posts).map(key => state.entities.posts[key]),
        likes: Object.keys(state.entities.likes).map(key => state.entities.likes[key]),
        


    }
}

const mapDispatchToProps= dispatch =>{
    return{
        openModal: ()=> dispatch(openModal({modal: 'createpost'})),
        removeErrors: ()=> dispatch(removeErrors()),
        closeModal: () => dispatch(closeModal()),
        fetchPosts: () => dispatch(fetchPosts()),
        
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post))