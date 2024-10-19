import { useState } from 'react';
import './Country.css'
const Country = ({country}) => {
    const {name, flags, population} = country
    const [visited, setVisited] = useState(false)
    // const [buttonText, setButtonText] = useState(Visit)
    const handleVisited = () => {
        setVisited(!visited)

        // document.getElementById('visited').innerText = 'visit'
    }
    // const handleButtontext = () =>{
    //     setButtonText(visted);
    // }
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h2>Name : {name?.common}</h2>
            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <button id='visited' onClick={handleVisited}>visit</button>
            {visited ? "already visited" : 'Not visited'}
        </div>
    );
};

export default Country;