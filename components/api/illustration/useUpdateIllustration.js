import axios from 'utils/axiosUtils'
import { useMutation } from 'react-query'
import { CONTENT } from 'constants/updateFields'

function updateIllustrationAPI({ id, description }) {
  return axios
    .patch(`/api/illustration/${id}`, {
      updateField: CONTENT,
      description,
    })
    .catch(error => {
      if (error.response) throw new Error(error.response.data.message)
      throw error
    })
}

function useUpdateIllustration() {
  const { mutate: submit, isLoading } = useMutation(updateIllustrationAPI)
  return { submit, isLoading }
}
export default useUpdateIllustration
