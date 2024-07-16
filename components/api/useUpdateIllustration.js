import axios from 'axios'
import { useMutation } from 'react-query'
import { DESCRIPTION } from 'constants/updateFields'

function updateIllustrationAPI({ id, description }) {
  return axios
    .patch(`/api/illustration/${id}`, {
      updateField: DESCRIPTION,
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
