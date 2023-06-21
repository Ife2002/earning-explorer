import React,{useState} from 'react'

function Fliter() {
    const [selectedTags, setSelectedTags] = useState([]);

    function handleTagSelection(tag) {
        if (selectedTags.includes(tag)) {
          setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
        } else {
          setSelectedTags([...selectedTags, tag]);
        }
      }
    function removeTag() {
        setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
    }  
      
  return (
    <div>
    {/* Render the selected tags */}
    <div>
      {selectedTags.map((tag, index) => (
        <span key={index}>{tag}</span>
      ))}
    </div>
    {/* Render the dropdown */}
    <select className='bg-black text-white' onChange={(event) => handleTagSelection(event.target.value)}>
      <option value="Tag 1">Tag 1</option>
      <option value="Tag 2">Tag 2</option>
      <option value="Tag 3">Tag 3</option>
      {/* Add more options as needed */}
    </select>

    
  </div>
  )
}

export default Fliter