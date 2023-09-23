import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Body from './Components/Body'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import About from './Components/About';
import Contact from './Components/Contact';
import Error from './Components/Error';
// const heading = React.createElement("h1", {}, "I am an H1");


// async function getresData() {
//         const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
//         console.log("response", response)
//         // const movies = await response.json();
//         // console.log(movies)
//       }
// getresData()





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

const appRoutes = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement:<Error />
    },
    {
        path:"/about",
        element:<About />
    },
    {
        path:"/contact",
        element:<Contact />
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoutes}/>)