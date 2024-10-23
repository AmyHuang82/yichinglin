import axios from 'utils/axiosUtils'
import { useMutation } from 'react-query'

function deleteIllustrationAPI({ id, src }) {
  return axios
    .delete(`/api/illustration/${id}`, { params: { src } })
    .catch(error => {
      if (error.response) throw new Error(error.response.data.message)
      throw error
    })
}

function useDeleteIllustration() {
  const { mutate: submit, isLoading } = useMutation(deleteIllustrationAPI)
  return { submit, isLoading }
}
export default useDeleteIllustration
