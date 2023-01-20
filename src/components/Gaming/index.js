import {Component} from 'react'
import Header from '../Header'
import NavBar from '../NavBar'

import {
  EmptyImage,
  EmptyListContainer,
  FailureContainer,
  FailureImage,
} from './styleComponents'
import {Paragraph} from '../NavBar/styleComponents'

import {HomeContainer, VideosContainer} from '../Home/styleComponents'
import NxtContext from '../../context/NxtContext'
import Failure from '../Failure'
import {RowContainer} from '../Header/styleComponents'

class Gaming extends Component {
  renderNoVideos = () => (
    <NxtContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <EmptyListContainer className="empty-list-container">
            <EmptyImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
              className="empty-image"
            />

            <h1>No Search results found</h1>
            <Paragraph isDark={isDark}>
              Try different key words or remove search filter
            </Paragraph>
            <button type="button">Retry</button>
          </EmptyListContainer>
        )
      }}
    </NxtContext.Consumer>
  )

  renderFailure = () => (
    <NxtContext>
      {value => {
        const {isDark} = value

        return (
          <FailureContainer isDark={isDark}>
            <FailureImage
              src={
                isDark
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
              }
              alt="failure"
            />
            <h1>Oops! Something Went Wrong</h1>
            <p>
              We are having some trouble to complete your request. Please try
              again.
            </p>
            <button type="button">Retry</button>
          </FailureContainer>
        )
      }}
    </NxtContext>
  )

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
                  <Failure />
                  {this.renderNoVideos()}
                </VideosContainer>
              </RowContainer>
            </HomeContainer>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default Gaming
