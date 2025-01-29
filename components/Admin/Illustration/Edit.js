import { useState } from 'react'
import { useQueryClient } from 'react-query'
import { Button, Drawer, Form, Image, Input, InputNumber, message } from 'antd'
import isEqual from 'lodash/isEqual'
import useIllustration from 'components/api/illustration/useIllustration'
import useUpdateIllustration from 'components/api/illustration/useUpdateIllustration'
import { FormFooter } from '../Admin.style'

function EditForm({ id, order, name, description, src, onClose }) {
  const [form] = Form.useForm()

  const queryClient = useQueryClient()
  const { queryKey } = useIllustration()
  const { submit, isLoading } = useUpdateIllustration()

  function onSubmit() {
    const editData = form.getFieldsValue()

    if (isEqual(editData, { order, description })) {
      onClose()
    } else {
      submit(
        { id, order: editData.order, description: editData.description },
        {
          onSuccess: ({ order, description }) => {
            queryClient.setQueryData(queryKey, oldData =>
              oldData
                .map(illustration =>
                  illustration.id === id
                    ? { ...illustration, order, description }
                    : illustration
                )
                .sort((a, b) => b.order - a.order)
            )
            onClose()
            message.success('更新成功')
          },
          onError: () => {
            message.error('更新失敗')
          },
        }
      )
    }
  }

  return (
    <Form
      disabled={isLoading}
      layout="vertical"
      form={form}
      initialValues={{ description, order }}
      onFinish={onSubmit}
      validateMessages={{
        required: '此欄位為必填',
      }}
    >
      <Form.Item label="檔案名稱">{name}</Form.Item>
      <Form.Item label="資料庫序號" rules={[{ required: true }]} name="order">
        <InputNumber />
      </Form.Item>
      <Form.Item label="描述" rules={[{ required: true }]} name="description">
        <Input />
      </Form.Item>
      <Form.Item label="圖片預覽">
        <Image src={src} />
      </Form.Item>
      <FormFooter>
        <Button onClick={onClose}>取消</Button>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          儲存
        </Button>
      </FormFooter>
    </Form>
  )
}

function Edit(props) {
  const [isOpen, setIsOpen] = useState(false)

  function onClose() {
    setIsOpen(false)
  }

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>編輯</Button>
      <Drawer destroyOnClose width={500} visible={isOpen} onClose={onClose}>
        <EditForm {...props} onClose={onClose} />
      </Drawer>
    </>
  )
}

export default Edit
