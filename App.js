import React from 'react';
import ReactDOM from 'react-dom';

// const heading = React.createElement("h1", {}, "I am an H1");

const Header = () => {
    return (
        <div className='header'>
        {/* // logo */}
            <div className='res-logo-container'>
                <img className="logo" alt='logo' src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png' />
            </div>
        {/* //nav-item */}
        <div className='nav-list'>
            <ul>
                <li>Home</li>
                <li>About US</li>
                <li>Contact US</li>
                <li>Cart</li>
            </ul>

            </div>
        </div>
        )
}

const ResCard = () => {
    return(
        <div className='res-card'>
            <img className='res-logo' alt="rescard" src='https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png'/>
            <h3>Meghana foods</h3> 
            <h4>Biryani, North Indian, Asian</h4>
            <h4>Rating 4.4</h4>
            <h4>38min</h4>       

        </div>
    )
}
const Body = () => {
    return(
        <div className='body'>
            <div className='search'> 
                search
            </div>
            <div className='res-container'>
                <ResCard></ResCard>
                <ResCard></ResCard>
                <ResCard></ResCard>
                <ResCard></ResCard>
                <ResCard></ResCard>
                <ResCard></ResCard>
                <ResCard></ResCard>
                <ResCard></ResCard>
            </div>
            
        </div>
    )
}

const App = () => {
    return (
        <div className='app'>
        {/* //header */}
        <Header/>
        {/* {/* //body */}
        <Body/>
        {/* //footer  */}


        </div>)
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>)