import React, {useState} from 'react'

export default function ItemCount(props) {
    const [ count, setCount] = useState(0);

    function handleAdd(){
        if (count < props.stock){
            setCount(count + 1)
        }
    }

    function handleMinus(){
        if (count > (props.stock - props.stock)){
            setCount(count - 1)
        }
    }

    return (
    <div>
        <button onClick={handleMinus}>
            -
        </button>
        <span> 
            {count}
        </span>
        <button onClick={handleAdd}>+</button>
    </div>
  )
}
