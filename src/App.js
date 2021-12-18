import "./App.css";
import MenuIcon from "./Components/MenuIcon";
import {
  AccountBalanceWalletRounded,
  ChatRounded,
  FavoriteBorderOutlined,
  HomeRounded,
  Search,
  Settings,
  TextSnippet,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { click } from "@testing-library/user-event/dist/click";

function App() {
  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");

    function setMenuActive() {
      menuLi.forEach((n) =>
        n.querySelector(".iconContainer").classList.remove("iconBg")
      );
      this.querySelector(".iconContainer").classList.add("iconBg");
    }

    menuLi.forEach((n) => n.addEventListener("click", setMenuActive));
  }, []);

  return (
    <div className="App">
      {/* left menu */}
      <div className="leftMenu">
        <ul id="menu">
          {/* prettier-ignore */}
          <li> <MenuIcon isHome icon={<HomeRounded />} /> </li>
          {/* prettier-ignore */}
          <li> <MenuIcon icon={<ChatRounded />} /> </li>
          {/* prettier-ignore */}
          <li> <MenuIcon icon={<AccountBalanceWalletRounded />} /> </li>
          {/* prettier-ignore */}
          <li> <MenuIcon icon={<FavoriteBorderOutlined />} /> </li>
          {/* prettier-ignore */}
          <li> <MenuIcon icon={<TextSnippet />} /> </li>
          {/* prettier-ignore */}
          <li> <MenuIcon icon={<Settings />} /> </li>
        </ul>
      </div>
      {/* main contaniner */}

      <div className="mainContainer">
        <div className="todayMenu">
          <h1>
            Today Menu
            <span>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fsmiley.png?alt=media&token=b4435c75-d4f8-4a06-a303-ad5ac0dd1cb1"
                alt=""
              />
            </span>
          </h1>

          <div className="searchBox">
            <input type="text" placeholder="search.." />
            <Search />
          </div>
        </div>

        {/* Banner */}
        <div className="banner">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdelivery.png?alt=media&token=69b9823d-96df-452a-bd4e-14d27a4cc337"
            alt=""
            className="deliver"
          />

          <div className="content">
            <h2>Hello Jeremy,</h2>
            <p>
              Get free delivery <span>$20</span> discount
            </p>
            <a href="#">Learn More</a>
          </div>
        </div>
      </div>

      {/* cart menu */}
      <div className="cartMenu"></div>
    </div>
  );
}

export default App;
