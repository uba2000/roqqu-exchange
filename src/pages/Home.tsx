import React from "react";
import { Button } from "../components/Button";

import ASSETS from "../utils/assets";

const Home = () => {
  return (
    <div className="pt-8">
      <div className="grid grid-cols-[auto_350px]">
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
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Home;
