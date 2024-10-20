import { useState } from 'react'
import { Modal, Upload, Button, message, Form, Input } from 'antd'
import { InboxOutlined } from '@ant-design/icons'
import { useQueryClient } from 'react-query'
import useIllustration from 'components/api/illustration/useIllustration'
import useCreateIllustration from 'components/api/illustration/useCreateIllustration'

const { Dragger } = Upload

function UploadModal({ closeModal }) {
  const [images, setImages] = useState([])

  function beforeUpload(file) {
    const overSize = file.size > 2000 * 1024

    if (overSize) {
      Modal.error({ centered: true, title: '檔案大小超過 2MB，請調整後再上傳' })
    }

    return !overSize
  }

  function onUpload({ file }) {
    const fileReader = new FileReader()

    fileReader.onloadend = e => {
      const imageFile = file
      imageFile.url = e.target.result

      const image = new Image()
      image.src = imageFile.url
      image.onload = () => {
        setImages(prevImages => [
          ...prevImages,
          {
            imageFile,
            name: imageFile.name,
            width: image.width,
            height: image.height,
            description: 'copyright © Yiching Lin',
          },
        ])
      }
    }

    fileReader.readAsDataURL(file)
  }

  function onRemove(file) {
    const index = images.map(image => image.imageFile).indexOf(file)
    const newImages = [...images]
    newImages.splice(index, 1)
    setImages(newImages)
  }

  const queryClient = useQueryClient()
  const { data, queryKey } = useIllustration()
  const { submit, isLoading } = useCreateIllustration()

  function onSubmit() {
    const submitData = images.map((image, index) => {
      const currentOrder = index + 1
      return {
        ...image,
        order: data[0] ? data[0].order + currentOrder : currentOrder,
      }
    })
    submit(submitData, {
      onSuccess: newData => {
        closeModal()
        queryClient.setQueryData(queryKey, oldData =>
          [...newData, ...oldData].sort((a, b) => b.order - a.order)
        )
        message.success('新增成功')
      },
      onError: () => {
        closeModal()
        message.error('新增失敗')
      },
    })
  }

  return (
    <Modal
      visible
      centered
      closable={false}
      maskClosable={!isLoading}
      onCancel={closeModal}
      footer={
        <>
          {!isLoading && <Button onClick={closeModal}>取消</Button>}
          <Button
            type="primary"
            disabled={
              images.length === 0 ||
              images.filter(image => image.description === '').length > 0
            }
            loading={isLoading}
            onClick={onSubmit}
          >
            新增
          </Button>
        </>
      }
    >
      <Dragger
        disabled={isLoading}
        multiple
        accept=".jpg, .jpeg, .png, .gif"
        listType="picture"
        fileList={images.map(({ imageFile }) => imageFile)}
        itemRender={(originNode, file, fileList) => {
          const index = fileList.indexOf(file)
          const itemDescription = images[index].description
          const isItemDescriptionEmpty = itemDescription === ''
          return (
            <div>
              {originNode}
              <Form.Item
                validateStatus={isItemDescriptionEmpty ? 'error' : ''}
                help={isItemDescriptionEmpty ? '此欄位為必填' : ''}
                style={{ marginBottom: 0 }}
              >
                <Input
                  disabled={isLoading}
                  placeholder="請輸入描述"
                  value={itemDescription}
                  onChange={e => {
                    const newImages = [...images]
                    newImages[index].description = e.target.value
                    setImages(newImages)
                  }}
                />
              </Form.Item>
            </div>
          )
        }}
        beforeUpload={beforeUpload}
        customRequest={onUpload}
        onRemove={onRemove}
      >
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">點擊或拖拉圖片到此區域上傳</p>
        <p className="ant-upload-hint">
          支援單張與多張同時上傳，多張順序越前排序越後
          <br />
          如有順序性請一張一張上傳，無順序性則可一次上傳
        </p>
      </Dragger>
    </Modal>
  )
}

export default UploadModal
