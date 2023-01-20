import styled from 'styled-components'

export const Paragraph = styled.p`
  color: ${props => (props.isDark ? '#020202' : '#f9f9f9')};
  padding: 0px;
  font-family: 'Roboto';
  margin: 0;
  margin-bottom: 5px;
`

export const VideoListContainer = styled.li`
  display: flex;
  flex-direction: column;
  margin: 10px;
  height: 300px;
  width: 300px;
  flex-wrap: wrap;
  list-style-type: none;
`

export const ThumbImage = styled.img`
  width: 300px;
  height: 140px;
`
