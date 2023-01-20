import {Component} from 'react'

import Cookies from 'js-cookie'

import ReactPlayer from 'react-player'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'

import {BiListPlus} from 'react-icons/bi'

import {
  RowOrder,
  RowC,
  CriLogo,
  ColDir,
  VideoItemCon,
  LikedOrNot,
  DisLiked,
  IsSavedNot,
} from './styleComponents'
import {ButtonBg} from '../Header/styleComponents'
import {
  RowJust,
  HomeContainer,
  RowContainer,
  VideosContainer,
} from '../Home/styleComponents'

import Header from '../Header'
import NavBar from '../NavBar'

class VideoPlay extends Component {
  state = {videoPlayList: [], isLiked: false, isDisliked: false, isSaved: false}

  componentDidMount() {
    this.getVideoItem()
  }

  onLiked = () => {
    this.setState({isLiked: true, isDisliked: false})
  }

  onDisLiked = () => {
    this.setState({isLiked: false, isDisliked: true})
  }

  onSave = () => {
    this.setState(prev => ({isSaved: !prev.isSaved}))
  }

  onRemove = () => {
    this.setState(prev => ({isSaved: !prev.isSaved}))
  }

  getVideoItem = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = `https://apis.ccbp.in/videos/${id}`
    const JWTToken = Cookies.get('jwt_token')

    const options = {
      headers: {
        Authorization: `Bearer ${JWTToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)

    //  console.log(response.json())

    if (response.ok === true) {
      const updateData = await response.json()

      const videoItemList = await {
        id: updateData.video_details.id,
        title: updateData.video_details.title,
        videoUrl: updateData.video_details.video_url,
        thumbnailUrl: updateData.video_details.thumbnail_url,
        name: updateData.video_details.channel.name,
        profileImageUrl: updateData.video_details.channel.profile_image_url,
        subscriberCount: updateData.video_details.channel.subscriber_count,
        viewCount: updateData.video_details.view_count,
        publishedAt: updateData.video_details.published_at,
        description: updateData.video_details.description,
      }

      this.setState({videoPlayList: videoItemList})
    }
  }

  renderVideoPlay = () => {
    const {videoPlayList, isSaved, isLiked, isDisliked} = this.state

    const {
      title,
      id,
      videoUrl,
      name,
      profileImageUrl,
      subscriberCount,
      viewCount,
      publishedAt,
      description,
    } = videoPlayList
    return (
      <VideoItemCon>
        <ReactPlayer
          url={videoUrl}
          controls="controls"
          width="100%"
          loop="true"
          autoplay="autoplay"
          muted
          type="video/mp4"
        />
        <p>{title}</p>
        <RowOrder id={id}>
          <RowJust>
            <p>{viewCount} views </p>
            <p> {publishedAt}</p>
          </RowJust>
          <RowC>
            <RowC>
              <ButtonBg type="button" onClick={this.onLiked} value={isLiked}>
                <LikedOrNot isLiked={isLiked}>
                  <AiOutlineLike />
                </LikedOrNot>
              </ButtonBg>
              <LikedOrNot isLiked={isLiked} onClick={this.onLiked}>
                Like
              </LikedOrNot>
            </RowC>
            <RowC>
              <ButtonBg
                type="button"
                className="btn-icon"
                onClick={this.onDisLiked}
                value={isDisliked}
              >
                <DisLiked isDisliked={isDisliked}>
                  <AiOutlineDislike />
                </DisLiked>
              </ButtonBg>

              <DisLiked isDisliked={isDisliked} onClick={this.onDisLiked}>
                Dislike
              </DisLiked>
            </RowC>
            <RowC>
              <ButtonBg
                type="button"
                className="btn-icon"
                onClick={isSaved ? this.onRemove : this.onSave}
              >
                <IsSavedNot isSaved={isSaved}>
                  <BiListPlus />
                </IsSavedNot>
              </ButtonBg>
              <IsSavedNot isSaved={isSaved}>
                {isSaved ? 'Saved' : 'Save'}
              </IsSavedNot>
            </RowC>
          </RowC>
        </RowOrder>
        <hr />
        <RowC>
          <CriLogo src={profileImageUrl} alt="profile" />
          <ColDir>
            <div>
              <p>{name}</p>
              <p>{subscriberCount} subscribers</p>
            </div>

            <p>{description}</p>
          </ColDir>
        </RowC>
      </VideoItemCon>
    )
  }

  render() {
    return (
      <HomeContainer>
        <Header />

        <RowContainer>
          <NavBar />

          <VideosContainer>{this.renderVideoPlay()}</VideosContainer>
        </RowContainer>
      </HomeContainer>
    )
  }
}

export default VideoPlay
