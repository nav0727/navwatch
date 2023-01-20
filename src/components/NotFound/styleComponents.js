import styled from 'styled-components'

export const NotImg = styled.img`
  height: 150px;
`
export const NotFoundContainer = styled.div`
  background-color: ${props => (props.isDark ? '#f0f0f0' : '#0f0f0f')};
  color: ${props => (props.isDark ? '#020202' : '#fff')};
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
`
export const HeadingNot = styled.h1`
  font-size: 20px;
  color: ${props => (props.isDark ? '#323232' : '#fff')};
`
