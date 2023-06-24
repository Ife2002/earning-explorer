import React,{useState} from 'react'

function FliterLogic() {
  const [filteredPayload, setFilteredPayload] = useState([]);
  const [filterValue, setFilterValue] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);

  const handleFilterClick = () => {
    const filteredData = payload.filter(item => item.includes(filterValue));
    setFilteredPayload(filteredData);
  };

  const handleItemClick = (item) => {
    setSelectedItems(prevItems => [...prevItems, item]);
  };

  return (
    <div>
    <input
      type="text"
      value={filterValue}
      onChange={e => setFilterValue(e.target.value)}
      placeholder="Enter filter value"
    />
    <button onClick={handleFilterClick}>Filter</button>

    <ul>
      {filteredPayload.map((item, index) => (
        <li key={index}>
          {item}
          <button onClick={() => handleItemClick(item)}>Add</button>
        </li>
      ))}
    </ul>

    <h3>Selected Items:</h3>
    <ul>
      {selectedItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
  )
}

export default FliterLogic