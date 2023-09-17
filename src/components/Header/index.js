import './index.css'
import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {GiHamburgerMenu} from 'react-icons/gi'

import {Component} from 'react'

class Header extends Component {
  state = {
    activeTabId: 'HOME',
  }

  onChangeTab = event => {
    this.setState({activeTabId: event.target.id})
  }

  onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    const {activeTabId} = this.state
    return (
      <div className="headerContainer">
        <Link to="/" className="websiteLogoContainer">
          <img
            src="https://res.cloudinary.com/dwsbjx12w/image/upload/v1694596689/Group_7730_uuioli.png"
            alt="website logo"
            className="bookHub"
          />
          <h1 className="websiteName">ookHub</h1>
        </Link>

        <div className="hamburger">
          <GiHamburgerMenu />
        </div>

        <div className="navbarOptions-container">
          <Link to="/" className="link">
            <p
              id="HOME"
              className={`${
                activeTabId === 'HOME' ? 'nav-option isActive' : 'nav-option'
              }`}
              onClick={this.onChangeTab}
            >
              Home
            </p>
          </Link>
          <Link to="/shelf" className="link">
            <p
              id="BOOKSHELVES"
              className={`${
                activeTabId === 'BOOKSHELVES'
                  ? 'nav-option isActive'
                  : 'nav-option'
              }`}
              onClick={this.onChangeTab}
            >
              Bookshelves
            </p>
          </Link>
          <button
            type="button"
            className="logoutBtn"
            onClick={this.onClickLogout}
          >
            Logout
          </button>
        </div>
      </div>
    )
  }
}

export default withRouter(Header)
