import React, { useEffect, useState } from "react";
import axios from "axios";
import AnalyticBoardCard from "./AnalyticBoardCard";

export default function AnalyticBoard({ username }) {
  const [analyticData, setAnalyticData] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`/api/analytic/${username}`);
        setAnalyticData(res.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [username]);

  if (analyticData) {
    return (
      <AnalyticBoardCard
        avatar={analyticData["avatar"]}
        totalFollowers={analyticData["totalFollowers"]}
        dailyNewFollowers={analyticData["dailyAverageAdditionalFollowers"]}
        dailyViewers={analyticData["dailyAverageViewers"]}
      />
    );
  } else {
    return <div>Loading Analytics Data</div>;
  }
}
