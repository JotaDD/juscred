import Image from 'next/image'
import TextContent from './TextContent'
import Title from '../commons/Title'
const index = () => {
  return (
    <div
      id="about-us-component"
      className="w-screen flex flex-col items-center bg-white px-12 md:px-24  md:pb-24"
    >
      <Title title="Sobre a Juscred" className="md:mb-10" />
      <div className=" flex justify-between md:justify-center w-full  items-center lg:gap-4 xl:gap-6">
        <div className="hidden lg:block max-w-[28rem] lg:w-[60%] lg:h-[35rem]">
          <Image
            className="hidden lg:block object-cover w-[400px] h-[550px]"
            src="/doc.png"
            alt="document image"
            width="380"
            height="1"
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
