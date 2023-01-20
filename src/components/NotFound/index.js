import {Component} from 'react'

import Header from '../Header'
import NavBar from '../NavBar'

import NxtContext from '../../context/NxtContext'
import {RowContainer} from '../Header/styleComponents'

import {VideosContainer, HomeContainer} from '../Home/styleComponents'
import {NotImg, HeadingNot, NotFoundContainer} from './styleComponents'
import {Paragraph} from '../NavBar/styleComponents'

class NotFound extends Component {
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
                  <NotFoundContainer isDark={isDark}>
                    <NotImg
                      src={
                        isDark
                          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                      }
                      alt="not found"
                    />

                    <HeadingNot isDark={isDark}>Page Not Found</HeadingNot>
                    <Paragraph isDark={isDark}>
                      We are sorry, the page you requested could not be found.
                    </Paragraph>
                  </NotFoundContainer>
                </VideosContainer>
              </RowContainer>
            </HomeContainer>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default NotFound
