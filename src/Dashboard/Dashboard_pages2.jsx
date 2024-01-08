import React, { useState } from "react";
import "./Dashboard_pages2.css";
import { BarChart, Bar, Cell, ResponsiveContainer } from "recharts";

const Dashboard_pages2 = () => {
  const data = [
    {
      name: "Tour1",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Tour2",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Tour3",
      uv: 2000,
      pv: 9800,
      amt:2290,
    },
    {
      name: "Tour4",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Tour5",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Tour6",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Tour7",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (data, index) => {
    setActiveIndex(index);
  };

  const activeItem = data[activeIndex];

  return (
    <div className="dushbo2">
      <ResponsiveContainer width="100%" height={70}>
        <BarChart width={150} height={40} data={data}>
          <Bar dataKey="uv" onClick={handleClick}>
            {data.map((entry, index) => (
              <Cell
                cursor="pointer"
                fill={index === activeIndex ? "#82ca9d" : "#8884d8"}
                key={`cell-${index}`}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      {/* <p className="content">{`Uv of "${activeItem.name}": ${activeItem.uv}`}</p> */}
    </div>
  );
};

export default Dashboard_pages2;
