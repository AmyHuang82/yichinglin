import { useState } from 'react'
import { Image, Button, Table } from 'antd'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import DraggableBodyRow from 'components/Common/DraggableBodyRow'
import { Container, Row } from '../Admin.style'
import UploadModal from './UploadModal'
import Delete from './Delete'
import useRows from './useRows'

function Illustration() {
  const [rows, moveRow, canDrag] = useRows()
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
        <DndProvider backend={HTML5Backend}>
          <Table
            rowKey="id"
            dataSource={rows}
            pagination={false}
            scroll={{ y: '60vh' }}
            onRow={(_, index) => ({
              index,
              moveRow: canDrag ? moveRow : () => {},
            })}
            components={{
              body: {
                row: DraggableBodyRow,
              },
            }}
            columns={[
              {
                title: '排序',
                key: 'index',
                render: (_, __, index) => index + 1,
              },
              {
                title: '圖片預覽',
                key: 'preview',
                render: ({ name, src }) => (
                  <Image alt={name} src={src} height={50} />
                ),
              },
              { title: '檔案名稱', dataIndex: 'name' },
              { title: '描述', dataIndex: 'description' },
              {
                title: '尺寸（寬 x 高）',
                key: 'size',
                render: ({ width, height }) => `${width} x ${height}`,
              },
              {
                title: '操作',
                key: 'action',
                render: illustration => <Delete {...illustration} />,
              },
            ]}
          />
        </DndProvider>
      </Container>
      {modalVisible && (
        <UploadModal closeModal={() => setModalVisible(false)} />
      )}
    </>
  )
}

export default Illustration
