import Link from 'next/link'
import Image from 'next/image'

function NavBar() {
  return (
    <div className="flex justify-between items-center w-full max-w-[1600px] pb-8 pt-0">
      <Image
        className="w-44 md:w-52"
        src="/FullLogo.svg"
        alt="document image"
        width="350"
        height="1"
      />

      <ul className="hidden lg:flex gap-12">
        <li className="text-jc-light-yellow px-4 pt-4 pb-2 rounded-lg hover:bg-white hover:bg-opacity-10">
          <Link href="/">Quem somos</Link>
        </li>
        <li className="text-jc-light-yellow p-4 rounded-lg hover:bg-white hover:bg-opacity-10">
          <Link href="/">Como funciona</Link>
        </li>
        <li className="text-jc-light-yellow p-4 rounded-lg hover:bg-white hover:bg-opacity-10">
          <Link href="/">Fale conosco</Link>
        </li>
        <li className="text-jc-light-yellow p-4 rounded-lg hover:bg-white hover:bg-opacity-10">
          <Link href="/">Home</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
