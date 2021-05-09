import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { EventEmitter } from 'fbemitter'
import {
  noScroll,
  GlobalStyle,
  Container,
  Content,
  CopyRight,
  Close,
} from './Modal.style'

function Portal({ children }) {
  const className = 'root-portal'
  const element = 'div'
  const container = document.createElement(element)
  container.classList.add(className)

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

function Modal({ data: { name, src, width, height }, closeModal }) {
  const resizeRate = 0.65
  const maskRef = useRef()

  useEffect(() => {
    const emitter = new EventEmitter()

    emitter.addListener('closeModal', e => {
      if (e.target === maskRef.current) {
        closeModal()
      }
    })
    maskRef.current.addEventListener('click', e => {
      emitter.emit('closeModal', e)
    })

    return () => {
      emitter.removeAllListeners()
    }
  }, [])

  return (
    <Portal>
      <Container ref={maskRef}>
        <Close onClick={closeModal} />
        <Content>
          <Image
            src={src}
            alt={name}
            width={width * resizeRate}
            height={height * resizeRate}
          />
          <CopyRight>copyright &copy; Yiching Lin</CopyRight>
        </Content>
      </Container>
    </Portal>
  )
}

export default Modal
