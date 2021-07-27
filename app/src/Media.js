import React from "react";

const Media = ({ media }) => {
  return (

    <img
      src={media.cover_photo_url}
      alt="new"
      style={{ width: "25%", float: "right", borderRadius: "50px" }}
    />
  );
};

export default Media;
