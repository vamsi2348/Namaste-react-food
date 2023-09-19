import React from 'react'
import { CDN_URL } from '../utils/constans'

const ResCard = (props) => {
    console.log(props)
    const { name, cuisines, avgRating,cloudinaryImageId
    } = props.resData.info
    const {deliveryTime} = props.resData.info.sla
    console.log("name",name)
    return(
        <div className='res-card'>
            <img className='res-logo' alt="rescard" src={CDN_URL+cloudinaryImageId}/>
            <h3>{name}</h3> 
            <h4>{cuisines.join(", ")}</h4>
            <h4>Rating {avgRating}</h4>
            <h4>{deliveryTime}min</h4>       

        </div>
    )
}

export default ResCard