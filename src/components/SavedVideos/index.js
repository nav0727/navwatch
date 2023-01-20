import {Component} from 'react'
import Header from '../Header'
import NavBar from '../NavBar'

import {HomeContainer, VideosContainer} from '../Home/styleComponents'
import NxtContext from '../../context/NxtContext'
import {RowContainer} from '../Header/styleComponents'

class SavedVideos extends Component {
  render() {
    return (
      <NxtContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <HomeContainer isDark={isDark}>
              <Header />
              <RowContainer>
                <NavBar />
                <VideosContainer isDark={isDark}>
                  <h1>Saved Videos</h1>
                </VideosContainer>
              </RowContainer>
            </HomeContainer>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default SavedVideos
