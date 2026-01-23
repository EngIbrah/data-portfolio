import emailjs from "emailjs-com";
import { useRef, useState } from "react";

export const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pk6pah2",
        "template_1rstubt",
        formRef.current,
        "YQrAcyKXbfkOxVqXt"
      )
      .then(
        () => {
          setStatus("Message sent successfully.");
          formRef.current.reset();
        },
        () => {
          setStatus("Something went wrong. Try again.");
        }
      );
  };

  return (
    <section className="border-t border-border py-24">
      <div className="container mx-auto px-6 max-w-xl">
        <h2 className="text-2xl font-semibold mb-6">Get in touch</h2>

        <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
          <input
            name="from_name"
            placeholder="Your name"
            required
            className="w-full bg-card border border-border rounded-lg p-3"
          />
          <input
            name="from_email"
            type="email"
            placeholder="Your email"
            required
            className="w-full bg-card border border-border rounded-lg p-3"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your message"
            required
            className="w-full bg-card border border-border rounded-lg p-3"
          />

          <button
            type="submit"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg"
          >
            Send message
          </button>

          {status && (
            <p className="text-sm text-muted-foreground">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
};
