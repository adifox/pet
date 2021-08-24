// Components
import ImageWrapper from '../image-wrapper'

const Logo = ({ width, height }) => {
  return (
    <ImageWrapper
      src={'/images/pet-logo.png'}
      alt={'petexcellenttreatment logo'}
      width={width}
      height={height}
    />
  )
}

export default Logo
