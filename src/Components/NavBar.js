import logo from "../assets/logo.svg"
import create from "../assets/create.svg"
import messages from "../assets/messages.svg"
import notifications from "../assets/notifications.svg"
import userIcon from "../assets/user.svg"
import search from "../assets/search.svg"

export default function Navbar() {
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
                        <div className="primary-navigation-link" id="hamburger-menu">
                            
                        </div>
                    </li>
                </ul>
        </nav>
        <div className="mobile-menu-container">
            <form>
                
                <input name="search" id="nav-search" placeholder="Search"></input>
                <button className="search-btn" type="submit">
                    <img className="nav-icon search" alt="search" src={search}></img>
                </button>
            </form>
        </div>
            </div>
}