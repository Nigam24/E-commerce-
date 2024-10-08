import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.newsletter}>
        <h2>Stay up to date about our latest offers</h2>
        <div className={styles.newsletterInput}>
           <input type="email" placeholder="Enter your email address" />
          <button>Subscribe to Newsletter</button>
        </div>
      </div>
      <div className={styles.footerContent}>
        <div className={styles.footerBrand}>
          <h3>SHOP.CO</h3>
          <p>We have clothes that suit your style and which you're proud to wear. From women to men.</p>
          <div className={styles.socialIcons}>
            <i className="fa fa-twitter"></i>
            <i className="fa fa-facebook"></i>
            <i className="fa fa-instagram"></i>
            <i className="fa fa-github"></i>
          </div>
        </div>
        <div className={styles.footerLinks}>
          <div>
            <h4>COMPANY</h4>
            <ul>
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
          </div>
          <div>
            <h4>HELP</h4>
            <ul>
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h4>FAQ</h4>
            <ul>
              <li>Account</li>
              <li>Manage Deliveries</li>
              <li>Orders</li>
              <li>Payments</li>
            </ul>
          </div>
          <div>
            <h4>RESOURCES</h4>
            <ul>
              <li>Free eBooks</li>
              <li>Development Tutorial</li>
              <li>How to - Blog</li>
              <li>Youtube Playlist</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>Shop.co © 2000-2023, All Rights Reserved</p>
        <div className={styles.paymentMethods}>
          <img src="/images/payment.png" alt="Visa" />
          {/* <img src="mastercard-logo.png" alt="Mastercard" />
          <img src="paypal-logo.png" alt="Paypal" />
          <img src="applepay-logo.png" alt="Apple Pay" />
          <img src="googlepay-logo.png" alt="Google Pay" /> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
