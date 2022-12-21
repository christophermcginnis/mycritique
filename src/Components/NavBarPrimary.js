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
import "../styles/navbar.css"
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

  const PrimaryMenu = [
    {
      primaryName: "secondary-nav-icon",
      secondaryName: "home",
      icon: home,
      link: "/",
    },
    {
      primaryName: "secondary-nav-icon",
      secondaryName: "games",
      icon: games,
      link: "/games",
    },
    {
      primaryName: "secondary-nav-icon",
      secondaryName: "books",
      icon: books,
      link: "/books",
    },
    {
      primaryName: "secondary-nav-icon",
      secondaryName: "music",
      icon: music,
      link: "/music",
    },
    {
      primaryName: "secondary-nav-icon",
      secondaryName: "tv",
      icon: tv,
      link: "/tv",
    },
    {
      primaryName: "secondary-nav-icon",
      secondaryName: "movies",
      icon: movies,
      link: "/movies",
    },
  ];

  const [active, SetActive] = useState(0)
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
        <div className={`search-menu-container ${test}`}>
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
          {PrimaryMenu.map((menu, i) => {
            return (
            <a key={i}
            href={menu.link} onClick={() => SetActive(i)}>
              <li className="secondary-navigation-link-item">
                  <img
                    className={`secondary-nav-icon ${menu.secondaryName}`}
                    alt={menu.secondaryName}
                    src={menu.icon}
                  ></img>
              </li>
              </a>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
