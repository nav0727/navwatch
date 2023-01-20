import {Link} from 'react-router-dom'

import {Component} from 'react'

import {formatDistanceToNow} from 'date-fns'

import NxtContext from '../../context/NxtContext'
import {RowContainer} from '../Header/styleComponents'
import {ThumbImage} from '../VideoItem/styleComponents'
import {Paragraph} from '../NavBar/styleComponents'
import {ListItemContainer, Container, Row} from './styleComponents'

class TrendingItem extends Component {
  render() {
    const {trendingItem} = this.props
    const {id, title, thumbnailUrl, publishedAt, name, viewCount} = trendingItem

    const dateAgo = formatDistanceToNow(new Date(publishedAt))

    return (
      <NxtContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
              <ListItemContainer isDark={isDark}>
                <RowContainer>
                  <ThumbImage src={thumbnailUrl} alt="video thumbnail" />

                  <Container>
                    <Paragraph isDark={isDark}>{title}</Paragraph>
                    <Paragraph isDark={isDark}>{name}</Paragraph>
                    <Row>
                      <Paragraph isDark={isDark}>{viewCount} views</Paragraph>
                      <Paragraph isDark={isDark}>. {dateAgo} ago</Paragraph>
                    </Row>
                  </Container>
                </RowContainer>
              </ListItemContainer>
            </Link>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}
export default TrendingItem
