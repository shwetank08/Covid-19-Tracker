import React,{useContext} from "react";
import { Doughnut } from 'react-chartjs-2';
import { UserContext } from "../Context/UserContext";
const Charts = () => {

    const {currcountry} = useContext(UserContext)
    const tc = currcountry.cases;
    const td = currcountry?.deaths;
    const tr = currcountry?.recovered;
  const state = {
    labels: ["Cases", "Deaths", "Recovered"],
    datasets: [
      {
        label: "Covid-19 Tracker",
        backgroundColor: [
          "#ffff66",
          "#ff4500",
          "#32cd32",
        ],
        hoverBackgroundColor: [
          "#ffff66",
          "#ff4500",
          "#32cd32",
        ],
        data: [tc,td,tr],
      },
    ],
  };
  return (
    <div>
    <Doughnut data={state} />
    </div>
  );
};

export default Charts;
