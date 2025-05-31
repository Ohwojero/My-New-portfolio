import React, { useState, useEffect } from "react";
import  './rightsidebar.css'

const Right = () => {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "" || feedback.trim() === "") return;
    const newComment = { name: name.trim(), feedback: feedback.trim() };
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    localStorage.setItem("comments", JSON.stringify(updatedComments));
    setName("");
    setFeedback("");
  };

  return (
    <div className="right-container">
      <h2 className="feedback-text">I will love to hear your Feedback</h2>
      <p className="feedback-text-two">Please Leave a comment below</p>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
        />
        <label htmlFor="feedback">Feedback</label>
        <textarea
          id="feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Your feedback"
          rows={4}
        />
        <button type="submit">Submit</button>
      </form>
      <div className="comments-list">
        {comments.map((comment, index) => (
          <div key={index} className="comment-item">
            <p className="comment-name"><strong>{comment.name}</strong></p>
            <p className="comment-feedback">{comment.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Right;
