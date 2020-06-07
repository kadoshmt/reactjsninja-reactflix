'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { registerVideo } from 'reducers/videos/action-creators'
import { closeRegisterVideo } from 'reducers/ui/action-creators'
import styled from 'styled-components'

const RegisterVideo = ({ onSubmit, onCloseRegisterVideo }) => (
  <Form onSubmit={onSubmit}>
    <h2>Cadastrar vídeo</h2>

    <label htmlFor='id'>Id do vídeo:</label>
    <Input type='text' name='id' id='id' />

    <label htmlFor='title'>Título do vídeo:</label>
    <Input type='text' name='title' id='title' />

    <SubmitButton type='submit'>Cadastrar</SubmitButton>
    <ButtonClose type='button' onClick={onCloseRegisterVideo}>&times;</ButtonClose>
  </Form>
)

const Form = styled.form`
  padding: 20px;
  position: relative;
`

const Input = styled.input`
  color: #fff;

  :focus {
    border-color: red !important;
  }
`

const ButtonClose = styled.button`
  background-color: red;
  border-color: red;
  border-radius: 50%;
  font-size: 20px;
  margin: 0;
  width: 28px;
  height: 28px;
  padding: 0;
  line-height: 1;
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 3px 0 0 1px;
`

const SubmitButton = styled.button`
  background-color: red;
  border-color: red;
`

const mapDispatchToProps = (dispatch) => ({
  onSubmit: async (e) => {
    e.preventDefault()
    e.persist()

    const {
      id: { value: id },
      title: { value: title }
    } = e.target

    await dispatch(registerVideo({ id, title }))
    e.target.reset()
    e.target[0].focus()
  },

  onCloseRegisterVideo: () => dispatch(closeRegisterVideo())
})

export default connect(null, mapDispatchToProps)(RegisterVideo)
