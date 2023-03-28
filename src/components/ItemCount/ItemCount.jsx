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
    <div className="col-6">
        <button className='btn btn-warning' onClick={handleMinus}>
            -
        </button>
        <span className='m-2'> 
            {count}
        </span>
        <button className='btn btn-warning' onClick={handleAdd}>+</button>
    </div>
  )
}
