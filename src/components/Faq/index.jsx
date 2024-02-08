import Title from '../Contact/Title'
import Accordion from './Accordion'
import faq from '@/data/faq'

const Faq = () => {
  return (
    <div className="container flex flex-col justify-center">
      <Title />
      {faq.map((item, index) => (
        <Accordion
          key={index}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  )
}
export default Faq
