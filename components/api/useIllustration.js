import axios from 'axios'
import { useQuery } from 'react-query'

function fetchIllustrationAPI() {
  return axios
    .get('/api/illustration')
    .then(response => response.data)
    .catch(error => {
      if (error.response) throw new Error(error.response.data.message)
      throw error
    })
}

function useIllustration() {
  const queryKey = 'fetchIllustrationAPI'

  const { isSuccess, data } = useQuery({
    queryKey,
    queryFn: fetchIllustrationAPI,
    staleTime: Infinity,
  })

  return {
    data: data || [],
    isSuccess,
    queryKey,
  }
}

export default useIllustration
