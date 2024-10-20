import { useRef, useMemo } from 'react'
import dynamic from 'next/dynamic'
import styled from 'styled-components'
import { HTMLContainer } from 'components/Project/Content/Content.style'

const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false })

const Wrapper = styled(HTMLContainer)`
  padding-bottom: 50px;
`

const HtmlEditor = ({ disabled = false, ...props }) => {
  const joditRef = useRef(null)

  const config = useMemo(
    () => ({
      disabled,
      height: '100%',
      statusbar: false,
      toolbarAdaptive: false,
      askBeforePasteHTML: false,
      language: 'zh_tw',
      addNewLine: false,
      buttons: ['bold', '|', 'image', '|', 'undo', 'redo'],
      events: {
        afterInsertImage: node => {
          const figure = document.createElement('figure')
          const figcaption = document.createElement('figcaption')
          figcaption.textContent = node.alt || '圖片說明'

          const imgClone = node.cloneNode(true)
          figure.appendChild(imgClone)
          figure.appendChild(figcaption)

          node.parentNode.replaceChild(figure, node)
        },
      },
    }),
    [disabled]
  )

  return (
    <Wrapper>
      <JoditEditor ref={joditRef} config={config} {...props} />
    </Wrapper>
  )
}

export default HtmlEditor
