import { Button, Form, Image, Input } from 'antd'
import HtmlEditor from './HtmlEditor'
import { FormFooter } from '../../Admin.style'

function ProjectForm({ initialValues, onClose, onSubmit, isLoading }) {
  return (
    <Form
      disabled={isLoading}
      layout="vertical"
      initialValues={initialValues}
      onFinish={onSubmit}
      validateMessages={{
        required: '此欄位為必填',
      }}
    >
      {initialValues ? (
        <Form.Item label="網址">
          <a href={`https://yichinglin.vercel.app/project/${initialValues.id}`}>
            https://yichinglin.vercel.app/project/{initialValues.id}
          </a>
        </Form.Item>
      ) : (
        <Form.Item
          label="網址（請小心命名建立後無法修改）"
          rules={[{ required: true }]}
          name="id"
        >
          <Input />
        </Form.Item>
      )}
      <Form.Item label="執行時間" rules={[{ required: true }]} name="date">
        <Input />
      </Form.Item>
      <Form.Item label="專案名稱" rules={[{ required: true }]} name="title">
        <Input />
      </Form.Item>
      <Form.Item
        label="專案描述"
        rules={[{ required: true }]}
        name="description"
      >
        <Input />
      </Form.Item>
      <Form.Item label="專案封面" rules={[{ required: true }]} name="cover">
        <Input />
      </Form.Item>
      <Form.Item shouldUpdate noStyle>
        {({ getFieldValue }) => (
          <Image width={200} src={getFieldValue('cover')} />
        )}
      </Form.Item>
      <Form.Item
        label="內頁封面"
        rules={[{ required: true }]}
        name={['contentCover', 'url']}
      >
        <Input />
      </Form.Item>
      <Form.Item shouldUpdate noStyle>
        {({ getFieldValue }) => (
          <Image width={200} src={getFieldValue(['contentCover', 'url'])} />
        )}
      </Form.Item>
      <Form.Item
        label="內頁封面標籤"
        rules={[{ required: true }]}
        name={['contentCover', 'label']}
      >
        <Input />
      </Form.Item>
      <Form.Item label="專案客戶" rules={[{ required: true }]} name="client">
        <Input />
      </Form.Item>
      <Form.Item label="專案內容" rules={[{ required: true }]} name="html">
        <HtmlEditor disabled={isLoading} />
      </Form.Item>
      <FormFooter>
        <Button onClick={onClose}>取消</Button>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          {initialValues ? '儲存' : '新增'}
        </Button>
      </FormFooter>
    </Form>
  )
}

export default ProjectForm
