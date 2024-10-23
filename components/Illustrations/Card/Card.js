import Head from 'next/head'
import { useState } from 'react'
import CloudinaryImage from 'components/Common/CloudinaryImage'
import Modal from './Modal/Modal'
import { Wrapper, MAXIMUM_WIDTH } from './Card.style'

function Card({ data }) {
  const { src, name } = data

  const [open, setOpen] = useState(false)
  function toggleOpen() {
    setOpen(!open)
  }

  return (
    <>
      <Head>
        <link rel="prefetch" href={src} />
      </Head>
      <Wrapper onClick={toggleOpen}>
        <CloudinaryImage src={src} alt={name} width={MAXIMUM_WIDTH} />
      </Wrapper>
      {open && <Modal data={data} closeModal={toggleOpen} />}
    </>
  )
}

export default Card
