import { useRef, useState } from "react";
import "./contact.scss";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

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
          formRef.current.reset(); // Clear form after successful submission
        },
        (error) => {
          setError(true);
          setSuccess(false);
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <div className='contact'>
      <div className='container'>
        <div className='textContainer'>
          <h1>Contacts</h1>
          <div className='infoItem'>
            <h2>Email</h2>
            <span>tanguyentruongthang@gmail.com</span>
          </div>
          <div className='infoItem'>
            <h2>Location</h2>
            <span>Phoenix, Arizona</span>
          </div>
          <div className='infoItem'>
            <h2>Phone</h2>
            <span>+1 623 272 2430</span>
          </div>
          <div className='infoItem'>
            <h2>Social Media</h2>
            <div className='socialLinks'>
              <a
                href='https://www.linkedin.com/in/thang-ta-a68660240/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src='/linkedIn.png' alt='LinkedIn' />
              </a>
              <a
                href='https://github.com/tnttb79'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src='/github.png' alt='GitHub' />
              </a>
            </div>
          </div>
        </div>

        <motion.div
          className='formContainer'
          initial='initial'
          whileInView='animate'
          variants={variants}
        >
          <motion.form ref={formRef} onSubmit={sendEmail} variants={variants}>
            <input type='text' required placeholder='Name' name='name' />
            <input type='email' required placeholder='Email' name='email' />
            <textarea rows={8} placeholder='Message' name='message' />
            <button type='submit'>Submit</button>
            {error && (
              <span style={{ color: "red", fontSize: "14px" }}>
                Error sending message. Please try again.
              </span>
            )}
            {success && (
              <span style={{ color: "green", fontSize: "14px" }}>
                Message sent successfully!
              </span>
            )}
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
