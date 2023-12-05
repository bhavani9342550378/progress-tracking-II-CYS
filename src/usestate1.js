import React, { useState } from 'react';
const Hook = () => {
const [count, setCount ] = useState(0);
const handleClick = () => {
    setCount(count +1)
}
return  (
    <div>
    <p>Count: {count}</p>
    <button onClick ={handleClick}>Incriment</button>
    <button onClick={() => setCount(count -1)} >Decriment</button>
    </div>

);
};
export default Hook;