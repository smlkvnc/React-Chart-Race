import React, { useState, useEffect } from "react";
import list from "./components/data";
import Chart from "./components/Chart";

function App() {
  const [render, setRender] = useState(true);
  var x = 2000;
  const [date, setDate] = useState(x);
  const [data, setData] = useState(list);

  useEffect(() => {
    setInterval(() => {
      if (x <= 2021) {
        setDate(x++);
      } else {
        setRender(false);
      }
    }, 750);
  }, []);

  const getRandomValue = () => {
    return Math.floor(Math.random() * 10);
  };

  const setBar = () => {
    if (render) {
      let bar = JSON.parse(JSON.stringify(data));
      bar.forEach((item) => {
        item.value += getRandomValue();
      });
      setData(bar);
      setListHandler(bar);
    }
  };

  useEffect(() => {
    let x;
    x = setInterval(() => {
      setBar();
    }, 100);
    return () => clearInterval(x);
  }, [data]);

  const setListHandler = (bar) => {
    return bar.sort((a, b) => b.value - a.value)[0].value;
  };

  return (
    <div>
      <Chart data={data} date={date} />
    </div>
  );
}

export default App;
