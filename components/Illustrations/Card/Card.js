import { useState } from 'react'
import Image from 'next/image'
import Modal from './Modal/Modal'
import { Wrapper } from './Card.style'

const MAXIMUM_WIDTH = 370

function Card({ data }) {
  const { name, src, width, height } = data
  const calcHeight = MAXIMUM_WIDTH * (height / width)

  const [open, setOpen] = useState(false)
  function toggleOpen() {
    setOpen(!open)
  }

  return (
    <>
      <Wrapper onClick={toggleOpen}>
        <Image
          key={name}
          src={src}
          alt={name}
          width={MAXIMUM_WIDTH}
          height={calcHeight}
        />
      </Wrapper>
      {open && <Modal data={data} toggleOpen={toggleOpen} />}
    </>
  )
}

export default Card
