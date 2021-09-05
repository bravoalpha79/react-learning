import React, {useState} from 'react'

function UseStateWithArraays() {
    const [nums, setNums] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
    const addNums = () => {
        setNums([...nums, nums.length + 1]);
    }
    const removeNums = () => {
        setNums(nums.filter(num => nums.indexOf(num) < nums.length-1));
    }
    return (
        <div>
            <button onClick={addNums}>Add Item</button>
            <button onClick={removeNums}>Remove Item</button>
            <ul>
               {nums.map(num => <li key={num}>{num}</li>)} 
            </ul>
        </div>
    )
}

export default UseStateWithArraays
