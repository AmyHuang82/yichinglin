import { useState } from 'react'
import { useQueryClient } from 'react-query'
import { Button, Drawer, Modal } from 'antd'
import useProjects from 'components/api/project/useProjects'
import useCreateProject from 'components/api/project/useCreateProject'
import ProjectForm from './Form/ProjectForm'

function New() {
  const [isOpen, setIsOpen] = useState(false)
  function onClose() {
    setIsOpen(false)
  }

  const queryClient = useQueryClient()
  const { queryKey, data } = useProjects()
  const { submit, isLoading } = useCreateProject()
  function onSubmit(values) {
    const startOrder = Math.max(...data.map(({ order }) => order))
    submit(
      { ...values, order: startOrder + 1 },
      {
        onSuccess: data => {
          queryClient.setQueryData(queryKey, oldData => [data, ...oldData])
          onClose()
        },
        onError: error => {
          Modal.error({
            centered: true,
            title: '錯誤',
            content: error.message || '發生錯誤',
          })
        },
      }
    )
  }

  return (
    <>
      <Button type="primary" onClick={() => setIsOpen(true)}>
        + 新增專案
      </Button>
      <Drawer
        title="新增專案"
        destroyOnClose
        width={800}
        onClose={onClose}
        visible={isOpen}
      >
        <ProjectForm
          onClose={onClose}
          onSubmit={onSubmit}
          isLoading={isLoading}
        />
      </Drawer>
    </>
  )
}

export default New
