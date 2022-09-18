import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import Assets from "../utils/assets";
import ActiveLink from "./ActiveLink";

const asideItems = [
  {
    icon: Assets.Icon.Home,
    id: "home",
    link: "/",
  },
  {
    icon: Assets.Icon.Chart,
    id: "exchange",
    link: "/exchange",
  },
  {
    icon: Assets.Icon.Wallet,
    id: "wallets",
    link: "/wallets",
  },
  {
    icon: Assets.Icon.Book,
    id: "prices",
    link: "/prices",
  },
  {
    icon: Assets.Icon.Pulse,
    id: "activities",
    link: "/activities",
  },
  {
    icon: Assets.Icon.Fire,
    id: "promotions",
    link: "/promotions",
  },
  {
    icon: Assets.Icon.Settings,
    id: "settings",
    link: "/settings",
  },
  {
    icon: Assets.Icon.Bell,
    id: "notifications",
    link: "/notifications",
  },
];

const Layout = () => {
  return (
    <main className="App">
      <nav className="h-[100px] bg-background-1 flex justify-between items-center">
        <div className="container pl- flex justify-between">
          <Link to="/" className="flex items-center">
            <img src={Assets.logo} alt="Roqqu" className="w-[92px] h-5" />
          </Link>
          <div className="space-x-[136px] flex">
            <div className="space-x-[58px] flex items-center text-sm text-white-1100">
              <Link to="/deposit">Deposit</Link>
              <Link to="/sell">Sell Crypto</Link>
              <Link to="/transfer">Transfer</Link>
            </div>
            <div className="space-x-7 flex">
              <div className="place-content-center grid">
                <div className="relative">
                  <Assets.Icon.Bell className="text-primary-1300" />
                  <div className="w-2 h-2 rounded-full bg-orange absolute -right-1 -top-1"></div>
                </div>
              </div>
              <div className="bg-[#101E48] w-[52px] h-[52px] rounded-full grid place-content-center"></div>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex relative">
        <aside className="basis-[89px] max-w-[89px] peer group hover:basis-[248px] hover:max-w-[248px] hover:absolute z-20 hover:left-0 hover:bottom-0 py-[35px] pr-[22px] pl-[17px] bg-background-1 h-[calc(100vh_-_100px)]">
          <ul className="flex flex-col space-y-2">
            {asideItems.map((item) => (
              <Fragment key={item.id}>
                <li>
                  <ActiveLink
                    href={item.link}
                    className="py-[12.515px] px-[14.515px] space-x-[37px] flex items-center justify-start rounded-lg"
                  >
                    {<item.icon className="w-[20.97px] h-[20.97px]" />}
                    <span className="group-hover:inline hidden capitalize text-sm">
                      {item.id}
                    </span>
                  </ActiveLink>
                </li>
              </Fragment>
            ))}
          </ul>
        </aside>
        <div className="relative z-10 flex-grow peer-hover:ml-[89px] overflow-y-auto h-[calc(100vh_-_100px)]">
          <div className="container">
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Layout;
