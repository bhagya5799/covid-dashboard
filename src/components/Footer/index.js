import {VscGithubAlt} from 'react-icons/vsc'
import {FiInstagram} from 'react-icons/fi'
import {FaLinkedin, FaTwitter} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './index.css'

const Footer = () => (
  <div className="footer-container">
    {/* <Link to="/" className="link-logo">
      <h1 className="covidindia">COVID19INDIA</h1>
    </Link>
    <p className="descrption">
      we stand with everyone fighting on the front lines
    </p> */}
    <h1 className="descrption">
      {/* COVID19<span className="india">INDIA</span> */}
      COVID19INDIA
    </h1>
    <p className="tagline">
      we stand with everyone fighting on the front lines
    </p>
    <div className="footer-icons">
      <a href="https://github.com/bhagya5799">
        <VscGithubAlt className="icon" />
      </a>
      <a href="https://www.instagram.com/">
        <FiInstagram className="icon" />
      </a>
      <a href="https://www.linkedin.com/in/bhagya-laxmi-32369a231/">
        <FaLinkedin className="icon" />
      </a>
      <a href="http://www.linkedin.com/in/bhagya-laxmi-32369a231/">
        <FaTwitter className="icon" />
      </a>
    </div>
  </div>
)
export default Footer
