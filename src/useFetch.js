import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null);

    useEffect(() =>{
        const abortCont = new AbortController();

        setTimeout(() =>{
          fetch(url, { signal: AbortController.Signal})
          .then(response => {
                if(!response.ok){
                throw  Error(`HTTP error! status: ${response.status}`);
                }
                return response.json()
             })
            .then(data => {
                setData(data);
                setIsLoading(false);
                setError(null);
            })
                .catch(error => {
                setError(error.message)
                setIsLoading(false)
                })
        }, 1000)
        return () => abortCont.abort();

    }, [url])

    return{data, isLoading, error}

}
 
export default useFetch;