import logo from "../assets/logo.svg";
import create from "../assets/create.svg";
import messages from "../assets/messages.svg";
import notifications from "../assets/notifications.svg";
import userIcon from "../assets/user.svg";
import search from "../assets/search.svg";
import home from "../assets/home.svg";
import games from "../assets/games.svg";
import books from "../assets/books.svg";
import music from "../assets/music.svg";
import tv from "../assets/tv.svg";
import movies from "../assets/movies.svg";
import { useState } from "react";

export default function Navbar() {
  const [openMenu, SetOpenMenu] = useState(false);
  const [hamMoveLeft, SetHamMoveLeft] = useState(
    "",
    "ham-menu-start-move-right, ham-menu-end-move-right"
  );
  const [hamMoveRight, SetHamMoveRight] = useState(
    "",
    "ham-menu-start-move-left",
    "ham-menu-end-move-left"
  );
  const [rotate45a, SetRotate45a] = useState(
    "",
    "ham-menu-start-rotate-45-1",
    "ham-menu-end-rotate-45-1"
  );
  const [rotate45b, SetRotate45b] = useState(
    "",
    "ham-menu-start-rotate-45-2",
    "ham-menu-end-rotate-45-2"
  );
  const [test, setTest] = useState("hidden", "visible");

  function handleHamClick() {
    if (openMenu === false) {
      SetOpenMenu(true);
      SetHamMoveLeft("ham-menu-start-move-right");
      SetHamMoveRight("ham-menu-start-move-left");
      SetRotate45a("ham-menu-start-rotate-45-1");
      SetRotate45b("ham-menu-start-rotate-45-2");
      setTest("visible");
    } else {
      SetOpenMenu(false);
      SetHamMoveLeft("ham-menu-end-move-right");
      SetHamMoveRight("ham-menu-end-move-left");
      SetRotate45a("ham-menu-end-rotate-45-1");
      SetRotate45b("ham-menu-end-rotate-45-2");
      setTest("hidden");
    }
  }

  return (
    <>
      <div className="navigation-container">
        <nav className="primary-navigation">
          <a href="/" className="site-home">
            <img className="logo" alt="logo" src={logo}></img>
          </a>

          <ul className="primary-navigation-links">
            <li className="primary-navigation-link-item">
              <div className="primary-navigation-link">
                <img
                  className="nav-icon create"
                  alt="create a post"
                  src={create}
                ></img>
              </div>
            </li>

            <li className="primary-navigation-link-item">
              <div className="primary-navigation-link">
                <img
                  className="nav-icon messages"
                  alt="messages"
                  src={messages}
                ></img>
              </div>
            </li>

            <li className="primary-navigation-link-item">
              <div className="primary-navigation-link">
                <img
                  className="nav-icon notifications"
                  alt="notifications"
                  src={notifications}
                ></img>
              </div>
            </li>

            <li className="primary-navigation-link-item">
              <div className="primary-navigation-link">
                <img
                  className="nav-icon userIcon"
                  alt="user"
                  src={userIcon}
                ></img>
              </div>
            </li>

            <li className="primary-navigation-link-item hamburger-menu">
              <div
                onClick={() => {
                  handleHamClick();
                }}
                className="primary-navigation-link"
                id="hamburger-menu"
              >
                <span className={`menu-line line-1 ${hamMoveLeft}`}></span>
                <span className={`menu-line line-2 ${rotate45a}`}></span>
                <span className={`menu-line line-3 ${rotate45b}`}></span>
                <span className={`menu-line line-4 ${hamMoveRight}`}></span>
              </div>
            </li>
          </ul>
        </nav>
        <div className={`mobile-menu-container ${test}`}>
          <form>
            <input name="search" id="nav-search" placeholder="Search"></input>
            <button className="search-btn" type="submit">
              <img className="nav-icon search" alt="search" src={search}></img>
            </button>
          </form>
        </div>
      </div>
      <nav className="secondary-navigation">
        <ul className="secondary-navigation-links">
          <li className="secondary-navigation-link-item">
            <img
              className="secondary-nav-icon home"
              alt="home"
              src={home}
            ></img>
          </li>
          <li className="secondary-navigation-link-item">
            <img
              className="secondary-nav-icon games"
              alt="games"
              src={games}
            ></img>
          </li>
          <li className="secondary-navigation-link-item">
            <img
              className="secondary-nav-icon books"
              alt="books"
              src={books}
            ></img>
          </li>
          <li className="secondary-navigation-link-item">
            <img
              className="secondary-nav-icon music"
              alt="music"
              src={music}
            ></img>
          </li>
          <li className="secondary-navigation-link-item">
            <img className="secondary-nav-icon tv" alt="tv" src={tv}></img>
          </li>
          <li className="secondary-navigation-link-item">
            <img
              className="secondary-nav-icon movies"
              alt="movies"
              src={movies}
            ></img>
          </li>
        </ul>
      </nav>
    </>
  );
}
