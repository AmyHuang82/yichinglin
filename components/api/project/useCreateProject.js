import axios from 'utils/axiosUtils'
import { useMutation } from 'react-query'

function createProjectAPI(data) {
  return axios
    .post('/api/projects', data)
    .then(response => response.data)
    .catch(error => {
      if (error.response) throw new Error(error.response.data)
      throw error
    })
}

function useCreateProject() {
  const { mutate: submit, isLoading } = useMutation(createProjectAPI)
  return { submit, isLoading }
}
export default useCreateProject
