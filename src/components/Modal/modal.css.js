import styled from "styled-components"

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
  background-color: pink;
  padding: 20px;
  border: 1px solid #888;
  width: 30%;
  height: fit-content;
  color: white;
  margin-bottom: 20px;
  &:hover {
    box-shadow: 1px 2px 10px purple;
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
