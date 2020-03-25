import React, { useEffect, useState } from "react"
import ReactModal from "react-modal"
import styled from "styled-components"

const CloseModal = styled.button`
  width: 100px;
  padding: 10px;
  background-color: magenta;
  font-size: 20px;
`

ReactModal.setAppElement("#___gatsby")

const AgeModal = () => {
  const [showModal, setShowModal] = useState(false)
  useEffect(() => setShowModal(false), [])

  return (
    <ReactModal isOpen={showModal} contentLabel="Are You Even Of Age???!!">
      <CloseModal onClick={() => setShowModal(false)}> Close Me</CloseModal>
    </ReactModal>
  )
}

export default AgeModal
