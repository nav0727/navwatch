/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const RowOrder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 1vw;
`

export const RowC = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1vw;
`
export const CriLogo = styled.img`
  height: 40px;
  align-self: flex-start;
  justify-content: center;
  margin: 2vw;
`
export const ColDir = styled.div`
  display: flex;
  flex-direction: column;
`
export const VideoItemCon = styled.div`
  padding: 2vw;
  padding-bottom: 10vh;
`

export const LikedOrNot = styled.p`
  color: ${props => (props.isLiked ? '#00306e' : '#fff')};
  font-size: 20px;
  font-family: 'Roboto';
`

export const DisLiked = styled.p`
  color: ${props => (props.isDisliked ? '#00306e' : '#fff')};
  font-size: 20px;
  font-family: 'Roboto';
`

export const IsSavedNot = styled.p`
  color: ${props => (props.isSaved ? '#00306e' : '#fff')};
  font-size: 20px;
  font-family: 'Roboto';
`
