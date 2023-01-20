import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {GrClose} from 'react-icons/gr'
import {BiSearch} from 'react-icons/bi'

import Header from '../Header'
import NavBar from '../NavBar'

import NxtContext from '../../context/NxtContext'
import {RowContainer, ButtonBg} from '../Header/styleComponents'

import {
  VideosContainer,
  InPutBar,
  UlCon,
  SearchContainer,
  HomeContainer,
  HomeWallPaper,
  RowJust,
  Button,
  NxtImg,
  LoaderContainer,
} from './styleComponents'
import VideoItem from '../VideoItem'

import {Paragraph} from '../NavBar/styleComponents'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    videosList: [],
    apiStatus: apiConstants.inProgress,
    searchInput: '',
    searchIp: '',
    hide: false,
  }

  componentDidMount() {
    this.getAllVideos()
  }

  onChangeSearch = event => {
    event.preventDefault()
    this.setState({searchIp: event.target.value})
  }
  // this.get.videos() not use function calling

  onSearchInput = () => {
    const {searchIp} = this.state
    this.setState({searchInput: searchIp})
    this.getAllVideos()
  }

  closeBtn = () => {
    this.setState({hide: true})
  }

  toggleTheme = () => {
    this.setState(prev => ({isDark: !prev.isDark}))
  }

  getAllVideos = async () => {
    // console.log('Hai naveen')
    // this.setState({apiStatus: apiConstants.inProgress})
    const {searchInput} = this.state
    const JWTToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`

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
        {videosList: updateVideos, apiStatus: apiConstants.success},
        this.getVideos,
      )
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  renderSuccess = () => {
    const {videosList} = this.state

    return (
      <div>
        {videosList.length > 0 ? (
          <UlCon>
            {videosList.map(each => (
              <VideoItem videoItem={each} key={each.id} />
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
          <div className="empty-list-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
              className="empty-image"
            />

            <h1>No Search results found</h1>
            <Paragraph isDark={isDark}>
              Try different key words or remove search filter
            </Paragraph>
            <button type="button">Retry</button>
          </div>
        )
      }}
    </NxtContext.Consumer>
  )

  renderFailure = () => (
    <NxtContext>
      {value => {
        const {isDark} = value

        return (
          <div>
            <img
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
          </div>
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
    const {hide} = this.state
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
                  <div>
                    <HomeWallPaper hide={hide} data-testid="banner">
                      <RowJust data-testid="close">
                        <NxtImg
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <ButtonBg
                          type="button"
                          onClick={this.closeBtn}
                          data-testid="close"
                        >
                          <GrClose />
                        </ButtonBg>
                      </RowJust>

                      <p>Buy Nxt watch Premium prepaid plans with UPI</p>
                      <Button type="button">GET IT NOW</Button>
                    </HomeWallPaper>

                    <SearchContainer isDark={isDark}>
                      <InPutBar
                        isDark={isDark}
                        type="search"
                        placeholder="Search"
                        onChange={this.onChangeSearch}
                      />
                      <button
                        type="button"
                        onClick={this.onSearchInput}
                        data-testid="searchButton"
                      >
                        <BiSearch className="search-icon" />
                      </button>
                    </SearchContainer>
                  </div>
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

export default Home
