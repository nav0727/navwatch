/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const VideosContainer = styled.nav`
  background-color: ${props => (props.isDark ? '#f0f0f0' : '#181818')};
  color: ${props => (props.isDark ? '#020202' : '#f4f4f4')};
  width: 100%;
  height: 87vh;
  overflow-y: scroll;
  @media screen and (min-width: 5677px) {
    font-size: 12px;
  }
`
export const InPutBar = styled.input`
  background-color: ${props => (props.isDark ? '#f0f0f0' : '#020202')};
  color: ${props => (props.isDark ? '#181818' : '#f4f4f4')};
  height: 15px;
  font-weight: bold;
  outline: none;
  border: none;
  width: 90%;
`

export const UlCon = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
`

export const SearchContainer = styled.div`
  border: 1px solid ${props => (props.isDark ? '#000000' : '#f0f0f0')};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  margin: 10px;
`

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
  background-color: ${props => (props.isDark ? '#181818' : '#f0f0f0')};
`

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const BodyContainer = styled.div`
  display: flex;
  overflow-y: scroll;
  height: 88vh;
  flex-direction: column;
  background-color: #020202;
  color: #fff;
`
export const HomeWallPaper = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  color: #cbd5e1;
  padding-bottom: 10px;
  padding-left: 20px;
  background-size: cover;
  display: ${props => (props.hide ? 'none' : 'flex')};
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
`

export const RowJust = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Button = styled.button`
  width: 100px;
  padding: 5px;
`

export const NxtImg = styled.img`
  height: 30px;
`

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`
