import axios from 'utils/axiosUtils'
import { useQuery } from 'react-query'

function fetchProjectsAPI() {
  return axios
    .get('/api/projects')
    .then(response => response.data.sort((a, b) => b.order - a.order))
    .catch(error => {
      if (error.response) throw new Error(error.response.data.message)
      throw error
    })
}

function useProjects() {
  const queryKey = 'fetchProjectsAPI'

  const { isSuccess, data } = useQuery({
    queryKey,
    queryFn: fetchProjectsAPI,
    staleTime: Infinity,
  })

  return {
    data: data || [],
    isSuccess,
    queryKey,
  }
}

export default useProjects
