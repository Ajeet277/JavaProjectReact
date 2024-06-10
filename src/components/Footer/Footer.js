// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Footer.css'; // Assuming the CSS file is named Footer.css and is in the same directory as your component

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-3 col-md-6">
//             <h4 className="text-white mb-3">Quick Link</h4>
//             <Link to="/aboutus">About Us</Link>
//             <Link to="/policy">Privacy Policy</Link>
//             <Link to="/policy">Terms & Condition</Link>
//             <Link to="/faq">FAQs & Help</Link>
//           </div>
//           <div className="col-lg-3 col-md-6">
//             <h4 className="text-white mb-3">Contact</h4>
//             <p><i className="fa fa-map-marker-alt me-3"></i>K.T Marg Road, Vasai Road, Maharashtra, India</p>
//             <p><i className="fa fa-phone-alt me-3"></i>+91 9372575530</p>
//             <p><i className="fa fa-envelope me-3"></i>learning.edu007@gmail.com</p>
//             <div className="d-flex pt-2">
//               <a className="btn btn-outline-light btn-social" target="_blank" href="https://twitter.com/home?lang=en"><i className="fab fa-twitter"></i></a>
//               <a className="btn btn-outline-light btn-social" target="_blank" href="https://www.facebook.com/https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
//               <a className="btn btn-outline-light btn-social" target="_blank" href="https://www.youtube.com/channel/UCWBZgfmIVxElVuTxsboMGNg"><i className="fab fa-youtube"></i></a>
//               <a className="btn btn-outline-light btn-social" target="_blank" href="https://www.linkedin.com/feed/"><i className="fab fa-linkedin-in"></i></a>
//             </div>
//           </div>
//           <div className="col-md-6 text-center text-md-start">
//             <p>&copy;2023 <Link className="border-bottom" to="/">Edu Learning</Link></p>
//             <p>All Rights Reserved</p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Footer.css'; // Assuming the CSS file is named Footer.css and is in the same directory as your component

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-3 col-md-6">
//             <h4 className="text-white mb-3">Quick Link</h4>
//             <Link to="/aboutus">About Us</Link>
//             <Link to="/policy">Privacy Policy</Link>
//             <Link to="/policy">Terms & Condition</Link>
//             <Link to="/faq">FAQs & Help</Link>
//           </div>
//           <div className="col-lg-3 col-md-6">
//             <h4 className="text-white mb-3">Contact</h4>
//             <p><i className="fa fa-map-marker-alt me-3"></i>K.T Marg Road, Vasai Road, Maharashtra, India</p>
//             <p><i className="fa fa-phone-alt me-3"></i>+91 9372575530</p>
//             <p><i className="fa fa-envelope me-3"></i>learning.edu007@gmail.com</p>
//             <div className="d-flex pt-2">
//             <a className="btn btn-outline-light btn-social" target="_blank" rel="noopener noreferrer" href="https://twitter.com/home?lang=en"><i className="fab fa-twitter"></i></a>
//             <a className="btn btn-outline-light btn-social" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
//             <a className="btn btn-outline-light btn-social" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCWBZgfmIVxElVuTxsboMGNg"><i className="fab fa-youtube"></i></a>
//             <a className="btn btn-outline-light btn-social" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/feed/"><i className="fab fa-linkedin-in"></i></a>

//             </div>
//           </div>
//           <br></br>
//           <div className="col-lg-3 col-md-6 text-center text-md-start">
//             <p>&copy;2023 <Link className="border-bottom" to="/">Edu Learning</Link></p>
//             <p>All Rights Reserved</p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import '@fortawesome/fontawesome-free/css/all.css';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Assuming the CSS file is named Footer.css and is in the same directory as your component

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <h4 className="mb-3">Quick Link</h4>
            <ul className="list-unstyled">
              <li><Link to="/aboutus" className="text-light">About Us</Link></li>
              <li><Link to="/policy" className="text-light">Privacy Policy</Link></li>
              <li><Link to="/policy" className="text-light">Terms & Condition</Link></li>
              <li><Link to="/faq" className="text-light">FAQs & Help</Link></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="mb-3">Contact</h4>
            <ul className="list-unstyled">
              <li><i className="fa fa-map-marker-alt me-2"></i>KLE Technological University, Karnataka, India</li>
              {/* <li><i className="fa fa-phone-alt me-2"></i>+91 9372575530</li> */}
              <li><i className="fa fa-envelope me-2"></i>NGOedu@gmail.com</li>
            </ul>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social me-2" target="_blank" rel="noopener noreferrer" href="https:"><i className="fab fa-twitter"></i></a>
              <a className="btn btn-outline-light btn-social me-2" target="_blank" rel="noopener noreferrer" href="https:"><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-outline-light btn-social me-2" target="_blank" rel="noopener noreferrer" href="https:"><i className="fab fa-youtube"></i></a>
              <a className="btn btn-outline-light btn-social me-2" target="_blank" rel="noopener noreferrer" href="https:"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            {/* Empty column for spacing */}
          </div>
          <div className="col-lg-3 col-md-6 text-center text-md-start">
            <p>&copy;2024 <Link to="/" className="text-light">NGO Learning</Link></p>
            <p>All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
