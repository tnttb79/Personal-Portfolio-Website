import { useRef, useState } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
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
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ykv012d",
        "template_e0s34eo",
        formRef.current,
        "h6SEcqgKHUxxLVWhw"
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
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
            <span>"tanguyentruongthang@gmail.com"</span>
          </div>
          <div className='infoItem'>
            <h2>Location</h2>
            <span>"Phoenix, Arizona"</span>
          </div>
          <div className='infoItem'>
            <h2>Phone</h2>
            <span>"+1 623 272 2430"</span>
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

        <div className='formContainer'>
          <form>
            <input type='text' placeholder='Name' />
            <input type='email' placeholder='Email' />
            <textarea placeholder='Message'></textarea>
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
