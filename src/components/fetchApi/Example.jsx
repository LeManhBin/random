import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Example = () => {
    const [dataState, setDataState] = useState([])
    
    const fetchData = async () => {
        try {
            const data = await axios.get("https://json-server-booking-hotel-deploy.vercel.app/rooms")
            setDataState(data.data)
        } catch (error) {
            //xử lý lỗi ở đây
            console.log(error);
        }
    } 

    useEffect(() => {
        fetchData()
    },[])

    console.log(dataState);
  return (
    <div>
        {
            dataState.map((data) => {
                return(
                    <div key={data.id}>
                        <img src={data.imageMain} alt=""  style={{width: '250px', height: '150px'}}/>
                        <p>{data.roomName}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Example