import React from 'react';

const Clock=()=> {

    let time= new Date("28-05-2002");

    return (
        <>
            
          <h1>{time}</h1>
           
        </>
    );
}

export default Clock;
