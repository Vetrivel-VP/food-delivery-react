import "./App.css";

import { useEffect, useState } from "react";
import Header from "./Components/Header";
import MenuContainer from "./Components/MenuContainer";
import {
  AccountBalanceWalletRounded,
  Chat,
  ChevronRightRounded,
  Favorite,
  HomeRounded,
  Settings,
  SummarizeRounded,
} from "@mui/icons-material";
import BannerName from "./Components/BannerName";
import MenuCard from "./Components/MenuCard";
import { MenuItems, Items } from "./Components/Data";
import ItemCard from "./Components/ItemCard";

function App() {
  const [isMainData, setMainData] = useState(
    Items.filter((element) => element.itemId == "buger01")
  );

  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");

    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuLi.forEach((n) => n.addEventListener("click", setMenuActive));

    // menu Card active class changer
    const menuCard = document
      .querySelector(".rowContainer")
      .querySelectorAll(".rowMenuCard");

    function setMenuCardActive() {
      menuCard.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuCard.forEach((n) => n.addEventListener("click", setMenuCardActive));
  }, [isMainData]);

  const setData = (itemId) => {
    console.log("hi");
    setMainData(Items.filter((element) => element.itemId == itemId));
  };

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
        <div className="mainContainer">
          {/* Banner  */}
          <div className="banner">
            <BannerName name={"Jeremy"} discount={"20"} more={"#"} />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdelivery.png?alt=media&token=69b9823d-96df-452a-bd4e-14d27a4cc337"
              alt=""
              className="deliveryPic"
            />
          </div>

          <div className="dishContainer">
            <div className="menuCard">
              <div className="topSection">
                <h3>Menu Category</h3>
                <div className="viewAll">
                  <p>View All</p>
                  <i>
                    <ChevronRightRounded />
                  </i>
                </div>
              </div>
            </div>

            <div className="rowContainer">
              {MenuItems &&
                MenuItems.map((data) => (
                  <div key={data.id} onClick={() => setData(data.itemId)}>
                    <MenuCard
                      imgSrc={data.imgSrc}
                      name={data.name}
                      isActive={data.id == "1" ? true : false}
                    />
                  </div>
                ))}
            </div>

            <div className="dishItemContainer">
              {isMainData &&
                isMainData.map((data) => (
                  <ItemCard
                    key={data.id}
                    imgSrc={data.imgSrc}
                    name={data.name}
                    ratings={data.ratings}
                    price={data.price}
                  />
                ))}
            </div>
          </div>
        </div>
        <div className="rightMenu"></div>
      </main>
    </div>
  );
}

export default App;
