import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import ASSETS from "../utils/assets";
import ActiveLink from "./ActiveLink";

const asideItems = [
  {
    icon: ASSETS.icon.chart,
    id: "home",
    link: "/",
  },
  {
    icon: ASSETS.icon.chart,
    id: "chart",
    link: "/chart",
  },
  {
    icon: ASSETS.icon.wallet,
    id: "wallet",
    link: "/wallet",
  },
  {
    icon: ASSETS.icon.book,
    id: "book",
    link: "/book",
  },
  {
    icon: ASSETS.icon.pulse,
    id: "pulse",
    link: "/pulse",
  },
  {
    icon: ASSETS.icon.fire,
    id: "fire",
    link: "/fire",
  },
  {
    icon: ASSETS.icon.settings,
    id: "settings",
    link: "/settings",
  },
  {
    icon: ASSETS.icon.bell,
    id: "bell",
    link: "/bell",
  },
];

const Layout = () => {
  return (
    <main className="App">
      <nav className="h-[100px] bg-background-1 flex justify-between items-center">
        <div className="container pl- flex justify-between">
          <Link to="/" className="flex items-center">
            <img src={ASSETS.logo} alt="Roqqu" className="w-[92px] h-5" />
          </Link>
          <div className="space-x-7 flex">
            <img
              src={ASSETS.icon.bell}
              className="w-[25px]"
              alt="notification"
            />
            <div className="bg-[#101E48] w-[52px] h-[52px] rounded-full grid place-content-center"></div>
          </div>
        </div>
      </nav>
      <div className="flex">
        <aside className="basis-[89px] py-[35px] pr-[22px] pl-[17px] bg-background-1 h-[calc(100vh_-_100px)]">
          <ul className="flex flex-col space-y-2">
            {asideItems.map((item) => (
              <Fragment key={item.id}>
                <li>
                  <ActiveLink
                    href={item.link}
                    className="h-[46px] grid place-content-center hover:bg-hover-background rounded-lg"
                  >
                    <img src={item.icon} alt={item.id} />
                  </ActiveLink>
                </li>
              </Fragment>
            ))}
          </ul>
        </aside>
        <div className="flex-grow container">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Layout;
