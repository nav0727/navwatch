import styled from 'styled-components'

export const LeftNavContainer = styled.nav`
  background-color: ${props => (props.isDark ? '#fff' : '#0f0f0f')};
  color: ${props => (props.isDark ? '#020202' : '#fff')};
  width: 16%;
  display: flex;
  padding-right: 30px;
  height: 87vh;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 5677px) {
    width: 150px;
  }
`

export const Paragraph = styled.p`
  color: ${props => (props.isDark ? '#181818' : '#fff')};
  padding: 0px;
  font-family: 'Roboto';
  margin: 0;
  margin-bottom: 5px;
  font-weight: 500;
`

export const ListItem = styled.li`
  list-style-type: none;
  color: ${props => (props.activeId ? '#fff' : '#181818')};

  display: flex;
  align-items: center;
`

export const MiniApps = styled.img`
  height: 25px;
  margin: 5px;
`
export const Support = styled.div`
  margin-left: 15px;
`
