import { useEffect, useState } from 'react';


const useFetch = (callBack, url) =>{
    const [loading, setLoading] = useState(false);

    const fetchInitialData = async() =>{
        setLoading(true);
        const response = await fetch(url);
        const initialData = await response.json();
        callBack(initialData);
        setLoading(false);
    }

    useEffect(()=>{
        console.log(1);
        fetchInitialData();
    }, []) 

    // useEffect(()=>console.log(1))

    return loading;

}
export default useFetch;