import { Link } from 'gatsby'
import * as React from 'react'
import { slide as Menu } from 'react-burger-menu'

interface HeaderProps {
  siteTitle?: string
}

const Header: React.SFC<HeaderProps> = ({ siteTitle }) => (
    <div>
        <div
            style={{
            background: '#2e5ea6',
            marginBottom: '1.45rem',
            }}>
            <div
            style={{
                margin: '0 auto',
                maxWidth: '40rem',
                padding: '0.8rem 1.0875rem',
            }}>
            <h1 style={{ margin: 0 }}>
                <Link
                to="/"
                style={{
                    color: 'white',
                    textDecoration: 'none',
                }}
                >
                {siteTitle}
                </Link>
            </h1>
            </div>
        </div>
        {/* <Menu>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/links">Links</Link>
        </Menu> */}
        <Menu>
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a>
            <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    </div>
)

Header.defaultProps = {
  siteTitle: '',
}

export default Header
