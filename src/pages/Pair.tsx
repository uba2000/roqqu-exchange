import React from "react";

import Chart from "../components/Chart";
import Assets from "../utils/assets";

const Pair = () => {
  return (
    <>
      <div className="pt-[18px] container top-0 z-50 sticky">
        <div className="bg-background-3 text-right min-h-[98px] rounded-lg grid grid-cols-6 divide-x-[1px] divide-divider">
          <div className="text-left px-2 py-6 grid place-content-center space-x-[14px]">
            <div className="space-x-2 flex cursor-pointer">
              {/* <img src={} alt="token" className="w-[33px] h-[33px]" /> */}
              <Assets.Icon.Btc className="w-[33px] h-[33px]" />
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
      </div>
      <div className="container mt-[27px] mb-4 space-y-3">
        <div className="flex space-x-[13px]">
          <div className="flex-grow">
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
                <div className="flex justify-between">
                  <div className="space-x-5">
                    <div className="flex space-x-[6px]">
                      <ChartOptions>4h</ChartOptions>
                      <ChartOptions>C</ChartOptions>
                      <ChartOptions>S</ChartOptions>
                      <ChartOptions>CH</ChartOptions>
                    </div>
                    <div className="flex space-x-3"></div>
                  </div>
                  <div className="flex space-x-[6px]">
                    <ChartOptions>Save</ChartOptions>
                    <ChartOptions>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path d="M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z" />
                        <path
                          fillRule="evenodd"
                          d="M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 001.11-.71l.822-1.315a2.942 2.942 0 012.332-1.39zM6.75 12.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm12-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </ChartOptions>
                    <ChartOptions>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.993 6.993 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </ChartOptions>
                    <ChartOptions>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path d="M13.28 7.78l3.22-3.22v2.69a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.69l-3.22 3.22a.75.75 0 001.06 1.06zM2 17.25v-4.5a.75.75 0 011.5 0v2.69l3.22-3.22a.75.75 0 011.06 1.06L4.56 16.5h2.69a.75.75 0 010 1.5h-4.5a.747.747 0 01-.75-.75zM12.22 13.28l3.22 3.22h-2.69a.75.75 0 000 1.5h4.5a.747.747 0 00.75-.75v-4.5a.75.75 0 00-1.5 0v2.69l-3.22-3.22a.75.75 0 10-1.06 1.06zM3.5 4.56l3.22 3.22a.75.75 0 001.06-1.06L4.56 3.5h2.69a.75.75 0 000-1.5h-4.5a.75.75 0 00-.75.75v4.5a.75.75 0 001.5 0V4.56z" />
                      </svg>
                    </ChartOptions>
                  </div>
                </div>
              </div>
              <div className="px-[6px] w-full h-[335px]">
                {/* Chart */}
                <Chart />
              </div>
            </div>
          </div>
          <div className="basis-[339px] min-w-[339px] max-w-[339px]">
            <div className="bg-background-1 pb-2 pt-[26px] space-y-5 rounded-[5px]">
              <div className="px-[22px]">
                <h5 className="text-white-1100">Order Book</h5>
              </div>
              <div className="px-2">
                <div className="bg-background-2 rounded-[5px] pb-6">
                  <div className="mb-5 px-2 pt-4 flex space-x-1 items-center text-xs uppercase text-white-t-1200">
                    <div className="flex-1">PRICE(USDT)</div>
                    <div className="flex-1 text-center">AMOUNT(BTC)</div>
                    <div className="flex-1 text-right">TOTAL (USDT)</div>
                  </div>
                  <div className="divide-y-[1px] divide-divider">
                    <div className="mb-6 text-negative">
                      <OrderItem />
                      <OrderItem progress={21} />
                      <OrderItem progress={11} />
                      <OrderItem progress={5} />
                      <OrderItem progress={15} />
                    </div>
                    <div className="py-[14px] grid place-content-center">
                      <span className="text-sm">128299.304781 USDT</span>
                    </div>
                    <div className="pt-4 text-positive">
                      <OrderItem type="p" />
                      <OrderItem type="p" progress={21} />
                      <OrderItem type="p" progress={11} />
                      <OrderItem type="p" progress={5} />
                      <OrderItem type="p" progress={15} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-x-[13px] grid-cols-[auto_343px]">
          <div>
            <div className="bg-background-1 py-[13px] space-y-4 rounded-[10px]">
              <div className="space-y-4">
                <div className="pl-[30px] flex justify-between items-end pr-4">
                  <h5 className="text-white-1100">Market Trades</h5>
                </div>
                <div className="pl-2 pr-[13px]">
                  <div className="bg-background-2 rounded-[5px] pt-[13px] px-6">
                    <div className="mb-5 px-2 pt-4 flex space-x-1 items-center text-xs uppercase text-white-t-1200">
                      <div className="flex-1">Time</div>
                      <div className="flex-1">PRICE(USDT)</div>
                      <div className="flex-1">AMOUNT(BTC)</div>
                      <div className="flex-1">TOTAL (USDT)</div>
                    </div>
                    <div className="h-[300px] overflow-y-auto scrollbar-hide">
                      <TradesItem type="p" />
                      <TradesItem type="p" />
                      <TradesItem />
                      <TradesItem type="p" />
                      <TradesItem type="p" />
                      <TradesItem />
                      <TradesItem type="p" />
                      <TradesItem type="p" />
                      <TradesItem />
                      <TradesItem type="p" />
                      <TradesItem type="p" />
                      <TradesItem />
                      <TradesItem type="p" />
                      <TradesItem type="p" />
                      <TradesItem />
                      <TradesItem type="p" />
                      <TradesItem type="p" />
                      <TradesItem />
                      <TradesItem type="p" />
                      <TradesItem type="p" />
                      <TradesItem />
                      <TradesItem type="p" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-background-1 pb-2 pt-[26px] space-y-5 rounded-[5px]">
              <div className="px-[22px]">
                <h5 className="text-white-1100">Place Order</h5>
              </div>
              <div className="px-2 pb-4">
                <div className="bg-background-2 rounded-[5px] min-h-[200px] grid place-content-center text-center">
                  <span className="font-avenirBook">
                    <span className="font-avenir">Sign In</span> or{" "}
                    <span className="font-avenir">Create Account</span>
                    <br />
                    to Continue
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
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

interface IOrderItemType {
  price?: string;
  amount?: string;
  total?: string;
  progress?: number;
  type?: "p" | "n";
}

const OrderItem = ({
  price = "128299.304781",
  amount = "5.304781",
  total = "5.304781",
  progress = 31,
  type = "n",
}: IOrderItemType) => {
  return (
    <div className="relative px-2 h-6 flex items-center overflow-x-hidden">
      <div className="flex w-full text-xs space-x-1">
        <div className="text-inherit flex-1">{price}</div>
        <div className="text-white flex-1 text-center">{amount}</div>
        <div className="text-white flex-1 text-right">{total}</div>
      </div>
      <div
        className={`absolute h-full w-full right-[100%] ${
          type === "n" ? "bg-negative-t" : "bg-positive-t"
        } left-0 z-10`}
        style={{
          transform: `translateX(${progress - 100}%)`,
        }}
      ></div>
    </div>
  );
};

type ChartOptionsType = {
  children: React.ReactNode;
};

const ChartOptions = ({ children }: ChartOptionsType) => {
  return (
    <div className="cursor-pointer w-[61px] h-[42px] rounded-[5px] place-content-center grid bg-[#21293E41]">
      <span className="text-xs text-white-1200">{children}</span>
    </div>
  );
};

interface ITradesItemType extends IOrderItemType {
  time?: string;
}

const TradesItem = ({
  price = "128299",
  amount = "18372.99999",
  total = "18372.99999",
  progress = 31,
  type = "n",
  time = "18:02:18",
}: ITradesItemType) => {
  return (
    <div className="relative px-2 h-6 flex items-center overflow-x-hidden">
      <div className="flex w-full text-xs space-x-1">
        <div className="text-inherit flex-1">{time}</div>
        <div
          className={`text-${type === "n" ? "negative" : "positive"} flex-1`}
        >
          {type === "n" ? "317" : "47817"}
          <span className="text-white-t-1200">.70</span>
        </div>
        <div className="text-white flex-1">{amount}</div>
        <div className="text-white flex-1">{total}</div>
      </div>
    </div>
  );
};

export default Pair;
