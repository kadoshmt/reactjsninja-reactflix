'use strict'

import React from 'react'
import styled from 'styled-components'
import { headerHeight } from 'utils/constants'
import { connect } from 'react-redux'
import { openRegisterVideo } from 'reducers/ui/action-creators'

const MainHeader = ({ onOpenRegisterVideo }) => (
  <Header>
    <HeaderTitle>Reactflix</HeaderTitle>
    <RegisterButton onClick={onOpenRegisterVideo}>Cadastrar Vídeo </RegisterButton>
  </Header>
)

const Header = styled.header`
  height: ${headerHeight};
  background-color: #111;
  color: red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`

const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 2.4em;
`

const RegisterButton = styled.button`
  background-color: red;
  border-color: red;
  margin: 0;
`

const mapDispatchToProps = (dispatch) => ({
  onOpenRegisterVideo: () => dispatch(openRegisterVideo())
})

export default connect(null, mapDispatchToProps)(MainHeader)
