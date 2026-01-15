import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
  });

  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const messageRef = useRef(null);

  useEffect(() => {
    if (!status) return;

    const timer = setTimeout(() => {
      setStatus("");
    }, 5000);

    return () => clearTimeout(timer);
  }, [status]);

  useEffect(() => {
    if (status && messageRef.current) {
      messageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [status]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.website) {
      setStatus("success");
      setFormData({ name: "", email: "", message: "", website: "" });
      return;
    }

    setIsSending(true);
    setStatus("");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "", website: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main className="contact">
      <h1>Contact</h1>
      <p className="contact__intro">
        I’d love to hear from you. Feel free to write in English, Spanish
        (Castellano), or Catalan, and I’ll get back to you by email as soon as
        possible.
      </p>

      <form className="contact__form" onSubmit={handleSubmit}>
        <div className="contact__honeypot" aria-hidden="true">
          <label>
            Website
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </label>
        </div>

        <label>
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Message
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit" disabled={isSending}>
          {isSending ? "Sending..." : "Send message"}
        </button>

        {status === "success" && (
          <p ref={messageRef} className="contact__success" role="status">
            Thank you, your message has been sent.
          </p>
        )}

        {status === "error" && (
          <p ref={messageRef} className="contact__error" role="alert">
            Sorry, something went wrong. Please try again.
          </p>
        )}
      </form>
    </main>
  );
};

export default Contact;
