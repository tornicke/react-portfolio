import React from "react";

export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <form>
        <label for="nameId">Please enter your name </label>
        <input
          name="name"
          required
          type="text"
          id="nameId"
          className="feedback-input"
          placeholder="Name"
        />

        <label for="emailId">Please enter a valid email </label>
        <input
          name="email"
          required
          type="email"
          id="emailId"
          className="feedback-input"
          placeholder="Email"
        />
        <label for="commentId">Please enter your message </label>
        <textarea
          name="text"
          required
          className="feedback-input"
          id="commentId"
          placeholder="Message"
        ></textarea>
        <input type="submit" value="Click here to submit" />
      </form>
    </div>
  );
}
