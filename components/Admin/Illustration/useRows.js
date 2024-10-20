import { useQueryClient } from 'react-query'
import { message } from 'antd'
import useDerivedState from 'hooks/useDerivedState'
import useIllustration from 'components/api/illustration/useIllustration'
import useUpdateIllustrationOrder from 'components/api/illustration/useUpdateIllustrationOrder'

function useRows() {
  const queryClient = useQueryClient()

  const { queryKey, data } = useIllustration()
  const [rows, setRows] = useDerivedState(data)

  const { submit, isLoading } = useUpdateIllustrationOrder()
  const canDrag = !isLoading

  function moveRow(dragIndex, hoverIndex) {
    const newRows = [...rows]

    const draggedItem = rows[dragIndex]
    const draggedItemOrder = rows[dragIndex].order
    const exchangeTarget = rows[hoverIndex]
    const exchangeTargetOrder = rows[hoverIndex].order

    newRows[dragIndex] = exchangeTarget
    newRows[dragIndex].order = draggedItemOrder
    newRows[hoverIndex] = draggedItem
    newRows[hoverIndex].order = exchangeTargetOrder

    setRows(newRows)

    submit(
      {
        draggedItem: {
          id: draggedItem.id,
          newOrder: exchangeTargetOrder,
        },
        exchangeTarget: {
          id: exchangeTarget.id,
          newOrder: draggedItemOrder,
        },
      },
      {
        onSuccess: () => {
          queryClient.setQueryData(queryKey, newRows)
          message.success('更新順序成功')
        },
        onError: () => {
          message.error('更新順序失敗')
        },
      }
    )
  }

  return [rows, moveRow, canDrag]
}

export default useRows
