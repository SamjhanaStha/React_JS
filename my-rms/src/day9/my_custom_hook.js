import { useEffect, useState } from "react"

// Custom hook to fetch data from API
let useFetch = (url) => {
    let [data, setData] = useState([])
    useEffect(
        () => {
            fetch(url)
                .then(response => response.json())
                .then(
                    data => setData(data)
                )
        },
        []
    )
    return [data, setData]
}

export default useFetch