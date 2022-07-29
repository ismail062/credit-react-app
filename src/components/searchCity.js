import React, { useRef } from 'react'

export default function SearchCity() {
    const cityInputRef = useRef(null);
    const onSubmit = (e) => {
        e.preventDefault();
        const city = cityInputRef.current.value;
        console.log(`${city} is entered. `);
    };
  return (
    <div>
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Enter city name" ref={cityInputRef} />
            <input type="submit" value="Search" />
        </form>
    </div>
  )
}
