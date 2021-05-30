import axios from 'axios'
import { useQuery } from 'react-query'

function fetchIllustrationAPI() {
  return axios
    .get('/api/illustration')
    .then(response => response.data.sort((a, b) => b.order - a.order))
    .catch(error => {
      if (error.response) throw new Error(error.response.data.message)
      throw error
    })
}

function useIllustration() {
  const { isSuccess, data } = useQuery({
    queryKey: 'fetchIllustrationAPI',
    queryFn: fetchIllustrationAPI,
    staleTime: Infinity,
  })

  return {
    data: data || [],
    isSuccess,
  }
}

export default useIllustration
