import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import {
  noScroll,
  GlobalStyle,
  Container,
  Content,
  Image,
  Description,
  Close,
} from './Modal.style'

function Portal({ children }) {
  const containerRef = useRef(document.createElement('div'))
  const container = containerRef.current

  useEffect(() => {
    document.body.appendChild(container)
    document.body.classList.add(noScroll)
    return () => {
      document.body.removeChild(container)
      document.body.classList.remove(noScroll)
    }
  }, [])

  return createPortal(
    <>
      <GlobalStyle />
      {children}
    </>,
    container
  )
}

function Modal({ data: { name, src, description }, closeModal }) {
  const maskRef = useRef()

  function onMaskClick(e) {
    if (e.target === maskRef.current) {
      closeModal()
    }
  }

  const imageRef = useRef()
  const [imageWidth, setImageWidth] = useState(0)

  useEffect(() => {
    setImageWidth(imageRef.current.clientWidth)
  }, [])

  return (
    <Portal>
      <Container ref={maskRef} onClick={onMaskClick}>
        <Close onClick={closeModal} />
        <Content>
          <Image src={src} alt={name} ref={imageRef} />
          <Description style={{ width: imageWidth }}>{description}</Description>
        </Content>
      </Container>
    </Portal>
  )
}

export default Modal
