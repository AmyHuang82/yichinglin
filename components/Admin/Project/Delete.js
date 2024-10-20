import { useQueryClient } from 'react-query'
import { Modal, message, Button } from 'antd'
import useProjects from 'components/api/project/useProjects'
import useDeleteProject from 'components/api/project/useDeleteProject'

function Delete({ id, title }) {
  const queryClient = useQueryClient()
  const { queryKey } = useProjects()
  const { submit } = useDeleteProject()

  function deleteIllustration(id) {
    submit(
      { id },
      {
        onSuccess: () => {
          queryClient.setQueryData(queryKey, oldData =>
            oldData.filter(data => data.id !== id)
          )

          message.success('刪除成功')
        },
        onError: () => {
          message.error('刪除失敗')
        },
      }
    )
  }

  function confirm({ id, title }) {
    return () => {
      Modal.confirm({
        centered: true,
        title: '你確認要刪除這個專案嗎？',
        content: title,
        cancelText: '取消',
        okText: '刪除',
        onOk: () => deleteIllustration(id, title),
      })
    }
  }

  return (
    <Button danger onClick={confirm({ id, title })}>
      刪除
    </Button>
  )
}

export default Delete
