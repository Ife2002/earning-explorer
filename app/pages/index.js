import Image from 'next/image'
import React,{ useState, useRef, useEffect } from 'react';
import Fliter from '../../expo/pages/components/Fliter';
import Companies from '../../expo/pages/components/filters/Companies';
import Country from '../../expo/pages/components/filters/Countries';
import { Inter } from 'next/font/google'
import Card from '../../expo/pages/components/Card';
import axios from 'axios';
import Head from 'next/head';
// import Fliter from './components/Fliter';
//import SimpleWordcloud from './components/Word';
// import BallAnimation from './components/Animation';
import NumberAnimation from '../../expo/pages/components/NumberAnimation';
import Tab from '../../expo/pages/components/Tab';
import dynamic from 'next/dynamic';
import Terms from '../../expo/pages/components/filters/Terms';
import Sectors from '../../expo/pages/components/filters/Sectors';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });


const inter = Inter({ subsets: ['latin'] })

export default function Home({  }) {
  const [isOpen, setIsOpen] = useState(true);
  const [clickCount, setClickCount] = useState(0);
  const [filter, setFilter] = useState("Regions");
  const [country, setCountry] = useState('All')
  const [regions, setRegions] = useState('All')
  const [companies, setCompanies] = useState('All')
  const [sectors, setSectors] = useState('All')
  const [terms, setTerms] = useState('All')
  const [list, setList] = useState(null)
  const [drop, setDrop] = useState([
    {
      name: "North America"
    },
    {
      name: "Europe"
    },
    {
      name: "Africa"
    },
    {
      name: "South America"
    },
    {
      name: "Oceania"
    },
  ]);
  const divRef = useRef(null);

  const payload = {
    "from_year": 2018,
    "to_year": 2019,
    "regions": ["All"],
    "countries": ["All"],
    "companies": ["All"],
    "sectors": ["All"],
    "terms": ["All"]
  }

      useEffect(() => {
        const url = 'https://data-value-tool.up.railway.app/get_filters'
        axios.post(url, payload).then(response => {
          // Handle the response data
          const listjson = JSON.parse(response.data);
          console.log(listjson);
          setList(listjson)
        })
        .catch(error => {
          // Handle the error
          console.error(error);
        });
      }, []);

  const SectorsHead = ["All sectors"]
  console.log("find" + JSON.stringify(list))
  const handleClick = (listname) => {
    setIsOpen(!isOpen);
    setFilter(listname)
  };

  const handleClickCountry = (listname) => {
    setIsOpen(!isOpen);
    setFilter('Countries')
  };

  function handlePush({ tag }) {
    SectorsHead.push(`${tag}`);
    console.log(SectorsHead)
  }


  // const chartData = {
  //   labels: ['Country 1', 'Country 2', 'Country 3'], // Replace with your actual country labels
  //   datasets: [{
  //     label: 'Population',
  //     data: [10, 20, 30], // Replace with your actual population data
  //     backgroundColor: ['rgba(255, 0, 0, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(0, 0, 255, 0.5)'], // Replace with your desired colors
  //   }],
  // };

  // const options = {
  //   chart: {
  //     type: qjson.type
  //   },
  //   series: [
  //     {
  //       name: 'My Dataset',
  //       data: qjson.data
  //     }
  //   ],
  //   xaxis: {
  //     categories: qjson.labels
  //   }
  // };

  // const series_data = []

  // for (let i = 0; i < tjson.labels.length; i++) {
  //   const series_element = {
  //     name : tjson.labels[i],
  //     data : tjson.data[i]
  //   }

  //   series_data.push(series_element)
    
  // };

  // const heatmapOptions = {
  //   chart: {
  //     type: 'heatmap' //qjson.type
  //   },
  //   series: series_data,
  // };

  const radialOptions = {
    chart: {
      type: 'radialBar' //qjson.type
    },
    series: [44, 55, 67, 83],
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px',
          },
          value: {
            fontSize: '16px',
          },
          total: {
            show: true,
            label: 'Total',
            formatter: function (w) {
              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
              return 249
            }
          }
        }
      }
    },
    labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
  };

  return (
    <main
      className={`flex min-h-screen w-[100%] flex-col items-center py-20 ${inter.className}`}
    >
      <Head>
        <title>Earning Explore || Data product LLC</title>
     </Head> 
     {/* <Fliter /> */}
     <div className='w-[100%] flex flex-col items-center bg-green-800'>
     <h1>countries: {country}</h1>
     <h1>regions: {regions}</h1>
     <h1>companies: {companies}</h1>
     <h1>terms: {terms}</h1>
     <h1>sectors: {sectors}</h1>
     <div className='flex gap-2 px-4'>
     <Fliter data={list} setRegions={setRegions} regions={regions} />
     <Companies data={list} setCountry={setCompanies} country={companies} />
     <Country data={list} setCountry={setCountry} country={country} />
     <Terms data={list} setCountry={setTerms} country={terms} />
     <Sectors data={list} setCountry={setSectors} country={sectors} />
     </div>
     
     <Card />
     </div>
    
    
    </main>
  )
}


