import React, { useState, useEffect } from "react";
import axios from "axios";
import DataMap from "./DataMap";
import "./App.css";

function App() {

  const [campaigns, setCampaigns] = useState([]);

  const getAllData = () => {
    axios.get('https://www.plugco.in/public/take_home_sample_feed')
      .then(res => setCampaigns(res.data))
      .catch(err => console.log('error with get request: ', err));
  }

    useEffect(() => {
      getAllData();
    }, []);

  return (
    <div>
      <DataMap campaigns={campaigns}/>
    </div>
  )
}

export default App;
