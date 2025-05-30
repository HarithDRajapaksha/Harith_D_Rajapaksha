import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setError("");

    const SERVICE_ID = "Dew_97_Portfolio";
    const TEMPLATE_ID = "template_o9sxw4h";
    const PUBLIC_KEY = "fLGszrnkcob3GeAhd";

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );
      setSubmitted(true);
    } catch (err) {
      setError("Failed to send. Please try again or contact me directly.");
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <p className="contact-thankyou accent">
        Thank you for reaching out! I’ll get back to you soon.
      </p>
    );
  }

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      ref={formRef}
      autoComplete="off"
    >
      <h2>Contact Me</h2>
      <label>
        Name
        <input
          required
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Email
        <input
          required
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Message
        <textarea
          required
          name="message"
          value={form.message}
          onChange={handleChange}
        />
      </label>
      {error && (
        <div className="feedback-error" style={{ color: "#ff4b4b" }}>
          {error}
        </div>
      )}
      <button type="submit" disabled={sending}>
        {sending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

export default ContactForm;