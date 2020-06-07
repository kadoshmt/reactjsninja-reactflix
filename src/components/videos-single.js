'use strict'

import React from 'react'
import styled from 'styled-components'

const VideosSingle = ({ id, title }) => (
  <Container>
    <Title>{title}</Title>
    <Iframe width='800' height='460' src={`https://www.youtube.com/embed/${id}`} frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen />
  </Container>
)

const Container = styled.div`
  background-color: #191919;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  padding: 20px 0;
`

const Iframe = styled.iframe`
  border: 0;
  box-shadow: 0 0 20px black;
  width: 100%;
`

const Title = styled.h2`
  font-size: 22px;
  color: #999;
  padding-left: 20px;
`

export default VideosSingle
