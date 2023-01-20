import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  height: 10vh;
  width: 100%;
  background-color: ${props => (props.isDark ? '#fff' : '#181818')};
  align-items: center;
  justify-content: space-between;
`
export const RowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Profile = styled.img`
  height: 35px;
  width: 40px;
  margin-right: 1vw;
`

export const BgBtn = styled.button`
  border: none;
  font-size: 30px;
  background-color: transparent;
  color: ${props => (props.isDark ? '#181818' : '#fff')};
`

export const NxtWatch = styled.img`
  height: 30px;
`

export const HeadContainer = styled.nav`
  background-color: ${props => (props.isDark ? '#fff' : '#020202')};
  color: ${props => (props.isDark ? '#020202' : '#fff')};
  display: flex;
  align-items: center;
  height: 10vh;
  justify-content: space-between;
  width: 100%;
`
export const HeaderItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ButtonBg = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  margin-right: 10px;
  color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  font-size: 25px;
`
export const Logout = styled.button`
  margin-right: 2vw;
`

export const Cancel = styled.button`
  margin-right: 3vw;
  height: 40px;
  width: 100px;
  border-radius: 8px;
`

export const LogoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  background-color: #fff;
  width: 50vw;
  align-items: center;
  justify-content: center;
`
export const Para = styled.p`
  color: ${props => (props.isDark ? '#fff' : '#181818')};
`

export const ConfirmBtn = styled.button`
  background-color: #3b82f6;
  padding: 5px;
  border: none;
  height: 40px;
  width: 100px;
  border-radius: 8px;
`
