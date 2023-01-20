import {Component} from 'react'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'

import {SiYoutubegaming} from 'react-icons/si'

import Header from '../Header'
import NavBar from '../NavBar'

import NxtContext from '../../context/NxtContext'
import {RowContainer} from '../Header/styleComponents'

import {UlCon, LoaderContainer, HomeContainer} from '../Home/styleComponents'
import {
  FailureContainer,
  FailureImage,
  EmptyImage,
  EmptyListContainer,
  Game,
  Circle,
  GamingHead,
  GameImage,
  Head,
  List,
  Para,
} from './styleComponents'
import {Paragraph} from '../NavBar/styleComponents'
import {TrendingBody} from '../TrendingItem/styleComponents'
import {TrendBody} from '../Trending/styleComponents'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    gamesList: [],
    status: apiConstants.inProgress,
  }

  componentDidMount() {
    this.getGames()
  }

  getGames = async () => {
    // console.log('Hai naveen')
    // this.setState({apiStatus: apiConstants.inProgress})
    const JWTToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/gaming`

    const options = {
      headers: {
        Authorization: `Bearer ${JWTToken}`,
      },
      method: 'GET',
    }
    const responseData = await fetch(url, options)
    if (responseData.ok === true) {
      const resData = await responseData.json()

      // console.log(data)
      const updateVideos = await resData.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnail: each.thumbnail_url,
        viewCount: each.view_count,
      }))
      // console.log(updateVideos)
      this.setState(
        {gamesList: updateVideos, status: apiConstants.success},
        this.getTrends,
      )
    } else {
      this.setState({status: apiConstants.failure})
    }
  }

  renderSuccess = () => {
    const {gamesList} = this.state
    const GamingItem = props => {
      const {gameItem} = props
      const {thumbnail, id, title, viewCount} = gameItem
      return (
        <NxtContext.Consumer>
          {value => {
            const {isDark} = value
            return (
              <List>
                <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
                  <GameImage src={thumbnail} alt={title} />
                  <Head isDark={isDark}>{title}</Head>
                  <Para isDark={isDark}>{viewCount} watching worldwide </Para>
                </Link>
              </List>
            )
          }}
        </NxtContext.Consumer>
      )
    }

    return (
      <div>
        {gamesList.length > 0 ? (
          <UlCon>
            {gamesList.map(each => (
              <GamingItem gameItem={each} key={each.id} />
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
      <Loader type="ThreeDots" color="#08537f" height="50" width="50" />
    </LoaderContainer>
  )

  renderGameData = () => {
    const {status} = this.state
    switch (status) {
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

                <TrendBody isDark={isDark}>
                  <Game isDark={isDark}>
                    <Circle>
                      <SiYoutubegaming />
                    </Circle>
                    <GamingHead isDark={isDark}>Gaming</GamingHead>
                  </Game>
                  <TrendingBody isDark={isDark} className="body">
                    {this.renderGameData()}
                  </TrendingBody>
                </TrendBody>
              </RowContainer>
            </HomeContainer>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default Gaming
