import React, { useState } from 'react';
import './Comments.css'
const Comments = () => {
    const [newComment, setNewComment] = useState('');
    const [comments, setComments] = useState([]);
    const [show, setShow] = useState(false);

    const handleAddComment = (e) => {
        e.preventDefault();

        if (newComment.trim()) {
            setComments((prevComments) => [...prevComments, newComment]);
            console.log('New Comment:', newComment);
            setNewComment('');
            setShow(false); 
        }
        else{
             setShow(false);
        }
    };

    return (
        <div className='container'>
            <h1>User Comments</h1>

            {show ? (
                <form onSubmit={handleAddComment}>
                    <textarea
                        rows="10"
                        cols="30"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Add your comment..."
                        className='text'
                    />
                    <button type="submit" className='add-btn'>Add Comment</button>
                </form>
            ) : (
                <button onClick={() => setShow(true)} className='add-btn'>Add Comment</button>
            )}

            <div>
                <h2>Comments...</h2>
                {comments.length === 0 ? (
                    <p>No comments yet...</p>
                ) : (
                    <ul>
                        {comments.map((comment, index) => (
                            <li key={index}>{comment}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Comments;
