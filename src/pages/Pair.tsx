import React from "react";

import ASSETS from "../utils/assets";

const Pair = () => {
  return (
    <div className="py-[18px] space-y-[27px]">
      <div className="bg-background-3 text-right min-h-[98px] rounded-lg grid grid-cols-6 divide-x-[1px] divide-divider">
        <div className="text-left grid place-content-center space-x-[14px]">
          <div className="space-x-2 flex cursor-pointer">
            <img
              src={ASSETS.icon.btc}
              alt="token"
              className="w-[33px] h-[33px]"
            />
            <div className="flex flex-col">
              <span className="flex space-x-4">
                <span className="text-white-1100 font-bold">BTC /USDT</span>
                <span className="">
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
              </span>
              <span className="text-white-t-1200 text-xs">Bitcoin</span>
            </div>
          </div>
        </div>
        <TokenHeaderInfoContent title="Last Price" status="positive" />
        <TokenHeaderInfoContent title="High" />
        <TokenHeaderInfoContent title="Low" />
        <TokenHeaderInfoContent title="Volume" />
        <div className="text-center">
          <TokenHeaderInfoContent
            title="24 Change"
            status="positive"
            amount="+3.04%"
          />
        </div>
      </div>
      <div className="space-y-3">
        <div className="grid gap-x-[13px] grid-cols-[auto_339px]">
          <div>
            <div className="bg-background-1 py-[13px] space-y-4 rounded-t-[10px]">
              <div className="pl-[30px] space-y-4 pr-4">
                <div className="flex justify-between items-end">
                  <h5 className="text-white-1100">Charts</h5>
                  <div className="flex font-avenirRoman space-x-[6px] text-sm text-white-1100">
                    <div className="py-2 px-4 cursor-pointer rounded-[5px] hover:bg-selected-pr-1 bg-selected-pr-1">
                      Price
                    </div>
                    <div className="py-2 px-4 cursor-pointer rounded-[5px] hover:bg-selected-pr-1">
                      Depth
                    </div>
                  </div>
                </div>
                <div className=""></div>
              </div>
              <div className="px-[6px]"></div>
            </div>
          </div>
          <div>
            <div className="bg-background-1 pb-2 pt-[26px] space-y-5 rounded-[5px]">
              <div className="px-[22px]">
                <h5 className="text-white-1100">Order Book</h5>
              </div>
              <div className="px-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

type TokenHeaderInfoContentType = {
  status?: "positive" | "negative" | null;
  amount?: string;
  title: string;
};

const TokenHeaderInfoContent = ({
  title,
  status = null,
  amount = "18372.99 USDT",
}: TokenHeaderInfoContentType) => {
  return (
    <div className="px-2 py-6">
      <div className="grid place-content-center h-full">
        <div className="space-y-[5px] flex flex-col">
          <span className="text-xs font-normal text-white-t-1200">{title}</span>
          <span className={`text-${!status ? "[white-1200]" : status}`}>
            {amount}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Pair;
