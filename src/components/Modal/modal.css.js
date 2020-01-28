import styled from "styled-components"
import cssVars from "../../theme/_variables"
import { Link } from "gatsby"

export const Linkage = styled(Link)`
  color: blue;
`

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  // height: 100%;
  overflow: auto;
`

export const ModalBody = styled.div`
background-image: radial-gradient(
  rgba(192, 254, 254, 0.7) 0%,
  rgba(255, 255, 256, 0.7) 60%
);
  padding: 20px;
  border: 1px solid white;
  width: 30%;
  height: fit-content;
  color: ${cssVars.txtGrn};
  margin-bottom: 20px;
  border-radius: 5px;
  &:hover {
    box-shadow: 1px 2px 10px white;
  }
`

export const CloseButton = styled.span`
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  &:hover,
  &:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`
