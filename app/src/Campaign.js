import React from "react";
import Media from "./Media";

const Campaign = ({ campaign }) => {
  console.log("SINGLE campaign: ", campaign.medias);
  return (
    <div>
      <img
        src={campaign.campaign_icon_url}
        alt="new"
        style={{ width: "50px", borderRadius: "15px", marginTop: "10px" }}
      />
      <span
        style={{
          position: "absolute",
          marginTop: "10px",
          marginLeft: "10px",
          fontWeight: "bold",
        }}
      >
        {campaign.campaign_name}{" "}
      </span>
      <span
        style={{
          position: "absolute",
          paddingTop: "25px",
          marginTop: "10px",
          marginLeft: "10px",
          color: "green",
          fontWeight: "bold",
        }}
      >
        {campaign.pay_per_install} per install
      </span>
      <span>
      <hr/>
        {campaign.medias.map((media, i) => (
          <Media media={media} key={i} />
        ))}
      </span>
    </div>
  );
};

export default Campaign;
