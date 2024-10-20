import axios from 'utils/axiosUtils'
import { useMutation } from 'react-query'
import { serialize as objectToFormData } from 'object-to-formdata'

function createIllustrationAPI(data) {
  return axios({
    method: 'post',
    url: '/api/illustration',
    headers: { 'content-type': 'multipart/form-data' },
    data: objectToFormData(
      data.reduce((obj, value) => ({ ...obj, [value.order]: value }), {})
    ),
  })
    .then(response => response.data)
    .catch(error => {
      if (error.response) throw new Error(error.response.data.message)
      throw error
    })
}

function useCreateIllustration() {
  const { mutate: submit, isLoading } = useMutation(createIllustrationAPI)
  return { submit, isLoading }
}
export default useCreateIllustration
