// Write your JS code here

import './index.css'

const Header = () => (
  <nav className="header-nav-bar">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="header-website-logo"
    />
    <ul className="page-text">
      <li className="header-paragraph">Home</li>
      <li className="header-paragraph">Products</li>
      <li className="header-paragraph">Cart</li>

      <div className="btn">
        <button type="button" className="btn">
          LogOut
        </button>
      </div>
    </ul>
  </nav>
)

export default Header
