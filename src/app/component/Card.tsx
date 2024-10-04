import React from 'react'

interface tprosp{
Name:string,
Age:number,
RollNo:number
Class:string
}


function Card(props:tprosp) {
  return (
    <div>
        <h2 className='mt-7 text-2xl font-bold  hover:text-amber-950'>Name:{props.Name}</h2>
    <p className='mt-1 pl-1 font-bold hover:text-amber-950'>Age:<span className="font-bold">{props.Age}</span></p>
    <p className='mt-1 pl-1 font-bold hover:text-amber-950'>RollNo:<span className='font-bold'>{props.RollNo}</span></p>
    <p className='mt-1 pl-1 text-pretty font-bold hover:text-amber-950'>Class <span className='font-bold'> :{props.Class}</span></p>
    
    </div>
  )
}

export default Card