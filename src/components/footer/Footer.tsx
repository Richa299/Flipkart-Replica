import "./Footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h4>About</h4>
          <ul>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Flipkart Stories</li>
            <li>Press</li>
            <li>Corporate Information</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Group Companies</h4>
          <ul>
            <li>Myntra</li>
            <li>Cleartrip</li>
            <li>Shopsy</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Help</h4>
          <ul>
            <li>Payments</li>
            <li>Shipping</li>
            <li>Cancellation & Returns</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Consumer Policy</h4>
          <ul>
            <li>Cancellation & Returns</li>
            <li>Terms Of Use</li>
            <li>Security</li>
            <li>Privacy</li>
            <li>Sitemap</li>
            <li>Grievance Redressal</li>
            <li>EPR Compliance</li>
          </ul>
        </div>
        <div className="footer-section address">
          <h4>Mail Us:</h4>
          <p>
            Flipkart Internet Private Limited, Buildings Alyssa, Begonia & Clove
            Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village,
            Bengaluru, 560103, Karnataka, India
          </p>
          {/* <h4>Social:</h4> */}
          {/* <div className="social-icons">
            
          </div> */}
        </div>
        <div className="footer-section address">
          <h4>Registered Office Address:</h4>
          <p>
            Flipkart Internet Private Limited, Buildings Alyssa, Begonia & Clove
            Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village,
            Bengaluru, 560103, Karnataka, India
            <br />
            CIN : U51109KA2012PTC066107 <br />
            Telephone: <a href="tel:044-45614700">044-45614700</a> /{" "}
            <a href="tel:044-67415800">044-67415800</a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-links">
          <span>Become a Seller</span>
          <span>Advertise</span>
          <span>Gift Cards</span>
          <span>Help Center</span>
        </div>
        <p>© 2007-2025 Flipkart.com</p>
        {/* <div className="footer-payment-icons">
          
        </div> */}
      </div>
    </footer>
  );
}
