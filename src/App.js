// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import Features from './components/Features';
// import Footer from './components/Footer';
// import About from './components/About';
// import Contact from './components/Contact';

// function App() {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Switch>
//           <Route path="/" exact>
//             <Hero />
//             <Features />
//           </Route>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/contact">
//             <Contact />
//           </Route>
//         </Switch>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Features />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
