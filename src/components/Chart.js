import React from "react";
import "./Chart.css";
import Years from "./Years";
const Chart = ({ data, date }) => {
  return (
    <div className="container">
      {data.map((item) => {
        const { id, name, value, color, logo } = item;
        return (
          <div
            className="chart-item"
            key={id}
            style={{
              width: value,
              backgroundColor: color,
              color: "white",
            }}
          >
            <div>
              <img src={logo} alt="logo" style={{ width: 30 }} />
            </div>
            {name} {value}
          </div>
        );
      })}
      <Years date={date} />
    </div>
  );
};

export default Chart;
