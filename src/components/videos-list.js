'use strict'

import React from 'react'
import styled from 'styled-components'
import Play from './play'
import { connect } from 'react-redux'
import { selectVideoSingle } from 'reducers/video-single/action-creators'

const VideosList = ({ videos, handleClick }) => (
  <Container>
    {Object.keys(videos).map((id) => (
      <Video key={id}>
        <VideoLink href='#' onClick={handleClick(id)}>
          <VideoThumb
            style={{background: `#222 url('https://img.youtube.com/vi/${id}/0.jpg') no-repeat center`}}
          >
            <PlayStyled />
          </VideoThumb>
          <VideoTitle>{videos[id].title}</VideoTitle>
        </VideoLink>
      </Video>
    ))}
  </Container>
)

const PlayStyled = styled(Play)`
  width: 50px;
  height: 50px;
  fill: white;
  transition: all .15s ease-in-out;
  -webkit-filter: drop-shadow( 2px 2px 2px rgba(0, 0, 0, .7));
  filter: drop-shadow( 2px 2px 2px rgba(0, 0, 0, .7));
`

const Video = styled.section`    
  &:hover ${PlayStyled} {
    transform: scale(1.5);
    cursor: pointer;
  }
`

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  & ${Video} {
    flex: 1 1 300px;  
    margin: 0 5px 5px;
  }
`

const VideoLink = styled.a`
  color: inherit;
  :hover {
    color: red;
  }
`

const VideoThumb = styled.div`
  align-items: center;
  border: 1px solid #999;
  display: flex;
  height: 220px;
  justify-content: center;
`

const VideoTitle = styled.h2`
  font-size: 18px;
  padding: 10px 0;
`

const mapStateToProps = (state) => ({
  videos: state.videos
})

const mapDispatchToProps = (dispatch) => ({
  handleClick: (id) => (e) => {
    e.preventDefault()
    dispatch(selectVideoSingle(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(VideosList)
