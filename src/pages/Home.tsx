import React from "react";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

import ASSETS from "../utils/assets";

const Home = () => {
  return (
    <div className="py-8">
      <div className="grid gap-x-[31px] grid-cols-[auto_350px]">
        <div className="space-y-[53px]">
          <div className="px-[38px] py-10 rounded-2xl bg-gradient-to-r from-blue-1600 to-purple-1600 flex">
            <div className="flex-grow space-y-[34px]">
              <span className="uppercase text-sm font-avenirBook">
                January 2, 2022
              </span>
              <div className="space-y-4">
                <h3 className="text-landingText font-gilroyBold">
                  Welcome to Roqqu’s Decentralized Exchange
                </h3>
                <p className="text-subLandingText font-avenirBook text-[#E8E9EBCC]">
                  With an easy-to-use interface, we provide industry-leading
                  security and deep liquidity
                </p>
                <Button className={"h-[60px] w-[229px] relative"}>
                  Learn More
                  <span className="absolute top-[calc(50%_-_10px)] right-[36px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </Button>
              </div>
            </div>
            <div className="grid place-content-center">
              <img src={ASSETS.img.decor1} alt="1" />
            </div>
          </div>
          <div className="space-y-[22px]">
            <div className="text-sm flex justify-between border-b border-[#91A0CE1A] border-solid">
              <div className="flex space-x-1 text-primary-1300">
                <TabContent title="Core Assets" active />
                <TabContent title="Top Gainers" />
                <TabContent title="Top Losers" />
                <TabContent title="New" />
              </div>
              <div className="text-white-1100">
                <div className="flex relative space-x-4 py-[18px] px-3 cursor-pointer">
                  <span>Market Cap</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-[371px_371px] gap-x-[53px] gap-y-[26px]">
              <AssetBox asset="btc" icon={ASSETS.icon.btc} name="Bitcoin" />
              <AssetBox asset="usdt" icon={ASSETS.icon.usdt} name="Tether" />
              <AssetBox asset="eth" icon={ASSETS.icon.eth} name="Ethereum" />
              <AssetBox
                asset="bnb"
                icon={ASSETS.icon.bnb}
                name="Binance Coin"
              />
            </div>
          </div>
        </div>
        <div className="bg-background-1 rounded-[5px] py-[14px] space-y-12">
          <div className="px-[10px]">
            <div className="space-y-[27px] bg-background-2 rounded-lg px-6 py-[34px]">
              <span className="uppercase text-sm font-avenirBook">
                Wallet Balance
              </span>
              <div className="space-y-[30px] grid place-content-center">
                <div className="space-y-[14px] flex items-center flex-col">
                  <div className="uppercase font-avenirBook text-sm bg-gold w-[58px] h-[30px] rounded-[18px] text-white grid place-content-center">
                    btc
                  </div>
                  <div className="space-y-[7px] flex flex-col text-center">
                    <span className="text-[30px]">0.2993029</span>
                    <span className="text-positive font-avenir">3,700 USD</span>
                  </div>
                </div>
                <Button variant={"blue"} className="w-[120px] mx-auto">
                  Withdraw
                </Button>
              </div>
            </div>
          </div>
          <div className="px-[18px] space-y-5">
            <h4 className="text-[18px] font-gilroyBold">Latest Activities</h4>
            <div className="space-y-[14px]">
              <ActivityBox desc="Withdrew USDT" type="withdraw" />
              <ActivityBox desc="Exchanged BTC" type="exchange" />
              <ActivityBox desc="Deposit ETH" type="deposit" />
            </div>
            <Link
              to="/"
              className="justify-center font-avenirBook font-medium text-sm flex space-x-4"
            >
              <span>View All Activity</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

type ActivityBoxPropType = {
  type: "withdraw" | "exchange" | "deposit";
  status?: "complete" | "pending";
  desc: string;
  amount?: string;
};

const ActivityBox = ({
  type,
  status = "complete",
  amount = "992333.93USDT",
}: ActivityBoxPropType) => {
  const dpActivityType = () => {
    switch (type) {
      case "withdraw":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
            />
          </svg>
        );

      case "exchange":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
            />
          </svg>
        );

      case "deposit":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
            />
          </svg>
        );

      default:
        break;
    }
  };
  return (
    <div className="bg-background-2 rounded-[5px] text-sm flex space-x-[45px] py-[18px] px-[17px]">
      <div className="space-x-5 flex">
        <div className="h-[46px] w-[46px] grid place-content-center text-[#BFC6DE91] bg-[#4848483C] rounded-full">
          {dpActivityType()}
        </div>
        <div className="flex flex-col space-y-[5px]">
          <span className="text-white-1100 whitespace-nowrap">
            Withdrew USDT
          </span>
          <span className="text-positive capitalize">{status}</span>
          <span className="text-[#BFC6DECB] font-avenirBook">{amount}</span>
        </div>
      </div>
      <div className="text-xs font-avenirBook text-primary-1300">
        Dec 31, 2021
      </div>
    </div>
  );
};

const TabContent = ({
  active = false,
  title,
}: {
  active?: boolean;
  title: string;
}) => {
  return (
    <div
      className={`relative py-[18px] ${
        active ? "text-primary" : "group hover:text-primary"
      } px-3 cursor-pointer`}
    >
      <span>{title}</span>
      <span
        className={`absolute ${
          active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        } w-full left-0 bottom-0 h-[2px] rounded-[30px] bg-primary`}
      ></span>
    </div>
  );
};

type AssetBoxType = {
  asset: string;
  icon: string;
  name: string;
  amount?: string;
  change?: string;
};

const AssetBox = ({
  amount = "54372.94USD",
  change = "+2.43%",
  asset,
  icon,
  name,
}: AssetBoxType) => {
  return (
    <div className="bg-background-1 px-[18px] py-6 basis-[371px] rounded-[5px] flex justify-between">
      <div className="flex space-x-3">
        <img src={icon} alt={name} />
        <div className="flex flex-col">
          <span className="">{name}</span>
          <span className="font-avenirBook text-sm uppercase">{asset}</span>
        </div>
      </div>
      <div className="flex flex-col space-y-1">
        <span className="">{amount}</span>
        <span className="text-positive text-xs">{change}</span>
      </div>
    </div>
  );
};

export default Home;
