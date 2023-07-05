import React from 'react'
import dynamic from 'next/dynamic';


import countries from "./world_countries.json";
const ResponsiveChoropleth = dynamic(() => import('@nivo/geo').then(module => module.ResponsiveChoropleth), {
    ssr: false // Set ssr to false if the component should not be server-side rendered
  });


function Map() {

    const data = [
        { id: 'USA', value: 150 },
        { id: 'CAN', value: 200 },
        { id: 'MEX', value: 75 },
        // Add more data objects for other regions as needed
      ];

  return (<div className='w-[100%] h-[600px] overflow-hidden'>
    What
    <ResponsiveChoropleth
        data={data}
        features={countries.features}
        colors="nivo"
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        domain={[0, 0]}
        projectionTranslation={[0.5, 0.5]}
        enableGraticule={true}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
        legends={[
          {
            anchor: "bottom-left",
            direction: "column",
            justify: true,
            translateX: 20,
            translateY: -100,
            itemsSpacing: 0,
            itemWidth: 94,
            itemHeight: 18,
            itemDirection: "left-to-right",
            itemTextColor: "#444444",
            itemOpacity: 0.85,
            symbolSize: 18,
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000000",
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
      />
    </div>
  )
}

export default Map