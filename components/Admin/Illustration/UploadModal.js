import { useState } from 'react'
import { Modal, Upload } from 'antd'
import { InboxOutlined } from '@ant-design/icons'

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

  return (
    <Modal
      visible
      centered
      cancelText="取消"
      okText="新增"
      closable={false}
      onCancel={closeModal}
    >
      <Dragger
        multiple
        accept=".jpg, .jpeg, .png, .gif"
        listType="picture"
        fileList={images.map(({ imageFile }) => imageFile)}
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
