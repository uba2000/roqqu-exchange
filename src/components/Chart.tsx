/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useEffect, useCallback, useState } from "react";
// import ReactDOM from "react-dom";
import { createChart, CrosshairMode, Time } from "lightweight-charts";
import Loader from "./Loader";

interface IChart {
  symbol?: string;
  interval?: string;
}

const Chart = ({ symbol = "btcusdt", interval = "1m" }: IChart) => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    init();
  }, []);

  const init = useCallback(() => {
    const chartHtml = document.getElementById("chart1");
    const chart = createChart(chartHtml as HTMLElement, {
      width: chartHtml?.parentElement?.offsetWidth,
      height: chartHtml?.parentElement?.offsetHeight,
      layout: {
        backgroundColor: "#04091C",
        textColor: "#AFAFB4E8",
      },
      grid: {
        vertLines: {
          color: "#AFAFB41C",
        },
        horzLines: {
          color: "#AFAFB41C",
        },
      },
      crosshair: {
        mode: CrosshairMode.Normal,
      },
      // priceScale: {
      //   borderColor: "#485c7b",
      // },
      timeScale: {
        borderColor: "#485158",
      },
      watermark: {
        text: "ROQQU",
        fontSize: 256,
        color: "rgba(256, 256, 256, 0.1)",
        visible: false,
      },
    });

    const candleSeries = chart.addCandlestickSeries({
      upColor: "#8CC176",
      downColor: "#B82C0D",
      borderDownColor: "#B82C0D",
      borderUpColor: "#8CC176",
      wickDownColor: "#838ca1",
      wickUpColor: "#838ca1",
    });

    resize();

    // setInterval(() => {
    //   const bar = nextBar();
    //   candleSeries.update(bar);
    //   // volumeSeries.update(bar);
    // }, 3000);

    window.addEventListener("resize", resize, false);

    function resize() {
      console.log(chartHtml?.parentElement?.offsetWidth);
      chart.applyOptions({
        width: chartHtml?.parentElement?.offsetWidth,
        height: chartHtml?.parentElement?.offsetHeight,
      });

      setTimeout(() => chart.timeScale().fitContent(), 0);
    }

    // get history...
    // use stored history...

    var binanceSocket = new WebSocket(
      `wss://stream.binance.com:9443/ws/${symbol}@kline_${interval}`
    );

    binanceSocket.onmessage = function (event) {
      if (loading) setLoading(false);
      var message = JSON.parse(event.data);

      var candlestick = message.k;

      // console.log(candlestick);
      candleSeries.update({
        time: (candlestick.t / 1000) as Time,
        open: candlestick.o,
        high: candlestick.h,
        low: candlestick.l,
        close: candlestick.c,
      });
      // save to history...
    };
  }, []);

  return (
    <>
      {loading ? (
        <>
          <div className="w-full h-[309px] flex items-center justify-center">
            <Loader />
          </div>
        </>
      ) : (
        <div id="chart1" className="w-full h-full overflow-hidden"></div>
      )}
    </>
  );
};

export default Chart;
