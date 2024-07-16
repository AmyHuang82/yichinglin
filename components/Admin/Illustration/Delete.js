import { useQueryClient } from 'react-query'
import { Modal, message, Button } from 'antd'
import NewTabLink from 'components/Common/NewTabLink'
import useIllustration from 'components/api/useIllustration'
import useDeleteIllustration from 'components/api/useDeleteIllustration'

function Delete({ id, name, src }) {
  const queryClient = useQueryClient()
  const { queryKey } = useIllustration()
  const { submit } = useDeleteIllustration()

  function deleteIllustration(id, name) {
    submit(
      { id, name },
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

  function confirm({ id, name, src }) {
    return () => {
      Modal.confirm({
        centered: true,
        title: '你確認要刪除這個圖片嗎？',
        content: <NewTabLink href={src}>{name}</NewTabLink>,
        cancelText: '取消',
        okText: '刪除',
        onOk: () => deleteIllustration(id, name),
      })
    }
  }

  return (
    <Button danger onClick={confirm({ id, name, src })}>
      刪除
    </Button>
  )
}

export default Delete
