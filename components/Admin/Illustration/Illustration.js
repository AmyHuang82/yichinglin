import { useState } from 'react'
import { Button, Table, Modal, message } from 'antd'
import { useQueryClient } from 'react-query'
import NewTabLink from 'components/Common/NewTabLink'
import useIllustration from 'components/api/useIllustration'
import useDeleteIllustration from 'components/api/useDeleteIllustration'
import { Container, Row, DeleteIcon } from '../Admin.style'
import UploadModal from './UploadModal'

function Illustration() {
  const { data, queryKey } = useIllustration()
  const [modalVisible, setModalVisible] = useState(false)

  const queryClient = useQueryClient()
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
    <>
      <Container>
        <Row>
          <h2>Illustration 列表</h2>
          <Button type="primary" onClick={() => setModalVisible(true)}>
            + 新增作品
          </Button>
        </Row>
        <Table
          rowKey="id"
          dataSource={data}
          pagination={false}
          scroll={{ y: '60vh' }}
          columns={[
            {
              title: '排序',
              key: 'index',
              render: (_, __, index) => index + 1,
            },
            { title: '名稱', dataIndex: 'name' },
            {
              title: '尺寸（寬 x 高）',
              key: 'size',
              render: ({ width, height }) => `${width} x ${height}`,
            },
            {
              title: '圖片連結',
              dataIndex: 'src',
              render: src => <NewTabLink href={src}>點擊查看</NewTabLink>,
            },
            {
              title: '操作',
              key: 'action',
              render: ({ id, name, src }) => (
                <DeleteIcon onClick={confirm({ id, name, src })} />
              ),
            },
          ]}
        />
      </Container>
      {modalVisible && (
        <UploadModal closeModal={() => setModalVisible(false)} />
      )}
    </>
  )
}

export default Illustration
