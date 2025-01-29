import { useState } from 'react'
import { useQueryClient } from 'react-query'
import { Button, Drawer, Modal } from 'antd'
import useProjects from 'components/api/project/useProjects'
import useProject from 'components/api/project/useProject'
import useUpdateProject from 'components/api/project/useUpdateProject'
import ProjectForm from './Form/ProjectForm'

function getUpdateValues(initialValues, values) {
  return Object.entries(values).reduce((acc, [key, value]) => {
    if (initialValues[key] !== value) acc[key] = value
    return acc
  }, {})
}

function EditContent({ id, onClose }) {
  const queryClient = useQueryClient()
  const { queryKey } = useProjects()
  const {
    isSuccess,
    data: initialValues,
    queryKey: projectQueryKey,
  } = useProject(id, true)
  const { submit, isLoading } = useUpdateProject()

  function onSubmit(values) {
    const updateValues = getUpdateValues(initialValues, values)
    submit(
      { id, content: updateValues },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(projectQueryKey)
          queryClient.setQueryData(queryKey, oldData =>
            oldData
              .map(project =>
                project.id === id ? { ...project, ...updateValues } : project
              )
              .sort((a, b) => b.order - a.order)
          )
          onClose()
        },
        onError: error => {
          Modal.error({
            title: '錯誤',
            content: error.message || '發生錯誤',
          })
        },
      }
    )
  }

  if (!isSuccess) return null
  return (
    <ProjectForm
      initialValues={initialValues}
      onClose={onClose}
      onSubmit={onSubmit}
      isLoading={isLoading}
    />
  )
}

function Edit({ id }) {
  const [isOpen, setIsOpen] = useState(false)
  function onClose() {
    setIsOpen(false)
  }

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>編輯</Button>
      <Drawer
        title="編輯專案"
        destroyOnClose
        width={800}
        onClose={onClose}
        visible={isOpen}
      >
        <EditContent id={id} onClose={onClose} />
      </Drawer>
    </>
  )
}

export default Edit
