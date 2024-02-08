import faq from '@/data/faq'
const Faq = () => {
  return (
    <div>
      {faq.map((item, index) => (
        <details key={index}>
          <summary>
            {item.title}
            <button className="toggle-button" />
          </summary>
          <p>{item.description}</p>
        </details>
      ))}
    </div>
  )
}
export default Faq
