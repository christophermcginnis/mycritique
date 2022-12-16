import logo from "../assets/logo.svg"

export default function Navbar() {
    return <div className="navigation-container">
                <nav className="primary-navigation">
                    <a href="/" className="site-home">
                        <img className="logo" src={logo}></img>
                    </a>

                <ul className="primary-navigation-links">
                    <li className="primary-navigation-link-item">
                        <div className="primary-navigation-link">
                        
                        </div>
                    </li>

                    <li className="primary-navigation-link-item">
                        <div className="primary-navigation-link">
                        
                        </div>
                    </li>

                    <li className="primary-navigation-link-item">
                        <div className="primary-navigation-link">
                        
                        </div>
                    </li>

                    <li className="primary-navigation-link-item">
                        <div className="primary-navigation-link">
                        
                        </div>
                    </li>

                    <li className="primary-navigation-link-item">
                        <div className="primary-navigation-link">
                        
                        </div>
                    </li>
                </ul>
                </nav>
            </div>
}