import React,{ useState, useEffect} from 'react'
import axios from 'axios';

function Companies({ country, setCountry, data }) {
    const [selectedTags, setSelectedTags] = useState([]);
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

    

  return (
    <div className='flex flex-wrap'>
    {/* Render the selected tags */}
    
    {/* Render the dropdown */}
    <select className='bg-[#051131] outline-none w-[100%] rounded-xl text-white' onChange={(event) => handleTagSelection(event.target.value)}>
      {/* map of the dropdown list */}
      <option disabled={selectedTags.includes(`All`)} value={`All`}>All Companies</option>
      {data?.Companies.map((item, index) => (
        <option disabled={selectedTags.includes(`${item}`)} value={`${item}`}>{item}</option>
      ))}
      {/* Add more options as needed */}
    </select>
    <div>
      {selectedTags.map((tag, index) => (
        <div className='cursor-pointer' key={index}>{tag} <button onClick={() => removeTag(tag)}>x</button></div>
      ))}
    </div>
    
  </div>
  )
}

export default Companies