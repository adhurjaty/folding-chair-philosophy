import { Link } from 'gatsby'
import * as React from 'react'
import { slide as Menu } from 'react-burger-menu'

interface HeaderProps {
  siteTitle?: string
}

const Header: React.SFC<HeaderProps> = ({ siteTitle }) => (
    <div
        style={{
        background: '#2e5ea6',
        marginBottom: '1.45rem',
        }}>
        <Menu>
            <Link className="menu-item" to="/">Blog</Link>
            <Link className="menu-item" to="/about">About</Link>
            <Link className="menu-item" to="/contact">Links</Link>
            <Link className="menu-item" to="/projects">Projects</Link>
        </Menu>
        <div
        style={{
            margin: '0 auto',
            maxWidth: '40rem',
            padding: '1.6rem 1.0875rem',
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
)

Header.defaultProps = {
  siteTitle: '',
}

export default Header
