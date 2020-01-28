import React, { useEffect} from "react"
import { createPortal } from "react-dom"
import { ModalWrapper, ModalBody, CloseButton } from "./modal.css"
// import Optout from "../OptOut/optout"
import { Link } from "gatsby"
// Creates a portal outside the DOM hierarchy
const Portal = ({ children }) => {
  const modalRoot = document.getElementById("___gatsby")
  // A div with id=modal-root in the index.html
  const element = document.createElement("div") // Create a div element which will be mounted within modal-root

  useEffect(() => {
    modalRoot.appendChild(element)

    // cleanup method to remove the appended child
    return function cleanup() {
      modalRoot.removeChild(element)
    }
  })

  return createPortal(children, element)
}

// A modal component which will be used by other components / pages
const Modal = ({ children, toggle, open }) => {
  const isSSR = typeof document === "undefined"

  return (
    <>
      {!isSSR && (
        <Portal>
          {(open) && (
            <ModalWrapper>
              {open && (
                <ModalBody onClick={event => event.stopPropagation()}>
                  <CloseButton onClick={toggle}>&times;</CloseButton>
                  {children}
                </ModalBody>
              )}
             
            </ModalWrapper>
          )}
        </Portal>
      )}
    </>
  )
}

export default Modal
