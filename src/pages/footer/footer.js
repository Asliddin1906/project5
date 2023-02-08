import footerLogo from "../../assets/img/footer-logo.png"
import "./footer.scss"

const Footer = () => {
  return (
    <div className="footer">
      <div>

      <img src={footerLogo} alt="" className="footer-logo" />
      </div>
      <div className="textbox">
        <p className="footer-title">FIGHT WITH ME ON:</p>
      <ul className="footer-list"> 
        <li className="footer-list-item">Twitter</li>
        <li className="footer-list-item">INstagram</li>
        <li className="footer-list-item">Telegram</li>
        <li className="footer-list-item">YouTube</li>
        <li className="footer-list-item">Figma</li>
      </ul>
      </div>
      <div>
        <p  className="footer-title">WHAT I HAVE DONE:</p>
      <ul className="footer-list"> 
        <li className="footer-list-item">Xalq Kutubxonasi</li>
        <li className="footer-list-item">Website</li>
        <li className="footer-list-item">Play Market</li>
        <li className="footer-list-item">YouTube</li>
        <li className="footer-list-item">App Store</li>
      </ul>
      </div>
      <div>
        <p  className="footer-title">Contacts</p>
      <ul className="footer-list">
        <li className="footer-list-item">Blog</li>
        <li className="footer-list-item">Drible</li>
        <li className="footer-list-item">Behance</li>
      </ul>
      </div>
        
        

    </div>
  )
};

export default Footer;