import React, { useState } from "react";
const json = require("../../Components/jsonData/homepage.json");

const useResponse = () => {
  const [data, setData] = useState(json);

  let bannerData = data.titles[0].layoutTitles;
  let Movies = data.titles
    .slice(1)
    .map((a) => ({
      titles: a.layoutTitles.titles,
      id: a.moduleId,
      name: a.title,
    }));
  console.log("bannerData", Movies);

  return { bannerData, Movies };
};

export default useResponse;
