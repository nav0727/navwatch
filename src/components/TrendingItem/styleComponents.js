/* eslint-disable import/prefer-default-export */

import styled from 'styled-components'

export const TrendingContainer = styled.div`
  background-color: ${props => (props.isDark ? '#bfbfbf' : '#020202')};
  color: ${props => (props.isDark ? '#020202' : '#fff')};
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  font-size: 16px;
  @media screen and (max-width: 5677px) {
    font-size: 12px;
  }
`
export const TrendingBody = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-y: scroll;
  width: 100%;
  background-color: ${props => (props.isDark ? '#fff' : '#020202')};
  color: ${props => (props.isDark ? '#181818' : '#fff')};
  height: 87vh;
  flex-direction: column;
`

export const TrendItem = styled.div`
  display: flex;
  justify-content: space-around;
`
export const List = styled.li`
  display: flex;
  margin: 20px;
`

export const Thumb = styled.img`
  height: 150px;
  width: 250px;
  margin-right: 15px;
`

export const ListItemContainer = styled.div`
  margin-bottom: 3vh;
  display: flex;
  width: 76vw;
  flex-wrap: wrap;
  justify-content: space-between;

  color: ${props => (props.isDark ? '#fff' : '#181818')};
`
export const Container = styled.div`
  margin-left: 2vh;
`
export const Row = styled.div`
  display: flex;
`
