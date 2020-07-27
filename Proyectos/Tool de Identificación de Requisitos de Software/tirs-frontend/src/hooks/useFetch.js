import {useState, useEffect} from 'react';
import {ruta} from '../lib/ruta'
export default function useFetch(url) {
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    let token = localStorage.getItem('TIRS_token');

    useEffect(()=>{
       (async () => {
            try{
                const res = await fetch(ruta + url, {method: 'GET', headers: {'Content-Type': 'application/json','authorization': 'Token ' + token}});
                const json = await res.json();
                setResult(json);
                setLoading(false);
            }catch(err){
                setError(err);
                setLoading(false)
           }
       }) ()
    },[url]);
    
    return {loading, result, error}
};
