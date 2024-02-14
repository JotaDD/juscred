import Title from '../commons/Title'
import Accordion from './Accordion'
import AccordionWrapper from './AccordionWrapper'
import faq from '@/data/faq'

const Faq = () => {
  return (
    <div
      id="faq-component"
      className="container flex flex-col gap-2 mb-12 px-8 justify-center items-center"
    >
      <Title />
      <AccordionWrapper>
        {faq.map((item, index) => (
          <Accordion
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </AccordionWrapper>
    </div>
  )
}
export default Faq
