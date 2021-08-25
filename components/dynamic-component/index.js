import Teaser from '../teaser'
import Chart from '../charts'
import SimpleContent from '../ui-components/simple-content'
import HeroTitle from '../ui-components/hero-title'
import SimpleText from '../ui-components/simple-text'
import DoubleImage from '../ui-components/double-image'
import FullImageBox from '../ui-components/full-image-box'

const Components = {
  teaser: Teaser,
  simpleContent: SimpleContent,
  heroTitle: HeroTitle,
  chartDisplay: Chart,
  simpleText: SimpleText,
  doubleImage: DoubleImage,
  fullImageBox: FullImageBox,
}

const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component]
    return <Component blok={blok} />
  }
  return null
}

export default DynamicComponent
