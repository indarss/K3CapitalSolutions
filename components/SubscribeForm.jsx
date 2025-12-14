"use client";

import { useState } from "react";

export default function SubscribeForm() {
  const [status, setStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        body: formData
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Subscription failed");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage(error.message || "Network error");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="subscribe-form">
        <input name="name" type="text" placeholder="Your Name" required />
        <input name="email" type="email" placeholder="Your Email" required />
        <button className="btn btn-primary" type="submit">
          Subscribe
        </button>
      </form>

      {status === "loading" && (
        <p style={{ color: "var(--text-muted)", marginTop: "10px" }}>
          Subscribing…
        </p>
      )}

      {status === "success" && (
        <p style={{ color: "#2d5016", marginTop: "10px" }}>
          Thank you — you're subscribed!
        </p>
      )}

      {status === "error" && (
        <p style={{ color: "#d32f2f", marginTop: "10px", fontWeight: "500" }}>
          {errorMessage || "Something went wrong — please try again."}
        </p>
      )}
    </div>
  );
}
