import React from "react";
import ResCard from "./ResCard";
import RES_DATA from '../utils/constans'

const Body = () => {
    let restaurants = RES_DATA;
    return(
        <div className='body'>
            <div className='search'> 
                search
            </div>
            <div className='res-container'>
            {restaurants.map(item => <ResCard key={item.info.id} resData = {item}></ResCard>)}
                {/* <ResCard resData = {restaurants}></ResCard>                 */}
            </div>
            
        </div>
    )
}

export default Body;