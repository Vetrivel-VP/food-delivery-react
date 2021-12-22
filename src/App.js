import "./App.css";

import { useEffect, useState } from "react";
import Header from "./Components/Header";
import MenuContainer from "./Components/MenuContainer";
import {
  AccountBalanceWalletRounded,
  Chat,
  Favorite,
  HomeRounded,
  Settings,
  SummarizeRounded,
} from "@mui/icons-material";

function App() {
  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");

    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuLi.forEach((n) => n.addEventListener("click", setMenuActive));
  }, []);

  return (
    <div className="App">
      {/* Header section */}
      <Header />

      <main>
        {/* Left menu */}
        <div className="leftMenu">
          <ul id="menu">
            {/* prettier-ignore */}
            <MenuContainer link = {'#'} icon = {<HomeRounded />}  isHome/>
            {/* prettier-ignore */}
            <MenuContainer link = {'#'} icon = {<Chat />}  />
            {/* prettier-ignore */}
            <MenuContainer link = {'#'} icon = {<AccountBalanceWalletRounded />}  />
            {/* prettier-ignore */}
            <MenuContainer link = {'#'} icon = {<Favorite />} />
            {/* prettier-ignore */}
            <MenuContainer link = {'#'} icon = {<SummarizeRounded />}  />
            {/* prettier-ignore */}
            <MenuContainer link = {'#'} icon = {<Settings />}  />
            <div className="indicator"></div>
          </ul>
        </div>
        <div className="mainContainer"></div>
        <div className="rightMenu"></div>
      </main>
    </div>
  );
}

export default App;
