import { getDatabase, ref, set, onValue, query, orderByKey, orderByValue } from "firebase/database";
import fb_app from "./fb_database.js"
import React, { useState, useEffect } from 'react';
import "./Search_his.css"

function History() {
    const [data, SetData] = useState([])



    const db = getDatabase();
    let city_ref = ref(db, "city/")

    useEffect(() => {
        console.log(query(city_ref, orderByKey()))
        onValue(query(city_ref, orderByValue()), (snapshot) => {
            let tmp = []
            snapshot.forEach((children) => {
                const child_key = children.key
                const child_val = children.val()
                tmp.unshift(<li>{child_key}   {child_val}</li>)
            })
            SetData(tmp)
        })
        return () => {
            
        };
    }, []);

    const list_city = data.map((city) => {
        <li>{city}</li>
    })


    return(
        <div className = "histories">
            <h1 id = "title_search_history">Search history base on frequency</h1>
            <h2>List of Cities:</h2>
            <ul>
                {data}
            </ul>
        </div>
    )
}

export default History