import axios from 'axios'
import { useMutation } from 'react-query'

function updateIllustrationOrderAPI({ draggedItem, exchangeTarget }) {
  return axios
    .patch(`/api/illustration/${draggedItem.id}`, {
      draggedItem,
      exchangeTarget,
    })
    .catch(error => {
      if (error.response) throw new Error(error.response.data.message)
      throw error
    })
}

function useUpdateIllustrationOrder() {
  const { mutate: submit, isLoading } = useMutation(updateIllustrationOrderAPI)
  return { submit, isLoading }
}
export default useUpdateIllustrationOrder
