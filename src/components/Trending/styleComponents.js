/* eslint-disable import/prefer-default-export */

import styled from 'styled-components'

export const TrendingContainer = styled.div`
  background-color: ${props => (props.isDark ? '#f9f9f9' : '#0f0f0f')};
  color: ${props => (props.isDark ? '#020202' : '#cccccc')};
  display: flex;
  flex-direction: column;
  height: 95vh;
  width: 95vw;
  font-size: 16px;
  @media screen and (max-width: 5677px) {
    font-size: 12px;
  }
`
export const TrendingBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
  width: 76vw;
  background-color: ${props => (props.isDark ? '#fff' : '#020202')};
  color: ${props => (props.isDark ? '#181818' : '#fff')};
  height: 87vh;
  flex-direction: column;
`
export const Circle = styled.div`
  height: 50px;
  width: 50px;
  color: #ff0000;
  display: flex;
  margin-right: 1vw;
  flex-direction: column;
  align-items: center;
  font-size: 25px;
  justify-content: center;
  background-color: #323232;
  border-radius: 30px;
`
export const GamingHead = styled.h1`
  color: ${props => (props.isDark ? '#181818' : '#f0f0f0')};
  font-size: 23px;
  font-weight: bold;
  font-family: 'Roboto';
`
export const Game = styled.div`
  display: flex;
  align-items: center;
  padding-left: 5vw;
  background-color: ${props => (props.isDark ? '#f0f0f0' : '#181818')};
`
export const TrendBody = styled.div`
  width: 84vw;
  height: 85vh;
  display: flex;
  flex-direction: column;
`
