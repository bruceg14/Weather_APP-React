import { getDatabase, ref, set, onValue } from "firebase/database";
import fb_app from "./fb_database.js"
import React, { useState, useEffect } from 'react';


function History() {
    const [data, SetData] = useState([])



    const db = getDatabase();
    const city_ref = ref(db, "city/")

    useEffect(() => {
        onValue(city_ref, (snapshot) => {
            let tmp = []
            snapshot.forEach((children) => {
                const child_key = children.key
                const child_val = children.val()
                tmp.push(<li>{child_key}</li>)
            })
            SetData(tmp)
        })
        return () => {
            
        };
    }, []);

    const list_city = data.map((city) => {
        <li>{city}</li>
    })

    function handleSubmit() {
       console.log(data)
    }


    return(
        <div>
            <h2>List of Cities:</h2>
            <ul>
                {data}
            </ul>
        </div>
    )
}

export default History