import { Image, Button, Table } from 'antd'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import DraggableBodyRow from 'components/Common/DraggableBodyRow'
import { Container, Row } from '../Admin.style'
import useRows from './useRows'

function Project() {
  const [rows, moveRow, canDrag] = useRows()

  return (
    <>
      <Container>
        <Row>
          <h2>Project 列表</h2>
          <Button type="primary">+ 新增專案</Button>
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
                title: '封面預覽',
                key: 'preview',
                render: ({ title, cover }) => (
                  <Image alt={title} src={cover} height={50} />
                ),
              },
              { title: '描述', dataIndex: 'description' },
            ]}
          />
        </DndProvider>
      </Container>
    </>
  )
}

export default Project
