import Faq from '@/components/Faq'
import Contact from '@/components/Contact'
import HowWorks from '@/components/HowWorks'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full items-center justify-between">
      <Header />
      <HowWorks />
      <Faq />
      <Contact />
      <Footer />
    </main>
  )
}
