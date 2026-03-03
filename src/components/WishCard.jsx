import React, { useState } from 'react';
import { motion } from 'framer-motion';

const WishCard = ({ wish }) => {
  const [reactions, setReactions] = useState(wish.reactions || { like: 0, heart: 0, celebrate: 0 });
  const [showComment, setShowComment] = useState(false);
  const [comments, setComments] = useState(wish.comments || []);
  const [newComment, setNewComment] = useState('');

  const addReaction = (type) => {
    setReactions(prev => ({ ...prev, [type]: prev[type] + 1 }));
  };

  const addComment = () => {
    if (!newComment.trim()) return;
    setComments([...comments, { id: Date.now(), text: newComment, user: 'You' }]);
    setNewComment('');
    setShowComment(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="card h-100 border-0 shadow-lg"
      style={{
        borderRadius: '20px',
        background: 'rgba(255,255,255,0.8)',
        backdropFilter: 'blur(10px)',
      }}>
      {wish.image && (
        <img src={wish.image} className="card-img-top" alt="wish" style={{ height: '200px', objectFit: 'cover', borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }} />
      )}
      <div className="card-body">
        <h5 className="card-title" style={{ color: '#f5576c' }}>{wish.recipient}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{wish.relationship}</h6>
        <p className="card-text">{wish.message}</p>

        {/* Reactions */}
        <div className="d-flex gap-2 mb-3">
          <button className="btn btn-outline-primary btn-sm" onClick={() => addReaction('like')}>
            👍 {reactions.like}
          </button>
          <button className="btn btn-outline-danger btn-sm" onClick={() => addReaction('heart')}>
            ❤️ {reactions.heart}
          </button>
          <button className="btn btn-outline-warning btn-sm" onClick={() => addReaction('celebrate')}>
            🎉 {reactions.celebrate}
          </button>
        </div>

        {/* Comments */}
        <div>
          <button className="btn btn-link p-0" onClick={() => setShowComment(!showComment)}>
            {showComment ? 'Cancel' : 'Add a comment'}
          </button>
          {showComment && (
            <div className="mt-2">
              <input
                type="text"
                className="form-control form-control-sm"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Write something..."
              />
              <button className="btn btn-primary btn-sm mt-1" onClick={addComment}>Post</button>
            </div>
          )}
          {comments.length > 0 && (
            <div className="mt-2">
              {comments.map(c => (
                <div key={c.id} className="border-bottom py-1">
                  <strong>{c.user}:</strong> {c.text}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default WishCard;