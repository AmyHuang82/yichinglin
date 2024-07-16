import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import {
  noScroll,
  GlobalStyle,
  Container,
  Content,
  ImageWrapper,
  ImageLoading,
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
  const isImageLoading = !imageWidth

  useEffect(() => {
    function calculateImageWidth() {
      setImageWidth(imageRef.current.getBoundingClientRect().width)
    }

    imageRef.current.onload = calculateImageWidth
  }, [])

  return (
    <Portal>
      <Container ref={maskRef} onClick={onMaskClick}>
        <Close onClick={closeModal} />
        <Content>
          <ImageWrapper>
            {isImageLoading && <ImageLoading />}
            <Image
              src={src}
              alt={name}
              ref={imageRef}
              style={{ opacity: isImageLoading ? 0 : 1 }}
            />
          </ImageWrapper>
          <Description imageWidth={imageWidth}>{description}</Description>
        </Content>
      </Container>
    </Portal>
  )
}

export default Modal
