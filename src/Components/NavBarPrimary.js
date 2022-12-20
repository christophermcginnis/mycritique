import logo from "../assets/logo.svg"
import create from "../assets/create.svg"
import messages from "../assets/messages.svg"
import notifications from "../assets/notifications.svg"
import userIcon from "../assets/user.svg"
import search from "../assets/search.svg"
import { useState } from 'react'

export default function Navbar() {
    const [openMenu, SetOpenMenu] = useState(false)
    const [menuOpen, SetMenuOpen] = useState('ham-menu-start-move-right, ham-menu-end-move-right')
    const [anothermenuOpen, SetAnotherMenuOpen] = useState('ham-menu-start-move-left', 'ham-menu-end-move-left')
    const [BanothermenuOpen, SetBAnotherMenuOpen] = useState('ham-menu-start-rotate-45-1', 'ham-menu-end-rotate-45-1')
    const [AanothermenuOpen, SetAAnotherMenuOpen] = useState('ham-menu-start-rotate-45-2', 'ham-menu-end-rotate-45-2')
    const [test, setTest] = useState('hidden', 'visible')

     function handleClick() {
        if (openMenu === false) {
            SetOpenMenu(true)
            SetMenuOpen('ham-menu-start-move-right')
            SetAnotherMenuOpen('ham-menu-start-move-left')
            SetBAnotherMenuOpen('ham-menu-start-rotate-45-1')
            SetAAnotherMenuOpen('ham-menu-start-rotate-45-2')
            setTest('visible')
        } else {
            SetOpenMenu(false)
            SetMenuOpen('ham-menu-end-move-right')
            SetAnotherMenuOpen('ham-menu-end-move-left')
            SetBAnotherMenuOpen('ham-menu-end-rotate-45-1')
            SetAAnotherMenuOpen('ham-menu-end-rotate-45-2')
            setTest('hidden')
}
     }
    return <div className="navigation-container">
                <nav className="primary-navigation">
            
                <a href="/" className="site-home">
                        <img className="logo" alt="logo" src={logo}></img>
            </a>
            
                <ul className="primary-navigation-links">
                    <li className="primary-navigation-link-item">
                        <div className="primary-navigation-link">
                            <img className="nav-icon create" alt="create a post" src={create}></img>
                        </div>
                    </li>

                    <li className="primary-navigation-link-item">
                        <div className="primary-navigation-link">
                            <img className="nav-icon messages" alt="messages" src={messages}></img>
                        </div>
                    </li>

                    <li className="primary-navigation-link-item">
                        <div className="primary-navigation-link">
                            <img className="nav-icon notifications" alt="notifications" src={notifications}></img>
                        </div>
                    </li>

                    <li className="primary-navigation-link-item">
                        <div className="primary-navigation-link">
                            <img className="nav-icon userIcon" alt="user" src={userIcon}></img>
                        </div>
                    </li>

                    <li className="primary-navigation-link-item hamburger-menu">
                        <div onClick={() => {handleClick()}} className="primary-navigation-link" id="hamburger-menu">
                            <span className={`menu-line line-1 ${menuOpen}` }></span>
                            <span className={`menu-line line-2 ${BanothermenuOpen}` }></span>
                            <span className={`menu-line line-3 ${AanothermenuOpen}` }></span>
                            <span className={`menu-line line-4 ${anothermenuOpen}` }></span>
                        </div>
                    </li>
                </ul>
        </nav>
        <div className={`mobile-menu-container ${test}` }>
        <form>
            <input name="search" id="nav-search" placeholder="Search"></input>
            <button className="search-btn" type="submit">
                <img className="nav-icon search" alt="search" src={search}></img>
            </button>
        </form>
    </div>
</div>
}
