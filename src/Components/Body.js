import React,{useEffect, useState} from "react";
import ResCard from "./ResCard";
import Shimmer from './Shimmer'

const Body = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
        console.log("useEffect called!!!!!!!")
    },[]);
    

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        // console.log(await data.json())
        // let reqDtaa =  data.then(item => {console.log(item)},err => {
        //     console.log(err)
        // });
        const reqData = await data.json()
        // data.cards[2].card.card.gridElements.infoWithStyle.restaurants[1].info.avgRating
        console.log(reqData.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
        setRestaurants(reqData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        console.log(restaurants)

    }
    // fetch()
    

    const sortRatingabove4 = () => {
        let dummyRate = []
        dummyRate  = restaurants.filter(item => {
            console.log(item);
            return item.info.avgRating > 4;
        });
        setRestaurants(dummyRate);
    }

    if(restaurants.length === 0){

        return <Shimmer></Shimmer>
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