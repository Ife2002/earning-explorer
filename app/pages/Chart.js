import { CustomMap } from "@jadesrochers/geomap";
import React, { useEffect, useState } from "react";
import { geoEqualEarth } from "d3-geo";
import * as R from "ramda";

const projectEqualEarth = scale =>
  geoEqualEarth()
    .scale(scale)
    .translate([770, 530]);

const useLoadMap = path => {
  const [geodata, setgeodata] = useState(undefined);
  useEffect(() => {
    const datagetter = async () => {
      let rawgeo = await fetch(path);
      rawgeo = await rawgeo.json();
      //console.log("the raw data: ", rawgeo);
      let rsltgeo = {
        type: rawgeo["type"],
        features: rawgeo["features"]
      };
      setgeodata(rsltgeo);
    };
    datagetter();
  }, [path]);
  return geodata;
};

// The ToolTipMap must contain the custom map to get data tooltip support.
const WorldMap = props => {
  const path =
    "https://raw.githubusercontent.com/jadesrochers/geomap/master/src/__tests__/worldmap110m.json";
  let worldgeo = useLoadMap(path);
  //console.log('the other data: ',otherdata)
  // The datakey will determine the path for the topology in the output
  if (!worldgeo) {
    return null;
  }
  let randdata = worldgeo.features.map(feat => {
    let item = {};
    item[feat.properties.sov_a3] = Math.random() * 100;
    return item;
  });
  let data = R.mergeAll(randdata);

  return (
    <CustomMap
      projection={projectEqualEarth}
      featurename={"countries"}
      featurekey={"sov_a3"}
      scaling={400}
      
      getgeofeat={worldgeo}
      data={data}
      tooltipkey={"name_sort"}
      formatter={input => Math.round(input)}
      legendstyle={{
        width: "100%",
        height: "40px",
        fontSize: "0.8em",
        padding: "0 0 5px 0"
      }}
      style={{
        fill: "#f4f6f6",
        stroke: "#707b7c",
        strokeLinejoin: "round"
      }}
      datastyle={{
        stroke: "#323535",
        strokeLinejoin: "round"
      }}
      zoomstyle={{ width: "30px", height: "30px" }}
      tooltipwidth={260}
      tooltipheight={120}
      tooltipstyle={{ fontSize: "1.9rem", fontWeight: 600 }}
      limitHook={{ xlimits: { min: 0, max: 100 } }}
      {...props}
    />
  );
};

export { WorldMap };
