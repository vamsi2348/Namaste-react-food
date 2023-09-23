import { useRouteError } from "react-router-dom";


const Error = () => {
    const error = useRouteError()
    console.log(error)
    return (<div>
        <h1>
            Oops!! Something went wrong
        </h1>
        <h2>{error.status}: {error.statusText}</h2>
        <h3 style={{color:"red"}}>{error.data}</h3>
    </div>)
}

export default Error;