'use strict'

import React from 'react'
import styled from 'styled-components'
import { footerHeight } from 'utils/constants'

const MainFooter = () => (
  <Footer>
    Copyright &copy; 2020
  </Footer>

)

const Footer = styled.footer`
  height: ${footerHeight};
  background: #111;
  color: #888;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`

export default MainFooter
