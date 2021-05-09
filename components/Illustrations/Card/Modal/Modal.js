import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { noScroll, GlobalStyle, Container } from './Modal.style'

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

function Modal({ data, toggleOpen }) {
  return (
    <Portal>
      <Container>
        {data.name}
        <button type="button" onClick={toggleOpen}>
          關掉
        </button>
      </Container>
    </Portal>
  )
}

export default Modal
