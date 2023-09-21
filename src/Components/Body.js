import React,{useEffect, useState} from "react";
import ResCard from "./ResCard";
import { MOCK_DATA } from "../utils/constans";
import Shimmer from './Shimmer'

const Body = () => {
    const resData = MOCK_DATA?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    const [restaurants, setRestaurants] = useState(resData);
    const [filteredrestaurants, setFilteredrestaurants] = useState(restaurants)
    const [searchText, setSearchText] = useState("");
    const [searchRes, setSearchRes] = useState(true);
    console.log("Body rerendered",restaurants)

    // useEffect(() => {
    //     fetchData();
    //     console.log("useEffect called!!!!!!!")
    // },[]);
    

    // const fetchData = async () => {
    //     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    //     // console.log(await data.json())
    //     // let reqDtaa =  data.then(item => {console.log(item)},err => {
    //     //     console.log(err)
    //     // });
    //     const reqData = await data.json()
    //     // data.cards[2].card.card.gridElements.infoWithStyle.restaurants[1].info.avgRating
    //     console.log(reqData.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    //     setRestaurants(reqData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    //     console.log(restaurants)

    // }
    // fetch()
    

    const sortRatingabove4 = () => {
        let dummyRate = []
        dummyRate  = restaurants.filter(item => {
            // console.log(item);
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
                    <div className="search">
                        <input type="text" className="search-box" value={searchText} onChange={(e) => {
                            setSearchText(e.target.value)
                        }}></input>
                        {/* <button onClick={() => {
                            console.log(searchText);
                            if(searchText === ""){
                                setRestaurants(resData);   
                                console.log("empty",restaurants)                             
                            }
                            else{
                                let filteredData = restaurants.filter(item => {
                                // console.log(item.info.name)
                                console.log("if goted",restaurants)
                                return item.info.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
                            });
                            if(filteredData.length>0){
                                setRestaurants(filteredData);
                                setSearchRes(true);
                            }else{
                                setSearchRes(false);
                                setRestaurants(resData);
                            }

                        }                            
                            
                        }}>Search</button> */}
                        <button onClick={() => {
                            let filteredData = restaurants.filter((item) => item.info.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
                            if(filteredData.length === 0){
                                setSearchRes(false);
                                setFilteredrestaurants(restaurants);

                            }
                            else{
                                setSearchRes(true);
                                setFilteredrestaurants(filteredData);
                            }
                            
                        }}>Search</button>
                        <br></br>{searchRes === false && <span style={{color:"red"}}>Search for a valid Input</span>}

                    </div>
                    <button onClick={sortRatingabove4} className="highest-rating">Highest Rating</button>
                    <button onClick= {() => setRestaurants(resData)}>Load All</button>
                    
                
                 </div>
           
            <div className='res-container'>
            {filteredrestaurants.map(item => <ResCard key={item.info.id} resData = {item}></ResCard>)}
                {/* <ResCard resData = {restaurants}></ResCard>                 */}
            </div>
            
        </div>
    )
}

export default Body;