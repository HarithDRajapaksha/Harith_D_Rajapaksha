import React, { useState } from "react";

function FeedbackSection() {
  const [submitted, setSubmitted] = useState(false);
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (!feedback.name || !feedback.email || !feedback.message) {
      setError("Please fill out all fields.");
      return;
    }
    setError("");
    // Here you would send feedback to your backend or email service
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="feedback-section">
        <h2>Feedback</h2>
        <p>Thank you for your feedback! 🎉</p>
      </section>
    );
  }

  return (
    <section className="feedback-section">
      <form className="feedback-form" onSubmit={handleSubmit} autoComplete="off">
      <h2>Feedback</h2>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={feedback.name}
            onChange={handleChange}
            required
            autoComplete="off"
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={feedback.email}
            onChange={handleChange}
            required
            autoComplete="off"
          />
        </label>
        <label>
          Your Feedback
          <textarea
            name="message"
            rows={4}
            value={feedback.message}
            onChange={handleChange}
            required
          />
        </label>
        {error && <div className="feedback-error">{error}</div>}
        <button type="submit" className="feedback-submit-btn">Send Feedback</button>
      </form>
    </section>
  );
}

export default FeedbackSection;