import React from 'react';
import "./contact.css";

const Contact = () => {
    return (
        <section className="contact">
            <div className="contact-wrapper">
                <div className="contact-item">
                    <div className="contact-item-icon">
                        <i className="bi bi-house-fill">
                            Adress
                        </i>
                    </div>
                    <p className="contact-item-text">Erbil-Iraq</p>
                </div>
                <div className="contact-item">
                    <div className="contact-item-icon">
                        <i className="bi bi-telephone-fill">
                            Phone
                        </i>
                    </div>
                    <p className="contact-item-text">123-456-789</p>
                </div>
                <div className="contact-item">
                    <div className="contact-item-icon">
                        <i className="bi bi-envelope-fill">
                            Email
                        </i>
                    </div>
                    <p className="contact-item-text">Info@gmail.com</p>
                </div>
            </div>
            <form className="contact-form" onSubmit={e => e.preventDefault()}>
                <h2 className="contact-form-title">Contact Us Form</h2>
                <div className="contact-input-wrapper">
                    <input type="text" placeholder='Name' />
                    <input type="text" placeholder='Subject' />
                    <input type="text" placeholder='Email' />
                </div>
                <textarea placeholder='Your Message' rows="5" className='contact-textarea'></textarea>
                <button className="contact-btn">Send</button>
            </form>
        </section>
    );
}

export default Contact;
