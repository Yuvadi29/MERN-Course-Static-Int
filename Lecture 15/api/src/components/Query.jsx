import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Query = () => {
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);


    useEffect(() => {
        if (input) {
            setLoading(true);
            axios.get(`https://api.nationalize.io/?name=${input}`)
                .then(res => {
                    setItems(res.data);
                    setLoading(false);
                    console.log(res.data);
                })
                .catch(err => {
                    console.log(err);
                    setLoading(false);
                });
        }
    }, [input]);

    return (
        <div>
            <input
                type="text"
                onChange={(e) => setInput(e.target.value)}
                value={input}
                placeholder='Enter Query'
            />

            {loading && <p>Loading</p>}
            {items?.country?.map(item => (
                <li key={item.id}>
                    Country Name: {item?.country_id}
                </li>
            )
            )}    
        </div>
    )
}

export default Query
