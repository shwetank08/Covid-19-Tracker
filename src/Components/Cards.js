import React, { useContext } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/Typography";
import Typography from "@material-ui/core/Typography";
import { UserContext } from "../Context/UserContext";
import Charts from "./Charts"
import "../App.css"
const Cards = () => {
  const { currcountry } = useContext(UserContext);
  return (
    <div className="cardstuff ">
      <div className="cardLeft">
        <Card
          variant="outlined"
          className="cardStyle"
          style={{ background: "#ffff66" }}
        >
          <CardContent>
            <Typography className="classesTitle" color="textSecondary">
              Cases
            </Typography>
            <h2>+{currcountry.todayCases}</h2>
            <Typography
              className="cardStyle"
              variant="h5"
              component="h2"
              color="textSecondary"
            >
              Total {currcountry.cases}
            </Typography>
          </CardContent>
        </Card>
        <Card
          variant="outlined"
          className="cardStyle"
          style={{ background: "#ff4500" }}
        >
          <CardContent>
            <Typography className="classesTitle" color="textSecondary">
              Death
            </Typography>
            <h2>+{currcountry.todayDeaths}</h2>
            <Typography variant="h5" component="h2" color="textSecondary">
              Total {currcountry.deaths}
            </Typography>
          </CardContent>
        </Card>
        <Card
          variant="outlined"
          className="cardStyle"
          style={{ background: "#32cd32" }}
        >
          <CardContent>
            <Typography className="classesTitle" color="textSecondary">
              Recovered
            </Typography>
            <h2>+{currcountry.todayRecovered}</h2>
            <Typography variant="h5" component="h2" color="textSecondary">
              Total {currcountry.recovered}
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div className="cardRight"> 
        <Charts/>
      </div>
    </div>
  );
};

export default Cards;
