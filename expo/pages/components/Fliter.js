import React,{ useState, useEffect} from 'react'
import axios from 'axios';
import { Beth_Ellen } from 'next/font/google';


function Fliter({ regions, setRegions, data, selectedTags, setSelectedTags }) {
    
    const [list, setList] = useState(['list'])
    
  

    function handleTagSelection(tag) {
        if (selectedTags.includes(tag)) {
          setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
        } else {
          setSelectedTags([...selectedTags, tag]);
          
          // if the first array
          // setRegions((prevRegions) => [`${tag}`]);
          // if not
          // setRegions((prevCountry) => [...prevCountry, `${tag}`]);
          setRegions((prevCountry) => [...prevCountry, `${tag}`]);
        };
        
       // setCountry(tag)
      };

 
    
    const handleClick = () => {
      const value = 'Example Value'; // The value to be pushed
      onValueChange(value);
    };

    if (typeof selectedTags === 'undefined') {
      // Handle the case where selectedTags is undefined
      return null; // or render a fallback UI
    }  

  return (
    <div className='flex flex-wrap'>
    {/* Render the selected tags */}
    
    {/* Render the dropdown */}
    <select className='bg-[#051131] w-[100%] rounded-xl text-white' onChange={(event) => handleTagSelection(event.target.value)}>
      {/* map of the dropdown list */}
      <option disabled={selectedTags.includes(`All`)} value={`All`}>All Regions</option>
      {data?.Regions.map((item, index) => (
        <option disabled={selectedTags.includes(`${item}`)} value={`${item}`}>{item}</option>
      ))}
      {/* Add more options as needed */}
    </select>
    
    
  </div>
  )
}

export default Fliter