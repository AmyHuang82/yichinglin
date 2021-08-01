import { useState } from 'react'
import { Button, Table } from 'antd'
import useIllustration from 'components/api/useIllustration'
import { Container, Row } from '../Admin.style'
import UploadModal from './UploadModal'

function Illustration() {
  const { data } = useIllustration()
  const [modalVisible, setModalVisible] = useState(false)

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
              render: src => (
                <a target="_blank" rel="noreferrer" href={src}>
                  點擊查看
                </a>
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
