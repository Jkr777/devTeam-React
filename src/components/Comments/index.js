import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { removeError, fetchPost, addComment, deleteComment} from '../../redux/action_generators';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';
import CommentPost from './CommentPost';
import Comment from './Comment';

const Comments = ({ error, removeError, match, post: { clicked }, fetchPost, addComment, user: {_id}, deleteComment }) => {
  useEffect(() => {
    if(!(clicked._id === match.params.id)) {
      fetchPost(match.params.id);
    };
  }, []);

  useEffect(() => {
    if(error.message) {
      removeError();
    }
  }, [removeError]);

  return (
    <div className="comments-container">
      {error.message && <p className="comments-container__error">{error.message}</p>}
      <Link className="dev-profile__btn" to="/posts">Go Back</Link>

      <hr className="comments-container__top-line" />  

      <CommentPost 
        clicked={clicked}
      />
      <CommentForm 
        postId={match.params.id}
        addComment={addComment}
      />
      
      {clicked.comments.map(e => <Comment 
        clickedPostId={clicked._id} 
        removeComment={deleteComment} 
        currentId={_id} 
        key={e._id} 
        {...e}/>)
      }
    </div>
  )
};

const mapStateToProps = state => ({
  user: state.user,
  post: state.post,
  error: state.error
})

export default connect(mapStateToProps, { removeError, fetchPost, addComment, deleteComment })(Comments);