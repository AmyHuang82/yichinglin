import axios from 'utils/axiosUtils'
import { useMutation } from 'react-query'
import { ORDER } from 'constants/updateFields'

function updateProjectOrderAPI({ draggedItem, exchangeTarget }) {
  return axios
    .patch(`/api/projects/${draggedItem.id}`, {
      updateField: ORDER,
      draggedItem,
      exchangeTarget,
    })
    .catch(error => {
      if (error.response) throw new Error(error.response.data.message)
      throw error
    })
}

function useUpdateProjectOrder() {
  const { mutate: submit, isLoading } = useMutation(updateProjectOrderAPI)
  return { submit, isLoading }
}
export default useUpdateProjectOrder
