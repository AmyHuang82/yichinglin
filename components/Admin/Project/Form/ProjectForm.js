import { Button, Form, Image, Input, Space } from 'antd'
import { CloseOutlined } from '@ant-design/icons'
import HtmlEditor from './HtmlEditor'
import { FormFooter } from '../../Admin.style'

function ProjectForm({ initialValues, onClose, onSubmit, isLoading }) {
  const isNew = !initialValues

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
      {isNew ? (
        <Form.Item
          label="網址（請小心命名建立後無法修改）"
          rules={[{ required: true }]}
          name="id"
        >
          <Input />
        </Form.Item>
      ) : (
        <Form.Item label="網址">
          <a href={`https://yichinglin.vercel.app/project/${initialValues.id}`}>
            https://yichinglin.vercel.app/project/{initialValues.id}
          </a>
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
      <Form.Item label="合作夥伴">
        <Form.List
          initialValue={isNew ? [{ label: '', value: '' }] : undefined}
          rules={[{ required: true }]}
          name="collaborators"
        >
          {(fields, { add, remove }) => (
            <>
              {fields.map(field => (
                <Space key={field.key}>
                  <Form.Item
                    label="標題"
                    rules={[{ required: true }]}
                    name={[field.name, 'label']}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="內容"
                    rules={[{ required: true }]}
                    name={[field.name, 'value']}
                  >
                    <Input />
                  </Form.Item>
                  {fields.length > 1 && (
                    <CloseOutlined onClick={() => remove(field.name)} />
                  )}
                </Space>
              ))}
              <br />
              <Button onClick={() => add()}>新增</Button>
            </>
          )}
        </Form.List>
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
