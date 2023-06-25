import React,{ useState, useEffect} from 'react'
import axios from 'axios';

function Terms({ country, setCountry, data, selectedTags, setSelectedTags }) {
    const [list, setList] = useState(['list'])
    
  

    function handleTagSelection(tag) {
        if (selectedTags.includes(tag)) {
          setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
        } else {
          setSelectedTags([...selectedTags, tag]);
          setCountry((prevCountry) => [...prevCountry, `${tag}`]);
        };
        
       // setCountry(tag)
      };

      function removeTag(tag) {
        const updatedTags = selectedTags.filter((selectedTag) => selectedTag !== tag);
        setCountry((prevRegions) => prevRegions.filter((region) => region !== tag));
        setSelectedTags(updatedTags);
      }  
    
    const handleClick = () => {
      const value = 'Example Value'; // The value to be pushed
      onValueChange(value);
    };

    
    if (typeof selectedTags === 'undefined') {
      // Handle the case where selectedTags is undefined
      return null; // or render a fallback UI
    }
    

  return (
    <div className='flex flex-wrap '>
    {/* Render the selected tags */}
    
    {/* Render the dropdown */}
    <select className='bg-[#051131] w-[100%] rounded-xl text-white' onChange={(event) => handleTagSelection(event.target.value)}>
      {/* map of the dropdown list */}
      <option disabled={selectedTags.includes(`All`)} value={`All`}>All Terms</option>
      {data?.Terms.map((item, index) => (
        <option disabled={selectedTags.includes(`${item}`)} value={`${item}`}>{item}</option>
      ))}
      {/* Add more options as needed */}
    </select>
   
    
  </div>
  )
}

export default Terms