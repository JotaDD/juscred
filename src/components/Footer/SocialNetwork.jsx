import Link from 'next/link'
import Facebook from './icons/Facebook'
import Instagram from './icons/Instagram'
import WhatsApp from './icons/WhatsApp'

function SocialNetwork() {
  return (
    <div className="flex lg:mx-10 flex-col w-full mt-10 lg:mt-0 justify-center items-center gap-3">
      <div className="flex flex-col justify-center items-center gap-1">
        <h4 className="text-jc-dark-blue font-bold opacity-85 text-xl">
          Nossas Redes Sociais
        </h4>
        <div className="flex w-full  justify-evenly items-center ">
          <Link
            href="https://www.instagram.com/juscred.oficial"
            className="hover:opacity-85 focus:opacity-70"
          >
            <Instagram />
          </Link>
          <Link
            href="https://wa.me/+5518996901111/"
            className="hover:opacity-85 focus:opacity-70"
          >
            <WhatsApp />
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=61557035920625&mibextid=LQQJ4d"
            className="hover:opacity-85 focus:opacity-70"
          >
            <Facebook />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SocialNetwork
