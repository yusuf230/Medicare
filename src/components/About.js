import React from 'react';
import Team from '../components/images/Team.jpg';  // Add team image
// import milestone1 from '../images/milestone1.jpg';  // Add milestone images
// import milestone2 from '../images/milestone2.jpg';

function About() {
  return (
    <section className="about-section">
      <div className="container">
        <h1>About Us</h1>
        <p>Medicare chemist & drugist.a global leader in pharmaceuticals, dedicated to advancing healthcare through the development of innovative medicines. Our mission is to provide high-quality products and solutions to enhance the health and well-being of people around the world.</p>
        <h2>Our Values</h2>
        <p>We are driven by our core values of integrity, excellence, and innovation. These principles guide our actions and decisions, ensuring that we always put the needs of our patients and customers first.</p>
        <h2>Our Vision</h2>
        <p>Our vision is to be the most trusted partner in healthcare, recognized for our commitment to improving lives through cutting-edge research and outstanding service. We strive to make a positive impact on global health by delivering safe, effective, and affordable medications.</p>
        
        <h2>Our Team</h2>
        <div className="text-center">
          <img src={Team} alt="Our Team" className="img-fluid mb-4" />
        </div>
        <p>Meet our dedicated team of professionals who are committed to bringing you the best in healthcare solutions. Our team's expertise and passion drive our success and innovation in the pharmaceutical industry.</p>
        
       
       
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

export default About;
