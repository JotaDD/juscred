import Image from 'next/image'
import TextContent from './TextContent'
import Title from '../commons/Title'
const index = () => {
  return (
    <div
      id="about-us-component"
      className="w-full flex flex-col items-center bg-white px-12 md:px-24  md:pb-24"
    >
      <Title title="Sobre a Juscred" className="md:mb-10" />
      <div className=" flex  w-full  justify-around md:justify-evenly max-w-[1200px]  items-center lg:gap-16 xl:gap-24">
        <div className="hidden  lg:block max-w-[28rem] lg:w-[35%] lg:h-[35rem]">
          <Image
            className="hidden lg:block object-cover w-[400px] h-[550px]"
            src="/aboutUs.png"
            alt="document image"
            width="614"
            height="708"
          />
        </div>

        <div>
          <TextContent />
        </div>
      </div>
    </div>
  )
}
export default index
