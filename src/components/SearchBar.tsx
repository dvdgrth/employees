import React, { useState } from 'react'
import './SearchBar.css'

interface Props {
    updateDataSearch(substring: string): void;
}

function SearchBar(props: Props) {
    const [value, setValue] = useState("");

    function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
        props.updateDataSearch(event.target.value);
        setValue(event.target.value);
    }

    return (
        <div>
            <input type="text" placeholder="Search employees..." value={value} onChange={handleInput}/>
        </div>
    )
}


export default SearchBar

