import axios from 'utils/axiosUtils'
import { useMutation } from 'react-query'

function deleteProjectAPI({ id }) {
  return axios.delete(`/api/projects/${id}`).catch(error => {
    if (error.response) throw new Error(error.response.data.message)
    throw error
  })
}

function useDeleteIllustration() {
  const { mutate: submit, isLoading } = useMutation(deleteProjectAPI)
  return { submit, isLoading }
}
export default useDeleteIllustration
