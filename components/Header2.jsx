import React from 'react';

const Header2 = () => {
    const List = [
        {
            name:"Agra",
        },
        {
            name: "Mathura",
        },
        {
            name: "Delhi",
        },
        {
            name: "Mumbai",
        },
        {
            name: "Banglore",
        },
        {
            name:"Hyderabad",
        },
    
    ];
    
  return (
    <div className='flex px-10 py-3 bg-gray-100 justify-between'>
      {
        List.map((e)=>{
            return(
                <span key={e.name}>{e.name}</span>
            )
        })
      }
    </div>
  )
}

export default Header2
