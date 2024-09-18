import React from 'react';

function Contact() {
  return (
    <section className="contact-section">
      <div className="container">
        <h1>Contact Us</h1>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" id="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
      <div style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#f8f9fa',
        padding: '10px',
        borderRadius: '8px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
      }}>
        <h5>Contact for Delivery:</h5>
        <p>9284153853</p>
      </div>
    </section>
  );
}

export default Contact;
