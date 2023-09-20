import React,{useState} from "react";
import ResCard from "./ResCard";
import RES_DATA from '../utils/constans'



const Body = () => {
    let restaurants1 = RES_DATA;
    const [restaurants, setRestaurants] = useState(restaurants1);
    console.log("setRestaurants1", setRestaurants1);
    console.log("restaurants,", restaurants1);

    const sortRatingabove4 = () => {
        let dummyRate = []
        dummyRate  = restaurants1.filter(item => {
            console.log(item);
            return item.info.avgRating > 4;
        });
        setRestaurants(dummyRate);
    }

    return(
        <div className='body'>
            <div className='rating'> 
                <button onClick={sortRatingabove4}>Highest Rating</button>
            </div>
            <div className='res-container'>
            {restaurants.map(item => <ResCard key={item.info.id} resData = {item}></ResCard>)}
                {/* <ResCard resData = {restaurants}></ResCard>                 */}
            </div>
            
        </div>
    )
}

export default Body;