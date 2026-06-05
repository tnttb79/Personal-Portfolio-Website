import { useRef, useState } from "react";
import "./contact.scss";
import emailjs from "@emailjs/browser";
import { socials } from "../../config/portfolio";

const Contact = () => {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        "service_ykv012d",
        "template_e0s34eo",
        formRef.current,
        "h6SEcqgKHUxxLVWhw"
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
          formRef.current.reset();
        },
        (err) => {
          setError(true);
          setSuccess(false);
          console.error("EmailJS Error:", err);
        }
      );
  };

  return (
    <div className="contact-grid">
      <div className="contact-info">
        <div className="info-item">
          <div className="label">email</div>
          <div className="value">
            <a href={`mailto:${socials.email}`}>{socials.email}</a>
          </div>
        </div>
        <div className="info-item">
          <div className="label">location</div>
          <div className="value">{socials.location}</div>
        </div>
        <div className="info-item">
          <div className="label">phone</div>
          <div className="value">
            <a href={`tel:${socials.phone.replace(/\s/g, "")}`}>{socials.phone}</a>
          </div>
        </div>
        <div className="info-item">
          <div className="label">social</div>
          <div className="socials">
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img src="/linkedIn.png" alt="" />
            </a>
            <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <img src="/github.png" alt="" />
            </a>
          </div>
        </div>
      </div>

      <form className="contact-form" ref={formRef} onSubmit={sendEmail}>
        <div>
          <label className="field-label" htmlFor="c-name">name <span className="star">*</span></label>
          <input id="c-name" type="text" required placeholder="Your name" name="name" />
        </div>
        <div>
          <label className="field-label" htmlFor="c-email">email <span className="star">*</span></label>
          <input id="c-email" type="email" required placeholder="you@example.com" name="email" />
        </div>
        <div>
          <label className="field-label" htmlFor="c-msg">message</label>
          <textarea id="c-msg" rows={7} placeholder="What would you like to build together?" name="message" />
        </div>
        <button type="submit">$ send --message</button>
        {error && (
          <span className="form-status error" role="alert">
            ✗ Error sending message. Please try again.
          </span>
        )}
        {success && (
          <span className="form-status success" role="status">
            ✓ Message sent successfully!
          </span>
        )}
      </form>
    </div>
  );
};

export default Contact;
