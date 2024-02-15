import Image from 'next/image'
import TextContent from './TextContent'
const index = () => {
  return (
    <div
      id="how-works-component"
      className="w-screen bg-white py-6 px-12 md:px-24 pb-20"
    >
      <h1 className="text-jc-dark-blue m-auto text-xl text-center pb-16">
        Sobre a Juscred
      </h1>
      <div className="flex justify-around md:justify-center max-w-[1600px] m-auto items-center lg:gap-16 xl:gap-24">
        <div className="hidden lg:block max-w-[28rem] lg:w-[35%] lg:h-[35rem]">
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
