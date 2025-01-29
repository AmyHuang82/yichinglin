import { Image, Table, Space } from 'antd'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import DraggableBodyRow from 'components/Common/DraggableBodyRow'
import { Container, Row } from '../Admin.style'
import useRows from './useRows'
import New from './New'
import Edit from './Edit'
import Delete from './Delete'

function Project() {
  const [rows, moveRow, canDrag] = useRows()

  return (
    <>
      <Container>
        <Row>
          <h2>Project 列表</h2>
          <New />
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
                title: '顯示順序',
                key: 'index',
                render: (_, __, index) => index + 1,
              },
              { title: '資料庫序號', dataIndex: 'order' },
              { title: '專案名稱', dataIndex: 'title' },
              {
                title: '封面預覽',
                key: 'preview',
                render: ({ title, cover }) => (
                  <Image alt={title} src={cover} height={50} />
                ),
              },
              { title: '描述', dataIndex: 'description' },
              {
                title: '網址',
                dataIndex: 'id',
                render: id => (
                  <a href={`https://yichinglin.vercel.app/project/${id}`}>
                    https://yichinglin.vercel.app/project/{id}
                  </a>
                ),
              },
              {
                title: '操作',
                key: 'action',
                render: project => (
                  <Space>
                    <Edit {...project} />
                    <Delete {...project} />
                  </Space>
                ),
              },
            ]}
          />
        </DndProvider>
      </Container>
    </>
  )
}

export default Project
