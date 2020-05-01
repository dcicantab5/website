import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";

const unpack = (rows, key) => rows.map(row => row[key]);

function Chart() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://sheet.best/api/sheets/783f4f13-fece-4991-9ea0-f065a7d4f0eb"
      ).then(res => res.json());
      const rows = response;
      const sma5 = {
        x: unpack(rows, "date"),
        y: unpack(rows, "SMA5"),
        name: "5-day moving averages",
        mode: "lines",
        line: {color: 'rgb(255,223,0)'},
        type: "scatter",
      };
      const sma10 = {
        x: unpack(rows, "date"),
        y: unpack(rows, "SMA10"),
        name: "10-day moving averages",
        mode: "lines",
        line: {color: 'rgb(255,125,0)'},
        type: "scatter",
      };
      const dailyNew = {
        x: unpack(rows, "date"),
        y: unpack(rows, "new_ilisari"),
        name: "Daily confirmed ILI/SARI cases",
        mode: "lines",
        marker: {color: 'rgba(55, 83, 109, 1.0)'},
        type: "bar",
      };
      const cumulative = {
        x: unpack(rows, "date"),
        y: unpack(rows, "cumu_ilisari"),
        name: "Cumulative",
        mode: "text",
        type: "scatter",
        visible: "legendonly",
      };
      setData([sma5, sma10, dailyNew]);
      setIsLoading(false);
    };
    getData();
  }, []);

  return (
    <>
      <h3>Best Decision Time Frame to Lift the Lockdown</h3>
      {isLoading
        ? <p>Loading...</p>
        : <Plot
          data={data}
          layout={{
            width: 960,
            height: 520,
            title: "New ILI/SARI cases confirmed each day",
            legend: {x:0,y:1},
            xaxis: {
              tickformat: "%b %d"}
          }}
        />
      }
    </>
  );
}

export default Chart;

