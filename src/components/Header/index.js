import {Component} from 'react'
import {Link} from 'react-router-dom'
import {MdOutlineMenuOpen} from 'react-icons/md'
import {ImCancelCircle} from 'react-icons/im'
import './index.css'

class Header extends Component {
  state = {
    showMenu: false,
  }

  toggleMenu = () => {
    this.setState(prevState => ({showMenu: !prevState.showMenu}))
  }

  CancelBtn = () => {
    this.setState({showMenu: false})
  }

  render() {
    const {showMenu} = this.state
    return (
      <div className="headder-menu">
        <nav className="desktop">
          <Link to="/" className="link-logo">
            <h1 className="covidindia">
              COVID19<span className="india">INDIA</span>
            </h1>
          </Link>
          <ul className="nav-list">
            <Link to="/" className="link-home">
              <li>
                <button className="home" type="button">
                  HOME
                </button>
              </li>
            </Link>
            <Link to="/about" className="link-about">
              <li>
                <button className="about" type="button">
                  ABOUT
                </button>
              </li>
            </Link>
            <Link to="/vaccination" className="link-vaccination">
              <li>
                <button className="link-vaccination" type="button">
                  Vaccination
                </button>
              </li>
            </Link>
          </ul>
          <button
            className="Mobile-view"
            onClick={this.toggleMenu}
            type="button"
          >
            <MdOutlineMenuOpen />
          </button>
        </nav>
        {showMenu ? (
          <nav className="desktop">
            <ul className="nav-list-mobile">
              <Link to="/" className="link-home">
                <li>
                  <button className="home" type="button">
                    HOME
                  </button>
                </li>
              </Link>
              <Link to="/about" className="link-about">
                <li>
                  <button className="about" type="button">
                    ABOUT
                  </button>
                </li>
              </Link>
              <Link to="/vaccination" className="link-vaccination">
                <li>
                  <button className="link-vaccination" type="button">
                    Vaccination
                  </button>
                </li>
              </Link>
            </ul>
            <button
              className="Mobile-view"
              onClick={this.CancelBtn}
              type="button"
            >
              <ImCancelCircle />
            </button>
          </nav>
        ) : null}
      </div>
    )
  }
}

export default Header
