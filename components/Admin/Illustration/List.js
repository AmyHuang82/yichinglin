import { Button, Table } from 'antd'
import useIllustration from 'components/api/useIllustration'
import { Row } from '../Admin.style'

function List() {
  const { data } = useIllustration()

  return (
    <>
      <Row>
        <h2>Illustration 列表</h2>
        <Button type="primary">+ 新增作品</Button>
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
    </>
  )
}

export default List
