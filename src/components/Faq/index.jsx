import Title from './Title'
import Accordion from './Accordion'
import faq from '@/data/faq'

const Faq = () => {
  return (
    <div className="container flex flex-col px-8 justify-center items-center border">
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
