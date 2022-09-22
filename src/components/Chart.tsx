/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useEffect, useCallback, useState } from "react";
// import ReactDOM from "react-dom";
import { createChart, CrosshairMode } from "lightweight-charts";

const Chart = () => {
  // const [renderChart, setRenderChart] = useState<boolean>(true);
  useEffect(() => {
    // if (renderChart) {
    // }
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

    // const volumeSeries = chart.addHistogramSeries({
    //   color: "#385263",
    //   // lineWidth: 2,
    //   priceFormat: {
    //     type: "volume",
    //   },
    //   // overlay: true,
    //   scaleMargins: {
    //     top: 0.9,
    //     bottom: 0,
    //   },
    // });

    const nextBar: any = () => {
      if (!nextBar.date) nextBar.date = new Date(2020, 0, 0);
      if (!nextBar.bar)
        nextBar.bar = { open: 100, high: 104, low: 98, close: 103 };

      nextBar.date.setDate(nextBar.date.getDate() + 1);
      nextBar.bar.time = {
        year: nextBar.date.getFullYear(),
        month: nextBar.date.getMonth() + 1,
        day: nextBar.date.getDate(),
      };

      let old_price = nextBar.bar.close;
      let volatility = 0.1;
      let rnd = Math.random();
      let change_percent = 2 * volatility * rnd;

      if (change_percent > volatility) change_percent -= 2 * volatility;

      let change_amount = old_price * change_percent;
      nextBar.bar.open = nextBar.bar.close;
      nextBar.bar.close = old_price + change_amount;
      nextBar.bar.high =
        Math.max(nextBar.bar.open, nextBar.bar.close) +
        Math.abs(change_amount) * Math.random();
      nextBar.bar.low =
        Math.min(nextBar.bar.open, nextBar.bar.close) -
        Math.abs(change_amount) * Math.random();
      nextBar.bar.value = Math.random() * 100;
      nextBar.bar.color =
        nextBar.bar.close < nextBar.bar.open ? "#B82C0D" : "#8CC176";

      return nextBar.bar;
    };

    for (let i = 0; i < 150; i++) {
      const bar = nextBar();
      candleSeries.update(bar);
      // volumeSeries.update(bar);
    }

    resize();

    setInterval(() => {
      const bar = nextBar();
      candleSeries.update(bar);
      // volumeSeries.update(bar);
    }, 3000);

    window.addEventListener("resize", resize, false);

    function resize() {
      console.log(chartHtml?.parentElement?.offsetWidth);
      chart.applyOptions({
        width: chartHtml?.parentElement?.offsetWidth,
        height: chartHtml?.parentElement?.offsetHeight,
      });

      setTimeout(() => chart.timeScale().fitContent(), 0);
    }

    // setRenderChart(false);
  }, []);
  return <div id="chart1" className="w-full h-full overflow-hidden"></div>;
};

export default Chart;
