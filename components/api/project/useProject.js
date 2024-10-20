import axios from 'utils/axiosUtils'
import { useQuery } from 'react-query'

function fetchProjectAPI(id) {
  return axios
    .get(`/api/projects/${id}`)
    .then(response => response.data)
    .catch(error => {
      if (error.response) throw new Error(error.response.data.message)
      throw error
    })
}

function useProject(id, isOpen) {
  const queryKey = ['fetchProjectAPI', id]

  const { isSuccess, data } = useQuery({
    queryKey,
    queryFn: () => fetchProjectAPI(id),
    staleTime: Infinity,
    enabled: isOpen,
  })

  return {
    data: data || [],
    isSuccess,
    queryKey,
  }
}

export default useProject
