import axios from 'axios';
import React, { useState } from 'react'

const Weather = () => {

    const [cityName, setCityName] = useState("");

    const [wData, setWData] = useState(null);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=a9d8e1268e744a3ba3e153725251307&q=${cityName}&aqi=no`);
            console.log(response);
            setWData(response.data.location);

            console.log(wData);
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <>

            <div className='flex justify-center'>
                <form onSubmit={handleSubmit}>
                    <input type="text" className='border border-gray-300' onChange={(e) => setCityName(e.target.value)} value={cityName} />

                    <button className='bg-blue-400'>SEARCH</button>
                </form>
            </div>

                <div className='border border-gray-300 p-24 w-[300]'>
                    
                    {wData && (
                    <div>
                        <p>{wData.name}</p>
                        <p>{wData.country}</p>
                        <p>{wData.localtime}</p>
                    </div>
                    )}
                    


                </div>

          

        </>
    )
}

export default Weather