import CustomHeader from '../CustomHeader'
import InformationContent from '../InformationContent'
import content from '@/data/aboutUs'
const index = () => {
  return (
    <div id="about-us-component">
      <InformationContent title="Sobre a Juscred" contentArray={content} />
    </div>
  )
}
export default index