// export async function getStaticProps() {
//   try {
//     const payload = {
//       "from_year": 2018,
//       "to_year": 2019,
//       "regions": ["All"],
//       "countries": ["All"],
//       "companies": ["All"],
//       "sectors": ["All"],
//       "terms": ["All"]
//   }

//     const response = await axios.post('https://data-value-tool.up.railway.app/get_filters', payload);
//     const data = response.data;
    
//     console.log(data)
//     console.log()
//     return {
//       props: {
//         data
//       }
//     };
//   } catch (error) {
//     console.error(error);
//     return {
//       props: {
//         data: null
//       }
//     };
//   }
// }

// export async function getStaticProps() {
//   // Define the URLs for your APIs
//   const listData = 'https://data-value-tool.up.railway.app/get_filters';
//   const cardData = 'https://data-value-tool.up.railway.app/companies-countries-sectors';
//   const quarterlyCountData = 'https://data-value-tool.up.railway.app/individual-quarterly-terms-count';
//   const termsfrequencyData = 'https://data-value-tool.up.railway.app/terms-frequencies-over-years-quarter';
//   const topfiveRevenueData = 'https://data-value-tool.up.railway.app/top-5-terms-by-revenue';

//   try {
//     // Make the API requests
//     const payload = {
//       "from_year": 2018,
//       "to_year": 2022,
//       "regions": ["All"],
//       "countries": ["All"],
//       "companies": ["All"],
//       "sectors": ["All"],
//       "terms": ["All"]
//   }
  
//     const [response1, response2, response3, response4, response5 ] = await Promise.all([
//       axios.post(listData, payload),
//       axios.post(cardData, payload),
//       axios.post(quarterlyCountData, payload),
//       axios.post(termsfrequencyData, payload),
//       axios.post(topfiveRevenueData, payload),
//     ]);

//     // Extract the data from the responses
//     const list = response1.data;
//     const card = response2.data;
//     const QCD = JSON.parse(response3.data);
//     const TFD = JSON.parse(response4.data);
//     const TFRD = response5.data

//     const listjson = JSON.parse(list);
//     const cardjson = JSON.parse(card);
//     const qjson = QCD
//     const tjson = TFD
//     const tfrdjson = TRFD
//     console.log(qjson)
//     console.log(cardjson)

//     // Return the data as props
//     return {
//       props: {
//         listjson,
//         cardjson,
//         qjson,
//         tjson,
//         tfrdjson
//       }
//     };
//   } catch (error) {
//     // Handle any errors that occur during the API requests
//     console.error('Error fetching data:', error);
//     // You can return an error prop or fallback data here if needed
//     return {
//       props: {
//         listjson: [],
//         cardjson: [],
//         qjson: [],
//         tjson: [],
//         tfrdjson: []
//       }
//     };
//   }
  
// }