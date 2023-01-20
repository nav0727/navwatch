import {Link} from 'react-router-dom'

import {Component} from 'react'

import {formatDistanceToNow} from 'date-fns'

// import {formatDistance} from 'date-fns'

import NxtContext from '../../context/NxtContext'
import {Paragraph, VideoListContainer, ThumbImage} from './styleComponents'
import {Profile, RowContainer} from '../Header/styleComponents'
import {RowJust} from '../Home/styleComponents'

class VideoItem extends Component {
  render() {
    const {videoItem} = this.props
    const {
      id,
      title,
      thumbnailUrl,
      publishedAt,
      name,
      profileImageUrl,
      viewCount,
    } = videoItem

    const dateAgo = formatDistanceToNow(new Date(publishedAt))

    return (
      <NxtContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
              <VideoListContainer>
                <div>
                  <ThumbImage src={thumbnailUrl} alt="video thumbnail" />
                  <RowJust>
                    <Profile src={profileImageUrl} alt="channel logo" />
                    <div>
                      <Paragraph isDark={isDark}>{title}</Paragraph>
                      <Paragraph isDark={isDark}>{name}</Paragraph>
                      <RowContainer className="row">
                        <Paragraph isDark={isDark}>{viewCount} views</Paragraph>
                        <Paragraph isDark={isDark}>. {dateAgo} ago</Paragraph>
                      </RowContainer>
                    </div>
                  </RowJust>
                </div>
              </VideoListContainer>
            </Link>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}
export default VideoItem
