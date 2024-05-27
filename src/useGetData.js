import { useEffect, useState } from "react";

function useGetData(dataUrl){
    let [data,setData] = useState([])

    async function getData(){
        let apiData = await fetch(dataUrl)
        let jsonData = await apiData.json()
        setData(jsonData)
    }
    useEffect(()=>{
        getData()
    },[])
    return data
}
export default useGetData