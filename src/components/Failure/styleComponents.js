import styled from 'styled-components'

export const FailureContainer = styled.div`
  display: flex;
  background-color: ${props => (props.isDark ? '#fff' : '#020202')};
  color: ${props => (props.isDark ? '#181818' : '#fff')};
  flex-direction: column;
  align-items:center;
  justify-content:center;
  width:100%;
  height:90vh;
  }
`
export const FailureImage = styled.img`
  height: 200px;
  width: 250px;
`
