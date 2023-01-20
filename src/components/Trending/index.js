import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import NavBar from '../NavBar'

import NxtContext from '../../context/NxtContext'
import {RowContainer} from '../Header/styleComponents'

import {
  VideosContainer,
  UlCon,
  HomeContainer,
  LoaderContainer,
} from '../Home/styleComponents'
import {
  FailureContainer,
  FailureImage,
  EmptyImage,
  EmptyListContainer,
} from '../Gaming/styleComponents'
import {Paragraph} from '../NavBar/styleComponents'
import TrendingItem from '../TrendingItem'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    trendList: [],
    apiStatus: apiConstants.inProgress,
  }

  componentDidMount() {
    this.getTrends()
  }

  toggleTheme = () => {
    this.setState(prev => ({isDark: !prev.isDark}))
  }

  getTrends = async () => {
    // console.log('Hai naveen')
    // this.setState({apiStatus: apiConstants.inProgress})
    const JWTToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/trending`

    const options = {
      headers: {
        Authorization: `Bearer ${JWTToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()

      // console.log(data)
      const updateVideos = await data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        name: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
        viewCount: each.view_count,
        publishedAt: each.published_at,
      }))
      // console.log(updateVideos)
      this.setState(
        {trendList: updateVideos, apiStatus: apiConstants.success},
        this.getTrends,
      )
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  renderSuccess = () => {
    const {trendList} = this.state

    return (
      <div>
        {trendList.length > 0 ? (
          <UlCon>
            {trendList.map(each => (
              <TrendingItem trendingItem={each} key={each.id} />
            ))}
          </UlCon>
        ) : (
          this.renderNoVideos()
        )}
      </div>
    )
  }

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

  renderLoading = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#fa2" height="50" width="50" />
    </LoaderContainer>
  )

  renderVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.success:
        return this.renderSuccess()
      case apiConstants.failure:
        return this.renderFailure()
      case apiConstants.inProgress:
        return this.renderLoading()
      default:
        return null
    }
  }

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
                  {this.renderVideos()}
                </VideosContainer>
              </RowContainer>
            </HomeContainer>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default Trending
