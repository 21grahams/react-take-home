import React from "react";
import Campaign from "./Campaign";

const DataMap = ({ campaigns }) => {
  return (
    <div>
      {campaigns.campaigns
        ? campaigns.campaigns.map((campaign, i) => (
            <Campaign campaign={campaign} key={i} />
          ))
        : null}
    </div>
  );
};

export default DataMap;
