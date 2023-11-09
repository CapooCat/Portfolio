import axios from 'axios'
import { useQuery } from "@tanstack/react-query"

function useFetch(options, { key }) {
    const { isLoading, error, data} =  useQuery({
        queryKey: [key], // cache key
        queryFn: ({ signal }) => axios.request({...options, signal}).then(
          (res) => res.data
        ),
    })

    return { isLoading, error, data }
}

export default useFetch;