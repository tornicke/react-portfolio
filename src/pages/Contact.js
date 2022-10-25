import React from "react";

export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <form>
        <input
          name="name"
          required
          type="text"
          class="feedback-input"
          placeholder="Name"
        />
        <input
          name="email"
          required
          type="email"
          class="feedback-input"
          placeholder="Email"
        />
        <textarea
          name="text"
          required
          class="feedback-input"
          placeholder="Comment"
        ></textarea>
        <input type="submit" value="SUBMIT" />
      </form>
    </div>
  );
}
