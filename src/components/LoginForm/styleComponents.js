import styled from 'styled-components'

export const BgCon = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDark ? '#181818' : '#fff')};
  color: ${props => (props.isDark ? '#fff' : '#181818')};
`

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
  height: 70%;
  background-color: ${props => (props.isDark ? '#323232' : '#f9f9f9')};
  color: ${props => (props.isDark ? '#fff' : '#181818')};
  border-radius: 8px;

  padding: 0px 4vw 0px 4vw;
  justify-content: center;
`

export const ColContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const RowContainer = styled.div`
  display: flex;
`
export const LoginButton = styled.button`
  background-color: #3b82f6;
  width: 100%;
  margin-top: 1vh;
  padding: 10px;
  border: none;
  color: #ffffff;
`
export const Error = styled.p`
  color: #ff0b37;
  font-size: 18px;
`
export const NxtLogin = styled.img`
  width: 40%;
  height: 40px;
  align-self: center;
`
