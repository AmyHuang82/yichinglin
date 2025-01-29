import axios from 'utils/axiosUtils'
import { useMutation } from 'react-query'
import { CONTENT } from 'constants/updateFields'

function updateProjectAPI({ id, content }) {
  return axios
    .patch(`/api/projects/${id}`, {
      updateField: CONTENT,
      content,
    })
    .then(response => response.data)
    .catch(error => {
      if (error.response) throw new Error(error.response.data.message)
      throw error
    })
}

function useUpdateProject() {
  const { mutate: submit, isLoading } = useMutation(updateProjectAPI)
  return { submit, isLoading }
}
export default useUpdateProject
