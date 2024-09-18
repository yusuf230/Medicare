// import React from 'react';
// import quality from '../components/images/receive-referral.jpg';  // Ensure these images exist
// import research from '../components/images/track-referral.jpg';
// import service from '../components/images/payouts.jpg';

// function Features() {
//   return (
//     <section className="features-section text-center">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-4">
//             <img src={quality} alt="Quality" className="img-fluid" />
//             <h3>High Quality</h3>
//             <p>We provide top-notch pharmaceutical products.</p>
//           </div>
//           <div className="col-md-4">
//             <img src={research} alt="Research" className="img-fluid" />
//             <h3>Innovative Research</h3>
//             <p>We invest in cutting-edge research and development.</p>
//           </div>
//           <div className="col-md-4">
//             <img src={service} alt="Service" className="img-fluid" />
//             <h3>Excellent Service</h3>
//             <p>We are committed to exceptional customer service.</p>
//           </div>
//           <h2 className="mt-5 mb-4">Our Products</h2>
//         <div className="row">
//           <div className="col-md-4">
//             <img src="product1" alt="Product 1" className="img-fluid mb-3" />
//             <h4>Product 1</h4>
//             <p>Effective and reliable, our Product 1 is designed to meet your healthcare needs.</p>
//           </div>
//           <div className="col-md-4">
//             <img src="product2" alt="Product 2" className="img-fluid mb-3" />
//             <h4>Product 2</h4>
//             <p>With innovative formulation, Product 2 is your best choice for comprehensive care.</p>
//           </div>
//           <div className="col-md-4">
//             <img src="" alt="Product 3" className="img-fluid mb-3" />
//             <h4>Product 3</h4>
//             <p>Our Product 3 offers exceptional results, backed by rigorous testing and research.</p>
//           </div>
//         </div>
//       </div>
//         </div>
//     </section>
//   );
// }

// export default Features;

import React from 'react';
import quality from '../components/images/medical1.avif'; 
import research from '../components/images/medical2.png';
import service from '../components/images/medical4.jpg';
import product1 from '../components/images/medical3.jpg'
import product2 from '../components/images/medical6.jpg'
import product3 from '../components/images/medi7.jpg'
// import product1 from '../images/product1.jpg';  // Add product images
// import product2 from '../images/product2.jpg';
// import product3 from '../images/product3.jpg';

function Features() {
  return (
    <section className="features-section text-center">
      <div className="container">
        <h2 className="mb-5">Why Choose Us?</h2>
        <div className="row mb-4">
          <div className="col-md-4">
            <img src={quality} alt="Quality" className="img-fluid mb-3" />
            <h3>High Quality</h3>
            <p>Our pharmaceutical products are manufactured under strict quality control standards to ensure safety and efficacy.</p>
          </div>
          <div className="col-md-4">
            <img src={research} alt="Research" className="img-fluid mb-3" />
            <h3>Innovative Research</h3>
            <p>We are at the forefront of medical research, developing innovative solutions to improve patient outcomes.</p>
          </div>
          <div className="col-md-4">
            <img src={service} alt="Service" className="img-fluid mb-3" />
            <h3>Exceptional Service</h3>
            <p>Our commitment to customer service ensures that healthcare providers and patients receive the support they need.</p>
          </div>
        </div>
        <h2 className="mt-5 mb-4">Our Products</h2>
        <div className="row align-items-center mb-4">
          <div className="col-md-6">
            <img src={product1} alt="Product 1" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h4>Product 1</h4>
            <p>Effective and reliable, our Product 1 is designed to meet your healthcare needs.</p>
          </div>
        </div>
        <div className="row align-items-center mb-4">
          <div className="col-md-6">
            <img src={product2} alt="Product 2" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h4>Product 2</h4>
            <p>With innovative formulation, Product 2 is your best choice for comprehensive care.</p>
          </div>
        </div>
        <div className="row align-items-center mb-4">
          <div className="col-md-6">
            <img src={product3} alt="Product 3" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h4>Product 3</h4>
            <p>Our Product 3 offers exceptional results, backed by rigorous testing and research.</p>
          </div>
        </div>
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

export default Features;
