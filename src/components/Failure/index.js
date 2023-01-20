import NxtContext from '../../context/NxtContext'
import {FailureContainer, FailureImage} from './styleComponents'

const Failure = () => (
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

export default Failure
