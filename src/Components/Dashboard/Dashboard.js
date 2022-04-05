import React from "react";
import GraphFour from "../GraphFour/GraphFour";
import GraphOne from "../GraphOne/GraphOne";
import GraphThree from "../GraphThree/GraphThree";
import GraphTwo from "../GraphTwo/GraphTwo";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="graph-controller">
      <div className="graph-container">
        <div className="graph-bata">
          <h2 className="bata">BATMAN VS SUPERMAN</h2>
          <GraphOne></GraphOne>
          <h1 className="bata">BAR CHART</h1>
        </div>
        <div className="graph-bata">
          <h2 className="bata">BATMAN VS FLASH</h2>
          <GraphTwo></GraphTwo>
          <h1 className="bata">OGIVE CHART</h1>
        </div>
        <div className="graph-bata">
          <h2 className="bata">BATMAN VS AQUAMAN</h2>
          <GraphThree></GraphThree>
          <h1 className="bata">PIE CHART</h1>
        </div>
        <div className="graph-bata">
          <h2 className="bata">BATMAN VS SUPERMAN</h2>
          <GraphFour></GraphFour>
          <h1 className="bata">BUBBLE CHART</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
